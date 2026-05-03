import Image from "next/image";

const FACTS = [
  { label: "Location",  value: "India"            },
  { label: "Focus",     value: "Full-Stack Web Dev."    },
  { label: "Stack",     value: "React · NextJS · NodeJs · PHP · SQL" },
  { label: "Status",    value: "Open to work ↗"    },
];

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">


      <div className="pt-8 mb-14">
        <p className="text-[11px] tracking-[0.22em] text-white/25 uppercase font-matter flex items-center gap-2">
          <span className="w-5 h-px bg-white/15" />
          01 — About
        </p>
      </div>

      <div className="grid md:grid-cols-[1fr_1.5fr] gap-0 border border-white/8">


        <div className="relative bg-white/3 border-r border-white/8 overflow-hidden">

          <div className="relative w-full aspect-[3/4]">
            <Image
              src="/adnan sheikh picture.png"
              alt="Adnan Sheikh"
              fill
              className="object-cover grayscale opacity-80"
              sizes="(max-width: 768px) 100vw, 400px"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-season text-[28px] tracking-tight text-white leading-tight">
                Adnan<br />Sheikh
              </p>
              <p className="text-[11px] tracking-[0.15em] uppercase text-white/40 font-matter mt-1">
                Full-Stack Developer
              </p>
            </div>
          </div>
        </div>


        <div className="flex flex-col justify-between p-8 md:p-12">


          <div>
            <h2 className="font-season text-[clamp(36px,4.5vw,54px)] tracking-tight leading-[0.95] text-white mb-8">
              Building for the web,<br />
              <span style={{  color: "gray" }}>
                one layer at a time.
              </span>
            </h2>

            <div className="space-y-4 text-white/50 text-[14px] font-matter font-light leading-[1.85] max-w-md">
              <p>
                I'm a final-year Computer Science student who builds full-stack web applications and obsesses over how things actually work — not just how they look.
              </p>
              <p>
                This lab record is the honest version: every assignment I worked through, with the source code I actually submitted and the output it actually produces.
              </p>
              <p className="text-white/30 border-l border-white/15 pl-4 italic text-[13px]">
                "Clean code is not written for machines — it's written for the person who reads it next."
              </p>
            </div>
          </div>


          <div className="mt-10 border-t border-white/8 pt-8">
            <div className="grid grid-cols-2 gap-0">
              {FACTS.map((f, i) => (
                <div
                  key={f.label}
                  className="py-4 pr-4 border-b border-white/6"
                  style={{ borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,0.06)" : "none" }}
                >
                  <p className="text-[10px] tracking-[0.18em] uppercase text-white/25 font-matter mb-1">{f.label}</p>
                  <p className="text-[14px] text-white/70 font-matter font-medium">{f.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}