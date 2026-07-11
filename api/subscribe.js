const { Redis } = require('@upstash/redis');

const redis = Redis.fromEnv();
const THIRTY_DAYS = 60 * 60 * 24 * 30;

module.exports = async (req, res) => {
  if (req.method !== 'POST') { res.status(405).json({ error: 'method not allowed' }); return; }
  const { deviceId, subscription } = req.body || {};
  if (!deviceId || !subscription || !subscription.endpoint) {
    res.status(400).json({ error: 'missing deviceId or subscription' });
    return;
  }
  await redis.set(`sub:${deviceId}`, subscription, { ex: THIRTY_DAYS });
  res.status(200).json({ ok: true });
};
