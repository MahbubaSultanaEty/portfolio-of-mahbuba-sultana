import { motion } from 'framer-motion'
import VersionTag from './VersionTag'
import { Sparkles, Compass, Lightbulb, Code2 } from 'lucide-react'

const storySteps = [
  {
    version: 'v0.1',
    label: 'Initial Curiosity',
    icon: <Compass className="w-5 h-5 text-purple-400" />,
    text: `I didn't come into programming through a traditional computer science degree. A relative first pointed me toward it, and I did the usual thing — watched basic HTML/CSS videos on YouTube. Honestly, none of it clicked at first, and I almost decided coding wasn't for me.`,
  },
  {
    version: 'v0.2',
    label: 'The Catalyst',
    icon: <Lightbulb className="w-5 h-5 text-amber-400" />,
    text: `Everything changed in September 2025. I took a photo of a Shiuli (night-flowering jasmine) flower and wanted to edit it — replacing a letter with the blossom. Asking how to build and edit things led me down the rabbit hole: could someone start from scratch, even on a phone? That question sparked my daily commitment to code.`,
  },
  {
    version: 'v0.3',
    label: 'Building & Breaking',
    icon: <Code2 className="w-5 h-5 text-emerald-400" />,
    text: `By January 2026, I enrolled in a structured software development course with real-world deadlines, modular assignments, and full-stack projects. Building real applications, breaking code, and debugging is where abstract theory became muscle memory.`,
  },
  {
    version: 'v0.4',
    label: 'Core Language Mastery',
    icon: <Sparkles className="w-5 h-5 text-purple-400" />,
    text: `While leveraging modern frameworks like React and Next.js, I continuously reinforce core JavaScript, web standards, and system logic. Frameworks evolve fast — strong foundational problem-solving endures.`,
  },
]

function StorySection() {
  return (
    <section id="story" className="max-w-6xl mx-auto px-6 py-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-white/10 pb-6">
        <div>
          <VersionTag version="v0.1 → v0.2" label="the turning point" />
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mt-3">
            The Journey Into Code
          </h2>
        </div>
        <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
          How a quiet moment with a Shiuli flower photo turned into a passionate software engineering pursuit.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        {/* Left/Main Column: Story Timeline Steps */}
        <div className="lg:col-span-7 grid gap-6">
          {storySteps.map((step, index) => (
            <motion.div
              key={step.version}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#141022]/90 rounded-3xl border border-white/10 p-6 md:p-7 shadow-lg hover:shadow-purple-500/10 hover:border-purple-500/40 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-accent to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10">
                    {step.icon}
                  </div>
                  <span className="font-mono text-xs font-bold text-purple-300 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30">
                    {step.version}
                  </span>
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  {step.label}
                </span>
              </div>

              <p className="text-sm md:text-base text-gray-300 leading-relaxed font-normal">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Featured Shiuli Photo Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-between"
        >
          <div className="bg-gradient-to-br from-[#1A162B] to-[#120F1F] rounded-3xl border-2 border-purple-500/30 p-6 shadow-2xl relative overflow-hidden group hover:border-purple-500/60 transition-all flex flex-col h-full">
            {/* Background Ambient Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/30 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Photo Container */}
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-xl aspect-4/3 mb-6 group-hover:scale-[1.02] transition-transform duration-500">
              <img
                src="/shiuly-1.png"
                alt="Shiuli Flower Photo - The Catalyst"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B14] via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-200 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  Origin Photo • Shiuli Flower
                </span>
                <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              </div>
            </div>

            {/* Narrative Callout */}
            <div className="space-y-3 relative z-10 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span>The Spark of Curiosity</span>
                </h3>
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-light italic">
                  "It started with a photo of a Shiuli flower and a simple question: could someone with zero tech background learn to program? That single curiosity transformed into my life's work."
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-purple-300 font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Self-Taught & Driven
                </span>
                <span className="font-mono text-gray-400">Sep 2025 - Present</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StorySection

