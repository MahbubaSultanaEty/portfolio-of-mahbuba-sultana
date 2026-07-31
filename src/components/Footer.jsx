import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'
import { ArrowUp, Sparkles } from 'lucide-react'
import { profile } from '../data/profile'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer
      className="
      relative
      overflow-hidden
      border-t border-white/10
      bg-[#071A1F]
      px-4 sm:px-6
      py-10
      "
    >

      {/* Ambient glow */}
      <div
        className="
        absolute
        -top-20
        left-1/2
        -translate-x-1/2
        w-72
        h-40
        bg-emerald-400/10
        blur-3xl
        rounded-full
        "
      />


      <div
        className="
        relative
        max-w-6xl
        mx-auto
        grid
        grid-cols-1
        md:grid-cols-3
        items-center
        md:items-start
        gap-8
        "
      >


        {/* Identity */}

        <div
          className="
          max-w-sm
          text-center
          md:text-left
          "
        >

          <div
            className="
            flex
            items-center
            justify-center
            md:justify-start
            gap-2
            mb-3
            "
          >

            <Sparkles
              size={15}
              className="text-emerald-400"
            />

            <span
              className="
              text-xs
              uppercase
              tracking-[0.25em]
              font-semibold
              text-emerald-300
              "
            >
              Web Developer
            </span>

          </div>


          <h3
            className="
            text-xl
            sm:text-2xl
            font-black
            text-white
            break-words
            "
          >
            {profile.name}
          </h3>


        </div>




        {/* Stack */}

        <div
          className="
          text-center
          md:text-left
          "
        >

          <p
            className="
            text-xs
            uppercase
            tracking-widest
            text-gray-500
            mb-3
            "
          >
            Tech Stack
          </p>



          <div
            className="
            flex
            flex-wrap
            justify-center
            md:justify-start
            gap-2
            max-w-xs
            mx-auto
            md:mx-0
            "
          >

            {
              [
                'React',
                'Next.js',
                'JavaScript',
                'Tailwind CSS'
              ].map((tech)=>(

                <span
                  key={tech}
                  className="
                  badge
                  bg-white/5
                  border-white/10
                  text-gray-300
                  px-3
                  py-3
                  whitespace-nowrap
                  "
                >
                  {tech}
                </span>

              ))
            }

          </div>

        </div>





        {/* Actions */}

        <div
          className="
          flex
          flex-col
          items-center
          gap-5
          "
        >


          <div
            className="
            flex
            gap-3
            "
          >

            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="
              btn
              btn-circle
              bg-white/5
              border-white/10
              text-gray-300
              hover:text-white
              hover:bg-white/10
              "
            >
              <BsGithub size={18}/>
            </a>


            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="
              btn
              btn-circle
              bg-white/5
              border-white/10
              text-gray-300
              hover:text-emerald-300
              hover:bg-white/10
              "
            >
              <BsLinkedin size={18}/>
            </a>


            <a
              href={profile.socials.facebook}
              target="_blank
              "
              rel="noreferrer"
              className="
              btn
              btn-circle
              bg-white/5
              border-white/10
              text-gray-300
              hover:text-cyan-300
              hover:bg-white/10
              "
            >
              <BsFacebook size={18}/>
            </a>


          </div>




          <button
            onClick={scrollToTop}
            className="
            btn
            btn-sm
            rounded-full
            bg-emerald-400
            text-[#062015]
            border-none
            hover:bg-emerald-300
            gap-2
            font-bold
            "
          >
            Back to top
            <ArrowUp size={15}/>
          </button>


        </div>


      </div>





      {/* Bottom line */}

      <div
        className="
        max-w-6xl
        mx-auto
        mt-8
        pt-5
        border-t
        border-white/10
        flex
        flex-col
        sm:flex-row
        justify-between
        gap-3
        text-center
        sm:text-left
        "
      >

        <p
          className="
          text-xs
          text-gray-500
          "
        >
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>


        <p
          className="
          text-xs
          text-gray-500
          "
        >
          Designed & built with React.js
        </p>


      </div>


    </footer>
  )
}

export default Footer