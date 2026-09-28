import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { profile } from "../data/profile";

import { BsGithub } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { FaFacebook } from "react-icons/fa";

import heroPhoto from "../assets/mahbuba-sultana.png";
import Stats from "./Stats";
import HeroSectionBtns from "./btns/HeroSectionBtns";

function HeroSection() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        bg-[#07080c]
        text-white
        overflow-hidden
        pt-12
        pb-10
        px-4
        sm:px-6
        lg:px-8
        max-w-7xl
        mx-auto
        flex
        flex-col
        justify-between
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-1/4
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[600px]
          h-[600px]
          bg-emerald-500/10
          rounded-full
          blur-[140px]
          pointer-events-none
          animate-glow
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0
          w-[400px]
          h-[400px]
          bg-cyan-500/10
          rounded-full
          blur-[120px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          top-0
          right-0
          w-[400px]
          h-[400px]
          bg-indigo-500/10
          rounded-full
          blur-[120px]
          pointer-events-none
        "
      />

      {/* =====================================================
          MAIN HERO
      ===================================================== */}

      <div
        className="
          relative
          z-10
          flex-1
          flex
          items-center
          py-10
          md:py-16
        "
      >
        <div
          className="
            w-full
            grid
            grid-cols-1
            md:grid-cols-2
            gap-12
            lg:gap-20
            items-center
          "
        >
          {/* =================================================
              IMAGE
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="
              flex
              justify-center
              md:justify-start
              relative
              py-8
            "
          >
            {/* Square Orbit */}
            <div
              className="
                absolute
                w-[280px]
                h-[280px]
                sm:w-[340px]
                sm:h-[340px]
                lg:w-[390px]
                lg:h-[500px]
                border
                border-dashed
                border-emerald-500/30
                rounded-[2.5rem]
                animate-spin-slow
                pointer-events-none
              "
            />

            {/* Secondary Orbit */}
            <div
              className="
                absolute
                w-[290px]
                h-[290px]
                sm:w-[350px]
                sm:h-[350px]
                lg:w-[400px]
                lg:h-[510px]
                border
                border-emerald-400/10
                rounded-[2.5rem]
                rotate-45
                pointer-events-none
              "
            />

            {/* Glow */}
            <div
              className="
                absolute
                w-[300px]
                h-[360px]
                sm:w-[360px]
                sm:h-[440px]
                lg:w-[410px]
                lg:h-[530px]
                bg-emerald-500/20
                rounded-[3rem]
                blur-3xl
                opacity-40
                pointer-events-none
              "
            />

            {/* Image */}
            <div
              className="
                relative
                z-10
                w-[260px]
                h-[340px]
                sm:w-[300px]
                sm:h-[400px]
                lg:w-[350px]
                lg:h-[470px]
                rounded-[2rem]
                overflow-hidden
                border
                border-white/10
                bg-slate-900/80
                shadow-[0_0_70px_rgba(16,185,129,0.12)]
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
                  transition-transform
                  duration-700
                  group-hover:scale-105
                  filter
                  contrast-[1.05]
                "
              />

              {/* Image Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#07080c]
                  via-transparent
                  to-transparent
                  pointer-events-none
                "
              />

              {/* Profile Badge */}
              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  z-20
                  flex
                  items-center
                  gap-2.5
                  px-4
                  py-3
                  rounded-2xl
                  bg-black/50
                  border
                  border-white/10
                  backdrop-blur-xl
                "
              >
                <span className="relative flex h-2.5 w-2.5">
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
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-emerald-500
                    "
                  />
                </span>

                <span className="text-sm font-bold text-white">
                  {profile.name}
                </span>
              </div>
            </div>
          </motion.div>


          {/* =================================================
              CONTENT
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="
              flex
              flex-col
              justify-center
              text-left
              space-y-7
            "
          >
            {/* Availability */}
            <div
              className="
                inline-flex
                items-center
                gap-2.5
                px-4
                py-2
                rounded-full
                bg-emerald-500/10
                border
                border-emerald-500/20
                text-emerald-400
                text-sm
                font-bold
                w-fit
              "
            >
              <span className="relative flex h-2.5 w-2.5">
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
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-emerald-500
                  "
                />
              </span>

              Available for Hire — Web Developer
            </div>


            {/* Headline */}
            <div>
              <h1
                className="
                  text-5xl                 
                  lg:text-7xl
                  font-black
                  tracking-tight
                  leading-[0.95]
                  text-white
                "
              >
                MERN Stack Developer
              </h1>

              <h2
              className="
  mt-3
  text-4xl
  sm:text-5xl
  font-black
  tracking-tight
  leading-tight
  text-transparent
  [-webkit-text-stroke:1.5px_#34d399]
                "
              >
                with frontend expertise
              </h2>

              <p
                className="
                  mt-5
                  text-xl
                  sm:text-2xl
                  md:text-2xl
                  lg:text-3xl
                  font-semibold
                  text-slate-300/70
                "
              >
                Exploring Full Stack
              </p>
            </div>


            {/* Buttons */}
            <div>
              <HeroSectionBtns />
            </div>


            {/* Social Links */}
<div className="flex flex-wrap items-center gap-3">

  <a
    href={profile.socials.github}
    target="_blank"
    rel="noreferrer"
    className="social-link"
  >
    <BsGithub size={18} />
    Github
  </a>

  <a
    href={profile.socials.linkedin}
    target="_blank"
    rel="noreferrer"
    className="social-link"
  >
    <LiaLinkedin size={20} />
    Linkedin
  </a>

  <a
    href={profile.socials.facebook}
    target="_blank"
    rel="noreferrer"
    className="social-link"
  >
    <FaFacebook size={18} />
    Facebook
  </a>

</div>
          </motion.div>
        </div>
      </div>


      {/* =====================================================
          STATS
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="
          relative
          z-10
          pt-6
          mt-6
          border-t
          border-white/10
        "
      >
        <Stats />
      </motion.div>
    </section>
  );
}

export default HeroSection;