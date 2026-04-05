export const SK = "apex-gym-v4";

export const store = {
  async get(k) {
    try { return localStorage.getItem(k); } catch { return null; }
  },
  async set(k, v) {
    try { localStorage.setItem(k, v); } catch {}
  }
};
