import { motion } from 'framer-motion'
import { Sparkles, Compass, Lightbulb, Code2, Snowflake } from 'lucide-react'


const storySteps = [
  {
    step: '01',
    label: 'Initial Curiosity',
    icon: <Compass className="w-5 h-5 text-purple-400" />,
    text: `A relative first pointed me toward programming — a few free HTML/CSS videos on YouTube. Honestly, none of it clicked. I couldn't connect the syntax to anything real, and quietly decided coding "wasn't my thing."`,
  },

  {
    step: '02',
    label: 'The Turning Point',
    icon: <Lightbulb className="w-5 h-5 text-amber-400" />,
    text: `In September 2025, while exploring how to edit a "Shiuli" flower photo, ChatGPT introduced me to coding and creative tools. That simple curiosity led me to ask if someone without a technical background could actually learn programming. The answer was yes — and I started from zero with freeCodeCamp.`,
  },

  {
    step: '03',
    label: 'Building & Breaking',
    icon: <Code2 className="w-5 h-5 text-emerald-400" />,
    text: `By January 2026, I moved into a structured, deadline-based learning environment — real modules, real assignments, and real projects. That's where coding started making sense: building, breaking, debugging, and improving.`,
  },

  {
    step: '04',
    label: 'Beyond Frameworks',
    icon: <Sparkles className="w-5 h-5 text-purple-400" />,
    text: `While React and Next.js became my primary tools, I still practice vanilla JavaScript because frameworks evolve quickly. Strong fundamentals are what make adapting to new technology easier.`,
  },
]



function StorySection() {

  return (

    <section
      id="story"
      className="
      relative
      max-w-7xl
      mx-auto
      px-6
      py-24
      overflow-hidden
      "
    >


      {/* Background Image */}

      <div
        className="
        absolute
        inset-0
        -z-10
        overflow-hidden
        rounded-3xl
        "
      >

        <img
          src="/shiuly-1.png"
          alt=""
          className="
          w-full
          h-full
          object-cover
          opacity-20
          "
        />


        <div
          className="
          absolute
          inset-0
          bg-gradient-to-b
          from-background
          via-background/90
          to-background
          "
        />


      </div>





      {/* Heading */}


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


          <div
            className="
            flex
            items-center
            gap-3
            mb-4
            "
          >

            <span
              className="
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
              My Journey
            </span>


            <motion.div

              animate={{
                rotate:360
              }}

              transition={{
                duration:8,
                repeat:Infinity,
                ease:'linear'
              }}

            >

              <Snowflake
                className="
                w-6
                h-6
                text-purple-300
                "
              />

            </motion.div>


          </div>




          <h2
            className="
            text-3xl
            md:text-5xl
            font-black
            text-foreground
            tracking-tight
            "
          >

            The Journey Into Code

          </h2>


        </div>



        <p
          className="
          text-muted
          text-sm
          max-w-sm
          leading-relaxed
          "
        >

          How a quiet moment with a Shiuli flower photo turned into a
          software development pursuit.

        </p>


      </div>






      {/* Story Cards */}


      <div
        className="
        grid
        sm:grid-cols-2
        gap-6
        "
      >


        {
          storySteps.map((step,index)=>(


            <motion.div

              key={step.step}


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
                margin:'-50px'
              }}


              transition={{
                duration:.5,
                delay:index*.1
              }}


              whileHover={{
                y:-8
              }}


              className="
              group
              bg-card/70
              backdrop-blur-xl
              rounded-3xl
              border
              border-white/10
              p-6
              shadow-xl
              hover:border-primary/40
              transition-all
              duration-300
              "
            >



              {/* Top */}

              <div
                className="
                flex
                items-center
                justify-between
                mb-6
                "
              >


                <motion.div

                  whileHover={{
                    rotate:12,
                    scale:1.1
                  }}

                  className="
                  p-3
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10
                  "
                >

                  {step.icon}

                </motion.div>




                <span
                  className="
                  font-mono
                  text-xs
                  font-bold
                  text-primary
                  px-3
                  py-1
                  rounded-full
                  bg-primary/10
                  border
                  border-primary/20
                  "
                >

                  {step.step}

                </span>


              </div>





              <h3
                className="
                text-sm
                uppercase
                tracking-wider
                font-bold
                text-muted
                mb-3
                "
              >

                {step.label}

              </h3>




              <p
                className="
                text-sm
                text-foreground/80
                leading-relaxed
                "
              >

                {step.text}

              </p>




            </motion.div>


          ))
        }


      </div>



    </section>

  )
}


export default StorySection