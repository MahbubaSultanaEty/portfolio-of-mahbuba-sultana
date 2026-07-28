import { motion } from "framer-motion"
import { Layout, Server, Wrench, Sparkles } from "lucide-react"
import { skills } from "../data/skills"

const sections = [
  {
    title: "Frontend Engineering",
    icon: Layout,
    subtitle: "Building modern interfaces with component-driven architecture",
    skills: skills.frontend.items,
    progress: [
      { name: "React.js / Next.js", value: "95%" },
      { name: "JavaScript", value: "92%" },
      { name: "TypeScript", value: "82%" },
      { name: "Tailwind CSS", value: "94%" },
    ],
  },
  {
    title: "Backend & Architecture",
    icon: Server,
    subtitle: "Designing APIs, databases and scalable application logic",
    skills: skills.backend.items,
    progress: [
      { name: "Node.js & Express.js", value: "85%" },
      { name: "MongoDB & Mongoose", value: "82%" },
      { name: "Authentication", value: "88%" },
      { name: "REST API Design", value: "85%" },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    subtitle: "Development workflow and collaboration tools",
    skills: skills.tools.items,
    progress: null,
  },
]

const reveal = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
}

function SkillsSection() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between gap-8 mb-12 border-b border-white/10 pb-8"
      >
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">
             Technical Expertise
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-black text-white tracking-tight">
            Technical Stack & Skill Architecture
          </h2>
          <p className="mt-4 max-w-xl text-sm text-gray-400 leading-relaxed">
            A frontend-focused technology stack with strong backend understanding — combining
            clean architecture, modern UI systems, and scalable development practices.
          </p>
        </div>

        <div className="flex gap-2 items-start">
          <span className="px-4 py-2 rounded-lg bg-primary/20 border border-primary/40 text-primary text-xs font-bold">
            Frontend Focus
          </span>
          <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 text-xs">
            Full Stack
          </span>
        </div>
      </motion.div>

      {/* Architecture Cards */}
      <div className="space-y-8">
        {sections.map((section, index) => {
          const Icon = section.icon
          return (
            <motion.div
              key={section.title}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-card/80 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl"
            >
              <div className="flex items-center gap-4 mb-7">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{section.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{section.subtitle}</p>
                </div>
              </div>

              {section.progress && (
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {section.progress.map((item) => (
                    <div key={item.name} className="bg-background border border-white/10 rounded-2xl p-4">
                      <div className="flex justify-between mb-3">
                        <span className="text-sm text-gray-200 font-medium">{item.name}</span>
                        <span className="text-xs text-primary font-mono">{item.value}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div
                          style={{ width: item.value }}
                          className="h-full bg-gradient-to-r from-primary to-purple-400 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className={`flex flex-wrap gap-2 border-t border-white/10 pt-5 ${!section.progress ? "" : ""}`}>
                {section.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-xs text-gray-300 bg-white/[0.04] border border-white/10 hover:border-primary/40 hover:text-primary transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Shiuli image card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-8 bg-card/80 border border-white/10 rounded-3xl p-6 backdrop-blur-xl flex flex-col sm:flex-row items-center gap-6"
      >
        <div className="w-full sm:w-52 h-40 rounded-2xl overflow-hidden border border-white/10 flex-shrink-0">
          <img src="/shiuly-3.jpg" alt="Shiuli flower" className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="text-white font-bold text-lg mb-2">Architecting Modern Web Systems</h4>
          <p className="text-sm text-gray-400 leading-relaxed">
            Combining clean component architecture, state management, and modern styling to build
            performant, maintainable web applications — the same care I bring to every detail of this stack.
          </p>
        </div>
      </motion.div>

      {/* Philosophy teaser */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 flex items-center gap-4"
      >
        <Sparkles className="text-yellow-400" />
        <p className="text-sm text-gray-300">
          Building with modern tools while keeping focus on clean structure, thoughtful UI decisions,
          and maintainable code.
        </p>
      </motion.div>
    </section>
  )
}

export default SkillsSection