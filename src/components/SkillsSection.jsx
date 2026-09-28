"use client";

import { Code2, ShieldCheck, Sparkles } from "lucide-react";
import { sections } from "../data/skills";

import shiuliImg from "/shiuly-3.jpg";
import SkillCard from "./cards/SkillCard";

function SkillsSection() {
  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-7xl px-4 py-12 text-slate-100 sm:px-6 md:py-16 lg:px-8"
    >
      {/* SECTION HEADER */}
      <div className="mb-10 flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-8 md:mb-12 lg:flex-row lg:items-end">
        <div className="min-w-0">
          <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-emerald-400">
            <Code2 size={14} /> Architecture Expertise
          </span>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
            Skill Architecture
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            A frontend-focused engineering core complemented by strong backend
            API design, database modeling, and modern authentication
            understanding.
          </p>
        </div>

        {/* STATUS BADGES */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-bold text-emerald-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Frontend Primary
          </span>

          <span className="rounded-full border border-white/10 bg-slate-800/80 px-3.5 py-1.5 text-xs font-semibold text-slate-300">
            Full Stack Capable
          </span>

          <span className="rounded-full border border-white/10 bg-slate-800/80 px-3.5 py-1.5 text-xs font-semibold text-slate-300">
            API & Database
          </span>
        </div>
      </div>

      {/* SKILL CARDS: simple responsive grid (1 / 2 / 3 columns) */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
        {sections.map((section, index) => {
          const Icon = section.icon;

          return (
            <div key={section.id} className="min-w-0">
              <SkillCard section={section} index={index} Icon={Icon} />
            </div>
          );
        })}
      </div>

      {/* SHIULI CARD + PHILOSOPHY: side by side on large screens */}
      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* SHIULI FLOWER CARD */}
        <div className="group relative flex flex-col items-center gap-6 overflow-hidden rounded-3xl border border-emerald-500/20 bg-slate-900/60 p-6 shadow-2xl backdrop-blur-xl sm:flex-row sm:p-8 lg:col-span-2">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="relative h-44 w-full flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 sm:w-56">
            <img
              src={shiuliImg}
              alt="Shiuli flower"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute bottom-2 left-2.5 rounded-md border border-white/10 bg-black/60 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-300">
              Design Philosophy
            </span>
          </div>

          <div className="relative min-w-0 space-y-2 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400">
              <ShieldCheck size={14} />
              Attention to Quality & Craftsmanship
            </div>

            <h4 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
              Architecting Modern Web Systems
            </h4>

            <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
              Combining clean component architecture, state management,
              responsive layouts, and modern styling to build performant,
              maintainable web applications.
            </p>
          </div>
        </div>

        {/* PHILOSOPHY */}
        <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-6 text-left sm:items-center lg:flex-col lg:items-start lg:justify-center">
          <div className="flex-shrink-0 rounded-xl border border-amber-500/20 bg-amber-500/10 p-2.5 text-amber-400">
            <Sparkles size={20} />
          </div>

          <p className="text-xs font-medium leading-relaxed text-slate-300 sm:text-sm">
            Building with modern tools while keeping focus on clean structure,
            thoughtful UI decisions, and maintainable code.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;