"use client";
import { useState } from "react";

const SOCIAL = [
  { label: "GitHub",   href: "https://github.com/thesaifadnan" },
  { label: "LinkedIn", href: "https://linkedin.com/in/thesaifadnan" },
  { label: "Email",    href: "mailto:saifadnansheikh@gmail.com" },
];

// ─── Floating-label input ──────────────────────────────────────────────────
function Field({ label, name, type = "text", value, onChange, multiline, required }) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  const shared = {
    name,
    id: name,
    value,
    onChange,
    required,
    onFocus: () => setFocused(true),
    onBlur:  () => setFocused(false),
    style: {
      display: "block",
      width: "100%",
      background: "transparent",
      border: "none",
      outline: "none",
      color: "rgba(255,255,255,0.85)",
      fontFamily: "'Matter', sans-serif",
      fontSize: 14,
      paddingTop: "22px",
      paddingBottom: "8px",
      paddingLeft: 0,
      paddingRight: 0,
      resize: "none",
      lineHeight: 1.6,
    },
  };

  return (
    <div
      style={{
        position: "relative",
        borderBottom: `1px solid ${focused ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.12)"}`,
        paddingBottom: 2,
        transition: "border-color 0.2s",
      }}
    >
      <label
        htmlFor={name}
        style={{
          position: "absolute",
          top: active ? 0 : 18,
          left: 0,
          fontSize: active ? 10 : 13,
          letterSpacing: active ? "0.18em" : "0.04em",
          textTransform: active ? "uppercase" : "none",
          color: focused ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)",
          pointerEvents: "none",
          transition: "all 0.18s ease",
          fontFamily: "'Matter', sans-serif",
          fontWeight: active ? 500 : 400,
          lineHeight: 1,
        }}
      >
        {label}
      </label>

      {multiline ? (
        <textarea rows={4} {...shared} />
      ) : (
        <input type={type} {...shared} />
      )}
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm]       = useState({ name: "", email: "", message: "" });
  const [state, setState]     = useState("idle");
  const [focusedBtn, setBtnF] = useState(false);

  const set = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setState("sending");


    await new Promise((r) => setTimeout(r, 1200));
    setState("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setState("idle"), 4000);
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">


      <div className="border-t border-white/10 pt-8 mb-14">
        <p className="text-[11px] tracking-[0.22em] text-white/25 uppercase font-matter flex items-center gap-2">
          <span className="w-5 h-px bg-white/15" />
          04 — Contact
        </p>
      </div>

      <div className="grid md:grid-cols-[1fr_1.2fr] gap-0 border border-white/8">


        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/8 flex flex-col justify-between">
          <div>
            <h2 className="font-season text-[clamp(36px,5vw,62px)] tracking-tight leading-[0.9] text-white mb-8">
              Let's<br />
              <span
                style={{color: "gray"
                }}
              >
                Connect.
              </span>
            </h2>
            <p className="text-white/40 text-[14px] font-matter font-light leading-relaxed max-w-xs">
              Open to freelance work, collaborations, and interesting conversations about code. Send a message — I'll reply.
            </p>
          </div>


          <div className="mt-12 flex flex-col gap-0 border-t border-white/8">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4 border-b border-white/6 hover:border-white/15 transition-all"
              >
                <span className="text-[13px] font-matter text-white/35 group-hover:text-white/70 transition-colors">
                  {s.label}
                </span>
                <span className="text-white/15 group-hover:text-white/40 transition-all group-hover:translate-x-0.5 text-sm">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>


        <div className="p-8 md:p-12">
          {state === "sent" ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 gap-4">
              <div
                style={{
                  width: 40,
                  height: 40,
                  border: "1px solid rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "monospace",
                  fontSize: 18,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                ✓
              </div>
              <p className="font-season text-2xl tracking-tight text-white">Message sent.</p>
              <p className="text-white/30 text-[13px] font-matter">I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <Field label="Your name"      name="name"    value={form.name}    onChange={set} required />
              <Field label="Email address"  name="email"   value={form.email}   onChange={set} type="email" required />
              <Field label="Message"        name="message" value={form.message} onChange={set} multiline required />

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={state === "sending"}
                  onMouseEnter={() => setBtnF(true)}
                  onMouseLeave={() => setBtnF(false)}
                  style={{
                    width: "100%",
                    padding: "14px 24px",
                    background: focusedBtn && state !== "sending" ? "#fff" : "transparent",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: focusedBtn && state !== "sending" ? "#000" : "rgba(255,255,255,0.5)",
                    fontFamily: "'Matter', sans-serif",
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    cursor: state === "sending" ? "not-allowed" : "pointer",
                    transition: "all 0.2s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span>{state === "sending" ? "Sending..." : "Send Message"}</span>
                  <span style={{ fontFamily: "monospace", fontSize: 14, transition: "transform 0.2s", transform: focusedBtn ? "translate(2px, -2px)" : "none" }}>
                    →
                  </span>
                </button>

                <p className="text-[10px] text-white/15 font-matter mt-3 tracking-[0.08em]">
                  Your message goes directly to my inbox. No spam, no bots.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}