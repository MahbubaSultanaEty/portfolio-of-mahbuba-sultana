import VersionTag from './VersionTag'
import { skills } from '../data/skills'

function SkillsSection() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-24">
  <VersionTag version="v0.4" label="toolkit assembled" />

  <div className="mt-8 grid md:grid-cols-3 gap-10">
        {/* Frontend — largest, most prominent */}
        <div>
          <div className="flex items-baseline gap-2 mb-3">
            <h3 className="text-xl font-bold text-ink">{skills.frontend.heading}</h3>
            <span className="text-xs text-accent font-medium">{skills.frontend.note}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.frontend.items.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-accent text-white text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Backend — smaller, explicitly labeled */}
        <div>
          <div className="flex items-baseline gap-2 mb-3">
            <h3 className="text-base font-semibold text-gray-700">{skills.backend.heading}</h3>
            <span className="text-xs text-gray-400">{skills.backend.note}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.backend.items.map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 rounded-full border border-gray-300 text-gray-600 text-xs"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Tools — smallest */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 mb-3">{skills.tools.heading}</h3>
          <div className="flex flex-wrap gap-2">
            {skills.tools.items.map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full text-gray-400 text-xs border border-gray-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection