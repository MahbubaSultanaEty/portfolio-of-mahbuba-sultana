import VersionTag from './VersionTag'
import { education } from '../data/education'
import { CloudCog } from 'lucide-react'

function EducationSection() {
  const categories = Object.values(education)
console.log(categories)
  return (
    <section id="education" className="max-w-5xl mx-auto px-6 py-24">
      <VersionTag version="v0.5 → v0.6" label="foundations" />

      <div className="mt-8 grid md:grid-cols-3 gap-10">
        {categories.map((category) => (
          <div key={category.heading}>
            
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
              {category.heading}
            </h3>
            <div className="space-y-6">
              {category.items.map((entry) => (
                <div key={entry.title} className="border-l-2 border-gray-200 pl-4">
                  <p className="text-xs font-medium text-accent mb-1">{entry.period}</p>
                  <h4 className="text-base font-semibold text-ink">{entry.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{entry.detail}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default EducationSection