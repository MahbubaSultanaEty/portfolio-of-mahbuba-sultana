import { motion } from "framer-motion"
import {
  Sparkles,
  Compass,
  Lightbulb,
  Code2,
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
    text: `In September 2025. I'd taken a photo and wanted to edit it — swap the middle "o" in the word "October" with a small "Shiuly" flower. I asked ChatGPT how to do it, and it couldn't quite get what I meant. When I asked how I could do it myself, it pointed me toward image editing tools, or code. That's the part that stuck with me. I asked it a pretty basic question: could someone with zero technical background actually learn to code, starting from a phone? It said yes — and pointed me toward a few beginner-friendly platforms. I picked freeCodeCamp, since it was free and structured enough for someone starting from nothing.`,
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
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
  },
}


function StorySection() {

  return (

    <section
      id="story"
      className="
      relative
      max-w-7xl
      mx-auto
      px-6
      md:py-24
      py-
      overflow-hidden
      "
    >


      <div className="relative z-10">


        {/* Heading */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once:true }}
          className="
          flex
          flex-col
          md:flex-row
          justify-between
          gap-6
          mb-12
          "
        >

          <div>

            <span
              className="
              inline-flex
              badge
              badge-success
              badge-outline
              mb-4
              "
            >
              My Journey
            </span>


            <h2
              className="
              text-4xl
              md:text-5xl
              font-black
              text-white
              "
            >
              The Journey Into Code
            </h2>

          </div>



          <p
            className="
            text-gray-300
            max-w-sm
            text-sm
            leading-relaxed
            "
          >
            How a quiet moment with a Shiuli flower photo turned into a
            web development pursuit.
          </p>


        </motion.div>





        {/* Bento Cards */}

        <div
          className="
          grid
          grid-cols-5
          gap-6
          "
        >


          {/* First Card */}

          <StoryCard
            step={storySteps[0]}
            index={0}
            className="
            col-span-5
            lg:col-span-2
            "
          />



          {/* Turning Point Card */}

          <StoryCard
            step={storySteps[1]}
            index={1}
            className="
            col-span-5
            lg:col-span-3
            "
            shiuly
          />



          {/* Bottom Row */}

          <div
            className="
            col-span-5
            grid
            md:grid-cols-2
            gap-6
            "
          >

            <StoryCard
              step={storySteps[2]}
              index={2}
            />


            <StoryCard
              step={storySteps[3]}
              index={3}
            />

          </div>



        </div>


      </div>


    </section>

  )
}





function StoryCard({
  step,
  index,
  className = "",
  shiuly = false
}) {


  const Icon = step.icon


  return (

    <motion.div

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

      className={`
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      backdrop-blur-xl
      bg-emerald-600/15
      ${className}
      `}

    >


      {
        shiuly && (

          <>

            <img
              src="/shiuly-1.png"
              alt=""
              className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              opacity-60
              "
            />


            <div
              className="
              absolute
              inset-0
              bg-background/85
              "
            />

          </>

        )
      }




      <div
        className="
        relative
        z-10
        p-8
        "
      >


        <div
          className="
          flex
          justify-between
          items-start
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
            "
          >

            <Icon
              className={`
              w-5
              h-5
              ${step.color}
              `}
            />

          </motion.div>



          <span
            className="
            badge
            badge-outline
            text-emerald-300
            "
          >
            0{index+1}
          </span>


        </div>




        <h3
          className="
          mt-6
          text-xs
          uppercase
          tracking-widest
          text-white
          font-bold
          "
        >
          {step.label}
        </h3>



        <p
          className="
          mt-4
          text-sm
          text-gray-200
          leading-relaxed
          "
        >
          {step.text}
        </p>


      </div>


    </motion.div>

  )
}


export default StorySection