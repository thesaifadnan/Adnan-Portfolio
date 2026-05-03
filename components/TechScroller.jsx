"use client";

const ROW_1 = [
  "HTML5","CSS3","JavaScript","TypeScript","React",
  "Next.js","Tailwind CSS","Node.js","Express","PHP","HTML5","CSS3","JavaScript","TypeScript","React",
  "Next.js","Tailwind CSS","Node.js","Express","PHP"
];
const ROW_2 = [
  "MySQL","MongoDB","PostgreSQL","Git","GitHub",
  "Figma","Vercel","Docker","Linux","REST APIs", "MySQL","MongoDB","PostgreSQL","Git","GitHub",
  "Figma","Vercel","Docker","Linux","REST APIs"
];


const LOOP_1 = [...ROW_1, ...ROW_1];
const LOOP_2 = [...ROW_2, ...ROW_2];

function MarqueeRow({ items, reverse = false, speed = 30 }) {
  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div
        style={{
          display: "flex",
          gap: 6,
          width: "max-content",
          animation: `${reverse ? "marquee-right" : "marquee-left"} ${speed}s linear infinite`,
          willChange: "transform",
        }}
      >
        {items.map((tech, i) => (
          <div
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "7px 20px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "#080808",
              whiteSpace: "nowrap",
              fontFamily: "'Matter', sans-serif",
              fontSize: 12,
              letterSpacing: "0.1em",
              color: i % 4 === 0 ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.3)",
              userSelect: "none",
              flexShrink: 0,
            }}
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechScroller() {
  return (
    <>
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>


      <div
        className="py-10"
        style={{
          width: "100vw",
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          overflow: "hidden",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <MarqueeRow items={LOOP_1} reverse={false} speed={48} />
          <MarqueeRow items={LOOP_2} reverse={true}  speed={48} />
        </div>
      </div>
    </>
  );
}