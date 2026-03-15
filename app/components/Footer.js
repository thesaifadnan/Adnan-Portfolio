export default function Footer() {
  return (
    <footer className=" text-gray-400">
      
      {/* TOP TEXT */}
      <div className="mx-auto max-w-5xl px-6 pt-32 pb-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight">
          Free will was heavily used<br />
          to make this website.
        </h1>
      </div>

      {/* CHROME NAME */}
      <div className="overflow-hidden">
        <img
          src="/adnan text.png"
          alt="Adnan"
          className=" w-[75%] select-none pointer-events-none"
        />
      </div>

      {/* BOTTOM BAR */}
      <div className=" border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          
          <span className="text-gray-500">
            © {new Date().getFullYear()} Adnan Sheikh
          </span>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">X</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">GitHub</a>
          </div>

          <div className="flex gap-6 text-gray-500">
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
