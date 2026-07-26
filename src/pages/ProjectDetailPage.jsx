import { useParams, Link } from 'react-router-dom'
import { ExternalLink, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react'
import { projects } from '../data/projects'
import { DiGithub } from 'react-icons/di'

function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="text-gray-600">Project not found.</p>
        <Link to="/" className="text-accent font-semibold hover:underline mt-4 inline-block">
          ← Back to home
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-ink py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-accent transition-colors mb-8 bg-surface px-4 py-2 rounded-full border border-gray-200"
        >
          <ArrowLeft size={16} />
          Back to all projects
        </Link>

        <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-lg mb-8 max-h-[450px]">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-ink tracking-tight">
            {project.name}
          </h1>

          <div className="flex items-center gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-white text-sm font-semibold rounded-full px-5 py-2.5 hover:bg-accent/90 transition-all shadow-md"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-800 text-sm font-semibold rounded-full px-5 py-2.5 hover:bg-gray-100 transition-colors"
              >
                <DiGithub size={18} />
                GitHub Code
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-10 pb-8 border-b border-gray-200">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs font-semibold px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="bg-surface rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-accent">
                <AlertCircle size={20} />
                <h2 className="text-xl font-bold text-ink">Technical Challenges</h2>
              </div>
              <ul className="space-y-3">
                {project.challenges.map((item, index) => (
                  <li
                    key={index}
                    className="text-gray-700 text-sm leading-relaxed pl-4 border-l-2 border-accent/40"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Improvements */}
          {project.improvements && project.improvements.length > 0 && (
            <div className="bg-surface rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-secondary">
                <CheckCircle2 size={20} />
                <h2 className="text-xl font-bold text-ink">Future Improvements</h2>
              </div>
              <ul className="space-y-3">
                {project.improvements.map((item, index) => (
                  <li
                    key={index}
                    className="text-gray-700 text-sm leading-relaxed pl-4 border-l-2 border-secondary/40"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailPage