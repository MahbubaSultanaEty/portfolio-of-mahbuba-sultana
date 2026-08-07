"use client";

import { Code2, ShieldCheck, Sparkles } from "lucide-react";
import { sections } from "../data/skills";

import shiuliImg from "/shiuly-3.jpg";
import SkillCard from "./cards/SkillCard";
import { useEffect } from "react";
import { initSkillsScroll } from "../animations/skillsScroll";

function SkillsSection() {
 useEffect(() => {
  const cleanup = initSkillsScroll()
  return () => cleanup && cleanup()
}, [])
  return (
    <section 
      id="skills"
      className="  py-12 md:py-16 text-slate-100"
    >
      {/* SECTION HEADER */}
      <div
        className="
          flex flex-col md:flex-row 
          justify-between items-start md:items-end 
          gap-6 mb-12 
          border-b border-white/10 
          px-4 sm:px-6 lg:px-8
          pb-8
        "
      >
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-emerald-400 font-bold flex items-center gap-2">
            <Code2 size={14} /> Technical Expertise
          </span>

          <h2
            className="
              mt-3 
              text-3xl sm:text-4xl md:text-5xl 
              font-black 
              text-white 
              tracking-tight
            "
          >
            Technical Stack & Skill Architecture
          </h2>

          <p
            className="
              mt-3 
              max-w-2xl 
              text-sm sm:text-base 
              text-slate-400 
              leading-relaxed
            "
          >
            A frontend-focused engineering core complemented by strong backend
            API design, database modeling, and modern authentication
            understanding.
          </p>
        </div>


        {/* STATUS BADGES */}
        <div className="flex flex-wrap gap-2.5 items-center">

          <span
            className="
              px-3.5 py-1.5 
              rounded-full 
              bg-emerald-500/10 
              border border-emerald-500/30 
              text-emerald-400 
              text-xs font-bold 
              inline-flex items-center gap-1.5
            "
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Frontend Primary
          </span>


          <span
            className="
              px-3.5 py-1.5 
              rounded-full 
              bg-slate-800/80 
              border border-white/10 
              text-slate-300 
              text-xs font-semibold
            "
          >
            Full Stack Capable
          </span>


          <span
            className="
              px-3.5 py-1.5 
              rounded-full 
              bg-slate-800/80 
              border border-white/10 
              text-slate-300 
              text-xs font-semibold
            "
          >
            API & Database
          </span>

        </div>
      </div>


      {/* CODROPS STICKY SKILL SCENES */}
 <div className="skills-scroll-wrapper ">

  {sections.map((section, index) => {

    const Icon = section.icon;

    return (
      <section
        key={section.id}
        className="content"
      >

        <div className="content--sticky">

          <div className="content__inner">

            <SkillCard
              section={section}
              index={index}
              Icon={Icon}
            />

          </div>

        </div>

      </section>
    );

  })}

</div>



      {/* SHIULI FLOWER CARD */}
      <div
        className="
        px-4 sm:px-6 lg:px-8
          mt-10 
          bg-slate-900/60 
          border border-emerald-500/20 
          rounded-3xl 
          p-6 sm:p-8 
          backdrop-blur-xl 
          flex flex-col sm:flex-row 
          items-center 
          gap-6 
          shadow-2xl 
          relative 
          overflow-hidden 
          group
        "
      >

        <div
          className="
            absolute top-0 right-0 
            w-64 h-64 
            bg-emerald-500/10 
            rounded-full 
            blur-3xl
          "
        />


        <div
          className="
            w-full sm:w-56 
            h-44 
            rounded-2xl 
            overflow-hidden 
            border border-white/10 
            flex-shrink-0 
            relative
          "
        >

          <img
            src={shiuliImg}
            alt="Shiuli flower"
            className="
              w-full h-full 
              object-cover 
              group-hover:scale-105 
              transition-transform 
              duration-700
            "
          />

          <div
            className="
              absolute inset-0 
              bg-gradient-to-t 
              from-black/60 
              via-transparent 
              to-transparent
            "
          />

          <span
            className="
              absolute bottom-2 left-2.5 
              text-[10px] 
              uppercase 
              font-mono 
              font-bold 
              tracking-widest 
              text-emerald-300 
              bg-black/60 
              px-2 py-0.5 
              rounded-md 
              border border-white/10
            "
          >
            Design Philosophy
          </span>

        </div>


        <div className="space-y-2 text-left">

          <div
            className="
              inline-flex items-center gap-2 
              text-xs font-bold 
              text-emerald-400 
              uppercase tracking-widest
            "
          >
            <ShieldCheck size={14} />
            Attention to Quality & Craftsmanship
          </div>


          <h4
            className="
              text-white 
              font-extrabold 
              text-xl sm:text-2xl 
              tracking-tight
            "
          >
            Architecting Modern Web Systems
          </h4>


          <p
            className="
              text-xs sm:text-sm 
              text-slate-300 
              leading-relaxed
            "
          >
            Combining clean component architecture, state management,
            responsive layouts, and modern styling to build performant,
            maintainable web applications.
          </p>

        </div>

      </div>



      {/* PHILOSOPHY FOOTER */}
      <div
        className="
          mt-6 
          rounded-2xl 
          border border-white/10 
          bg-white/[0.02] 
          p-5 
          flex items-center 
          gap-4 
          text-left
        "
      >

        <div
          className="
            p-2.5 
            rounded-xl 
            bg-amber-500/10 
            border border-amber-500/20 
            text-amber-400
          "
        >
          <Sparkles size={20} />
        </div>


        <p
          className="
            text-xs sm:text-sm 
            text-slate-300 
            font-medium 
            leading-relaxed
          "
        >
          Building with modern tools while keeping focus on clean structure,
          thoughtful UI decisions, and maintainable code.
        </p>

      </div>


    </section>
  );
}

export default SkillsSection;