// ═══════════════════════════════════════════════════════
//  CONSTANTS & STATE
// ═══════════════════════════════════════════════════════

const NETWORKS = {
  stellar: { name: 'Stellar 메인넷', horizon: 'https://horizon.stellar.org',    native: 'XLM' },
  pi:      { name: 'Pi DEX',         horizon: 'https://api.mainnet.minepi.com', native: 'PI'  },
};

const STEPS = ['네트워크', '전략', '풀 선택', '파라미터', '실행', '결과'];

const state = {
  step:     1,
  network:  null,
  strategy: null,
  pool:     null,
  params:   {},
  result:   null,
  pools:    [],
};

let poolSearchQuery = '';
let activeChart = null;

// ═══════════════════════════════════════════════════════
//  HORIZON API
// ═══════════════════════════════════════════════════════

function horizonBase() { return NETWORKS[state.network].horizon; }

function apiFetch(url) {
  if (state.network === 'pi') {
    return fetch(`/api/proxy?url=${encodeURIComponent(url)}`);
  }
  return fetch(url);
}

async function fetchPools() {
  const base = horizonBase();
  let r = await apiFetch(`${base}/liquidity_pools?reserves_asset_type=native&limit=100&order=asc`);
  if (r.ok) {
    const records = (await r.json())._embedded?.records || [];
    if (records.length > 0) return records;
  }
  r = await apiFetch(`${base}/liquidity_pools?limit=100&order=asc`);
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return (await r.json())._embedded?.records || [];
}

function hasNative(pool) {
  return pool.reserves?.some(r => r.asset === 'native');
}

async function fetchTradesForPair(pool, total, onProgress) {
  const r0 = pool.reserves[0];
  const r1 = pool.reserves[1];
  const isNative0 = r0.asset === 'native';
  const other = isNative0 ? r1 : r0;
  const [code, issuer] = other.asset.split(':');

  const params = new URLSearchParams({
    base_asset_type:      'native',
    counter_asset_type:   code.length <= 4 ? 'credit_alphanum4' : 'credit_alphanum12',
    counter_asset_code:   code,
    counter_asset_issuer: issuer || '',
    limit: '200', order: 'desc',
  });
  return paginate(`${horizonBase()}/trades`, params, total, onProgress);
}

async function fetchTradesForPool(pool, total, onProgress) {
  const params = new URLSearchParams({ limit: '200', order: 'desc' });
  return paginate(`${horizonBase()}/liquidity_pools/${pool.id}/trades`, params, total, onProgress);
}

async function paginate(url, params, total, onProgress) {
  const pages = Math.ceil(total / 200);
  const all = [];
  let cursor = null;

  for (let i = 0; i < pages; i++) {
    if (cursor) params.set('cursor', cursor);
    const r = await apiFetch(`${url}?${params}`);
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    const records = (await r.json())._embedded?.records || [];
    if (!records.length) break;
    all.push(...records);
    cursor = records.at(-1).paging_token;
    onProgress(all.length, total);
    await sleep(150);
  }
  return all.reverse();
}

function parseTrades(records) {
  return records.map(r => {
    try {
      const price = parseFloat(r.price.n) / parseFloat(r.price.d);
      return { ts: r.ledger_close_time, price, baseAmt: parseFloat(r.base_amount), counterAmt: parseFloat(r.counter_amount) };
    } catch { return null; }
  }).filter(Boolean);
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ═══════════════════════════════════════════════════════
//  BACKTEST: 오더북 마켓메이킹
// ═══════════════════════════════════════════════════════

function runOrderbookBacktest(trades, p) {
  const halfSpread = p.spreadPct / 100 / 2;
  const fee        = p.feePct / 100;
  const mid0       = trades[0].price;

  let usdc   = p.totalUsdc * (p.splitRatio / 100);
  let native = (p.totalUsdc * (1 - p.splitRatio / 100)) / mid0;
  let profit = 0, fees = 0, fills = 0;
  let stopped = false, stopReason = '';
  const log = [], snapshots = [], priceWin = [];

  for (let i = 0; i < trades.length; i++) {
    if (stopped) break;
    const mid = trades[i].price;
    priceWin.push(mid);
    if (priceWin.length > p.surgeTicks) priceWin.shift();

    if (priceWin.length >= 2) {
      const chg = Math.abs(priceWin.at(-1) - priceWin[0]) / priceWin[0] * 100;
      if (chg >= p.surgePct) {
        stopped = true; stopReason = `급변 감지 (${chg.toFixed(2)}%)`;
        log.push({ type: 'stop', msg: stopReason }); break;
      }
    }

    const total    = usdc + native * mid;
    const nativeRatio = (native * mid) / total * 100;

    if (nativeRatio > p.stopRatio) {
      stopped = true; stopReason = `네이티브 재고 ${nativeRatio.toFixed(1)}% 초과`;
      log.push({ type: 'stop', msg: stopReason }); break;
    }
    if (nativeRatio < (100 - p.stopRatio)) {
      stopped = true; stopReason = `USDC 재고 ${(100-nativeRatio).toFixed(1)}% 초과`;
      log.push({ type: 'stop', msg: stopReason }); break;
    }

    if (i > 0) {
      const priceUp  = mid >= trades[i-1].price;
      const orderAmt = total * (p.orderSizePct / 100);

      for (let layer = 1; layer <= p.layers; layer++) {
        const bid      = mid * (1 - halfSpread * layer);
        const ask      = mid * (1 + halfSpread * layer);
        const layerAmt = orderAmt / p.layers;

        if (!priceUp && mid <= bid && usdc >= layerAmt) {
          const bought = layerAmt / bid;
          const f      = layerAmt * fee;
          usdc   -= (layerAmt + f); native += bought; fees += f; fills++;
          log.push({ type: 'buy', msg: `↓ 매수 ${bought.toFixed(2)} @ ${bid.toFixed(5)} (L${layer})` });
        }

        if (priceUp && mid >= ask && native * mid >= layerAmt) {
          const sold = layerAmt / ask;
          const f    = layerAmt * fee;
          usdc += (layerAmt - f); native -= sold; fees += f; fills++;
          profit += layerAmt * (p.spreadPct / 100 / p.layers) - f;
          log.push({ type: 'sell', msg: `↑ 매도 ${sold.toFixed(2)} @ ${ask.toFixed(5)} (L${layer})` });
        }
      }
    }

    if (i % Math.max(1, Math.floor(trades.length / 100)) === 0) {
      const tv = usdc + native * mid;
      snapshots.push({ i, price: mid, totalVal: tv, profit });
    }
  }

  const finalPx  = trades.at(-1).price;
  const totalNow = usdc + native * finalPx;
  const pnl      = totalNow - p.totalUsdc;

  return {
    type: 'orderbook',
    ticks: trades.length, fills,
    priceStart: trades[0].price, priceEnd: finalPx,
    priceChg: (finalPx - trades[0].price) / trades[0].price * 100,
    totalStart: p.totalUsdc, totalNow,
    pnl, roi: pnl / p.totalUsdc * 100,
    spreadProfit: profit, fees,
    inventoryPnl: pnl - profit,
    stopped, stopReason, log, snapshots,
  };
}

// ═══════════════════════════════════════════════════════
//  BACKTEST: AMM 유동성 공급
// ═══════════════════════════════════════════════════════

function runAMMBacktest(pool, trades, p) {
  const r0 = pool.reserves[0], r1 = pool.reserves[1];
  const isNative0 = r0.asset === 'native';
  const nativeAmt = parseFloat(isNative0 ? r0.amount : r1.amount);
  const usdcAmt   = parseFloat(isNative0 ? r1.amount : r0.amount);

  const p0         = trades[0].price;
  const poolVal    = usdcAmt + nativeAmt * p0;
  const lpShare    = p.depositUsdc / poolVal;

  let totalFees = 0, exitReason = null, exitTick = trades.length - 1;
  const snapshots = [];

  for (let i = 0; i < trades.length; i++) {
    const t = trades[i];
    totalFees += t.counterAmt * 0.003 * lpShare;

    const k  = t.price / p0;
    const il = (2 * Math.sqrt(k) / (1 + k) - 1) * 100;

    if (!exitReason) {
      if (Math.abs(il) >= p.maxILPct) {
        exitReason = `IL ${il.toFixed(2)}% 도달`; exitTick = i; break;
      }
      const curRoi = (totalFees / p.depositUsdc * 100) + il;
      if (curRoi >= p.targetRoiPct) {
        exitReason = `목표 수익률 ${curRoi.toFixed(2)}% 달성`; exitTick = i; break;
      }
    }

    if (i % Math.max(1, Math.floor(trades.length / 100)) === 0) {
      const k2    = t.price / p0;
      const il2   = (2 * Math.sqrt(k2) / (1 + k2) - 1) * 100;
      const lpVal = p.depositUsdc * (2 * Math.sqrt(k2) / (1 + k2)) + totalFees;
      const hodl  = p.depositUsdc * (0.5 + 0.5 * k2);
      snapshots.push({ i, price: t.price, il: il2, lpVal, hodlVal: hodl });
    }
  }

  const finalPx  = trades[exitTick].price;
  const k        = finalPx / p0;
  const il       = (2 * Math.sqrt(k) / (1 + k) - 1) * 100;
  const lpFinal  = p.depositUsdc * (2 * Math.sqrt(k) / (1 + k)) + totalFees;
  const hodlFinal = p.depositUsdc * (0.5 + 0.5 * k);
  const pnl      = lpFinal - p.depositUsdc;

  return {
    type: 'amm',
    ticks: exitTick + 1,
    priceStart: p0, priceEnd: finalPx,
    priceChg: (finalPx - p0) / p0 * 100,
    totalStart: p.depositUsdc, lpFinal, hodlFinal,
    pnl, roi: pnl / p.depositUsdc * 100,
    feeIncome: totalFees, il,
    lpShare: lpShare * 100,
    exitReason, snapshots,
  };
}

// ═══════════════════════════════════════════════════════
//  HELPERS
// ═══════════════════════════════════════════════════════

function assetLabel(a) {
  return a === 'native' ? (NETWORKS[state.network]?.native || 'XLM') : a.split(':')[0];
}

function poolLabel(pool) {
  if (!pool?.reserves?.length) return pool?.id || '';
  return pool.reserves.map(r => assetLabel(r.asset)).join(' / ');
}

function poolLiquidity(pool) {
  return pool.reserves?.reduce((s, r) => s + parseFloat(r.amount), 0) || 0;
}

function fmt(n, d = 2) {
  return n.toLocaleString('ko-KR', { minimumFractionDigits: d, maximumFractionDigits: d });
}

function fmtPct(n) {
  const cls  = n > 0 ? 'positive' : n < 0 ? 'negative' : 'neutral';
  const sign = n > 0 ? '+' : '';
  return `<span class="value ${cls}">${sign}${fmt(n)}%</span>`;
}

function fmtUsdc(n) {
  const cls  = n > 0 ? 'positive' : n < 0 ? 'negative' : 'neutral';
  const sign = n > 0 ? '+' : '';
  return `<span class="value ${cls}">${sign}${fmt(n)} USDC</span>`;
}

// ═══════════════════════════════════════════════════════
//  RENDER
// ═══════════════════════════════════════════════════════

function renderApp() {
  renderStepIndicator();
  const el  = document.getElementById('content');
  const nav = document.getElementById('nav-buttons');
  el.innerHTML = '';
  nav.innerHTML = '';
  if (activeChart) { activeChart.destroy(); activeChart = null; }

  const steps = [null, renderNetworkStep, renderStrategyStep, renderPoolStep,
                       renderParamsStep,  renderRunStep,      renderResultStep];
  steps[state.step]?.(el, nav);
}

function renderStepIndicator() {
  document.getElementById('step-indicator').innerHTML = `
    <div class="steps">
      ${STEPS.map((_, i) => `<div class="step-dot ${i+1 < state.step ? 'done' : i+1 === state.step ? 'active' : ''}"></div>`).join('')}
    </div>
    <div class="step-label">${state.step}단계 / ${STEPS.length} — ${STEPS[state.step-1]}</div>
  `;
}

function navBtns(nav, back, nextFn, nextLabel = '다음 →', disabled = false) {
  nav.innerHTML = `
    ${back ? `<button class="btn btn-secondary" onclick="prevStep()">← 이전</button>` : ''}
    ${nextFn ? `<button class="btn btn-primary" onclick="${nextFn}()" ${disabled ? 'disabled' : ''}>${nextLabel}</button>` : ''}
  `;
}

// ── Step 1: 네트워크 ──────────────────────────────────

function renderNetworkStep(el, nav) {
  el.innerHTML = `
    <div class="section-title">네트워크 선택</div>
    ${Object.entries(NETWORKS).map(([k, v]) => `
      <div class="card ${state.network === k ? 'selected' : ''}" onclick="selectNetwork('${k}')">
        <h3>${v.name}</h3>
        <p>${k === 'stellar' ? 'Stellar 공식 메인넷 · XLM/USDC 등 풍부한 유동성' : 'Pi 네트워크 DEX · Pi 메인넷 기반'}</p>
      </div>
    `).join('')}
  `;
  navBtns(nav, false, 'nextStep', '다음 →', !state.network);
}

function selectNetwork(k) {
  state.network = k; state.pool = null; state.pools = [];
  renderApp();
}

// ── Step 2: 전략 ──────────────────────────────────────

function renderStrategyStep(el, nav) {
  const isPi = state.network === 'pi';
  el.innerHTML = `
    <div class="section-title">전략 선택</div>
    <div class="card ${state.strategy === 'orderbook' ? 'selected' : ''}" onclick="selectStrategy('orderbook')">
      <h3>오더북 마켓메이킹</h3>
      <p>Bid/Ask 주문으로 스프레드 수익 시뮬레이션</p>
    </div>
    <div class="card ${isPi ? '' : state.strategy === 'amm' ? 'selected' : ''}"
         style="${isPi ? 'opacity:0.4;cursor:not-allowed' : ''}"
         ${isPi ? '' : "onclick=\"selectStrategy('amm')\""}>
      <h3>AMM 유동성 공급</h3>
      <p>${isPi
        ? '⚠️ Pi DEX는 AMM 풀이 없어 사용 불가'
        : '풀에 예치 후 거래 수수료 + 비영구적 손실 시뮬레이션'
      }</p>
    </div>
  `;
  navBtns(nav, true, 'nextStep', '다음 →', !state.strategy);
}

function selectStrategy(k) {
  state.strategy = k; state.pool = null;
  renderApp();
}

// ── Step 3: 풀 / 페어 선택 ────────────────────────────

const PI_PAIRS = [
  { id: 'PI/USDC', label: 'PI / USDC', reserves: [{ asset: 'native' }, { asset: 'USDC:GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN' }] },
  { id: 'PI/BTC',  label: 'PI / BTC',  reserves: [{ asset: 'native' }, { asset: 'BTC:GDPJALI4AZKUU2W426U5WKMAT6CN3AJRPIIRYR2YM54TL2GDWO5O2MZM'  }] },
  { id: 'PI/ETH',  label: 'PI / ETH',  reserves: [{ asset: 'native' }, { asset: 'ETH:GDPJALI4AZKUU2W426U5WKMAT6CN3AJRPIIRYR2YM54TL2GDWO5O2MZM'  }] },
];

function renderPoolStep(el, nav) {
  const isPi = state.network === 'pi';

  if (isPi) {
    el.innerHTML = `
      <div class="section-title">페어 선택</div>
      <div class="alert info">Pi DEX는 AMM 풀 없음 · 오더북 거래 데이터 사용</div>
      ${PI_PAIRS.map(p => `
        <div class="pool-item ${state.pool?.id === p.id ? 'selected' : ''}" onclick="selectPiPair('${p.id}')">
          <div class="pool-pair">${p.label}</div>
          <div class="pool-meta">오더북 거래 데이터</div>
        </div>
      `).join('')}
    `;
    navBtns(nav, true, 'nextStep', '다음 →', !state.pool);
    return;
  }

  el.innerHTML = state.pools.length === 0
    ? `<div class="section-title">풀 선택</div><div class="status-text"><span class="spinner"></span> 풀 목록 불러오는 중... <span id="load-timer">0</span>초</div>`
    : `
      <div class="section-title">풀 선택</div>
      <input class="search-box" id="pool-search" placeholder="토큰 이름 검색..." oninput="filterPools()" value="${poolSearchQuery}">
      <div id="pool-list">${poolListHtml()}</div>
    `;
  navBtns(nav, true, 'nextStep', '다음 →', !state.pool);
  if (state.pools.length === 0) loadPools();
}

function selectPiPair(id) {
  state.pool = PI_PAIRS.find(p => p.id === id);
  renderApp();
}

function filterPools() {
  poolSearchQuery = document.getElementById('pool-search')?.value?.toLowerCase() || '';
  document.getElementById('pool-list').innerHTML = poolListHtml();
}

function poolListHtml() {
  const filtered = state.pools.filter(p => !poolSearchQuery || poolLabel(p).toLowerCase().includes(poolSearchQuery));
  if (!filtered.length) return '<div class="status-text">검색 결과 없음</div>';
  return filtered.map(p => `
    <div class="pool-item ${state.pool?.id === p.id ? 'selected' : ''}" onclick="selectPool('${p.id}')">
      <div class="pool-pair">${poolLabel(p)}</div>
      <div class="pool-meta">
        LP 수 <strong style="color:#e2e8f0">${p.total_trustlines ?? '?'}</strong> · 수수료 ${((parseFloat(p.fee_bp || 30)) / 100).toFixed(1)}%
      </div>
    </div>
  `).join('');
}

async function loadPools() {
  let sec = 0;
  const timer = setInterval(() => {
    sec++;
    const el = document.getElementById('load-timer');
    if (el) el.textContent = sec;
  }, 1000);

  try {
    const pools = await fetchPools();
    clearInterval(timer);
    if (!pools.length) throw new Error('풀 목록이 비어 있습니다 (0개)');
    state.pools = pools.sort((a, b) => {
      const xlmA = hasNative(a) ? 1 : 0;
      const xlmB = hasNative(b) ? 1 : 0;
      if (xlmB !== xlmA) return xlmB - xlmA;
      const tA = parseInt(a.total_trustlines || 0);
      const tB = parseInt(b.total_trustlines || 0);
      return tB - tA;
    });
    renderApp();
  } catch (e) {
    clearInterval(timer);
    document.getElementById('content').innerHTML = `
      <div class="section-title">풀 선택</div>
      <div class="alert">풀 목록 로드 실패: ${e.message}</div>
      <button class="btn btn-secondary" style="margin-top:10px" onclick="loadPools()">다시 시도</button>
      <button class="btn btn-secondary" style="margin-top:10px;margin-left:8px" onclick="goToStep(1)">← 네트워크 변경</button>
    `;
  }
}

function selectPool(id) {
  state.pool = state.pools.find(p => p.id === id);
  renderApp();
}

// ── Step 4: 파라미터 ──────────────────────────────────

function renderParamsStep(el, nav) {
  const isOB = state.strategy === 'orderbook';
  const p    = state.params;
  el.innerHTML = `
    <div class="section-title">파라미터 설정</div>
    <div class="alert info">📊 ${poolLabel(state.pool)} · ${NETWORKS[state.network].name}</div>

    <div class="form-group">
      <label>데이터 건수 (5,000 ~ 10,000)</label>
      <input type="number" id="p-records" value="${p.records || 5000}" min="5000" max="10000" step="1000">
    </div>

    ${isOB ? `
    <div class="form-group">
      <label>초기 자본 (USDC)</label>
      <input type="number" id="p-totalUsdc" value="${p.totalUsdc || 500}" min="10">
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>네이티브 초기 비율 (%)</label>
        <input type="number" id="p-splitRatio" value="${p.splitRatio || 50}" min="10" max="90">
      </div>
      <div class="form-group">
        <label>스프레드 (%)</label>
        <input type="number" id="p-spreadPct" value="${p.spreadPct || 0.5}" step="0.1" min="0.1">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>주문 크기 (총자산 %)</label>
        <input type="number" id="p-orderSizePct" value="${p.orderSizePct || 3}" step="0.5" min="0.5">
      </div>
      <div class="form-group">
        <label>주문 레이어 수</label>
        <input type="number" id="p-layers" value="${p.layers || 1}" min="1" max="5">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>재고 중단 (%)</label>
        <input type="number" id="p-stopRatio" value="${p.stopRatio || 70}" min="51" max="99">
      </div>
      <div class="form-group">
        <label>수수료 (%)</label>
        <input type="number" id="p-feePct" value="${p.feePct || 0.1}" step="0.05" min="0">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>급변 감지 틱</label>
        <input type="number" id="p-surgeTicks" value="${p.surgeTicks || 3}" min="2" max="20">
      </div>
      <div class="form-group">
        <label>급변 감지 (%)</label>
        <input type="number" id="p-surgePct" value="${p.surgePct || 1.5}" step="0.1" min="0.1">
      </div>
    </div>
    ` : `
    <div class="form-group">
      <label>예치 금액 (USDC)</label>
      <input type="number" id="p-depositUsdc" value="${p.depositUsdc || 500}" min="10">
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>최대 비영구적 손실 (%)</label>
        <input type="number" id="p-maxILPct" value="${p.maxILPct || 10}" min="1" max="50">
      </div>
      <div class="form-group">
        <label>목표 수익률 (%)</label>
        <input type="number" id="p-targetRoiPct" value="${p.targetRoiPct || 5}" min="0.1">
      </div>
    </div>
    `}
  `;
  navBtns(nav, true, 'goToRun', '▶ 백테스트 시작');
}

function goToRun() {
  const isOB = state.strategy === 'orderbook';
  const n    = id => parseFloat(document.getElementById(id)?.value || '0');
  const ni   = id => parseInt(document.getElementById(id)?.value || '0');
  const clamp = (v, mn, mx) => Math.min(mx, Math.max(mn, v));

  state.params = isOB ? {
    records:      clamp(ni('p-records'), 5000, 10000),
    totalUsdc:    n('p-totalUsdc'),
    splitRatio:   n('p-splitRatio'),
    spreadPct:    n('p-spreadPct'),
    orderSizePct: n('p-orderSizePct'),
    layers:       ni('p-layers'),
    stopRatio:    n('p-stopRatio'),
    feePct:       n('p-feePct'),
    surgeTicks:   ni('p-surgeTicks'),
    surgePct:     n('p-surgePct'),
  } : {
    records:      clamp(ni('p-records'), 5000, 10000),
    depositUsdc:  n('p-depositUsdc'),
    maxILPct:     n('p-maxILPct'),
    targetRoiPct: n('p-targetRoiPct'),
  };
  nextStep();
}

// ── Step 5: 실행 ──────────────────────────────────────

function renderRunStep(el, nav) {
  el.innerHTML = `
    <div class="section-title">데이터 수집 및 백테스트</div>
    <div id="run-status" class="status-text"><span class="spinner"></span> 시작 중...</div>
    <div class="progress-bar"><div class="progress-fill" id="run-prog" style="width:0%"></div></div>
    <div class="result-card" style="margin-top:12px">
      <div class="log-list" id="run-log"></div>
    </div>
  `;
  nav.innerHTML = '';
  runBacktest();
}

async function runBacktest() {
  const log = msg => {
    const el = document.getElementById('run-log');
    if (el) el.innerHTML += `<div>${msg}</div>`;
  };
  const status = msg => {
    const el = document.getElementById('run-status');
    if (el) el.innerHTML = msg;
  };
  const progress = (cur, tot) => {
    const el = document.getElementById('run-prog');
    if (el) el.style.width = `${Math.min(100, cur / tot * 100)}%`;
    status(`<span class="spinner"></span> ${cur} / ${tot}건 수신 중...`);
  };

  try {
    const total = state.params.records;
    log(`→ ${poolLabel(state.pool)} · ${total}건 요청`);

    const fetchFn = state.strategy === 'amm' ? fetchTradesForPool : fetchTradesForPair;
    const records = await fetchFn(state.pool, total, progress);
    log(`✓ ${records.length}건 수신`);

    const trades = parseTrades(records);
    log(`✓ 유효 거래 ${trades.length}건`);

    if (trades.length < 10) throw new Error('데이터가 너무 적습니다 (10건 미만)');

    status('<span class="spinner"></span> 백테스트 실행 중...');
    await sleep(30);

    state.result = state.strategy === 'orderbook'
      ? runOrderbookBacktest(trades, state.params)
      : runAMMBacktest(state.pool, trades, state.params);

    log('✓ 완료');
    document.getElementById('run-prog').style.width = '100%';
    status('완료!');
    await sleep(400);
    nextStep();

  } catch (e) {
    status(`<div class="alert">오류: ${e.message}</div>`);
    document.getElementById('nav-buttons').innerHTML = `
      <button class="btn btn-secondary" onclick="goToStep(4)">← 파라미터</button>
      <button class="btn btn-primary" onclick="goToStep(5)">다시 시도</button>
    `;
  }
}

// ── Step 6: 결과 ──────────────────────────────────────

function renderResultStep(el, nav) {
  const r = state.result;
  if (!r) { el.innerHTML = '<div class="alert">결과 없음</div>'; return; }

  el.innerHTML = r.type === 'orderbook' ? obResultHtml(r) : ammResultHtml(r);
  navBtns(nav, false, null);
  document.getElementById('nav-buttons').innerHTML = `
    <button class="btn btn-secondary" onclick="goToStep(4)">← 파라미터</button>
    <button class="btn btn-primary" onclick="goToStep(1)">새 백테스트</button>
  `;

  requestAnimationFrame(() => drawChart(r));
}

function obResultHtml(r) {
  return `
    <div class="result-card">
      <h3>종합 결과</h3>
      <div class="stat-row"><span class="label">총 손익</span><div>${fmtPct(r.roi)} &nbsp; ${fmtUsdc(r.pnl)}</div></div>
      <div class="stat-row"><span class="label">스프레드 수익</span>${fmtUsdc(r.spreadProfit)}</div>
      <div class="stat-row"><span class="label">재고 평가손익</span>${fmtUsdc(r.inventoryPnl)}</div>
      <div class="stat-row"><span class="label">수수료 합계</span><span class="value negative">-${fmt(r.fees)} USDC</span></div>
    </div>
    <div class="result-card">
      <h3>거래 통계</h3>
      <div class="stat-row"><span class="label">체결 횟수</span><span class="value neutral">${r.fills}회</span></div>
      <div class="stat-row"><span class="label">분석 틱 수</span><span class="value neutral">${r.ticks}건</span></div>
      <div class="stat-row"><span class="label">가격 변화</span>${fmtPct(r.priceChg)}</div>
      ${r.stopped ? `<div class="stat-row"><span class="label">중단 사유</span><span class="value negative">${r.stopReason}</span></div>` : ''}
    </div>
    <div class="chart-container">
      <div class="chart-title">총 자산 추이 (USDC)</div>
      <canvas id="result-chart"></canvas>
    </div>
    <div class="result-card">
      <h3>거래 로그 (최근 20건)</h3>
      <div class="log-list">
        ${r.log.slice(-20).map(l => `<div class="log-${l.type}">${l.msg}</div>`).join('') || '<div>체결 없음</div>'}
      </div>
    </div>
    ${analysisHtml(r)}
  `;
}

function ammResultHtml(r) {
  const hodlRoi = (r.hodlFinal - r.totalStart) / r.totalStart * 100;
  return `
    <div class="result-card">
      <h3>LP 수익 결과</h3>
      <div class="stat-row"><span class="label">LP 총 손익</span><div>${fmtPct(r.roi)} &nbsp; ${fmtUsdc(r.pnl)}</div></div>
      <div class="stat-row"><span class="label">수수료 수익</span><span class="value positive">+${fmt(r.feeIncome)} USDC</span></div>
      <div class="stat-row"><span class="label">비영구적 손실</span><span class="value ${r.il < 0 ? 'negative' : 'neutral'}">${fmt(r.il)}%</span></div>
      <div class="stat-row"><span class="label">HODL 대비</span>${fmtPct(r.roi - hodlRoi)}</div>
    </div>
    <div class="result-card">
      <h3>거래 통계</h3>
      <div class="stat-row"><span class="label">분석 틱 수</span><span class="value neutral">${r.ticks}건</span></div>
      <div class="stat-row"><span class="label">가격 변화</span>${fmtPct(r.priceChg)}</div>
      <div class="stat-row"><span class="label">내 LP 지분</span><span class="value neutral">${fmt(r.lpShare, 4)}%</span></div>
      ${r.exitReason ? `<div class="stat-row"><span class="label">종료 사유</span><span class="value neutral">${r.exitReason}</span></div>` : ''}
    </div>
    <div class="chart-container">
      <div class="chart-title">LP vs HODL 자산 추이 (USDC)</div>
      <canvas id="result-chart"></canvas>
    </div>
    ${analysisHtml(r)}
  `;
}

function analysisHtml(r) {
  let msg;
  if (r.type === 'orderbook') {
    if (r.fills === 0)                         msg = '⚠️ 체결 0회 — 스프레드를 줄이거나 레이어를 늘려보세요';
    else if (r.roi > 0 && r.spreadProfit > 0) msg = '✅ 스프레드 수익과 전체 손익 모두 플러스';
    else if (r.spreadProfit > 0 && r.roi < 0) msg = '⚠️ 스프레드 수익은 났지만 가격 변동으로 재고 손실이 더 큼';
    else                                       msg = '❌ 체결 부족 또는 수수료가 수익 초과';
  } else {
    if (r.feeIncome > Math.abs(r.il / 100 * r.totalStart)) msg = '✅ 수수료 수익이 비영구적 손실을 상쇄';
    else                                                     msg = '⚠️ 비영구적 손실이 수수료 수익보다 큼';
  }
  return `<div class="alert info" style="margin-top:4px">${msg}</div>`;
}

function drawChart(r) {
  const canvas = document.getElementById('result-chart');
  if (!canvas || !r.snapshots?.length) return;

  const labels = r.snapshots.map(s => s.i);
  const datasets = r.type === 'orderbook'
    ? [{ label: '총 자산', data: r.snapshots.map(s => s.totalVal), borderColor: '#667eea', tension: 0.3, pointRadius: 0 }]
    : [
        { label: 'LP 자산', data: r.snapshots.map(s => s.lpVal),   borderColor: '#667eea', tension: 0.3, pointRadius: 0 },
        { label: 'HODL',    data: r.snapshots.map(s => s.hodlVal), borderColor: '#f6ad55', tension: 0.3, pointRadius: 0, borderDash: [5,5] },
      ];

  if (activeChart) activeChart.destroy();
  activeChart = new Chart(canvas, {
    type: 'line',
    data: { labels, datasets },
    options: {
      responsive: true,
      plugins: { legend: { labels: { color: '#a0aec0', font: { size: 11 } } } },
      scales: {
        x: { display: false },
        y: { ticks: { color: '#718096', font: { size: 10 } }, grid: { color: '#2d3748' } },
      },
    },
  });
}

// ═══════════════════════════════════════════════════════
//  NAVIGATION
// ═══════════════════════════════════════════════════════

function nextStep() { state.step = Math.min(6, state.step + 1); renderApp(); }
function prevStep() { state.step = Math.max(1, state.step - 1); renderApp(); }
function goToStep(n) { state.step = n; renderApp(); }

// ── 시작 ─────────────────────────────────────────────
renderApp();
