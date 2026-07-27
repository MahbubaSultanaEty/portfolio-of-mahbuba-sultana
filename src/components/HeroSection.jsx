
import { motion } from 'framer-motion'
import { FileDown, ArrowRight, Sparkles, Code, CheckCircle2, HeartHandshake } from 'lucide-react'
import { profile } from '../data/profile'
import { BsGithub } from 'react-icons/bs'
import { LiaLinkedin } from 'react-icons/lia'
import { FaFacebook } from 'react-icons/fa'
import { SiReact, SiNextdotjs, SiTailwindcss, SiJavascript } from 'react-icons/si'
import heroPhoto from '../assets/mahbuba-sultana.png'
import avatarImg from '../assets/avatar.png'

function HeroSection() {
  const floatingTech = [
    {
      icon: <SiReact className="text-[#61DAFB]" size={22} />,
      label: 'React.js Specialist',
      pos: '-top-4 -left-6 sm:-left-10',
      delay: 0,
    },
    {
      icon: <SiNextdotjs className="text-black" size={22} />,
      label: 'Next.js & Full-Stack',
      pos: 'top-10 -right-6 sm:-right-12',
      delay: 1,
    },
    {
      icon: <SiTailwindcss className="text-[#06B6D4]" size={22} />,
      label: 'Tailwind CSS',
      pos: 'bottom-16 -left-6 sm:-left-12',
      delay: 2,
    },
    {
      icon: <SiJavascript className="text-[#F7DF1E]" size={22} />,
      label: 'JavaScript Core',
      pos: '-bottom-6 right-2 sm:right-6',
      delay: 1.5,
    },
  ]

  return (
    <section className="relative overflow-hidden pt-10 pb-20 px-6 max-w-6xl mx-auto">
      {/* Background Glow Mesh */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl pointer-events-none animate-glow" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-secondary/15 rounded-full blur-3xl pointer-events-none animate-glow" />

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Headline, Bio & CTAs */}
        <div className="lg:col-span-7 text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-extrabold tracking-wide shadow-sm"
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
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink tracking-tight leading-[1.15]"
          >
            Building Modern <br />
            <span className="bg-gradient-to-r from-accent via-purple-600 to-secondary bg-clip-text text-transparent">
              Web Applications
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl font-normal"
          >
            Hi, I'm <strong className="text-ink font-extrabold">{profile.name}</strong>. {profile.tagline}
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
              className="inline-flex items-center gap-2.5 bg-accent text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-accent/90 transition-all shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 group"
            >
              <FileDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border-2 border-ink text-ink px-8 py-4 rounded-full font-bold text-sm hover:bg-ink hover:text-white transition-all shadow-md hover:-translate-y-0.5 group"
            >
              Explore Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Connect & Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-6 pt-4 text-gray-500 border-t border-gray-200/80"
          >
            <span className="text-xs uppercase font-extrabold tracking-widest text-gray-400">Connect:</span>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full hover:bg-gray-200/60 hover:text-ink transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <BsGithub size={22} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full hover:bg-gray-200/60 hover:text-accent transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <LiaLinkedin size={26} />
            </a>
            <a
              href={profile.socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full hover:bg-gray-200/60 hover:text-accent transition-all hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebook size={22} />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Circular Photo Frame & Animated Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center relative my-6 lg:my-0"
        >
          <div className="relative flex items-center justify-center">
            {/* Spinning Outer Ring */}
            <div className="absolute inset-[-18px] sm:inset-[-24px] border-2 border-dashed border-accent/40 rounded-full animate-spin-slow pointer-events-none" />

            {/* Glowing Accent Ring */}
            <div className="absolute inset-[-8px] bg-gradient-to-tr from-accent via-purple-500 to-emerald-400 rounded-full blur-md opacity-40 animate-pulse" />

            {/* Circle Photo Container */}
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10 bg-white group">
              <img
                src={heroPhoto}
                alt="Mahbuba Sultana"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Floating Tech Badges */}
            {floatingTech.map((tech, i) => (
              <motion.div
                key={tech.label}
                initial={{ y: 0 }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: tech.delay,
                }}
                className={`absolute ${tech.pos} z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-gray-200 shadow-xl flex items-center gap-2.5 text-xs font-bold text-ink hidden sm:flex hover:scale-105 transition-transform`}
              >
                {tech.icon}
                <span>{tech.label}</span>
              </motion.div>
            ))}

            {/* Floating Bottom Status Pill */}
            {/* <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 bg-white/95 backdrop-blur-md border-2 border-accent/30 px-5 py-2 rounded-full shadow-2xl flex items-center gap-2 text-xs font-extrabold text-ink whitespace-nowrap"
            >
              <img src={avatarImg} alt="Logo" className="w-5 h-5 rounded-full object-cover" />
              <span>Full-Stack & React Developer</span>
              <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            </motion.div> */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection



