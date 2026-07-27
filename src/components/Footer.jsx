import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'
import { ArrowUp, Sparkles } from 'lucide-react'
import { profile } from '../data/profile'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden border-t border-gray-200 bg-white px-6 pt-20 pb-10">
      
      {/* subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-40 bg-purple-200/30 blur-3xl rounded-full" />

      <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center">

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="
            group mb-8 flex items-center justify-center
            h-11 w-11 rounded-full
            bg-white border border-gray-200
            text-gray-500 shadow-sm
            hover:border-purple-300
            hover:text-purple-600
            hover:-translate-y-1
            transition-all duration-300
          "
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp 
            size={18}
            className="group-hover:-translate-y-0.5 transition-transform"
          />
        </button>


        {/* Identity */}
        <div className="flex items-center gap-2 mb-3">
          <Sparkles 
            size={15}
            className="text-purple-500"
          />
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-purple-600">
            Frontend Developer
          </p>
        </div>


        <h3 className="text-2xl font-bold tracking-tight text-gray-900">
          {profile.name}
        </h3>


        <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-500">
          Building modern web experiences with clean code, thoughtful design,
          and a passion for creating meaningful digital products.
        </p>


        {/* Tech stack */}
        <p className="mt-5 text-xs text-gray-400">
          React • Next.js • JavaScript • Tailwind CSS
        </p>


        {/* Socials */}
        <div className="flex items-center gap-3 mt-8">

          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="
              h-10 w-10 flex items-center justify-center
              rounded-full border border-gray-200
              text-gray-500
              hover:text-gray-900
              hover:border-gray-400
              hover:-translate-y-1
              transition-all duration-300
            "
            aria-label="GitHub"
          >
            <BsGithub size={18} />
          </a>


          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="
              h-10 w-10 flex items-center justify-center
              rounded-full border border-gray-200
              text-gray-500
              hover:text-purple-600
              hover:border-purple-300
              hover:-translate-y-1
              transition-all duration-300
            "
            aria-label="LinkedIn"
          >
            <BsLinkedin size={18} />
          </a>


          <a
            href={profile.socials.facebook}
            target="_blank"
            rel="noreferrer"
            className="
              h-10 w-10 flex items-center justify-center
              rounded-full border border-gray-200
              text-gray-500
              hover:text-blue-600
              hover:border-blue-300
              hover:-translate-y-1
              transition-all duration-300
            "
            aria-label="Facebook"
          >
            <BsFacebook size={18} />
          </a>

        </div>


        {/* Bottom */}
        <div className="mt-10 pt-6 w-full border-t border-gray-100">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>

          <p className="mt-2 text-[11px] text-gray-400">
            Designed & built with passion using Next.js
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer