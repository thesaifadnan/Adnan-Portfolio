"use client";
import { useState, useEffect } from "react";


const NAV = [
  { label: "About",   id: "about"   },
  { label: "Lab",     id: "lab"     },
  { label: "Play",    id: "game"    },
  { label: "Contact", id: "contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("");

  useEffect(() => {
    const ALL_IDS = ["hero", "about", "lab", "game", "contact"];
    const threshold = window.innerHeight * 0.35;

    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = "";
      for (const id of ALL_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= threshold) current = id;
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        background: scrolled ? "rgba(0,0,0,0.80)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        transition: "background 0.35s, border-color 0.35s",
      }}
    >
      <div
        className="max-w-6xl mx-auto px-6 flex items-center justify-between"
        style={{ height: 64 }}
      >

        <button
          onClick={() => scrollTo("hero")}
          style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
        >
          <span
            className="font-season"
            style={{ fontSize: 20, letterSpacing: "-0.01em", color: "#fff", lineHeight: 1 }}
          >
            Adnan Sheikh
          </span>
        </button>


        <div style={{ display: "flex", alignItems: "center" }}>


          <nav style={{ display: "flex", alignItems: "center", marginRight: 16 }}>
            {NAV.map((item) => {
              const isActive = active === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  style={{
                    background: "none", border: "none",
                    padding: "0 14px", height: 64,
                    cursor: "pointer",
                    fontFamily: "'Matter', sans-serif",
                    fontSize: 12, letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: isActive ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.35)",
                    transition: "color 0.2s",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.35)"; }}
                >
                  {item.label}
                  {isActive && (
                    <span style={{
                      position: "absolute", bottom: 13,
                      left: "50%", transform: "translateX(-50%)",
                      width: 3, height: 3, borderRadius: "50%",
                      background: "rgba(255,255,255,0.55)",
                    }} />
                  )}
                </button>
              );
            })}
          </nav>


          <a
            href="/resume.pdf"
            download
            title="Download resume"
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              fontFamily: "'Matter', sans-serif", fontSize: 11,
              letterSpacing: "0.1em", textTransform: "uppercase",
              fontWeight: 600, padding: "9px 16px",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.38)",
              textDecoration: "none", marginRight: 8, transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.28)"; e.currentTarget.style.color = "rgba(255,255,255,0.75)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "rgba(255,255,255,0.38)"; }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ flexShrink: 0 }}>
              <path d="M5 1v6M2 7l3 2 3-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            CV
          </a>


          <button
            onClick={() => scrollTo("lab")}
            style={{
              fontFamily: "'Matter', sans-serif", fontSize: 11,
              letterSpacing: "0.12em", textTransform: "uppercase",
              fontWeight: 600, padding: "9px 22px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.14)",
              color: "rgba(255,255,255,0.7)", cursor: "pointer", transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#000"; e.currentTarget.style.borderColor = "#fff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)"; }}
          >
            View Lab
          </button>
        </div>
      </div>
    </header>
  );
}