
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'
import { profile } from '../data/profile'

function Footer() {
  return (
    <footer className="border-t border-gray-200 py-10 px-6 text-center">
      <p className="font-semibold text-ink">{profile.name}</p>
      <p className="text-sm text-gray-500 mb-4">Frontend Developer</p>

      <div className="flex justify-center gap-4 mb-4">
        <a href={profile.socials.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-accent transition">
          <BsGithub size={18} />
        </a>
        <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-accent transition">
          <BsLinkedin size={18} />
        </a>
        <a href={profile.socials.facebook} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-accent transition">
          <BsFacebook size={18} />
        </a>
      </div>

      <p className="text-xs text-gray-400">© {new Date().getFullYear()} {profile.name} — built with React</p>
    </footer>
  )
}

export default Footer