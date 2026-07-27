import { motion } from 'framer-motion'
import VersionTag from './VersionTag'
import { education } from '../data/education'
import { GraduationCap, Award, BookOpen } from 'lucide-react'

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

      {/* Full-width row: 3 category cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, catIdx) => (
          <motion.div
            key={category.heading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-[#141022]/90 rounded-3xl border border-white/10 p-6 shadow-lg hover:shadow-purple-500/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  className="p-2.5 rounded-2xl bg-white/5 border border-white/10"
                >
                  {categoryIcons[catIdx % categoryIcons.length]}
                </motion.div>
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
    </section>
  )
}

export default EducationSection