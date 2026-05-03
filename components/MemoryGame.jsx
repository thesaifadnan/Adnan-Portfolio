"use client";
import { useState, useEffect, useCallback } from "react";


const SYMBOLS = [
  { id: "fn",     display: "fn()",  hint: "function", accent: "#60a5fa" }, // blue
  { id: "arr",    display: "=>",    hint: "arrow",    accent: "#34d399" }, // green
  { id: "null",   display: "null",  hint: "null",     accent: "#f87171" }, // red
  { id: "async",  display: "async", hint: "async",    accent: "#a78bfa" }, // violet
  { id: "spread", display: "...",   hint: "spread",   accent: "#fbbf24" }, // amber
  { id: "or",     display: "||",    hint: "OR",       accent: "#f472b6" }, // pink
  { id: "obj",    display: "{}",    hint: "object",   accent: "#34d399" }, // teal
  { id: "chain",  display: "?.",    hint: "optional", accent: "#fb923c" }, // orange
];

function makeCards() {
  return [...SYMBOLS, ...SYMBOLS]
    .sort(() => Math.random() - 0.5)
    .map((s, i) => ({ uid: i, ...s, flipped: false, matched: false }));
}

function formatTime(s) {
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

// ----- Tile ----
function Tile({ card, onClick }) {
  const isVisible = card.flipped || card.matched;

  return (
    <div
      onClick={onClick}
      className={`perspective aspect-square cursor-pointer select-none${isVisible ? " flipped" : ""}`}
    >
      <div className="flip-inner w-full h-full">


        <div
          className="flip-front flex items-center justify-center"
          style={{
            background: "#0d0d0d",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 0,
            transition: "border-color 0.2s",
          }}
        >

          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "10px 10px",
          }} />
          <span style={{
            position: "relative",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(9px,1.8vw,14px)",
            color: "rgba(255,255,255,0.06)",
            letterSpacing: "0.04em",
          }}>
            {"</>"}
          </span>
        </div>


        <div
          className="flip-back flex flex-col items-center justify-center gap-1.5"
          style={{
            background: card.matched
              ? `${card.accent}12`
              : "#111",
            border: `1px solid ${card.matched ? card.accent + "45" : "rgba(255,255,255,0.12)"}`,
            borderRadius: 0,
            transition: "background 0.3s, border-color 0.3s",
          }}
        >

          <div style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: 2,
            background: card.accent,
            opacity: card.matched ? 0.7 : 0.5,
          }} />

          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(11px,2vw,18px)",
            color: card.matched ? card.accent : "rgba(255,255,255,0.88)",
            letterSpacing: "-0.02em",
            fontWeight: 700,
            transition: "color 0.3s",
          }}>
            {card.display}
          </span>
          <span style={{
            fontSize: "clamp(7px,0.9vw,9px)",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: card.matched ? card.accent + "99" : "rgba(255,255,255,0.22)",
            fontFamily: "'Matter', sans-serif",
            transition: "color 0.3s",
          }}>
            {card.hint}
          </span>
        </div>
      </div>
    </div>
  );
}

// ------ Main ------
export default function MemoryGame() {
  const [cards, setCards]     = useState([]);
  const [ready, setReady]     = useState(false);
  const [flipped, setFlipped] = useState([]);
  const [locked, setLocked]   = useState(false);
  const [moves, setMoves]     = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [won, setWon]         = useState(false);

  useEffect(() => { setCards(makeCards()); setReady(true); }, []);

  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [running]);

  useEffect(() => {
    if (ready && cards.length && cards.every((c) => c.matched)) {
      setRunning(false); setWon(true);
    }
  }, [cards, ready]);

  useEffect(() => {
    if (flipped.length !== 2) return;
    setLocked(true);
    const [a, b] = flipped;
    if (cards[a].id === cards[b].id) {
      setCards((prev) => prev.map((c, i) => i === a || i === b ? { ...c, matched: true, flipped: true } : c));
      setFlipped([]); setLocked(false);
    } else {
      const t = setTimeout(() => {
        setCards((prev) => prev.map((c, i) => i === a || i === b ? { ...c, flipped: false } : c));
        setFlipped([]); setLocked(false);
      }, 800);
      return () => clearTimeout(t);
    }

  }, [flipped]);

  const handleClick = useCallback((idx) => {
    if (!ready || locked || !cards[idx] || cards[idx].flipped || cards[idx].matched) return;
    if (flipped.length >= 2) return;
    if (!running && !won) setRunning(true);
    setCards((prev) => prev.map((c, i) => i === idx ? { ...c, flipped: true } : c));
    setFlipped((prev) => { const next = [...prev, idx]; if (next.length === 2) setMoves((m) => m + 1); return next; });
  }, [ready, locked, cards, running, won, flipped.length]);

  const reset = () => {
    setCards(makeCards()); setFlipped([]); setLocked(false);
    setMoves(0); setSeconds(0); setRunning(false); setWon(false);
  };

  const matched = cards.filter((c) => c.matched).length / 2;
  const pct     = Math.round((matched / SYMBOLS.length) * 100);

  return (
    <section id="game" className="border-y border-white/6">
      <div className="max-w-6xl mx-auto px-6 py-24">


        <div className="border-t border-white/10 pt-8 mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-[11px] tracking-[0.22em] text-white/25 uppercase font-matter mb-3 flex items-center gap-2">
                <span className="w-5 h-px bg-white/15" />
                03 — Interactive
              </p>
              <h2 className="font-season text-[clamp(34px,5vw,58px)] tracking-tight leading-none text-white">
                Memory Game
              </h2>
            </div>
            <p className="text-white/30 text-[13px] font-matter font-light max-w-xs leading-relaxed">
              Match the dev-syntax pairs. Each symbol has a colour — find the pair.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_280px] gap-10 items-start">


          <div
            className="grid gap-px"
            style={{ gridTemplateColumns: "repeat(4, 1fr)", background: "rgba(255,255,255,0.04)" }}
          >
            {ready
              ? cards.map((card, idx) => (
                  <Tile key={card.uid} card={card} onClick={() => handleClick(idx)} />
                ))
              : Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="aspect-square" style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.06)" }} />
                ))}
          </div>


          <div className="flex flex-col border border-white/8">


            <div className="px-5 pt-5 pb-4 border-b border-white/6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] tracking-[0.18em] uppercase font-matter text-white/25">Progress</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
                  {pct}%
                </span>
              </div>
              <div style={{ height: 2, background: "rgba(255,255,255,0.06)", width: "100%" }}>
                <div style={{
                  height: "100%",
                  width: `${pct}%`,
                  background: "rgba(255,255,255,0.5)",
                  transition: "width 0.4s ease",
                }} />
              </div>
            </div>


            {[
              ["Moves",   String(moves).padStart(3, "0")],
              ["Time",    formatTime(seconds)],
              ["Matched", `${matched} / ${SYMBOLS.length}`],
            ].map(([label, val], i, arr) => (
              <div
                key={label}
                className="flex items-center justify-between px-5 py-4"
                style={{ borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}
              >
                <span className="text-[10px] tracking-[0.18em] uppercase font-matter text-white/22">{label}</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, color: "rgba(255,255,255,0.6)", letterSpacing: "0.04em" }}>
                  {val}
                </span>
              </div>
            ))}

            <div className="border-t border-white/6" />


            <div className="px-5 py-4 min-h-[60px] flex items-center">
              {won ? (
                <div className="w-full">
                  <p className="text-[10px] tracking-[0.14em] uppercase font-matter text-white/35 mb-1">Complete 🎉</p>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.35)" }}>
                    {moves} moves · {formatTime(seconds)}
                  </p>
                </div>
              ) : (
                <p className="text-[12px] text-white/20 font-matter font-light">
                  {!ready ? "Loading..." : matched === 0 ? "Flip any tile to begin" : `${SYMBOLS.length - matched} pair${SYMBOLS.length - matched !== 1 ? "s" : ""} remaining`}
                </p>
              )}
            </div>

            <div className="border-t border-white/6" />


            <div className="px-5 py-4 border-b border-white/6">
              <p className="text-[9px] tracking-[0.18em] uppercase font-matter text-white/18 mb-3">Symbol colours</p>
              <div className="grid grid-cols-4 gap-1.5">
                {SYMBOLS.map((s) => (
                  <div
                    key={s.id}
                    title={s.hint}
                    style={{
                      height: 3,
                      borderRadius: 1,
                      background: s.accent,
                      opacity: 0.45,
                    }}
                  />
                ))}
              </div>
            </div>


            <button
              onClick={reset}
              className="px-5 py-4 text-left text-[11px] tracking-[0.14em] uppercase font-matter font-medium text-white/28 hover:text-white hover:bg-white/4 transition-all duration-200"
            >
              {won ? "Play Again →" : "Restart →"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}