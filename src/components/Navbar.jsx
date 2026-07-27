import { useState } from 'react'
import { Menu, X, FileText } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import avatarImg from '../assets/avatar.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '#story', label: 'Story' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200/80 z-40 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3.5">
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={avatarImg}
            alt="Mahbuba Sultana Logo"
            className="w-9 h-9 rounded-full object-cover border-2 border-accent/40 shadow-sm group-hover:scale-105 group-hover:border-accent transition-all"
          />
          <span className="font-bold text-ink text-lg tracking-tight group-hover:text-accent transition-colors">
            Mahbuba Sultana
          </span>
        </a>


        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-600">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-accent transition-colors py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            download
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent border-2 border-accent/80 rounded-full px-4 py-1.5 hover:bg-accent hover:text-white transition-all shadow-sm hover:shadow"
          >
            <FileText size={15} />
            Resume
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-ink hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden px-6 pb-6 pt-2"
          >
            <div className="flex flex-col gap-3 text-sm font-medium text-gray-700">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-2 px-3 rounded-lg hover:bg-surface hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                download
                className="mt-2 text-center text-accent border-2 border-accent rounded-full px-4 py-2 font-semibold hover:bg-accent hover:text-white transition-colors"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar