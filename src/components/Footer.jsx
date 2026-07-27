
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'
import { ArrowUp } from 'lucide-react'
import { profile } from '../data/profile'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-gray-200 bg-white py-12 px-6 text-center relative">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-surface border border-gray-200 text-gray-600 hover:text-accent hover:border-accent/40 transition-all shadow-sm mb-2"
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp size={18} />
        </button>

        <p className="font-bold text-ink text-lg tracking-tight">{profile.name}</p>
        <p className="text-xs uppercase tracking-widest font-semibold text-accent">
          Web Developer
        </p>


        <div className="flex justify-center gap-5 my-2">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-ink transition-colors p-2 rounded-full hover:bg-surface"
            aria-label="GitHub"
          >
            <BsGithub size={20} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-accent transition-colors p-2 rounded-full hover:bg-surface"
            aria-label="LinkedIn"
          >
            <BsLinkedin size={20} />
          </a>
          <a
            href={profile.socials.facebook}
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-accent transition-colors p-2 rounded-full hover:bg-surface"
            aria-label="Facebook"
          >
            <BsFacebook size={20} />
          </a>
        </div>

        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
