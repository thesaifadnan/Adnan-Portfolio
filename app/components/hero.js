export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* ASCII VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        src="/ascii.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0" />

      {/* CONTENT */}
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-5xl px-6 pt-64 pb-12">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight">
            I am blah blah good <span className="font-semibold italic">developer</span>.<br />
            And I am blah blah good <span className="font-semibold italic">designer</span>.
          </h1>

          <h3 className="mt-6 text-sm text-gray-400">
            Developer  |  Designer  |  A really good Human
          </h3>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 text-xs border border-white/20 text-white hover:bg-white hover:text-black transition"
            >
              SEE REAL PROJECTS
            </a>

            <a
              href="#contact"
              className="px-6 py-3 text-xs bg-white/10 text-white hover:bg-white/20 transition"
            >
              HIRE ME I DON’T LIKE WORKING LIKE THIS
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-5xl px-6 pt-4 pb-24 opacity-70">
            <img src="/ascii-art.png"/>
        </div>
      </div>
    </section>
  );
}
