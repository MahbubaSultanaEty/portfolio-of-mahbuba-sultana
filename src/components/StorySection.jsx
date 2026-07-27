import { motion } from 'framer-motion'
import VersionTag from './VersionTag'
import { Sparkles, Compass, Lightbulb, Code2 } from 'lucide-react'

const storySteps = [
  {
    version: 'v0.1',
    label: 'Initial Curiosity',
    icon: <Compass className="w-5 h-5 text-accent" />,
    text: `A relative first pointed me toward programming — a few free HTML/CSS videos on YouTube. Honestly, none of it clicked. I couldn't connect the syntax to anything real, and quietly decided coding "wasn't my thing."`,
  },
  {
    version: 'v0.2',
    label: 'The Catalyst',
    icon: <Lightbulb className="w-5 h-5 text-secondary" />,
    text: `That changed in September 2025. I wanted to swap the "o" in "October" for a small flower in a photo. Asking how led me to a bigger question: could someone with zero background learn to code from a phone? The answer was freeCodeCamp.`,
  },
  {
    version: 'v0.3',
    label: 'Building & Breaking',
    icon: <Code2 className="w-5 h-5 text-accent" />,
    text: `By January 2026, I moved into a structured, deadline-based course — real modules, real assignments, real projects. That's where things started making sense: building, breaking, fixing.`,
  },
  {
    version: 'v0.4',
    label: 'Core Language Mastery',
    icon: <Sparkles className="w-5 h-5 text-secondary" />,
    text: `The course leans heavily on React and Next.js — rightly so, given how the industry runs today. But I still go back to freeCodeCamp to practice vanilla JavaScript on the side. Frameworks change fast; I want the core language itself to stick.`,
  },
]
function StorySection() {
  return (
    <section id="story" className="max-w-6xl mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-gray-200 pb-6">
        <div>
          <VersionTag version="v0.1 → v0.2" label="the turning point" />
          <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mt-3">
            The Journey Into Code
          </h2>
        </div>
        <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
          How a quiet moment with a Shiuli flower photo turned into a software development pursuit.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Steps — 2x2 grid instead of stacked single column */}
        <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
          {storySteps.map((step, index) => (
            <motion.div
              key={step.version}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-accent/40 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-gray-50 border border-gray-200">
                    {step.icon}
                  </div>
                  <span className="font-mono text-xs font-semibold text-accent px-3 py-1 rounded-full bg-accent/10">
                    {step.version}
                  </span>
                </div>
              </div>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                {step.label}
              </span>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Photo card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4"
        >
          <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm lg:sticky lg:top-28">
            <div className="relative rounded-xl overflow-hidden border border-gray-100 aspect-4/3 mb-5">
              <img
                src="/shiuly-1.png"
                alt="Shiuli Flower Photo - The Catalyst"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-3 left-3">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-white bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                  Origin Photo • Shiuli Flower
                </span>
              </div>
            </div>

            <h3 className="text-lg font-bold text-ink mb-2">The Spark of Curiosity</h3>
            <p className="text-sm text-gray-600 leading-relaxed italic">
              "It started with a photo of a Shiuli flower and a simple question: could someone with zero tech background learn to program?"
            </p>

            <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Self-Taught & Driven
              </span>
              <span className="font-mono">Sep 2025 – Present</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StorySection