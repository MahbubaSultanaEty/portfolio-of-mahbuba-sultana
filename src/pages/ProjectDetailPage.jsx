import { useParams, Link } from 'react-router-dom'
import { ExternalLink,  ArrowLeft } from 'lucide-react'
import { projects } from '../data/projects'
import { DiGithub } from 'react-icons/di'

function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="text-gray-600">Project not found.</p>
        <Link to="/" className="text-accent hover:underline mt-4 inline-block">
          ← Back to home
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-accent transition mb-8">
        <ArrowLeft size={16} />
        Back to projects
      </Link>

      <img
        src={project.image}
        alt={project.name}
        className="w-full rounded-2xl border border-gray-200"
      />

      <h1 className="text-3xl font-bold text-ink mt-8">{project.name}</h1>
      <p className="text-gray-600 mt-3 leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-5">
        {project.tech.map((tech) => (
          <span key={tech} className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-6">
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-accent text-white text-sm font-medium rounded-full px-5 py-2 hover:opacity-90 transition"
        >
          <ExternalLink size={16} />
          Live Site
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-full px-5 py-2 hover:bg-gray-100 transition"
        >
          <DiGithub size={16} />
          GitHub
        </a>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold text-ink mb-4">Challenges</h2>
        <ul className="space-y-3">
          {project.challenges.map((item, index) => (
            <li key={index} className="text-gray-600 text-sm leading-relaxed pl-4 border-l-2 border-gray-200">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 mb-12">
        <h2 className="text-xl font-bold text-ink mb-4">Future Improvements</h2>
        <ul className="space-y-3">
          {project.improvements.map((item, index) => (
            <li key={index} className="text-gray-600 text-sm leading-relaxed pl-4 border-l-2 border-gray-200">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProjectDetailPage