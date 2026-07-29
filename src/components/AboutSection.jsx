import { motion } from 'framer-motion';
import { Code2, Camera, Sparkles, Eye } from 'lucide-react';
import shiuliImg from '/shiuly-2.jpg';

const reveal = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};

function AboutSection() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-slate-100 overflow-hidden">
      {/* HEADER SECTION */}
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8"
      >
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.25em] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
            <Sparkles size={14} /> Finding My Footing
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mt-4">
            Philosophy & <span className="text-emerald-400">Mindset</span>
          </h2>
        </div>

        <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
          Approaching code through careful observation, attention to micro-details, and structured systems.
        </p>
      </motion.div>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Philosophy Cards */}
        <div className="lg:col-span-7 grid gap-6">
          {/* Card 1: Craft & Detail-Heavy UI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#0d0f15]/90 rounded-3xl border border-white/10 p-6 sm:p-8 shadow-2xl hover:border-emerald-500/40 transition-all duration-300 relative overflow-hidden group backdrop-blur-xl"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/10 transition-all" />

            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:scale-105 transition-transform">
              <Code2 size={24} />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2 tracking-tight">
              <span>Craft & Detail-Heavy UI</span>
              <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              What I enjoy building most is polished, detail-heavy interfaces — the kind of UI
              work where spacing, micro-interactions, and fluid motions are as deliberate as the
              backend logic underneath. I take pride in building complete end-to-end applications
              from design systems to deployed code.
            </p>
          </motion.div>

          {/* Card 2: Observation & Perspective */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#0d0f15]/90 rounded-3xl border border-white/10 p-6 sm:p-8 shadow-2xl hover:border-emerald-500/40 transition-all duration-300 relative overflow-hidden group backdrop-blur-xl"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-teal-500/10 transition-all" />

            <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-6 border border-teal-500/20 group-hover:scale-105 transition-transform">
              <Camera size={24} />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2 tracking-tight">
              <span>Observation & Perspective</span>
              <Eye className="w-4 h-4 text-teal-400" />
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
             Outside of web development, photography is one of the ways I express my curiosity about the world around me. I enjoy observing small details, capturing meaningful moments, and understanding the stories behind ordinary things. I have a habit of looking deeper, analyzing what I see, and exploring different perspectives — whether it is a place, a design, or a simple everyday moment.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Shiuli-2 Photo Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-between"
        >
          <div className="bg-[#0d0f15]/90 rounded-3xl border border-emerald-500/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden group hover:border-emerald-500/60 transition-all flex flex-col h-full backdrop-blur-xl">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Photo Container */}
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl aspect-4/3 mb-6 group-hover:scale-[1.02] transition-transform duration-500">
              <img
                src={shiuliImg}
                onError={(e) => {
                  e.currentTarget.src = "/shiuly-2.jpg";
                }}
                alt="Shiuli Flower Perspective Photography"
                className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-300 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  Perspective • Shiuli Detail
                </span>
                <Sparkles className="w-4 h-4 text-emerald-300 animate-pulse" />
              </div>
            </div>

            {/* Philosophy Quote */}
            <div className="space-y-3 relative z-10 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold text-white mb-2 tracking-tight">The Eye for Micro-Details</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light italic">
                  "Great engineering and great user interfaces come down to noticing the subtle things others overlook. Photography taught me how to see structure before writing code."
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-emerald-400 font-semibold">
                <span>Detail-Oriented Mindset</span>
                <span className="font-mono text-slate-400 text-[11px]">UI / UX & Architecture</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
