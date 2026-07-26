
import { FileDown } from 'lucide-react'
import { profile } from '../data/profile'
import { BsGithub } from 'react-icons/bs'
import { LiaLinkedin } from 'react-icons/lia'
import { FaFacebook } from 'react-icons/fa'

function HeroSection() {
  return (
    <section className="flex flex-col items-center pt-20 text-center gap-4 py-16 px-4">
      <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center text-sm text-gray-500">
        Photo
      </div>

      <h1 className="text-3xl font-bold text-ink">{profile.name}</h1>
      <p className="text-gray-600 max-w-md">{profile.tagline}</p>

      <a
        href="/resume.pdf"
        download
        className="flex items-center gap-2 border border-accent rounded-full px-5 py-2 text-sm font-medium text-accent hover:bg-accent hover:text-white transition"
      >
        <FileDown size={16} />
        Resume
      </a>

      <div className="flex items-center gap-4 mt-2">
        <a href={profile.socials.github} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900">
          <BsGithub size={20} />
        </a>
        <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900">
          <LiaLinkedin size={20} />
        </a>
        <a href={profile.socials.facebook} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900">
          <FaFacebook size={20} />
        </a>
      </div>
    </section>
  )
}

export default HeroSection