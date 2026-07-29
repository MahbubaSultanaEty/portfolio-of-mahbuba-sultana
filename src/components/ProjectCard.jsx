import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { DiGithub } from 'react-icons/di'


function ProjectCard({ project, index = 0 }) {

  return (

    <motion.div

      initial={{
        opacity:0,
        y:30
      }}

      whileInView={{
        opacity:1,
        y:0
      }}

      viewport={{
        once:true,
        margin:"-50px"
      }}

      transition={{
        duration:.5,
        delay:index*.1
      }}


      className="
      group
      bg-emerald-600/10
      backdrop-blur-xl
      rounded-3xl
      border
      border-white/10
      overflow-hidden
      flex
      flex-col
      h-full
      shadow-xl
      hover:border-primary/40
      hover:-translate-y-2
      transition-all
      duration-300
      "

    >




      {/* IMAGE */}


      <div

        className="
        h-56
        overflow-hidden
        relative
        bg-background
        border-b
        border-white/10
        "

      >

        <img

          src={project.image}

          alt={project.name}

          className="
          w-full
          h-full
          object-cover
          object-top
          group-hover:scale-105
          transition-transform
          duration-700
          "

        />


        <div

          className="
          absolute
          inset-0
          bg-gradient-to-t
          from-background
          via-transparent
          to-transparent
          opacity-70
          "

        />



        <div

          className="
          absolute
          bottom-4
          left-4
          "

        >


        </div>


      </div>







      {/* CONTENT */}


      <div

        className="
        p-6
        flex
        flex-col
        flex-1
        justify-between
        "

      >



        <div>


          {/* TITLE + LINKS */}


          <div

            className="
            flex
            items-start
            justify-between
            gap-4
            mb-4
            "

          >


            <h3

              className="
              text-xl
              font-black
              text-foreground
              group-hover:text-primary
              transition-colors
              "

            >

              {project.name}

            </h3>





            <div

              className="
              flex
              gap-2
              "

            >


              {
                project.live && (

                  <a

                    href={project.live}

                    target="_blank"

                    rel="noreferrer"

                    className="
                    p-2
                    rounded-xl
                    bg-white/5
                    border
                    border-white/10
                    text-muted
                    hover:text-primary
                    hover:border-primary/30
                    transition-all
                    "

                    onClick={(e)=>e.stopPropagation()}

                  >

                    <ExternalLink size={16}/>


                  </a>

                )
              }





              {
                project.github && (

                  <a

                    href={project.github}

                    target="_blank"

                    rel="noreferrer"

                    className="
                    p-2
                    rounded-xl
                    bg-white/5
                    border
                    border-white/10
                    text-muted
                    hover:text-white
                    transition-all
                    "

                    onClick={(e)=>e.stopPropagation()}

                  >

                    <DiGithub size={18}/>


                  </a>

                )
              }



            </div>


          </div>






          <p

            className="
            text-sm
            text-muted
            leading-relaxed
            line-clamp-3
            "

          >

            {project.description}

          </p>


        </div>







        {/* TECH + DETAILS */}


        <div className="mt-6">


          <div

            className="
            flex
            flex-wrap
            gap-2
            mb-6
            "

          >

            {
              project.tech.map((tech)=>(

                <span

                  key={tech}

                  className="
                  text-xs
                  font-medium
                  px-3
                  py-1.5
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  text-emerald-500
                  "

                >

                  {tech}

                </span>

              ))
            }


          </div>





          <Link

            to={`/projects/${project.slug}`}

            className="
            inline-flex
            items-center
            gap-2
            text-sm
            font-bold
            text-emerald-600
            hover:text-secondary
            transition-all
            group/link
            "

          >

            View Technical Case Study

            <ArrowRight

              size={16}

              className="
              group-hover/link:translate-x-1
              transition-transform
              "

            />

          </Link>



        </div>



      </div>



    </motion.div>

  )

}


export default ProjectCard