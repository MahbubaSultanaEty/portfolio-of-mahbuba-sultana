import { motion } from "framer-motion"
import {
  Sparkles,
  Compass,
  Lightbulb,
  Code2,
  Snowflake,
} from "lucide-react"


const storySteps = [
  {
    label: "Initial Curiosity",
    icon: Compass,
    color: "text-purple-400",
    text: `A relative first pointed me toward programming — a few free HTML/CSS videos on YouTube. Honestly, none of it clicked. I couldn't connect the syntax to anything real, and quietly decided coding "wasn't my thing."`,
  },
  {
    label: "The Turning Point",
    icon: Lightbulb,
    color: "text-amber-400",
    text: `In September 2025, while exploring how to edit a "Shiuli" flower photo, ChatGPT introduced me to coding and creative tools. That simple curiosity led me to ask if someone without a technical background could actually learn programming. The answer was yes — and I started from zero with freeCodeCamp.`,
  },
  {
    label: "Building & Breaking",
    icon: Code2,
    color: "text-emerald-400",
    text: `By January 2026, I moved into a structured, deadline-based learning environment — real modules, real assignments, and real projects. That's where coding started making sense: building, breaking, debugging, and improving.`,
  },
  {
    label: "Beyond Frameworks",
    icon: Sparkles,
    color: "text-purple-400",
    text: `While React and Next.js became my primary tools, I still practice vanilla JavaScript because frameworks evolve quickly. Strong fundamentals are what make adapting to new technology easier.`,
  },
]


const reveal = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
}


function StorySection() {

  return (

    <section
      id="story"
      className="relative max-w-7xl mx-auto px-6 py-24 overflow-hidden"
    >

      {/* Background */}

      <div className="absolute inset-0 -z-0 rounded-3xl overflow-hidden">

        <img
          src="/shiuly-1.png"
          alt=""
          className="w-full h-full object-cover opacity-60"
        />

        <div className="absolute inset-0 bg-background/70" />

      </div>



      <div className="relative z-10">


        {/* Heading */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once:true }}
          className="flex flex-col md:flex-row justify-between gap-6 mb-12"
        >

          <div>

            <div className="flex items-center gap-3 mb-4">

              <span className="badge badge-success badge-outline">
                My Journey
              </span>


              <motion.div
                animate={{ rotate:360 }}
                transition={{
                  duration:8,
                  repeat:Infinity,
                  ease:"linear"
                }}
              >
                <Snowflake className="text-purple-300"/>
              </motion.div>

            </div>


            <h2 className="text-4xl md:text-5xl font-black text-white">
              The Journey Into Code
            </h2>

          </div>


          <p className="text-gray-300 max-w-sm text-sm leading-relaxed">
            How a quiet moment with a Shiuli flower photo turned into a
            software development pursuit.
          </p>


        </motion.div>




        {/* Cards */}

        <div className="grid sm:grid-cols-2 gap-6">


          {
            storySteps.map((step,index)=>{

              const Icon = step.icon


              return (

                <motion.div
                  key={step.label}
                  variants={reveal}
                  initial="hidden"
                  whileInView="show"
                  viewport={{
                    once:true
                  }}
                  transition={{
                    delay:index * .12
                  }}
                  whileHover={{
                    y:-8
                  }}
                  className="
                  card
                  bg-card/70
                  backdrop-blur-xl
                  border
                  border-white/10
                  hover:border-emerald
                  
                  "
                >

                  <div className="card-body">


                    <div className="flex justify-between">


                      <motion.div
                        whileHover={{
                          rotate:12,
                          scale:1.1
                        }}
                        className="
                        p-3
                        rounded-2xl
                        bg-white/5
                        "
                      >

                        <Icon className={`w-5 h-5 ${step.color}`} />

                      </motion.div>



                      <span className="badge badge-outline text-emerald-700">
                        0{index+1}
                      </span>


                    </div>



                    <h3 className="
                    mt-5
                    text-xs
                    uppercase
                    tracking-widest
                    text-gray-400
                    font-bold
                    ">
                      {step.label}
                    </h3>



                    <p className="
                    mt-3
                    text-sm
                    text-gray-200
                    leading-relaxed
                    ">
                      {step.text}
                    </p>


                  </div>


                </motion.div>

              )

            })
          }


        </div>


      </div>


    </section>

  )
}


export default StorySection