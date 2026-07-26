import { motion } from 'framer-motion'
import VersionTag from './VersionTag'
import { skills } from '../data/skills'
import { Layout, Server, Wrench, Layers } from 'lucide-react'

function SkillsSection() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <VersionTag version="v0.4" label="toolkit assembled" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink tracking-tight mt-3">
            Technical Stack & Tools
          </h2>
        </div>
        <p className="text-gray-500 text-sm max-w-xs">
          A balanced developer stack focused on modern frontend engineering and robust API backends.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Frontend — Primary Focus (Accent Indigo #4B3F72) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl border-2 border-gray-200/90 p-8 shadow-sm hover:shadow-xl hover:border-accent transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-accent text-white shadow-md">
                  <Layout size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-ink">{skills.frontend.heading}</h3>
                  <span className="text-xs text-accent font-bold">Primary Focus</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {skills.frontend.items.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-xl bg-accent text-white text-xs font-bold shadow-sm hover:scale-105 transition-transform"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Backend — Secondary Teal (#2F6B5E) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-3xl border-2 border-gray-200/90 p-8 shadow-sm hover:shadow-xl hover:border-secondary transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-secondary text-white shadow-md">
                  <Server size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-ink">{skills.backend.heading}</h3>
                  <span className="text-xs text-secondary font-bold">Strong Understanding</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {skills.backend.items.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-xl bg-secondary text-white text-xs font-bold shadow-sm hover:scale-105 transition-transform"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tools & Workflow — Neutral Grays */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-3xl border-2 border-gray-200/90 p-8 shadow-sm hover:shadow-xl hover:border-gray-400 transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-ink text-white shadow-md">
                  <Wrench size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-ink">{skills.tools.heading}</h3>
                  <span className="text-xs text-gray-500 font-bold">Tools & Environment</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {skills.tools.items.map((item) => (
                <span
                  key={item}
                  className="px-3.5 py-2 rounded-xl bg-surface border-2 border-gray-200 text-gray-800 text-xs font-bold hover:border-ink transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
