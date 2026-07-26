import { motion } from 'framer-motion'
import VersionTag from './VersionTag'
import { Sparkles, Compass, Lightbulb, Code2 } from 'lucide-react'

const storySteps = [
  {
    version: 'v0.1',
    label: 'Initial Curiosity',
    icon: <Compass className="w-5 h-5 text-accent" />,
    text: `I didn't come into programming through a computer science path. A relative first pointed me toward it, and I did the usual thing — a few free HTML/CSS videos on YouTube. Honestly, none of it clicked. I couldn't connect the syntax to anything real, and I quietly decided coding "wasn't my thing."`,
  },
  {
    version: 'v0.2',
    label: 'The Catalyst',
    icon: <Lightbulb className="w-5 h-5 text-secondary" />,
    text: `That changed by accident, in September 2025. I'd taken a photo I liked and wanted to edit it — swap the middle "o" in the word "October" for a small flower. I asked ChatGPT how to do it, and it couldn't quite get what I meant. When I asked how I could do it myself, it pointed me toward image editing tools, or code. That's the part that stuck with me. I asked it a pretty basic question: could someone with zero technical background actually learn to code, starting from a phone? It said yes — and pointed me toward a few beginner-friendly platforms. I picked freeCodeCamp, since it was free and structured enough for someone starting from nothing.`,
  },
  {
    version: 'v0.3',
    label: 'Building & Breaking',
    icon: <Code2 className="w-5 h-5 text-accent" />,
    text: `By January 2026, I moved into a more structured, deadline-based course — real modules, real assignments, real projects instead of just watching videos. That's where things actually started making sense: building, breaking, fixing.`,
  },
  {
    version: 'v0.4',
    label: 'Core Understanding',
    icon: <Sparkles className="w-5 h-5 text-secondary" />,
    text: `That course leans heavily on libraries and frameworks like React and Next.js — and rightly so, since that's what this era of development actually runs on. But I still go back to freeCodeCamp on the side to practice vanilla JavaScript. Frameworks move fast and change often; I want the core language itself to be something I actually understand, not just something I'm abstracted away from.`,
  },
]

function StorySection() {
  return (
    <section id="story" className="max-w-6xl mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <VersionTag version="v0.1 → v0.2" label="the turning point" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink tracking-tight mt-3">
            The Journey Into Code
          </h2>
        </div>
        <p className="text-gray-500 text-sm max-w-xs">
          How curiosity turned into deliberate engineering and problem solving.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {storySteps.map((step, index) => (
          <motion.div
            key={step.version}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-3xl border border-gray-200/90 p-8 shadow-sm hover:shadow-xl hover:border-accent/40 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/50 to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-surface border border-gray-200">
                    {step.icon}
                  </div>
                  <span className="font-mono text-xs font-bold text-accent px-2.5 py-1 rounded-full bg-accent/10">
                    {step.version}
                  </span>
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  {step.label}
                </span>
              </div>

              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-normal">
                {step.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default StorySection
