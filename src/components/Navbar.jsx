import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur border-b border-gray-200 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="font-bold text-ink">MS</span>

        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-accent transition">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          download
          className="hidden md:inline-block text-sm font-medium text-accent border border-accent rounded-full px-4 py-1.5 hover:bg-accent hover:text-white transition"
        >
          Resume
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-ink"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-6 text-sm text-gray-600">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="hover:text-accent transition"
            >
              {link.label}
            </a>
          ))}
          
            <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            download
            className="text-accent border border-accent rounded-full px-4 py-1.5 font-medium"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar