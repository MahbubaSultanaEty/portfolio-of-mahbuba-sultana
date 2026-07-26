function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur border-b border-gray-200 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="font-bold text-ink">MS</span>
  
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#about" className="hover:text-accent transition">About</a>
            <a href="#skills" className="hover:text-accent transition">Skills</a>
            <a href="#projects" className="hover:text-accent transition">Projects</a>
            <a href="#contact" className="hover:text-accent transition">Contact</a>
          </div>
  
          <a
            href="/resume.pdf"
            download
            className="text-sm font-medium text-accent border border-accent rounded-full px-4 py-1.5 hover:bg-accent hover:text-white transition"
          >
            Resume
          </a>
        </div>
      </nav>
    )
  }
  
  export default Navbar