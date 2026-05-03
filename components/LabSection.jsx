"use client";

import { useState, useEffect } from "react";
import { labQuestions } from "@/data/labData";

// ------- Language accent colours -------
const LANG = {
  HTML:  { pill: "text-orange-400 border-orange-400/30 bg-orange-400/8",  accent: "#f97316", dot: "bg-orange-400" },
  CSS:   { pill: "text-blue-400   border-blue-400/30   bg-blue-400/8",    accent: "#3b82f6", dot: "bg-blue-400"   },
  JS:    { pill: "text-yellow-400 border-yellow-400/30 bg-yellow-400/8",  accent: "#eab308", dot: "bg-yellow-400" },
  PHP:   { pill: "text-purple-400 border-purple-400/30 bg-purple-400/8",  accent: "#a855f7", dot: "bg-purple-400" },
  React: { pill: "text-cyan-400   border-cyan-400/30   bg-cyan-400/8",    accent: "#06b6d4", dot: "bg-cyan-400"   },
};
const fallback = { pill: "text-white/50 border-white/15 bg-white/5", accent: "#ffffff40", dot: "bg-white/40" };
const lang = (key) => LANG[key] ?? fallback;

// -------- Copy-to-clipboard hook ----------
function useCopy() {
  const [copied, setCopied] = useState(false);
  const copy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return [copied, copy];
}

// ---- Single card ------------
function LabCard({ q, index, onOpen }) {
  const c = lang(q.lang);
  return (
    <div
      className="group relative flex flex-col bg-black border border-white/8 hover:border-white/20 transition-all duration-300 overflow-hidden"
      style={{ "--accent": c.accent }}
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-300 opacity-0 group-hover:opacity-100"
        style={{ background: c.accent }}
      />
      <span
        className="absolute right-4 bottom-2 font-season font-bold leading-none select-none pointer-events-none"
        style={{
          fontSize: "clamp(56px, 8vw, 80px)",
          color: "rgba(255,255,255,0.025)",
          letterSpacing: "-0.04em",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="relative z-10 flex flex-col flex-1 p-6">
        <div className="flex items-center justify-between mb-5">
          <span className={`text-[10px] uppercase tracking-[0.16em] border px-2.5 py-1 font-matter font-semibold ${c.pill}`}>
            {q.lang}
          </span>
          <span className="text-[11px] text-white/20 font-matter tabular-nums">
            #{String(q.id).padStart(2, "0")}
          </span>
        </div>

        {/* Title now uses Matter font – more readable */}
        <h3 className="font-matter text-[20px] leading-tight tracking-[-0.01em] font-medium text-white mb-2.5 group-hover:text-white transition-colors">
          {q.title}
        </h3>

        <p className="text-white/40 text-[13px] leading-relaxed font-matter font-light line-clamp-2 flex-1">
          {q.question}
        </p>
        <div className="mt-5 mb-4 border-t border-white/6" />
        <div className="flex items-center gap-2">
          <button
            onClick={() => onOpen(q, "code")}
            className="flex-1 py-2 text-[11px] tracking-[0.1em] uppercase font-matter font-medium text-white/50 border border-white/12 hover:border-white/30 hover:text-white transition-all duration-200"
          >
            Source
          </button>
          <button
            onClick={() => onOpen(q, "output")}
            className="flex-1 py-2 text-[11px] tracking-[0.1em] uppercase font-matter font-medium text-white/50 border border-white/12 hover:border-white/30 hover:text-white transition-all duration-200"
          >
            Output
          </button>
        </div>
      </div>
    </div>
  );
}

// -------- Drawer ----------
function Drawer({ item, view, setView, onClose }) {
  const [copied, copy] = useCopy();
  const c = lang(item.lang);

  useEffect(() => {
    const fn = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/70"
        onClick={onClose}
      />

      <div className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-3xl bg-[#050505] border-l border-white/10 flex flex-col drawer-transition">

        <div className="flex items-start justify-between px-7 py-6 border-b border-white/8 shrink-0">
          <div className="flex-1 min-w-0 pr-4">
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
              <span className={`text-[10px] uppercase tracking-[0.18em] font-matter font-semibold ${c.pill.split(" ")[0]}`}>
                {item.lang}
              </span>
              <span className="text-white/20 text-[11px] font-matter">#{String(item.id).padStart(2, "0")}</span>
            </div>
            <h3 className="font-season text-2xl md:text-3xl tracking-tight text-white leading-tight">
              {item.title}
            </h3>
            <p className="text-white/35 text-[13px] font-matter mt-2 leading-relaxed line-clamp-2">
              {item.question}
            </p>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-8 h-8 flex items-center justify-center border border-white/15 text-white/40 hover:text-white hover:border-white/40 transition-all text-sm"
          >
            ✕
          </button>
        </div>

        <div className="flex border-b border-white/8 px-7 shrink-0">
          {["code", "output", "question"].map((tab) => (
            <button
              key={tab}
              onClick={() => setView(tab)}
              className={`mr-7 py-3.5 text-[11px] tracking-[0.12em] uppercase font-matter font-medium transition-all duration-200 border-b-[1.5px] ${
                view === tab
                  ? "text-white border-white"
                  : "text-white/25 border-transparent hover:text-white/55"
              }`}
            >
              {tab === "code" ? "Source Code" : tab === "output" ? "Live Output" : "Problem"}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-auto">
          {view === "code" && (
            <div className="relative h-full">

              <div className="sticky top-0 z-10 flex items-center justify-between px-7 py-3 bg-[#050505] border-b border-white/6">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-white/20 font-matter">{item.lang}</span>
                  <span className="text-white/10">·</span>
                  <span className="text-[10px] text-white/15 font-matter">
                    {item.code?.split("\n").length} lines
                  </span>
                </div>
                <button
                  onClick={() => copy(item.code)}
                  className={`text-[10px] tracking-[0.1em] uppercase font-matter px-3 py-1.5 border transition-all duration-200 ${
                    copied
                      ? "border-green-500/40 text-green-400"
                      : "border-white/15 text-white/35 hover:border-white/35 hover:text-white"
                  }`}
                >
                  {copied ? "✓ Copied" : "Copy"}
                </button>
              </div>

              <div className="flex overflow-x-auto">

                <div className="select-none shrink-0 pt-5 pb-5 pl-7 pr-4 text-right">
                  {item.code?.split("\n").map((_, i) => (
                    <div
                      key={i}
                      className="text-white/15 font-matter tabular-nums"
                      style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, lineHeight: "1.8", height: "1.8em" }}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>

                <div className="w-px bg-white/6 shrink-0 my-5" />

                <pre className="code-block flex-1 pt-5 pb-5 pl-5 pr-7 overflow-x-auto">
                  <code>{item.code}</code>
                </pre>
              </div>
            </div>
          )}

          {view === "output" && (
            <div className="p-6 h-full">
              <div className="w-full h-full min-h-[520px] border border-white/10 overflow-hidden relative">

                <div className="flex items-center gap-2 px-4 py-3 bg-white/4 border-b border-white/8">
                  {["#ff5f57","#ffbd2e","#28ca41"].map(c => (
                    <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.7 }} />
                  ))}
                  <div className="flex-1 mx-3 px-3 py-1 bg-white/5 border border-white/8 text-[10px] text-white/20 font-matter tracking-[0.06em]">
                    localhost / output #{String(item.id).padStart(2, "0")}
                  </div>
                </div>
                {item.outputHtml ? (
                  <iframe
                    srcDoc={item.outputHtml}
                    title={`Output — ${item.title}`}
                    className="w-full bg-white"
                    style={{ height: "calc(100% - 41px)", minHeight: 480, border: "none", display: "block" }}
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-[440px] gap-3">
                    <div className="text-white/15 text-4xl">◻</div>
                    <p className="text-white/25 text-[12px] font-matter tracking-[0.1em] uppercase">No output available</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {view === "question" && (
            <div className="px-9 py-8 max-w-xl">
              <p className="text-[11px] tracking-[0.18em] uppercase text-white/25 font-matter mb-5">Problem Statement</p>
              <p className="text-white/70 text-[15px] font-matter font-light leading-[1.85]">
                {item.question}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// -------- Main section ----------
export default function LabSection() {
  const [selected, setSelected]         = useState(null);
  const [drawerView, setDrawerView]     = useState("code");
  const [search, setSearch]             = useState("");
  const [activeCategory, setActive]     = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);

  const categories = ["All", ...new Set(labQuestions.map((q) => q.lang))];

  const filtered = labQuestions.filter((q) => {
    const s = search.toLowerCase();
    return (
      (activeCategory === "All" || q.lang === activeCategory) &&
      (q.title.toLowerCase().includes(s) || q.question.toLowerCase().includes(s))
    );
  });

  const displayed = filtered.slice(0, visibleCount);
  const hasMore   = filtered.length > visibleCount;

  const setCat = (cat) => { setActive(cat); setVisibleCount(12); };
  const onSearch = (e) => { setSearch(e.target.value); setVisibleCount(12); };

  const openDrawer = (item, view) => {
    setSelected(item);
    setDrawerView(view);
  };

  return (
    <section id="lab" className="max-w-6xl mx-auto px-6 py-24">

      <div className="pt-8 mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-[11px] tracking-[0.22em] text-white/25 uppercase font-matter mb-3 flex items-center gap-2">
              <span className="w-5 h-px bg-white/15" />
              02 — Lab Record
            </p>
            <h2 className="font-season text-[clamp(36px,5vw,60px)] tracking-tight leading-none text-white">
              Full-Stack Problems
            </h2>
          </div>
          <p className="text-white/35 text-[13px] font-matter font-light max-w-xs leading-relaxed">
            {labQuestions.length} practical assignments. Source code &amp; live output for each.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="relative flex-1 max-w-xs">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 text-[13px] pointer-events-none select-none">
            ⌕
          </span>
          <input
            type="text"
            placeholder="Search problems..."
            value={search}
            onChange={onSearch}
            className="w-full bg-transparent border border-white/12 pl-9 pr-4 py-2.5 text-[13px] font-matter text-white placeholder-white/20 outline-none focus:border-white/30 transition"
          />
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCat(cat)}
              className={`px-4 py-2 text-[11px] tracking-[0.1em] uppercase font-matter font-medium border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-white text-black border-white"
                  : "border-white/12 text-white/35 hover:border-white/30 hover:text-white/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/6">
        {displayed.map((q, i) => (
          <LabCard key={q.id} q={q} index={i} onOpen={openDrawer} />
        ))}
      </div>

      {displayed.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-white/20 text-[13px] font-matter tracking-[0.12em] uppercase">No results found</p>
        </div>
      )}

      {hasMore && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setVisibleCount((c) => c + 6)}
            className="px-8 py-3 border border-white/15 text-[11px] tracking-[0.12em] uppercase font-matter font-medium text-white/40 hover:border-white/35 hover:text-white transition-all duration-200"
          >
            Load more — {filtered.length - visibleCount} remaining
          </button>
        </div>
      )}

      {selected && (
        <Drawer
          item={selected}
          view={drawerView}
          setView={setDrawerView}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}