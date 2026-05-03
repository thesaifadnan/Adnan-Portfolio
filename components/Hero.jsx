"use client";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .hero-title {
          background: linear-gradient(
            120deg,
            #ffffff 0%,
            #ffffff 30%,
            #a0a0a0 50%,
            #ffffff 70%,
            #ffffff 100%
          );
          background-size: 250% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 6s ease infinite;
        }
        .hero-btn-primary:hover  { opacity: 0.86; }
        .hero-btn-secondary:hover {
          color: rgba(255,255,255,0.85) !important;
          border-color: rgba(255,255,255,0.38) !important;
        }
      `}</style>

      <section id="hero" className="relative min-h-[65vh] flex items-center justify-center px-6 pt-28">

        <div className="absolute inset-0 bg-black" />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 90% 80% at 50% 50%, transparent 25%, #000 100%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="hero-title font-season text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            code. create. deploy.
          </h1>

          <p className="text-white/55 text-lg md:text-xl mt-6 max-w-xl mx-auto font-matter">
            Full-stack Problems, Interactive demos, source code &amp; real outputs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10">
            <button
              onClick={() => scrollTo("contact")}
              className="hero-btn-primary"
              style={{
                fontFamily: "'Matter', sans-serif",
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: 600,
                padding: "11px 28px",
                background: "#fff",
                color: "#000",
                border: "1px solid #fff",
                cursor: "pointer",
                transition: "opacity 0.2s",
                width: "100%",
                maxWidth: 180,
              }}
            >
              Contact Me
            </button>
            <button
              onClick={() => scrollTo("lab")}
              className="hero-btn-secondary"
              style={{
                fontFamily: "'Matter', sans-serif",
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: 600,
                padding: "11px 28px",
                background: "transparent",
                color: "rgba(255,255,255,0.45)",
                border: "1px solid rgba(255,255,255,0.18)",
                cursor: "pointer",
                transition: "all 0.2s",
                width: "100%",
                maxWidth: 180,
              }}
            >
              Explore Lab
            </button>
          </div>

          <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mt-12" />
        </div>
      </section>
    </>
  );
}