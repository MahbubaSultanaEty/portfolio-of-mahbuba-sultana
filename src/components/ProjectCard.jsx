import { Link } from 'react-router-dom'

function ProjectCard({ project }) {
  return (
    <div className="rounded-2xl border border-gray-200 overflow-hidden flex flex-col h-full">
      <div className="h-40 bg-gray-100 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-ink text-lg">{project.name}</h3>
        <p className="text-gray-600 text-sm mt-2 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tech.slice(0, 3).map((tech) => (
            <span key={tech} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
              {tech}
            </span>
          ))}
        </div>

        <Link
          to={`/projects/${project.slug}`}
          className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
        >
          View Details →
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard