export default function ResumeBanner() {
  return (
    <>
      <style>{`
        .resume-dl { transition: opacity 0.2s; }
        .resume-dl:hover { opacity: 0.82; }
      `}</style>

      <div className="border-y border-white/6">
        <div className="max-w-6xl mx-auto px-6 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">


          <div className="flex items-center gap-5">
            <span
              className="font-season leading-none select-none"
              style={{ fontSize: 48, letterSpacing: "-0.04em", color: "rgba(255,255,255,0.15)" }}
            >
              CV
            </span>
            <div>
              <p
                className="font-season text-white tracking-tight"
                style={{ fontSize: "clamp(16px,2.2vw,22px)", lineHeight: 1.1 }}
              >
                Adnan Sheikh — Résumé
              </p>
              <p className="text-[12px] text-white/30 font-matter font-light mt-1">
                Full-stack developer · CS Student · Available for work
              </p>
            </div>
          </div>

          <a
            href="/resume.pdf"
            download
            className="resume-dl"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "'Matter', sans-serif",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 600,
              padding: "11px 28px",
              background: "#fff",
              color: "#000",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path
                d="M5.5 1v7M2 8l3.5 2L9 8"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Download PDF
          </a>
        </div>
      </div>
    </>
  );
}