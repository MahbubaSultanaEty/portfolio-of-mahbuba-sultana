import { motion } from "framer-motion";
import { Layout, Server, Database, Sparkles, Code2, ShieldCheck, Wrench } from "lucide-react";
import { skills } from "../data/skills";

// Image imports (or replace with your image asset paths / public URL strings)
import frontendImg from "../assets/frontend.jpeg";
import backendImg from "../assets/backend.jpeg";
import toolsImg from "../assets/tools.jpeg";
import shiuliImg from "/shiuly-3.jpg";

const sections = [
  {
    id: "frontend",
    number: "01",
    title: "Web Development & Frontend Engineering",
    icon: Layout,
    subtitle: "Building modern interfaces with component-driven architecture",
    image: frontendImg,
    description:
      "Primary expertise in crafting high-performance, responsive, and visually refined web applications. Driven by component modularity, fluid interactions, and modern UI systems.",

    allSkills: skills?.frontend?.items 
  },
  {
    id: "backend",
    number: "02",
    title: "Backend Systems,Databases & Authentication ",
    icon: Server,
    subtitle: "Designing APIs, authorization, Data modeling and application logic",
    image: backendImg,
    description:
      "Solid understanding of server-side architecture, designing clean RESTful APIs with Node.js & Express.js, handling database structures using MongoDB & Mongoose. Experienced in securing applications with modern authentication solutions like BetterAuth, JWT, and session management..",
    
    allSkills: skills?.backend?.items 
  },

  {
    id: "tools",
    number: "04",
    title: "Tools, Workflow & Deployment",
    icon: Wrench,
    subtitle: "Development environment, version control, and cloud deployment",
    image: toolsImg,
    description:
      "Utilizing industry-standard development workflows to write clean, maintainable code, test API endpoints, and deploy applications to production smoothly.",
    
    allSkills: skills?.tools?.items 
  },
];

const reveal = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};

function SkillsSection() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-slate-100">
      {/* SECTION HEADER */}
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 border-b border-white/10 pb-8"
      >
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-emerald-400 font-bold flex items-center gap-2">
            <Code2 size={14} /> Technical Expertise
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Technical Stack & Skill Architecture
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-400 leading-relaxed">
            A frontend-focused engineering core complemented by strong backend API design, database modeling, and modern authentication understanding.
          </p>
        </div>

        {/* TOP STATUS BADGES */}
        <div className="flex flex-wrap gap-2.5 items-center">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Frontend Primary
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-white/10 text-slate-300 text-xs font-semibold">
            Full Stack Capable
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-white/10 text-slate-300 text-xs font-semibold">
            API & Database
          </span>
        </div>
      </motion.div>

      {/* HORIZONTAL ROWS  */}
      <div className="divide-y divide-white/10 border-y border-white/10 bg-[#0a0c10]/60 rounded-3xl overflow-hidden backdrop-blur-xl">
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={section.id}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 sm:p-8 lg:p-10 hover:bg-white/[0.02] transition-colors duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                {/* NUMBER BADGE */}
                <div className="lg:col-span-1 flex items-center">
                  <span className="font-mono text-sm sm:text-base font-bold text-slate-400 tracking-widest bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
                    [ {section.number} ]
                  </span>
                </div>

                {/* THUMBNAIL IMAGE WITH CORNER BADGE */}
                <div className="lg:col-span-3">
                  <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 group shadow-lg">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-32 sm:h-36 object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute top-2.5 left-2.5 p-2 rounded-xl bg-slate-900/90 border border-white/20 text-emerald-400 backdrop-blur-md">
                      <Icon size={16} />
                    </div>
                  </div>
                </div>

                {/* TITLE, DESCRIPTION & SKILL CHIPS */}
                <div className="lg:col-span-5 space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {section.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    
                  </div>
                </div>

                {/* RIGHT SIDE CATEGORIES (Pills matching screenshot) */}
                <div className="lg:col-span-3 flex flex-col justify-center lg:items-end space-y-2.5">                  
                  <div className="flex flex-wrap gap-2 lg:justify-end">
                   {section.allSkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/50 hover:border-emerald-400 transition-colors cursor-default shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/80 border border-white/10 text-slate-300">
                      {section.allSkills.length}+
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* SHIULI FLOWER CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-10 bg-slate-900/60 border border-emerald-500/20 rounded-3xl p-6 sm:p-8 backdrop-blur-xl flex flex-col sm:flex-row items-center gap-6 shadow-2xl relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="w-full sm:w-56 h-44 rounded-2xl overflow-hidden border border-white/10 flex-shrink-0 relative">
          <img
            src={shiuliImg}
            onError={(e) => {
              e.currentTarget.src = "/shiuly-3.jpg";
            }}
            alt="Shiuli flower"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <span className="absolute bottom-2 left-2.5 text-[10px] uppercase font-mono font-bold tracking-widest text-emerald-300 bg-black/60 px-2 py-0.5 rounded-md border border-white/10">
            Design Philosophy
          </span>
        </div>

        <div className="space-y-2 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-widest">
            <ShieldCheck size={14} /> Attention to Quality & Craftsmanship
          </div>
          <h4 className="text-white font-extrabold text-xl sm:text-2xl tracking-tight">
            Architecting Modern Web Systems
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Combining clean component architecture, state management, responsive layouts, and modern styling to build performant, maintainable web applications — the same care I bring to every detail of this stack.
          </p>
        </div>
      </motion.div>

      {/* PHILOSOPHY FOOTER TEASER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5 flex items-center gap-4 text-left"
      >
        <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
          <Sparkles size={20} />
        </div>
        <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
          Building with modern tools while keeping focus on clean structure, thoughtful UI decisions, and maintainable code.
        </p>
      </motion.div>
    </section>
  );
}

export default SkillsSection;