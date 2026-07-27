import { useParams, Link } from 'react-router-dom'
import { ExternalLink, ArrowLeft, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react'
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
    <div className="min-h-screen bg-white text-ink relative overflow-hidden py-16 px-6">

      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 
        w-[500px] h-[300px] bg-purple-200/30 blur-3xl rounded-full" />


      <div className="relative max-w-5xl mx-auto">

        {/* Back button */}
        <Link
          to="/"
          className="
          inline-flex items-center gap-2 mb-10
          text-sm font-semibold text-gray-600
          bg-white border border-gray-200
          px-5 py-2.5 rounded-full
          hover:text-purple-600 hover:border-purple-300
          transition-all shadow-sm
          "
        >
          <ArrowLeft size={16}/>
          Back to projects
        </Link>


        {/* Screenshot */}
        <div
          className="
          rounded-[2rem] overflow-hidden
          border border-purple-100
          shadow-[0_20px_60px_rgba(124,58,237,0.12)]
          bg-white
          mb-10
          "
        >
          <img
            src={project.image}
            alt={project.name}
            className="
            w-full
            max-h-[600px]
            object-cover
            object-top
            "
          />
        </div>



        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-6">


          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={16} className="text-purple-500"/>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-purple-600">
                Featured Project
              </span>
            </div>


            <h1 className="
            text-4xl md:text-5xl 
            font-extrabold 
            tracking-tight
            text-gray-900
            ">
              {project.name}
            </h1>

          </div>



          <div className="flex gap-3 items-start flex-wrap">


            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="
                flex items-center gap-2
                bg-purple-600 text-white
                px-5 py-2.5 rounded-full
                font-semibold text-sm
                hover:bg-purple-700
                transition-all shadow-md
                "
              >
                <ExternalLink size={16}/>
                Live Demo
              </a>
            )}



            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                flex items-center gap-2
                border border-gray-300
                px-5 py-2.5 rounded-full
                font-semibold text-sm
                hover:bg-gray-100
                transition-all
                "
              >
                <DiGithub size={18}/>
                Source
              </a>
            )}

          </div>

        </div>



        <p className="
        text-gray-600 
        text-lg 
        leading-relaxed 
        max-w-3xl
        mb-8
        ">
          {project.description}
        </p>



        {/* Tech */}
        <div className="
        flex flex-wrap gap-3 
        pb-10 mb-10
        border-b border-gray-200
        ">

          {project.tech.map((tech)=>(
            <span
              key={tech}
              className="
              px-4 py-2
              rounded-full
              text-sm font-semibold
              bg-purple-50
              text-purple-700
              border border-purple-200
              "
            >
              {tech}
            </span>
          ))}

        </div>




        <div className="grid md:grid-cols-2 gap-8">


          {project.challenges?.length > 0 && (
            <div
              className="
              rounded-3xl
              p-7
              bg-gradient-to-br from-purple-50 to-white
              border border-purple-100
              "
            >

              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-purple-100 text-purple-600">
                  <AlertCircle size={20}/>
                </div>

                <h2 className="font-bold text-xl">
                  Technical Challenges
                </h2>
              </div>


              <ul className="space-y-4">
                {project.challenges.map((item,index)=>(
                  <li
                    key={index}
                    className="text-gray-600 text-sm leading-relaxed"
                  >
                    • {item}
                  </li>
                ))}
              </ul>

            </div>
          )}





          {project.improvements?.length > 0 && (
            <div
              className="
              rounded-3xl
              p-7
              bg-gradient-to-br from-green-50 to-white
              border border-green-100
              "
            >

              <div className="flex items-center gap-3 mb-5">

                <div className="p-2 rounded-xl bg-green-100 text-green-600">
                  <CheckCircle2 size={20}/>
                </div>

                <h2 className="font-bold text-xl">
                  Future Improvements
                </h2>

              </div>


              <ul className="space-y-4">
                {project.improvements.map((item,index)=>(
                  <li
                    key={index}
                    className="text-gray-600 text-sm leading-relaxed"
                  >
                    • {item}
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