// ═══════════════════════════════════════════════════════
//  CONSTANTS & STATE
// ═══════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════
//  I18N — 향후 단일 언어 전환 시 LANG 변수만 바꾸면 됨
// ═══════════════════════════════════════════════════════

function _detectLang() {
  const supported = ['ko','en','id','zh','ja','es','vi','hi','pt','tl','fr'];
  const nav = (navigator.languages?.[0] || navigator.language || 'en').toLowerCase();
  const primary = nav.split('-')[0];
  if (primary === 'fil') return 'tl';
  return supported.includes(primary) ? primary : 'en';
}
let LANG = localStorage.getItem('mm_lang') || _detectLang(); // ko|en|id|zh|ja|es|vi|hi|pt|tl|fr

const S = {
  steps: [
    { ko:'네트워크', en:'Network',    id:'Jaringan',  zh:'网络',     ja:'ネットワーク', es:'Red',        vi:'Mạng',       hi:'नेटवर्क',    pt:'Rede',       tl:'Network',    fr:'Réseau' },
    { ko:'전략',     en:'Strategy',   id:'Strategi',  zh:'策略',     ja:'戦略',         es:'Estrategia', vi:'Chiến lược', hi:'रणनीति',     pt:'Estratégia', tl:'Estratehiya',fr:'Stratégie' },
    { ko:'풀 선택',  en:'Pool',       id:'Pool',      zh:'选择池',   ja:'プール選択',   es:'Pool',       vi:'Chọn Pool',  hi:'पूल',        pt:'Pool',       tl:'Pool',       fr:'Pool' },
    { ko:'파라미터', en:'Parameters', id:'Parameter', zh:'参数',     ja:'パラメータ',   es:'Parámetros', vi:'Tham số',    hi:'पैरामीटर',   pt:'Parâmetros', tl:'Parametro',  fr:'Paramètres' },
    { ko:'실행',     en:'Run',        id:'Jalankan',  zh:'执行',     ja:'実行',         es:'Ejecutar',   vi:'Chạy',       hi:'चलाएं',      pt:'Executar',   tl:'Patakbuhin', fr:'Exécuter' },
    { ko:'결과',     en:'Results',    id:'Hasil',     zh:'结果',     ja:'結果',         es:'Resultados', vi:'Kết quả',    hi:'परिणाम',     pt:'Resultados', tl:'Resulta',    fr:'Résultats' },
  ],
  btn_next:     { ko:'다음',          en:'Next',              id:'Berikutnya',      zh:'下一步',        ja:'次へ',              es:'Siguiente',        vi:'Tiếp',               hi:'अगला',           pt:'Próximo',         tl:'Susunod',           fr:'Suivant' },
  btn_prev:     { ko:'이전',          en:'Back',              id:'Kembali',         zh:'上一步',        ja:'戻る',              es:'Atrás',            vi:'Quay lại',           hi:'पिछला',          pt:'Voltar',          tl:'Bumalik',           fr:'Retour' },
  btn_run:      { ko:'백테스트 시작', en:'Start Backtest',    id:'Mulai Backtest',  zh:'开始回测',      ja:'バックテスト開始',  es:'Iniciar Backtest', vi:'Bắt đầu Backtest',   hi:'बैकटेस्ट शुरू',  pt:'Iniciar Backtest', tl:'Simulan ang Backtest', fr:'Lancer Backtest' },
  btn_retry:    { ko:'다시 시도',     en:'Retry',             id:'Coba Lagi',       zh:'重试',          ja:'再試行',            es:'Reintentar',       vi:'Thử lại',            hi:'पुनः प्रयास',    pt:'Tentar novamente', tl:'Subukan ulit',      fr:'Réessayer' },
  btn_stop:     { ko:'수신 중단',     en:'Stop',              id:'Berhenti',        zh:'停止',          ja:'中断',              es:'Detener',          vi:'Dừng',               hi:'रोकें',           pt:'Parar',            tl:'Ihinto',            fr:'Arrêter' },
  btn_new:      { ko:'새 백테스트',   en:'New Backtest',      id:'Backtest Baru',   zh:'新回测',        ja:'新バックテスト',    es:'Nuevo Backtest',   vi:'Backtest mới',       hi:'नया बैकटेस्ट',   pt:'Novo Backtest',    tl:'Bagong Backtest',   fr:'Nouveau Backtest' },
  btn_params:   { ko:'← 파라미터',   en:'← Parameters',     id:'← Parameter',     zh:'← 参数',        ja:'← パラメータ',     es:'← Parámetros',     vi:'← Tham số',          hi:'← पैरामीटर',     pt:'← Parâmetros',     tl:'← Parametro',       fr:'← Paramètres' },
  btn_net:      { ko:'← 네트워크 변경', en:'← Change Network', id:'← Ganti Jaringan', zh:'← 更换网络', ja:'← ネットワーク変更', es:'← Cambiar Red',  vi:'← Đổi mạng',         hi:'← नेटवर्क बदलें', pt:'← Mudar Rede',    tl:'← Baguhin ang Network', fr:'← Changer Réseau' },

  net_title:    { ko:'네트워크 선택',  en:'Select Network',    id:'Pilih Jaringan',  zh:'选择网络',      ja:'ネットワーク選択',  es:'Seleccionar Red',  vi:'Chọn mạng',          hi:'नेटवर्क चुनें',  pt:'Selecionar Rede',  tl:'Piliin ang Network', fr:'Choisir Réseau' },
  stellar_name: { ko:'Stellar 메인넷', en:'Stellar Mainnet',   id:'Stellar Mainnet', zh:'Stellar 主网',  ja:'Stellar メインネット', es:'Stellar Mainnet', vi:'Stellar Mainnet',    hi:'Stellar मेनेट',  pt:'Stellar Mainnet',  tl:'Stellar Mainnet',   fr:'Stellar Mainnet' },
  stellar_desc: { ko:'Stellar 공식 메인넷 · XLM/USDC 등 풍부한 유동성', en:'Official Stellar mainnet · Rich liquidity', id:'Mainnet resmi Stellar · Likuiditas tinggi', zh:'Stellar 官方主网 · XLM/USDC 流动性丰富', ja:'Stellar公式メインネット · 豊富な流動性', es:'Mainnet oficial Stellar · Alta liquidez', vi:'Mainnet Stellar · Thanh khoản cao', hi:'Stellar आधिकारिक मेनेट · उच्च तरलता', pt:'Mainnet oficial Stellar · Alta liquidez', tl:'Opisyal na Stellar mainnet · Mataas na likido', fr:'Mainnet officiel Stellar · Liquidité élevée' },
  pi_name:      { ko:'Pi DEX',         en:'Pi DEX',            id:'Pi DEX',          zh:'Pi DEX',        ja:'Pi DEX',            es:'Pi DEX',           vi:'Pi DEX',             hi:'Pi DEX',         pt:'Pi DEX',           tl:'Pi DEX',             fr:'Pi DEX' },
  pi_desc:      { ko:'Pi 네트워크 DEX · Pi 메인넷 기반', en:'Pi Network DEX · Pi mainnet based', id:'DEX Jaringan Pi · Berbasis mainnet Pi', zh:'Pi 网络 DEX · 基于 Pi 主网', ja:'Pi ネットワーク DEX · Pi メインネットベース', es:'DEX de Pi Network · Basado en mainnet Pi', vi:'Pi Network DEX · Trên mainnet Pi', hi:'Pi Network DEX · Pi मेनेट आधारित', pt:'Pi Network DEX · Baseado no mainnet Pi', tl:'Pi Network DEX · Nakabase sa Pi mainnet', fr:'Pi Network DEX · Basé sur Pi mainnet' },

  str_title:    { ko:'전략 선택',      en:'Select Strategy',   id:'Pilih Strategi',  zh:'选择策略',      ja:'戦略選択',          es:'Seleccionar Estrategia', vi:'Chọn chiến lược', hi:'रणनीति चुनें',  pt:'Selecionar Estratégia', tl:'Piliin ang Estratehiya', fr:'Choisir Stratégie' },
  ob_name:      { ko:'오더북 마켓메이킹', en:'Orderbook Market Making', id:'Market Making Orderbook', zh:'订单簿做市', ja:'オーダーブック マーケットメイキング', es:'Creación de mercado (Orderbook)', vi:'Tạo lập thị trường Orderbook', hi:'ऑर्डरबुक मार्केट मेकिंग', pt:'Market Making (Orderbook)', tl:'Orderbook Market Making', fr:"Market Making (Carnet d'ordres)" },
  ob_desc:      { ko:'Bid/Ask 주문으로 스프레드 수익 시뮬레이션', en:'Simulate spread profit via bid/ask orders', id:'Simulasi profit spread via order bid/ask', zh:'通过买卖单模拟价差收益', ja:'買い/売り注文でスプレッド収益をシミュレート', es:'Simular ganancias de spread con órdenes bid/ask', vi:'Mô phỏng lợi nhuận chênh lệch giá qua lệnh mua/bán', hi:'Bid/Ask ऑर्डर से स्प्रेड लाभ का अनुकरण', pt:'Simular lucro de spread com ordens bid/ask', tl:'I-simulate ang kita sa spread sa pamamagitan ng bid/ask orders', fr:'Simuler les profits de spread via ordres bid/ask' },
  amm_name:     { ko:'AMM 유동성 공급', en:'AMM Liquidity Provision', id:'Suplai Likuiditas AMM', zh:'AMM 流动性提供', ja:'AMM 流動性プロビジョニング', es:'Provisión de Liquidez AMM', vi:'Cung cấp thanh khoản AMM', hi:'AMM तरलता प्रावधान', pt:'Provisão de Liquidez AMM', tl:'AMM Liquidity Provision', fr:'Fourniture de Liquidité AMM' },
  amm_desc:     { ko:'풀에 예치 후 수수료 + 비영구적 손실 시뮬레이션', en:'Fee income & impermanent loss simulation', id:'Simulasi pendapatan fee & kerugian impermanent', zh:'存入池后模拟手续费收益和无常损失', ja:'プールに預けた後の手数料収益＋無常損失をシミュレート', es:'Simular ingresos por comisión y pérdida impermanente', vi:'Mô phỏng thu nhập phí & tổn thất vô thường', hi:'पूल में जमा के बाद शुल्क + अस्थायी हानि का अनुकरण', pt:'Simular renda de taxa e perda impermanente', tl:'Simulate ang kita mula sa bayad at impermanent loss', fr:'Simuler revenus de frais et perte impermanente' },
  amm_disabled: { ko:'⚠️ Pi DEX는 AMM 풀이 없어 사용 불가', en:'⚠️ Pi DEX has no AMM pools', id:'⚠️ Pi DEX tidak memiliki pool AMM', zh:'⚠️ Pi DEX 没有 AMM 池', ja:'⚠️ Pi DEX に AMM プールがありません', es:'⚠️ Pi DEX no tiene pools AMM', vi:'⚠️ Pi DEX không có pool AMM', hi:'⚠️ Pi DEX में AMM पूल नहीं है', pt:'⚠️ Pi DEX não tem pools AMM', tl:'⚠️ Walang AMM pool ang Pi DEX', fr:"⚠️ Pi DEX n'a pas de pools AMM" },

  pool_title:   { ko:'풀 선택',        en:'Select Pool',       id:'Pilih Pool',      zh:'选择池',        ja:'プール選択',        es:'Seleccionar Pool',  vi:'Chọn Pool',         hi:'पूल चुनें',      pt:'Selecionar Pool',  tl:'Piliin ang Pool',    fr:'Choisir Pool' },
  pair_title:   { ko:'페어 선택',      en:'Select Pair',       id:'Pilih Pasangan',  zh:'选择交易对',    ja:'ペア選択',          es:'Seleccionar Par',   vi:'Chọn cặp',          hi:'पेयर चुनें',     pt:'Selecionar Par',   tl:'Piliin ang Pares',   fr:'Choisir la Paire' },
  loading_pools:{ ko:'풀 목록 불러오는 중', en:'Loading pools', id:'Memuat daftar pool', zh:'加载池列表中', ja:'プールリスト読込中', es:'Cargando pools',  vi:'Đang tải danh sách pool', hi:'पूल सूची लोड हो रही है', pt:'Carregando pools', tl:'Nilo-load ang mga pool', fr:'Chargement des pools' },
  loading_pairs:{ ko:'거래 페어 불러오는 중', en:'Loading pairs', id:'Memuat pasangan trading', zh:'加载交易对中', ja:'取引ペア読込中', es:'Cargando pares', vi:'Đang tải cặp giao dịch', hi:'ट्रेडिंग पेयर लोड हो रहे हैं', pt:'Carregando pares', tl:'Nilo-load ang mga pares', fr:'Chargement des paires' },
  sec:          { ko:'초', en:'sec', id:'dtk', zh:'秒', ja:'秒', es:'seg', vi:'giây', hi:'सेकंड', pt:'seg', tl:'seg', fr:'sec' },
  search_ph:    { ko:'토큰 이름 검색...', en:'Search token...', id:'Cari nama token...', zh:'搜索代币...', ja:'トークン検索...', es:'Buscar token...', vi:'Tìm kiếm token...', hi:'टोकन खोजें...', pt:'Buscar token...', tl:'Hanapin ang token...', fr:'Rechercher token...' },
  sort_lp:      { ko:'XLM 전체 풀 · 7일 거래 횟수 90% + LP 수 10% 순', en:'All XLM pools · 7d trade count 90% + LP 10%', id:'Semua pool XLM · Frekuensi 7h 90% + LP 10%', zh:'XLM全部池 · 7日交易次数90% + LP数10%', ja:'XLM全プール · 7日取引回数90% + LP数10%順', es:'Todos pools XLM · Operaciones 7d 90% + LP 10%', vi:'Tất cả pool XLM · Số giao dịch 7d 90% + LP 10%', hi:'सभी XLM पूल · 7d ट्रेड 90% + LP 10%', pt:'Todos pools XLM · Negociações 7d 90% + LP 10%', tl:'Lahat ng XLM pool · 7d trade count 90% + LP 10%', fr:'Tous pools XLM · Transactions 7j 90% + LP 10%' },
  sort_tvl:     { ko:'XLM 전체 풀 · 거래량/TVL 비율 (수수료 APY) 순', en:'All XLM pools · Volume/TVL ratio (fee APY)', id:'Semua pool XLM · Rasio volume/TVL (APY biaya)', zh:'XLM全部池 · 交易量/TVL比率（手续费APY）', ja:'XLM全プール · 取引量/TVL比率（手数料APY）順', es:'Todos pools XLM · Ratio volumen/TVL (APY comisión)', vi:'Tất cả pool XLM · Tỷ lệ khối lượng/TVL (APY phí)', hi:'सभी XLM पूल · वॉल्यूम/TVL अनुपात (शुल्क APY)', pt:'Todos pools XLM · Proporção volume/TVL (APY de taxa)', tl:'Lahat ng XLM pool · Volume/TVL ratio (fee APY)', fr:'Tous pools XLM · Ratio volume/TVL (APY de frais)' },
  sort_pi_amm:  { ko:'Pi DEX AMM 풀 · LP 수 순 정렬', en:'Pi DEX AMM pools · Sorted by LP count', id:'Pool AMM Pi DEX · Urut jumlah LP', zh:'Pi DEX AMM 池 · 按 LP 数量排序', ja:'Pi DEX AMM プール · LP数順', es:'Pools AMM Pi DEX · Ordenado por LP', vi:'Pool AMM Pi DEX · Sắp xếp theo số LP', hi:'Pi DEX AMM पूल · LP संख्या के अनुसार', pt:'Pools AMM Pi DEX · Ordenado por LP', tl:'Pi DEX AMM pools · Nakaayos ayon sa LP count', fr:'Pools AMM Pi DEX · Trié par nombre de LP' },
  pi_info:      { ko:'Pi DEX · 오더북 거래 데이터 · 거래량 순 정렬', en:'Pi DEX · Orderbook data · Sorted by volume', id:'Pi DEX · Data orderbook · Urut volume', zh:'Pi DEX · 订单簿交易数据 · 按交易量排序', ja:'Pi DEX · オーダーブックデータ · 取引量順', es:'Pi DEX · Datos orderbook · Ordenado por volumen', vi:'Pi DEX · Dữ liệu orderbook · Sắp xếp theo khối lượng', hi:'Pi DEX · ऑर्डरबुक डेटा · वॉल्यूम के अनुसार', pt:'Pi DEX · Dados orderbook · Ordenado por volume', tl:'Pi DEX · Orderbook data · Nakaayos ayon sa volume', fr:'Pi DEX · Données orderbook · Trié par volume' },
  recommended:  { ko:'추천', en:'Top', id:'Unggulan', zh:'推荐', ja:'おすすめ', es:'Top', vi:'Nổi bật', hi:'अनुशंसित', pt:'Top', tl:'Inirerekomenda', fr:'Top' },
  recent_trades:{ ko:'최근 거래', en:'Recent trades', id:'Transaksi terkini', zh:'最近交易', ja:'最近の取引', es:'Operaciones recientes', vi:'Giao dịch gần đây', hi:'हालिया ट्रेड', pt:'Negociações recentes', tl:'Kamakailang trades', fr:'Transactions récentes' },
  lp_count:     { ko:'LP 수', en:'LP count', id:'Jml LP', zh:'LP 数', ja:'LP数', es:'LP count', vi:'Số LP', hi:'LP संख्या', pt:'Qtd LP', tl:'LP count', fr:'Nb LP' },
  liquidity:    { ko:'유동성', en:'Liquidity', id:'Likuiditas', zh:'流动性', ja:'流動性', es:'Liquidez', vi:'Thanh khoản', hi:'तरलता', pt:'Liquidez', tl:'Liquidity', fr:'Liquidité' },
  no_results:   { ko:'검색 결과 없음', en:'No results', id:'Tidak ada hasil', zh:'无结果', ja:'結果なし', es:'Sin resultados', vi:'Không có kết quả', hi:'कोई परिणाम नहीं', pt:'Sem resultados', tl:'Walang resulta', fr:'Aucun résultat' },
  pool_fail:    { ko:'풀 목록 로드 실패', en:'Pool load failed', id:'Gagal memuat pool', zh:'池列表加载失败', ja:'プールリスト読み込み失敗', es:'Error al cargar pools', vi:'Lỗi tải danh sách pool', hi:'पूल सूची लोड विफल', pt:'Falha ao carregar pools', tl:'Nabigo ang pag-load ng pool', fr:'Échec chargement pools' },
  pair_fail:    { ko:'페어 로드 실패', en:'Pair load failed', id:'Gagal memuat pasangan', zh:'交易对加载失败', ja:'ペア読み込み失敗', es:'Error al cargar pares', vi:'Lỗi tải cặp giao dịch', hi:'पेयर लोड विफल', pt:'Falha ao carregar pares', tl:'Nabigo ang pag-load ng pares', fr:'Échec chargement paires' },
  no_trade_data:{ ko:'거래 데이터 없음', en:'No trade data', id:'Tidak ada data trading', zh:'无交易数据', ja:'取引データなし', es:'Sin datos de trading', vi:'Không có dữ liệu giao dịch', hi:'कोई ट्रेड डेटा नहीं', pt:'Sem dados de trading', tl:'Walang datos sa trade', fr:'Pas de données de trading' },

  param_title:  { ko:'파라미터 설정', en:'Parameter Settings', id:'Pengaturan Parameter', zh:'参数设置', ja:'パラメータ設定', es:'Ajustes de Parámetros', vi:'Cài đặt tham số', hi:'पैरामीटर सेटिंग', pt:'Configurações de Parâmetros', tl:'Mga Setting ng Parametro', fr:'Réglages des Paramètres' },
  p_records:    { ko:'데이터 건수 (5,000~10,000)', en:'Data count (5,000~10,000)', id:'Jumlah data (5.000~10.000)', zh:'数据条数 (5,000~10,000)', ja:'データ件数 (5,000~10,000)', es:'Cantidad de datos (5.000~10.000)', vi:'Số bản ghi (5.000~10.000)', hi:'डेटा गणना (5,000~10,000)', pt:'Qtd dados (5.000~10.000)', tl:'Bilang ng data (5,000~10,000)', fr:'Nb de données (5 000~10 000)' },
  p_capital:    { ko:'초기 자본', en:'Initial Capital', id:'Modal Awal', zh:'初始资金', ja:'初期資本', es:'Capital inicial', vi:'Vốn ban đầu', hi:'प्रारंभिक पूंजी', pt:'Capital inicial', tl:'Panimulang kapital', fr:'Capital initial' },
  p_split:      { ko:'네이티브 초기 비율 (%)', en:'Native ratio (%)', id:'Rasio awal native (%)', zh:'原生代币初始比例 (%)', ja:'ネイティブ初期比率 (%)', es:'Ratio inicial nativo (%)', vi:'Tỷ lệ ban đầu native (%)', hi:'नेटिव प्रारंभिक अनुपात (%)', pt:'Proporção inicial nativa (%)', tl:'Native initial ratio (%)', fr:'Ratio natif initial (%)' },
  p_spread:     { ko:'스프레드 (%)', en:'Spread (%)', id:'Spread (%)', zh:'价差 (%)', ja:'スプレッド (%)', es:'Spread (%)', vi:'Chênh lệch (%)', hi:'स्प्रेड (%)', pt:'Spread (%)', tl:'Spread (%)', fr:'Écart (%)' },
  p_order_size: { ko:'주문 크기 (총자산 %)', en:'Order size (% of total)', id:'Ukuran order (% total)', zh:'订单大小 (总资产 %)', ja:'注文サイズ（総資産 %）', es:'Tamaño de orden (% total)', vi:'Kích thước lệnh (% tổng)', hi:'ऑर्डर साइज (कुल %)', pt:'Tamanho da ordem (% total)', tl:'Laki ng order (% ng total)', fr:"Taille d'ordre (% total)" },
  p_layers:     { ko:'주문 레이어 수', en:'Order layers', id:'Jumlah layer order', zh:'订单层数', ja:'注文レイヤー数', es:'Capas de orden', vi:'Số lớp lệnh', hi:'ऑर्डर लेयर्स', pt:'Camadas de ordem', tl:'Bilang ng order layer', fr:"Couches d'ordres" },
  p_stop:       { ko:'재고 중단 (%)', en:'Inventory stop (%)', id:'Batas inventori (%)', zh:'库存中断 (%)', ja:'在庫停止 (%)', es:'Parada por inventario (%)', vi:'Dừng tồn kho (%)', hi:'इन्वेंटरी स्टॉप (%)', pt:'Parada de inventário (%)', tl:'Inventory stop (%)', fr:'Arrêt inventaire (%)' },
  p_fee:        { ko:'수수료 (%)', en:'Fee (%)', id:'Biaya (%)', zh:'手续费 (%)', ja:'手数料 (%)', es:'Comisión (%)', vi:'Phí (%)', hi:'शुल्क (%)', pt:'Taxa (%)', tl:'Bayad (%)', fr:'Frais (%)' },
  p_surge_ticks:{ ko:'급변 감지 틱', en:'Surge window (ticks)', id:'Tik deteksi lonjakan', zh:'价格急变检测间隔', ja:'急変検出ティック', es:'Ticks de detección de pico', vi:'Ticks phát hiện biến động', hi:'उछाल विंडो (टिक)', pt:'Janela de surto (ticks)', tl:'Surge detection ticks', fr:'Fenêtre de pic (ticks)' },
  p_surge_pct:  { ko:'급변 감지 (%)', en:'Surge threshold (%)', id:'Ambang lonjakan (%)', zh:'价格急变检测 (%)', ja:'急変検出 (%)', es:'Umbral de pico (%)', vi:'Ngưỡng biến động (%)', hi:'उछाल सीमा (%)', pt:'Limiar de surto (%)', tl:'Surge threshold (%)', fr:'Seuil de pic (%)' },
  p_deposit:    { ko:'예치 금액', en:'Deposit amount', id:'Jumlah deposit', zh:'存款金额', ja:'預入金額', es:'Monto de depósito', vi:'Số tiền gửi', hi:'जमा राशि', pt:'Valor do depósito', tl:'Halaga ng deposit', fr:'Montant du dépôt' },
  p_max_il:     { ko:'최대 비영구적 손실 (%)', en:'Max impermanent loss (%)', id:'Maks. kerugian impermanent (%)', zh:'最大无常损失 (%)', ja:'最大無常損失 (%)', es:'Pérdida impermanente máx. (%)', vi:'Tổn thất vô thường tối đa (%)', hi:'अधिकतम अस्थायी हानि (%)', pt:'Perda impermanente máx. (%)', tl:'Max impermanent loss (%)', fr:'Perte impermanente max. (%)' },
  p_target_roi: { ko:'목표 수익률 (%)', en:'Target ROI (%)', id:'Target ROI (%)', zh:'目标收益率 (%)', ja:'目標ROI (%)', es:'ROI objetivo (%)', vi:'ROI mục tiêu (%)', hi:'लक्ष्य ROI (%)', pt:'ROI alvo (%)', tl:'Target ROI (%)', fr:'ROI cible (%)' },

  run_title:    { ko:'데이터 수집 및 백테스트', en:'Fetching Data & Backtesting', id:'Pengambilan Data & Backtest', zh:'数据采集与回测', ja:'データ収集＆バックテスト', es:'Recopilación de datos y Backtest', vi:'Thu thập dữ liệu & Backtest', hi:'डेटा संग्रह और बैकटेस्ट', pt:'Coleta de dados e Backtest', tl:'Pagkuha ng data at Backtest', fr:'Collecte de données et Backtest' },
  run_start:    { ko:'시작 중...', en:'Starting...', id:'Memulai...', zh:'启动中...', ja:'開始中...', es:'Iniciando...', vi:'Đang bắt đầu...', hi:'शुरू हो रहा है...', pt:'Iniciando...', tl:'Nagsisimula...', fr:'Démarrage...' },
  run_fetching: { ko:'건 수신 중...', en:'records fetching...', id:'data sedang diambil...', zh:'条接收中...', ja:'件取得中...', es:'registros descargando...', vi:'bản ghi đang tải...', hi:'रिकॉर्ड प्राप्त हो रहे हैं...', pt:'registros buscando...', tl:'mga rekord kinukuha...', fr:'enregistrements reçus...' },
  run_running:  { ko:'백테스트 실행 중...', en:'Running backtest...', id:'Menjalankan backtest...', zh:'回测运行中...', ja:'バックテスト実行中...', es:'Ejecutando backtest...', vi:'Đang chạy backtest...', hi:'बैकटेस्ट चल रहा है...', pt:'Executando backtest...', tl:'Nagpapatakbo ng backtest...', fr:'Exécution du backtest...' },
  run_done:     { ko:'완료!', en:'Done!', id:'Selesai!', zh:'完成！', ja:'完了！', es:'¡Listo!', vi:'Hoàn thành!', hi:'हो गया!', pt:'Concluído!', tl:'Tapos na!', fr:'Terminé !' },
  run_req:      { ko:'건 요청', en:'records requested', id:'data diminta', zh:'条已请求', ja:'件リクエスト', es:'registros solicitados', vi:'bản ghi đã yêu cầu', hi:'रिकॉर्ड अनुरोधित', pt:'registros solicitados', tl:'mga rekord hiniling', fr:'enregistrements demandés' },
  run_received: { ko:'건 수신', en:'records received', id:'data diterima', zh:'条已接收', ja:'件受信', es:'registros recibidos', vi:'bản ghi đã nhận', hi:'रिकॉर्ड प्राप्त', pt:'registros recebidos', tl:'mga rekord natanggap', fr:'enregistrements reçus' },
  run_valid:    { ko:'유효 거래', en:'valid trades', id:'transaksi valid', zh:'有效交易', ja:'有効取引', es:'operaciones válidas', vi:'giao dịch hợp lệ', hi:'वैध ट्रेड', pt:'negociações válidas', tl:'valid na trades', fr:'transactions valides' },
  run_complete: { ko:'완료', en:'complete', id:'selesai', zh:'完成', ja:'完了', es:'completo', vi:'hoàn thành', hi:'पूर्ण', pt:'completo', tl:'kumpleto', fr:'complet' },
  run_too_few:  { ko:'데이터가 너무 적습니다 (10건 미만)', en:'Too little data (under 10 records)', id:'Data terlalu sedikit (kurang dari 10)', zh:'数据太少（不足10条）', ja:'データが少なすぎます（10件未満）', es:'Datos insuficientes (menos de 10)', vi:'Dữ liệu quá ít (dưới 10 bản ghi)', hi:'डेटा बहुत कम है (10 से कम)', pt:'Dados insuficientes (menos de 10)', tl:'Napakaliit ng data (wala pang 10)', fr:'Données insuffisantes (moins de 10)' },
  run_error:    { ko:'오류', en:'Error', id:'Kesalahan', zh:'错误', ja:'エラー', es:'Error', vi:'Lỗi', hi:'त्रुटि', pt:'Erro', tl:'Error', fr:'Erreur' },

  res_summary:  { ko:'종합 결과', en:'Summary', id:'Ringkasan', zh:'综合结果', ja:'総合結果', es:'Resumen', vi:'Tổng kết', hi:'सारांश', pt:'Resumo', tl:'Buod', fr:'Résumé' },
  res_pnl:      { ko:'총 손익', en:'Total P&L', id:'Total P&L', zh:'总盈亏', ja:'総損益', es:'P&L Total', vi:'Tổng P&L', hi:'कुल P&L', pt:'P&L Total', tl:'Kabuuang P&L', fr:'P&L Total' },
  res_spread:   { ko:'스프레드 수익', en:'Spread profit', id:'Profit spread', zh:'价差收益', ja:'スプレッド収益', es:'Ganancia de spread', vi:'Lợi nhuận spread', hi:'स्प्रेड लाभ', pt:'Lucro de spread', tl:'Kita sa spread', fr:'Profit de spread' },
  res_inv:      { ko:'재고 평가손익', en:'Inventory P&L', id:'P&L inventori', zh:'库存评估损益', ja:'在庫評価損益', es:'P&L de inventario', vi:'P&L tồn kho', hi:'इन्वेंटरी P&L', pt:'P&L de inventário', tl:'Inventory P&L', fr:"P&L d'inventaire" },
  res_fees:     { ko:'수수료 합계', en:'Total fees', id:'Total biaya', zh:'总手续费', ja:'手数料合計', es:'Total comisiones', vi:'Tổng phí', hi:'कुल शुल्क', pt:'Total de taxas', tl:'Kabuuang bayad', fr:'Total frais' },
  res_stats:    { ko:'거래 통계', en:'Trade Statistics', id:'Statistik Trading', zh:'交易统计', ja:'取引統計', es:'Estadísticas de Trading', vi:'Thống kê giao dịch', hi:'ट्रेड आँकड़े', pt:'Estatísticas de Trading', tl:'Mga Istatistika sa Trade', fr:'Statistiques de Trading' },
  res_fills:    { ko:'체결 횟수', en:'Fill count', id:'Jumlah fill', zh:'成交次数', ja:'約定回数', es:'Cantidad de fills', vi:'Số lần khớp lệnh', hi:'फिल की संख्या', pt:'Qtd de fills', tl:'Bilang ng fill', fr:'Nombre de fills' },
  res_ticks:    { ko:'분석 틱 수', en:'Ticks analyzed', id:'Tik dianalisis', zh:'分析周期数', ja:'分析ティック数', es:'Ticks analizados', vi:'Số ticks phân tích', hi:'विश्लेषित टिक्स', pt:'Ticks analisados', tl:'Mga tick na sinuri', fr:'Ticks analysés' },
  res_price_chg:{ ko:'가격 변화', en:'Price change', id:'Perubahan harga', zh:'价格变化', ja:'価格変化', es:'Cambio de precio', vi:'Thay đổi giá', hi:'मूल्य परिवर्तन', pt:'Variação de preço', tl:'Pagbabago ng presyo', fr:'Variation de prix' },
  res_stop:     { ko:'중단 사유', en:'Stop reason', id:'Alasan berhenti', zh:'中断原因', ja:'停止理由', es:'Razón de parada', vi:'Lý do dừng', hi:'रोकने का कारण', pt:'Motivo de parada', tl:'Dahilan ng paghinto', fr:"Raison d'arrêt" },
  res_log:      { ko:'거래 로그 (최근 20건)', en:'Trade log (last 20)', id:'Log trading (20 terakhir)', zh:'交易日志（最近20条）', ja:'取引ログ（最近20件）', es:'Registro de operaciones (últimas 20)', vi:'Nhật ký giao dịch (20 gần nhất)', hi:'ट्रेड लॉग (अंतिम 20)', pt:'Log de negociações (últimas 20)', tl:'Trade log (huling 20)', fr:'Journal de trading (20 derniers)' },
  res_no_fills: { ko:'체결 없음', en:'No fills', id:'Tidak ada fill', zh:'无成交', ja:'約定なし', es:'Sin fills', vi:'Không có khớp lệnh', hi:'कोई फिल नहीं', pt:'Sem fills', tl:'Walang fill', fr:'Pas de fills' },
  res_asset_chart:{ ko:'총 자산 추이 (USDC)', en:'Total Asset Trend (USDC)', id:'Tren Total Aset (USDC)', zh:'总资产趋势 (USDC)', ja:'総資産推移 (USDC)', es:'Tendencia de activos totales (USDC)', vi:'Xu hướng tổng tài sản (USDC)', hi:'कुल संपत्ति प्रवृत्ति (USDC)', pt:'Tendência de ativos totais (USDC)', tl:'Trend ng kabuuang asset (USDC)', fr:'Tendance des actifs totaux (USDC)' },
  res_lp_title: { ko:'LP 수익 결과', en:'LP Return Summary', id:'Ringkasan Return LP', zh:'LP 收益结果', ja:'LP 収益結果', es:'Resumen de retorno LP', vi:'Kết quả lợi nhuận LP', hi:'LP रिटर्न सारांश', pt:'Resumo de retorno LP', tl:'LP Return Summary', fr:'Résumé du rendement LP' },
  res_lp_pnl:   { ko:'LP 총 손익', en:'LP Total P&L', id:'Total P&L LP', zh:'LP 总盈亏', ja:'LP 総損益', es:'P&L Total LP', vi:'Tổng P&L LP', hi:'LP कुल P&L', pt:'P&L Total LP', tl:'LP Total P&L', fr:'P&L Total LP' },
  res_fee_inc:  { ko:'수수료 수익', en:'Fee income', id:'Pendapatan biaya', zh:'手续费收益', ja:'手数料収益', es:'Ingresos por comisiones', vi:'Thu nhập phí', hi:'शुल्क आय', pt:'Renda de taxas', tl:'Kita sa bayad', fr:'Revenus de frais' },
  res_il:       { ko:'비영구적 손실', en:'Impermanent loss', id:'Kerugian impermanent', zh:'无常损失', ja:'無常損失', es:'Pérdida impermanente', vi:'Tổn thất vô thường', hi:'अस्थायी हानि', pt:'Perda impermanente', tl:'Impermanent loss', fr:'Perte impermanente' },
  res_vs_hodl:  { ko:'HODL 대비', en:'vs HODL', id:'vs HODL', zh:'相比 HODL', ja:'HODL 対比', es:'vs HODL', vi:'so với HODL', hi:'HODL की तुलना में', pt:'vs HODL', tl:'kumpara sa HODL', fr:'vs HODL' },
  res_lp_share: { ko:'내 LP 지분', en:'My LP share', id:'Bagian LP saya', zh:'我的 LP 份额', ja:'私のLP持分', es:'Mi parte LP', vi:'Phần LP của tôi', hi:'मेरा LP हिस्सा', pt:'Minha cota LP', tl:'Aking LP share', fr:'Ma part LP' },
  res_exit:     { ko:'종료 사유', en:'Exit reason', id:'Alasan keluar', zh:'退出原因', ja:'終了理由', es:'Razón de salida', vi:'Lý do thoát', hi:'बाहर निकलने का कारण', pt:'Motivo de saída', tl:'Dahilan ng paglabas', fr:'Raison de sortie' },
  res_lp_chart: { ko:'LP vs HODL 자산 추이 (USDC)', en:'LP vs HODL Trend (USDC)', id:'Tren LP vs HODL (USDC)', zh:'LP vs HODL 资产趋势 (USDC)', ja:'LP vs HODL 資産推移 (USDC)', es:'Tendencia LP vs HODL (USDC)', vi:'Xu hướng LP vs HODL (USDC)', hi:'LP vs HODL संपत्ति प्रवृत्ति (USDC)', pt:'Tendência LP vs HODL (USDC)', tl:'LP vs HODL trend (USDC)', fr:'Tendance LP vs HODL (USDC)' },
  res_none:     { ko:'결과 없음', en:'No result', id:'Tidak ada hasil', zh:'无结果', ja:'結果なし', es:'Sin resultado', vi:'Không có kết quả', hi:'कोई परिणाम नहीं', pt:'Sem resultado', tl:'Walang resulta', fr:'Aucun résultat' },

  ana_no_fills: { ko:'⚠️ 체결 0회 — 스프레드를 줄이거나 레이어를 늘려보세요', en:'⚠️ 0 fills — Try reducing spread or adding layers', id:'⚠️ 0 fill — Kurangi spread atau tambah layer', zh:'⚠️ 成交0次 — 请缩小价差或增加层数', ja:'⚠️ 約定0回 — スプレッドを縮めるかレイヤーを増やしてください', es:'⚠️ 0 fills — Reduzca el spread o añada capas', vi:'⚠️ 0 lần khớp — Giảm spread hoặc thêm lớp lệnh', hi:'⚠️ 0 फिल — स्प्रेड कम करें या लेयर बढ़ाएं', pt:'⚠️ 0 fills — Reduza o spread ou adicione camadas', tl:'⚠️ 0 fill — Bawasan ang spread o dagdagan ang layer', fr:'⚠️ 0 fills — Réduisez le spread ou ajoutez des couches' },
  ana_good:     { ko:'✅ 스프레드 수익과 전체 손익 모두 플러스', en:'✅ Both spread profit and total P&L are positive', id:'✅ Profit spread dan total P&L keduanya positif', zh:'✅ 价差收益和总盈亏均为正', ja:'✅ スプレッド収益と総損益がともにプラス', es:'✅ Ganancia de spread y P&L total ambos positivos', vi:'✅ Lợi nhuận spread và tổng P&L đều dương', hi:'✅ स्प्रेड लाभ और कुल P&L दोनों सकारात्मक', pt:'✅ Lucro de spread e P&L total ambos positivos', tl:'✅ Parehong positibo ang spread profit at kabuuang P&L', fr:'✅ Profit de spread et P&L total tous deux positifs' },
  ana_inv_loss: { ko:'⚠️ 스프레드 수익은 났지만 가격 변동으로 재고 손실이 더 큼', en:'⚠️ Spread profit positive but inventory loss exceeded it', id:'⚠️ Profit spread ada tapi kerugian inventori lebih besar', zh:'⚠️ 价差收益为正但价格波动导致库存损失更大', ja:'⚠️ スプレッド収益はプラスだが価格変動で在庫損失が大きい', es:'⚠️ Spread positivo pero pérdida de inventario superó las ganancias', vi:'⚠️ Lợi nhuận spread dương nhưng tổn thất tồn kho lớn hơn', hi:'⚠️ स्प्रेड लाभ था लेकिन इन्वेंटरी हानि अधिक', pt:'⚠️ Spread positivo mas perda de inventário foi maior', tl:'⚠️ Positibo ang spread profit ngunit mas malaki ang inventory loss', fr:"⚠️ Spread positif mais la perte d'inventaire l'a dépassé" },
  ana_bad:      { ko:'❌ 체결 부족 또는 수수료가 수익 초과', en:'❌ Too few fills or fees exceeded profit', id:'❌ Fill kurang atau biaya melebihi profit', zh:'❌ 成交不足或手续费超过收益', ja:'❌ 約定不足または手数料が収益超え', es:'❌ Fills insuficientes o comisiones superaron ganancias', vi:'❌ Quá ít khớp lệnh hoặc phí vượt lợi nhuận', hi:'❌ बहुत कम फिल या शुल्क लाभ से अधिक', pt:'❌ Poucos fills ou taxas superaram o lucro', tl:'❌ Kulang ang fill o mas mataas ang bayad kaysa kita', fr:'❌ Trop peu de fills ou frais ont dépassé les profits' },
  ana_amm_good: { ko:'✅ 수수료 수익이 비영구적 손실을 상쇄', en:'✅ Fee income offsets impermanent loss', id:'✅ Pendapatan biaya mengimbangi kerugian impermanent', zh:'✅ 手续费收益抵消了无常损失', ja:'✅ 手数料収益が無常損失を相殺', es:'✅ Los ingresos por comisiones compensaron la pérdida impermanente', vi:'✅ Thu nhập phí bù đắp tổn thất vô thường', hi:'✅ शुल्क आय ने अस्थायी हानि की भरपाई की', pt:'✅ Renda de taxas compensou a perda impermanente', tl:'✅ Nayosi ng kita sa bayad ang impermanent loss', fr:'✅ Les revenus de frais ont compensé la perte impermanente' },
  ana_amm_bad:  { ko:'⚠️ 비영구적 손실이 수수료 수익보다 큼', en:'⚠️ Impermanent loss exceeds fee income', id:'⚠️ Kerugian impermanent melebihi pendapatan biaya', zh:'⚠️ 无常损失超过手续费收益', ja:'⚠️ 無常損失が手数料収益を超えた', es:'⚠️ La pérdida impermanente superó los ingresos por comisiones', vi:'⚠️ Tổn thất vô thường vượt thu nhập phí', hi:'⚠️ अस्थायी हानि शुल्क आय से अधिक', pt:'⚠️ Perda impermanente superou renda de taxas', tl:'⚠️ Mas mataas ang impermanent loss kaysa kita sa bayad', fr:'⚠️ La perte impermanente a dépassé les revenus de frais' },

  chart_total:  { ko:'총 자산', en:'Total Asset', id:'Total Aset', zh:'总资产', ja:'総資産', es:'Activos Totales', vi:'Tổng tài sản', hi:'कुल संपत्ति', pt:'Ativos Totais', tl:'Kabuuang asset', fr:'Actifs Totaux' },
  chart_lp:     { ko:'LP 자산', en:'LP Asset', id:'Aset LP', zh:'LP 资产', ja:'LP資産', es:'Activos LP', vi:'Tài sản LP', hi:'LP संपत्ति', pt:'Ativos LP', tl:'LP asset', fr:'Actifs LP' },
  chart_hodl:   { ko:'HODL', en:'HODL', id:'HODL', zh:'HODL', ja:'HODL', es:'HODL', vi:'HODL', hi:'HODL', pt:'HODL', tl:'HODL', fr:'HODL' },

  // ── Info panel ──
  ip_title:       { ko:'앱 소개 / 사용법', en:'About & How to Use', id:'Tentang & Cara Pakai', zh:'关于 / 使用说明', ja:'アプリ紹介 / 使い方', es:'Acerca de / Cómo usar', vi:'Giới thiệu & Hướng dẫn', hi:'जानकारी / उपयोग', pt:'Sobre / Como usar', tl:'Tungkol at Paano Gamitin', fr:'À propos / Utilisation' },
  ip_about:       { ko:'DEX 마켓메이킹 전략 백테스터입니다. Stellar 메인넷과 Pi DEX의 실제 거래 데이터를 기반으로 오더북 마켓메이킹과 AMM 유동성 공급 시뮬레이션을 제공합니다.', en:'A DEX market-making strategy backtester. Simulates orderbook market making and AMM liquidity provision using real historical trade data from Stellar Mainnet and Pi DEX.', id:'Backtester strategi market-making DEX. Mensimulasikan market making orderbook dan suplai likuiditas AMM menggunakan data perdagangan historis nyata dari Stellar Mainnet dan Pi DEX.', zh:'DEX 做市策略回测工具。基于 Stellar 主网和 Pi DEX 的真实历史交易数据，提供订单簿做市和 AMM 流动性提供的模拟。', ja:'DEXマーケットメイキング戦略バックテスターです。StellarメインネットとPi DEXの実際の取引データを使用して、オーダーブックマーケットメイキングとAMM流動性プロビジョニングのシミュレーションを提供します。', es:'Backtester de estrategias de market-making en DEX. Simula market making de orderbook y provisión de liquidez AMM usando datos históricos reales de Stellar Mainnet y Pi DEX.', vi:'Công cụ backtest chiến lược market-making trên DEX. Mô phỏng market making orderbook và cung cấp thanh khoản AMM dựa trên dữ liệu giao dịch lịch sử thực từ Stellar Mainnet và Pi DEX.', hi:'DEX मार्केट-मेकिंग रणनीति बैकटेस्टर। Stellar Mainnet और Pi DEX के वास्तविक ऐतिहासिक ट्रेड डेटा का उपयोग करके ऑर्डरबुक मार्केट मेकिंग और AMM तरलता प्रावधान का अनुकरण।', pt:'Backtester de estratégias de market-making em DEX. Simula market making de orderbook e provisão de liquidez AMM usando dados históricos reais do Stellar Mainnet e Pi DEX.', tl:'Backtester ng DEX market-making strategy. Sine-simulate ang orderbook market making at AMM liquidity provision gamit ang tunay na datos ng nakaraang trade mula sa Stellar Mainnet at Pi DEX.', fr:"Backtesteur de stratégies de market-making sur DEX. Simule le market making en carnet d'ordres et la fourniture de liquidité AMM en utilisant des données historiques réelles de Stellar Mainnet et Pi DEX." },
  ip_how:         { ko:'사용법', en:'How to Use', id:'Cara Pakai', zh:'使用说明', ja:'使い方', es:'Cómo usar', vi:'Hướng dẫn sử dụng', hi:'उपयोग कैसे करें', pt:'Como usar', tl:'Paano Gamitin', fr:'Comment utiliser' },
  ip_s1:          { ko:'Stellar 메인넷 또는 Pi DEX를 선택합니다.', en:'Choose Stellar Mainnet or Pi DEX.', id:'Pilih Stellar Mainnet atau Pi DEX.', zh:'选择 Stellar 主网或 Pi DEX。', ja:'Stellar メインネットまたは Pi DEX を選択します。', es:'Elija Stellar Mainnet o Pi DEX.', vi:'Chọn Stellar Mainnet hoặc Pi DEX.', hi:'Stellar Mainnet या Pi DEX चुनें।', pt:'Escolha Stellar Mainnet ou Pi DEX.', tl:'Piliin ang Stellar Mainnet o Pi DEX.', fr:'Choisissez Stellar Mainnet ou Pi DEX.' },
  ip_s2:          { ko:'오더북 마켓메이킹 또는 AMM 유동성 공급 전략을 선택합니다.', en:'Choose Orderbook Market Making or AMM Liquidity Provision.', id:'Pilih strategi Market Making Orderbook atau Suplai Likuiditas AMM.', zh:'选择订单簿做市或 AMM 流动性提供策略。', ja:'オーダーブック マーケットメイキングまたは AMM 流動性プロビジョニングを選択します。', es:'Elija Market Making de Orderbook o Provisión de Liquidez AMM.', vi:'Chọn chiến lược Market Making Orderbook hoặc cung cấp thanh khoản AMM.', hi:'Orderbook Market Making या AMM Liquidity Provision रणनीति चुनें।', pt:'Escolha Market Making de Orderbook ou Provisão de Liquidez AMM.', tl:'Piliin ang Orderbook Market Making o AMM Liquidity Provision na estratehiya.', fr:"Choisissez le Market Making Orderbook ou la Fourniture de Liquidité AMM." },
  ip_s3:          { ko:'시뮬레이션할 거래 풀 또는 페어를 선택합니다.', en:'Select the trading pool or pair to simulate.', id:'Pilih pool atau pasangan trading untuk disimulasikan.', zh:'选择要模拟的交易池或交易对。', ja:'シミュレートする取引プールまたはペアを選択します。', es:'Seleccione el pool o par de trading para simular.', vi:'Chọn pool hoặc cặp giao dịch để mô phỏng.', hi:'सिमुलेट करने के लिए ट्रेडिंग पूल या पेयर चुनें।', pt:'Selecione o pool ou par de trading para simular.', tl:'Piliin ang trading pool o pair para i-simulate.', fr:'Sélectionnez le pool ou la paire de trading à simuler.' },
  ip_s4:          { ko:'초기 자본, 스프레드, 레이어 수 등 전략 파라미터를 설정합니다.', en:'Set parameters: initial capital, spread, layer count, etc.', id:'Atur parameter: modal awal, spread, jumlah layer, dll.', zh:'设置参数：初始资金、价差、层数等。', ja:'初期資本・スプレッド・レイヤー数などのパラメータを設定します。', es:'Configure los parámetros: capital inicial, spread, número de capas, etc.', vi:'Đặt tham số: vốn ban đầu, spread, số lớp lệnh, v.v.', hi:'पैरामीटर सेट करें: प्रारंभिक पूंजी, स्प्रेड, लेयर संख्या आदि।', pt:'Configure os parâmetros: capital inicial, spread, número de camadas, etc.', tl:'I-set ang mga parametro: panimulang kapital, spread, bilang ng layer, atbp.', fr:'Configurez les paramètres : capital initial, spread, nombre de couches, etc.' },
  ip_s5:          { ko:'과거 실제 거래 데이터를 불러와 전략을 시뮬레이션합니다.', en:'Fetches real historical trade data and simulates your strategy.', id:'Mengambil data perdagangan historis nyata dan mensimulasikan strategi.', zh:'获取真实历史交易数据并模拟您的策略。', ja:'実際の過去取引データを取得し、戦略をシミュレートします。', es:'Obtiene datos históricos reales y simula su estrategia.', vi:'Tải dữ liệu giao dịch lịch sử thực và mô phỏng chiến lược.', hi:'वास्तविक ऐतिहासिक ट्रेड डेटा लाता है और आपकी रणनीति का अनुकरण करता है।', pt:'Busca dados históricos reais e simula sua estratégia.', tl:'Kumukuha ng tunay na datos ng nakaraang trade at sine-simulate ang iyong estratehiya.', fr:'Récupère les données historiques réelles et simule votre stratégie.' },
  ip_s6:          { ko:'손익, 체결 횟수, 자산 추이 차트로 전략 성과를 평가합니다.', en:'Evaluate performance via P&L, fill count and asset trend chart.', id:'Evaluasi performa melalui P&L, jumlah fill, dan grafik tren aset.', zh:'通过损益、成交次数和资产趋势图评估策略表现。', ja:'損益・約定回数・資産推移チャートで戦略パフォーマンスを評価します。', es:'Evalúe el rendimiento a través de P&L, número de fills y gráfico de activos.', vi:'Đánh giá hiệu suất qua P&L, số lần khớp lệnh và biểu đồ tài sản.', hi:'P&L, फिल संख्या और संपत्ति प्रवृत्ति चार्ट से रणनीति का मूल्यांकन करें।', pt:'Avalie o desempenho através de P&L, quantidade de fills e gráfico de ativos.', tl:'Suriin ang performance sa pamamagitan ng P&L, bilang ng fill at asset trend chart.', fr:'Évaluez la performance via le P&L, le nombre de fills et le graphique des actifs.' },
  ip_tips:        { ko:'💡 파라미터 팁', en:'💡 Parameter Tips', id:'💡 Tips Parameter', zh:'💡 参数小提示', ja:'💡 パラメータのヒント', es:'💡 Consejos de parámetros', vi:'💡 Mẹo tham số', hi:'💡 पैरामीटर टिप्स', pt:'💡 Dicas de parâmetros', tl:'💡 Mga Tip sa Parametro', fr:'💡 Conseils sur les paramètres' },
  ip_t1:          { ko:'스프레드를 줄이면 체결이 늘지만 건당 수익이 줄어듭니다.', en:'Narrower spread → more fills, but lower profit per fill.', id:'Spread lebih kecil → lebih banyak fill, tapi profit per fill lebih kecil.', zh:'缩小价差 → 成交增多，但单笔收益减少。', ja:'スプレッドを縮めると約定が増えるが、1回あたりの収益は減ります。', es:'Spread más estrecho → más fills, pero menor ganancia por fill.', vi:'Spread hẹp hơn → nhiều khớp lệnh hơn, nhưng lợi nhuận mỗi lần thấp hơn.', hi:'संकरा स्प्रेड → अधिक फिल, लेकिन प्रति फिल कम लाभ।', pt:'Spread mais estreito → mais fills, mas menor lucro por fill.', tl:'Mas makitid na spread → mas maraming fill, ngunit mas mababa ang kita bawat fill.', fr:'Spread plus étroit → plus de fills, mais moins de profit par fill.' },
  ip_t2:          { ko:'레이어를 늘리면 더 넓은 가격 범위에 주문이 분산됩니다.', en:'More layers spread orders across a wider price range.', id:'Lebih banyak layer menyebarkan order ke rentang harga yang lebih luas.', zh:'增加层数可将订单分散到更宽的价格区间。', ja:'レイヤーを増やすとより広い価格帯に注文が分散されます。', es:'Más capas distribuyen las órdenes en un rango de precios más amplio.', vi:'Nhiều lớp lệnh hơn phân tán lệnh trên phạm vi giá rộng hơn.', hi:'अधिक लेयर से ऑर्डर व्यापक मूल्य श्रेणी में फैलते हैं।', pt:'Mais camadas distribuem ordens por uma faixa de preço mais ampla.', tl:'Mas maraming layer ang nagpapakalat ng mga order sa mas malawak na hanay ng presyo.', fr:'Plus de couches répartissent les ordres sur une plage de prix plus large.' },
  ip_t3:          { ko:'데이터 건수를 늘리면 시뮬레이션 정확도가 높아집니다.', en:'More data records give more accurate simulation results.', id:'Lebih banyak data meningkatkan akurasi simulasi.', zh:'增加数据条数可提高模拟精确度。', ja:'データ件数を増やすとシミュレーション精度が上がります。', es:'Más registros de datos dan resultados de simulación más precisos.', vi:'Nhiều bản ghi dữ liệu hơn cho kết quả mô phỏng chính xác hơn.', hi:'अधिक डेटा रिकॉर्ड से सिमुलेशन परिणाम अधिक सटीक होते हैं।', pt:'Mais registros de dados fornecem resultados de simulação mais precisos.', tl:'Mas maraming rekord ng datos ang nagbibigay ng mas tumpak na resulta ng simulation.', fr:"Plus d'enregistrements donnent des résultats de simulation plus précis." },
  ip_contact:     { ko:'문의 / 피드백', en:'Contact / Feedback', id:'Kontak / Masukan', zh:'联系 / 反馈', ja:'お問い合わせ / フィードバック', es:'Contacto / Comentarios', vi:'Liên hệ / Phản hồi', hi:'संपर्क / फीडबैक', pt:'Contato / Feedback', tl:'Makipag-ugnayan / Feedback', fr:'Contact / Retours' },
  ip_contact_desc:{ ko:'사용 중 문의사항이나 피드백은 유튜브 채널 댓글로 남겨주세요.', en:'Leave questions or feedback in the YouTube channel comments.', id:'Tinggalkan pertanyaan atau masukan di kolom komentar YouTube.', zh:'如有使用问题或反馈，请在YouTube频道评论区留言。', ja:'ご不明な点やフィードバックはYouTubeチャンネルのコメント欄にお寄せください。', es:'Deje preguntas o comentarios en los comentarios del canal de YouTube.', vi:'Hãy để lại câu hỏi hoặc phản hồi trong phần bình luận kênh YouTube.', hi:'YouTube चैनल के कमेंट में प्रश्न या फीडबैक छोड़ें।', pt:'Deixe perguntas ou feedback nos comentários do canal do YouTube.', tl:'Mag-iwan ng mga tanong o feedback sa mga komento ng YouTube channel.', fr:'Laissez vos questions ou commentaires dans les commentaires de la chaîne YouTube.' },
  ip_disclaimer:  { ko:'⚠️ 시뮬레이션 전용 — 실제 거래 결과를 보장하지 않습니다.', en:'⚠️ Simulation only — does not guarantee real trading results.', id:'⚠️ Hanya simulasi — tidak menjamin hasil trading nyata.', zh:'⚠️ 仅供模拟 — 不保证实际交易结果。', ja:'⚠️ シミュレーション専用 — 実際の取引結果を保証しません。', es:'⚠️ Solo simulación — no garantiza resultados reales de trading.', vi:'⚠️ Chỉ mô phỏng — không đảm bảo kết quả giao dịch thực tế.', hi:'⚠️ केवल सिमुलेशन — वास्तविक ट्रेडिंग परिणामों की गारंटी नहीं।', pt:'⚠️ Somente simulação — não garante resultados reais de trading.', tl:'⚠️ Simulation lamang — hindi ginagarantiyahan ang mga tunay na resulta ng trading.', fr:'⚠️ Simulation uniquement — ne garantit pas les résultats de trading réels.' },
  ip_copy:        { ko:'복사', en:'Copy', id:'Salin', zh:'复制', ja:'コピー', es:'Copiar', vi:'Sao chép', hi:'कॉपी', pt:'Copiar', tl:'Kopyahin', fr:'Copier' },
  ip_copied:      { ko:'복사됨!', en:'Copied!', id:'Tersalin!', zh:'已复制!', ja:'コピーしました!', es:'¡Copiado!', vi:'Đã sao chép!', hi:'कॉपी हो गया!', pt:'Copiado!', tl:'Nakopya na!', fr:'Copié !' },
  ip_copy_note:   { ko:'위 주소를 복사 후 유튜브에서 검색해주세요.', en:'Copy the URL above and search in YouTube.', id:'Salin URL di atas lalu cari di YouTube.', zh:'复制上方地址后在YouTube搜索。', ja:'上記URLをコピーしてYouTubeで検索してください。', es:'Copie la URL de arriba y búsquela en YouTube.', vi:'Sao chép URL phía trên và tìm kiếm trên YouTube.', hi:'ऊपर URL कॉपी करें और YouTube पर खोजें।', pt:'Copie a URL acima e pesquise no YouTube.', tl:'Kopyahin ang URL sa itaas at hanapin sa YouTube.', fr:"Copiez l'URL ci-dessus et recherchez sur YouTube." },
  ip_close:       { ko:'닫기', en:'Close', id:'Tutup', zh:'关闭', ja:'閉じる', es:'Cerrar', vi:'Đóng', hi:'बंद करें', pt:'Fechar', tl:'Isara', fr:'Fermer' },
  btn_help:       { ko:'도움말', en:'Help', id:'Bantuan', zh:'帮助', ja:'ヘルプ', es:'Ayuda', vi:'Trợ giúp', hi:'सहायता', pt:'Ajuda', tl:'Tulong', fr:'Aide' },
  btn_utils:      { ko:'유틸 모음', en:'My Apps', id:'Aplikasi', zh:'工具合集', ja:'アプリ一覧', es:'Mis Apps', vi:'Ứng dụng', hi:'मेरे ऐप्स', pt:'Meus Apps', tl:'Mga App', fr:'Mes Apps' },
  utils_title:    { ko:'유틸 모음', en:'My Utilities', id:'Utilitas Saya', zh:'我的工具集', ja:'マイユーティリティ', es:'Mis Utilidades', vi:'Tiện ích của tôi', hi:'मेरे उपकरण', pt:'Minhas Utilidades', tl:'Aking Mga Utility', fr:'Mes Utilitaires' },
  utils_soon:     { ko:'유틸 목록이 곧 추가됩니다 :)', en:'More utilities coming soon :)', id:'Utilitas lainnya segera hadir :)', zh:'更多工具即将推出 :)', ja:'他のユーティリティが近日公開 :)', es:'Más utilidades próximamente :)', vi:'Thêm tiện ích sắp ra mắt :)', hi:'और उपकरण जल्द आ रहे हैं :)', pt:'Mais utilitários em breve :)', tl:'Mas maraming utility ang darating :)', fr:"Plus d'utilitaires bientôt :)" },
  p_rec:          { ko:'권장', en:'Rec', id:'Rekm', zh:'推荐', ja:'推奨', es:'Rec', vi:'Đề xuất', hi:'अनुशंसित', pt:'Rec', tl:'Rekm', fr:'Rec' },
  // ── Auto Optimize ──
  auto_name:       { ko:'자동 최적화 🔍', en:'Auto Optimize 🔍', id:'Optimasi Otomatis 🔍', zh:'自动优化 🔍', ja:'自動最適化 🔍', es:'Auto Optimizar 🔍', vi:'Tự Động Tối Ưu 🔍', hi:'स्वतः अनुकूलन 🔍', pt:'Auto Otimizar 🔍', tl:'Auto Optimize 🔍', fr:'Auto Optimiser 🔍' },
  auto_desc:       { ko:'상위 풀을 자동 분석해 최적 파라미터 조합을 추천합니다', en:'Scans top pools to find the best parameter combination', id:'Pindai pool teratas untuk kombinasi parameter terbaik', zh:'自动扫描顶部池以找到最佳参数组合', ja:'上位プールを自動分析し最適パラメータを推薦します', es:'Escanea los mejores pools para encontrar la mejor combinación', vi:'Tự động quét các pool hàng đầu để tìm tham số tối ưu', hi:'सर्वोत्तम पैरामीटर के लिए शीर्ष पूल स्कैन करें', pt:'Verifica os melhores pools para a melhor combinação', tl:'I-scan ang mga nangungunang pool para sa pinakamahusay na parameter', fr:'Analyse les meilleurs pools pour trouver la meilleure combinaison' },
  auto_pool_title: { ko:'분석할 풀 선택', en:'Select Pools to Scan', id:'Pilih Pool untuk Dipindai', zh:'选择要扫描的池', ja:'スキャンするプールを選択', es:'Seleccionar Pools a Escanear', vi:'Chọn Pool để Quét', hi:'स्कैन के लिए पूल चुनें', pt:'Selecionar Pools para Escanear', tl:'Piliin ang Pools na I-scan', fr:'Sélectionner les Pools à Scanner' },
  auto_sel_all:    { ko:'이 페이지 전체 선택', en:'Select This Page', id:'Pilih Halaman Ini', zh:'选择本页', ja:'このページを全選択', es:'Seleccionar Esta Página', vi:'Chọn trang này', hi:'यह पेज चुनें', pt:'Selecionar Esta Página', tl:'Piliin ang Page na Ito', fr:'Sélectionner Cette Page' },
  auto_desel_all:  { ko:'이 페이지 전체 해제', en:'Deselect This Page', id:'Hapus Halaman Ini', zh:'取消本页', ja:'このページを全解除', es:'Deseleccionar Esta Página', vi:'Bỏ chọn trang này', hi:'यह पेज हटाएं', pt:'Desmarcar Esta Página', tl:'I-deselect ang Page na Ito', fr:'Désélectionner Cette Page' },
  auto_selected:   { ko:'개 선택됨', en:'selected', id:'dipilih', zh:'已选', ja:'個選択中', es:'seleccionados', vi:'đã chọn', hi:'चुने गए', pt:'selecionados', tl:'napili', fr:'sélectionnés' },
  scan_title:      { ko:'스캔 설정', en:'Scan Settings', id:'Pengaturan Scan', zh:'扫描设置', ja:'スキャン設定', es:'Configuración de Escaneo', vi:'Cài đặt Quét', hi:'स्कैन सेटिंग्स', pt:'Configurações de Varredura', tl:'Mga Setting ng Scan', fr:'Paramètres de Scan' },
  scan_simulating: { ko:'시뮬 중...', en:'Simulating...', id:'Menyimulasikan...', zh:'模拟中...', ja:'シミュレーション中...', es:'Simulando...', vi:'Đang mô phỏng...', hi:'सिमुलेशन चल रहा है...', pt:'Simulando...', tl:'Nagsisimulate...', fr:'Simulation en cours...' },
  scan_sub_strat:  { ko:'분석 전략', en:'Strategy to Test', id:'Strategi', zh:'分析策略', ja:'分析戦略', es:'Estrategia', vi:'Chiến lược', hi:'रणनीति', pt:'Estratégia', tl:'Estratehiya', fr:'Stratégie' },
  scan_records:    { ko:'풀당 거래 건수', en:'Records per Pool', id:'Rekaman per Pool', zh:'每池交易数', ja:'プールあたりの件数', es:'Registros por Pool', vi:'Số giao dịch mỗi pool', hi:'प्रति पूल रिकॉर्ड', pt:'Registros por Pool', tl:'Mga Record bawat Pool', fr:'Enregistrements par Pool' },
  scan_spreads:    { ko:'스프레드 옵션 (%)', en:'Spread Options (%)', id:'Opsi Spread (%)', zh:'价差选项 (%)', ja:'スプレッドオプション (%)', es:'Opciones de Spread (%)', vi:'Tùy chọn Spread (%)', hi:'स्प्रेड विकल्प (%)', pt:'Opções de Spread (%)', tl:'Mga Opsyon ng Spread (%)', fr:'Options de Spread (%)' },
  scan_running:    { ko:'분석 중', en:'Scanning', id:'Memindai', zh:'扫描中', ja:'スキャン中', es:'Escaneando', vi:'Đang quét', hi:'स्कैन हो रहा है', pt:'Varrendo', tl:'Nag-sca-scan', fr:'En cours de scan' },
  scan_done:       { ko:'스캔 완료', en:'Scan Complete', id:'Scan Selesai', zh:'扫描完成', ja:'スキャン完了', es:'Escaneo Completo', vi:'Quét xong', hi:'स्कैन पूर्ण', pt:'Varredura Completa', tl:'Tapos na ang Scan', fr:'Scan Terminé' },
  res_scan_title:  { ko:'최적화 결과', en:'Optimization Results', id:'Hasil Optimasi', zh:'优化结果', ja:'最適化結果', es:'Resultados de Optimización', vi:'Kết quả Tối ưu hóa', hi:'अनुकूलन परिणाम', pt:'Resultados de Otimização', tl:'Mga Resulta ng Optimization', fr:"Résultats d'Optimisation" },
  res_scan_use:    { ko:'이 설정으로 백테스트', en:'Backtest this setup', id:'Backtest pengaturan ini', zh:'用此设置回测', ja:'この設定でバックテスト', es:'Backtest con esta configuración', vi:'Backtest với cài đặt này', hi:'इस सेटअप से बैकटेस्ट', pt:'Backtest com esta configuração', tl:'I-backtest ang setup na ito', fr:'Backtest avec cette configuration' },
  run_live_roi:    { ko:'실시간 예상 수익률', en:'Live ROI Preview', id:'Pratinjau ROI', zh:'实时收益预览', ja:'リアルタイム損益', es:'Rentabilidad en Vivo', vi:'ROI Trực Tiếp', hi:'लाइव ROI', pt:'ROI em Tempo Real', tl:'Live ROI', fr:'ROI en Direct' },
  res_scan_empty:  { ko:'결과 없음 — 다시 시도해주세요', en:'No results — please retry', id:'Tidak ada hasil — coba lagi', zh:'无结果 — 请重试', ja:'結果なし — 再試行してください', es:'Sin resultados — intente de nuevo', vi:'Không có kết quả — thử lại', hi:'कोई परिणाम नहीं — पुनः प्रयास करें', pt:'Sem resultados — tente novamente', tl:'Walang resulta — subukan muli', fr:'Aucun résultat — réessayez' },
};

function t(s)  { return s[LANG] ?? s.ko; }
function tl(s) { return s[LANG] ?? s.ko; }
function tp(s) { return s[LANG] ?? s.ko; }

function setLang(lang) {
  LANG = lang;
  localStorage.setItem('mm_lang', lang);
  renderApp();
}

const NETWORKS = {
  stellar: { name: tp(S.stellar_name), horizon: 'https://horizon.stellar.org',    native: 'XLM' },
  pi:      { name: tp(S.pi_name),      horizon: 'https://api.testnet.minepi.com', native: 'PI'  },
};

const state = {
  step:        1,
  network:     null,
  strategy:    null,
  pool:        null,
  params:      {},
  result:      null,
  pools:       [],
  scanParams:  {},
  scanResults: [],
};

let poolSearchQuery = '';
let poolPage = 0;
const POOL_PAGE_SIZE = 10;
let activeChart = null;
let _fetchStop = false;
let scanSelectedIds = new Set();
let scanSelectionSet = false;
let piTotalFetched = 0;

// ═══════════════════════════════════════════════════════
//  HORIZON API
// ═══════════════════════════════════════════════════════

function horizonBase() { return NETWORKS[state.network].horizon; }

function apiFetch(url) {
  return fetch(url);
}

function strKeyToHex(strKey) {
  const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
  const bytes = [];
  let buf = 0, bufLen = 0;
  for (const c of strKey) {
    const idx = ALPHA.indexOf(c);
    if (idx < 0) continue;
    buf = (buf << 5) | idx;
    bufLen += 5;
    if (bufLen >= 8) {
      bufLen -= 8;
      bytes.push((buf >> bufLen) & 0xff);
      buf &= (1 << bufLen) - 1;
    }
  }
  return bytes.slice(1, 33).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function fetchPools() {
  // Step 1: Expert에서 상위 200개 가져오기 (XLM 전용 필터링 전 충분한 후보 확보)
  const expertResp = await fetch('https://api.stellar.expert/explorer/public/liquidity-pool?sort=volume&order=desc&limit=200');
  if (!expertResp.ok) throw new Error(`Stellar Expert API ${expertResp.status}`);
  const expertJson = await expertResp.json();
  const expertPools = expertJson._embedded?.records || [];
  if (!expertPools.length) throw new Error('Stellar Expert 결과 없음');

  // Step 2: XLM 포함 풀만 클라이언트 필터링
  const xlmPools = expertPools.filter(p => p.assets?.some(a => a.asset === 'XLM'));
  if (!xlmPools.length) throw new Error('XLM 풀 없음');

  // Step 3: 전략별 필터 + 정렬 (auto는 orderbook 정렬 사용)
  if (state.strategy === 'orderbook' || state.strategy === 'auto') {
    // 오더북 MM: 7일 거래 100건 미만 제외 (비활성 풀)
    const active = xlmPools.filter(p => (p.trades?.['7d'] || 0) >= 100);
    const candidates = active.length >= 10 ? active : xlmPools;
    const maxTrades = Math.max(...candidates.map(p => p.trades?.['7d'] || 0)) || 1;
    const maxAcc    = Math.max(...candidates.map(p => p.accounts || 0)) || 1;
    candidates.sort((a, b) => {
      // 7일 거래 횟수 90% + LP 수 10%
      const score = p => 0.9 * ((p.trades?.['7d'] || 0) / maxTrades)
                       + 0.1 * ((p.accounts || 0) / maxAcc);
      return score(b) - score(a);
    });
    xlmPools.length = 0;
    xlmPools.push(...candidates);
  } else {
    // AMM: 거래량/TVL 비율 (수수료 APY 지표) 기준 정렬
    xlmPools.sort((a, b) => {
      const ratio = p => (p.volume_value?.['7d'] || 0) / Math.max(p.total_value_locked || 1, 1);
      return ratio(b) - ratio(a);
    });
  }

  // Step 4: 상위 50개만 Horizon에서 reserve 데이터 병렬 조회 (StrKey → hex 변환)
  const top50 = xlmPools.slice(0, 50);
  const expertMap = new Map(top50.map((p, i) => [strKeyToHex(p.id), { ex: p, rank: i }]));
  const base = horizonBase();
  const details = await Promise.all(
    top50.map(p => {
      const hexId = strKeyToHex(p.id);
      return apiFetch(`${base}/liquidity_pools/${hexId}`)
        .then(r => r.ok ? r.json() : null)
        .catch(() => null);
    })
  );

  // Step 5: Expert 메타데이터 병합 후 정렬 순서 유지
  return details.filter(p => p && hasNative(p))
    .map(p => {
      const info = expertMap.get(p.id);
      if (info) {
        p._rank    = info.rank;
        p._vol7d   = info.ex.volume_value?.['7d'] || 0;
        p._tvl     = info.ex.total_value_locked || 0;
        p._trades7d = info.ex.trades?.['7d'] || 0;
        p._accounts = info.ex.accounts || 0;
      }
      return p;
    })
    .sort((a, b) => (a._rank ?? 999) - (b._rank ?? 999));
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

async function fetchWithRetry(url, retries = 5) {
  for (let i = 0; i < retries; i++) {
    const r = await apiFetch(url);
    if (r.ok) return r;
    if (r.status === 503 || r.status === 429) {
      await sleep(2000 * (i + 1));
      continue;
    }
    throw new Error(`HTTP ${r.status}`);
  }
  throw new Error('HTTP 503 (재시도 실패)');
}

async function paginate(url, params, total, onProgress) {
  const pages = Math.ceil(total / 200);
  const all = [];
  let cursor = null;

  for (let i = 0; i < pages; i++) {
    if (_fetchStop) break;
    if (cursor) params.set('cursor', cursor);
    const r = await fetchWithRetry(`${url}?${params}`);
    const records = (await r.json())._embedded?.records || [];
    if (!records.length) break;
    all.push(...records);
    cursor = records.at(-1).paging_token;
    onProgress(all.length, total, all);
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
  let stopIdx = trades.length - 1;

  for (let i = 0; i < trades.length; i++) {
    if (stopped) break;
    const mid = trades[i].price;
    priceWin.push(mid);
    if (priceWin.length > p.surgeTicks) priceWin.shift();

    if (priceWin.length >= 2) {
      const chg = Math.abs(priceWin.at(-1) - priceWin[0]) / priceWin[0] * 100;
      if (chg >= p.surgePct) {
        stopped = true; stopReason = `급변 감지 (${chg.toFixed(2)}%)`;
        stopIdx = i;
        log.push({ type: 'stop', msg: stopReason }); break;
      }
    }

    const total    = usdc + native * mid;
    const nativeRatio = (native * mid) / total * 100;

    if (nativeRatio > p.stopRatio) {
      stopped = true; stopReason = `네이티브 재고 ${nativeRatio.toFixed(1)}% 초과`;
      stopIdx = i;
      log.push({ type: 'stop', msg: stopReason }); break;
    }
    if (nativeRatio < (100 - p.stopRatio)) {
      stopped = true; stopReason = `USDC 재고 ${(100-nativeRatio).toFixed(1)}% 초과`;
      stopIdx = i;
      log.push({ type: 'stop', msg: stopReason }); break;
    }

    stopIdx = i;

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

    const tv = usdc + native * mid;
    snapshots.push({ i, price: mid, totalVal: tv, profit });
  }

  const finalPx  = trades[stopIdx].price;
  const totalNow = usdc + native * finalPx;
  const pnl      = totalNow - p.totalUsdc;

  return {
    type: 'orderbook',
    ticks: stopIdx + 1, fills,
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

function renderInfoPanel() {
  const STEPS = [
    { icon:'1', label: t(S.steps[0]), desc: t(S.ip_s1) },
    { icon:'2', label: t(S.steps[1]), desc: t(S.ip_s2) },
    { icon:'3', label: t(S.steps[2]), desc: t(S.ip_s3) },
    { icon:'4', label: t(S.steps[3]), desc: t(S.ip_s4) },
    { icon:'5', label: t(S.steps[4]), desc: t(S.ip_s5) },
    { icon:'6', label: t(S.steps[5]), desc: t(S.ip_s6) },
  ];
  document.getElementById('info-panel').innerHTML = `
    <div class="ip-header">
      <span class="ip-title">${t(S.ip_title)}</span>
      <button class="ip-close-btn" onclick="toggleInfo()">${t(S.ip_close)} ✕</button>
    </div>

    <div class="ip-card">
      <p class="ip-about">${t(S.ip_about)}</p>
    </div>

    <div class="ip-section-title">${t(S.ip_how)}</div>
    <div class="ip-card">
      ${STEPS.map(s => `
        <div class="ip-step">
          <span class="ip-step-num">${s.icon}</span>
          <div class="ip-step-body">
            <div class="ip-step-label">${s.label}</div>
            <div class="ip-step-desc">${s.desc}</div>
          </div>
        </div>`).join('')}
    </div>

    <div class="ip-section-title">${t(S.ip_tips)}</div>
    <div class="ip-card ip-tips-card">
      <div class="ip-tip">· ${t(S.ip_t1)}</div>
      <div class="ip-tip">· ${t(S.ip_t2)}</div>
      <div class="ip-tip">· ${t(S.ip_t3)}</div>
    </div>

    <div class="ip-section-title">${t(S.ip_contact)}</div>
    <div class="ip-card">
      <p class="ip-contact-desc">${t(S.ip_contact_desc)}</p>
      <div class="ip-yt-row">
        <span class="ip-yt-icon">▶</span>
        <div class="ip-yt-body">
          <div class="ip-yt-name">Hidden Strokes</div>
          <div class="ip-yt-url" id="ip-yt-url-text">youtube.com/@hiddenstrokes-j5w</div>
        </div>
      </div>
      <div class="ip-copy-row">
        <span class="ip-copy-url">youtube.com/@hiddenstrokes-j5w</span>
        <button class="btn btn-secondary ip-copy-btn" id="ip-copy-btn" style="font-size:0.8rem;padding:6px 12px;">${t(S.ip_copy)}</button>
      </div>
      <p class="ip-copy-note">${t(S.ip_copy_note)}</p>
    </div>

    <div class="alert info" style="margin-top:10px;">${t(S.ip_disclaimer)}</div>
  `;
  document.getElementById('ip-copy-btn').addEventListener('click', () => {
    navigator.clipboard.writeText('youtube.com/@hiddenstrokes-j5w').then(() => {
      const btn = document.getElementById('ip-copy-btn');
      btn.textContent = t(S.ip_copied);
      setTimeout(() => { btn.textContent = t(S.ip_copy); }, 2000);
    });
  });
}

function toggleInfo() {
  const overlay = document.getElementById('info-overlay');
  const hidden  = overlay.classList.toggle('ip-hidden');
  if (!hidden) renderInfoPanel();
}

function toggleUtils() {
  const overlay = document.getElementById('utils-overlay');
  overlay.classList.toggle('ip-hidden');
  const panel = document.getElementById('utils-panel');
  if (!overlay.classList.contains('ip-hidden')) {
    panel.innerHTML = `
      <div class="ip-header">
        <span class="ip-title">🔗 ${t(S.utils_title)}</span>
        <button class="ip-close-btn" onclick="toggleUtils()">${t(S.ip_close)}</button>
      </div>

      <a class="util-card" href="https://apppidexutillaac6961.pinet.com/" target="_blank">
        <div class="util-card-icon">
          <svg width="64" height="64" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
            <rect width="72" height="72" rx="16" fill="#f8f8f8"/>
            <path d="M16,47 Q7,25 30,13" stroke="#00BFA5" stroke-width="3" fill="none" stroke-linecap="round"/>
            <path d="M42,11 Q64,22 60,45" stroke="#7B5EA7" stroke-width="3" fill="none" stroke-linecap="round"/>
            <path d="M55,58 Q40,68 17,58" stroke="#4A90D9" stroke-width="3" fill="none" stroke-linecap="round"/>
            <circle cx="36" cy="36" r="14" fill="#F5A623"/>
            <circle cx="36" cy="36" r="10" fill="none" stroke="white" stroke-width="2.5"/>
            <line x1="43" y1="29" x2="29" y2="43" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="36" cy="11" r="9" fill="#7B5EA7"/>
            <path d="M30,11 Q33,8 36,8 Q39,8 42,11 Q39,14 36,14 Q33,14 30,11Z" fill="white" opacity="0.9"/>
            <path d="M30,11 Q33,14 36,14 Q39,14 42,11" fill="none" stroke="white" stroke-width="1.5"/>
            <path d="M33,9 Q35,10 37,10 L36,7" fill="white" opacity="0.7"/>
            <path d="M39,9 Q37,10 35,10 L36,7" fill="white" opacity="0.7"/>
            <circle cx="61" cy="53" r="9" fill="#4A90D9"/>
            <path d="M55,50 Q61,48 67,50" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M55,53.5 Q61,51.5 67,53.5" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M55,57 Q61,55 67,57" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <circle cx="11" cy="53" r="9" fill="#00BFA5"/>
            <path d="M11,44 Q11,50 11,55" fill="none"/>
            <ellipse cx="11" cy="47" rx="0" ry="0"/>
            <path d="M11,45 C8,49 6,52 8,55 C9,57 13,57 14,55 C16,52 14,49 11,45Z" fill="white" opacity="0.9"/>
            <ellipse cx="11" cy="57" rx="5" ry="2" fill="white" opacity="0.5"/>
          </svg>
        </div>
        <div class="util-card-body">
          <div class="util-card-name">PiDEX Util</div>
          <div class="util-card-tags">
            <span class="util-tag">Arbitrage Finder</span>
            <span class="util-tag">LP Calculator</span>
            <span class="util-tag">Swap Simulator</span>
          </div>
          <div class="util-card-desc">Pi DEX 유동성·차익·스왑 유틸 모음.<br><span class="util-card-desc-en">All-in-one Pi DEX utility — arbitrage, LP calculator &amp; swap simulator.</span></div>
          <div class="util-card-link">Pi Browser로 열기 →</div>
        </div>
      </a>
    `;
  }
}

const _LANG_META = {
  ko: { flag: '🇰🇷', name: '한국어' },
  en: { flag: '🇺🇸', name: 'English' },
  id: { flag: '🇮🇩', name: 'Indonesia' },
  zh: { flag: '🇨🇳', name: '中文' },
  ja: { flag: '🇯🇵', name: '日本語' },
  es: { flag: '🇪🇸', name: 'Español' },
  vi: { flag: '🇻🇳', name: 'Tiếng Việt' },
  hi: { flag: '🇮🇳', name: 'हिन्दी' },
  pt: { flag: '🇧🇷', name: 'Português' },
  tl: { flag: '🇵🇭', name: 'Filipino' },
  fr: { flag: '🇫🇷', name: 'Français' },
};
document.addEventListener('click', e => {
  if (!e.target.closest('.lang-dropdown')) document.getElementById('lang-menu')?.classList.remove('open');
});
function toggleLangMenu() { document.getElementById('lang-menu')?.classList.toggle('open'); }
function renderLangSwitch() {
  const el = document.getElementById('lang-switch');
  if (!el) return;
  const m = _LANG_META[LANG] || _LANG_META.en;
  el.innerHTML = `<div class="lang-dropdown">
    <button class="lang-selected" onclick="toggleLangMenu()">
      <span class="lang-flag">${m.flag}</span><span>${m.name}</span><span class="lang-arrow">▾</span>
    </button>
    <div class="lang-menu" id="lang-menu">
      ${Object.keys(_LANG_META).map(l => {
        const lm = _LANG_META[l];
        return `<div class="lang-option${l === LANG ? ' active' : ''}" onclick="setLang('${l}')">
          <span class="lang-flag">${lm.flag}</span><span>${lm.name}</span></div>`;
      }).join('')}
    </div>
  </div>`;
  const helpBtn = document.getElementById('help-btn');
  if (helpBtn) helpBtn.textContent = `❓ ${t(S.btn_help)}`;
}

function renderApp() {
  renderLangSwitch();
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
  state.network = k; state.pool = null; state.pools = []; poolPage = 0; poolSearchQuery = '';
  renderApp();
}

// ── Step 2: 전략 ──────────────────────────────────────

function renderStrategyStep(el, nav) {
  el.innerHTML = `
    <div class="section-title">${t(S.str_title)}</div>
    <div class="card ${state.strategy === 'orderbook' ? 'selected' : ''}" onclick="selectStrategy('orderbook')">
      <h3>${t(S.ob_name)}</h3>
      <p>${tl(S.ob_desc)}</p>
    </div>
    <div class="card ${state.strategy === 'amm' ? 'selected' : ''}" onclick="selectStrategy('amm')">
      <h3>${t(S.amm_name)}</h3>
      <p>${tl(S.amm_desc)}</p>
    </div>
    <div class="card ${state.strategy === 'auto' ? 'selected' : ''}" onclick="selectStrategy('auto')">
      <h3>${t(S.auto_name)}</h3>
      <p>${tl(S.auto_desc)}</p>
    </div>
  `;
  navBtns(nav, true, 'nextStep', null, !state.strategy);
}

function selectStrategy(k) {
  state.strategy = k; state.pool = null; state.pools = []; poolPage = 0;
  scanSelectedIds.clear(); scanSelectionSet = false;
  renderApp();
}

// ── Step 3: 풀 / 페어 선택 ────────────────────────────

async function fetchPiPairs() {
  const allRecords = [];
  let cursor = null;
  for (let i = 0; i < 25; i++) {
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

  piTotalFetched = allRecords.length;
  return Object.values(pairMap).sort((a, b) => b.tradeCount - a.tradeCount);
}

async function fetchPiPools() {
  const base = horizonBase();
  const resp = await apiFetch(`${base}/liquidity_pools?limit=200&order=desc`);
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  const json = await resp.json();
  const pools = (json._embedded?.records || []).filter(p => {
    if (!hasNative(p)) return false;
    const nativeAmt = parseFloat(p.reserves?.find(r => r.asset === 'native')?.amount || '0');
    return nativeAmt > 0;
  });
  if (!pools.length) throw new Error(tp(S.no_results));
  pools.sort((a, b) => {
    const nativeAmt = p => parseFloat(p.reserves?.find(r => r.asset === 'native')?.amount || '0');
    const lpDiff = (parseInt(b.total_trustlines) || 0) - (parseInt(a.total_trustlines) || 0);
    const amtDiff = nativeAmt(b) - nativeAmt(a);
    return lpDiff !== 0 ? lpDiff : amtDiff;
  });
  return pools;
}

function renderPoolStep(el, nav) {
  if (state.strategy === 'auto') { renderAutoPoolSelectStep(el, nav); return; }
  const isPi = state.network === 'pi';

  if (isPi && state.strategy === 'amm') {
    if (state.pools.length === 0) {
      el.innerHTML = `
        <div class="section-title">${t(S.pool_title)}</div>
        <div class="status-text"><span class="spinner"></span> ${tl(S.loading_pools)}... <span id="load-timer">0</span>${tp(S.sec)}</div>
      `;
      navBtns(nav, true, null);
      loadPiPools();
      return;
    }
    el.innerHTML = `
      <div class="section-title">${t(S.pool_title)}</div>
      <div class="alert info" style="margin-bottom:10px">${tl(S.sort_pi_amm)}</div>
      <input class="search-box" id="pool-search" placeholder="${tp(S.search_ph)}" oninput="filterPools()" value="${poolSearchQuery}">
      <div id="pool-list">${poolListHtml()}</div>
    `;
    navBtns(nav, true, 'nextStep', null, !state.pool);
    return;
  }

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
      <div id="pool-list">${piPairsHtml()}</div>
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

async function loadPiPools() {
  let sec = 0;
  const timer = setInterval(() => {
    sec++;
    const el = document.getElementById('load-timer');
    if (el) el.textContent = sec;
  }, 1000);
  try {
    const pools = await fetchPiPools();
    clearInterval(timer);
    state.pools = pools;
    renderApp();
  } catch (e) {
    clearInterval(timer);
    document.getElementById('content').innerHTML = `
      <div class="section-title">${t(S.pool_title)}</div>
      <div class="alert">${tl(S.pool_fail)}: ${e.message}</div>
      <button class="btn btn-secondary" style="margin-top:10px" onclick="loadPiPools()">${tl(S.btn_retry)}</button>
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
  poolPage = 0;
  document.getElementById('pool-list').innerHTML = poolListHtml();
}

function pagerHtml(totalItems) {
  const totalPages = Math.ceil(totalItems / POOL_PAGE_SIZE);
  if (totalPages <= 1) return '';
  return `
    <div class="pager">
      <button class="pager-btn" onclick="changePage(-1)" ${poolPage === 0 ? 'disabled' : ''}>◀</button>
      <span class="pager-info">${poolPage + 1} / ${totalPages}</span>
      <button class="pager-btn" onclick="changePage(1)" ${poolPage >= totalPages - 1 ? 'disabled' : ''}>▶</button>
    </div>`;
}

function changePage(dir) {
  const isPiOrderbook = state.network === 'pi' && state.strategy !== 'amm' && state.strategy !== 'auto';
  const filtered = isPiOrderbook
    ? state.pools
    : state.pools.filter(p => !poolSearchQuery || poolLabel(p).toLowerCase().includes(poolSearchQuery));
  const totalPages = Math.ceil(filtered.length / POOL_PAGE_SIZE);
  poolPage = Math.max(0, Math.min(poolPage + dir, totalPages - 1));
  if (state.strategy === 'auto') {
    document.getElementById('auto-pool-list').innerHTML = autoPoolListHtml();
  } else if (isPiOrderbook) {
    document.getElementById('pool-list').innerHTML = piPairsHtml();
  } else {
    document.getElementById('pool-list').innerHTML = poolListHtml();
  }
}

function piPairsHtml() {
  const items = state.pools;
  const start = poolPage * POOL_PAGE_SIZE;
  const page  = items.slice(start, start + POOL_PAGE_SIZE);
  return page.map((p, i) => {
    const globalIdx = start + i;
    return `
      <div class="pool-item ${state.pool?.id === p.id ? 'selected' : ''}" onclick="selectPiPair('${encodeURIComponent(p.id)}')">
        <div class="pool-pair">${poolLabel(p)}</div>
        <div class="pool-meta">${tl(S.recent_trades)}: <strong style="color:#e2e8f0">${p.tradeCount}</strong> / ${piTotalFetched.toLocaleString()}</div>
      </div>`;
  }).join('') + pagerHtml(items.length);
}

function poolListHtml() {
  const filtered = state.pools.filter(p => !poolSearchQuery || poolLabel(p).toLowerCase().includes(poolSearchQuery));
  if (!filtered.length) return `<div class="status-text">${tl(S.no_results)}</div>`;
  const start = poolPage * POOL_PAGE_SIZE;
  const page  = filtered.slice(start, start + POOL_PAGE_SIZE);
  return page.map(p => {
    const lp  = p._accounts || p.total_trustlines || '?';
    const fee = ((parseFloat(p.fee_bp || 30)) / 100).toFixed(1);
    let meta;
    if (state.network === 'pi') {
      const nativeAmt = parseFloat(p.reserves?.find(r => r.asset === 'native')?.amount || '0');
      meta = `PI ${nativeAmt.toLocaleString(undefined, {maximumFractionDigits:2})} · LP <strong style="color:#e2e8f0">${lp}</strong> · ${fee}%`;
    } else if (state.strategy === 'orderbook') {
      meta = `7d거래 <strong style="color:#e2e8f0">${(p._trades7d || 0).toLocaleString()}</strong>건 · LP <strong style="color:#e2e8f0">${lp}</strong> · ${fee}%`;
    } else {
      const apy = p._tvl > 0 ? (p._vol7d / p._tvl * 0.003 * 52 * 100).toFixed(1) : '?';
      meta = `예상APY <strong style="color:#68d391">${apy}%</strong> · LP <strong style="color:#e2e8f0">${lp}</strong> · 7d거래 ${(p._trades7d || 0).toLocaleString()}건`;
    }
    return `
      <div class="pool-item ${state.pool?.id === p.id ? 'selected' : ''}" onclick="selectPool('${p.id}')">
        <div class="pool-pair">${poolLabel(p)}</div>
        <div class="pool-meta">${meta}</div>
      </div>`;
  }).join('') + pagerHtml(filtered.length);
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
    state.pools = pools;
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
  if (state.strategy === 'auto') { renderScanParamsStep(el, nav); return; }
  const isOB = state.strategy === 'orderbook';
  const p    = state.params;
  el.innerHTML = `
    <div class="section-title">${t(S.param_title)}</div>
    <div class="alert info">📊 ${poolLabel(state.pool)} · ${NETWORKS[state.network].name}</div>

    <div class="form-group">
      <label>${tl(S.p_records)} <span class="param-hint">${t(S.p_rec)}: 5,000</span></label>
      <input type="number" id="p-records" value="${p.records || 5000}" min="200" max="10000" step="100">
    </div>

    ${isOB ? `
    <div class="form-group">
      <label>${tl(S.p_capital)} (USDC) <span class="param-hint">${t(S.p_rec)}: 500</span></label>
      <input type="number" id="p-totalUsdc" value="${p.totalUsdc || 500}" min="10">
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>${tl(S.p_split)} <span class="param-hint">${t(S.p_rec)}: 50</span></label>
        <input type="number" id="p-splitRatio" value="${p.splitRatio || 50}" min="10" max="90">
      </div>
      <div class="form-group">
        <label>${tl(S.p_spread)} <span class="param-hint">${t(S.p_rec)}: 0.3~0.5</span></label>
        <input type="number" id="p-spreadPct" value="${p.spreadPct || 0.5}" step="0.1" min="0.1">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>${tl(S.p_order_size)} <span class="param-hint">${t(S.p_rec)}: 3~5</span></label>
        <input type="number" id="p-orderSizePct" value="${p.orderSizePct || 3}" step="0.5" min="0.5">
      </div>
      <div class="form-group">
        <label>${tl(S.p_layers)} <span class="param-hint">${t(S.p_rec)}: 1~3</span></label>
        <input type="number" id="p-layers" value="${p.layers || 1}" min="1" max="5">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>${tl(S.p_stop)} <span class="param-hint">${t(S.p_rec)}: 70</span></label>
        <input type="number" id="p-stopRatio" value="${p.stopRatio || 70}" min="51" max="99">
      </div>
      <div class="form-group">
        <label>${tl(S.p_fee)} <span class="param-hint">${t(S.p_rec)}: 0 (Stellar)</span></label>
        <input type="number" id="p-feePct" value="${p.feePct !== undefined ? p.feePct : 0}" step="0.05" min="0">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>${tl(S.p_surge_ticks)} <span class="param-hint">${t(S.p_rec)}: 3~5</span></label>
        <input type="number" id="p-surgeTicks" value="${p.surgeTicks || 3}" min="2" max="20">
      </div>
      <div class="form-group">
        <label>${tl(S.p_surge_pct)} <span class="param-hint">${t(S.p_rec)}: 1~2</span></label>
        <input type="number" id="p-surgePct" value="${p.surgePct || 1.5}" step="0.1" min="0.1">
      </div>
    </div>
    ` : `
    <div class="form-group">
      <label>${tl(S.p_deposit)} (USDC) <span class="param-hint">${t(S.p_rec)}: 500</span></label>
      <input type="number" id="p-depositUsdc" value="${p.depositUsdc || 500}" min="10">
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>${tl(S.p_max_il)} <span class="param-hint">${t(S.p_rec)}: 5~10</span></label>
        <input type="number" id="p-maxILPct" value="${p.maxILPct || 10}" min="1" max="50">
      </div>
      <div class="form-group">
        <label>${tl(S.p_target_roi)} <span class="param-hint">${t(S.p_rec)}: 3~5</span></label>
        <input type="number" id="p-targetRoiPct" value="${p.targetRoiPct || 5}" min="0.1">
      </div>
    </div>
    `}
  `;
  navBtns(nav, true, 'goToRun', `▶ ${t(S.btn_run)}`);
}

function goToRun() {
  const isOB = state.strategy === 'orderbook';
  const n    = id => parseFloat(document.getElementById(id)?.value || '0');
  const ni   = id => parseInt(document.getElementById(id)?.value || '0');
  const clamp = (v, mn, mx) => Math.min(mx, Math.max(mn, v));

  state.params = isOB ? {
    records:      clamp(ni('p-records'), 200, 10000),
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
    records:      clamp(ni('p-records'), 200, 10000),
    depositUsdc:  n('p-depositUsdc'),
    maxILPct:     n('p-maxILPct'),
    targetRoiPct: n('p-targetRoiPct'),
  };
  nextStep();
}

// ── Step 5: 실행 ──────────────────────────────────────

function renderRunStep(el, nav) {
  _fetchStop = false;
  if (state.strategy === 'auto') { renderAutoRunStep(el, nav); return; }
  const isOB      = state.strategy === 'orderbook';
  const stratLabel = isOB ? t(S.ob_name) : t(S.amm_name);
  const stratColor = isOB ? '#48bb78' : '#667eea';
  el.innerHTML = `
    <div class="section-title">${t(S.run_title)}</div>
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;flex-wrap:wrap">
      <span style="background:${stratColor};color:#fff;font-size:0.78rem;font-weight:700;padding:3px 12px;border-radius:12px">${stratLabel}</span>
      <span style="font-size:0.97rem;font-weight:600;color:#f7fafc">${poolLabel(state.pool)}</span>
    </div>
    <div style="text-align:center;background:#1a1f2e;border:1px solid #2d3748;border-radius:10px;padding:14px 10px;margin-bottom:10px">
      <div id="live-roi" style="font-size:1.7rem;font-weight:700;color:#4a5568;transition:color 0.4s">—</div>
      <div style="font-size:0.72rem;color:#4a5568;margin-top:3px">${t(S.run_live_roi)}</div>
    </div>
    <div id="run-status" class="status-text"><span class="spinner"></span> ${tl(S.run_start)}</div>
    <div class="progress-bar"><div class="progress-fill" id="run-prog" style="width:0%"></div></div>
    <div class="result-card" style="margin-top:12px">
      <div class="log-list" id="run-log"></div>
    </div>
  `;
  nav.innerHTML = `<button class="btn btn-secondary" id="btn-stop-fetch" onclick="window._stopFetch()">${tl(S.btn_stop)}</button>`;
  runBacktest();
}

window._stopFetch = function() {
  _fetchStop = true;
  const btn = document.getElementById('btn-stop-fetch');
  if (btn) btn.disabled = true;
};

async function runBacktest() {
  const log = msg => {
    const el = document.getElementById('run-log');
    if (el) el.innerHTML += `<div>${msg}</div>`;
  };
  const status = msg => {
    const el = document.getElementById('run-status');
    if (el) el.innerHTML = msg;
  };
  const progress = (cur, tot, currentAll) => {
    const el = document.getElementById('run-prog');
    if (el) el.style.width = `${Math.min(100, cur / tot * 100)}%`;
    status(`<span class="spinner"></span> ${cur} / ${tot} ${tl(S.run_received)}`);
    if (currentAll && cur >= 100) {
      try {
        const pt = parseTrades([...currentAll].reverse());
        if (pt.length >= 10) {
          const pv = state.strategy === 'orderbook'
            ? runOrderbookBacktest(pt, state.params)
            : runAMMBacktest(state.pool, pt, state.params);
          const roi = pv.roi * 100;
          const color = roi >= 0 ? '#68d391' : '#fc8181';
          const lv = document.getElementById('live-roi');
          if (lv) lv.innerHTML = `<span style="color:${color}">${roi >= 0 ? '+' : ''}${roi.toFixed(2)}%</span>`;
        }
      } catch (_) {}
    }
  };

  try {
    const total = state.params.records;
    log(`→ ${poolLabel(state.pool)} · ${total} ${tp(S.run_req)}`);

    const fetchFn = state.strategy === 'amm' ? fetchTradesForPool : fetchTradesForPair;
    const records = await fetchFn(state.pool, total, progress);

    document.getElementById('nav-buttons').innerHTML = '';

    if (_fetchStop) {
      log(`⚠ ${records.length} ${tp(S.run_received)} (중단됨)`);
    } else {
      log(`✓ ${records.length} ${tp(S.run_received)}`);
    }

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
    document.getElementById('nav-buttons').innerHTML = '';
    status(`<div class="alert">${tl(S.run_error)}: ${e.message}</div>`);
    document.getElementById('nav-buttons').innerHTML = `
      <button class="btn btn-secondary" onclick="goToStep(4)">${tl(S.btn_params)}</button>
      <button class="btn btn-primary" onclick="goToStep(5)">${tl(S.btn_retry)}</button>
    `;
  }
}

// ── Step 6: 결과 ──────────────────────────────────────

function renderResultStep(el, nav) {
  if (state.strategy === 'auto') { renderScanResultStep(el, nav); return; }
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
    <div class="alert info" style="margin-bottom:10px">📊 ${poolLabel(state.pool)} · ${NETWORKS[state.network].name}</div>
    <div class="result-card">
      <h3>${t(S.res_summary)}</h3>
      <div class="stat-row"><span class="label">${tl(S.res_pnl)}</span><div>${fmtPct(r.roi)} &nbsp; ${fmtUsdc(r.pnl)}</div></div>
      <div class="stat-row"><span class="label">${tl(S.res_spread)}</span>${fmtUsdc(r.spreadProfit)}</div>
      <div class="stat-row"><span class="label">${tl(S.res_inv)}</span>${fmtUsdc(r.inventoryPnl)}</div>
      <div class="stat-row"><span class="label">${tl(S.res_fees)}</span><span class="value ${r.fees >= 0.005 ? 'negative' : 'neutral'}">${r.fees >= 0.005 ? '-' : ''}${fmt(r.fees)} USDC</span></div>
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
    <div class="alert info" style="margin-bottom:10px">📊 ${poolLabel(state.pool)} · ${NETWORKS[state.network].name}</div>
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

  const raw  = r.snapshots;
  const step = Math.max(1, Math.floor(raw.length / 200));
  const snaps = raw.filter((_, i) => i % step === 0);

  const labels = snaps.map(s => s.i);
  const datasets = r.type === 'orderbook'
    ? [{ label: tp(S.chart_total), data: snaps.map(s => s.totalVal), borderColor: '#667eea', tension: 0.3, pointRadius: 0 }]
    : [
        { label: tp(S.chart_lp),   data: snaps.map(s => s.lpVal),   borderColor: '#667eea', tension: 0.3, pointRadius: 0 },
        { label: tp(S.chart_hodl), data: snaps.map(s => s.hodlVal), borderColor: '#f6ad55', tension: 0.3, pointRadius: 0, borderDash: [5,5] },
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
//  AUTO OPTIMIZE
// ═══════════════════════════════════════════════════════

function renderAutoPoolSelectStep(el, nav) {
  if (state.pools.length === 0) {
    el.innerHTML = `
      <div class="section-title">${t(S.auto_pool_title)}</div>
      <div class="status-text"><span class="spinner"></span> ${tl(S.loading_pools)}... <span id="load-timer">0</span>${tp(S.sec)}</div>
    `;
    navBtns(nav, true, null);
    if (state.network === 'pi') loadPiPairs(); else loadPools();
    return;
  }
  if (!scanSelectionSet) {
    state.pools.slice(0, 10).forEach(p => scanSelectedIds.add(p.id));
    scanSelectionSet = true;
  }
  const selCount = scanSelectedIds.size;
  el.innerHTML = `
    <div class="section-title">${t(S.auto_pool_title)}</div>
    <div style="display:flex;gap:8px;margin-bottom:10px;align-items:center;flex-wrap:wrap">
      <button class="btn btn-secondary" style="padding:5px 12px;font-size:0.8rem" onclick="scanSelectAll()">${tl(S.auto_sel_all)}</button>
      <button class="btn btn-secondary" style="padding:5px 12px;font-size:0.8rem" onclick="scanDeselectAll()">${tl(S.auto_desel_all)}</button>
      <span id="scan-sel-badge" style="font-size:0.82rem;color:#90cdf4"><strong>${selCount}</strong> ${t(S.auto_selected)}</span>
    </div>
    <input class="search-box" id="pool-search" placeholder="${tp(S.search_ph)}" oninput="filterAutoPool()" value="${poolSearchQuery}">
    <div id="auto-pool-list">${autoPoolListHtml()}</div>
  `;
  navBtns(nav, true, 'nextStep', null, selCount === 0);
}

function autoPoolListHtml() {
  const filtered = state.pools.filter(p => !poolSearchQuery || poolLabel(p).toLowerCase().includes(poolSearchQuery));
  if (!filtered.length) return `<div class="status-text">${tl(S.no_results)}</div>`;
  const start = poolPage * POOL_PAGE_SIZE;
  const page  = filtered.slice(start, start + POOL_PAGE_SIZE);
  return page.map(p => `
    <div class="pool-item ${scanSelectedIds.has(p.id) ? 'selected' : ''}" onclick="toggleScanPool('${p.id}')">
      <div style="display:flex;align-items:center;gap:10px">
        <input type="checkbox" ${scanSelectedIds.has(p.id) ? 'checked' : ''} style="width:16px;height:16px;accent-color:#667eea;flex-shrink:0;pointer-events:none">
        <div>
          <div class="pool-pair">${poolLabel(p)}</div>
          <div class="pool-meta">${state.network === 'pi'
            ? `${tl(S.recent_trades)}: <strong style="color:#e2e8f0">${p.tradeCount}</strong> / ${piTotalFetched.toLocaleString()}`
            : `7d거래 <strong style="color:#e2e8f0">${(p._trades7d||0).toLocaleString()}</strong>건 · LP <strong style="color:#e2e8f0">${p._accounts||'?'}</strong>`
          }</div>
        </div>
      </div>
    </div>`).join('') + pagerHtml(filtered.length);
}

function filterAutoPool() {
  poolSearchQuery = document.getElementById('pool-search')?.value?.toLowerCase() || '';
  poolPage = 0;
  document.getElementById('auto-pool-list').innerHTML = autoPoolListHtml();
  const badge = document.getElementById('scan-sel-badge');
  if (badge) badge.innerHTML = `<strong>${scanSelectedIds.size}</strong> ${t(S.auto_selected)}`;
  navBtns(document.getElementById('nav-buttons'), true, 'nextStep', null, scanSelectedIds.size === 0);
}

function toggleScanPool(id) {
  if (scanSelectedIds.has(id)) scanSelectedIds.delete(id);
  else scanSelectedIds.add(id);
  document.getElementById('auto-pool-list').innerHTML = autoPoolListHtml();
  const badge = document.getElementById('scan-sel-badge');
  if (badge) badge.innerHTML = `<strong>${scanSelectedIds.size}</strong> ${t(S.auto_selected)}`;
  navBtns(document.getElementById('nav-buttons'), true, 'nextStep', null, scanSelectedIds.size === 0);
}

function currentPagePools() {
  const filtered = state.pools.filter(p => !poolSearchQuery || poolLabel(p).toLowerCase().includes(poolSearchQuery));
  return filtered.slice(poolPage * POOL_PAGE_SIZE, (poolPage + 1) * POOL_PAGE_SIZE);
}
function scanSelectAll() {
  currentPagePools().forEach(p => scanSelectedIds.add(p.id));
  scanSelectionSet = true;
  renderApp();
}
function scanDeselectAll() {
  currentPagePools().forEach(p => scanSelectedIds.delete(p.id));
  scanSelectionSet = true;
  renderApp();
}

// ── Step 4 (auto): 스캔 설정 ──────────────────────────

function renderScanParamsStep(el, nav) {
  const isPi = state.network === 'pi';
  const p    = state.scanParams;
  const sub  = p.subStrategy || 'orderbook';
  el.innerHTML = `
    <div class="section-title" id="scan-section-title">${sub === 'amm' ? 'AMM' : 'MM'} ${t(S.scan_title)}</div>
    <div class="alert info">📊 ${scanSelectedIds.size} ${t(S.auto_selected)} · ${NETWORKS[state.network].name}</div>

    <div class="form-group">
      <label>${tl(S.scan_sub_strat)}</label>
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:8px">
        <label style="display:flex;align-items:center;gap:10px;cursor:pointer;font-size:0.92rem">
          <input type="radio" name="scan-strat" value="orderbook" ${sub==='orderbook'?'checked':''} onchange="updateScanSpreadOpts(this.value)" style="accent-color:#667eea;width:18px;height:18px;flex-shrink:0">
          <span>${t(S.ob_name)}</span>
        </label>
        ${!isPi ? `<label style="display:flex;align-items:center;gap:10px;cursor:pointer;font-size:0.92rem">
          <input type="radio" name="scan-strat" value="amm" ${sub==='amm'?'checked':''} onchange="updateScanSpreadOpts(this.value)" style="accent-color:#667eea;width:18px;height:18px;flex-shrink:0">
          <span>${t(S.amm_name)}</span>
        </label>` : ''}
      </div>
    </div>

    <div class="form-group">
      <label>${tl(S.scan_records)} <span class="param-hint">${t(S.p_rec)}: 2,000</span></label>
      <input type="number" id="scan-records" value="${p.records||2000}" min="200" max="5000" step="100">
    </div>

    <div id="scan-spread-opts">${sub==='orderbook' ? scanSpreadOptsHtml(p.spreadOptions) : ''}</div>
  `;
  navBtns(nav, true, 'goToScanRun', `▶ ${t(S.btn_run)}`);
}

function scanSpreadOptsHtml(selected) {
  const opts = [0.3, 0.5, 1.0, 1.5, 2.0];
  const sel  = selected || opts;
  return `<div class="form-group">
    <label>${tl(S.scan_spreads)}</label>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
      ${opts.map(v => {
        const id = `spread-${String(v).replace('.','_')}`;
        return `<label style="display:flex;align-items:center;gap:10px;cursor:pointer;font-size:0.92rem">
          <input type="checkbox" id="${id}" ${sel.includes(v)?'checked':''} style="accent-color:#667eea;width:18px;height:18px;flex-shrink:0">
          <span>${v}%</span>
        </label>`;
      }).join('')}
    </div>
  </div>`;
}

function updateScanSpreadOpts(val) {
  const el = document.getElementById('scan-spread-opts');
  if (el) el.innerHTML = val === 'orderbook' ? scanSpreadOptsHtml(null) : '';
  const titleEl = document.getElementById('scan-section-title');
  if (titleEl) titleEl.textContent = `${val === 'amm' ? 'AMM' : 'MM'} ${t(S.scan_title)}`;
}

function goToScanRun() {
  const subStrat = document.querySelector('input[name="scan-strat"]:checked')?.value || 'orderbook';
  const records  = Math.max(200, Math.min(2000, parseInt(document.getElementById('scan-records')?.value || '500')));
  const spreadOptions = subStrat === 'orderbook'
    ? [0.3, 0.5, 1.0, 1.5, 2.0].filter(v => document.getElementById(`spread-${String(v).replace('.','_')}`)?.checked)
    : null;
  state.scanParams = { subStrategy: subStrat, records, capital: 500, spreadOptions: spreadOptions?.length ? spreadOptions : [0.5] };
  nextStep();
}

// ── Step 5 (auto): 스캔 실행 ──────────────────────────

function renderAutoRunStep(el, nav) {
  const sub = state.scanParams?.subStrategy || 'orderbook';
  el.innerHTML = `
    <div class="section-title">${sub === 'amm' ? 'AMM' : 'MM'} ${t(S.scan_simulating)}</div>
    <div id="run-status" class="status-text"><span class="spinner"></span> ${tl(S.scan_running)}...</div>
    <div class="progress-bar"><div class="progress-fill" id="run-prog" style="width:0%"></div></div>
    <div class="result-card" style="margin-top:12px">
      <div class="log-list" id="run-log"></div>
    </div>
  `;
  nav.innerHTML = `<button class="btn btn-secondary" id="btn-stop-fetch" onclick="window._stopFetch()">${tl(S.btn_stop)}</button>`;
  runAutoScan();
}

async function runAutoScan() {
  const { subStrategy, records, capital, spreadOptions } = state.scanParams;
  const log    = msg => { const el = document.getElementById('run-log');  if (el) el.innerHTML += `<div>${msg}</div>`; };
  const status = msg => { const el = document.getElementById('run-status'); if (el) el.innerHTML = msg; };
  const setProg = (cur, tot) => {
    const el = document.getElementById('run-prog');
    if (el) el.style.width = `${Math.min(100, cur/tot*100)}%`;
  };

  const selected = state.pools.filter(p => scanSelectedIds.has(p.id));
  state.scanResults = [];

  try {
    for (let i = 0; i < selected.length; i++) {
      if (_fetchStop) break;
      const pool  = selected[i];
      const label = poolLabel(pool);
      status(`<span class="spinner"></span> [${i+1}/${selected.length}] ${label} — ${tl(S.scan_running)}...`);
      setProg(i, selected.length);

      let tradeRecords;
      try {
        const fetchFn = subStrategy === 'amm' ? fetchTradesForPool : fetchTradesForPair;
        tradeRecords  = await fetchFn(pool, records, () => {});
      } catch (e) {
        log(`✗ ${label}: ${e.message}`);
        continue;
      }

      const trades = parseTrades(tradeRecords);
      if (trades.length < 10) { log(`✗ ${label}: 데이터 부족 (${trades.length}건)`); continue; }

      let bestRoi = -Infinity, bestResult = null, bestParams = null;

      if (subStrategy === 'orderbook') {
        for (const spread of spreadOptions) {
          for (const split of [40, 50, 60]) {
            const p = { records, totalUsdc: capital, splitRatio: split, spreadPct: spread,
                        orderSizePct: 3, layers: 1, stopRatio: 70, feePct: 0.3, surgeTicks: 3, surgePct: 1.5 };
            const r = runOrderbookBacktest(trades, p);
            if (r.roi > bestRoi) { bestRoi = r.roi; bestResult = r; bestParams = p; }
          }
        }
      } else {
        for (const maxIL of [5, 10, 20]) {
          for (const targetRoi of [3, 5, 10]) {
            const p = { records, depositUsdc: capital, maxILPct: maxIL, targetRoiPct: targetRoi };
            const r = runAMMBacktest(pool, trades, p);
            if (r.roi > bestRoi) { bestRoi = r.roi; bestResult = r; bestParams = p; }
          }
        }
      }

      if (bestResult) {
        state.scanResults.push({ pool, params: bestParams, result: bestResult, roi: bestRoi, label });
        const roiStr = (bestRoi * 100).toFixed(1);
        const hint   = subStrategy === 'orderbook'
          ? `스프레드 ${bestParams.spreadPct}% · 비율 ${bestParams.splitRatio}:${100-bestParams.splitRatio}`
          : `IL ${bestParams.maxILPct}% · 목표ROI ${bestParams.targetRoiPct}%`;
        log(`✓ ${label}: ROI <strong style="color:${bestRoi>=0?'#68d391':'#fc8181'}">${roiStr}%</strong> (${hint})`);
      }

      if (i < selected.length - 1) await sleep(800);
    }

    state.scanResults.sort((a, b) => b.roi - a.roi);
    setProg(selected.length, selected.length);
    status(tl(S.scan_done));
    document.getElementById('nav-buttons').innerHTML = '';
    await sleep(400);
    nextStep();

  } catch (e) {
    document.getElementById('nav-buttons').innerHTML = '';
    status(`<div class="alert">${tl(S.run_error)}: ${e.message}</div>`);
    document.getElementById('nav-buttons').innerHTML = `
      <button class="btn btn-secondary" onclick="goToStep(4)">${tl(S.btn_params)}</button>
      <button class="btn btn-primary"   onclick="goToStep(5)">${tl(S.btn_retry)}</button>
    `;
  }
}

// ── Step 6 (auto): 결과 ───────────────────────────────

function renderScanResultStep(el, nav) {
  const results    = state.scanResults;
  const subStrategy = state.scanParams.subStrategy;

  if (!results.length) {
    el.innerHTML = `<div class="section-title">${t(S.res_scan_title)}</div><div class="alert">${tl(S.res_scan_empty)}</div>`;
    nav.innerHTML = `<button class="btn btn-secondary" onclick="goToStep(4)">${tl(S.btn_params)}</button>`;
    return;
  }

  el.innerHTML = `
    <div class="section-title">${t(S.res_scan_title)}</div>
    <div class="result-card">
      ${results.map((r, idx) => {
        const roi      = (r.roi * 100).toFixed(1);
        const roiClass = r.roi >= 0 ? 'positive' : 'negative';
        const paramLine = subStrategy === 'orderbook'
          ? `스프레드 ${r.params.spreadPct}% · 비율 ${r.params.splitRatio}:${100-r.params.splitRatio}`
          : `IL ${r.params.maxILPct}% · 목표ROI ${r.params.targetRoiPct}%`;
        const medal = idx === 0 ? '🥇 ' : idx === 1 ? '🥈 ' : idx === 2 ? '🥉 ' : `#${idx+1} `;
        return `
          <div class="stat-row" style="flex-direction:column;align-items:flex-start;gap:5px;padding:12px 0">
            <div style="display:flex;justify-content:space-between;width:100%;align-items:center">
              <span style="font-weight:600">${medal}${r.label}</span>
              <span class="value ${roiClass}">${roi}%</span>
            </div>
            <div style="font-size:0.78rem;color:#718096">${paramLine} · ${r.result.fills}회 체결</div>
            <button class="btn btn-primary" style="padding:5px 12px;font-size:0.8rem;margin-top:3px" onclick="useScanResult(${idx})">${tl(S.res_scan_use)}</button>
          </div>`;
      }).join('')}
    </div>
  `;
  nav.innerHTML = `
    <button class="btn btn-secondary" onclick="goToStep(4)">${tl(S.btn_params)}</button>
    <button class="btn btn-primary"   onclick="goToStep(1)">${tl(S.btn_new)}</button>
  `;
}

function useScanResult(idx) {
  const r = state.scanResults[idx];
  state.strategy = state.scanParams.subStrategy;
  state.pool     = r.pool;
  state.params   = { ...r.params, records: state.scanParams.records };
  goToStep(4);
}

// ═══════════════════════════════════════════════════════
//  NAVIGATION
// ═══════════════════════════════════════════════════════

function nextStep() { state.step = Math.min(6, state.step + 1); renderApp(); }
function prevStep() { state.step = Math.max(1, state.step - 1); renderApp(); }
function goToStep(n) { state.step = n; renderApp(); }

// ── Pi SDK 인증 ───────────────────────────────────────
Pi.init({ version: '2.0', sandbox: true });

function doLogin() {
  const btn    = document.getElementById('btn-login');
  const errEl  = document.getElementById('login-error');
  btn.disabled = true;
  btn.innerHTML = '연결 중... / Connecting...';
  errEl.style.display = 'none';

  Pi.authenticate(['username'], payment => {
    console.warn('미완료 결제:', payment.identifier);
  }).then(auth => {
    const username = auth.user?.username ?? 'Pioneer';
    document.getElementById('header-username').textContent = username;
    document.getElementById('login-screen').style.display  = 'none';
    document.getElementById('app').style.display           = 'block';
    renderApp();
  }).catch(err => {
    btn.disabled = false;
    btn.innerHTML = '전략 시뮬레이션 시작<br><span class="login-btn-en">Start Strategy Simulation</span>';
    errEl.textContent    = '연결 실패. 다시 시도해주세요. / Connection failed.';
    errEl.style.display  = 'block';
    console.error(err);
  });
}
