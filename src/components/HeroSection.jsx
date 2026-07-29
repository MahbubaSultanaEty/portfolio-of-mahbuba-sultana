import { motion } from "framer-motion";
import { FileDown, ArrowRight, Sparkles, Code2 } from "lucide-react";
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
  const techStack = [
    {
      icon: (
        <span className="text-[#F7DF1E]">
          <SiJavascript size={18} />
        </span>
      ),
      label: "JavaScript",
    },
    {
      icon: (
        <span className="text-[#61DAFB]">
          <SiReact size={18} />
        </span>
      ),
      label: "React.js",
    },
    {
      icon: (
        <span className="text-white">
          <SiNextdotjs size={18} />
        </span>
      ),
      label: "Next.js",
    },
    {
      icon: (
        <span className="text-[#06B6D4]">
          <SiTailwindcss size={18} />
        </span>
      ),
      label: "Tailwind CSS",
    },
    {
      icon: (
        <span className="text-[#339933]">
          <SiNodedotjs size={18} />
        </span>
      ),
      label: "Node.js",
    },
    {
      icon: (
        <span className="text-white">
          <SiExpress size={18} />
        </span>
      ),
      label: "Express.js",
    },
    {
      icon: (
        <span className="text-[#47A248]">
          <SiMongodb size={18} />
        </span>
      ),
      label: "MongoDB",
    },
    {
      icon: (
        <span className="text-emerald-400">
          <SiBetterauth size={18} />
        </span>
      ),
      label: "BetterAuth",
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#07080c] text-white overflow-hidden pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between">
      {/* Ambient Background Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none animate-glow" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative z-10 my-auto py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* LEFT DISPLAY HEADING */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col justify-center space-y-1 text-left z-20"
          >
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wide w-fit mb-3"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              Available for Hire — Web Developer
            </motion.div>

            {/* Giant Stacked Title */}
            <h1 className="text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.9] text-white">
              BUILD
            </h1>
            <h1 className="text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.9] text-transparent [-webkit-text-stroke:2px_#10b981] drop-shadow-[0_0_25px_rgba(16,185,129,0.2)] my-1">
              DIGITAL
            </h1>
            <h1 className="text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.9] text-white">
              FUTURES
            </h1>

            <p className="text-xs uppercase tracking-[0.25em] font-bold text-slate-400 mt-4 flex items-center gap-2">
              <Sparkles size={14} className="text-emerald-400" />
              Building Modern Web Applications
            </p>
          </motion.div>

          {/* CENTER PORTRAIT CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-3 flex flex-col items-center justify-center relative group py-4 lg:py-0"
          >
            {/* Outer Rotating Ring */}
            <div className="absolute inset-[-14px] sm:inset-[-18px] border border-dashed border-emerald-500/30 rounded-[2.5rem] animate-spin-slow pointer-events-none" />

            {/* Glow Aura */}
            <div className="absolute inset-[-8px] bg-gradient-to-tr from-emerald-500/30 via-cyan-500/20 to-indigo-500/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />

            {/* Image Frame */}
            <div className="w-56 h-72 sm:w-64 sm:h-80 lg:w-60 lg:h-80 xl:w-64 xl:h-88 rounded-[2rem] overflow-hidden border border-white/10 bg-slate-900/90 shadow-2xl relative z-10">
              <img
                src={heroPhoto}
                alt={profile.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080c] via-transparent to-transparent opacity-80" />
            </div>

            {/* Profile Center Badge */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-4 z-30 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#11131a]/95 border border-emerald-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-md text-xs font-semibold text-slate-200"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-bold text-white">{profile.name}</span>
              <span className="text-slate-400">— {profile.title}</span>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN DETAILS + RECRUITER-FRIENDLY TECH STACK */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col justify-center space-y-5 text-left z-20 pl-0 lg:pl-2"
          >
            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Innovate. Develop. <br />
              <span className="text-emerald-400">Succeed. Fast.</span>
            </h2>

            {/* Bio */}
            <p className="text-sm text-slate-300 leading-relaxed">
              Hi, I'm{" "}
              <strong className="text-white font-bold">{profile.name}</strong>.{" "}
              {profile.tagline}
            </p>

            {/* RECRUITER-FRIENDLY STRUCTURED TECH STACK PANEL */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <Code2 size={14} /> Core Tech Stack
                </span>
                
              </div>

              <div className="grid grid-cols-2 gap-2">
                {techStack.map((tech) => (
                  <div
                    key={tech.label}
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-slate-900/90 border border-white/10 hover:border-emerald-500/40 hover:bg-slate-800 transition-all text-xs font-semibold text-slate-200"
                  >
                    {tech.icon}
                    <span className="truncate">{tech.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="/resume.pdf"
                download
                className="btn btn-neutral bg-slate-800/90 hover:bg-slate-700 text-white border border-white/10 rounded-full px-6 py-3 text-xs sm:text-sm font-bold transition-all hover:scale-[1.03] active:scale-[0.98] shadow-lg inline-flex items-center gap-2 group"
              >
                <FileDown
                  size={16}
                  className="group-hover:translate-y-0.5 transition-transform text-emerald-400"
                />
                Download Resume
              </a>

              <a
                href="#projects"
                className="btn btn-outline border-emerald-500/80 hover:border-emerald-400 text-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300 rounded-full px-6 py-3 text-xs sm:text-sm font-bold transition-all hover:scale-[1.03] active:scale-[0.98] inline-flex items-center gap-2 group"
              >
                Explore Projects
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FOOTER BAR WITH ACCENT & SOCIAL CHIPS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-10 pt-6 mt-4 border-t border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
      >
        <div className="md:col-span-7 flex flex-col gap-3">        
          <div className="max-w-md">
            <Stats />
          </div>
        </div>

        <div className="md:col-span-5 flex flex-col md:items-end gap-2.5">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
            Connect
          </span>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 text-xs font-semibold text-slate-300 hover:text-white transition-all hover:scale-105 group"
            >
              <span className="text-slate-300 group-hover:text-emerald-400 transition-colors">
                <BsGithub size={16} />
              </span>
              <span>Github</span>
            </a>

            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 text-xs font-semibold text-slate-300 hover:text-white transition-all hover:scale-105 group"
            >
              <span className="text-slate-300 group-hover:text-emerald-400 transition-colors">
                <LiaLinkedin size={18} />
              </span>
              <span>Linkedin</span>
            </a>

            <a
              href={profile.socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 text-xs font-semibold text-slate-300 hover:text-white transition-all hover:scale-105 group"
            >
              <span className="text-slate-300 group-hover:text-emerald-400 transition-colors">
                <FaFacebook size={16} />
              </span>
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;