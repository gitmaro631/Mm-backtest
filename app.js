// ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??//  CONSTANTS & STATE
// ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??
// ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??//  I18N ???ν썑 ?⑥씪 ?몄뼱 ?꾪솚 ??LANG 蹂?섎쭔 諛붽씀硫???// ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??
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
    { ko:'?ㅽ듃?뚰겕', en:'Network',    id:'Jaringan',  zh:'營묊퍥',     ja:'?띲긿?덀꺈?쇈궚', es:'Red',        vi:'M梳죒g',       hi:'西ⓣ쪍西잀ㅅ西겯쪓西?,    pt:'Rede',       tl:'Network',    fr:'R챕seau' },
    { ko:'?꾨왂',     en:'Strategy',   id:'Strategi',  zh:'嶺뽫븼',     ja:'??븼',         es:'Estrategia', vi:'Chi梳퓆 l튼沼즓', hi:'西겯ㄳ西ⓣ?西ㅰㅏ',     pt:'Estrat챕gia', tl:'Estratehiya',fr:'Strat챕gie' },
    { ko:'? ?좏깮',  en:'Pool',       id:'Pool',      zh:'?됪떓黎?,   ja:'?쀣꺖?ラ겦??,   es:'Pool',       vi:'Ch沼뛫 Pool',  hi:'西む쪈西?,        pt:'Pool',       tl:'Pool',       fr:'Pool' },
    { ko:'?뚮씪誘명꽣', en:'Parameters', id:'Parameter', zh:'?귝빊',     ja:'?묆꺀?▲꺖??,   es:'Par찼metros', vi:'Tham s沼?,    hi:'西む쪎西겯ㅎ西??西잀ㅀ',   pt:'Par창metros', tl:'Parametro',  fr:'Param챔tres' },
    { ko:'?ㅽ뻾',     en:'Run',        id:'Jalankan',  zh:'?㎬죱',     ja:'若잒죱',         es:'Ejecutar',   vi:'Ch梳죣',       hi:'西싟ㅂ西약쨵西?,      pt:'Executar',   tl:'Patakbuhin', fr:'Ex챕cuter' },
    { ko:'寃곌낵',     en:'Results',    id:'Hasil',     zh:'瀯볠옖',     ja:'永먩옖',         es:'Resultados', vi:'K梳퓍 qu梳?,    hi:'西むㅀ西욈ㄳ西약ㄾ',     pt:'Resultados', tl:'Resulta',    fr:'R챕sultats' },
  ],
  btn_next:     { ko:'?ㅼ쓬',          en:'Next',              id:'Berikutnya',      zh:'訝뗤?閭?,        ja:'轝▲겦',              es:'Siguiente',        vi:'Ti梳퓈',               hi:'西끶쨽西꿋ㅎ',           pt:'Pr처ximo',         tl:'Susunod',           fr:'Suivant' },
  btn_prev:     { ko:'?댁쟾',          en:'Back',              id:'Kembali',         zh:'訝듾?閭?,        ja:'?삠굥',              es:'Atr찼s',            vi:'Quay l梳죍',           hi:'西むㅏ西쎹ㅂ西?,          pt:'Voltar',          tl:'Bumalik',           fr:'Retour' },
  btn_run:      { ko:'諛깊뀒?ㅽ듃 ?쒖옉', en:'Start Backtest',    id:'Mulai Backtest',  zh:'凉冶뗥썮役?,      ja:'?먦긿??깇?밤깉?뗥쭓',  es:'Iniciar Backtest', vi:'B梳칣 휃梳쬾 Backtest',   hi:'西о쪎西뺖쩅誓뉋ㅈ誓띭쩅 西뜩쪇西겯쪈',  pt:'Iniciar Backtest', tl:'Simulan ang Backtest', fr:'Lancer Backtest' },
  btn_retry:    { ko:'?ㅼ떆 ?쒕룄',     en:'Retry',             id:'Coba Lagi',       zh:'?띹캊',          ja:'?띹ĳ烏?,            es:'Reintentar',       vi:'Th沼?l梳죍',            hi:'西む쪇西ⓣ쨨 西む쪓西겯ㄿ西약ㅈ',    pt:'Tentar novamente', tl:'Subukan ulit',      fr:'R챕essayer' },
  btn_stop:     { ko:'?섏떊 以묐떒',     en:'Stop',              id:'Berhenti',        zh:'?쒏?',          ja:'訝?뼪',              es:'Detener',          vi:'D沼쳌g',               hi:'西겯쪑西뺖쪍西?,           pt:'Parar',            tl:'Ihinto',            fr:'Arr챗ter' },
  btn_new:      { ko:'??諛깊뀒?ㅽ듃',   en:'New Backtest',      id:'Backtest Baru',   zh:'?겼썮役?,        ja:'?겹깘?껁궚?녴궧??,    es:'Nuevo Backtest',   vi:'Backtest m沼쌻',       hi:'西ⓣㄿ西?西о쪎西뺖쩅誓뉋ㅈ誓띭쩅',   pt:'Novo Backtest',    tl:'Bagong Backtest',   fr:'Nouveau Backtest' },
  btn_params:   { ko:'???뚮씪誘명꽣',   en:'??Parameters',     id:'??Parameter',     zh:'???귝빊',        ja:'???묆꺀?▲꺖??,     es:'??Par찼metros',     vi:'??Tham s沼?,          hi:'??西む쪎西겯ㅎ西??西잀ㅀ',     pt:'??Par창metros',     tl:'??Parametro',       fr:'??Param챔tres' },
  btn_net:      { ko:'???ㅽ듃?뚰겕 蹂寃?, en:'??Change Network', id:'??Ganti Jaringan', zh:'???닸뜟營묊퍥', ja:'???띲긿?덀꺈?쇈궚鸚됪쎍', es:'??Cambiar Red',  vi:'??휂沼뷼 m梳죒g',         hi:'??西ⓣ쪍西잀ㅅ西겯쪓西?西оㄶ西꿋쪍西?, pt:'??Mudar Rede',    tl:'??Baguhin ang Network', fr:'??Changer R챕seau' },

  net_title:    { ko:'?ㅽ듃?뚰겕 ?좏깮',  en:'Select Network',    id:'Pilih Jaringan',  zh:'?됪떓營묊퍥',      ja:'?띲긿?덀꺈?쇈궚?멩뒢',  es:'Seleccionar Red',  vi:'Ch沼뛫 m梳죒g',          hi:'西ⓣ쪍西잀ㅅ西겯쪓西?西싟쪇西ⓣ쪍西?,  pt:'Selecionar Rede',  tl:'Piliin ang Network', fr:'Choisir R챕seau' },
  stellar_name: { ko:'Stellar 硫붿씤??, en:'Stellar Mainnet',   id:'Stellar Mainnet', zh:'Stellar 訝사퐨',  ja:'Stellar ?▲궎?녈깓?껁깉', es:'Stellar Mainnet', vi:'Stellar Mainnet',    hi:'Stellar 西?쪍西ⓣ쪍西?,  pt:'Stellar Mainnet',  tl:'Stellar Mainnet',   fr:'Stellar Mainnet' },
  stellar_desc: { ko:'Stellar 怨듭떇 硫붿씤??쨌 XLM/USDC ???띾????좊룞??, en:'Official Stellar mainnet 쨌 Rich liquidity', id:'Mainnet resmi Stellar 쨌 Likuiditas tinggi', zh:'Stellar 若섉뼶訝사퐨 쨌 XLM/USDC 役곩뒯?㏛린野?, ja:'Stellar?у폀?▲궎?녈깓?껁깉 쨌 穩듿칽?ゆ탛?뺞?, es:'Mainnet oficial Stellar 쨌 Alta liquidez', vi:'Mainnet Stellar 쨌 Thanh kho梳즢 cao', hi:'Stellar 西녱ㄷ西욈쨻西약ㅀ西욈쨻 西?쪍西ⓣ쪍西?쨌 西됢쩀誓띭쩀 西ㅰㅀ西꿋ㄴ西?, pt:'Mainnet oficial Stellar 쨌 Alta liquidez', tl:'Opisyal na Stellar mainnet 쨌 Mataas na likido', fr:'Mainnet officiel Stellar 쨌 Liquidit챕 챕lev챕e' },
  pi_name:      { ko:'Pi DEX',         en:'Pi DEX',            id:'Pi DEX',          zh:'Pi DEX',        ja:'Pi DEX',            es:'Pi DEX',           vi:'Pi DEX',             hi:'Pi DEX',         pt:'Pi DEX',           tl:'Pi DEX',             fr:'Pi DEX' },
  pi_desc:      { ko:'Pi ?ㅽ듃?뚰겕 DEX 쨌 Pi 硫붿씤??湲곕컲', en:'Pi Network DEX 쨌 Pi mainnet based', id:'DEX Jaringan Pi 쨌 Berbasis mainnet Pi', zh:'Pi 營묊퍥 DEX 쨌 ?뷰틢 Pi 訝사퐨', ja:'Pi ?띲긿?덀꺈?쇈궚 DEX 쨌 Pi ?▲궎?녈깓?껁깉?쇻꺖??, es:'DEX de Pi Network 쨌 Basado en mainnet Pi', vi:'Pi Network DEX 쨌 Tr챗n mainnet Pi', hi:'Pi Network DEX 쨌 Pi 西?쪍西ⓣ쪍西?西녱ㄷ西약ㅀ西욈ㄴ', pt:'Pi Network DEX 쨌 Baseado no mainnet Pi', tl:'Pi Network DEX 쨌 Nakabase sa Pi mainnet', fr:'Pi Network DEX 쨌 Bas챕 sur Pi mainnet' },

  str_title:    { ko:'?꾨왂 ?좏깮',      en:'Select Strategy',   id:'Pilih Strategi',  zh:'?됪떓嶺뽫븼',      ja:'??븼?멩뒢',          es:'Seleccionar Estrategia', vi:'Ch沼뛫 chi梳퓆 l튼沼즓', hi:'西겯ㄳ西ⓣ?西ㅰㅏ 西싟쪇西ⓣ쪍西?,  pt:'Selecionar Estrat챕gia', tl:'Piliin ang Estratehiya', fr:'Choisir Strat챕gie' },
  ob_name:      { ko:'?ㅻ뜑遺?留덉폆硫붿씠??, en:'Orderbook Market Making', id:'Market Making Orderbook', zh:'溫℡뜒怜욕걳躍?, ja:'?ゃ꺖??쇈깣?껁궚 ?욁꺖?긱긿?덀깳?ㅳ궘?녈궛', es:'Creaci처n de mercado (Orderbook)', vi:'T梳죓 l梳춑 th沼?tr튼沼쓓g Orderbook', hi:'西묂ㅀ誓띭ㄱ西겯ㄼ誓곟쨻 西?ㅎ西겯쪓西뺖쪍西?西?쪍西뺖ㅏ西귖쨽', pt:'Market Making (Orderbook)', tl:'Orderbook Market Making', fr:"Market Making (Carnet d'ordres)" },
  ob_desc:      { ko:'Bid/Ask 二쇰Ц?쇰줈 ?ㅽ봽?덈뱶 ?섏씡 ?쒕??덉씠??, en:'Simulate spread profit via bid/ask orders', id:'Simulasi profit spread via order bid/ask', zh:'?싪퓝阿겼뜓?뺞Æ?잋뻔藥?뵸??, ja:'縕룔걚/鶯꿔굤力ⓩ뻼?㎯궧?쀣꺃?껁깋?롧썗?믡궥?잆깷?с꺖??, es:'Simular ganancias de spread con 처rdenes bid/ask', vi:'M척 ph沼뢮g l沼즜 nhu梳춏 ch챗nh l沼놻h gi찼 qua l沼뇆h mua/b찼n', hi:'Bid/Ask 西묂ㅀ誓띭ㄱ西?西멘쪍 西멘쪓西む쪓西겯쪍西?西꿋ㅎ西?西뺖ㅎ 西끶ㄸ誓곟쨻西겯ㄳ', pt:'Simular lucro de spread com ordens bid/ask', tl:'I-simulate ang kita sa spread sa pamamagitan ng bid/ask orders', fr:'Simuler les profits de spread via ordres bid/ask' },
  amm_name:     { ko:'AMM ?좊룞??怨듦툒', en:'AMM Liquidity Provision', id:'Suplai Likuiditas AMM', zh:'AMM 役곩뒯?㎪룓堊?, ja:'AMM 役곩땿?㎯깤??깛?멥깾?뗣꺍??, es:'Provisi처n de Liquidez AMM', vi:'Cung c梳쩺 thanh kho梳즢 AMM', hi:'AMM 西ㅰㅀ西꿋ㄴ西?西む쪓西겯ㅎ西듀ㄷ西약ㄸ', pt:'Provis찾o de Liquidez AMM', tl:'AMM Liquidity Provision', fr:'Fourniture de Liquidit챕 AMM' },
  amm_desc:     { ko:'????덉튂 ???섏닔猷?+ 鍮꾩쁺援ъ쟻 ?먯떎 ?쒕??덉씠??, en:'Fee income & impermanent loss simulation', id:'Simulasi pendapatan fee & kerugian impermanent', zh:'耶섇뀯黎졾릮與→떉?뗧뺌兀방뵸?듿뭽?졾만?잌ㅁ', ja:'?쀣꺖?ャ겓?먦걨?잌풄??뎸?경뼑?롧썗竊뗧꽒躍멩릫鸚긱굮?룔깱?γ꺃?쇈깉', es:'Simular ingresos por comisi처n y p챕rdida impermanente', vi:'M척 ph沼뢮g thu nh梳춑 ph챠 & t沼븂 th梳쩿 v척 th튼沼쓓g', hi:'西む쪈西?西?쪍西?西쒉ㄾ西?西뺖쪍 西оㅎ西?西뜩쪇西꿋쪓西?+ 西끶ㅈ誓띭ㄵ西약ㄿ誓 西밝ㅎ西ⓣㅏ 西뺖ㅎ 西끶ㄸ誓곟쨻西겯ㄳ', pt:'Simular renda de taxa e perda impermanente', tl:'Simulate ang kita mula sa bayad at impermanent loss', fr:'Simuler revenus de frais et perte impermanente' },
  amm_disabled: { ko:'?좑툘 Pi DEX??AMM ????놁뼱 ?ъ슜 遺덇?', en:'?좑툘 Pi DEX has no AMM pools', id:'?좑툘 Pi DEX tidak memiliki pool AMM', zh:'?좑툘 Pi DEX 亦→쐣 AMM 黎?, ja:'?좑툘 Pi DEX ??AMM ?쀣꺖?ャ걣?귙굤?얇걵??, es:'?좑툘 Pi DEX no tiene pools AMM', vi:'?좑툘 Pi DEX kh척ng c처 pool AMM', hi:'?좑툘 Pi DEX 西?쪍西?AMM 西む쪈西?西ⓣㅉ誓西?西밝쪎', pt:'?좑툘 Pi DEX n찾o tem pools AMM', tl:'?좑툘 Walang AMM pool ang Pi DEX', fr:"?좑툘 Pi DEX n'a pas de pools AMM" },

  pool_title:   { ko:'? ?좏깮',        en:'Select Pool',       id:'Pilih Pool',      zh:'?됪떓黎?,        ja:'?쀣꺖?ラ겦??,        es:'Seleccionar Pool',  vi:'Ch沼뛫 Pool',         hi:'西む쪈西?西싟쪇西ⓣ쪍西?,      pt:'Selecionar Pool',  tl:'Piliin ang Pool',    fr:'Choisir Pool' },
  pair_title:   { ko:'?섏뼱 ?좏깮',      en:'Select Pair',       id:'Pilih Pasangan',  zh:'?됪떓雅ㅶ삌野?,    ja:'?싥궋?멩뒢',          es:'Seleccionar Par',   vi:'Ch沼뛫 c梳톚',          hi:'西む쪍西?ㅀ 西싟쪇西ⓣ쪍西?,     pt:'Selecionar Par',   tl:'Piliin ang Pares',   fr:'Choisir la Paire' },
  loading_pools:{ ko:'? 紐⑸줉 遺덈윭?ㅻ뒗 以?, en:'Loading pools', id:'Memuat daftar pool', zh:'?좄슬黎졾닓烏ⓧ릎', ja:'?쀣꺖?ャ꺁?밤깉沃?씔訝?, es:'Cargando pools',  vi:'휂ang t梳즜 danh s찼ch pool', hi:'西む쪈西?西멘쪈西싟? 西꿋쪑西?西밝쪑 西겯ㅉ誓 西밝쪎', pt:'Carregando pools', tl:'Nilo-load ang mga pool', fr:'Chargement des pools' },
  loading_pairs:{ ko:'嫄곕옒 ?섏뼱 遺덈윭?ㅻ뒗 以?, en:'Loading pairs', id:'Memuat pasangan trading', zh:'?좄슬雅ㅶ삌野밥릎', ja:'?뽩폊?싥궋沃?씔訝?, es:'Cargando pares', vi:'휂ang t梳즜 c梳톚 giao d沼땉h', hi:'西잀쪓西겯쪍西□ㅏ西귖쨽 西む쪍西?ㅀ 西꿋쪑西?西밝쪑 西겯ㅉ誓?西밝쪎西?, pt:'Carregando pares', tl:'Nilo-load ang mga pares', fr:'Chargement des paires' },
  sec:          { ko:'珥?, en:'sec', id:'dtk', zh:'燁?, ja:'燁?, es:'seg', vi:'gi창y', hi:'西멘쪍西뺖쨧西?, pt:'seg', tl:'seg', fr:'sec' },
  search_ph:    { ko:'?좏겙 ?대쫫 寃??..', en:'Search token...', id:'Cari nama token...', zh:'?쒐뇨餓ｅ툈...', ja:'?덀꺖??꺍濾쒐뇨...', es:'Buscar token...', vi:'T챙m ki梳퓅 token...', hi:'西잀쪑西뺖ㄸ 西뽤쪑西쒉쪍西?..', pt:'Buscar token...', tl:'Hanapin ang token...', fr:'Rechercher token...' },
  sort_lp:      { ko:'XLM ?꾩껜 ? 쨌 7??嫄곕옒 ?잛닔 90% + LP ??10% ??, en:'All XLM pools 쨌 7d trade count 90% + LP 10%', id:'Semua pool XLM 쨌 Frekuensi 7h 90% + LP 10%', zh:'XLM?③깿黎?쨌 7?δ벡?볠А??0% + LP??0%', ja:'XLM?ⓦ깤?쇈꺂 쨌 7?ε룚凉뺝썮??0% + LP??0%??, es:'Todos pools XLM 쨌 Operaciones 7d 90% + LP 10%', vi:'T梳쩿 c梳?pool XLM 쨌 S沼?giao d沼땉h 7d 90% + LP 10%', hi:'西멘ㄽ誓 XLM 西む쪈西?쨌 7d 西잀쪓西겯쪍西?90% + LP 10%', pt:'Todos pools XLM 쨌 Negocia챌천es 7d 90% + LP 10%', tl:'Lahat ng XLM pool 쨌 7d trade count 90% + LP 10%', fr:'Tous pools XLM 쨌 Transactions 7j 90% + LP 10%' },
  sort_tvl:     { ko:'XLM ?꾩껜 ? 쨌 嫄곕옒??TVL 鍮꾩쑉 (?섏닔猷?APY) ??, en:'All XLM pools 쨌 Volume/TVL ratio (fee APY)', id:'Semua pool XLM 쨌 Rasio volume/TVL (APY biaya)', zh:'XLM?③깿黎?쨌 雅ㅶ삌??TVL驪붺럤竊덃뎸瀯?뉩APY竊?, ja:'XLM?ⓦ깤?쇈꺂 쨌 ?뽩폊??TVL驪붺럤竊덃뎸?경뼑APY竊됮젂', es:'Todos pools XLM 쨌 Ratio volumen/TVL (APY comisi처n)', vi:'T梳쩿 c梳?pool XLM 쨌 T沼?l沼?kh沼멼 l튼沼즢g/TVL (APY ph챠)', hi:'西멘ㄽ誓 XLM 西む쪈西?쨌 西듀쪏西꿋쪓西?쪈西?TVL 西끶ㄸ誓곟ㄺ西약ㄴ (西뜩쪇西꿋쪓西?APY)', pt:'Todos pools XLM 쨌 Propor챌찾o volume/TVL (APY de taxa)', tl:'Lahat ng XLM pool 쨌 Volume/TVL ratio (fee APY)', fr:'Tous pools XLM 쨌 Ratio volume/TVL (APY de frais)' },
  sort_pi_amm:  { ko:'Pi DEX AMM ? 쨌 LP ?????뺣젹', en:'Pi DEX AMM pools 쨌 Sorted by LP count', id:'Pool AMM Pi DEX 쨌 Urut jumlah LP', zh:'Pi DEX AMM 黎?쨌 ??LP ?곈뇧?믣틣', ja:'Pi DEX AMM ?쀣꺖??쨌 LP?곈젂', es:'Pools AMM Pi DEX 쨌 Ordenado por LP', vi:'Pool AMM Pi DEX 쨌 S梳칛 x梳퓈 theo s沼?LP', hi:'Pi DEX AMM 西む쪈西?쨌 LP 西멘쨧西뽤쪓西?ㅎ 西뺖쪍 西끶ㄸ誓곟ㅈ西약ㅀ', pt:'Pools AMM Pi DEX 쨌 Ordenado por LP', tl:'Pi DEX AMM pools 쨌 Nakaayos ayon sa LP count', fr:'Pools AMM Pi DEX 쨌 Tri챕 par nombre de LP' },
  pi_info:      { ko:'Pi DEX 쨌 ?ㅻ뜑遺?嫄곕옒 ?곗씠??쨌 嫄곕옒?????뺣젹', en:'Pi DEX 쨌 Orderbook data 쨌 Sorted by volume', id:'Pi DEX 쨌 Data orderbook 쨌 Urut volume', zh:'Pi DEX 쨌 溫℡뜒怜요벡?볠빊??쨌 ?됦벡?볣뇧?믣틣', ja:'Pi DEX 쨌 ?ゃ꺖??쇈깣?껁궚?뉎꺖??쨌 ?뽩폊?뤻젂', es:'Pi DEX 쨌 Datos orderbook 쨌 Ordenado por volumen', vi:'Pi DEX 쨌 D沼?li沼뇎 orderbook 쨌 S梳칛 x梳퓈 theo kh沼멼 l튼沼즢g', hi:'Pi DEX 쨌 西묂ㅀ誓띭ㄱ西겯ㄼ誓곟쨻 西□쪍西잀ㅎ 쨌 西듀쪏西꿋쪓西?쪈西?西뺖쪍 西끶ㄸ誓곟ㅈ西약ㅀ', pt:'Pi DEX 쨌 Dados orderbook 쨌 Ordenado por volume', tl:'Pi DEX 쨌 Orderbook data 쨌 Nakaayos ayon sa volume', fr:'Pi DEX 쨌 Donn챕es orderbook 쨌 Tri챕 par volume' },
  recommended:  { ko:'異붿쿇', en:'Top', id:'Unggulan', zh:'?②뜍', ja:'?듽걲?쇻굙', es:'Top', vi:'N沼뷼 b梳춗', hi:'西끶ㄸ誓곟ㅆ西귖ㅈ西욈ㄴ', pt:'Top', tl:'Inirerekomenda', fr:'Top' },
  recent_trades:{ ko:'理쒓렐 嫄곕옒', en:'Recent trades', id:'Transaksi terkini', zh:'?瓦묇벡??, ja:'?瓦묆겗?뽩폊', es:'Operaciones recientes', vi:'Giao d沼땉h g梳쬷 휃창y', hi:'西밝ㅎ西꿋ㅏ西?ㅎ 西잀쪓西겯쪍西?, pt:'Negocia챌천es recentes', tl:'Kamakailang trades', fr:'Transactions r챕centes' },
  lp_count:     { ko:'LP ??, en:'LP count', id:'Jml LP', zh:'LP ??, ja:'LP??, es:'LP count', vi:'S沼?LP', hi:'LP 西멘쨧西뽤쪓西?ㅎ', pt:'Qtd LP', tl:'LP count', fr:'Nb LP' },
  liquidity:    { ko:'?좊룞??, en:'Liquidity', id:'Likuiditas', zh:'役곩뒯??, ja:'役곩땿??, es:'Liquidez', vi:'Thanh kho梳즢', hi:'西ㅰㅀ西꿋ㄴ西?, pt:'Liquidez', tl:'Liquidity', fr:'Liquidit챕' },
  no_results:   { ko:'寃??寃곌낵 ?놁쓬', en:'No results', id:'Tidak ada hasil', zh:'?좂퍜??, ja:'永먩옖?ゃ걮', es:'Sin resultados', vi:'Kh척ng c처 k梳퓍 qu梳?, hi:'西뺖쪑西?西むㅀ西욈ㄳ西약ㄾ 西ⓣㅉ誓西?, pt:'Sem resultados', tl:'Walang resulta', fr:'Aucun r챕sultat' },
  pool_fail:    { ko:'? 紐⑸줉 濡쒕뱶 ?ㅽ뙣', en:'Pool load failed', id:'Gagal memuat pool', zh:'黎졾닓烏ⓨ뒥饔썲ㅁ兀?, ja:'?쀣꺖?ャ꺁?밤깉沃?겳渦쇈겳鸚길븮', es:'Error al cargar pools', vi:'L沼뾦 t梳즜 danh s찼ch pool', hi:'西む쪈西?西멘쪈西싟? 西꿋쪑西?西듀ㅏ西ムㅂ', pt:'Falha ao carregar pools', tl:'Nabigo ang pag-load ng pool', fr:'횋chec chargement pools' },
  pair_fail:    { ko:'?섏뼱 濡쒕뱶 ?ㅽ뙣', en:'Pair load failed', id:'Gagal memuat pasangan', zh:'雅ㅶ삌野밧뒥饔썲ㅁ兀?, ja:'?싥궋沃?겳渦쇈겳鸚길븮', es:'Error al cargar pares', vi:'L沼뾦 t梳즜 c梳톚 giao d沼땉h', hi:'西む쪍西?ㅀ 西꿋쪑西?西듀ㅏ西ムㅂ', pt:'Falha ao carregar pares', tl:'Nabigo ang pag-load ng pares', fr:'횋chec chargement paires' },
  no_trade_data:{ ko:'嫄곕옒 ?곗씠???놁쓬', en:'No trade data', id:'Tidak ada data trading', zh:'?졽벡?볠빊??, ja:'?뽩폊?뉎꺖?욍겒??, es:'Sin datos de trading', vi:'Kh척ng c처 d沼?li沼뇎 giao d沼땉h', hi:'西뺖쪑西?西잀쪓西겯쪍西?西□쪍西잀ㅎ 西ⓣㅉ誓西?, pt:'Sem dados de trading', tl:'Walang datos sa trade', fr:'Pas de donn챕es de trading' },

  param_title:  { ko:'?뚮씪誘명꽣 ?ㅼ젙', en:'Parameter Settings', id:'Pengaturan Parameter', zh:'?귝빊溫양쉰', ja:'?묆꺀?▲꺖?욤Þ若?, es:'Ajustes de Par찼metros', vi:'C횪i 휃梳톞 tham s沼?, hi:'西む쪎西겯ㅎ西??西잀ㅀ 西멘쪍西잀ㅏ西귖쨽', pt:'Configura챌천es de Par창metros', tl:'Mga Setting ng Parametro', fr:'R챕glages des Param챔tres' },
  p_records:    { ko:'?곗씠??嫄댁닔 (5,000~10,000)', en:'Data count (5,000~10,000)', id:'Jumlah data (5.000~10.000)', zh:'?경뜮?→빊 (5,000~10,000)', ja:'?뉎꺖?요뻑??(5,000~10,000)', es:'Cantidad de datos (5.000~10.000)', vi:'S沼?b梳즢 ghi (5.000~10.000)', hi:'西□쪍西잀ㅎ 西쀠ㄳ西ⓣㅎ (5,000~10,000)', pt:'Qtd dados (5.000~10.000)', tl:'Bilang ng data (5,000~10,000)', fr:'Nb de donn챕es (5 000~10 000)' },
  p_capital:    { ko:'珥덇린 ?먮낯', en:'Initial Capital', id:'Modal Awal', zh:'?앭쭓壅꾦뇫', ja:'?앮쐿蘊뉑쑍', es:'Capital inicial', vi:'V沼몁 ban 휃梳쬾', hi:'西む쪓西겯ㅎ西겯쨧西?ㅏ西?西む쪈西귖쩂誓', pt:'Capital inicial', tl:'Panimulang kapital', fr:'Capital initial' },
  p_split:      { ko:'?ㅼ씠?곕툕 珥덇린 鍮꾩쑉 (%)', en:'Native ratio (%)', id:'Rasio awal native (%)', zh:'?잏뵟餓ｅ툈?앭쭓驪붶풃 (%)', ja:'?띲궎?녴궍?뽩닜?잍캈??(%)', es:'Ratio inicial nativo (%)', vi:'T沼?l沼?ban 휃梳쬾 native (%)', hi:'西ⓣ쪍西잀ㅏ西?西む쪓西겯ㅎ西겯쨧西?ㅏ西?西끶ㄸ誓곟ㄺ西약ㄴ (%)', pt:'Propor챌찾o inicial nativa (%)', tl:'Native initial ratio (%)', fr:'Ratio natif initial (%)' },
  p_spread:     { ko:'?ㅽ봽?덈뱶 (%)', en:'Spread (%)', id:'Spread (%)', zh:'餓룟량 (%)', ja:'?밤깤?с긿??(%)', es:'Spread (%)', vi:'Ch챗nh l沼놻h (%)', hi:'西멘쪓西む쪓西겯쪍西?(%)', pt:'Spread (%)', tl:'Spread (%)', fr:'횋cart (%)' },
  p_order_size: { ko:'二쇰Ц ?ш린 (珥앹옄??%)', en:'Order size (% of total)', id:'Ukuran order (% total)', zh:'溫℡뜒鸚㎩컦 (?삭탡雅?%)', ja:'力ⓩ뻼?듐궎?븝펷渶뤺퀒??%竊?, es:'Tama챰o de orden (% total)', vi:'K챠ch th튼沼쌵 l沼뇆h (% t沼븂g)', hi:'西묂ㅀ誓띭ㄱ西?西멘ㅎ西뉋쩂 (西뺖쪇西?%)', pt:'Tamanho da ordem (% total)', tl:'Laki ng order (% ng total)', fr:"Taille d'ordre (% total)" },
  p_layers:     { ko:'二쇰Ц ?덉씠????, en:'Order layers', id:'Jumlah layer order', zh:'溫℡뜒掠귝빊', ja:'力ⓩ뻼?с궎?ㅳ꺖??, es:'Capas de orden', vi:'S沼?l沼썂 l沼뇆h', hi:'西묂ㅀ誓띭ㄱ西?西꿋쪍西?ㅀ誓띭ㅈ', pt:'Camadas de ordem', tl:'Bilang ng order layer', fr:"Couches d'ordres" },
  p_stop:       { ko:'?ш퀬 以묐떒 (%)', en:'Inventory stop (%)', id:'Batas inventori (%)', zh:'佯볟춼訝?뼪 (%)', ja:'?ⓨ벴?쒏? (%)', es:'Parada por inventario (%)', vi:'D沼쳌g t沼뱊 kho (%)', hi:'西뉋ㄸ誓띭ㅅ誓뉋쨧西잀ㅀ誓 西멘쪓西잀쪏西?(%)', pt:'Parada de invent찼rio (%)', tl:'Inventory stop (%)', fr:'Arr챗t inventaire (%)' },
  p_fee:        { ko:'?섏닔猷?(%)', en:'Fee (%)', id:'Biaya (%)', zh:'?뗧뺌兀?(%)', ja:'?뗦빊??(%)', es:'Comisi처n (%)', vi:'Ph챠 (%)', hi:'西뜩쪇西꿋쪓西?(%)', pt:'Taxa (%)', tl:'Bayad (%)', fr:'Frais (%)' },
  p_surge_ticks:{ ko:'湲됰? 媛먯? ??, en:'Surge window (ticks)', id:'Tik deteksi lonjakan', zh:'餓룡졏?ε룜汝役뗩뿴??, ja:'?ε쨯濾쒎눣?녴궍?껁궚', es:'Ticks de detecci처n de pico', vi:'Ticks ph찼t hi沼뇆 bi梳퓆 휃沼셬g', hi:'西됢쩁西약ㅂ 西듀ㅏ西귖ㄱ誓?(西잀ㅏ西?', pt:'Janela de surto (ticks)', tl:'Surge detection ticks', fr:'Fen챗tre de pic (ticks)' },
  p_surge_pct:  { ko:'湲됰? 媛먯? (%)', en:'Surge threshold (%)', id:'Ambang lonjakan (%)', zh:'餓룡졏?ε룜汝役?(%)', ja:'?ε쨯濾쒎눣 (%)', es:'Umbral de pico (%)', vi:'Ng튼沼죒g bi梳퓆 휃沼셬g (%)', hi:'西됢쩁西약ㅂ 西멘?西?ㅎ (%)', pt:'Limiar de surto (%)', tl:'Surge threshold (%)', fr:'Seuil de pic (%)' },
  p_deposit:    { ko:'?덉튂 湲덉븸', en:'Deposit amount', id:'Jumlah deposit', zh:'耶섉Ь?묌쥫', ja:'?먨뀯?묌죲', es:'Monto de dep처sito', vi:'S沼?ti沼걆 g沼춊', hi:'西쒉ㄾ西?西겯ㅎ西뜩ㅏ', pt:'Valor do dep처sito', tl:'Halaga ng deposit', fr:'Montant du d챕p척t' },
  p_max_il:     { ko:'理쒕? 鍮꾩쁺援ъ쟻 ?먯떎 (%)', en:'Max impermanent loss (%)', id:'Maks. kerugian impermanent (%)', zh:'?鸚㎪뿞躍멩뜜鸚?(%)', ja:'?鸚㎫꽒躍멩릫鸚?(%)', es:'P챕rdida impermanente m찼x. (%)', vi:'T沼븂 th梳쩿 v척 th튼沼쓓g t沼멼 휃a (%)', hi:'西끶ㄷ西욈쨻西ㅰㄾ 西끶ㅈ誓띭ㄵ西약ㄿ誓 西밝ㅎ西ⓣㅏ (%)', pt:'Perda impermanente m찼x. (%)', tl:'Max impermanent loss (%)', fr:'Perte impermanente max. (%)' },
  p_target_roi: { ko:'紐⑺몴 ?섏씡瑜?(%)', en:'Target ROI (%)', id:'Target ROI (%)', zh:'??젃?띄썗??(%)', ja:'??쮽ROI (%)', es:'ROI objetivo (%)', vi:'ROI m沼쩭 ti챗u (%)', hi:'西꿋쨻誓띭ㅇ誓띭ㄿ ROI (%)', pt:'ROI alvo (%)', tl:'Target ROI (%)', fr:'ROI cible (%)' },

  run_title:    { ko:'?곗씠???섏쭛 諛?諛깊뀒?ㅽ듃', en:'Fetching Data & Backtesting', id:'Pengambilan Data & Backtest', zh:'?경뜮?뉔썓訝롥썮役?, ja:'?뉎꺖?욕룑?놅펵?먦긿??깇?밤깉', es:'Recopilaci처n de datos y Backtest', vi:'Thu th梳춑 d沼?li沼뇎 & Backtest', hi:'西□쪍西잀ㅎ 西멘쨧西쀠쪓西겯ㅉ 西붲ㅀ 西о쪎西뺖쩅誓뉋ㅈ誓띭쩅', pt:'Coleta de dados e Backtest', tl:'Pagkuha ng data at Backtest', fr:'Collecte de donn챕es et Backtest' },
  run_start:    { ko:'?쒖옉 以?..', en:'Starting...', id:'Memulai...', zh:'??뒯訝?..', ja:'?뗥쭓訝?..', es:'Iniciando...', vi:'휂ang b梳칣 휃梳쬾...', hi:'西뜩쪇西겯쪈 西밝쪑 西겯ㅉ西?西밝쪎...', pt:'Iniciando...', tl:'Nagsisimula...', fr:'D챕marrage...' },
  run_fetching: { ko:'嫄??섏떊 以?..', en:'records fetching...', id:'data sedang diambil...', zh:'?→렏?뜸릎...', ja:'餓뜹룚孃쀤릎...', es:'registros descargando...', vi:'b梳즢 ghi 휃ang t梳즜...', hi:'西겯ㅏ西뺖쪏西겯쪓西?西む쪓西겯ㅎ西む쪓西?西밝쪑 西겯ㅉ誓?西밝쪎西?..', pt:'registros buscando...', tl:'mga rekord kinukuha...', fr:'enregistrements re챌us...' },
  run_running:  { ko:'諛깊뀒?ㅽ듃 ?ㅽ뻾 以?..', en:'Running backtest...', id:'Menjalankan backtest...', zh:'?욄탩瓦먫죱訝?..', ja:'?먦긿??깇?밤깉若잒죱訝?..', es:'Ejecutando backtest...', vi:'휂ang ch梳죣 backtest...', hi:'西о쪎西뺖쩅誓뉋ㅈ誓띭쩅 西싟ㅂ 西겯ㅉ西?西밝쪎...', pt:'Executando backtest...', tl:'Nagpapatakbo ng backtest...', fr:'Ex챕cution du backtest...' },
  run_done:     { ko:'?꾨즺!', en:'Done!', id:'Selesai!', zh:'若뚧닇竊?, ja:'若뚥틙竊?, es:'징Listo!', vi:'Ho횪n th횪nh!', hi:'西밝쪑 西쀠ㄿ西?', pt:'Conclu챠do!', tl:'Tapos na!', fr:'Termin챕 !' },
  run_req:      { ko:'嫄??붿껌', en:'records requested', id:'data diminta', zh:'?▼럴瑥룡콆', ja:'餓뜰꺁??궓?밤깉', es:'registros solicitados', vi:'b梳즢 ghi 휃찾 y챗u c梳쬾', hi:'西겯ㅏ西뺖쪏西겯쪓西?西끶ㄸ誓곟ㅀ誓뗠ㄷ西욈ㄴ', pt:'registros solicitados', tl:'mga rekord hiniling', fr:'enregistrements demand챕s' },
  run_received: { ko:'嫄??섏떊', en:'records received', id:'data diterima', zh:'?▼럴?ζ뵸', ja:'餓뜹룛岳?, es:'registros recibidos', vi:'b梳즢 ghi 휃찾 nh梳춏', hi:'西겯ㅏ西뺖쪏西겯쪓西?西む쪓西겯ㅎ西む쪓西?, pt:'registros recebidos', tl:'mga rekord natanggap', fr:'enregistrements re챌us' },
  run_valid:    { ko:'?좏슚 嫄곕옒', en:'valid trades', id:'transaksi valid', zh:'?됪븞雅ㅶ삌', ja:'?됧듅?뽩폊', es:'operaciones v찼lidas', vi:'giao d沼땉h h沼즤 l沼?, hi:'西듀쪎西?西잀쪓西겯쪍西?, pt:'negocia챌천es v찼lidas', tl:'valid na trades', fr:'transactions valides' },
  run_complete: { ko:'?꾨즺', en:'complete', id:'selesai', zh:'若뚧닇', ja:'若뚥틙', es:'completo', vi:'ho횪n th횪nh', hi:'西む쪈西겯쪓西?, pt:'completo', tl:'kumpleto', fr:'complet' },
  run_too_few:  { ko:'?곗씠?곌? ?덈Т ?곸뒿?덈떎 (10嫄?誘몃쭔)', en:'Too little data (under 10 records)', id:'Data terlalu sedikit (kurang dari 10)', zh:'?경뜮鸚ゅ컩竊덁툖擁?0?∽펹', ja:'?뉎꺖?욍걣弱묆겒?쇻걥?얇걲竊?0餓뜻쑋繹竊?, es:'Datos insuficientes (menos de 10)', vi:'D沼?li沼뇎 qu찼 챠t (d튼沼쌻 10 b梳즢 ghi)', hi:'西□쪍西잀ㅎ 西оㅉ誓곟ㄴ 西뺖ㄾ 西밝쪎 (10 西멘쪍 西뺖ㄾ)', pt:'Dados insuficientes (menos de 10)', tl:'Napakaliit ng data (wala pang 10)', fr:'Donn챕es insuffisantes (moins de 10)' },
  run_error:    { ko:'?ㅻ쪟', en:'Error', id:'Kesalahan', zh:'?숃?', ja:'?ⓦ꺀??, es:'Error', vi:'L沼뾦', hi:'西ㅰ쪓西겯쪇西잀ㅏ', pt:'Erro', tl:'Error', fr:'Erreur' },

  res_summary:  { ko:'醫낇빀 寃곌낵', en:'Summary', id:'Ringkasan', zh:'瀯쇔릦瀯볠옖', ja:'渶뤷릦永먩옖', es:'Resumen', vi:'T沼븂g k梳퓍', hi:'西멘ㅎ西겯ㅎ西귖ㅆ', pt:'Resumo', tl:'Buod', fr:'R챕sum챕' },
  res_pnl:      { ko:'珥??먯씡', en:'Total P&L', id:'Total P&L', zh:'?사썕雅?, ja:'渶뤸릫??, es:'P&L Total', vi:'T沼븂g P&L', hi:'西뺖쪇西?P&L', pt:'P&L Total', tl:'Kabuuang P&L', fr:'P&L Total' },
  res_spread:   { ko:'?ㅽ봽?덈뱶 ?섏씡', en:'Spread profit', id:'Profit spread', zh:'餓룟량?띄썗', ja:'?밤깤?с긿?됧룑??, es:'Ganancia de spread', vi:'L沼즜 nhu梳춏 spread', hi:'西멘쪓西む쪓西겯쪍西?西꿋ㅎ西?, pt:'Lucro de spread', tl:'Kita sa spread', fr:'Profit de spread' },
  res_inv:      { ko:'?ш퀬 ?됯??먯씡', en:'Inventory P&L', id:'P&L inventori', zh:'佯볟춼瑥꾡섟?잏썗', ja:'?ⓨ벴屋뺜쐴?띸썗', es:'P&L de inventario', vi:'P&L t沼뱊 kho', hi:'西뉋ㄸ誓띭ㅅ誓뉋쨧西잀ㅀ誓 P&L', pt:'P&L de invent찼rio', tl:'Inventory P&L', fr:"P&L d'inventaire" },
  res_fees:     { ko:'?섏닔猷??⑷퀎', en:'Total fees', id:'Total biaya', zh:'?삥뎸瀯?뉩', ja:'?뗦빊?쇿릦鼇?, es:'Total comisiones', vi:'T沼븂g ph챠', hi:'西뺖쪇西?西뜩쪇西꿋쪓西?, pt:'Total de taxas', tl:'Kabuuang bayad', fr:'Total frais' },
  res_stats:    { ko:'嫄곕옒 ?듦퀎', en:'Trade Statistics', id:'Statistik Trading', zh:'雅ㅶ삌瀯잒?', ja:'?뽩폊永김쮫', es:'Estad챠sticas de Trading', vi:'Th沼몁g k챗 giao d沼땉h', hi:'西잀쪓西겯쪍西?西녱쨦西뺖ㄱ西솰쪍', pt:'Estat챠sticas de Trading', tl:'Mga Istatistika sa Trade', fr:'Statistiques de Trading' },
  res_fills:    { ko:'泥닿껐 ?잛닔', en:'Fill count', id:'Jumlah fill', zh:'?먧벡轝→빊', ja:'榮꾢츣?욄빊', es:'Cantidad de fills', vi:'S沼?l梳쬷 kh沼썂 l沼뇆h', hi:'西ムㅏ西?西뺖? 西멘쨧西뽤쪓西?ㅎ', pt:'Qtd de fills', tl:'Bilang ng fill', fr:'Nombre de fills' },
  res_ticks:    { ko:'遺꾩꽍 ????, en:'Ticks analyzed', id:'Tik dianalisis', zh:'?녷옄?ⓩ쐿??, ja:'?녷옄?녴궍?껁궚??, es:'Ticks analizados', vi:'S沼?ticks ph창n t챠ch', hi:'西듀ㅏ西뜩쪓西꿋쪍西룅ㅏ西?西잀ㅏ西뺖쪓西?, pt:'Ticks analisados', tl:'Mga tick na sinuri', fr:'Ticks analys챕s' },
  res_price_chg:{ ko:'媛寃?蹂??, en:'Price change', id:'Perubahan harga', zh:'餓룡졏?섇뙑', ja:'堊→졏鸚됧뙑', es:'Cambio de precio', vi:'Thay 휃沼뷼 gi찼', hi:'西?쪈西꿋쪓西?西むㅀ西욈ㅅ西겯쪓西ㅰㄸ', pt:'Varia챌찾o de pre챌o', tl:'Pagbabago ng presyo', fr:'Variation de prix' },
  res_stop:     { ko:'以묐떒 ?ъ쑀', en:'Stop reason', id:'Alasan berhenti', zh:'訝?뼪?잌썱', ja:'?쒏??녺뵳', es:'Raz처n de parada', vi:'L첵 do d沼쳌g', hi:'西겯쪑西뺖ㄸ誓?西뺖ㅎ 西뺖ㅎ西겯ㄳ', pt:'Motivo de parada', tl:'Dahilan ng paghinto', fr:"Raison d'arr챗t" },
  res_log:      { ko:'嫄곕옒 濡쒓렇 (理쒓렐 20嫄?', en:'Trade log (last 20)', id:'Log trading (20 terakhir)', zh:'雅ㅶ삌?ε퓱竊덃?瓦?0?∽펹', ja:'?뽩폊??궛竊덃?瓦?0餓띰펹', es:'Registro de operaciones (첬ltimas 20)', vi:'Nh梳춗 k첵 giao d沼땉h (20 g梳쬷 nh梳쩿)', hi:'西잀쪓西겯쪍西?西꿋쪏西?(西끶쨧西ㅰㅏ西?20)', pt:'Log de negocia챌천es (첬ltimas 20)', tl:'Trade log (huling 20)', fr:'Journal de trading (20 derniers)' },
  res_no_fills: { ko:'泥닿껐 ?놁쓬', en:'No fills', id:'Tidak ada fill', zh:'?졿닇雅?, ja:'榮꾢츣?ゃ걮', es:'Sin fills', vi:'Kh척ng c처 kh沼썂 l沼뇆h', hi:'西뺖쪑西?西ムㅏ西?西ⓣㅉ誓西?, pt:'Sem fills', tl:'Walang fill', fr:'Pas de fills' },
  res_asset_chart:{ ko:'珥??먯궛 異붿씠 (USDC)', en:'Total Asset Trend (USDC)', id:'Tren Total Aset (USDC)', zh:'?삭탡雅㎬텑??(USDC)', ja:'渶뤺퀒?ｆ렓燁?(USDC)', es:'Tendencia de activos totales (USDC)', vi:'Xu h튼沼썀g t沼븂g t횪i s梳즢 (USDC)', hi:'西뺖쪇西?西멘쨧西むㄴ誓띭ㄴ西?西む쪓西겯ㅅ誓꺺ㄴ誓띭ㄴ西?(USDC)', pt:'Tend챗ncia de ativos totais (USDC)', tl:'Trend ng kabuuang asset (USDC)', fr:'Tendance des actifs totaux (USDC)' },
  res_lp_title: { ko:'LP ?섏씡 寃곌낵', en:'LP Return Summary', id:'Ringkasan Return LP', zh:'LP ?띄썗瀯볠옖', ja:'LP ?롧썗永먩옖', es:'Resumen de retorno LP', vi:'K梳퓍 qu梳?l沼즜 nhu梳춏 LP', hi:'LP 西겯ㅏ西잀ㅀ誓띭ㄸ 西멘ㅎ西겯ㅎ西귖ㅆ', pt:'Resumo de retorno LP', tl:'LP Return Summary', fr:'R챕sum챕 du rendement LP' },
  res_lp_pnl:   { ko:'LP 珥??먯씡', en:'LP Total P&L', id:'Total P&L LP', zh:'LP ?사썕雅?, ja:'LP 渶뤸릫??, es:'P&L Total LP', vi:'T沼븂g P&L LP', hi:'LP 西뺖쪇西?P&L', pt:'P&L Total LP', tl:'LP Total P&L', fr:'P&L Total LP' },
  res_fee_inc:  { ko:'?섏닔猷??섏씡', en:'Fee income', id:'Pendapatan biaya', zh:'?뗧뺌兀방뵸??, ja:'?뗦빊?쇿룑??, es:'Ingresos por comisiones', vi:'Thu nh梳춑 ph챠', hi:'西뜩쪇西꿋쪓西?西녱ㄿ', pt:'Renda de taxas', tl:'Kita sa bayad', fr:'Revenus de frais' },
  res_il:       { ko:'鍮꾩쁺援ъ쟻 ?먯떎', en:'Impermanent loss', id:'Kerugian impermanent', zh:'?졾만?잌ㅁ', ja:'?▼만?띶ㅁ', es:'P챕rdida impermanente', vi:'T沼븂 th梳쩿 v척 th튼沼쓓g', hi:'西끶ㅈ誓띭ㄵ西약ㄿ誓 西밝ㅎ西ⓣㅏ', pt:'Perda impermanente', tl:'Impermanent loss', fr:'Perte impermanente' },
  res_vs_hodl:  { ko:'HODL ?鍮?, en:'vs HODL', id:'vs HODL', zh:'?멩캈 HODL', ja:'HODL 野얏캈', es:'vs HODL', vi:'so v沼쌻 HODL', hi:'HODL 西뺖? 西ㅰ쪇西꿋ㄸ西?西?쪍西?, pt:'vs HODL', tl:'kumpara sa HODL', fr:'vs HODL' },
  res_lp_share: { ko:'??LP 吏遺?, en:'My LP share', id:'Bagian LP saya', zh:'?묊쉪 LP 餓썽쥫', ja:'燁곥겗LP?곩늽', es:'Mi parte LP', vi:'Ph梳쬷 LP c沼쬪 t척i', hi:'西?쪍西겯ㅎ LP 西밝ㅏ西멘쪓西멘ㅎ', pt:'Minha cota LP', tl:'Aking LP share', fr:'Ma part LP' },
  res_exit:     { ko:'醫낅즺 ?ъ쑀', en:'Exit reason', id:'Alasan keluar', zh:'??뷴렅??, ja:'永귚틙?녺뵳', es:'Raz처n de salida', vi:'L첵 do tho찼t', hi:'西оㅎ西밝ㅀ 西ⓣㅏ西뺖ㅂ西ⓣ쪍 西뺖ㅎ 西뺖ㅎ西겯ㄳ', pt:'Motivo de sa챠da', tl:'Dahilan ng paglabas', fr:'Raison de sortie' },
  res_lp_chart: { ko:'LP vs HODL ?먯궛 異붿씠 (USDC)', en:'LP vs HODL Trend (USDC)', id:'Tren LP vs HODL (USDC)', zh:'LP vs HODL 壅꾡벨擁뗥듌 (USDC)', ja:'LP vs HODL 蘊뉒뵣?①㎉ (USDC)', es:'Tendencia LP vs HODL (USDC)', vi:'Xu h튼沼썀g LP vs HODL (USDC)', hi:'LP vs HODL 西멘쨧西むㄴ誓띭ㄴ西?西む쪓西겯ㅅ誓꺺ㄴ誓띭ㄴ西?(USDC)', pt:'Tend챗ncia LP vs HODL (USDC)', tl:'LP vs HODL trend (USDC)', fr:'Tendance LP vs HODL (USDC)' },
  res_none:     { ko:'寃곌낵 ?놁쓬', en:'No result', id:'Tidak ada hasil', zh:'?좂퍜??, ja:'永먩옖?ゃ걮', es:'Sin resultado', vi:'Kh척ng c처 k梳퓍 qu梳?, hi:'西뺖쪑西?西むㅀ西욈ㄳ西약ㄾ 西ⓣㅉ誓西?, pt:'Sem resultado', tl:'Walang resulta', fr:'Aucun r챕sultat' },

  ana_no_fills: { ko:'?좑툘 泥닿껐 0?????ㅽ봽?덈뱶瑜?以꾩씠嫄곕굹 ?덉씠?대? ?섎젮蹂댁꽭??, en:'?좑툘 0 fills ??Try reducing spread or adding layers', id:'?좑툘 0 fill ??Kurangi spread atau tambah layer', zh:'?좑툘 ?먧벡0轝???瑥루섄弱뤶뻔藥?닑罌욃뒥掠귝빊', ja:'?좑툘 榮꾢츣0?????밤깤?с긿?됥굮潁?굙?뗣걢?с궎?ㅳ꺖?믣쥥?꾠걮?╉걦?졼걬??, es:'?좑툘 0 fills ??Reduzca el spread o a챰ada capas', vi:'?좑툘 0 l梳쬷 kh沼썂 ??Gi梳즡 spread ho梳톍 th챗m l沼썂 l沼뇆h', hi:'?좑툘 0 西ムㅏ西???西멘쪓西む쪓西겯쪍西?西뺖ㄾ 西뺖ㅀ誓뉋쨧 西?ㅎ 西꿋쪍西?ㅀ 西оㄲ西솰ㅎ西뤲쨧', pt:'?좑툘 0 fills ??Reduza o spread ou adicione camadas', tl:'?좑툘 0 fill ??Bawasan ang spread o dagdagan ang layer', fr:'?좑툘 0 fills ??R챕duisez le spread ou ajoutez des couches' },
  ana_good:     { ko:'???ㅽ봽?덈뱶 ?섏씡怨??꾩껜 ?먯씡 紐⑤몢 ?뚮윭??, en:'??Both spread profit and total P&L are positive', id:'??Profit spread dan total P&L keduanya positif', zh:'??餓룟량?띄썗?뚧사썕雅뤷쓦訝뷸?', ja:'???밤깤?с긿?됧룑?듽겏渶뤸릫?듽걣?ⓦ굚?ャ깤?⒲궧', es:'??Ganancia de spread y P&L total ambos positivos', vi:'??L沼즜 nhu梳춏 spread v횪 t沼븂g P&L 휃沼걏 d튼퉤ng', hi:'??西멘쪓西む쪓西겯쪍西?西꿋ㅎ西?西붲ㅀ 西뺖쪇西?P&L 西╆쪑西ⓣ쪑西?西멘쨻西약ㅀ西약ㄴ誓띭ㄾ西?, pt:'??Lucro de spread e P&L total ambos positivos', tl:'??Parehong positibo ang spread profit at kabuuang P&L', fr:'??Profit de spread et P&L total tous deux positifs' },
  ana_inv_loss: { ko:'?좑툘 ?ㅽ봽?덈뱶 ?섏씡? ?ъ?留?媛寃?蹂?숈쑝濡??ш퀬 ?먯떎??????, en:'?좑툘 Spread profit positive but inventory loss exceeded it', id:'?좑툘 Profit spread ada tapi kerugian inventori lebih besar', zh:'?좑툘 餓룟량?띄썗訝뷸?鵝녵뻔?쇗끼?ⓨ??닷틩耶섉뜜鸚길쎍鸚?, ja:'?좑툘 ?밤깤?с긿?됧룑?듽겘?쀣꺀?밤걽?뚥쐴?쇔쨯?뺛겎?ⓨ벴?띶ㅁ?뚦ㄷ?띲걚', es:'?좑툘 Spread positivo pero p챕rdida de inventario super처 las ganancias', vi:'?좑툘 L沼즜 nhu梳춏 spread d튼퉤ng nh튼ng t沼븂 th梳쩿 t沼뱊 kho l沼썀 h퉤n', hi:'?좑툘 西멘쪓西む쪓西겯쪍西?西꿋ㅎ西?西?ㅎ 西꿋쪍西뺖ㅏ西?西뉋ㄸ誓띭ㅅ誓뉋쨧西잀ㅀ誓 西밝ㅎ西ⓣㅏ 西끶ㄷ西욈쨻', pt:'?좑툘 Spread positivo mas perda de invent찼rio foi maior', tl:'?좑툘 Positibo ang spread profit ngunit mas malaki ang inventory loss', fr:"?좑툘 Spread positif mais la perte d'inventaire l'a d챕pass챕" },
  ana_bad:      { ko:'??泥닿껐 遺議??먮뒗 ?섏닔猷뚭? ?섏씡 珥덇낵', en:'??Too few fills or fees exceeded profit', id:'??Fill kurang atau biaya melebihi profit', zh:'???먧벡訝띹떨?뽪뎸瀯?뉩擁낁퓝?띄썗', ja:'??榮꾢츣訝띹떨?얇걼??뎸?경뼑?뚦룑?딂텈??, es:'??Fills insuficientes o comisiones superaron ganancias', vi:'??Qu찼 챠t kh沼썂 l沼뇆h ho梳톍 ph챠 v튼沼즨 l沼즜 nhu梳춏', hi:'??西оㅉ誓곟ㄴ 西뺖ㄾ 西ムㅏ西?西?ㅎ 西뜩쪇西꿋쪓西?西꿋ㅎ西?西멘쪍 西끶ㄷ西욈쨻', pt:'??Poucos fills ou taxas superaram o lucro', tl:'??Kulang ang fill o mas mataas ang bayad kaysa kita', fr:'??Trop peu de fills ou frais ont d챕pass챕 les profits' },
  ana_amm_good: { ko:'???섏닔猷??섏씡??鍮꾩쁺援ъ쟻 ?먯떎???곸뇙', en:'??Fee income offsets impermanent loss', id:'??Pendapatan biaya mengimbangi kerugian impermanent', zh:'???뗧뺌兀방뵸?딀뒿易덁틙?졾만?잌ㅁ', ja:'???뗦빊?쇿룑?듽걣?▼만?띶ㅁ?믥쎑餘?, es:'??Los ingresos por comisiones compensaron la p챕rdida impermanente', vi:'??Thu nh梳춑 ph챠 b첫 휃梳칛 t沼븂 th梳쩿 v척 th튼沼쓓g', hi:'??西뜩쪇西꿋쪓西?西녱ㄿ 西ⓣ쪍 西끶ㅈ誓띭ㄵ西약ㄿ誓 西밝ㅎ西ⓣㅏ 西뺖? 西?ㅀ西むㅎ西?西뺖?', pt:'??Renda de taxas compensou a perda impermanente', tl:'??Nayosi ng kita sa bayad ang impermanent loss', fr:'??Les revenus de frais ont compens챕 la perte impermanente' },
  ana_amm_bad:  { ko:'?좑툘 鍮꾩쁺援ъ쟻 ?먯떎???섏닔猷??섏씡蹂대떎 ??, en:'?좑툘 Impermanent loss exceeds fee income', id:'?좑툘 Kerugian impermanent melebihi pendapatan biaya', zh:'?좑툘 ?졾만?잌ㅁ擁낁퓝?뗧뺌兀방뵸??, ja:'?좑툘 ?▼만?띶ㅁ?뚧뎸?경뼑?롧썗?믦텈?덀걼', es:'?좑툘 La p챕rdida impermanente super처 los ingresos por comisiones', vi:'?좑툘 T沼븂 th梳쩿 v척 th튼沼쓓g v튼沼즨 thu nh梳춑 ph챠', hi:'?좑툘 西끶ㅈ誓띭ㄵ西약ㄿ誓 西밝ㅎ西ⓣㅏ 西뜩쪇西꿋쪓西?西녱ㄿ 西멘쪍 西끶ㄷ西욈쨻', pt:'?좑툘 Perda impermanente superou renda de taxas', tl:'?좑툘 Mas mataas ang impermanent loss kaysa kita sa bayad', fr:'?좑툘 La perte impermanente a d챕pass챕 les revenus de frais' },

  chart_total:  { ko:'珥??먯궛', en:'Total Asset', id:'Total Aset', zh:'?삭탡雅?, ja:'渶뤺퀒??, es:'Activos Totales', vi:'T沼븂g t횪i s梳즢', hi:'西뺖쪇西?西멘쨧西むㄴ誓띭ㄴ西?, pt:'Ativos Totais', tl:'Kabuuang asset', fr:'Actifs Totaux' },
  chart_lp:     { ko:'LP ?먯궛', en:'LP Asset', id:'Aset LP', zh:'LP 壅꾡벨', ja:'LP蘊뉒뵣', es:'Activos LP', vi:'T횪i s梳즢 LP', hi:'LP 西멘쨧西むㄴ誓띭ㄴ西?, pt:'Ativos LP', tl:'LP asset', fr:'Actifs LP' },
  chart_hodl:   { ko:'HODL', en:'HODL', id:'HODL', zh:'HODL', ja:'HODL', es:'HODL', vi:'HODL', hi:'HODL', pt:'HODL', tl:'HODL', fr:'HODL' },

  // ?? Info panel ??
  ip_title:       { ko:'???뚭컻 / ?ъ슜踰?, en:'About & How to Use', id:'Tentang & Cara Pakai', zh:'?념틢 / 鵝욜뵪瑥닸삇', ja:'?㏂깤?ょ뉩餓?/ 鵝욍걚??, es:'Acerca de / C처mo usar', vi:'Gi沼쌻 thi沼뇎 & H튼沼썀g d梳쳌', hi:'西쒉ㅎ西ⓣ쨻西약ㅀ誓 / 西됢ㄺ西?쪑西?, pt:'Sobre / Como usar', tl:'Tungkol at Paano Gamitin', fr:'? propos / Utilisation' },
  ip_about:       { ko:'DEX 留덉폆硫붿씠???꾨왂 諛깊뀒?ㅽ꽣?낅땲?? Stellar 硫붿씤?룰낵 Pi DEX???ㅼ젣 嫄곕옒 ?곗씠?곕? 湲곕컲?쇰줈 ?ㅻ뜑遺?留덉폆硫붿씠?밴낵 AMM ?좊룞??怨듦툒 ?쒕??덉씠?섏쓣 ?쒓났?⑸땲??', en:'A DEX market-making strategy backtester. Simulates orderbook market making and AMM liquidity provision using real historical trade data from Stellar Mainnet and Pi DEX.', id:'Backtester strategi market-making DEX. Mensimulasikan market making orderbook dan suplai likuiditas AMM menggunakan data perdagangan historis nyata dari Stellar Mainnet dan Pi DEX.', zh:'DEX ?싧툊嶺뽫븼?욄탩藥ε끁?귛읃雅?Stellar 訝사퐨??Pi DEX ?꾤쐿若욃럣?꿜벡?볠빊??펽?먧풘溫℡뜒怜욕걳躍귛뭽 AMM 役곩뒯?㎪룓堊쏁쉪與→떉??, ja:'DEX?욁꺖?긱긿?덀깳?ㅳ궘?녈궛??븼?먦긿??깇?밤궭?쇈겎?쇻괪tellar?▲궎?녈깓?껁깉?쭾i DEX??츪?쎼겗?뽩폊?뉎꺖?욍굮鵝욜뵪?쀣겍?곥궕?쇈??쇈깣?껁궚?욁꺖?긱긿?덀깳?ㅳ궘?녈궛?쭭MM役곩땿?㎯깤??깛?멥깾?뗣꺍?겹겗?룔깱?γ꺃?쇈궥?㎯꺍?믤룓堊쎼걮?얇걲??, es:'Backtester de estrategias de market-making en DEX. Simula market making de orderbook y provisi처n de liquidez AMM usando datos hist처ricos reales de Stellar Mainnet y Pi DEX.', vi:'C척ng c沼?backtest chi梳퓆 l튼沼즓 market-making tr챗n DEX. M척 ph沼뢮g market making orderbook v횪 cung c梳쩺 thanh kho梳즢 AMM d沼켥 tr챗n d沼?li沼뇎 giao d沼땉h l沼땉h s沼?th沼켧 t沼?Stellar Mainnet v횪 Pi DEX.', hi:'DEX 西?ㅎ西겯쪓西뺖쪍西?西?쪍西뺖ㅏ西귖쨽 西겯ㄳ西ⓣ?西ㅰㅏ 西о쪎西뺖쩅誓뉋ㅈ誓띭쩅西겯ⅳ Stellar Mainnet 西붲ㅀ Pi DEX 西뺖쪍 西듀ㅎ西멘쪓西ㅰㅅ西욈쨻 西먣ㄴ西욈ㅉ西약ㅈ西욈쨻 西잀쪓西겯쪍西?西□쪍西잀ㅎ 西뺖ㅎ 西됢ㄺ西?쪑西?西뺖ㅀ西뺖쪍 西묂ㅀ誓띭ㄱ西겯ㄼ誓곟쨻 西?ㅎ西겯쪓西뺖쪍西?西?쪍西뺖ㅏ西귖쨽 西붲ㅀ AMM 西ㅰㅀ西꿋ㄴ西?西む쪓西겯ㅎ西듀ㄷ西약ㄸ 西뺖ㅎ 西끶ㄸ誓곟쨻西겯ㄳ誓?, pt:'Backtester de estrat챕gias de market-making em DEX. Simula market making de orderbook e provis찾o de liquidez AMM usando dados hist처ricos reais do Stellar Mainnet e Pi DEX.', tl:'Backtester ng DEX market-making strategy. Sine-simulate ang orderbook market making at AMM liquidity provision gamit ang tunay na datos ng nakaraang trade mula sa Stellar Mainnet at Pi DEX.', fr:"Backtesteur de strat챕gies de market-making sur DEX. Simule le market making en carnet d'ordres et la fourniture de liquidit챕 AMM en utilisant des donn챕es historiques r챕elles de Stellar Mainnet et Pi DEX." },
  ip_how:         { ko:'?ъ슜踰?, en:'How to Use', id:'Cara Pakai', zh:'鵝욜뵪瑥닸삇', ja:'鵝욍걚??, es:'C처mo usar', vi:'H튼沼썀g d梳쳌 s沼?d沼쩸g', hi:'西됢ㄺ西?쪑西?西뺖쪎西멘쪍 西뺖ㅀ誓뉋쨧', pt:'Como usar', tl:'Paano Gamitin', fr:'Comment utiliser' },
  ip_s1:          { ko:'Stellar 硫붿씤???먮뒗 Pi DEX瑜??좏깮?⑸땲??', en:'Choose Stellar Mainnet or Pi DEX.', id:'Pilih Stellar Mainnet atau Pi DEX.', zh:'?됪떓 Stellar 訝사퐨??Pi DEX??, ja:'Stellar ?▲궎?녈깓?껁깉?얇걼??Pi DEX ?믧겦?욁걮?얇걲??, es:'Elija Stellar Mainnet o Pi DEX.', vi:'Ch沼뛫 Stellar Mainnet ho梳톍 Pi DEX.', hi:'Stellar Mainnet 西?ㅎ Pi DEX 西싟쪇西ⓣ쪍西귖ⅳ', pt:'Escolha Stellar Mainnet ou Pi DEX.', tl:'Piliin ang Stellar Mainnet o Pi DEX.', fr:'Choisissez Stellar Mainnet ou Pi DEX.' },
  ip_s2:          { ko:'?ㅻ뜑遺?留덉폆硫붿씠???먮뒗 AMM ?좊룞??怨듦툒 ?꾨왂???좏깮?⑸땲??', en:'Choose Orderbook Market Making or AMM Liquidity Provision.', id:'Pilih strategi Market Making Orderbook atau Suplai Likuiditas AMM.', zh:'?됪떓溫℡뜒怜욕걳躍귝닑 AMM 役곩뒯?㎪룓堊쏁춺?γ?, ja:'?ゃ꺖??쇈깣?껁궚 ?욁꺖?긱긿?덀깳?ㅳ궘?녈궛?얇걼??AMM 役곩땿?㎯깤??깛?멥깾?뗣꺍?겹굮?멩뒢?쀣겲?쇻?, es:'Elija Market Making de Orderbook o Provisi처n de Liquidez AMM.', vi:'Ch沼뛫 chi梳퓆 l튼沼즓 Market Making Orderbook ho梳톍 cung c梳쩺 thanh kho梳즢 AMM.', hi:'Orderbook Market Making 西?ㅎ AMM Liquidity Provision 西겯ㄳ西ⓣ?西ㅰㅏ 西싟쪇西ⓣ쪍西귖ⅳ', pt:'Escolha Market Making de Orderbook ou Provis찾o de Liquidez AMM.', tl:'Piliin ang Orderbook Market Making o AMM Liquidity Provision na estratehiya.', fr:"Choisissez le Market Making Orderbook ou la Fourniture de Liquidit챕 AMM." },
  ip_s3:          { ko:'?쒕??덉씠?섑븷 嫄곕옒 ? ?먮뒗 ?섏뼱瑜??좏깮?⑸땲??', en:'Select the trading pool or pair to simulate.', id:'Pilih pool atau pasangan trading untuk disimulasikan.', zh:'?됪떓誤곫Æ?잏쉪雅ㅶ삌黎졿닑雅ㅶ삌野밤?, ja:'?룔깱?γ꺃?쇈깉?쇻굥?뽩폊?쀣꺖?ャ겲?잆겘?싥궋?믧겦?욁걮?얇걲??, es:'Seleccione el pool o par de trading para simular.', vi:'Ch沼뛫 pool ho梳톍 c梳톚 giao d沼땉h 휃沼?m척 ph沼뢮g.', hi:'西멘ㅏ西?쪇西꿋쪍西?西뺖ㅀ西ⓣ쪍 西뺖쪍 西꿋ㅏ西?西잀쪓西겯쪍西□ㅏ西귖쨽 西む쪈西?西?ㅎ 西む쪍西?ㅀ 西싟쪇西ⓣ쪍西귖ⅳ', pt:'Selecione o pool ou par de trading para simular.', tl:'Piliin ang trading pool o pair para i-simulate.', fr:'S챕lectionnez le pool ou la paire de trading 횪 simuler.' },
  ip_s4:          { ko:'珥덇린 ?먮낯, ?ㅽ봽?덈뱶, ?덉씠???????꾨왂 ?뚮씪誘명꽣瑜??ㅼ젙?⑸땲??', en:'Set parameters: initial capital, spread, layer count, etc.', id:'Atur parameter: modal awal, spread, jumlah layer, dll.', zh:'溫양쉰?귝빊竊싧닜冶뗨탡?묆곦뻔藥?곩콆?곁춬??, ja:'?앮쐿蘊뉑쑍?삠궧?쀣꺃?껁깋?삠꺃?ㅳ깶?쇗빊?ゃ겑??깙?⒲깳?쇈궭?믦Þ若싥걮?얇걲??, es:'Configure los par찼metros: capital inicial, spread, n첬mero de capas, etc.', vi:'휂梳톞 tham s沼? v沼몁 ban 휃梳쬾, spread, s沼?l沼썂 l沼뇆h, v.v.', hi:'西む쪎西겯ㅎ西??西잀ㅀ 西멘쪍西?西뺖ㅀ誓뉋쨧: 西む쪓西겯ㅎ西겯쨧西?ㅏ西?西む쪈西귖쩂誓, 西멘쪓西む쪓西겯쪍西? 西꿋쪍西?ㅀ 西멘쨧西뽤쪓西?ㅎ 西녱ㄶ西욈ⅳ', pt:'Configure os par창metros: capital inicial, spread, n첬mero de camadas, etc.', tl:'I-set ang mga parametro: panimulang kapital, spread, bilang ng layer, atbp.', fr:'Configurez les param챔tres : capital initial, spread, nombre de couches, etc.' },
  ip_s5:          { ko:'怨쇨굅 ?ㅼ젣 嫄곕옒 ?곗씠?곕? 遺덈윭? ?꾨왂???쒕??덉씠?섑빀?덈떎.', en:'Fetches real historical trade data and simulates your strategy.', id:'Mengambil data perdagangan historis nyata dan mensimulasikan strategi.', zh:'?룟룚?잌츩?녶뤁雅ㅶ삌?경뜮亮뜻Æ?잍궓?꾤춺?γ?, ja:'若잓슋??걥?삣룚凉뺛깈?쇈궭?믣룚孃쀣걮?곫닰?γ굮?룔깱?γ꺃?쇈깉?쀣겲?쇻?, es:'Obtiene datos hist처ricos reales y simula su estrategia.', vi:'T梳즜 d沼?li沼뇎 giao d沼땉h l沼땉h s沼?th沼켧 v횪 m척 ph沼뢮g chi梳퓆 l튼沼즓.', hi:'西듀ㅎ西멘쪓西ㅰㅅ西욈쨻 西먣ㄴ西욈ㅉ西약ㅈ西욈쨻 西잀쪓西겯쪍西?西□쪍西잀ㅎ 西꿋ㅎ西ㅰㅎ 西밝쪎 西붲ㅀ 西녱ㄺ西뺖? 西겯ㄳ西ⓣ?西ㅰㅏ 西뺖ㅎ 西끶ㄸ誓곟쨻西겯ㄳ 西뺖ㅀ西ㅰㅎ 西밝쪎誓?, pt:'Busca dados hist처ricos reais e simula sua estrat챕gia.', tl:'Kumukuha ng tunay na datos ng nakaraang trade at sine-simulate ang iyong estratehiya.', fr:'R챕cup챔re les donn챕es historiques r챕elles et simule votre strat챕gie.' },
  ip_s6:          { ko:'?먯씡, 泥닿껐 ?잛닔, ?먯궛 異붿씠 李⑦듃濡??꾨왂 ?깃낵瑜??됯??⑸땲??', en:'Evaluate performance via P&L, fill count and asset trend chart.', id:'Evaluasi performa melalui P&L, jumlah fill, dan grafik tren aset.', zh:'?싪퓝?잏썗?곫닇雅ㅶА?겼뭽壅꾡벨擁뗥듌?얕칱鴉곁춺?θ〃?겹?, ja:'?띸썗?사큵若싧썮?겹꺕蘊뉒뵣?①㎉?곥깵?쇈깉?㎪닰?γ깙?뺛궔?쇈깯?녈궧?믦찕堊▲걮?얇걲??, es:'Eval첬e el rendimiento a trav챕s de P&L, n첬mero de fills y gr찼fico de activos.', vi:'휂찼nh gi찼 hi沼뇎 su梳쩿 qua P&L, s沼?l梳쬷 kh沼썂 l沼뇆h v횪 bi沼긳 휃沼?t횪i s梳즢.', hi:'P&L, 西ムㅏ西?西멘쨧西뽤쪓西?ㅎ 西붲ㅀ 西멘쨧西むㄴ誓띭ㄴ西?西む쪓西겯ㅅ誓꺺ㄴ誓띭ㄴ西?西싟ㅎ西겯쪓西?西멘쪍 西겯ㄳ西ⓣ?西ㅰㅏ 西뺖ㅎ 西?쪈西꿋쪓西?ㅎ西귖쨻西?西뺖ㅀ誓뉋쨧誓?, pt:'Avalie o desempenho atrav챕s de P&L, quantidade de fills e gr찼fico de ativos.', tl:'Suriin ang performance sa pamamagitan ng P&L, bilang ng fill at asset trend chart.', fr:'횋valuez la performance via le P&L, le nombre de fills et le graphique des actifs.' },
  ip_tips:        { ko:'?뮕 ?뚮씪誘명꽣 ??, en:'?뮕 Parameter Tips', id:'?뮕 Tips Parameter', zh:'?뮕 ?귝빊弱뤸룓鹽?, ja:'?뮕 ?묆꺀?▲꺖?욍겗?믡꺍??, es:'?뮕 Consejos de par찼metros', vi:'?뮕 M梳퉛 tham s沼?, hi:'?뮕 西む쪎西겯ㅎ西??西잀ㅀ 西잀ㅏ西む쪓西?, pt:'?뮕 Dicas de par창metros', tl:'?뮕 Mga Tip sa Parametro', fr:'?뮕 Conseils sur les param챔tres' },
  ip_t1:          { ko:'?ㅽ봽?덈뱶瑜?以꾩씠硫?泥닿껐???섏?留?嫄대떦 ?섏씡??以꾩뼱??땲??', en:'Narrower spread ??more fills, but lower profit per fill.', id:'Spread lebih kecil ??lebih banyak fill, tapi profit per fill lebih kecil.', zh:'煐⒴컦餓룟량 ???먧벡罌욃쩀竊뚥퐜?뺟쵒?띄썗?뤷컩??, ja:'?밤깤?с긿?됥굮潁?굙?뗣겏榮꾢츣?뚦쥥?덀굥?뚣??욁걗?잆굤??룑?듽겘歷쎼굤?얇걲??, es:'Spread m찼s estrecho ??m찼s fills, pero menor ganancia por fill.', vi:'Spread h梳퉝 h퉤n ??nhi沼걏 kh沼썂 l沼뇆h h퉤n, nh튼ng l沼즜 nhu梳춏 m沼뾦 l梳쬷 th梳쩺 h퉤n.', hi:'西멘쨧西뺖ㅀ西?西멘쪓西む쪓西겯쪍西???西끶ㄷ西욈쨻 西ムㅏ西? 西꿋쪍西뺖ㅏ西?西む쪓西겯ㄴ西?西ムㅏ西?西뺖ㄾ 西꿋ㅎ西?ⅳ', pt:'Spread mais estreito ??mais fills, mas menor lucro por fill.', tl:'Mas makitid na spread ??mas maraming fill, ngunit mas mababa ang kita bawat fill.', fr:'Spread plus 챕troit ??plus de fills, mais moins de profit par fill.' },
  ip_t2:          { ko:'?덉씠?대? ?섎━硫????볦? 媛寃?踰붿쐞??二쇰Ц??遺꾩궛?⑸땲??', en:'More layers spread orders across a wider price range.', id:'Lebih banyak layer menyebarkan order ke rentang harga yang lebih luas.', zh:'罌욃뒥掠귝빊??컛溫℡뜒?녷븺?경쎍若썹쉪餓룡졏?븅뿴??, ja:'?с궎?ㅳ꺖?믣쥥?꾠걲?ⓦ굠?듿틕?꾡쐴?쇔릭?ユ낏?뉎걣?녷븺?뺛굦?얇걲??, es:'M찼s capas distribuyen las 처rdenes en un rango de precios m찼s amplio.', vi:'Nhi沼걏 l沼썂 l沼뇆h h퉤n ph창n t찼n l沼뇆h tr챗n ph梳죑 vi gi찼 r沼셬g h퉤n.', hi:'西끶ㄷ西욈쨻 西꿋쪍西?ㅀ 西멘쪍 西묂ㅀ誓띭ㄱ西?西듀쪓西?ㅎ西む쨻 西?쪈西꿋쪓西?西뜩쪓西겯쪍西｀? 西?쪍西?西ム쪎西꿋ㄴ誓?西밝쪎西귖ⅳ', pt:'Mais camadas distribuem ordens por uma faixa de pre챌o mais ampla.', tl:'Mas maraming layer ang nagpapakalat ng mga order sa mas malawak na hanay ng presyo.', fr:'Plus de couches r챕partissent les ordres sur une plage de prix plus large.' },
  ip_t3:          { ko:'?곗씠??嫄댁닔瑜??섎━硫??쒕??덉씠???뺥솗?꾧? ?믪븘吏묐땲??', en:'More data records give more accurate simulation results.', id:'Lebih banyak data meningkatkan akurasi simulasi.', zh:'罌욃뒥?경뜮?→빊??룓遙섉Æ?잏꼐簾?벧??, ja:'?뉎꺖?요뻑?겹굮罌쀣굜?쇻겏?룔깱?γ꺃?쇈궥?㎯꺍暎얍벧?뚥툓?뚣굤?얇걲??, es:'M찼s registros de datos dan resultados de simulaci처n m찼s precisos.', vi:'Nhi沼걏 b梳즢 ghi d沼?li沼뇎 h퉤n cho k梳퓍 qu梳?m척 ph沼뢮g ch챠nh x찼c h퉤n.', hi:'西끶ㄷ西욈쨻 西□쪍西잀ㅎ 西겯ㅏ西뺖쪏西겯쪓西?西멘쪍 西멘ㅏ西?쪇西꿋쪍西뜩ㄸ 西むㅀ西욈ㄳ西약ㄾ 西끶ㄷ西욈쨻 西멘쩅誓西?西밝쪑西ㅰ쪍 西밝쪎西귖ⅳ', pt:'Mais registros de dados fornecem resultados de simula챌찾o mais precisos.', tl:'Mas maraming rekord ng datos ang nagbibigay ng mas tumpak na resulta ng simulation.', fr:"Plus d'enregistrements donnent des r챕sultats de simulation plus pr챕cis." },
  ip_contact:     { ko:'문의 및 피드백', en:'Contact & Feedback', id:'Kontak & Masukan', zh:'联系及反馈', ja:'お問い合わせとフィードバック', es:'Contacto y Comentarios', vi:'Liên hệ và phản hồi', hi:'संपर्क और फीडबैक', pt:'Contato e Feedback', tl:'Makipag-ugnayan at Feedback', fr:'Contact et Retours' },
  ip_contact_desc:{ ko:'사용 중 문의사항이나 피드백은 유튜브 채널 댓글로 남겨주세요.', en:'Leave questions or feedback in the YouTube channel comments.', id:'Tinggalkan pertanyaan atau masukan di kolom komentar YouTube.', zh:'如有使用问题或反馈，请在YouTube频道评论区留言。', ja:'ご不明な点やフィードバックはYouTubeチャンネルのコメント欄にお寄せください。', es:'Deje preguntas o comentarios en los comentarios del canal de YouTube.', vi:'Hãy để lại câu hỏi hoặc phản hồi trong phần bình luận kênh YouTube.', hi:'प्रश्न या फीडबैक YouTube चैनल के कमेंट में छोड़ें।', pt:'Deixe perguntas ou feedback nos comentários do canal do YouTube.', tl:'Mag-iwan ng mga tanong o feedback sa mga komento ng YouTube channel.', fr:'Laissez vos questions ou commentaires dans les commentaires de la chaîne YouTube.' },
  ip_disclaimer:  { ko:'?좑툘 ?쒕??덉씠???꾩슜 ???ㅼ젣 嫄곕옒 寃곌낵瑜?蹂댁옣?섏? ?딆뒿?덈떎.', en:'?좑툘 Simulation only ??does not guarantee real trading results.', id:'?좑툘 Hanya simulasi ??tidak menjamin hasil trading nyata.', zh:'?좑툘 餓끺풘與→떉 ??訝띴퓷瑥곩츩?끺벡?볡퍜?쒌?, ja:'?좑툘 ?룔깱?γ꺃?쇈궥?㎯꺍弱귞뵪 ??若잓슋??룚凉뺟탳?쒌굮岳앲㉫?쀣겲?쎼굯??, es:'?좑툘 Solo simulaci처n ??no garantiza resultados reales de trading.', vi:'?좑툘 Ch沼?m척 ph沼뢮g ??kh척ng 휃梳즡 b梳즣 k梳퓍 qu梳?giao d沼땉h th沼켧 t梳?', hi:'?좑툘 西뺖쪍西듀ㅂ 西멘ㅏ西?쪇西꿋쪍西뜩ㄸ ??西듀ㅎ西멘쪓西ㅰㅅ西욈쨻 西잀쪓西겯쪍西□ㅏ西귖쨽 西むㅀ西욈ㄳ西약ㄾ誓뗠쨧 西뺖? 西쀠ㅎ西겯쨧西잀? 西ⓣㅉ誓西귖ⅳ', pt:'?좑툘 Somente simula챌찾o ??n찾o garante resultados reais de trading.', tl:'?좑툘 Simulation lamang ??hindi ginagarantiyahan ang mga tunay na resulta ng trading.', fr:'?좑툘 Simulation uniquement ??ne garantit pas les r챕sultats de trading r챕els.' },
  ip_copy:        { ko:'복사', en:'Copy', id:'Salin', zh:'复制', ja:'コピー', es:'Copiar', vi:'Sao chép', hi:'कॉपी करें', pt:'Copiar', tl:'Kopyahin', fr:'Copier' },
  ip_copied:      { ko:'복사됨', en:'Copied!', id:'Tersalin!', zh:'已复制！', ja:'コピーしました！', es:'¡Copiado!', vi:'Đã sao chép!', hi:'कॉपी हो गया!', pt:'Copiado!', tl:'Nakopya na!', fr:'Copié !' },
  ip_copy_note:   { ko:'위 주소를 복사 후 유튜브에서 검색해주세요.', en:'Copy the URL above and search in YouTube.', id:'Salin URL di atas lalu cari di YouTube.', zh:'复制上方地址后在YouTube搜索。', ja:'上記URLをコピーしてYouTubeで検索してください。', es:'Copie la URL de arriba y búsquela en YouTube.', vi:'Sao chép URL phía trên và tìm kiếm trên YouTube.', hi:'ऊपर का URL कॉपी करें और YouTube पर खोजें।', pt:'Copie a URL acima e pesquise no YouTube.', tl:'Kopyahin ang URL sa itaas at hanapin sa YouTube.', fr:'Copiez l'URL ci-dessus et recherchez sur YouTube.' },
  ip_close:       { ko:'?リ린', en:'Close', id:'Tutup', zh:'?녜뿭', ja:'?됥걯??, es:'Cerrar', vi:'휂처ng', hi:'西о쨧西?西뺖ㅀ誓뉋쨧', pt:'Fechar', tl:'Isara', fr:'Fermer' },
  ip_donation_title: { ko:'?뮋 ?좏떥 ?쒖옉 吏??, en:'?뮋 Support Development', id:'?뮋 Dukung Pengembangan', zh:'?뮋 ??똻凉??, ja:'?뮋 ?뗧쇇??뤃', es:'?뮋 Apoyar Desarrollo', vi:'?뮋 沼쫚g h沼?Ph찼t tri沼긪', hi:'?뮋 西듀ㅏ西뺖ㅎ西?西멘ㄾ西겯쪓西?ㄸ', pt:'?뮋 Apoiar Desenvolvimento', tl:'?뮋 Suportahan ang Development', fr:'?뮋 Soutenir le D챕veloppement' },
  ip_donation_desc:  { ko:'?깆씠 ?꾩????먮떎硫??뚯쨷???꾩썝 遺?곷뱶?ㅼ슂. ?꾩썝湲덉? ??媛쒕컻쨌?댁쁺???ъ슜?⑸땲??', en:'If the app has been useful, a small tip goes a long way. All support funds development.', id:'Jika aplikasi bermanfaat, dukunganmu sangat berarti untuk pengembangan.', zh:'倻귝옖佯붺뵪野방궓?됧리?⑼펽轝?퓥?볢탲??똻凉?묆?, ja:'?㏂깤?ゃ걣壤밤겓塋뗣겂?잆굢?뗧쇇??뤃?믡걡窈섅걚?쀣겲?쇻?, es:'Si la app te ha sido 첬til, un peque챰o apoyo importa.', vi:'N梳퓎 app h沼칤 챠ch, s沼?沼쬷g h沼?c沼쬪 b梳죒 r梳쩿 c처 첵 ngh칫a.', hi:'西?ㄶ西?西먣ㄺ 西됢ㄺ西?쪑西쀠? 西겯ㅉ西? 西뤲쨻 西쎹쪑西잀ㅎ 西?쪑西쀠ㄶ西약ㄸ 西оㅉ誓곟ㄴ 西?ㅎ西?ㄸ誓?西겯쨼西ㅰㅎ 西밝쪎誓?, pt:'Se o app foi 첬til, um pequeno apoio faz diferen챌a.', tl:'Kung nakatulong ang app, malaki ang ibig sabihin ng inyong suporta.', fr:"Si l'app vous a 챕t챕 utile, un petit soutien compte." },
  ip_donation_err:   { ko:'Pi Browser?먯꽌留??꾩썝??媛?ν빀?덈떎.', en:'Donations only work inside Pi Browser.', id:'Donasi hanya tersedia di Pi Browser.', zh:'餓끻쑉 Pi Browser ?끻룾?롦뤃??, ja:'Pi Browser ?끹겎??겳孃뚧뤃?㎯걤?얇걲??, es:'Las donaciones solo funcionan en Pi Browser.', vi:'Ch沼?沼쬷g h沼?휃튼沼즓 trong Pi Browser.', hi:'Pi Browser 西뺖쪍 西끶쨧西╆ㅀ 西밝? 西?쪑西쀠ㄶ西약ㄸ 西멘쨧西?ㅅ 西밝쪎誓?, pt:'Doa챌천es s처 funcionam no Pi Browser.', tl:'Gumagana lamang ang donasyon sa loob ng Pi Browser.', fr:'Les dons ne fonctionnent que dans Pi Browser.' },
  btn_help:       { ko:'?꾩?留?, en:'Help', id:'Bantuan', zh:'躍?뒰', ja:'?섅꺂??, es:'Ayuda', vi:'Tr沼?gi첬p', hi:'西멘ㅉ西약ㄿ西ㅰㅎ', pt:'Ajuda', tl:'Tulong', fr:'Aide' },
  btn_utils:      { ko:'?좏떥 紐⑥쓬', en:'My Apps', id:'Aplikasi', zh:'藥ε끁?덆썓', ja:'?㏂깤?や?誤?, es:'Mis Apps', vi:'沼쮖g d沼쩸g', hi:'西?쪍西겯쪍 西먣ㄺ誓띭ㅈ', pt:'Meus Apps', tl:'Mga App', fr:'Mes Apps' },
  utils_title:    { ko:'?좏떥 紐⑥쓬', en:'My Utilities', id:'Utilitas Saya', zh:'?묊쉪藥ε끁??, ja:'?욁궎?╉꺖?녴궍?ゃ깇??, es:'Mis Utilidades', vi:'Ti沼뇆 챠ch c沼쬪 t척i', hi:'西?쪍西겯쪍 西됢ㄺ西뺖ㅀ西?, pt:'Minhas Utilidades', tl:'Aking Mga Utility', fr:'Mes Utilitaires' },
  utils_soon:     { ko:'?좏떥 紐⑸줉??怨?異붽??⑸땲??:)', en:'More utilities coming soon :)', id:'Utilitas lainnya segera hadir :)', zh:'?닷쩀藥ε끁?녑컛?ⓨ눣 :)', ja:'餓뽧겗?╉꺖?녴궍?ゃ깇?ｃ걣瓦묉뿥?ч뼀 :)', es:'M찼s utilidades pr처ximamente :)', vi:'Th챗m ti沼뇆 챠ch s梳칛 ra m梳칣 :)', hi:'西붲ㅀ 西됢ㄺ西뺖ㅀ西?西쒉ㅂ誓띭ㄶ 西?西겯ㅉ誓?西밝쪎西?:)', pt:'Mais utilit찼rios em breve :)', tl:'Mas maraming utility ang darating :)', fr:"Plus d'utilitaires bient척t :)" },
  p_rec:          { ko:'沅뚯옣', en:'Rec', id:'Rekm', zh:'?②뜍', ja:'?ⓨⅷ', es:'Rec', vi:'휂沼?xu梳쩿', hi:'西끶ㄸ誓곟ㅆ西귖ㅈ西욈ㄴ', pt:'Rec', tl:'Rekm', fr:'Rec' },
  // ?? Auto Optimize ??
  auto_name:       { ko:'?먮룞 理쒖쟻???뵇', en:'Auto Optimize ?뵇', id:'Optimasi Otomatis ?뵇', zh:'?ゅ뒯鴉섇뙑 ?뵇', ja:'?ゅ땿??⒴뙑 ?뵇', es:'Auto Optimizar ?뵇', vi:'T沼?휂沼셬g T沼멼 특u ?뵇', hi:'西멘쪓西듀ㄴ西?西끶ㄸ誓곟쨻誓귖ㅂ西??뵇', pt:'Auto Otimizar ?뵇', tl:'Auto Optimize ?뵇', fr:'Auto Optimiser ?뵇' },
  auto_desc:       { ko:'?곸쐞 ????먮룞 遺꾩꽍??理쒖쟻 ?뚮씪誘명꽣 議고빀??異붿쿇?⑸땲??, en:'Scans top pools to find the best parameter combination', id:'Pindai pool teratas untuk kombinasi parameter terbaik', zh:'?ゅ뒯?ユ룒窈띌깿黎졽빳?얍댆?鵝녑뢿?곁퍍??, ja:'訝듾퐤?쀣꺖?ャ굮?ゅ땿?녷옄?쀦??⒲깙?⒲깳?쇈궭?믤렓?╉걮?얇걲', es:'Escanea los mejores pools para encontrar la mejor combinaci처n', vi:'T沼?휃沼셬g qu챕t c찼c pool h횪ng 휃梳쬾 휃沼?t챙m tham s沼?t沼멼 튼u', hi:'西멘ㅀ誓띭ㅅ誓뗠ㄴ誓띭ㄴ西?西む쪎西겯ㅎ西??西잀ㅀ 西뺖쪍 西꿋ㅏ西?西뜩?西겯쪓西?西む쪈西?西멘쪓西뺖쪎西?西뺖ㅀ誓뉋쨧', pt:'Verifica os melhores pools para a melhor combina챌찾o', tl:'I-scan ang mga nangungunang pool para sa pinakamahusay na parameter', fr:'Analyse les meilleurs pools pour trouver la meilleure combinaison' },
  auto_pool_title: { ko:'遺꾩꽍??? ?좏깮', en:'Select Pools to Scan', id:'Pilih Pool untuk Dipindai', zh:'?됪떓誤곫돧?뤹쉪黎?, ja:'?밤궘?ｃ꺍?쇻굥?쀣꺖?ャ굮?멩뒢', es:'Seleccionar Pools a Escanear', vi:'Ch沼뛫 Pool 휃沼?Qu챕t', hi:'西멘쪓西뺖쪎西?西뺖쪍 西꿋ㅏ西?西む쪈西?西싟쪇西ⓣ쪍西?, pt:'Selecionar Pools para Escanear', tl:'Piliin ang Pools na I-scan', fr:'S챕lectionner les Pools 횪 Scanner' },
  auto_sel_all:    { ko:'???섏씠吏 ?꾩껜 ?좏깮', en:'Select This Page', id:'Pilih Halaman Ini', zh:'?됪떓?ч〉', ja:'?볝겗?싥꺖?멥굮?③겦??, es:'Seleccionar Esta P찼gina', vi:'Ch沼뛫 trang n횪y', hi:'西?ㅉ 西む쪍西?西싟쪇西ⓣ쪍西?, pt:'Selecionar Esta P찼gina', tl:'Piliin ang Page na Ito', fr:'S챕lectionner Cette Page' },
  auto_desel_all:  { ko:'???섏씠吏 ?꾩껜 ?댁젣', en:'Deselect This Page', id:'Hapus Halaman Ini', zh:'?뽪텋?ч〉', ja:'?볝겗?싥꺖?멥굮?②㎗??, es:'Deseleccionar Esta P찼gina', vi:'B沼?ch沼뛫 trang n횪y', hi:'西?ㅉ 西む쪍西?西밝쩅西약쨵西?, pt:'Desmarcar Esta P찼gina', tl:'I-deselect ang Page na Ito', fr:'D챕s챕lectionner Cette Page' },
  auto_selected:   { ko:'媛??좏깮??, en:'selected', id:'dipilih', zh:'藥꿴?, ja:'?뗩겦?욂릎', es:'seleccionados', vi:'휃찾 ch沼뛫', hi:'西싟쪇西ⓣ쪍 西쀠쨵', pt:'selecionados', tl:'napili', fr:'s챕lectionn챕s' },
  scan_title:      { ko:'?ㅼ틪 ?ㅼ젙', en:'Scan Settings', id:'Pengaturan Scan', zh:'?ユ룒溫양쉰', ja:'?밤궘?ｃ꺍鼇?츣', es:'Configuraci처n de Escaneo', vi:'C횪i 휃梳톞 Qu챕t', hi:'西멘쪓西뺖쪎西?西멘쪍西잀ㅏ西귖쨽誓띭ㅈ', pt:'Configura챌천es de Varredura', tl:'Mga Setting ng Scan', fr:'Param챔tres de Scan' },
  scan_simulating: { ko:'?쒕? 以?..', en:'Simulating...', id:'Menyimulasikan...', zh:'與→떉訝?..', ja:'?룔깱?γ꺃?쇈궥?㎯꺍訝?..', es:'Simulando...', vi:'휂ang m척 ph沼뢮g...', hi:'西멘ㅏ西?쪇西꿋쪍西뜩ㄸ 西싟ㅂ 西겯ㅉ西?西밝쪎...', pt:'Simulando...', tl:'Nagsisimulate...', fr:'Simulation en cours...' },
  scan_sub_strat:  { ko:'遺꾩꽍 ?꾨왂', en:'Strategy to Test', id:'Strategi', zh:'?녷옄嶺뽫븼', ja:'?녷옄??븼', es:'Estrategia', vi:'Chi梳퓆 l튼沼즓', hi:'西겯ㄳ西ⓣ?西ㅰㅏ', pt:'Estrat챕gia', tl:'Estratehiya', fr:'Strat챕gie' },
  scan_records:    { ko:'???嫄곕옒 嫄댁닔', en:'Records per Pool', id:'Rekaman per Pool', zh:'驪뤸콬雅ㅶ삌??, ja:'?쀣꺖?ャ걗?잆굤??뻑??, es:'Registros por Pool', vi:'S沼?giao d沼땉h m沼뾦 pool', hi:'西む쪓西겯ㄴ西?西む쪈西?西겯ㅏ西뺖쪏西겯쪓西?, pt:'Registros por Pool', tl:'Mga Record bawat Pool', fr:'Enregistrements par Pool' },
  scan_spreads:    { ko:'?ㅽ봽?덈뱶 ?듭뀡 (%)', en:'Spread Options (%)', id:'Opsi Spread (%)', zh:'餓룟량?됮」 (%)', ja:'?밤깤?с긿?됥궕?쀣궥?㎯꺍 (%)', es:'Opciones de Spread (%)', vi:'T첫y ch沼뛫 Spread (%)', hi:'西멘쪓西む쪓西겯쪍西?西듀ㅏ西뺖ㅂ誓띭ㄺ (%)', pt:'Op챌천es de Spread (%)', tl:'Mga Opsyon ng Spread (%)', fr:'Options de Spread (%)' },
  scan_running:    { ko:'遺꾩꽍 以?, en:'Scanning', id:'Memindai', zh:'?ユ룒訝?, ja:'?밤궘?ｃ꺍訝?, es:'Escaneando', vi:'휂ang qu챕t', hi:'西멘쪓西뺖쪎西?西밝쪑 西겯ㅉ西?西밝쪎', pt:'Varrendo', tl:'Nag-sca-scan', fr:'En cours de scan' },
  scan_done:       { ko:'?ㅼ틪 ?꾨즺', en:'Scan Complete', id:'Scan Selesai', zh:'?ユ룒若뚧닇', ja:'?밤궘?ｃ꺍若뚥틙', es:'Escaneo Completo', vi:'Qu챕t xong', hi:'西멘쪓西뺖쪎西?西む쪈西겯쪓西?, pt:'Varredura Completa', tl:'Tapos na ang Scan', fr:'Scan Termin챕' },
  res_scan_title:  { ko:'理쒖쟻??寃곌낵', en:'Optimization Results', id:'Hasil Optimasi', zh:'鴉섇뙑瀯볠옖', ja:'??⒴뙑永먩옖', es:'Resultados de Optimizaci처n', vi:'K梳퓍 qu梳?T沼멼 튼u h처a', hi:'西끶ㄸ誓곟쨻誓귖ㅂ西?西むㅀ西욈ㄳ西약ㄾ', pt:'Resultados de Otimiza챌찾o', tl:'Mga Resulta ng Optimization', fr:"R챕sultats d'Optimisation" },
  res_scan_use:    { ko:'???ㅼ젙?쇰줈 諛깊뀒?ㅽ듃', en:'Backtest this setup', id:'Backtest pengaturan ini', zh:'?ⓩ?溫양쉰?욄탩', ja:'?볝겗鼇?츣?㎯깘?껁궚?녴궧??, es:'Backtest con esta configuraci처n', vi:'Backtest v沼쌻 c횪i 휃梳톞 n횪y', hi:'西뉋ㅈ 西멘쪍西잀쨫西?西멘쪍 西о쪎西뺖쩅誓뉋ㅈ誓띭쩅', pt:'Backtest com esta configura챌찾o', tl:'I-backtest ang setup na ito', fr:'Backtest avec cette configuration' },
  run_live_roi:    { ko:'?ㅼ떆媛??덉긽 ?섏씡瑜?, en:'Live ROI Preview', id:'Pratinjau ROI', zh:'若욄뿶?띄썗窯꾥쭏', ja:'?ゃ궋?ャ궭?ㅳ깲?띸썗', es:'Rentabilidad en Vivo', vi:'ROI Tr沼켧 Ti梳퓈', hi:'西꿋ㅎ西뉋ㅅ ROI', pt:'ROI em Tempo Real', tl:'Live ROI', fr:'ROI en Direct' },
  res_scan_empty:  { ko:'寃곌낵 ?놁쓬 ???ㅼ떆 ?쒕룄?댁＜?몄슂', en:'No results ??please retry', id:'Tidak ada hasil ??coba lagi', zh:'?좂퍜????瑥룬뇥瑥?, ja:'永먩옖?ゃ걮 ???띹ĳ烏뚣걮?╉걦?졼걬??, es:'Sin resultados ??intente de nuevo', vi:'Kh척ng c처 k梳퓍 qu梳???th沼?l梳죍', hi:'西뺖쪑西?西むㅀ西욈ㄳ西약ㄾ 西ⓣㅉ誓西???西む쪇西ⓣ쨨 西む쪓西겯ㄿ西약ㅈ 西뺖ㅀ誓뉋쨧', pt:'Sem resultados ??tente novamente', tl:'Walang resulta ??subukan muli', fr:'Aucun r챕sultat ??r챕essayez' },
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

// ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??//  HORIZON API
// ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??
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
  // Step 1: Expert?먯꽌 ?곸쐞 200媛?媛?몄삤湲?(XLM ?꾩슜 ?꾪꽣留???異⑸텇???꾨낫 ?뺣낫)
  const expertResp = await fetch('https://api.stellar.expert/explorer/public/liquidity-pool?sort=volume&order=desc&limit=200');
  if (!expertResp.ok) throw new Error(`Stellar Expert API ${expertResp.status}`);
  const expertJson = await expertResp.json();
  const expertPools = expertJson._embedded?.records || [];
  if (!expertPools.length) throw new Error('Stellar Expert 寃곌낵 ?놁쓬');

  // Step 2: XLM ?ы븿 ?留??대씪?댁뼵???꾪꽣留?  const xlmPools = expertPools.filter(p => p.assets?.some(a => a.asset === 'XLM'));
  if (!xlmPools.length) throw new Error('XLM ? ?놁쓬');

  // Step 3: ?꾨왂蹂??꾪꽣 + ?뺣젹 (auto??orderbook ?뺣젹 ?ъ슜)
  if (state.strategy === 'orderbook' || state.strategy === 'auto') {
    // ?ㅻ뜑遺?MM: 7??嫄곕옒 100嫄?誘몃쭔 ?쒖쇅 (鍮꾪솢???)
    const active = xlmPools.filter(p => (p.trades?.['7d'] || 0) >= 100);
    const candidates = active.length >= 10 ? active : xlmPools;
    const maxTrades = Math.max(...candidates.map(p => p.trades?.['7d'] || 0)) || 1;
    const maxAcc    = Math.max(...candidates.map(p => p.accounts || 0)) || 1;
    candidates.sort((a, b) => {
      // 7??嫄곕옒 ?잛닔 90% + LP ??10%
      const score = p => 0.9 * ((p.trades?.['7d'] || 0) / maxTrades)
                       + 0.1 * ((p.accounts || 0) / maxAcc);
      return score(b) - score(a);
    });
    xlmPools.length = 0;
    xlmPools.push(...candidates);
  } else {
    // AMM: 嫄곕옒??TVL 鍮꾩쑉 (?섏닔猷?APY 吏?? 湲곗? ?뺣젹
    xlmPools.sort((a, b) => {
      const ratio = p => (p.volume_value?.['7d'] || 0) / Math.max(p.total_value_locked || 1, 1);
      return ratio(b) - ratio(a);
    });
  }

  // Step 4: ?곸쐞 50媛쒕쭔 Horizon?먯꽌 reserve ?곗씠??蹂묐젹 議고쉶 (StrKey ??hex 蹂??
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

  // Step 5: Expert 硫뷀??곗씠??蹂묓빀 ???뺣젹 ?쒖꽌 ?좎?
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
  throw new Error('HTTP 503 (?ъ떆???ㅽ뙣)');
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

// ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??//  BACKTEST: ?ㅻ뜑遺?留덉폆硫붿씠??// ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??
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
        stopped = true; stopReason = `湲됰? 媛먯? (${chg.toFixed(2)}%)`;
        stopIdx = i;
        log.push({ type: 'stop', msg: stopReason }); break;
      }
    }

    const total    = usdc + native * mid;
    const nativeRatio = (native * mid) / total * 100;

    if (nativeRatio > p.stopRatio) {
      stopped = true; stopReason = `?ㅼ씠?곕툕 ?ш퀬 ${nativeRatio.toFixed(1)}% 珥덇낵`;
      stopIdx = i;
      log.push({ type: 'stop', msg: stopReason }); break;
    }
    if (nativeRatio < (100 - p.stopRatio)) {
      stopped = true; stopReason = `USDC ?ш퀬 ${(100-nativeRatio).toFixed(1)}% 珥덇낵`;
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
          log.push({ type: 'buy', msg: `??留ㅼ닔 ${bought.toFixed(2)} @ ${bid.toFixed(5)} (L${layer})` });
        }

        if (priceUp && mid >= ask && native * mid >= layerAmt) {
          const sold = layerAmt / ask;
          const f    = layerAmt * fee;
          usdc += (layerAmt - f); native -= sold; fees += f; fills++;
          profit += layerAmt * (p.spreadPct / 100 / p.layers) - f;
          log.push({ type: 'sell', msg: `??留ㅻ룄 ${sold.toFixed(2)} @ ${ask.toFixed(5)} (L${layer})` });
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

// ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??//  BACKTEST: AMM ?좊룞??怨듦툒
// ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??
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
        exitReason = `IL ${il.toFixed(2)}% ?꾨떖`; exitTick = i; break;
      }
      const curRoi = (totalFees / p.depositUsdc * 100) + il;
      if (curRoi >= p.targetRoiPct) {
        exitReason = `紐⑺몴 ?섏씡瑜?${curRoi.toFixed(2)}% ?ъ꽦`; exitTick = i; break;
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

// ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??//  HELPERS
// ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??
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

// ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??//  DONATION
// ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??
async function _serverApprove(paymentId) {
  const res = await fetch('/api/payments/approve', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ paymentId }),
  });
  if (!res.ok) throw new Error(`approve failed: ${res.status}`);
}

async function _serverComplete(paymentId, txid) {
  const res = await fetch('/api/payments/complete', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ paymentId, txid }),
  });
  if (!res.ok) throw new Error(`complete failed: ${res.status}`);
}

async function _onIncompletePaymentFound(payment) {
  console.warn('誘몄셿猷?寃곗젣 泥섎━ 以?', payment.identifier);
  try {
    if (payment.transaction == null) {
      await _serverApprove(payment.identifier);
    } else {
      await _serverComplete(payment.identifier, payment.transaction.txid);
    }
  } catch (err) {
    console.error('誘몄셿猷?寃곗젣 泥섎━ ?ㅽ뙣:', err);
  }
}

function createDonation(amount) {
  if (typeof Pi === 'undefined') {
    return Promise.reject(new Error('Pi SDK瑜?李얠쓣 ???놁뼱?? Pi Browser?먯꽌 ?ㅽ뻾?댁＜?몄슂.'));
  }
  return new Promise((resolve, reject) => {
    Pi.createPayment(
      {
        amount,
        memo: `mm諛깊뀒?ㅽ듃 ?꾩썝 ${amount}?`,
        metadata: { app: 'mm_backtest', type: 'donation' },
      },
      {
        onReadyForServerApproval: async (paymentId) => {
          try { await _serverApprove(paymentId); } catch (err) { reject(err); }
        },
        onReadyForServerCompletion: async (paymentId, txid) => {
          try { await _serverComplete(paymentId, txid); resolve({ paymentId, txid }); } catch (err) { reject(err); }
        },
        onCancel: () => reject(new Error('cancelled')),
        onError: (err) => reject(err),
      }
    );
  });
}

// ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??//  RENDER
// ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??
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
      <button class="ip-close-btn" onclick="toggleInfo()">${t(S.ip_close)} ??/button>
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
      <div class="ip-tip">쨌 ${t(S.ip_t1)}</div>
      <div class="ip-tip">쨌 ${t(S.ip_t2)}</div>
      <div class="ip-tip">쨌 ${t(S.ip_t3)}</div>
    </div>

    <div class="contact-card">
      <div class="contact-title">${t(S.ip_contact)}</div>
      <p class="contact-desc">${t(S.ip_contact_desc)}</p>
      <div class="youtube-link">
        <span class="yt-icon">&#x25B6;</span>
        <span class="yt-text">
          <span class="yt-label">Hidden Strokes</span>
          <span class="yt-sub">youtube.com/@hiddenstrokes-j5w</span>
        </span>
      </div>
      <div class="copy-url-row">
        <span class="copy-url-text">youtube.com/@hiddenstrokes-j5w</span>
        <button class="btn btn-secondary ip-copy-btn" id="ip-copy-btn">${t(S.ip_copy)}</button>
      </div>
      <p class="contact-desc" style="margin-top:6px;font-size:11px;">${t(S.ip_copy_note)}</p>
    </div>

    <div class="ip-section-title">${t(S.ip_donation_title)}</div>
    <div class="ip-card">
      <p class="ip-contact-desc" style="margin-bottom:8px;">${t(S.ip_donation_desc)}</p>
      <div class="donation-btns">
        <button class="donation-btn" data-amount="1">1?</button>
        <button class="donation-btn" data-amount="5">5?</button>
        <button class="donation-btn" data-amount="10">10?</button>
      </div>
      <div class="donation-result" id="ip-donation-result"></div>
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

  document.querySelectorAll('.donation-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const amount = Number(btn.dataset.amount);
      const resultEl = document.getElementById('ip-donation-result');
      const allBtns = document.querySelectorAll('.donation-btn');
      allBtns.forEach(b => { b.disabled = true; });
      resultEl.textContent = '';
      resultEl.className = 'donation-result';
      try {
        await createDonation(amount);
        resultEl.textContent = `??${amount}?`;
        resultEl.classList.add('donation-success');
      } catch (err) {
        if (err.message === 'cancelled') {
          resultEl.textContent = '';
        } else {
          resultEl.textContent = t(S.ip_donation_err);
          resultEl.classList.add('donation-error');
        }
      } finally {
        allBtns.forEach(b => { b.disabled = false; });
      }
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
        <span class="ip-title">?뵕 ${t(S.utils_title)}</span>
        <button class="ip-close-btn" onclick="toggleUtils()">${t(S.ip_close)}</button>
      </div>

      <a class="util-card" href="https://apppidexutillaac6961.pinet.com/" target="_blank">
        <div class="util-card-icon">
          <img src="data:image/png;base64,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" width="64" height="64" style="border-radius:14px;display:block;object-fit:cover;" alt="PiDEX Util">
        </div>
        <div class="util-card-body">
          <div class="util-card-name">PiDEX Util</div>
          <div class="util-card-tags">
            <span class="util-tag">Arbitrage Finder</span>
            <span class="util-tag">LP Calculator</span>
            <span class="util-tag">Swap Simulator</span>
          </div>
          <div class="util-card-desc">Pi DEX ?좊룞?굿룹감?돠룹뒪???좏떥 紐⑥쓬.<br><span class="util-card-desc-en">All-in-one Pi DEX utility ??arbitrage, LP calculator &amp; swap simulator.</span></div>
          <div class="util-card-link">Pi Browser濡??닿린 ??/div>
        </div>
      </a>

      <a class="util-card" href="https://quizpisgn2184.pinet.com" target="_blank">
        <div class="util-card-icon">
          <img src="data:image/png;base64,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" width="64" height="64" style="border-radius:14px;display:block;object-fit:cover;" alt="PiDEX Quiz">
        </div>
        <div class="util-card-body">
          <div class="util-card-name">PiDEX Quiz</div>
          <div class="util-card-tags">
            <span class="util-tag">DEX Quiz</span>
            <span class="util-tag">Leaderboard</span>
            <span class="util-tag">Survey</span>
          </div>
          <div class="util-card-desc">Pi DEX 吏???댁쫰 &amp; 湲濡쒕쾶 而ㅻ??덊떚 ?ㅻЦ.<br><span class="util-card-desc-en">Pi DEX knowledge quiz &amp; global community survey.</span></div>
          <div class="util-card-link">Pi Browser濡??닿린 ??/div>
        </div>
      </a>
    `;
  }
}

const _LANG_META = {
  ko: { flag: '?눖?눟', name: '?쒓뎅?? },
  en: { flag: '?눣?눡', name: 'English' },
  id: { flag: '?눒?눍', name: 'Indonesia' },
  zh: { flag: '?눊?눛', name: '訝?뻼' },
  ja: { flag: '?눓?눝', name: '?ζ쑍沃? },
  es: { flag: '?눎?눡', name: 'Espa챰ol' },
  vi: { flag: '?눤?눛', name: 'Ti梳퓆g Vi沼뇍' },
  hi: { flag: '?눒?눛', name: '西밝ㅏ西ⓣ쪓西╆?' },
  pt: { flag: '?눉?눟', name: 'Portugu챗s' },
  tl: { flag: '?눝?눑', name: 'Filipino' },
  fr: { flag: '?눏?눟', name: 'Fran챌ais' },
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
      <span class="lang-flag">${m.flag}</span><span>${m.name}</span><span class="lang-arrow">??/span>
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
  if (helpBtn) helpBtn.textContent = `??${t(S.btn_help)}`;
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
    <div class="step-label">${state.step} / ${S.steps.length} ??${tp(cur)}</div>
  `;
}

function navBtns(nav, back, nextFn, nextLabel = null, disabled = false) {
  const label = nextLabel ?? `${S.btn_next.ko} ${S.btn_next.en} ??;
  nav.innerHTML = `
    ${back ? `<button class="btn btn-secondary" onclick="prevStep()">??${S.btn_prev.ko} <span class="t-en-i">${S.btn_prev.en}</span></button>` : ''}
    ${nextFn ? `<button class="btn btn-primary" onclick="${nextFn}()" ${disabled ? 'disabled' : ''}>${label}</button>` : ''}
  `;
}

// ?? Step 1: ?ㅽ듃?뚰겕 ??????????????????????????????????

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

// ?? Step 2: ?꾨왂 ??????????????????????????????????????

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

// ?? Step 3: ? / ?섏뼱 ?좏깮 ????????????????????????????

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
      <button class="pager-btn" onclick="changePage(-1)" ${poolPage === 0 ? 'disabled' : ''}>?</button>
      <span class="pager-info">${poolPage + 1} / ${totalPages}</span>
      <button class="pager-btn" onclick="changePage(1)" ${poolPage >= totalPages - 1 ? 'disabled' : ''}>??/button>
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
      meta = `PI ${nativeAmt.toLocaleString(undefined, {maximumFractionDigits:2})} 쨌 LP <strong style="color:#e2e8f0">${lp}</strong> 쨌 ${fee}%`;
    } else if (state.strategy === 'orderbook') {
      meta = `7d嫄곕옒 <strong style="color:#e2e8f0">${(p._trades7d || 0).toLocaleString()}</strong>嫄?쨌 LP <strong style="color:#e2e8f0">${lp}</strong> 쨌 ${fee}%`;
    } else {
      const apy = p._tvl > 0 ? (p._vol7d / p._tvl * 0.003 * 52 * 100).toFixed(1) : '?';
      meta = `?덉긽APY <strong style="color:#68d391">${apy}%</strong> 쨌 LP <strong style="color:#e2e8f0">${lp}</strong> 쨌 7d嫄곕옒 ${(p._trades7d || 0).toLocaleString()}嫄?;
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
    if (!pools.length) throw new Error(`${S.pool_fail.ko} (0媛?/ 0 pools)`);
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

// ?? Step 4: ?뚮씪誘명꽣 ??????????????????????????????????

function renderParamsStep(el, nav) {
  if (state.strategy === 'auto') { renderScanParamsStep(el, nav); return; }
  const isOB = state.strategy === 'orderbook';
  const p    = state.params;
  el.innerHTML = `
    <div class="section-title">${t(S.param_title)}</div>
    <div class="alert info">?뱤 ${poolLabel(state.pool)} 쨌 ${NETWORKS[state.network].name}</div>

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
  navBtns(nav, true, 'goToRun', `??${t(S.btn_run)}`);
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

// ?? Step 5: ?ㅽ뻾 ??????????????????????????????????????

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
      <div id="live-roi" style="font-size:1.7rem;font-weight:700;color:#4a5568;transition:color 0.4s">??/div>
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
    log(`??${poolLabel(state.pool)} 쨌 ${total} ${tp(S.run_req)}`);

    const fetchFn = state.strategy === 'amm' ? fetchTradesForPool : fetchTradesForPair;
    const records = await fetchFn(state.pool, total, progress);

    document.getElementById('nav-buttons').innerHTML = '';

    if (_fetchStop) {
      log(`??${records.length} ${tp(S.run_received)} (以묐떒??`);
    } else {
      log(`??${records.length} ${tp(S.run_received)}`);
    }

    const trades = parseTrades(records);
    log(`??${tp(S.run_valid)} ${trades.length}`);

    if (trades.length < 10) throw new Error(tp(S.run_too_few));

    status(`<span class="spinner"></span> ${tl(S.run_running)}`);
    await sleep(30);

    state.result = state.strategy === 'orderbook'
      ? runOrderbookBacktest(trades, state.params)
      : runAMMBacktest(state.pool, trades, state.params);

    log(`??${tp(S.run_complete)}`);
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

// ?? Step 6: 寃곌낵 ??????????????????????????????????????

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
    <div class="alert info" style="margin-bottom:10px">?뱤 ${poolLabel(state.pool)} 쨌 ${NETWORKS[state.network].name}</div>
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
    <div class="alert info" style="margin-bottom:10px">?뱤 ${poolLabel(state.pool)} 쨌 ${NETWORKS[state.network].name}</div>
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

// ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??//  AUTO OPTIMIZE
// ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??
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
            : `7d嫄곕옒 <strong style="color:#e2e8f0">${(p._trades7d||0).toLocaleString()}</strong>嫄?쨌 LP <strong style="color:#e2e8f0">${p._accounts||'?'}</strong>`
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

// ?? Step 4 (auto): ?ㅼ틪 ?ㅼ젙 ??????????????????????????

function renderScanParamsStep(el, nav) {
  const isPi = state.network === 'pi';
  const p    = state.scanParams;
  const sub  = p.subStrategy || 'orderbook';
  el.innerHTML = `
    <div class="section-title" id="scan-section-title">${sub === 'amm' ? 'AMM' : 'MM'} ${t(S.scan_title)}</div>
    <div class="alert info">?뱤 ${scanSelectedIds.size} ${t(S.auto_selected)} 쨌 ${NETWORKS[state.network].name}</div>

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
  navBtns(nav, true, 'goToScanRun', `??${t(S.btn_run)}`);
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

// ?? Step 5 (auto): ?ㅼ틪 ?ㅽ뻾 ??????????????????????????

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
      status(`<span class="spinner"></span> [${i+1}/${selected.length}] ${label} ??${tl(S.scan_running)}...`);
      setProg(i, selected.length);

      let tradeRecords;
      try {
        const fetchFn = subStrategy === 'amm' ? fetchTradesForPool : fetchTradesForPair;
        tradeRecords  = await fetchFn(pool, records, () => {});
      } catch (e) {
        log(`??${label}: ${e.message}`);
        continue;
      }

      const trades = parseTrades(tradeRecords);
      if (trades.length < 10) { log(`??${label}: ?곗씠??遺議?(${trades.length}嫄?`); continue; }

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
          ? `?ㅽ봽?덈뱶 ${bestParams.spreadPct}% 쨌 鍮꾩쑉 ${bestParams.splitRatio}:${100-bestParams.splitRatio}`
          : `IL ${bestParams.maxILPct}% 쨌 紐⑺몴ROI ${bestParams.targetRoiPct}%`;
        log(`??${label}: ROI <strong style="color:${bestRoi>=0?'#68d391':'#fc8181'}">${roiStr}%</strong> (${hint})`);
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

// ?? Step 6 (auto): 寃곌낵 ???????????????????????????????

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
          ? `?ㅽ봽?덈뱶 ${r.params.spreadPct}% 쨌 鍮꾩쑉 ${r.params.splitRatio}:${100-r.params.splitRatio}`
          : `IL ${r.params.maxILPct}% 쨌 紐⑺몴ROI ${r.params.targetRoiPct}%`;
        const medal = idx === 0 ? '?쪍 ' : idx === 1 ? '?쪎 ' : idx === 2 ? '?쪏 ' : `#${idx+1} `;
        return `
          <div class="stat-row" style="flex-direction:column;align-items:flex-start;gap:5px;padding:12px 0">
            <div style="display:flex;justify-content:space-between;width:100%;align-items:center">
              <span style="font-weight:600">${medal}${r.label}</span>
              <span class="value ${roiClass}">${roi}%</span>
            </div>
            <div style="font-size:0.78rem;color:#718096">${paramLine} 쨌 ${r.result.fills}??泥닿껐</div>
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

// ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??//  NAVIGATION
// ?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧?먥븧??
function nextStep() { state.step = Math.min(6, state.step + 1); renderApp(); }
function prevStep() { state.step = Math.max(1, state.step - 1); renderApp(); }
function goToStep(n) { state.step = n; renderApp(); }

// ?? Pi SDK ?몄쬆 ???????????????????????????????????????
Pi.init({ version: '2.0', sandbox: true });

function doLogin() {
  const btn    = document.getElementById('btn-login');
  const errEl  = document.getElementById('login-error');
  btn.disabled = true;
  btn.innerHTML = '?곌껐 以?.. / Connecting...';
  errEl.style.display = 'none';

  Pi.authenticate(['username'], payment => {
    console.warn('誘몄셿猷?寃곗젣:', payment.identifier);
  }).then(auth => {
    const username = auth.user?.username ?? 'Pioneer';
    document.getElementById('header-username').textContent = username;
    document.getElementById('login-screen').style.display  = 'none';
    document.getElementById('app').style.display           = 'block';
    renderApp();
  }).catch(err => {
    btn.disabled = false;
    btn.innerHTML = '?꾨왂 ?쒕??덉씠???쒖옉<br><span class="login-btn-en">Start Strategy Simulation</span>';
    errEl.textContent    = '?곌껐 ?ㅽ뙣. ?ㅼ떆 ?쒕룄?댁＜?몄슂. / Connection failed.';
    errEl.style.display  = 'block';
    console.error(err);
  });
}
