import { motion } from 'framer-motion'
import VersionTag from './VersionTag'
import { education } from '../data/education'
import { GraduationCap, Award, BookOpen, Sparkles } from 'lucide-react'

function EducationSection() {
  const categories = Object.values(education)
  const categoryIcons = [
    <GraduationCap className="w-5 h-5 text-purple-400" />,
    <BookOpen className="w-5 h-5 text-emerald-400" />,
    <Award className="w-5 h-5 text-amber-400" />,
  ]

  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-white/10 pb-6">
        <div>
          <VersionTag version="v0.5 → v0.6" label="foundations" />
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mt-3">
            Education & Learning Milestones
          </h2>
        </div>
        <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
          Structured learning, practical coursework, certifications, and continuous self-driven projects.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: 3 Education & Certificate Cards */}
        <div className="lg:col-span-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category.heading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="bg-[#141022]/90 rounded-3xl border border-white/10 p-6 shadow-lg hover:shadow-purple-500/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10">
                    {categoryIcons[catIdx % categoryIcons.length]}
                  </div>
                  <h3 className="text-xs font-extrabold text-white uppercase tracking-wider">
                    {category.heading}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.items.map((entry) => (
                    <div
                      key={entry.title}
                      className="border-l-2 border-purple-500/50 pl-4 relative group"
                    >
                      <span className="inline-block text-[11px] font-bold text-purple-300 bg-purple-500/15 rounded-full px-3 py-1 mb-2 font-mono">
                        {entry.period}
                      </span>
                      <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                        {entry.title}
                      </h4>
                      <p className="text-gray-300 text-xs mt-1 leading-relaxed font-light">
                        {entry.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Shiuly-4 Photo Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4 flex flex-col justify-between"
        >
          <div className="bg-gradient-to-br from-[#1A162B] to-[#120F1F] rounded-3xl border-2 border-purple-500/30 p-6 shadow-2xl relative overflow-hidden group hover:border-purple-500/60 transition-all flex flex-col h-full">
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-xl aspect-4/3 mb-6 group-hover:scale-[1.02] transition-transform duration-500">
              <img
                src="/shiuly-4.png"
                alt="Shiuli Flower Milestone Photography"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B14] via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-200 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  Continuous Growth • Shiuli
                </span>
                <Sparkles className="w-4 h-4 text-purple-300 animate-pulse" />
              </div>
            </div>

            <div className="space-y-3 relative z-10 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Committed to Lifelong Learning</h4>
                <p className="text-xs text-gray-300 leading-relaxed font-light italic">
                  "Every assignment, bug fix, and project adds another building block toward technical mastery and software craft."
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-purple-300 font-medium">
                <span>Structured & Hands-on</span>
                <span className="font-mono text-gray-400">Certificates & Code</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EducationSection

