import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { DiGithub } from 'react-icons/di'

function ProjectCard({ project, index = 0 }) {
  return (
     <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-300 hover:text-purple-200 hover:gap-3 transition-all"
          >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#141022]/90 rounded-3xl border border-white/10 overflow-hidden flex flex-col h-full shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
    >
     
      <div className="h-52 bg-[#0D0B14] overflow-hidden relative border-b border-white/10">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B14] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity flex items-end p-4">
          <span className="text-purple-200 text-xs font-mono tracking-wide">Explore Case Study & Details →</span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-3">
            <h3 className="font-bold text-white text-xl group-hover:text-purple-300 transition-colors">
              {project.name}
            </h3>
            <div className="flex items-center gap-2 text-gray-400">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-purple-500/20 hover:text-purple-300 transition-all"
                  aria-label="Live Demo"
                  title="Live Demo"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={16} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/15 hover:text-white transition-all"
                  aria-label="GitHub Repository"
                  title="Source Code"
                  onClick={(e) => e.stopPropagation()}
                >
                  <DiGithub size={18} />
                </a>
              )}
            </div>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed mb-4 font-light line-clamp-3">
            {project.description}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono font-medium px-3 py-1 rounded-full bg-white/5 text-purple-200 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-300 hover:text-purple-200 hover:gap-3 transition-all"
          >
            View Details & Technical Case Study
            <ArrowRight size={16} />
          </Link>
        </div>
        </div>
       
      </motion.div>
       </Link>
  )
}

export default ProjectCard

