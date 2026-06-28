export default async function handler(req, res) {
  const target = req.query.url;
  if (!target) return res.status(400).json({ error: 'url 파라미터 필요' });

  const allowed = [
    'https://api.mainnet.minepi.com',
    'https://api.testnet.minepi.com',
    'https://horizon.stellar.org',
    'https://horizon.stellar.lobstr.co',
  ];
  if (!allowed.some(a => target.startsWith(a))) {
    return res.status(403).json({ error: '허용되지 않은 URL' });
  }

  try {
    const response = await fetch(target);
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(response.status).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
