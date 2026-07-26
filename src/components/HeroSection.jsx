
import { motion } from 'framer-motion'
import { FileDown, ArrowRight, Sparkles, Code, CheckCircle, Flame } from 'lucide-react'
import { profile } from '../data/profile'
import { BsGithub } from 'react-icons/bs'
import { LiaLinkedin } from 'react-icons/lia'
import { FaFacebook } from 'react-icons/fa'
import { SiReact, SiNextdotjs, SiTailwindcss, SiJavascript } from 'react-icons/si'

function HeroSection() {
  const floatingTech = [
    { icon: <SiReact className="text-[#61DAFB]" size={20} />, label: 'React.js', pos: 'top-2 -left-4' },
    { icon: <SiNextdotjs className="text-black" size={20} />, label: 'Next.js', pos: 'top-10 -right-6' },
    { icon: <SiTailwindcss className="text-[#06B6D4]" size={20} />, label: 'Tailwind CSS', pos: 'bottom-8 -left-6' },
    { icon: <SiJavascript className="text-[#F7DF1E]" size={20} />, label: 'JavaScript', pos: '-bottom-4 right-4' },
  ]

  return (
    <section className="relative overflow-hidden pt-12 pb-20 px-6 max-w-6xl mx-auto">
      {/* Ambient Gradient Mesh Globs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none animate-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none animate-glow" />

      <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Content & Actions */}
        <div className="lg:col-span-7 text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-wide"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Available for Hire — Web Developer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink tracking-tight leading-tight"
          >
            Building Modern <br />
            <span className="bg-gradient-to-r from-accent via-accent to-secondary bg-clip-text text-transparent">
              Web Applications
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl"
          >
            Hi, I'm <strong className="text-ink font-bold">{profile.name}</strong>. {profile.tagline}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2.5 bg-accent text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
            >
              <FileDown size={18} />
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border-2 border-ink text-ink px-7 py-3.5 rounded-full font-bold text-sm hover:bg-ink hover:text-white transition-all shadow-md hover:-translate-y-0.5"
            >
              Explore Projects
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-6 pt-4 text-gray-500 border-t border-gray-200/80"
          >
            <span className="text-xs uppercase font-bold tracking-widest text-gray-400">Connect:</span>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-gray-200/60 hover:text-ink transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <BsGithub size={22} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-gray-200/60 hover:text-accent transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <LiaLinkedin size={26} />
            </a>
            <a
              href={profile.socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-gray-200/60 hover:text-accent transition-all hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebook size={22} />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Hero Visual Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          {/* Main Card */}
          <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 shadow-2xl relative z-10 hover:border-accent/40 transition-colors">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-secondary text-white font-black text-xl flex items-center justify-center shadow-md">
                  MS
                </div>
                <div>
                  <h3 className="font-bold text-ink text-base">{profile.name}</h3>
                  <p className="text-xs text-accent font-semibold">Web Developer</p>
                </div>
              </div>
              <Sparkles className="w-5 h-5 text-accent animate-pulse" />
            </div>

            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3 bg-surface p-3 rounded-xl border border-gray-200/80">
                <Code className="text-accent w-5 h-5 flex-shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-ink block">Frontend Engineering</span>
                  <span className="text-gray-600">React.js, Next.js, Tailwind CSS</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-surface p-3 rounded-xl border border-gray-200/80">
                <Flame className="text-secondary w-5 h-5 flex-shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-ink block">Backend & API Integration</span>
                  <span className="text-gray-600">Node.js, Express, MongoDB, REST APIs</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-surface p-3 rounded-xl border border-gray-200/80">
                <CheckCircle className="text-emerald-600 w-5 h-5 flex-shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-ink block">Shipped Applications</span>
                  <span className="text-gray-600">Full-Stack Web Apps & Interactive Systems</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Tech Badges around Card */}
          {floatingTech.map((tech, i) => (
            <motion.div
              key={tech.label}
              initial={{ y: 0 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}
              className={`absolute ${tech.pos} z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-gray-200 shadow-lg flex items-center gap-2 text-xs font-bold text-ink hidden sm:flex`}
            >
              {tech.icon}
              <span>{tech.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection

