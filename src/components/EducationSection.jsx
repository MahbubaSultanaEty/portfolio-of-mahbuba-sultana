import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, BookOpen, Award, Sparkles, Asterisk } from "lucide-react";
import { education } from "../data/education";

const reveal = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};

function EducationSection() {
  const allItems = [
    {
      category: "Academic",
      icon: GraduationCap,
      period: education?.academic?.items?.[0]?.period || "2023 — Present",
      title: education?.academic?.items?.[0]?.title || "BSS (Honours), Political Science",
      detail: education?.academic?.items?.[0]?.detail || "Currently pursuing my 4th year, developing analytical & critical thinking skills.",
      tag: "Academic Degree",
    },
    {
      category: "Technical",
      icon: BookOpen,
      period: education?.technical?.items?.[0]?.period || "Jan 2026 — Jun 2026",
      title: education?.technical?.items?.[0]?.title || "Complete Web Development Course",
      detail: education?.technical?.items?.[0]?.detail || "Programming Hero • Selected for SCIC bonus track — Scored 56.8/60 across assignments.",
      tag: "Certification & SCIC Track",
    },
    {
      category: "Technical",
      icon: BookOpen,
      period: education?.technical?.items?.[1]?.period || "Oct 2025 — Present",
      title: education?.technical?.items?.[1]?.title || "freeCodeCamp",
      detail: education?.technical?.items?.[1]?.detail || "Self-study in web development fundamentals alongside structured coursework.",
      tag: "Self-Driven Learning",
    },
    {
      category: "Languages",
      icon: Award,
      period: "Languages & Certifications",
      title: "Multilingual Communication",
      detail: "English (Certifications A2 & B1) • Hindi (Fluent Verbal) • Spanish (A1 In Progress).",
      tag: "Global Communication",
    },
  ];

  // Split into 2 columns matching the screenshot layout
  const leftColumn = [allItems[0], allItems[1]];
  const rightColumn = [allItems[2], allItems[3]];

  return (
    <section id="education" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-20 py-12 text-slate-100">
      {/* HEADER WITH CIRCULAR EMBLEM & TITLE (Matching Screenshot UI) */}
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12"
      >
        {/* Left Side: Large Dark Circle Badge with Emerald Symbol */}
        <div className="relative shrink-0">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#0c0e14] border border-white/10 flex items-center justify-center shadow-2xl group hover:border-emerald-500/40 transition-all duration-500">
            <div className="absolute inset-0 rounded-full bg-emerald-500/5 blur-xl group-hover:bg-emerald-500/15 transition-all" />
            <Asterisk size={54} className="text-emerald-400 group-hover:rotate-45 transition-transform duration-500" />
          </div>
        </div>

        {/* Right Side: Title & Description */}
        <div className="text-center md:text-left flex-1 pt-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-emerald-400 mb-2">
            <Sparkles size={14} /> Foundations & Growth
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Education & <span className="text-emerald-400">Learning Milestones</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
            Structured academic foundation, intensive web engineering bootcamps, and continuous self-driven skill development.
          </p>
        </div>
      </motion.div>

      {/* SCREENSHOT-STYLE TWO-COLUMN CARD CONTAINER */}
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-[#0a0c10]/80 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
          {/* LEFT COLUMN */}
          <div className="space-y-8 md:border-r md:border-white/10 md:pr-12">
            {leftColumn.map((item, idx) => (
              <div key={idx} className="flex gap-4 sm:gap-6 group">
                {/* Round Arrow Icon Button (Screenshot style) */}
                <div className="shrink-0 mt-1">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 group-hover:bg-emerald-500 group-hover:text-slate-950 group-hover:border-emerald-400 transition-all duration-300 shadow-md">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-col sm:flex-row items-center gap-2">
                    <span className="text-xs font-mono text-slate-400 font-semibold">
                      {item.period}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">
            {rightColumn.map((item, idx) => (
              <div key={idx} className="flex gap-4 sm:gap-6 group">
                {/* Round Arrow Icon Button (Screenshot style) */}
                <div className="shrink-0 mt-1">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 group-hover:bg-emerald-500 group-hover:text-slate-950 group-hover:border-emerald-400 transition-all duration-300 shadow-md">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-slate-400 font-semibold">
                      {item.period}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM SUMMARY BADGE */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Continuous Learning & Skill Expansion
          </div>
          <div className="font-mono text-slate-400">
            Political Science BSS • SCIC Program • Multilingual
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default EducationSection;