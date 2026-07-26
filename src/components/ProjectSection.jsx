import VersionTag from './VersionTag'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'
import { profile } from '../data/profile'

function ProjectsSection() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <VersionTag version="v1.0 → v1.3" label="shipped" />
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-accent border border-accent rounded-full px-4 py-1.5 hover:bg-accent hover:text-white transition"
        >
          View All on GitHub →
        </a>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection