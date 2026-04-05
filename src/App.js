import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { I } from './components/Icons';
import { st, globalCSS } from './styles';
import { RK, BP, SCHEDULES, AUTO_PICKS, TIPS, BDG, FOODS } from './data/constants';
import { EX, TOTAL_EX, FG, fE, e1, gRI, gPR, getRestSec, getSets, suggestW } from './data/exercises';
import { SK, store } from './data/storage';

function ExS({ rid, onSel, sel, clr }) {
  const [q, setQ] = useState("");
  const [f, setF] = useState(false);
  const exs = EX[rid] || [];
  const fil = q.trim() ? exs.filter(e => e.n.toLowerCase().includes(q.toLowerCase())).slice(0, 8) : exs.slice(0, 6);
  return (
    <div style={{ position: "relative", marginBottom: 8 }}>
      <div style={{ display: "flex", alignItems: "center", background: "#1C1C2E", borderRadius: 10, border: "1px solid #2A2A3E", padding: "0 10px" }}>
        <I t="search" s={16} c="#666" />
        <input style={{ flex: 1, background: "transparent", border: "none", padding: "10px 8px", fontSize: 13, color: "#fff", fontFamily: "'Nunito Sans',sans-serif" }}
          placeholder={`Search ${exs.length} exercises...`} value={q} onChange={e => setQ(e.target.value)} onFocus={() => setF(true)} onBlur={() => setTimeout(() => setF(false), 200)} />
      </div>
      {f && fil.length > 0 && (
        <div style={{ position: "absolute", top: "100%", left: 0, right: 0, zIndex: 50, background: "#1C1C2E", border: "1px solid #2A2A3E", borderRadius: 10, marginTop: 4, maxHeight: 200, overflowY: "auto", boxShadow: "0 8px 30px rgba(0,0,0,.5)" }}>
          {fil.map(ex => {
            const is = sel.includes(ex.n);
            return (
              <button key={ex.n} onMouseDown={() => { onSel(ex.n); setQ(""); }}
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: is ? `${clr}18` : "transparent", border: "none", borderBottom: "1px solid #1a1a2a", color: is ? clr : "#ccc", fontSize: 13, cursor: "pointer", fontFamily: "'Nunito Sans',sans-serif", textAlign: "left" }}>
                <span>{is ? "✓ " : ""}{ex.n}</span>
                <span style={{ fontSize: 10, color: "#666", marginLeft: 8 }}>{ex.t === "r" ? "BW" : ex.t === "pace" ? "pace" : "kg"}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function Detail({ data, aR, aI, onBack, lf, sLf, save, sT, subLog, dLog, gER }) {
  const [dt, sDt] = useState("log");
  const en = (data.selectedExercises[aR] || [])[aI];
  const ex = fE(aR, en);
  const ky = `${aR}::${aI}`;
  const logs = (data.logs[ky] || []).sort((a, b) => new Date(b.date) - new Date(a.date));
  const info = gER(aR, aI);
  const rk = RK[info?.rank || 0];
  const bp = BP.find(b => b.rg.some(r => r.id === aR));
  const rg = bp?.rg.find(r => r.id === aR);
  const pr = info?.progress || { p: 0, nt: 0, cur: 0 };
  const isPace = ex?.t === "pace";
  const isLow = ex?.t === "pace_lower";
  const isCV = isPace || isLow;
  const tips = FG[en];

  return (
    <div style={st.sw}>
      <div style={st.hd}>
        <button className="tap" style={st.bb} onClick={onBack}>← Back</button>
        <p style={{ fontSize: 12, color: "#888", fontWeight: 600, marginBottom: 2, display: "flex", alignItems: "center", gap: 4 }}><I t={bp?.i} s={14} c={bp?.c} />{rg?.l}</p>
        <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 22, fontWeight: 700, letterSpacing: 1, color: "#fff" }}>{en}</h2>
        <div style={{ ...st.or, background: `${rk.c}15`, borderColor: `${rk.c}50`, marginTop: 10 }}>
          <span style={{ animation: (info?.rank || 0) >= 3 ? "rankPulse 2s ease infinite" : "none", display: "flex" }}><I t={rk.i} s={28} c={rk.c} /></span>
          <div><p style={{ fontSize: 14, fontWeight: 700, fontFamily: "'Oswald',sans-serif", color: rk.c }}>{rk.l}</p>
            {info?.oneRM > 0 && <p style={{ fontSize: 12, color: "#aaa", marginTop: 2 }}>Best: {info.oneRM}{isPace ? " min/km" : isLow ? " sec" : " kg 1RM"}</p>}</div>
        </div>
        {info?.rank < 7 && info?.oneRM > 0 && (
          <div style={{ marginTop: 8 }}>
            <div style={st.pbo}><div style={{ ...st.pbi, width: `${pr.p * 100}%`, background: rk.c }} /></div>
            <p style={{ fontSize: 12, color: "#888", marginTop: 4, textAlign: "center" }}>
              {isCV ? `${(pr.cur - pr.nt).toFixed(1)} to cut` : `${Math.ceil(pr.nt - pr.cur)} kg to`} {RK[(info?.rank || 0) + 1]?.l}</p>
          </div>
        )}
        <div style={{ display: "flex", gap: 6, marginTop: 12 }}>
          {[["log", "plus", "Log"], ["history", "history", "History"], tips && ["tips", "guide", "Form"]].filter(Boolean).map(([v, ic, lb]) => (
            <button key={v} className="tap" onClick={() => sDt(v)}
              style={{ ...st.pl, ...(dt === v ? { border: "1px solid #FF3B30", background: "#FF3B3015", color: "#FF3B30" } : {}), flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
              <I t={ic} s={13} c={dt === v ? "#FF3B30" : "#888"} />{lb}
            </button>
          ))}
        </div>
      </div>
      <div style={st.sb}>
        {dt === "log" && (
          <div style={{ padding: 16, animation: "fadeIn .3s ease" }}>
            {isPace ? (
              <>
                <div style={st.fg}><label style={st.lb}>Distance (km)</label><input style={st.ib} type="number" step="0.1" placeholder="e.g. 5" value={lf.weight} onChange={e => sLf(f => ({ ...f, weight: e.target.value }))} /></div>
                <div style={st.fg}><label style={st.lb}>Time (minutes)</label><input style={st.ib} type="number" step="0.1" placeholder="e.g. 25" value={lf.reps} onChange={e => sLf(f => ({ ...f, reps: e.target.value }))} /></div>
                <button className="tap" style={st.pb} onClick={() => { const d = parseFloat(lf.weight), t = parseFloat(lf.reps); if (!d || !t || d <= 0 || t <= 0) return; const pace = +(t / d).toFixed(2); save({ ...data, logs: { ...data.logs, [ky]: [...(data.logs[ky] || []), { weight: d, reps: t, oneRM: pace, date: new Date().toISOString(), id: Date.now() }] } }); sLf({ weight: "", reps: "" }); sT("Logged!"); }}>Log Cardio</button>
              </>
            ) : isLow ? (
              <>
                <div style={st.fg}><label style={st.lb}>Time (seconds)</label><input style={st.ib} type="number" placeholder="0" value={lf.weight} onChange={e => sLf(f => ({ ...f, weight: e.target.value }))} /></div>
                <button className="tap" style={st.pb} onClick={() => { const w = parseFloat(lf.weight); if (!w) return; save({ ...data, logs: { ...data.logs, [ky]: [...(data.logs[ky] || []), { weight: w, reps: 1, oneRM: w, date: new Date().toISOString(), id: Date.now() }] } }); sLf({ weight: "", reps: "" }); sT("Logged!"); }}>Log</button>
              </>
            ) : (
              <>
                <div style={st.fg}><label style={st.lb}>Weight (kg)</label><input style={st.ib} type="number" placeholder="0" value={lf.weight} onChange={e => sLf(f => ({ ...f, weight: e.target.value }))} /></div>
                <div style={st.fg}><label style={st.lb}>Reps</label><input style={st.ib} type="number" placeholder="0" value={lf.reps} onChange={e => sLf(f => ({ ...f, reps: e.target.value }))} /></div>
                <button className="tap" style={st.pb} onClick={subLog}>Log Set</button>
                {lf.weight && lf.reps && (() => {
                  const w = parseFloat(lf.weight), r = parseInt(lf.reps);
                  if (!w || !r) return null;
                  const orm = Math.round(e1(w, r) * 10) / 10;
                  const ri = gRI(ex, orm, data.profile.bodyweight, data.profile.gender);
                  const rkp = RK[ri];
                  return (
                    <div style={{ background: "#14141F", border: "1px solid #2A2A3E", borderRadius: 14, padding: "14px 18px", marginTop: 16 }}>
                      <p style={{ fontSize: 11, color: "#666", fontWeight: 700, letterSpacing: 1, marginBottom: 6, textTransform: "uppercase" }}>Preview</p>
                      <p style={{ fontSize: 14, color: "#ccc", marginBottom: 2 }}>Est. 1RM: {orm} kg</p>
                      <p style={{ fontSize: 14, color: "#ccc", display: "flex", alignItems: "center", gap: 4 }}>Rank: <I t={rkp.i} s={16} c={rkp.c} /> {rkp.l}</p>
                    </div>
                  );
                })()}
              </>
            )}
          </div>
        )}
        {dt === "history" && (
          <div style={{ padding: 16, animation: "fadeIn .3s ease" }}>
            {logs.length === 0 ? <p style={{ color: "#555", textAlign: "center", padding: 40 }}>No logs yet.</p> :
              logs.map(log => {
                const ri = gRI(ex, log.oneRM, data.profile.bodyweight, data.profile.gender);
                const rkp = RK[ri];
                return (
                  <div key={log.id} style={st.hc}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div>
                        <p style={{ fontSize: 16, fontWeight: 700, color: "#fff", fontFamily: "'Oswald',sans-serif" }}>
                          {isPace ? `${log.weight}km in ${log.reps}min` : isLow ? `${log.weight} sec` : `${log.weight} kg × ${log.reps} reps`}
                        </p>
                        <p style={{ fontSize: 12, color: "#888", marginTop: 2, display: "flex", alignItems: "center", gap: 3 }}>
                          {!isCV && `1RM: ${log.oneRM} kg · `}<I t={rkp.i} s={12} c={rkp.c} /> {rkp.l}
                        </p>
                      </div>
                      <button className="tap" onClick={e => { e.stopPropagation(); dLog(ky, log.id); }} style={{ background: "none", border: "none", color: "#555", fontSize: 16, padding: "4px 8px" }}>✕</button>
                    </div>
                    <p style={{ fontSize: 11, color: "#555", marginTop: 6 }}>{new Date(log.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}</p>
                  </div>
                );
              })}
            <div style={{ height: 80 }} />
          </div>
        )}
        {dt === "tips" && tips && (
          <div style={{ padding: 16, animation: "fadeIn .3s ease" }}>
            <div style={{ background: "#14141F", borderRadius: 16, padding: 20, border: "1px solid #1E1E2E" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <I t="guide" s={24} c="#AF52DE" />
                <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", fontFamily: "'Oswald',sans-serif", letterSpacing: 1 }}>How to: {en}</p>
              </div>
              {tips.map((tip, i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 28, height: 28, borderRadius: 14, background: "#AF52DE22", border: "1px solid #AF52DE44", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#AF52DE" }}>{i + 1}</span>
                  </div>
                  <p style={{ fontSize: 13, color: "#ccc", lineHeight: 1.5, paddingTop: 4 }}>{tip}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function WorkoutMode({ dayPlan, data, save, onEnd, sT }) {
  const allEx = useMemo(() => {
    const list = [];
    dayPlan.exercises.forEach(g => {
      g.exercises.forEach(en => {
        const rid = g.regionId;
        const idx = (data.selectedExercises[rid] || []).indexOf(en);
        const ex = fE(rid, en);
        const ky = idx >= 0 ? `${rid}::${idx}` : null;
        const logs = ky ? data.logs[ky] || [] : [];
        const isPace = ex?.t === "pace";
        const isLow = ex?.t === "pace_lower";
        const lastW = logs.length > 0 ? Math.max(...logs.map(l => l.weight)) : 0;
        list.push({ name: en, rid, idx, ex, ky, logs, isPace, isLow, isCardio: isPace || isLow, lastWeight: lastW, region: g.region, color: g.color });
      });
    });
    return list;
  }, [dayPlan, data]);

  const [eI, sEI] = useState(0);
  const [phase, sP] = useState("preview");
  const [sN, sSN] = useState(0);
  const [rT, sRT] = useState(0);
  const [rL, sRL] = useState(0);
  const [bW, sBW] = useState("");
  const [bR, sBR] = useState("");
  const [cD, sCD] = useState("");
  const [cT, sCT] = useState("");
  const [skipped, setSk] = useState([]);
  const [startT] = useState(Date.now());
  const [summary, setSm] = useState(null);

  const cur = allEx[eI];
  const nS = cur ? getSets(cur.name) : 3;
  const rest = cur ? getRestSec(cur.name) : 90;
  const wW = cur?.lastWeight ? Math.round(cur.lastWeight * .5 / 2.5) * 2.5 : 0;
  const tW = cur?.lastWeight ? suggestW(cur.logs) : null;
  const tips = cur ? FG[cur.name] : null;

  useEffect(() => {
    if (phase !== "rest") return;
    if (rL <= 0) { sP("working"); sSN(n => n + 1); return; }
    const t = setTimeout(() => sRL(r => r - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, rL]);

  const startEx = () => { if (cur.isCardio) sP("cardio"); else if (cur.lastWeight > 0) sP("warmup"); else { sP("working"); sSN(1); } };

  const logBest = () => {
    let isPR = false;
    if (cur.isCardio) {
      const d = parseFloat(cD), t = parseFloat(cT);
      if (d > 0 && cur.ky) {
        const pace = cur.isPace && t > 0 ? +(t / d).toFixed(2) : d;
        const reps = cur.isPace ? t : 1;
        save({ ...data, logs: { ...data.logs, [cur.ky]: [...(data.logs[cur.ky] || []), { weight: cur.isPace ? d : d, reps, oneRM: pace, date: new Date().toISOString(), id: Date.now() }] } });
      }
    } else {
      const w = parseFloat(bW), r = parseInt(bR);
      if (w > 0 && r > 0 && cur.ky) {
        const orm = Math.round(e1(w, r) * 10) / 10;
        const old = data.logs[cur.ky] || [];
        const ob = old.length > 0 ? Math.max(...old.map(l => l.oneRM)) : 0;
        if (orm > ob && ob > 0) isPR = true;
        save({ ...data, logs: { ...data.logs, [cur.ky]: [...old, { weight: w, reps: r, oneRM: orm, date: new Date().toISOString(), id: Date.now() }] } });
      }
    }
    sT(isPR ? "NEW PR!" : "Logged!");
    nextEx();
  };

  const skipEx = () => { setSk(s => [...s, eI]); nextEx(); };
  const nextEx = () => {
    sBW(""); sBR(""); sCD(""); sCT(""); sSN(0);
    const next = eI + 1;
    if (next >= allEx.length) {
      setSm({ time: Math.round((Date.now() - startT) / 60000), exercises: allEx.length - skipped.length, skipped: skipped.length });
      sP("done");
    } else { sEI(next); sP("preview"); }
  };

  const fmt = s => { const m = Math.floor(s / 60); const sc = s % 60; return `${m}:${sc < 10 ? "0" : ""}${sc}`; };

  if (phase === "done" && summary) return (
    <div style={{ ...st.sw, background: "#0A0A0F" }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32, textAlign: "center" }}>
        <I t="trophy" s={64} c="#FFD700" />
        <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 28, fontWeight: 700, color: "#fff", marginTop: 16, letterSpacing: 2 }}>WORKOUT COMPLETE</h2>
        <div style={{ display: "flex", gap: 20, marginTop: 24 }}>
          <div><p style={{ fontSize: 28, fontWeight: 700, color: "#FF3B30", fontFamily: "'Oswald',sans-serif" }}>{summary.time}</p><p style={{ fontSize: 11, color: "#888" }}>min</p></div>
          <div><p style={{ fontSize: 28, fontWeight: 700, color: "#34C759", fontFamily: "'Oswald',sans-serif" }}>{summary.exercises}</p><p style={{ fontSize: 11, color: "#888" }}>exercises</p></div>
          {summary.skipped > 0 && <div><p style={{ fontSize: 28, fontWeight: 700, color: "#FF9500", fontFamily: "'Oswald',sans-serif" }}>{summary.skipped}</p><p style={{ fontSize: 11, color: "#888" }}>skipped</p></div>}
        </div>
        <p style={{ color: "#888", fontSize: 13, marginTop: 20 }}>Best sets auto-logged.</p>
        <button className="tap" style={{ ...st.pb, marginTop: 24, maxWidth: 280 }} onClick={onEnd}>Done</button>
      </div>
    </div>
  );

  if (!cur) return null;
  const prog = allEx.length > 0 ? (eI / allEx.length * 100) : 0;

  return (
    <div style={{ ...st.sw, background: "#0A0A0F" }}>
      <div style={{ padding: "44px 20px 12px", flexShrink: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <button className="tap" style={{ ...st.bb, marginBottom: 0 }} onClick={onEnd}>End</button>
          <span style={{ fontSize: 11, color: "#888" }}>{eI + 1}/{allEx.length}</span>
        </div>
        <div style={{ width: "100%", height: 3, background: "#1E1E2E", borderRadius: 2, overflow: "hidden" }}><div style={{ height: "100%", width: `${prog}%`, background: "#FF3B30", borderRadius: 2, transition: "width .3s" }} /></div>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "0 20px 40px" }}>
        <div style={{ textAlign: "center", marginBottom: 20, animation: "fadeIn .3s ease" }}>
          <div style={{ display: "inline-flex", padding: "4px 12px", borderRadius: 20, background: `${cur.color}22`, marginBottom: 8 }}><span style={{ fontSize: 11, color: cur.color, fontWeight: 600 }}>{cur.region}</span></div>
          <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 24, fontWeight: 700, color: "#fff", letterSpacing: 1 }}>{cur.name}</h2>
          {cur.lastWeight > 0 && !cur.isCardio && <p style={{ fontSize: 12, color: "#888", marginTop: 4 }}>Last: {cur.lastWeight} kg</p>}
        </div>

        {phase === "preview" && (
          <div style={{ animation: "fadeIn .3s ease", textAlign: "center" }}>
            {!cur.isCardio && <div style={{ background: "#14141F", borderRadius: 16, padding: 20, marginBottom: 12, border: "1px solid #1E1E2E" }}>
              <p style={{ fontSize: 12, color: "#888", fontWeight: 700, letterSpacing: 1, marginBottom: 12, textTransform: "uppercase" }}>Game Plan</p>
              {cur.lastWeight > 0 && <p style={{ fontSize: 14, color: "#FFD700", marginBottom: 6 }}>Warm-up: {wW} kg × 10</p>}
              <p style={{ fontSize: 14, color: "#fff", marginBottom: 6 }}>{nS} sets × 8-12 reps</p>
              {tW && <p style={{ fontSize: 14, color: "#34C759" }}>Target: {tW} kg</p>}
              {!tW && <p style={{ fontSize: 13, color: "#666" }}>Start light</p>}
              <p style={{ fontSize: 12, color: "#555", marginTop: 8 }}>Rest: {rest}s</p>
            </div>}
            {tips && <div style={{ background: "#14141F", borderRadius: 16, padding: 16, marginBottom: 12, border: "1px solid #1E1E2E", textAlign: "left" }}>
              <p style={{ fontSize: 11, color: "#AF52DE", fontWeight: 700, letterSpacing: 1, marginBottom: 8, textTransform: "uppercase" }}>Form Tips</p>
              {tips.slice(0, 3).map((tip, i) => <p key={i} style={{ fontSize: 12, color: "#aaa", marginBottom: 4, paddingLeft: 8 }}>· {tip}</p>)}
            </div>}
            {cur.isCardio && <div style={{ background: "#14141F", borderRadius: 16, padding: 20, marginBottom: 12, border: "1px solid #1E1E2E" }}><p style={{ fontSize: 14, color: "#FF375F" }}>Cardio — do session, then log</p></div>}
            <div style={{ display: "flex", gap: 8 }}>
              <button className="tap" style={{ ...st.pb, flex: 1 }} onClick={startEx}>Start</button>
              <button className="tap" style={{ ...st.pb, flex: 0, padding: "14px 20px", background: "#1C1C2E", border: "1px solid #2A2A3E" }} onClick={skipEx}>Skip</button>
            </div>
          </div>
        )}
        {phase === "warmup" && <div style={{ animation: "fadeIn .3s ease", textAlign: "center" }}><div style={{ background: "linear-gradient(135deg,#FFD70015,#FFD70030)", border: "1px solid #FFD70040", borderRadius: 16, padding: 24, marginBottom: 16 }}><p style={{ fontSize: 12, color: "#FFD700", fontWeight: 700, textTransform: "uppercase", marginBottom: 8 }}>Warm-up</p><p style={{ fontSize: 36, fontWeight: 700, color: "#fff", fontFamily: "'Oswald',sans-serif" }}>{wW} kg</p><p style={{ fontSize: 16, color: "#ccc", marginTop: 4 }}>× 10 reps</p></div><button className="tap" style={st.pb} onClick={() => { sP("working"); sSN(1); }}>Start Working Sets</button></div>}
        {phase === "working" && <div style={{ animation: "fadeIn .3s ease", textAlign: "center" }}><div style={{ background: "linear-gradient(135deg,#FF3B3015,#FF3B3030)", border: "1px solid #FF3B3040", borderRadius: 16, padding: 24, marginBottom: 16 }}><p style={{ fontSize: 12, color: "#FF3B30", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>Set {sN}/{nS}</p>{tW ? <p style={{ fontSize: 40, fontWeight: 700, color: "#fff", fontFamily: "'Oswald',sans-serif" }}>{tW} kg</p> : <p style={{ fontSize: 20, color: "#ccc" }}>Your weight</p>}<p style={{ fontSize: 16, color: "#ccc", marginTop: 4 }}>× 8-12 reps</p></div><button className="tap" style={st.pb} onClick={() => { if (sN >= nS) sP("bestset"); else { sRT(rest); sRL(rest); sP("rest"); } }}>{sN >= nS ? "Finish" : "Set Done"}</button></div>}
        {phase === "rest" && <div style={{ animation: "fadeIn .3s ease", textAlign: "center" }}><div style={{ background: "#14141F", borderRadius: 16, padding: 32, marginBottom: 16, border: "1px solid #1E1E2E" }}><p style={{ fontSize: 12, color: "#888", fontWeight: 700, textTransform: "uppercase", marginBottom: 8 }}>Rest</p><p style={{ fontSize: 56, fontWeight: 700, color: rL <= 10 ? "#FF3B30" : "#fff", fontFamily: "'Oswald',sans-serif" }}>{fmt(rL)}</p><div style={{ width: "100%", height: 4, background: "#1E1E2E", borderRadius: 2, marginTop: 12, overflow: "hidden" }}><div style={{ height: "100%", width: `${(rL / rT) * 100}%`, background: rL <= 10 ? "#FF3B30" : "#34C759", borderRadius: 2, transition: "width 1s linear" }} /></div></div><button className="tap" style={{ ...st.pb, background: "#1C1C2E", border: "1px solid #2A2A3E" }} onClick={() => { sP("working"); sSN(n => n + 1); }}>Skip Rest</button></div>}
        {phase === "cardio" && <div style={{ animation: "fadeIn .3s ease" }}><div style={{ background: "#14141F", borderRadius: 16, padding: 20, marginBottom: 16, border: "1px solid #1E1E2E" }}><p style={{ fontSize: 12, color: "#FF375F", fontWeight: 700, letterSpacing: 1, marginBottom: 12, textTransform: "uppercase" }}>Log Cardio</p>{cur.isPace ? (<><div style={st.fg}><label style={st.lb}>Distance (km)</label><input style={st.ib} type="number" step="0.1" value={cD} onChange={e => sCD(e.target.value)} /></div><div style={st.fg}><label style={st.lb}>Time (min)</label><input style={st.ib} type="number" step="0.1" value={cT} onChange={e => sCT(e.target.value)} /></div></>) : (<div style={st.fg}><label style={st.lb}>{cur.isLow ? "Seconds" : "Value"}</label><input style={st.ib} type="number" value={cD} onChange={e => sCD(e.target.value)} /></div>)}</div><div style={{ display: "flex", gap: 8 }}><button className="tap" style={{ ...st.pb, flex: 1 }} onClick={logBest}>Log</button><button className="tap" style={{ ...st.pb, flex: 0, padding: "14px 20px", background: "#1C1C2E", border: "1px solid #2A2A3E" }} onClick={skipEx}>Skip</button></div></div>}
        {phase === "bestset" && <div style={{ animation: "fadeIn .3s ease" }}><div style={{ background: "#14141F", borderRadius: 16, padding: 20, marginBottom: 16, border: "1px solid #1E1E2E" }}><p style={{ fontSize: 12, color: "#34C759", fontWeight: 700, letterSpacing: 1, marginBottom: 12, textTransform: "uppercase" }}>Best Set</p><div style={st.fg}><label style={st.lb}>Weight (kg)</label><input style={st.ib} type="number" value={bW} onChange={e => sBW(e.target.value)} /></div><div style={st.fg}><label style={st.lb}>Reps</label><input style={st.ib} type="number" value={bR} onChange={e => sBR(e.target.value)} /></div>{bW && bR && <p style={{ fontSize: 14, color: "#34C759", textAlign: "center" }}>1RM: {Math.round(e1(parseFloat(bW), parseInt(bR)) * 10) / 10} kg</p>}</div><div style={{ display: "flex", gap: 8 }}><button className="tap" style={{ ...st.pb, flex: 1 }} onClick={logBest}>Save</button><button className="tap" style={{ ...st.pb, flex: 0, padding: "14px 20px", background: "#1C1C2E", border: "1px solid #2A2A3E" }} onClick={nextEx}>Skip</button></div></div>}
      </div>
    </div>
  );
}

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [screen, setScreen] = useState("onb");
  const [aR, sAR] = useState(null);
  const [aI, sAI] = useState(null);
  const [lf, sLf] = useState({ weight: "", reps: "" });
  const [toast, setToast] = useState(null);
  const [expBP, sExpBP] = useState(null);
  const [pf, sPf] = useState({ name: "", bodyweight: "", gender: "male" });
  const [alex, sAlex] = useState(null);
  const [tab, sTab] = useState("dash");
  const [autoMode, sAutoMode] = useState(null);
  const [focusMuscles, sFocus] = useState([]);
  const [schedDays, sSchedDays] = useState(4);
  const [workoutDay, sWorkoutDay] = useState(null);
  const [proteinLog, sProteinLog] = useState([]);
  const [foodSearch, sFoodSearch] = useState("");
  const [customP, sCustomP] = useState({ name: "", protein: "" });
  const [prCeleb, sPrCeleb] = useState(null);
  const [editDay, sEditDay] = useState(null); // which day index is being edited
  const [customSched, sCustomSched] = useState(null); // user's custom schedule

  useEffect(() => { (async () => { try { const r = await store.get(SK); if (r) { const d = JSON.parse(r); setData(d); if (d.profile) setScreen("main"); if (d.customSchedule) sCustomSched(d.customSchedule); } else setData({ profile: null, selectedExercises: {}, logs: {} }); } catch { setData({ profile: null, selectedExercises: {}, logs: {} }); } setLoading(false); })(); }, []);
  useEffect(() => { if (screen === "main" && !alex) sAlex(TIPS[Math.floor(Math.random() * TIPS.length)]); }, [screen, alex]);

  const save = useCallback(async d => { setData(d); try { await store.set(SK, JSON.stringify(d)); } catch (e) { console.error(e); } }, []);
  const sT = m => { setToast(m); setTimeout(() => setToast(null), 2200); };

  const doAutoSelect = (fids) => { const sel = {}; for (const bp of BP) for (const rg of bp.rg) { const picks = AUTO_PICKS[rg.id] || []; const isF = fids.some(fid => { const fbp = BP.find(b => b.id === fid); return fbp?.rg.some(r => r.id === rg.id); }); sel[rg.id] = isF ? picks.slice(0, 3) : picks.slice(0, 1); } return sel; };

  const subP = () => { if (!pf.name.trim() || !pf.bodyweight) return; if (autoMode === null) { sAutoMode("ask"); return; } let selEx = data?.selectedExercises || {}; if (autoMode === "auto") selEx = doAutoSelect(focusMuscles); save({ ...data, profile: { name: pf.name.trim(), bodyweight: parseFloat(pf.bodyweight), gender: pf.gender }, selectedExercises: selEx, logs: data?.logs || {} }); setScreen("main"); sTab(autoMode === "auto" ? "dash" : "setup"); sT("Saved!"); sAutoMode(null); };

  const togEx = (rid, nm) => { const cur = data.selectedExercises[rid] || []; if (cur.includes(nm)) save({ ...data, selectedExercises: { ...data.selectedExercises, [rid]: cur.filter(e => e !== nm) } }); else { if (cur.length >= 3) { sT("Max 3!"); return; } save({ ...data, selectedExercises: { ...data.selectedExercises, [rid]: [...cur, nm] } }); } };

  const subLog = () => { const w = parseFloat(lf.weight), r = parseInt(lf.reps); if (!w || !r || w <= 0 || r <= 0) return; const ky = `${aR}::${aI}`; const orm = Math.round(e1(w, r) * 10) / 10; const old = data.logs[ky] || []; const ob = old.length > 0 ? Math.max(...old.map(l => l.oneRM)) : 0; save({ ...data, logs: { ...data.logs, [ky]: [...old, { weight: w, reps: r, oneRM: orm, date: new Date().toISOString(), id: Date.now() }] } }); sLf({ weight: "", reps: "" }); if (orm > ob && ob > 0) { const nm = (data.selectedExercises[aR] || [])[aI]; sPrCeleb({ exercise: nm, oldPR: ob, newPR: orm }); setTimeout(() => sPrCeleb(null), 4000); sT("NEW PR!"); } else sT("Logged!"); };

  const dLog = (ky, id) => { save({ ...data, logs: { ...data.logs, [ky]: (data.logs[ky] || []).filter(l => l.id !== id) } }); sT("Removed"); };

  const gER = useCallback((rid, idx) => { const nm = (data?.selectedExercises[rid] || [])[idx]; if (!nm) return null; const ex = fE(rid, nm); if (!ex) return null; const ky = `${rid}::${idx}`; const logs = data.logs[ky] || []; if (logs.length === 0) return { rank: 0, oneRM: 0, exercise: ex, logs: [], progress: { p: 0, nt: 0, cur: 0 } }; const il = ex.t === "pace" || ex.t === "pace_lower"; const best = il ? Math.min(...logs.map(l => l.oneRM)) : Math.max(...logs.map(l => l.oneRM)); return { rank: gRI(ex, best, data.profile.bodyweight, data.profile.gender), oneRM: best, exercise: ex, logs, progress: gPR(ex, best, data.profile.bodyweight, data.profile.gender) }; }, [data]);

  const gOR = () => { let t = 0, c = 0; for (const bp of BP) for (const rg of bp.rg) { const exs = data.selectedExercises[rg.id] || []; if (exs.length > 0) { let b = 0; for (let j = 0; j < exs.length; j++) { const inf = gER(rg.id, j); if (inf && inf.rank > b) b = inf.rank; } t += b; c++; } } return c > 0 ? Math.round(t / c) : 0; };

  const hasEx = data?.selectedExercises && Object.values(data.selectedExercises).some(r => r.length > 0);
  const earned = useMemo(() => data?.profile ? BDG.filter(b => b.ck(data)).map(b => b.id) : [], [data]);

  const streak = useMemo(() => { if (!data?.logs) return 0; const ad = []; Object.values(data.logs).forEach(l => l.forEach(e => { if (e.date) ad.push(new Date(e.date)); })); if (ad.length === 0) return 0; const now = new Date(); const gW = d => { const s = new Date(d); s.setHours(0, 0, 0, 0); s.setDate(s.getDate() - s.getDay()); return s.toISOString().slice(0, 10); }; const wks = new Set(ad.map(d => gW(d))); let c = 0; const cd = new Date(now); for (let i = 0; i < 52; i++) { if (wks.has(gW(cd))) c++; else if (i > 0) break; cd.setDate(cd.getDate() - 7); } return c; }, [data]);

  const plateaus = useMemo(() => { if (!data?.logs || !data?.profile) return []; const res = []; const twa = Date.now() - 21 * 24 * 60 * 60 * 1000; for (const bp of BP) for (const rg of bp.rg) { (data.selectedExercises[rg.id] || []).forEach((nm, j) => { const ky = `${rg.id}::${j}`; const logs = data.logs[ky] || []; if (logs.length < 4) return; const sorted = [...logs].sort((a, b) => new Date(a.date) - new Date(b.date)); const recent = sorted.filter(l => new Date(l.date).getTime() > twa); const older = sorted.filter(l => new Date(l.date).getTime() <= twa); if (recent.length < 2 || older.length < 1) return; if (Math.max(...recent.map(l => l.oneRM)) <= Math.max(...older.map(l => l.oneRM))) res.push({ name: nm, best: Math.max(...recent.map(l => l.oneRM)), color: bp.c }); }); } return res; }, [data]);

  const schedule = useMemo(() => { if (customSched) return customSched; if (!data?.selectedExercises) return null; const tmpl = SCHEDULES[schedDays]; if (!tmpl) return null; return tmpl.days.map((dn, i) => { const regions = tmpl.map[i]; const exercises = regions.map(rid => { const sel = data.selectedExercises[rid] || []; if (sel.length === 0) return null; const bp = BP.find(b => b.rg.some(r => r.id === rid)); const rg = bp?.rg.find(r => r.id === rid); return { region: rg?.l || rid, regionId: rid, exercises: sel, color: bp?.c || "#888" }; }).filter(Boolean); return { name: dn, exercises }; }); }, [data?.selectedExercises, schedDays, customSched]);

  if (loading) return (<div style={st.ls}><div style={{ animation: "pulse 1.5s ease infinite", display: "flex" }}><I t="dumbbell" s={48} c="#FF3B30" /></div><p style={{ color: "#666", marginTop: 12, fontSize: 14 }}>Loading APEX... ({TOTAL_EX} exercises)</p></div>);

  return (
    <div style={st.app}>
      <style>{globalCSS}</style>
      {toast && <div style={st.to}>{toast}</div>}
      {prCeleb && <div style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,0.85)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", animation: "fadeIn .3s ease" }} onClick={() => sPrCeleb(null)}><div style={{ animation: "pulse 1s ease infinite", marginBottom: 16 }}><I t="trophy" s={80} c="#FFD700" /></div><h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 32, fontWeight: 700, color: "#FFD700", letterSpacing: 3 }}>NEW PR!</h2><p style={{ fontSize: 18, color: "#fff", fontWeight: 600, marginTop: 8 }}>{prCeleb.exercise}</p><div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 12 }}><div style={{ textAlign: "center" }}><p style={{ fontSize: 14, color: "#888" }}>Old</p><p style={{ fontSize: 24, fontWeight: 700, color: "#888", fontFamily: "'Oswald',sans-serif" }}>{prCeleb.oldPR} kg</p></div><span style={{ fontSize: 24, color: "#34C759" }}>→</span><div style={{ textAlign: "center" }}><p style={{ fontSize: 14, color: "#34C759" }}>New</p><p style={{ fontSize: 32, fontWeight: 700, color: "#34C759", fontFamily: "'Oswald',sans-serif" }}>{prCeleb.newPR} kg</p></div></div><p style={{ fontSize: 11, color: "#555", marginTop: 20 }}>Tap to close</p></div>}

      {/* ONBOARDING */}
      {screen === "onb" && (
        <div style={st.sw}><div style={{ padding: "50px 24px 40px", display: "flex", flexDirection: "column", gap: 16, animation: "fadeIn .5s ease", overflowY: "auto", flex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 12 }}><div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}><I t="dumbbell" s={52} c="#FF3B30" /></div><h1 style={{ fontFamily: "'Oswald',sans-serif", fontSize: 38, fontWeight: 700, letterSpacing: 4, color: "#fff" }}>APEX<span style={{ color: "#FF3B30" }}> GYM</span></h1><p style={{ color: "#888", fontSize: 12, letterSpacing: 2, marginTop: 4 }}>{TOTAL_EX} exercises · 8 ranks</p></div>
          <div style={st.fg}><label style={st.lb}>Name</label><input style={st.ip} placeholder="e.g. Rian" value={pf.name} onChange={e => sPf(p => ({ ...p, name: e.target.value }))} /></div>
          <div style={st.fg}><label style={st.lb}>Bodyweight (kg)</label><input style={st.ip} type="number" placeholder="75" value={pf.bodyweight} onChange={e => sPf(p => ({ ...p, bodyweight: e.target.value }))} /></div>
          <div style={st.fg}><label style={st.lb}>Gender</label><div style={{ display: "flex", gap: 10 }}>{["male", "female"].map(g => <button key={g} className="tap" onClick={() => sPf(p => ({ ...p, gender: g }))} style={{ ...st.gb, ...(pf.gender === g ? { background: "#FF3B30", color: "#fff", borderColor: "#FF3B30" } : {}) }}>{g === "male" ? "♂ Male" : "♀ Female"}</button>)}</div></div>
          {autoMode === "ask" && <div style={{ animation: "fadeIn .3s ease" }}><p style={{ ...st.lb, marginBottom: 8 }}>Exercise Selection</p><button className="tap" style={{ ...st.pb, marginBottom: 8, background: "linear-gradient(135deg,#34C759,#30B350)" }} onClick={() => { sAutoMode("auto"); sFocus([]); }}>Auto-Pick (Recommended)</button><button className="tap" style={{ ...st.pb, background: "#1C1C2E", border: "1px solid #2A2A3E" }} onClick={() => sAutoMode("manual")}>Choose Myself</button></div>}
          {autoMode === "auto" && <div style={{ animation: "fadeIn .3s ease" }}><p style={{ ...st.lb, marginBottom: 8 }}>Focus muscles? (optional)</p><div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>{BP.filter(b => b.id !== "cardio").map(bp => { const is = focusMuscles.includes(bp.id); return <button key={bp.id} className="tap" onClick={() => sFocus(f => is ? f.filter(x => x !== bp.id) : [...f, bp.id])} style={{ padding: "8px 14px", borderRadius: 12, border: `1px solid ${is ? bp.c : "#2A2A3E"}`, background: is ? `${bp.c}22` : "#1C1C2E", color: is ? bp.c : "#888", fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}><I t={bp.i} s={16} c={is ? bp.c : "#666"} />{bp.l}</button>; })}</div></div>}
          {(autoMode === "auto" || autoMode === "manual") && <button className="tap" style={st.pb} onClick={subP}>Let's Go</button>}
          {autoMode === null && <button className="tap" style={st.pb} onClick={() => { if (!pf.name.trim() || !pf.bodyweight) { sT("Fill in all fields!"); return; } sAutoMode("ask"); }}>Next</button>}
        </div></div>
      )}

      {/* MAIN */}
      {screen === "main" && (
        <div style={st.sw}>
          <div style={st.hd}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}><div><h2 style={st.ht}>Hey {data.profile?.name}</h2><p style={st.hs}>{data.profile?.bodyweight}kg · {data.profile?.gender === "male" ? "♂" : "♀"}</p></div><button className="tap" style={st.sm} onClick={() => { sPf({ name: data.profile.name, bodyweight: String(data.profile.bodyweight), gender: data.profile.gender }); sAutoMode(null); setScreen("onb"); }}>Edit</button></div>
            {hasEx && (() => { const o = gOR(); const r = RK[o]; return <div style={{ ...st.or, background: `linear-gradient(135deg,${r.c}15,${r.c}30)`, borderColor: `${r.c}60` }}><span style={{ animation: o >= 3 ? "rankPulse 2s ease infinite" : "none", display: "flex" }}><I t={r.i} s={32} c={r.c} /></span><div><p style={{ fontSize: 11, fontWeight: 700, color: r.c, letterSpacing: 1, textTransform: "uppercase" }}>Overall Rank</p><p style={{ fontSize: 20, fontWeight: 700, fontFamily: "'Oswald',sans-serif", color: "#fff" }}>{r.l}</p></div></div>; })()}
          </div>
          <div style={{ display: "flex", gap: 4, padding: "8px 12px 4px", flexShrink: 0, overflowX: "auto" }}>
            {[["dash", "chart", "Progress"], ["setup", "gear", "Exercises"], ["sched", "cal", "Schedule"], ["protein", "food", "Protein"], ["badges", "badge", "Badges"]].map(([v, ic, lb]) =>
              <button key={v} className="tap" onClick={() => sTab(v)} style={{ ...st.pl, ...(tab === v ? { border: "1px solid #FF3B30", background: "#FF3B3015", color: "#FF3B30" } : {}), flex: "1 0 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: 4, whiteSpace: "nowrap", padding: "8px 10px" }}><I t={ic} s={12} c={tab === v ? "#FF3B30" : "#888"} /><span style={{ fontSize: 11 }}>{lb}</span></button>
            )}
          </div>
          <div style={st.sb}>
            {/* ALEX */}
            {tab === "dash" && alex && <div style={{ margin: "8px 16px 12px", padding: "12px 14px", background: "linear-gradient(135deg,#1C1C2E,#22223A)", borderRadius: 14, border: "1px solid #2A2A3E", display: "flex", gap: 10, alignItems: "flex-start", animation: "fadeIn .4s ease" }}><div style={{ flexShrink: 0 }}><I t="alex" s={28} c="#FF375F" /></div><div style={{ flex: 1 }}><p style={{ fontSize: 10, fontWeight: 700, color: "#FF375F", letterSpacing: 1, marginBottom: 3, fontFamily: "'Oswald',sans-serif" }}>ALEX</p><p style={{ fontSize: 12, color: "#ccc", lineHeight: 1.4 }}>{alex}</p></div><button onClick={() => sAlex(null)} style={{ background: "none", border: "none", color: "#555", fontSize: 14, cursor: "pointer" }}>✕</button></div>}

            {/* STREAK + PLATEAU */}
            {tab === "dash" && hasEx && <div style={{ padding: "0 16px 8px", display: "flex", gap: 8, animation: "fadeIn .3s ease" }}><div style={{ flex: 1, background: "#14141F", borderRadius: 12, padding: "12px", border: "1px solid #1E1E2E", textAlign: "center" }}><p style={{ fontSize: 28, fontWeight: 700, color: streak >= 4 ? "#FF3B30" : streak >= 2 ? "#FF9500" : "#888", fontFamily: "'Oswald',sans-serif" }}>{streak}</p><p style={{ fontSize: 10, color: "#888", fontWeight: 600 }}>week streak</p></div><div style={{ flex: 1, background: "#14141F", borderRadius: 12, padding: "12px", border: "1px solid #1E1E2E", textAlign: "center" }}><p style={{ fontSize: 28, fontWeight: 700, color: "#34C759", fontFamily: "'Oswald',sans-serif" }}>{Object.values(data.logs || {}).reduce((a, l) => a + l.length, 0)}</p><p style={{ fontSize: 10, color: "#888", fontWeight: 600 }}>total logs</p></div></div>}
            {tab === "dash" && plateaus.length > 0 && <div style={{ padding: "0 16px 8px" }}><div style={{ background: "linear-gradient(135deg,#FF950015,#FF950025)", border: "1px solid #FF950040", borderRadius: 12, padding: "12px 14px" }}><p style={{ fontSize: 11, fontWeight: 700, color: "#FF9500", letterSpacing: 1, marginBottom: 6, textTransform: "uppercase" }}>Plateau Alert</p>{plateaus.slice(0, 3).map((p, i) => <div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}><span style={{ fontSize: 12, color: "#ccc" }}>{p.name}</span><span style={{ fontSize: 11, color: "#FF9500" }}>Stuck at {p.best} kg</span></div>)}<p style={{ fontSize: 11, color: "#888", marginTop: 6 }}>Try changing variation or rep range.</p></div></div>}

            {/* DASHBOARD */}
            {tab === "dash" && (
              <div style={{ animation: "fadeIn .3s ease" }}>
                {!hasEx ? <div style={{ textAlign: "center", padding: "60px 20px" }}><I t="dumbbell" s={48} c="#333" /><p style={{ color: "#555", marginTop: 16, fontSize: 14 }}>No exercises selected.</p><button className="tap" style={{ ...st.pb, marginTop: 16, maxWidth: 200 }} onClick={() => sTab("setup")}>Choose Exercises</button></div> :
                  BP.map(bp => {
                    const rds = bp.rg.map(rg => ({ rg, exs: (data.selectedExercises[rg.id] || []).map((nm, j) => ({ nm, j, rid: rg.id, inf: gER(rg.id, j) })) })).filter(r => r.exs.length > 0);
                    if (rds.length === 0) return null;
                    return <div key={bp.id} style={{ padding: "4px 16px 8px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}><I t={bp.i} s={18} c={bp.c} /><span style={{ fontFamily: "'Oswald',sans-serif", fontSize: 16, fontWeight: 600, letterSpacing: 1, color: bp.c }}>{bp.l}</span></div>
                      {rds.map(rd => <div key={rd.rg.id}><p style={st.rt}>{rd.rg.l}</p>
                        {rd.exs.map(ex => {
                          const inf = ex.inf; const rk = RK[inf?.rank || 0]; const pr = inf?.progress || { p: 0 }; const lc = inf?.logs?.length || 0;
                          return <div key={`${ex.rid}-${ex.j}`} style={st.ec} className="tap" onClick={() => { sAR(ex.rid); sAI(ex.j); setScreen("detail"); }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                              <div style={{ display: "flex", alignItems: "center", gap: 8 }}><I t={rk.i} s={20} c={rk.c} /><div><p style={st.en}>{ex.nm}</p><p style={{ fontSize: 10, color: "#888", fontWeight: 600, marginTop: 1 }}>{rk.l}</p></div></div>
                              <div style={{ textAlign: "right" }}>{inf?.oneRM > 0 && <p style={st.eo}>{inf.oneRM}<span style={{ fontSize: 10, color: "#888" }}> kg</span></p>}<p style={{ fontSize: 10, color: "#666" }}>{lc} log{lc !== 1 ? "s" : ""}</p></div>
                            </div>
                            <div style={st.pbo}><div style={{ ...st.pbi, width: `${pr.p * 100}%`, background: rk.c }} /></div>
                            {inf?.logs?.length > 1 && (() => { const sorted = [...inf.logs].sort((a, b) => new Date(a.date) - new Date(b.date)).slice(-8); const mx = Math.max(...sorted.map(l => l.oneRM)); const mn = Math.min(...sorted.map(l => l.oneRM)); const rng = mx - mn || 1; const w = sorted.length * 28; return <svg viewBox={`0 0 ${w} 28`} style={{ width: "100%", height: 28, marginTop: 6 }}><polyline points={sorted.map((l, j) => `${j * 28 + 14},${24 - ((l.oneRM - mn) / rng) * 20}`).join(" ")} fill="none" stroke={bp.c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />{sorted.map((l, j) => <circle key={j} cx={j * 28 + 14} cy={24 - ((l.oneRM - mn) / rng) * 20} r="2.5" fill={bp.c} />)}</svg>; })()}
                          </div>;
                        })}
                      </div>)}
                    </div>;
                  })
                }
                <div style={{ padding: "20px 16px 100px", textAlign: "center" }}><button className="tap" style={st.db} onClick={async () => { await save({ profile: null, selectedExercises: {}, logs: {} }); setScreen("onb"); sAutoMode(null); sT("Reset!"); }}>Reset All Data</button></div>
              </div>
            )}

            {/* SETUP */}
            {tab === "setup" && <div style={{ animation: "fadeIn .3s ease" }}><p style={{ padding: "8px 16px 4px", fontSize: 12, color: "#888" }}>{TOTAL_EX} exercises · 1-3 per region</p>
              {BP.map(bp => <div key={bp.id} style={{ marginBottom: 4 }}>
                <button className="tap" style={{ ...st.ba, borderLeftColor: bp.c }} onClick={() => sExpBP(expBP === bp.id ? null : bp.id)}>
                  <span style={{ display: "flex", alignItems: "center", gap: 8 }}><I t={bp.i} s={20} c={bp.c} /><span style={{ fontFamily: "'Oswald',sans-serif", letterSpacing: 1, fontSize: 16 }}>{bp.l}</span></span>
                  <span style={{ fontSize: 10, color: "#666", transition: "transform .2s", transform: expBP === bp.id ? "rotate(180deg)" : "rotate(0)" }}>▼</span>
                </button>
                {expBP === bp.id && <div style={{ background: "#0E0E18", padding: "8px 16px 12px" }}>
                  {bp.rg.map(rg => { const sel = data.selectedExercises[rg.id] || []; return <div key={rg.id} style={{ marginBottom: 12 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}><span style={{ fontSize: 12, fontWeight: 700, color: "#aaa" }}>{rg.l}</span><span style={{ fontSize: 11, color: "#666" }}>{sel.length}/3 · {(EX[rg.id] || []).length} avail</span></div>
                    <ExS rid={rg.id} onSel={n => togEx(rg.id, n)} sel={sel} clr={bp.c} />
                    {sel.length > 0 && <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 4 }}>{sel.map(n => <span key={n} className="tap" onClick={() => togEx(rg.id, n)} style={{ padding: "4px 10px", borderRadius: 14, background: `${bp.c}22`, color: bp.c, fontSize: 11, fontWeight: 600, border: `1px solid ${bp.c}44` }}>✓ {n} ✕</span>)}</div>}
                  </div>; })}
                </div>}
              </div>)}
              <div style={{ height: 100 }} />
            </div>}

            {/* SCHEDULE */}
            {tab === "sched" && <div style={{ padding: 16, animation: "fadeIn .3s ease" }}>
              {editDay === null ? (<>
                <p style={{ fontSize: 12, color: "#888", marginBottom: 8 }}>Tap START to workout, EDIT to customize</p>
                <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                  {[3, 4, 5, 6].map(d => <button key={d} className="tap" onClick={() => { sSchedDays(d); sCustomSched(null); }} style={{ ...st.pl, ...(schedDays === d && !customSched ? { border: "1px solid #FF3B30", background: "#FF3B3015", color: "#FF3B30" } : {}), flex: 1, textAlign: "center" }}>{d}d</button>)}
                </div>
                {customSched && <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                  <span style={{ fontSize: 11, color: "#34C759", flex: 1, display: "flex", alignItems: "center" }}>Custom schedule active</span>
                  <button className="tap" onClick={() => { sCustomSched(null); save({ ...data, customSchedule: null }); sT("Reset to template"); }} style={{ ...st.db, fontSize: 10 }}>Reset</button>
                </div>}
                {!hasEx ? <p style={{ color: "#555", textAlign: "center", padding: 40 }}>Select exercises first!</p> :
                  schedule && schedule.map((day, i) => <div key={i} style={{ background: "#14141F", borderRadius: 14, padding: "14px 16px", marginBottom: 8, border: "1px solid #1E1E2E" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                      <p style={{ fontFamily: "'Oswald',sans-serif", fontSize: 15, fontWeight: 700, color: "#fff", letterSpacing: 1 }}>Day {i + 1}: {day.name}</p>
                      <div style={{ display: "flex", gap: 6 }}>
                        <button className="tap" onClick={() => sEditDay(i)} style={{ padding: "6px 12px", borderRadius: 10, background: "#1C1C2E", border: "1px solid #2A2A3E", color: "#888", fontSize: 11, fontWeight: 600 }}>EDIT</button>
                        {day.exercises.length > 0 && <button className="tap" onClick={() => { sWorkoutDay(i); setScreen("workout"); }} style={{ padding: "6px 14px", borderRadius: 10, background: "linear-gradient(135deg,#34C759,#30B350)", border: "none", color: "#fff", fontSize: 11, fontWeight: 700, fontFamily: "'Oswald',sans-serif", letterSpacing: 1 }}>START</button>}
                      </div>
                    </div>
                    {day.exercises.length === 0 ? <p style={{ fontSize: 12, color: "#555" }}>No exercises — tap EDIT to add</p> : day.exercises.map((g, j) => <div key={j} style={{ marginBottom: 6 }}><p style={{ fontSize: 11, color: g.color, fontWeight: 700, letterSpacing: .5, marginBottom: 2 }}>{g.region}</p>{g.exercises.map(e => <p key={e} style={{ fontSize: 13, color: "#ccc", paddingLeft: 8, marginBottom: 1 }}>· {e}</p>)}</div>)}
                  </div>)}
                <div style={{ marginTop: 8 }}>
                  <button className="tap" onClick={() => {
                    const base = schedule || [];
                    const newSched = [...base, { name: `Day ${base.length + 1}`, exercises: [] }];
                    sCustomSched(newSched);
                    save({ ...data, customSchedule: newSched });
                  }} style={{ ...st.pb, background: "#1C1C2E", border: "1px solid #2A2A3E", fontSize: 13, padding: 10 }}>+ Add Day</button>
                </div>
              </>) : (<>
                {/* EDIT DAY VIEW */}
                {(() => {
                  const curSched = customSched || schedule || [];
                  const day = curSched[editDay];
                  if (!day) return null;
                  const allSelExercises = [];
                  for (const bp of BP) for (const rg of bp.rg) {
                    const sel = data.selectedExercises[rg.id] || [];
                    sel.forEach(nm => {
                      const alreadyIn = day.exercises.some(g => g.exercises.includes(nm));
                      allSelExercises.push({ nm, rid: rg.id, region: rg.l, color: bp.c, alreadyIn });
                    });
                  }
                  const addEx = (nm, rid) => {
                    const bp = BP.find(b => b.rg.some(r => r.id === rid));
                    const rg = bp?.rg.find(r => r.id === rid);
                    const newDay = { ...day };
                    const existing = newDay.exercises.find(g => g.regionId === rid);
                    if (existing) {
                      if (!existing.exercises.includes(nm)) existing.exercises = [...existing.exercises, nm];
                    } else {
                      newDay.exercises = [...newDay.exercises, { region: rg?.l || rid, regionId: rid, exercises: [nm], color: bp?.c || "#888" }];
                    }
                    const newSched = [...curSched]; newSched[editDay] = newDay;
                    sCustomSched(newSched); save({ ...data, customSchedule: newSched });
                  };
                  const rmEx = (nm, rid) => {
                    const newDay = { ...day };
                    newDay.exercises = newDay.exercises.map(g => g.regionId === rid ? { ...g, exercises: g.exercises.filter(e => e !== nm) } : g).filter(g => g.exercises.length > 0);
                    const newSched = [...curSched]; newSched[editDay] = newDay;
                    sCustomSched(newSched); save({ ...data, customSchedule: newSched });
                  };
                  const rmDay = () => {
                    const newSched = curSched.filter((_, idx) => idx !== editDay);
                    sCustomSched(newSched.length > 0 ? newSched : null);
                    save({ ...data, customSchedule: newSched.length > 0 ? newSched : null });
                    sEditDay(null);
                  };
                  return (
                    <div style={{ animation: "fadeIn .3s ease" }}>
                      <button className="tap" style={st.bb} onClick={() => sEditDay(null)}>← Back to Schedule</button>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                        <span style={{ fontFamily: "'Oswald',sans-serif", fontSize: 18, fontWeight: 700, color: "#fff", letterSpacing: 1 }}>Day {editDay + 1}:</span>
                        <input value={day.name} onChange={e => {
                          const newSched = [...curSched];
                          newSched[editDay] = { ...day, name: e.target.value };
                          sCustomSched(newSched);
                          save({ ...data, customSchedule: newSched });
                        }} style={{ ...st.ip, flex: 1, padding: "6px 10px", fontSize: 16, fontFamily: "'Oswald',sans-serif", fontWeight: 700, letterSpacing: 1 }} />
                      </div>
                      {day.exercises.length > 0 && (
                        <div style={{ marginBottom: 16 }}>
                          <p style={{ fontSize: 11, color: "#888", fontWeight: 700, letterSpacing: 1, marginBottom: 8, textTransform: "uppercase" }}>Current Exercises</p>
                          {day.exercises.map((g, j) => <div key={j} style={{ marginBottom: 8 }}>
                            <p style={{ fontSize: 11, color: g.color, fontWeight: 700, marginBottom: 4 }}>{g.region}</p>
                            {g.exercises.map(e => <div key={e} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 10px", background: "#14141F", borderRadius: 8, marginBottom: 3, border: "1px solid #1E1E2E" }}>
                              <span style={{ fontSize: 13, color: "#ccc" }}>{e}</span>
                              <button className="tap" onClick={() => rmEx(e, g.regionId)} style={{ background: "none", border: "none", color: "#FF3B30", fontSize: 12, fontWeight: 700 }}>Remove</button>
                            </div>)}
                          </div>)}
                        </div>
                      )}
                      <p style={{ fontSize: 11, color: "#888", fontWeight: 700, letterSpacing: 1, marginBottom: 8, textTransform: "uppercase" }}>Add from your selected exercises</p>
                      {allSelExercises.length === 0 ? <p style={{ fontSize: 12, color: "#555" }}>No exercises selected. Go to Exercises tab first.</p> :
                        allSelExercises.map((ex, i) => (
                          <button key={i} className="tap" onClick={() => ex.alreadyIn ? rmEx(ex.nm, ex.rid) : addEx(ex.nm, ex.rid)}
                            style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 12px", background: ex.alreadyIn ? `${ex.color}15` : "#14141F", border: `1px solid ${ex.alreadyIn ? ex.color + "40" : "#1E1E2E"}`, borderRadius: 10, marginBottom: 4, cursor: "pointer" }}>
                            <div style={{ textAlign: "left" }}>
                              <span style={{ fontSize: 13, color: ex.alreadyIn ? ex.color : "#ccc", fontWeight: ex.alreadyIn ? 700 : 400 }}>{ex.alreadyIn ? "✓ " : ""}{ex.nm}</span>
                              <span style={{ fontSize: 10, color: "#666", marginLeft: 8 }}>{ex.region}</span>
                            </div>
                            <span style={{ fontSize: 11, color: ex.alreadyIn ? "#FF3B30" : "#34C759", fontWeight: 600 }}>{ex.alreadyIn ? "Remove" : "+ Add"}</span>
                          </button>
                        ))
                      }
                      <button className="tap" onClick={rmDay} style={{ ...st.db, width: "100%", textAlign: "center", marginTop: 16, color: "#FF3B30", borderColor: "#FF3B3040" }}>Delete This Day</button>
                    </div>
                  );
                })()}
              </>)}
              <div style={{ height: 80 }} />
            </div>}

            {/* PROTEIN */}
            {tab === "protein" && <div style={{ padding: 16, animation: "fadeIn .3s ease" }}>
              {(() => {
                const target = Math.round((data.profile?.bodyweight || 70) * 2);
                const totalP = proteinLog.reduce((a, f) => a + f.protein, 0);
                const pct = Math.min(100, Math.round((totalP / target) * 100));
                const fil = foodSearch.trim() ? FOODS.filter(f => f.n.toLowerCase().includes(foodSearch.toLowerCase())) : FOODS.slice(0, 8);
                return <>
                  <div style={{ background: "#14141F", borderRadius: 14, padding: "16px 18px", marginBottom: 12, border: "1px solid #1E1E2E" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}><span style={{ fontSize: 11, color: "#888", fontWeight: 700, textTransform: "uppercase" }}>Daily Protein</span><span style={{ fontSize: 13, fontWeight: 700, color: pct >= 100 ? "#34C759" : "#fff" }}>{Math.round(totalP)}g / {target}g</span></div>
                    <div style={{ width: "100%", height: 8, background: "#1E1E2E", borderRadius: 4, overflow: "hidden" }}><div style={{ height: "100%", width: `${pct}%`, background: pct >= 100 ? "#34C759" : pct >= 60 ? "#FFD700" : "#FF3B30", borderRadius: 4 }} /></div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", background: "#1C1C2E", borderRadius: 10, border: "1px solid #2A2A3E", padding: "0 10px", marginBottom: 8 }}><I t="search" s={16} c="#666" /><input style={{ flex: 1, background: "transparent", border: "none", padding: "10px 8px", fontSize: 13, color: "#fff", fontFamily: "'Nunito Sans',sans-serif" }} placeholder="Search food..." value={foodSearch} onChange={e => sFoodSearch(e.target.value)} /></div>
                  <div style={{ maxHeight: 200, overflowY: "auto", marginBottom: 12 }}>{fil.map(f => <button key={f.n} className="tap" onClick={() => { sProteinLog(l => [...l, { name: f.n, protein: f.p, cal: f.cal, id: Date.now() }]); sT(`+${f.p}g`); }} style={{ width: "100%", display: "flex", justifyContent: "space-between", padding: "10px 14px", background: "#14141F", border: "none", borderBottom: "1px solid #1A1A24", color: "#ccc", fontSize: 13, cursor: "pointer", fontFamily: "'Nunito Sans',sans-serif", textAlign: "left" }}><div><span style={{ color: "#fff", fontWeight: 600 }}>{f.n}</span><br /><span style={{ fontSize: 11, color: "#666" }}>{f.u}</span></div><div style={{ textAlign: "right" }}><span style={{ color: "#34C759", fontWeight: 700 }}>{f.p}g</span><br /><span style={{ fontSize: 11, color: "#666" }}>{f.cal}cal</span></div></button>)}</div>
                  <div style={{ background: "#14141F", borderRadius: 14, padding: "14px 16px", marginBottom: 12, border: "1px solid #1E1E2E" }}><p style={{ fontSize: 11, color: "#888", fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>Custom</p><div style={{ display: "flex", gap: 6 }}><input style={{ ...st.ip, flex: 2, padding: "8px 10px", fontSize: 13 }} placeholder="Food" value={customP.name} onChange={e => sCustomP(c => ({ ...c, name: e.target.value }))} /><input style={{ ...st.ip, flex: 1, padding: "8px 10px", fontSize: 13 }} type="number" placeholder="g" value={customP.protein} onChange={e => sCustomP(c => ({ ...c, protein: e.target.value }))} /></div><button className="tap" style={{ ...st.pb, marginTop: 8, padding: "10px", fontSize: 13 }} onClick={() => { const p = parseFloat(customP.protein); if (!customP.name || !p) return; sProteinLog(l => [...l, { name: customP.name, protein: p, cal: 0, id: Date.now() }]); sCustomP({ name: "", protein: "" }); sT(`+${p}g`); }}>Add</button></div>
                  {proteinLog.length > 0 && <>{proteinLog.map(f => <div key={f.id} style={{ display: "flex", justifyContent: "space-between", padding: "8px 12px", background: "#14141F", borderRadius: 10, marginBottom: 4, border: "1px solid #1E1E2E" }}><span style={{ fontSize: 13, color: "#ccc" }}>{f.name}</span><div style={{ display: "flex", gap: 8 }}><span style={{ fontSize: 13, color: "#34C759", fontWeight: 700 }}>{f.protein}g</span><button className="tap" onClick={() => sProteinLog(l => l.filter(x => x.id !== f.id))} style={{ background: "none", border: "none", color: "#555", fontSize: 14 }}>✕</button></div></div>)}<button className="tap" style={{ ...st.db, marginTop: 8, width: "100%", textAlign: "center" }} onClick={() => sProteinLog([])}>Clear</button></>}
                  <div style={{ height: 80 }} />
                </>;
              })()}
            </div>}

            {/* BADGES */}
            {tab === "badges" && <div style={{ padding: 16, animation: "fadeIn .3s ease" }}><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>{BDG.map(b => { const e = earned.includes(b.id); return <div key={b.id} style={{ background: e ? "#14141F" : "#0E0E16", border: `1px solid ${e ? "#2A2A3E" : "#1A1A24"}`, borderRadius: 14, padding: "14px 12px", textAlign: "center", opacity: e ? 1 : .45 }}><div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}><I t={b.ic} s={26} c={e ? "#FFD700" : "#555"} /></div><p style={{ fontSize: 12, fontWeight: 700, color: e ? "#fff" : "#666" }}>{b.n}</p><p style={{ fontSize: 10, color: "#888", marginTop: 2 }}>{b.d}</p>{e && <p style={{ fontSize: 9, color: "#FFD700", marginTop: 4, fontWeight: 700 }}>EARNED</p>}</div>; })}</div><div style={{ height: 80 }} /></div>}
          </div>
        </div>
      )}

      {screen === "workout" && schedule && workoutDay !== null && <WorkoutMode dayPlan={schedule[workoutDay]} data={data} save={save} onEnd={() => { setScreen("main"); sWorkoutDay(null); sTab("sched"); }} sT={sT} />}
      {screen === "detail" && aR && aI !== null && <Detail data={data} aR={aR} aI={aI} onBack={() => { setScreen("main"); sAR(null); sAI(null); }} lf={lf} sLf={sLf} save={save} sT={sT} subLog={subLog} dLog={dLog} gER={gER} />}
    </div>
  );
}
