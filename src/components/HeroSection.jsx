import { motion } from "framer-motion";
import { FileDown, ArrowRight } from "lucide-react";
import { profile } from "../data/profile";

import { BsGithub } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { FaFacebook } from "react-icons/fa";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiBetterauth,
} from "react-icons/si";

import heroPhoto from "../assets/mahbuba-sultana.png";
import Stats from "./Stats";

function HeroSection() {
  const floatingTech = [
    {
      icon: <SiJavascript className="text-[#F7DF1E]" size={22} />,
      label: "JavaScript",
      pos: "-top-4 -left-6 sm:-left-10",
      delay: 0,
    },
    {
      icon: <SiBetterauth className="text-white" size={22} />,
      label: "BetterAuth",
      pos: "top-12 -left-6 sm:-left-10",
      delay: 0.5,
    },
    {
      icon: <SiReact className="text-[#61DAFB]" size={22} />,
      label: "React.js",
      pos: "top-10 -right-6 sm:-right-12",
      delay: 1,
    },
    {
      icon: <SiNextdotjs className="text-white" size={22} />,
      label: "Next.js",
      pos: "bottom-16 -left-6 sm:-left-12",
      delay: 1.5,
    },
    {
      icon: <SiNodedotjs className="text-[#339933]" size={22} />,
      label: "Node.js",
      pos: "-bottom-6 right-2 sm:right-6",
      delay: 2,
    },
    {
      icon: <SiExpress className="text-white" size={22} />,
      label: "Express.js",
      pos: "top-1/2 -right-8 sm:-right-14",
      delay: 0.8,
    },
    {
      icon: <SiMongodb className="text-[#47A248]" size={22} />,
      label: "MongoDB",
      pos: "bottom-2 left-1/2",
      delay: 2.5,
    },
    {
      icon: <SiTailwindcss className="text-[#06B6D4]" size={22} />,
      label: "Tailwind CSS",
      pos: "top-1/2 -left-10",
      delay: 1.8,
    },
  ];

  return (
    <section
      className="
      relative
      overflow-hidden
      pt-20
      pb-24
      px-6
      max-w-7xl
      mx-auto
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        top-10
        left-1/4
        w-[500px]
        h-[500px]
        bg-primary/20
        rounded-full
        blur-[120px]
        pointer-events-none
        animate-glow
        "
      />

      <div
        className="
        absolute
        bottom-0
        right-0
        w-[450px]
        h-[450px]
        bg-secondary/10
        rounded-full
        blur-[120px]
        pointer-events-none
        animate-glow
        "
      />

      <div
        className="
        grid
        lg:grid-cols-12
        gap-12
        items-center
        relative
        z-10
        "
      >
        {/* LEFT CONTENT */}

        <div
          className="
          lg:col-span-7
          space-y-7
          "
        >
          {/* Availability Badge */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
            inline-flex
            items-center
            gap-3
            px-4
            py-2
            rounded-full
            bg-primary/10
            border
            border-primary/20
            text-primary
            text-xs
            font-bold
            tracking-wide
            "
          >
            <span
              className="
              relative
              flex
              h-2.5
              w-2.5
              "
            >
              <span
                className="
                absolute
                inline-flex
                h-full
                w-full
                rounded-full
                bg-emerald-400
                opacity-75
                animate-ping
                "
              />

              <span
                className="
                relative
                inline-flex
                rounded-full
                h-2.5
                w-2.5
                bg-emerald-500
                "
              />
            </span>
            Available for Hire — Web Developer
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="
            text-4xl
            sm:text-5xl
            lg:text-6xl
            font-black
            text-foreground
            tracking-tight
            leading-[1.1]
            "
          >
            Building Modern
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
              Web Applications
            </span>
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="
            text-lg
            md:text-xl
            text-muted
            leading-relaxed
            max-w-xl
            "
          >
            Hi, I'm{" "}
            <strong
              className="
              text-foreground
              font-extrabold
              "
            >
              {profile.name}
            </strong>
            . {profile.tagline}
          </motion.p>
          {/* ACTION BUTTONS */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
            className="
            flex
            flex-wrap
            items-center
            gap-4
            pt-2
            "
          >
            <a
              href="/resume.pdf"
              download
              className="
              inline-flex
              items-center
              gap-2.5
              bg-primary
              text-white
              px-8
              py-4
              rounded-full
              font-bold
              text-sm
              transition-all
              shadow-[0_0_30px_rgba(124,58,237,0.35)]
              hover:-translate-y-1
              hover:bg-primary/90
              group
              "
            >
              <FileDown
                size={18}
                className="
                group-hover:translate-y-1
                transition-transform
                "
              />
              Download Resume
            </a>

            <a
              href="#projects"
              className="
              inline-flex
              items-center
              gap-2.5
              border
              border-white/20
              text-foreground
              px-8
              py-4
              rounded-full
              font-bold
              text-sm
              transition-all
              hover:bg-white/10
              hover:-translate-y-1
              group
              "
            >
              Explore Projects
              <ArrowRight
                size={16}
                className="
                group-hover:translate-x-1
                transition-transform
                "
              />
            </a>
          </motion.div>

          <Stats/>

          {/* SOCIAL LINKS */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.4,
            }}
            className="
            flex
            items-center
            gap-5
            pt-6
            border-t
            border-white/10
            "
          >
            <span
              className="
              text-xs
              uppercase
              tracking-[0.2em]
              font-bold
              text-muted
              "
            >
              Connect:
            </span>

            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="
              p-2.5
              rounded-full
              text-muted
              hover:text-white
              hover:bg-white/10
              transition-all
              hover:scale-110
              "
            >
              <BsGithub size={22} />
            </a>

            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="
              p-2.5
              rounded-full
              text-muted
              hover:text-primary
              hover:bg-white/10
              transition-all
              hover:scale-110
              "
            >
              <LiaLinkedin size={26} />
            </a>

            <a
              href={profile.socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="
              p-2.5
              rounded-full
              text-muted
              hover:text-primary
              hover:bg-white/10
              transition-all
              hover:scale-110
              "
            >
              <FaFacebook size={22} />
            </a>
          </motion.div>
        </div>

        {/* RIGHT PROFILE CARD */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="
          lg:col-span-5
          flex
          justify-center
          relative
          "
        >
          <div
            className="
            relative
            flex
            items-center
            justify-center
            "
          >
            {/* Outer rotating ring */}

            <div
              className="
              absolute
              inset-[-18px]
              sm:inset-[-24px]
              border
              border-dashed
              border-primary/40
              rounded-[2rem]
              animate-spin-slow
              "
            />

            {/* Glow */}

            <div
              className="
              absolute
              inset-[-10px]
              bg-gradient-to-tr
              from-primary
              via-purple-500
              to-secondary
              rounded-[2rem]
              blur-xl
              opacity-30
              animate-pulse
              "
            />

            {/* Image Card */}

            <div
              className="
              w-64
              h-80
              sm:w-72
              sm:h-[420px]
              rounded-3xl
              overflow-hidden
              border
              border-white/10
              shadow-2xl
              relative
              z-10
              bg-card
              group
              "
            >
              <img
                src={heroPhoto}
                alt={profile.name}
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
                from-black/50
                via-transparent
                to-transparent
                "
              />
            </div>

            {/* Floating Tech Badges */}

            {floatingTech.map((tech, i) => (
              <motion.div
                key={tech.label}
                initial={{
                  y: 0,
                }}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: tech.delay,
                }}
                className={`
                absolute
                ${tech.pos}

                z-20

                hidden
                sm:flex

                items-center
                gap-2.5

                px-4
                py-2.5

                rounded-2xl

                bg-card/90
                backdrop-blur-xl

                border
                border-white/10

                shadow-xl

                text-xs
                font-bold
                text-foreground

                hover:scale-105
                transition-transform
                `}
              >
                {tech.icon}

                <span>{tech.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
