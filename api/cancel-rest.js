const { Client } = require('@upstash/qstash');

const qstash = new Client({ token: process.env.QSTASH_TOKEN });

module.exports = async (req, res) => {
  if (req.method !== 'POST') { res.status(405).json({ error: 'method not allowed' }); return; }
  const { scheduleId } = req.body || {};
  if (scheduleId) {
    try { await qstash.messages.delete(scheduleId); } catch { /* already delivered or expired, ignore */ }
  }
  res.status(200).json({ ok: true });
};
