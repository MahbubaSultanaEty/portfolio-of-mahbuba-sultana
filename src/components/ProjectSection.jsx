import VersionTag from './VersionTag'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'
import { profile } from '../data/profile'
import { BsGithub } from 'react-icons/bs'

function ProjectsSection() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <VersionTag version="v1.0 → v1.3" label="shipped" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink tracking-tight mt-3">
            Featured Projects & Applications
          </h2>
        </div>
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2.5 text-xs font-bold text-white bg-accent px-5 py-2.5 rounded-full hover:bg-accent/90 transition-all shadow-md hover:shadow-lg"
        >
          <BsGithub size={16} />
          View All Code on GitHub →
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
