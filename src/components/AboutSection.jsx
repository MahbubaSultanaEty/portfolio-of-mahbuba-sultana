import { motion } from 'framer-motion'
import { Code2, Camera, Sparkles } from 'lucide-react'
import VersionTag from './VersionTag'

function AboutSection() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <VersionTag version="v0.3" label="finding my footing" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink tracking-tight mt-3">
            Philosophy & Mindset
          </h2>
        </div>
        <p className="text-gray-500 text-sm max-w-xs">
          Approaching code through careful observation, detail, and system building.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl border-2 border-gray-200/90 p-8 md:p-10 shadow-sm hover:shadow-xl hover:border-accent/50 transition-all duration-300 relative overflow-hidden"
        >
          <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6 border border-accent/20">
            <Code2 size={24} />
          </div>
          <h3 className="text-2xl font-bold text-ink mb-4 flex items-center gap-2">
            <span>Craft & Detail-Heavy UI</span>
            <Sparkles className="w-4 h-4 text-accent" />
          </h3>
          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            What I enjoy building most is polished, detail-heavy interfaces — the kind of UI
            work where spacing, motion, and small interactions are as deliberate as the logic
            underneath. But I care just as much about the full picture: taking something from
            an idea to a real, working, end-to-end product, not just the screens on top.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-white rounded-3xl border-2 border-gray-200/90 p-8 md:p-10 shadow-sm hover:shadow-xl hover:border-secondary/50 transition-all duration-300 relative overflow-hidden"
        >
          <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6 border border-secondary/20">
            <Camera size={24} />
          </div>
          <h3 className="text-2xl font-bold text-ink mb-4 flex items-center gap-2">
            <span>Observation & Perspective</span>
          </h3>
          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            Outside of code, I'm drawn to photography — not as a professional pursuit, just a
            habit of noticing. I like capturing quiet moments and nature, the kind of thing
            that's easy to walk past. It's part of a bigger pattern with me: I tend to observe
            before I interact. I get closer to something by looking at it carefully first —
            which, thinking about it, is probably true of how I approach code too.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
