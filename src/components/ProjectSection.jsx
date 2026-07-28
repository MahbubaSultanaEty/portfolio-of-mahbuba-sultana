import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'
import { profile } from '../data/profile'
import { BsGithub } from 'react-icons/bs'


function ProjectsSection() {

  return (

    <section
      id="projects"
      className="
      max-w-7xl
      mx-auto
      px-6
      py-16
      "
    >


      {/* Header */}

      <div
        className="
        flex
        flex-col
        md:flex-row
        md:items-end
        justify-between
        gap-6
        mb-14
        border-b
        border-white/10
        pb-8
        "
      >


        <div>


          <span
            className="
            inline-flex
            px-4
            py-2
            rounded-full
            text-xs
            font-bold
            uppercase
            tracking-widest
            text-primary
            bg-primary/10
            border
            border-primary/20
            "
          >

            Selected Work

          </span>




          <h2
            className="
            text-3xl
            md:text-5xl
            font-black
            text-foreground
            tracking-tight
            mt-4
            "
          >

            Featured Projects
            <br />

            <span
              className="
              bg-gradient-to-r
              from-primary
              via-purple-400
              to-secondary
              bg-clip-text
              text-transparent
              "
            >
              & Applications
            </span>


          </h2>


        </div>





        {/* Github Button */}


        <a
          href={profile.socials.github}
          target="_blank"
          rel="noreferrer"
          className="
          inline-flex
          items-center
          gap-3
          text-sm
          font-bold
          text-foreground
          bg-card/70
          backdrop-blur-xl
          border
          border-white/10
          px-6
          py-3
          rounded-full
          hover:border-primary/40
          hover:-translate-y-1
          transition-all
          shadow-xl
          "
        >

          <BsGithub size={18}/>

          View GitHub

          <span>
            →
          </span>

        </a>


      </div>






      {/* Project Grid */}


      <div
        className="
        grid
        md:grid-cols-2
        gap-8
        "
      >

        {
          projects.map((project,index)=>(

            <ProjectCard

              key={project.slug}

              project={project}

              index={index}

            />

          ))
        }


      </div>



    </section>

  )

}


export default ProjectsSection