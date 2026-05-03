"use client";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[65vh] flex items-center justify-center px-6 pt-28 ">
      <div className="absolute inset-0 bg-black" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="font-season text-5xl md:text-7xl font-bold tracking-tight leading-tight text-white">
          code. create. deploy.
        </h1>
        <p className="text-white/60 text-lg md:text-xl mt-6 max-w-xl mx-auto font-matter">
          Full-stack Problems, Interactive demos, source code & real outputs.
        </p>
        <div className="flex gap-5 justify-center mt-10">
          <button
            onClick={() => scrollTo("contact")}
            className="px-6 py-3 border border-white/20 text-sm font-medium hover:bg-white hover:text-black transition-all duration-300"
          >
            CONTACT ME
          </button>
          <button
            onClick={() => scrollTo("lab")}
            className="px-6 py-3 bg-white/10 border border-white/20 text-sm font-medium hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
          >
            EXPLORE LAB CODES
          </button>
        </div>

        <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mt-12" />
      </div>
    </section>
  );
}