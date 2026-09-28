import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiBetterauth,
} from "react-icons/si";

const coreStack = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "React.js",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#FFFFFF",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#FFFFFF",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
  },
  {
    name: "BetterAuth",
    icon: SiBetterauth,
    color: "#34D399",
  },
];

function TechStack() {
  return (
    <section
      id="tech-stack"
      className="
        relative
        py-20
        sm:py-24
        lg:py-28
        px-4
        sm:px-6
        lg:px-8
        overflow-hidden
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[500px]
          h-[500px]
          rounded-full
          bg-emerald-500/10
          blur-[130px]
          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}

        <div className="max-w-3xl mb-12 sm:mb-16">

          <div
            className="
              flex
              items-center
              gap-2
              text-xs
              sm:text-sm
              uppercase
              tracking-[0.3em]
              font-bold
              text-emerald-400
            "
          >
            <span className="w-8 h-px bg-emerald-400" />

            Core Stack
          </div>

          <h2
            className="
              mt-4
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-black
              tracking-tight
              leading-[0.95]
              text-white
            "
          >
            Technologies I Build With
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              text-sm
              sm:text-base
              lg:text-lg
              leading-relaxed
              text-slate-400
            "
          >
            The core technologies I use to build modern, responsive,
            and full-stack web applications.
          </p>

        </div>


        {/* ================= CORE STACK ================= */}

        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-4
            gap-3
            sm:gap-4
            lg:gap-5
          "
        >
          {coreStack.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                className="
                  group
                  relative
                  min-h-[150px]
                  sm:min-h-[170px]
                  lg:min-h-[190px]
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  overflow-hidden
                  transition-all
                  duration-500
                  hover:border-emerald-400/30
                  hover:bg-white/[0.05]
                "
              >

                {/* Hover Glow */}
                <div
                  className="
                    absolute
                    -top-16
                    -right-16
                    w-32
                    h-32
                    rounded-full
                    bg-emerald-400/10
                    blur-3xl
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                  "
                />

                <div
                  className="
                    relative
                    z-10
                    h-full
                    p-5
                    sm:p-6
                    flex
                    flex-col
                    justify-between
                  "
                >

                  {/* Number */}
                  <span
                    className="
                      text-[10px]
                      sm:text-xs
                      font-mono
                      tracking-widest
                      text-slate-600
                    "
                  >
                    0{index + 1}
                  </span>


                  {/* Icon */}
                  <div
                    className="
                      w-12
                      h-12
                      sm:w-14
                      sm:h-14
                      rounded-2xl
                      bg-white/[0.05]
                      border
                      border-white/10
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:border-emerald-400/30
                    "
                  >
                    <Icon
                      size={27}
                      style={{ color: tech.color }}
                    />
                  </div>


                  {/* Name */}
                  <div className="mt-5">

                    <h3
                      className="
                        text-base
                        sm:text-lg
                        font-bold
                        text-white
                        tracking-tight
                      "
                    >
                      {tech.name}
                    </h3>

                    <div
                      className="
                        mt-2
                        w-8
                        h-[2px]
                        bg-emerald-400/40
                        group-hover:w-14
                        group-hover:bg-emerald-400
                        transition-all
                        duration-500
                      "
                    />

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>


        {/* ================= BOTTOM LABEL ================= */}

        <div
          className="
            mt-8
            flex
            items-center
            gap-3
            text-xs
            sm:text-sm
            text-slate-500
          "
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

          Core technologies · MERN-stack development foundation
        </div>

      </div>
    </section>
  );
}

export default TechStack;