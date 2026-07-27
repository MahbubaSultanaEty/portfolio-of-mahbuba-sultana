import { motion } from 'framer-motion'
import VersionTag from './VersionTag'
import { Sparkles, Compass, Lightbulb, Code2, Snowflake } from 'lucide-react'

const storySteps = [
  {
    version: 'v0.1',
    label: 'Initial Curiosity',
    icon: <Compass className="w-5 h-5 text-purple-400" />,
    text: `A relative first pointed me toward programming — a few free HTML/CSS videos on YouTube. Honestly, none of it clicked. I couldn't connect the syntax to anything real, and quietly decided coding "wasn't my thing."`,
  },
  {
    version: 'v0.2',
    label: 'The Catalyst',
    icon: <Lightbulb className="w-5 h-5 text-amber-400" />,
    text: `In September 2025, I wanted to edit a "Shiuli" flower photo replacing the middle “o” in the word “October” with a small flower, and while exploring how to do it, ChatGPT introduced me to coding and image tools. That led me to ask if someone with no technical background could actually learn programming. The answer was yes — and I started my journey with freeCodeCamp, beginning from zero.`,
  },
  {
    version: 'v0.3',
    label: 'Building & Breaking',
    icon: <Code2 className="w-5 h-5 text-emerald-400" />,
    text: `By January 2026, I moved into a structured, deadline-based course — real modules, real assignments, real projects. That's where things started making sense: building, breaking, fixing.`,
  },
  {
    version: 'v0.4',
    label: 'Core Language Mastery',
    icon: <Sparkles className="w-5 h-5 text-purple-400" />,
    text: `The course leans quite on React and Next.js — rightly so, given how the industry runs today. But I still go back to freeCodeCamp to practice vanilla JavaScript on the side. Frameworks change fast; I want the core language itself to stick.`,
  },
]

function StorySection() {
  return (
    <section id="story" className="max-w-6xl mx-auto px-6 py-16">
<div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
        <img
          src="/shiuly-1.png"
          alt=""
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0B14] via-[#0D0B14]/80 to-[#0D0B14]" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-3">
            <VersionTag version="v0.1 → v0.2" label="the turning point" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <Snowflake className="w-6 h-6 text-purple-300" />
            </motion.div>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mt-3">
            The Journey Into Code
          </h2>
        </div>
        <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
          How a quiet moment with a Shiuli flower photo turned into a software development pursuit.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {storySteps.map((step, index) => (
          <motion.div
            key={step.version}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-[#141022]/90 rounded-3xl border border-white/10 p-6 shadow-lg hover:shadow-purple-500/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                whileHover={{ rotate: 12, scale: 1.15 }}
                className="p-2.5 rounded-2xl bg-white/5 border border-white/10"
              >
                {step.icon}
              </motion.div>
              <span className="font-mono text-xs font-bold text-purple-300 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30">
                {step.version}
              </span>
            </div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              {step.label}
            </span>
            <p className="text-sm text-gray-300 leading-relaxed">
              {step.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default StorySection