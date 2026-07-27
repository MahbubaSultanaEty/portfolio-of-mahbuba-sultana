import { motion } from 'framer-motion'
import VersionTag from './VersionTag'
import { skills } from '../data/skills'
import { Layout, Server, Wrench, Sparkles } from 'lucide-react'

function SkillsSection() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-white/10 pb-6">
        <div>
          <VersionTag version="v0.4" label="toolkit assembled" />
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mt-3">
            Technical Stack & Tools
          </h2>
        </div>
        <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
          A modern web developer stack centered around React, JavaScript, responsive UI, and backend API engineering.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-8">
        {/* Left Column: Shiuly-3 Photo Highlight Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4 flex flex-col justify-between"
        >
          <div className="bg-gradient-to-br from-[#1A162B] to-[#120F1F] rounded-3xl border-2 border-purple-500/30 p-6 shadow-2xl relative overflow-hidden group hover:border-purple-500/60 transition-all flex flex-col h-full">
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-xl aspect-4/3 mb-6 group-hover:scale-[1.02] transition-transform duration-500">
              <img
                src="/shiuly-3.jpg"
                alt="Shiuli Flower Precision Photography"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B14] via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-200 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  Precision • Shiuli Stack
                </span>
                <Sparkles className="w-4 h-4 text-purple-300 animate-pulse" />
              </div>
            </div>

            <div className="space-y-3 relative z-10 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Architecting Modern Web Systems</h4>
                <p className="text-xs text-gray-300 leading-relaxed font-light italic">
                  Combining clean component architecture, state management, and modern styling to build performant web apps.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-purple-300 font-medium">
                <span>Frontend & Backend APIs</span>
                <span className="font-mono text-gray-400">Full-Stack Core</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3 Skill Category Cards */}
        <div className="lg:col-span-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Frontend Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#141022]/90 rounded-3xl border border-white/10 p-6 shadow-lg hover:shadow-purple-500/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="p-3 rounded-2xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
                  <Layout size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-white">{skills.frontend.heading}</h3>
                  <span className="text-xs text-purple-400 font-bold">Primary Focus</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.frontend.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-200 text-xs font-bold shadow-sm hover:scale-105 transition-transform"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Backend Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#141022]/90 rounded-3xl border border-white/10 p-6 shadow-lg hover:shadow-emerald-500/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <Server size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-white">{skills.backend.heading}</h3>
                  <span className="text-xs text-emerald-400 font-bold">Strong Understanding</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.backend.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-200 text-xs font-bold shadow-sm hover:scale-105 transition-transform"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tools & Workflow Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#141022]/90 rounded-3xl border border-white/10 p-6 shadow-lg hover:shadow-amber-500/10 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group sm:col-span-2 md:col-span-1"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  <Wrench size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-white">{skills.tools.heading}</h3>
                  <span className="text-xs text-amber-400 font-bold">Tools & Workflow</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.tools.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-200 text-xs font-bold hover:scale-105 transition-transform"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection

