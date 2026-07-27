import VersionTag from './VersionTag'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'
import { profile } from '../data/profile'
import { BsGithub } from 'react-icons/bs'

function ProjectsSection() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-white/10 pb-6">
        <div>
          <VersionTag version="v1.0 → v1.3" label="shipped" />
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mt-3">
            Featured Projects & Applications
          </h2>
        </div>
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2.5 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 border border-purple-400/30 px-6 py-3 rounded-full hover:from-purple-500 hover:to-indigo-500 transition-all shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5"
        >
          <BsGithub size={16} />
          View All Repositories on GitHub →
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection

