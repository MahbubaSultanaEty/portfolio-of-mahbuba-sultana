import { motion } from 'framer-motion'
import VersionTag from './VersionTag'
import { education } from '../data/education'
import { GraduationCap, Award, BookOpen } from 'lucide-react'

function EducationSection() {
  const categories = Object.values(education)
  const categoryIcons = [
    <GraduationCap className="w-5 h-5 text-accent" />,
    <BookOpen className="w-5 h-5 text-secondary" />,
    <Award className="w-5 h-5 text-accent" />,
  ]

  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <VersionTag version="v0.5 → v0.6" label="foundations" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink tracking-tight mt-3">
            Education & Learning Milestones
          </h2>
        </div>
        <p className="text-gray-500 text-sm max-w-xs">
          Structured learning, online coursework, and continuous practice.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((category, catIdx) => (
          <motion.div
            key={category.heading}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            className="bg-white rounded-3xl border-2 border-gray-200/90 p-8 shadow-sm hover:shadow-xl hover:border-accent/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="p-2.5 rounded-2xl bg-surface border border-gray-200">
                  {categoryIcons[catIdx % categoryIcons.length]}
                </div>
                <h3 className="text-base font-extrabold text-ink uppercase tracking-wider">
                  {category.heading}
                </h3>
              </div>

              <div className="space-y-6">
                {category.items.map((entry) => (
                  <div
                    key={entry.title}
                    className="border-l-2 border-accent/50 pl-4 relative group"
                  >
                    <span className="inline-block text-xs font-bold text-accent bg-accent/10 rounded-full px-3 py-1 mb-2 font-mono">
                      {entry.period}
                    </span>
                    <h4 className="text-lg font-bold text-ink group-hover:text-accent transition-colors">
                      {entry.title}
                    </h4>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed font-normal">
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
