"use client";
import { useEffect, useState } from "react";

const KONAMI = [
  "ArrowUp","ArrowUp","ArrowDown","ArrowDown",
  "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight",
  "b","a",
];


const TERMINAL_OUTPUT = [
  { delay: 0,    text: "$ whoami",                       color: "rgba(255,255,255,0.9)"  },
  { delay: 300,  text: "> adnan sheikh",                  color: "rgba(255,255,255,0.5)"  },
  { delay: 700,  text: "$ cat secret.txt",                color: "rgba(255,255,255,0.9)"  },
  { delay: 1100, text: "> you found the easter egg.",     color: "rgba(255,255,255,0.5)"  },
  { delay: 1600, text: "> built with care at 2am.",       color: "rgba(255,255,255,0.35)" },
  { delay: 2100, text: "> every output actually runs.",   color: "rgba(255,255,255,0.35)" },
  { delay: 2600, text: "> konami code still works in 2025. respect.", color: "rgba(255,255,255,0.25)" },
  { delay: 3200, text: "$ _",                             color: "rgba(255,255,255,0.6)",  blink: true },
];

export default function EasterEgg() {
  const [active, setActive]     = useState(false);
  const [visible, setVisible]   = useState(0);


  useEffect(() => {
    let idx = 0;
    const onKey = (e) => {
      const key = e.key.toLowerCase() === "b" ? "b" : e.key.toLowerCase() === "a" ? "a" : e.key;
      if (key === KONAMI[idx]) {
        idx++;
        if (idx === KONAMI.length) {
          setActive(true);
          setVisible(0);
          idx = 0;
        }
      } else {
        idx = key === KONAMI[0] ? 1 : 0;
      }
    };
    window.addEventListener("keydown", onKey);


    console.log(
      "%c↑↑↓↓←→←→BA",
      "color:#ffffff40; font-family:monospace; font-size:11px; letter-spacing:0.15em",
      "\n%cTry the Konami code on the page.",
      "color:#ffffff20; font-family:monospace; font-size:10px;"
    );

    return () => window.removeEventListener("keydown", onKey);
  }, []);


  useEffect(() => {
    if (!active) return;
    TERMINAL_OUTPUT.forEach((line, i) => {
      const t = setTimeout(() => setVisible(i + 1), line.delay);
      return () => clearTimeout(t);
    });
  }, [active]);


  useEffect(() => {
    if (!active) return;
    const fn = (e) => e.key === "Escape" && setActive(false);
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [active]);

  if (!active) return null;

  return (
    <>

      <div
        onClick={() => setActive(false)}
        style={{
          position: "fixed", inset: 0, zIndex: 9999,
          background: "rgba(0,0,0,0.85)",
          backdropFilter: "blur(8px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: 24,
        }}
      >

        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "#050505",
            border: "1px solid rgba(255,255,255,0.1)",
            width: "100%",
            maxWidth: 520,
            overflow: "hidden",
          }}
        >

          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "11px 16px",
            background: "#0a0a0a",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}>
            {["#ff5f57","#ffbd2e","#28ca41"].map((c) => (
              <div key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c, opacity: 0.75 }} />
            ))}
            <span style={{
              fontFamily: "monospace", fontSize: 11,
              color: "rgba(255,255,255,0.18)", marginLeft: 8, letterSpacing: "0.08em",
            }}>
              ~/secret/easter-egg.sh
            </span>
          </div>


          <div style={{ padding: "20px 22px 24px", minHeight: 200 }}>
            {TERMINAL_OUTPUT.slice(0, visible).map((line, i) => (
              <p key={i} style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 13,
                lineHeight: 1.9,
                color: line.color,
                letterSpacing: "0.02em",
              }}>
                {line.text}
                {line.blink && (
                  <span style={{
                    display: "inline-block", width: 7, height: 13,
                    background: "rgba(255,255,255,0.6)",
                    marginLeft: 1, verticalAlign: "middle",
                    animation: "terminal-blink 1s step-end infinite",
                  }} />
                )}
              </p>
            ))}
          </div>


          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "10px 22px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <span style={{
              fontFamily: "monospace", fontSize: 10,
              color: "rgba(255,255,255,0.15)", letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}>
              esc to close
            </span>
            <button
              onClick={() => setActive(false)}
              style={{
                fontFamily: "'Matter', sans-serif", fontSize: 10,
                letterSpacing: "0.14em", textTransform: "uppercase",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.3)",
                padding: "5px 14px",
                background: "transparent",
                cursor: "pointer",
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.3)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              }}
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes terminal-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </>
  );
}