import { motion } from 'framer-motion'
import { Code2, Camera, Sparkles, Eye } from 'lucide-react'
import VersionTag from './VersionTag'

function AboutSection() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-white/10 pb-6">
        <div>
          <VersionTag  label="finding my footing" />
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mt-3">
            Philosophy & Mindset
          </h2>
        </div>
        <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
          Approaching code through careful observation, attention to micro-details, and structured systems.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Philosophy Cards */}
        <div className="lg:col-span-7 grid gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#141022]/90 rounded-3xl border border-white/10 p-8 shadow-lg hover:shadow-purple-500/10 hover:border-purple-500/40 transition-all duration-300 relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6 border border-purple-500/20">
              <Code2 size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span>Craft & Detail-Heavy UI</span>
              <Sparkles className="w-4 h-4 text-purple-400" />
            </h3>
            <p className="text-base text-gray-300 leading-relaxed font-light">
              What I enjoy building most is polished, detail-heavy interfaces — the kind of UI
              work where spacing, micro-interactions, and fluid motions are as deliberate as the
              backend logic underneath. I take pride in building complete end-to-end applications
              from design systems to deployed code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#141022]/90 rounded-3xl border border-white/10 p-8 shadow-lg hover:shadow-emerald-500/10 hover:border-emerald-500/40 transition-all duration-300 relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 border border-emerald-500/20">
              <Camera size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span>Observation & Perspective</span>
              <Eye className="w-4 h-4 text-emerald-400" />
            </h3>
            <p className="text-base text-gray-300 leading-relaxed font-light">
              Outside of software development, I practice photography as a habit of noticing the quiet details
              and natural beauty around me. Observing first before jumping into action defines how I approach complex codebase architectures and user experience design.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Shiuli-2 Photo Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-between"
        >
          <div className="bg-gradient-to-br from-[#1A162B] to-[#120F1F] rounded-3xl border-2 border-emerald-500/30 p-6 shadow-2xl relative overflow-hidden group hover:border-emerald-500/60 transition-all flex flex-col h-full">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* Photo Container */}
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-xl aspect-4/3 mb-6 group-hover:scale-[1.02] transition-transform duration-500">
              <img
                src="/shiuly-2.jpg"
                alt="Shiuli Flower Perspective Photography"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B14] via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-200 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  Perspective • Shiuli Detail
                </span>
                <Sparkles className="w-4 h-4 text-emerald-300 animate-pulse" />
              </div>
            </div>

            {/* Philosophy quote */}
            <div className="space-y-3 relative z-10 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold text-white mb-2">The Eye for Micro-Details</h4>
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-light italic">
                  "Great engineering and great user interfaces come down to noticing the subtle things others overlook. Photography taught me how to see structure before writing code."
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-emerald-300 font-medium">
                <span>Detail-Oriented Mindset</span>
                <span className="font-mono text-gray-400">UI / UX & Architecture</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection


