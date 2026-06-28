// ═══════════════════════════════════════════════════════
//  CONSTANTS & STATE
// ═══════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════
//  I18N — 향후 단일 언어 전환 시 LANG 변수만 바꾸면 됨
// ═══════════════════════════════════════════════════════

const LANG = 'bilingual'; // 'ko' | 'en' | 'bilingual'

const S = {
  steps:           [{ ko:'네트워크', en:'Network' }, { ko:'전략', en:'Strategy' }, { ko:'풀 선택', en:'Pool' }, { ko:'파라미터', en:'Parameters' }, { ko:'실행', en:'Run' }, { ko:'결과', en:'Results' }],
  btn_next:        { ko:'다음', en:'Next' },
  btn_prev:        { ko:'이전', en:'Back' },
  btn_run:         { ko:'백테스트 시작', en:'Start Backtest' },
  btn_retry:       { ko:'다시 시도', en:'Retry' },
  btn_new:         { ko:'새 백테스트', en:'New Backtest' },
  btn_params:      { ko:'← 파라미터', en:'← Parameters' },
  btn_net:         { ko:'← 네트워크 변경', en:'← Change Network' },

  net_title:       { ko:'네트워크 선택', en:'Select Network' },
  stellar_name:    { ko:'Stellar 메인넷', en:'Stellar Mainnet' },
  stellar_desc:    { ko:'Stellar 공식 메인넷 · XLM/USDC 등 풍부한 유동성', en:'Official Stellar mainnet · Rich liquidity' },
  pi_name:         { ko:'Pi DEX', en:'Pi DEX' },
  pi_desc:         { ko:'Pi 네트워크 DEX · Pi 메인넷 기반', en:'Pi Network DEX · Pi mainnet based' },

  str_title:       { ko:'전략 선택', en:'Select Strategy' },
  ob_name:         { ko:'오더북 마켓메이킹', en:'Orderbook Market Making' },
  ob_desc:         { ko:'Bid/Ask 주문으로 스프레드 수익 시뮬레이션', en:'Simulate spread profit via bid/ask orders' },
  amm_name:        { ko:'AMM 유동성 공급', en:'AMM Liquidity Provision' },
  amm_desc:        { ko:'풀에 예치 후 수수료 + 비영구적 손실 시뮬레이션', en:'Fee income & impermanent loss simulation' },
  amm_disabled:    { ko:'⚠️ Pi DEX는 AMM 풀이 없어 사용 불가', en:'⚠️ Pi DEX has no AMM pools' },

  pool_title:      { ko:'풀 선택', en:'Select Pool' },
  pair_title:      { ko:'페어 선택', en:'Select Pair' },
  loading_pools:   { ko:'풀 목록 불러오는 중', en:'Loading pools' },
  loading_pairs:   { ko:'거래 페어 불러오는 중', en:'Loading pairs' },
  sec:             { ko:'초', en:'sec' },
  search_ph:       { ko:'토큰 이름 검색...', en:'Search token...' },
  sort_lp:         { ko:'LP 수 많은 순 (거래 활성도)', en:'By LP count (activity)' },
  sort_tvl:        { ko:'유동성 큰 순 (안정성)', en:'By liquidity (stability)' },
  pi_info:         { ko:'Pi DEX · 오더북 거래 데이터 · 거래량 순 정렬', en:'Pi DEX · Orderbook data · Sorted by volume' },
  recommended:     { ko:'추천', en:'Top' },
  recent_trades:   { ko:'최근 거래', en:'Recent trades' },
  lp_count:        { ko:'LP 수', en:'LP count' },
  liquidity:       { ko:'유동성', en:'Liquidity' },
  no_results:      { ko:'검색 결과 없음', en:'No results' },
  pool_fail:       { ko:'풀 목록 로드 실패', en:'Pool load failed' },
  pair_fail:       { ko:'페어 로드 실패', en:'Pair load failed' },
  no_trade_data:   { ko:'거래 데이터 없음', en:'No trade data' },

  param_title:     { ko:'파라미터 설정', en:'Parameter Settings' },
  p_records:       { ko:'데이터 건수 (5,000~10,000)', en:'Data count (5,000~10,000)' },
  p_capital:       { ko:'초기 자본', en:'Initial Capital' },
  p_split:         { ko:'네이티브 초기 비율 (%)', en:'Native ratio (%)' },
  p_spread:        { ko:'스프레드 (%)', en:'Spread (%)' },
  p_order_size:    { ko:'주문 크기 (총자산 %)', en:'Order size (% of total)' },
  p_layers:        { ko:'주문 레이어 수', en:'Order layers' },
  p_stop:          { ko:'재고 중단 (%)', en:'Inventory stop (%)' },
  p_fee:           { ko:'수수료 (%)', en:'Fee (%)' },
  p_surge_ticks:   { ko:'급변 감지 틱', en:'Surge window (ticks)' },
  p_surge_pct:     { ko:'급변 감지 (%)', en:'Surge threshold (%)' },
  p_deposit:       { ko:'예치 금액', en:'Deposit amount' },
  p_max_il:        { ko:'최대 비영구적 손실 (%)', en:'Max impermanent loss (%)' },
  p_target_roi:    { ko:'목표 수익률 (%)', en:'Target ROI (%)' },

  run_title:       { ko:'데이터 수집 및 백테스트', en:'Fetching Data & Backtesting' },
  run_start:       { ko:'시작 중...', en:'Starting...' },
  run_fetching:    { ko:'건 수신 중...', en:'records fetching...' },
  run_running:     { ko:'백테스트 실행 중...', en:'Running backtest...' },
  run_done:        { ko:'완료!', en:'Done!' },
  run_req:         { ko:'건 요청', en:'records requested' },
  run_received:    { ko:'건 수신', en:'records received' },
  run_valid:       { ko:'유효 거래', en:'valid trades' },
  run_complete:    { ko:'완료', en:'complete' },
  run_too_few:     { ko:'데이터가 너무 적습니다 (10건 미만)', en:'Too little data (under 10 records)' },
  run_error:       { ko:'오류', en:'Error' },

  res_summary:     { ko:'종합 결과', en:'Summary' },
  res_pnl:         { ko:'총 손익', en:'Total P&L' },
  res_spread:      { ko:'스프레드 수익', en:'Spread profit' },
  res_inv:         { ko:'재고 평가손익', en:'Inventory P&L' },
  res_fees:        { ko:'수수료 합계', en:'Total fees' },
  res_stats:       { ko:'거래 통계', en:'Trade Statistics' },
  res_fills:       { ko:'체결 횟수', en:'Fill count' },
  res_ticks:       { ko:'분석 틱 수', en:'Ticks analyzed' },
  res_price_chg:   { ko:'가격 변화', en:'Price change' },
  res_stop:        { ko:'중단 사유', en:'Stop reason' },
  res_log:         { ko:'거래 로그 (최근 20건)', en:'Trade log (last 20)' },
  res_no_fills:    { ko:'체결 없음', en:'No fills' },
  res_asset_chart: { ko:'총 자산 추이 (USDC)', en:'Total Asset Trend (USDC)' },
  res_lp_title:    { ko:'LP 수익 결과', en:'LP Return Summary' },
  res_lp_pnl:      { ko:'LP 총 손익', en:'LP Total P&L' },
  res_fee_inc:     { ko:'수수료 수익', en:'Fee income' },
  res_il:          { ko:'비영구적 손실', en:'Impermanent loss' },
  res_vs_hodl:     { ko:'HODL 대비', en:'vs HODL' },
  res_lp_share:    { ko:'내 LP 지분', en:'My LP share' },
  res_exit:        { ko:'종료 사유', en:'Exit reason' },
  res_lp_chart:    { ko:'LP vs HODL 자산 추이 (USDC)', en:'LP vs HODL Trend (USDC)' },
  res_none:        { ko:'결과 없음', en:'No result' },

  ana_no_fills:    { ko:'⚠️ 체결 0회 — 스프레드를 줄이거나 레이어를 늘려보세요', en:'⚠️ 0 fills — Try reducing spread or adding layers' },
  ana_good:        { ko:'✅ 스프레드 수익과 전체 손익 모두 플러스', en:'✅ Both spread profit and total P&L are positive' },
  ana_inv_loss:    { ko:'⚠️ 스프레드 수익은 났지만 가격 변동으로 재고 손실이 더 큼', en:'⚠️ Spread profit positive but inventory loss exceeded it' },
  ana_bad:         { ko:'❌ 체결 부족 또는 수수료가 수익 초과', en:'❌ Too few fills or fees exceeded profit' },
  ana_amm_good:    { ko:'✅ 수수료 수익이 비영구적 손실을 상쇄', en:'✅ Fee income offsets impermanent loss' },
  ana_amm_bad:     { ko:'⚠️ 비영구적 손실이 수수료 수익보다 큼', en:'⚠️ Impermanent loss exceeds fee income' },

  chart_total:     { ko:'총 자산', en:'Total Asset' },
  chart_lp:        { ko:'LP 자산', en:'LP Asset' },
  chart_hodl:      { ko:'HODL', en:'HODL' },
};

// t(s) — 섹션 타이틀 등 두 줄 병기
function t(s) {
  if (LANG === 'ko') return s.ko;
  if (LANG === 'en') return s.en;
  return `${s.ko}<span class="t-en">${s.en}</span>`;
}

// tl(s) — 폼 라벨, 인라인 병기
function tl(s) {
  if (LANG === 'ko') return s.ko;
  if (LANG === 'en') return s.en;
  return `${s.ko} <span class="t-en-i">· ${s.en}</span>`;
}

// tp(s) — 일반 텍스트 (차트 라벨 등)
function tp(s) {
  if (LANG === 'ko') return s.ko;
  if (LANG === 'en') return s.en;
  return `${s.ko} / ${s.en}`;
}

const NETWORKS = {
  stellar: { name: tp({ ko:'Stellar 메인넷', en:'Stellar Mainnet' }), horizon: 'https://horizon.stellar.org',    native: 'XLM' },
  pi:      { name: tp({ ko:'Pi DEX',          en:'Pi DEX'          }), horizon: 'https://api.mainnet.minepi.com', native: 'PI'  },
};

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
  const cur = S.steps[state.step - 1];
  document.getElementById('step-indicator').innerHTML = `
    <div class="steps">
      ${S.steps.map((_, i) => `<div class="step-dot ${i+1 < state.step ? 'done' : i+1 === state.step ? 'active' : ''}"></div>`).join('')}
    </div>
    <div class="step-label">${state.step} / ${S.steps.length} — ${tp(cur)}</div>
  `;
}

function navBtns(nav, back, nextFn, nextLabel = null, disabled = false) {
  const label = nextLabel ?? `${S.btn_next.ko} ${S.btn_next.en} →`;
  nav.innerHTML = `
    ${back ? `<button class="btn btn-secondary" onclick="prevStep()">← ${S.btn_prev.ko} <span class="t-en-i">${S.btn_prev.en}</span></button>` : ''}
    ${nextFn ? `<button class="btn btn-primary" onclick="${nextFn}()" ${disabled ? 'disabled' : ''}>${label}</button>` : ''}
  `;
}

// ── Step 1: 네트워크 ──────────────────────────────────

function renderNetworkStep(el, nav) {
  el.innerHTML = `
    <div class="section-title">${t(S.net_title)}</div>
    <div class="card ${state.network === 'stellar' ? 'selected' : ''}" onclick="selectNetwork('stellar')">
      <h3>${t(S.stellar_name)}</h3>
      <p>${tl(S.stellar_desc)}</p>
    </div>
    <div class="card ${state.network === 'pi' ? 'selected' : ''}" onclick="selectNetwork('pi')">
      <h3>${t(S.pi_name)}</h3>
      <p>${tl(S.pi_desc)}</p>
    </div>
  `;
  navBtns(nav, false, 'nextStep', null, !state.network);
}

function selectNetwork(k) {
  state.network = k; state.pool = null; state.pools = [];
  renderApp();
}

// ── Step 2: 전략 ──────────────────────────────────────

function renderStrategyStep(el, nav) {
  const isPi = state.network === 'pi';
  el.innerHTML = `
    <div class="section-title">${t(S.str_title)}</div>
    <div class="card ${state.strategy === 'orderbook' ? 'selected' : ''}" onclick="selectStrategy('orderbook')">
      <h3>${t(S.ob_name)}</h3>
      <p>${tl(S.ob_desc)}</p>
    </div>
    <div class="card ${isPi ? '' : state.strategy === 'amm' ? 'selected' : ''}"
         style="${isPi ? 'opacity:0.4;cursor:not-allowed' : ''}"
         ${isPi ? '' : "onclick=\"selectStrategy('amm')\""}>
      <h3>${t(S.amm_name)}</h3>
      <p>${isPi ? tl(S.amm_disabled) : tl(S.amm_desc)}</p>
    </div>
  `;
  navBtns(nav, true, 'nextStep', null, !state.strategy);
}

function selectStrategy(k) {
  state.strategy = k; state.pool = null;
  renderApp();
}

// ── Step 3: 풀 / 페어 선택 ────────────────────────────

async function fetchPiPairs() {
  const allRecords = [];
  let cursor = null;
  for (let i = 0; i < 5; i++) {
    const url = `${horizonBase()}/trades?limit=200&order=desc${cursor ? `&cursor=${cursor}` : ''}`;
    const r = await apiFetch(url);
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    const records = (await r.json())._embedded?.records || [];
    if (!records.length) break;
    allRecords.push(...records);
    cursor = records.at(-1).paging_token;
    await sleep(150);
  }

  const counts = {};
  const pairMap = {};
  const records = allRecords;

  for (const rec of records) {
    const baseAsset  = rec.base_asset_type  === 'native' ? 'native' : `${rec.base_asset_code}:${rec.base_asset_issuer}`;
    const counterAsset = rec.counter_asset_type === 'native' ? 'native' : `${rec.counter_asset_code}:${rec.counter_asset_issuer}`;
    const id = [baseAsset, counterAsset].sort().join('|');
    counts[id] = (counts[id] || 0) + 1;
    if (!pairMap[id]) {
      pairMap[id] = {
        id,
        reserves: [{ asset: baseAsset }, { asset: counterAsset }],
        tradeCount: 0,
      };
    }
    pairMap[id].tradeCount = counts[id];
  }

  return Object.values(pairMap).sort((a, b) => b.tradeCount - a.tradeCount);
}

function renderPoolStep(el, nav) {
  const isPi = state.network === 'pi';

  if (isPi) {
    if (state.pools.length === 0) {
      el.innerHTML = `
        <div class="section-title">${t(S.pair_title)}</div>
        <div class="status-text"><span class="spinner"></span> ${tl(S.loading_pairs)}... <span id="load-timer">0</span>${tp(S.sec)}</div>
      `;
      navBtns(nav, true, null);
      loadPiPairs();
      return;
    }

    el.innerHTML = `
      <div class="section-title">${t(S.pair_title)}</div>
      <div class="alert info">${tl(S.pi_info)}</div>
      ${state.pools.map((p, i) => `
        <div class="pool-item ${state.pool?.id === p.id ? 'selected' : ''}" onclick="selectPiPair('${encodeURIComponent(p.id)}')">
          <div class="pool-pair">
            ${poolLabel(p)}
            ${i < 3 ? `<span class="badge" style="background:#2a2a1a;color:#f6e05e">${tp(S.recommended)}</span>` : ''}
          </div>
          <div class="pool-meta">${tl(S.recent_trades)} <strong style="color:#e2e8f0">${p.tradeCount}</strong></div>
        </div>
      `).join('')}
    `;
    navBtns(nav, true, 'nextStep', null, !state.pool);
    return;
  }

  const sortDesc = state.strategy === 'orderbook' ? tl(S.sort_lp) : tl(S.sort_tvl);

  el.innerHTML = state.pools.length === 0
    ? `<div class="section-title">${t(S.pool_title)}</div><div class="status-text"><span class="spinner"></span> ${tl(S.loading_pools)}... <span id="load-timer">0</span>${tp(S.sec)}</div>`
    : `
      <div class="section-title">${t(S.pool_title)}</div>
      <div class="alert info" style="margin-bottom:10px">${sortDesc}</div>
      <input class="search-box" id="pool-search" placeholder="${tp(S.search_ph)}" oninput="filterPools()" value="${poolSearchQuery}">
      <div id="pool-list">${poolListHtml()}</div>
    `;
  navBtns(nav, true, 'nextStep', null, !state.pool);
  if (state.pools.length === 0) loadPools();
}

async function loadPiPairs() {
  let sec = 0;
  const timer = setInterval(() => {
    sec++;
    const el = document.getElementById('load-timer');
    if (el) el.textContent = sec;
  }, 1000);
  try {
    const pairs = await fetchPiPairs();
    clearInterval(timer);
    if (!pairs.length) throw new Error(tp(S.no_trade_data));
    state.pools = pairs;
    renderApp();
  } catch (e) {
    clearInterval(timer);
    document.getElementById('content').innerHTML = `
      <div class="section-title">${t(S.pair_title)}</div>
      <div class="alert">${tl(S.pair_fail)}: ${e.message}</div>
      <button class="btn btn-secondary" style="margin-top:10px" onclick="goToStep(3)">${tl(S.btn_retry)}</button>
      <button class="btn btn-secondary" style="margin-top:10px;margin-left:8px" onclick="goToStep(1)">${tl(S.btn_net)}</button>
    `;
  }
}

function selectPiPair(encodedId) {
  const id = decodeURIComponent(encodedId);
  state.pool = state.pools.find(p => p.id === id);
  renderApp();
}

function filterPools() {
  poolSearchQuery = document.getElementById('pool-search')?.value?.toLowerCase() || '';
  document.getElementById('pool-list').innerHTML = poolListHtml();
}

function poolListHtml() {
  const filtered = state.pools.filter(p => !poolSearchQuery || poolLabel(p).toLowerCase().includes(poolSearchQuery));
  if (!filtered.length) return `<div class="status-text">${tl(S.no_results)}</div>`;
  return filtered.map(p => {
    const meta = state.strategy === 'orderbook'
      ? `${tl(S.lp_count)} <strong style="color:#e2e8f0">${p.total_trustlines ?? '?'}</strong> · ${((parseFloat(p.fee_bp || 30)) / 100).toFixed(1)}%`
      : `${tl(S.liquidity)} <strong style="color:#e2e8f0">${fmt(poolLiquidity(p), 0)}</strong> · LP ${p.total_trustlines ?? '?'}`;
    return `
      <div class="pool-item ${state.pool?.id === p.id ? 'selected' : ''}" onclick="selectPool('${p.id}')">
        <div class="pool-pair">${poolLabel(p)}</div>
        <div class="pool-meta">${meta}</div>
      </div>
    `;
  }).join('');
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
    if (!pools.length) throw new Error(`${S.pool_fail.ko} (0개 / 0 pools)`);
    state.pools = pools.sort((a, b) => {
      // XLM 포함 풀 우선 (공통)
      const xlmA = hasNative(a) ? 1 : 0;
      const xlmB = hasNative(b) ? 1 : 0;
      if (xlmB !== xlmA) return xlmB - xlmA;

      if (state.strategy === 'orderbook') {
        // 오더북 MM: LP 수 많은 순 (거래 활성도 지표)
        const tA = parseInt(a.total_trustlines || 0);
        const tB = parseInt(b.total_trustlines || 0);
        return tB - tA;
      } else {
        // AMM LP: 총 유동성(TVL) 큰 순 (안정성 지표)
        return poolLiquidity(b) - poolLiquidity(a);
      }
    });
    renderApp();
  } catch (e) {
    clearInterval(timer);
    document.getElementById('content').innerHTML = `
      <div class="section-title">${t(S.pool_title)}</div>
      <div class="alert">${tl(S.pool_fail)}: ${e.message}</div>
      <button class="btn btn-secondary" style="margin-top:10px" onclick="loadPools()">${tl(S.btn_retry)}</button>
      <button class="btn btn-secondary" style="margin-top:10px;margin-left:8px" onclick="goToStep(1)">${tl(S.btn_net)}</button>
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
    <div class="section-title">${t(S.param_title)}</div>
    <div class="alert info">📊 ${poolLabel(state.pool)} · ${NETWORKS[state.network].name}</div>

    <div class="form-group">
      <label>${tl(S.p_records)}</label>
      <input type="number" id="p-records" value="${p.records || 5000}" min="5000" max="10000" step="1000">
    </div>

    ${isOB ? `
    <div class="form-group">
      <label>${tl(S.p_capital)} (USDC)</label>
      <input type="number" id="p-totalUsdc" value="${p.totalUsdc || 500}" min="10">
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>${tl(S.p_split)}</label>
        <input type="number" id="p-splitRatio" value="${p.splitRatio || 50}" min="10" max="90">
      </div>
      <div class="form-group">
        <label>${tl(S.p_spread)}</label>
        <input type="number" id="p-spreadPct" value="${p.spreadPct || 0.5}" step="0.1" min="0.1">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>${tl(S.p_order_size)}</label>
        <input type="number" id="p-orderSizePct" value="${p.orderSizePct || 3}" step="0.5" min="0.5">
      </div>
      <div class="form-group">
        <label>${tl(S.p_layers)}</label>
        <input type="number" id="p-layers" value="${p.layers || 1}" min="1" max="5">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>${tl(S.p_stop)}</label>
        <input type="number" id="p-stopRatio" value="${p.stopRatio || 70}" min="51" max="99">
      </div>
      <div class="form-group">
        <label>${tl(S.p_fee)}</label>
        <input type="number" id="p-feePct" value="${p.feePct || 0.1}" step="0.05" min="0">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>${tl(S.p_surge_ticks)}</label>
        <input type="number" id="p-surgeTicks" value="${p.surgeTicks || 3}" min="2" max="20">
      </div>
      <div class="form-group">
        <label>${tl(S.p_surge_pct)}</label>
        <input type="number" id="p-surgePct" value="${p.surgePct || 1.5}" step="0.1" min="0.1">
      </div>
    </div>
    ` : `
    <div class="form-group">
      <label>${tl(S.p_deposit)} (USDC)</label>
      <input type="number" id="p-depositUsdc" value="${p.depositUsdc || 500}" min="10">
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>${tl(S.p_max_il)}</label>
        <input type="number" id="p-maxILPct" value="${p.maxILPct || 10}" min="1" max="50">
      </div>
      <div class="form-group">
        <label>${tl(S.p_target_roi)}</label>
        <input type="number" id="p-targetRoiPct" value="${p.targetRoiPct || 5}" min="0.1">
      </div>
    </div>
    `}
  `;
  navBtns(nav, true, 'goToRun', `▶ ${S.btn_run.ko} <span class="t-en-i">${S.btn_run.en}</span>`);
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
    <div class="section-title">${t(S.run_title)}</div>
    <div id="run-status" class="status-text"><span class="spinner"></span> ${tl(S.run_start)}</div>
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
    status(`<span class="spinner"></span> ${cur} / ${tot} ${tl(S.run_received)}`);
  };

  try {
    const total = state.params.records;
    log(`→ ${poolLabel(state.pool)} · ${total} ${tp(S.run_req)}`);

    const fetchFn = state.strategy === 'amm' ? fetchTradesForPool : fetchTradesForPair;
    const records = await fetchFn(state.pool, total, progress);
    log(`✓ ${records.length} ${tp(S.run_received)}`);

    const trades = parseTrades(records);
    log(`✓ ${tp(S.run_valid)} ${trades.length}`);

    if (trades.length < 10) throw new Error(tp(S.run_too_few));

    status(`<span class="spinner"></span> ${tl(S.run_running)}`);
    await sleep(30);

    state.result = state.strategy === 'orderbook'
      ? runOrderbookBacktest(trades, state.params)
      : runAMMBacktest(state.pool, trades, state.params);

    log(`✓ ${tp(S.run_complete)}`);
    document.getElementById('run-prog').style.width = '100%';
    status(tl(S.run_done));
    await sleep(400);
    nextStep();

  } catch (e) {
    status(`<div class="alert">${tl(S.run_error)}: ${e.message}</div>`);
    document.getElementById('nav-buttons').innerHTML = `
      <button class="btn btn-secondary" onclick="goToStep(4)">${tl(S.btn_params)}</button>
      <button class="btn btn-primary" onclick="goToStep(5)">${tl(S.btn_retry)}</button>
    `;
  }
}

// ── Step 6: 결과 ──────────────────────────────────────

function renderResultStep(el, nav) {
  const r = state.result;
  if (!r) { el.innerHTML = `<div class="alert">${tl(S.res_none)}</div>`; return; }

  el.innerHTML = r.type === 'orderbook' ? obResultHtml(r) : ammResultHtml(r);
  navBtns(nav, false, null);
  document.getElementById('nav-buttons').innerHTML = `
    <button class="btn btn-secondary" onclick="goToStep(4)">${tl(S.btn_params)}</button>
    <button class="btn btn-primary" onclick="goToStep(1)">${tl(S.btn_new)}</button>
  `;

  requestAnimationFrame(() => drawChart(r));
}

function obResultHtml(r) {
  return `
    <div class="result-card">
      <h3>${t(S.res_summary)}</h3>
      <div class="stat-row"><span class="label">${tl(S.res_pnl)}</span><div>${fmtPct(r.roi)} &nbsp; ${fmtUsdc(r.pnl)}</div></div>
      <div class="stat-row"><span class="label">${tl(S.res_spread)}</span>${fmtUsdc(r.spreadProfit)}</div>
      <div class="stat-row"><span class="label">${tl(S.res_inv)}</span>${fmtUsdc(r.inventoryPnl)}</div>
      <div class="stat-row"><span class="label">${tl(S.res_fees)}</span><span class="value negative">-${fmt(r.fees)} USDC</span></div>
    </div>
    <div class="result-card">
      <h3>${t(S.res_stats)}</h3>
      <div class="stat-row"><span class="label">${tl(S.res_fills)}</span><span class="value neutral">${r.fills}</span></div>
      <div class="stat-row"><span class="label">${tl(S.res_ticks)}</span><span class="value neutral">${r.ticks}</span></div>
      <div class="stat-row"><span class="label">${tl(S.res_price_chg)}</span>${fmtPct(r.priceChg)}</div>
      ${r.stopped ? `<div class="stat-row"><span class="label">${tl(S.res_stop)}</span><span class="value negative">${r.stopReason}</span></div>` : ''}
    </div>
    <div class="chart-container">
      <div class="chart-title">${t(S.res_asset_chart)}</div>
      <canvas id="result-chart"></canvas>
    </div>
    <div class="result-card">
      <h3>${t(S.res_log)}</h3>
      <div class="log-list">
        ${r.log.slice(-20).map(l => `<div class="log-${l.type}">${l.msg}</div>`).join('') || `<div>${tp(S.res_no_fills)}</div>`}
      </div>
    </div>
    ${analysisHtml(r)}
  `;
}

function ammResultHtml(r) {
  const hodlRoi = (r.hodlFinal - r.totalStart) / r.totalStart * 100;
  return `
    <div class="result-card">
      <h3>${t(S.res_lp_title)}</h3>
      <div class="stat-row"><span class="label">${tl(S.res_lp_pnl)}</span><div>${fmtPct(r.roi)} &nbsp; ${fmtUsdc(r.pnl)}</div></div>
      <div class="stat-row"><span class="label">${tl(S.res_fee_inc)}</span><span class="value positive">+${fmt(r.feeIncome)} USDC</span></div>
      <div class="stat-row"><span class="label">${tl(S.res_il)}</span><span class="value ${r.il < 0 ? 'negative' : 'neutral'}">${fmt(r.il)}%</span></div>
      <div class="stat-row"><span class="label">${tl(S.res_vs_hodl)}</span>${fmtPct(r.roi - hodlRoi)}</div>
    </div>
    <div class="result-card">
      <h3>${t(S.res_stats)}</h3>
      <div class="stat-row"><span class="label">${tl(S.res_ticks)}</span><span class="value neutral">${r.ticks}</span></div>
      <div class="stat-row"><span class="label">${tl(S.res_price_chg)}</span>${fmtPct(r.priceChg)}</div>
      <div class="stat-row"><span class="label">${tl(S.res_lp_share)}</span><span class="value neutral">${fmt(r.lpShare, 4)}%</span></div>
      ${r.exitReason ? `<div class="stat-row"><span class="label">${tl(S.res_exit)}</span><span class="value neutral">${r.exitReason}</span></div>` : ''}
    </div>
    <div class="chart-container">
      <div class="chart-title">${t(S.res_lp_chart)}</div>
      <canvas id="result-chart"></canvas>
    </div>
    ${analysisHtml(r)}
  `;
}

function analysisHtml(r) {
  let s;
  if (r.type === 'orderbook') {
    if (r.fills === 0)                         s = S.ana_no_fills;
    else if (r.roi > 0 && r.spreadProfit > 0) s = S.ana_good;
    else if (r.spreadProfit > 0 && r.roi < 0) s = S.ana_inv_loss;
    else                                       s = S.ana_bad;
  } else {
    s = r.feeIncome > Math.abs(r.il / 100 * r.totalStart) ? S.ana_amm_good : S.ana_amm_bad;
  }
  return `<div class="alert info" style="margin-top:4px">${tl(s)}</div>`;
}

function drawChart(r) {
  const canvas = document.getElementById('result-chart');
  if (!canvas || !r.snapshots?.length) return;

  const labels = r.snapshots.map(s => s.i);
  const datasets = r.type === 'orderbook'
    ? [{ label: tp(S.chart_total), data: r.snapshots.map(s => s.totalVal), borderColor: '#667eea', tension: 0.3, pointRadius: 0 }]
    : [
        { label: tp(S.chart_lp),   data: r.snapshots.map(s => s.lpVal),   borderColor: '#667eea', tension: 0.3, pointRadius: 0 },
        { label: tp(S.chart_hodl), data: r.snapshots.map(s => s.hodlVal), borderColor: '#f6ad55', tension: 0.3, pointRadius: 0, borderDash: [5,5] },
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
