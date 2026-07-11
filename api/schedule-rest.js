const { Client } = require('@upstash/qstash');

const qstash = new Client({ token: process.env.QSTASH_TOKEN });

module.exports = async (req, res) => {
  if (req.method !== 'POST') { res.status(405).json({ error: 'method not allowed' }); return; }
  const { deviceId, delaySeconds, title, body, tag } = req.body || {};
  const delay = Math.round(delaySeconds);
  if (!deviceId || !delay || delay <= 0) {
    res.status(400).json({ error: 'missing deviceId or delaySeconds' });
    return;
  }

  const base = process.env.PUBLIC_BASE_URL || `https://${req.headers.host}`;

  try {
    const result = await qstash.publishJSON({
      url: `${base}/api/send-rest-push`,
      body: { deviceId, title: title || 'Rest complete', body: body || '', tag: tag || 'apex-rest' },
      delay,
    });
    res.status(200).json({ scheduleId: result.messageId });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
};
