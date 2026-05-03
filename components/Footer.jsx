const NAV = [
  { label: "Lab",     href: "#lab"     },
  { label: "Game",    href: "#game"    },
  { label: "About",   href: "#about"   },
  { label: "Contact", href: "#contact" },
];

const SOCIAL = [
  { label: "GitHub",   href: "https://github.com/thesaifadnan" },
  { label: "LinkedIn", href: "https://linkedin.com/in/thesaifadnan" },
  { label: "Email",    href: "mailto:saifadnansheikh@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/8">


      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr] gap-x-12 gap-y-12">


        <div className="col-span-2 md:col-span-1">
          <p
            className="font-season tracking-tight leading-none text-white"
            style={{ fontSize: "clamp(38px,5vw,56px)" }}
          >
            Adnan
            <br />
            <span
              style={{color: "gray"
              }}
            >
              Sheikh.
            </span>
          </p>
          <p className="text-[12px] text-white/25 font-matter font-light mt-4 leading-relaxed max-w-[220px]">
            Full-Stack Developer · CS Student · Building for the web.
          </p>
        </div>


        <div>
          <p className="text-[10px] tracking-[0.2em] uppercase font-matter text-white/20 mb-5">Navigate</p>
          <ul className="flex flex-col gap-3">
            {NAV.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-[13px] font-matter text-white/35 hover:text-white/70 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>


        <div>
          <p className="text-[10px] tracking-[0.2em] uppercase font-matter text-white/20 mb-5">Links</p>
          <ul className="flex flex-col gap-3">
            {SOCIAL.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 text-[13px] font-matter text-white/35 hover:text-white/70 transition-colors"
                >
                  {s.label}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px]">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>


      <div className="border-t border-white/6">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] font-matter text-white/18 tracking-[0.08em]">
            © 2026 Adnan Sheikh. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["HTML/CSS", "JavaScript", "React", "PHP"].map((t, i, arr) => (
              <span key={t} className="flex items-center gap-4">
                <span className="text-[10px] tracking-[0.1em] uppercase font-matter text-white/18">{t}</span>
                {i < arr.length - 1 && <span className="text-white/10 text-[10px]">·</span>}
              </span>
            ))}
          </div>
          <p className="text-[11px] font-matter text-white/18 tracking-[0.06em]">
            Built with Next.js + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}