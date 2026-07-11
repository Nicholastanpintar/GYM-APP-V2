const { Receiver } = require('@upstash/qstash');
const { Redis } = require('@upstash/redis');
const webpush = require('web-push');

const redis = Redis.fromEnv();
const receiver = new Receiver({
  currentSigningKey: process.env.QSTASH_CURRENT_SIGNING_KEY,
  nextSigningKey: process.env.QSTASH_NEXT_SIGNING_KEY,
});

const vapidReady = !!process.env.VAPID_PUBLIC_KEY && !!process.env.VAPID_PRIVATE_KEY;
if (vapidReady) {
  webpush.setVapidDetails(
    process.env.VAPID_SUBJECT || 'mailto:admin@example.com',
    process.env.VAPID_PUBLIC_KEY,
    process.env.VAPID_PRIVATE_KEY
  );
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') { res.status(405).json({ error: 'method not allowed' }); return; }
  if (!vapidReady) { res.status(500).json({ error: 'VAPID_PUBLIC_KEY/VAPID_PRIVATE_KEY not configured' }); return; }

  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const rawBody = Buffer.concat(chunks).toString('utf8');

  try {
    const valid = await receiver.verify({ signature: req.headers['upstash-signature'], body: rawBody });
    if (!valid) { res.status(401).json({ error: 'invalid signature' }); return; }
  } catch {
    res.status(401).json({ error: 'signature verification failed' });
    return;
  }

  const { deviceId, title, body, tag } = JSON.parse(rawBody);
  const sub = await redis.get(`sub:${deviceId}`);
  if (!sub) { res.status(200).json({ skipped: true, reason: 'no subscription' }); return; }

  try {
    await webpush.sendNotification(sub, JSON.stringify({ title, body, tag }));
    res.status(200).json({ sent: true });
  } catch (e) {
    if (e.statusCode === 404 || e.statusCode === 410) await redis.del(`sub:${deviceId}`);
    res.status(200).json({ sent: false, error: String(e) });
  }
};

module.exports.config = { api: { bodyParser: false } };
