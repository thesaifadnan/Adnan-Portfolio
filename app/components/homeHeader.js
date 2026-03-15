export default function Header() {
  return (
    <header className=" top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="text-sm tracking-wide text-white">
          ADNAN<br />SHEIKH
        </div>

        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#resume" className="hover:text-white">Resume</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-block px-4 py-2 text-xs bg-white/10 hover:bg-white/20 transition"
        >
          CONTACT ME
        </a>
      </div>
    </header>
  );
}
