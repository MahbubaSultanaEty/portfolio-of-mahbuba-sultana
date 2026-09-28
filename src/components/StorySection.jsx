import { useEffect } from "react"
import { motion } from "framer-motion"
import {
  Sparkles,
  Compass,
  Lightbulb,
  Code2,
} from "lucide-react"
import { initStoryScroll } from "../animations/storyScroll"


const storySteps = [
  {
    label: "Initial Curiosity",
    icon: Compass,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    text: `A relative first pointed me toward programming — a few free HTML/CSS videos on YouTube. Honestly, none of it clicked. I couldn't connect the syntax to anything real, and quietly decided coding "wasn't my thing."`,
  },
  {
    label: "The Turning Point",
    icon: Lightbulb,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    text: `In September 2025. I'd taken a photo and wanted to edit it — swap the middle "o" in the word "October" with a small "Shiuly" flower. I asked ChatGPT how to do it, and it couldn't quite get what I meant. When I asked how I could do it myself, it pointed me toward image editing tools, or code. That's the part that stuck with me. I asked it a pretty basic question: could someone with zero technical background actually learn to code, starting from a phone? It said yes — and pointed me toward a few beginner-friendly platforms. I picked freeCodeCamp, since it was free and structured enough for someone starting from nothing.`,
    shiuly: true,
  },
  {
    label: "Building & Breaking",
    icon: Code2,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    text: `By January 2026, I moved into a structured, deadline-based learning environment — real modules, real assignments, and real projects. That's where coding started making sense: building, breaking, debugging, and improving.`,
  },
  {
    label: "Beyond Frameworks",
    icon: Sparkles,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    text: `While React and Next.js became my primary tools, I still practice vanilla JavaScript because frameworks evolve quickly. Strong fundamentals are what make adapting to new technology easier.`,
  },
]


const reveal = {
  hidden: { opacity: 0, y: 25 },
  show:   { opacity: 1, y: 0 },
}


function StorySection() {

  useEffect(() => {
    const cleanup = initStoryScroll()
    return () => cleanup && cleanup()
  }, [])

  return (
    <section
      id="story"
      className="relative overflow-hidden md-2"
      
    >

      {/* ── HEADING ── */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between gap-6 mb-4 border-b border-white/10 pb-10"
        >
          <div>
            <span className="inline-flex badge badge-success badge-outline mb-4">
              My Journey
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-white">
              The Journey Into Code
            </h2>
          </div>

          <p className="text-gray-300 max-w-sm text-sm leading-relaxed self-end">
            How a quiet moment with a Shiuli flower photo turned into a
            web development pursuit.
          </p>
        </motion.div>
      </div>


      {/* ── SCROLL-STACK CARDS ── */}
      <div className="story-scroll-wrapper">

        {storySteps.map((step, index) => {

          const Icon = step.icon

          return (
            <div
              key={step.label}
              className="story-card"
            >
              <div className="story-card__inner">

                {/* card body */}
                <div
                  className={`
                    relative overflow-hidden
                    rounded-3xl border border-white/10
                    backdrop-blur-xl bg-emerald-600/25
                    mx-auto max-w-4xl
                    p-8 sm:p-10
                  `}
                >

                  {/* shiuly bg image for card 2 */}
                  {step.shiuly && (
                    <>
                      <img
                        src="/shiuly-1.png"
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                      />
                      <div className="absolute inset-0 bg-background/85" />
                    </>
                  )}

                  {/* glow blob */}
                  <div
                    className={`
                      absolute -top-10 -right-10
                      w-48 h-48 rounded-full blur-3xl opacity-30
                      ${step.bg}
                    `}
                  />

                  <div className="relative z-10 flex flex-col gap-6">

                    {/* top row: icon + step number */}
                    <div className="flex items-center justify-between">

                      <div
                        className={`
                          story-card__icon
                          p-3 rounded-2xl
                          ${step.bg} border ${step.border}
                        `}
                      >
                        <Icon className={`w-6 h-6 ${step.color}`} />
                      </div>

                      <span className="badge badge-outline text-emerald-300">
                        0{index + 1}
                      </span>

                    </div>

                    {/* label */}
                    <h3
                      className="
                        text-xs uppercase tracking-widest
                        text-white font-bold
                      "
                    >
                      {step.label}
                    </h3>

                    {/* body text */}
                    <p className="text-sm text-gray-200 leading-relaxed">
                      {step.text}
                    </p>

                  </div>
                </div>

              </div>
            </div>
          )
        })}

      </div>

    </section>
  )
}


export default StorySection