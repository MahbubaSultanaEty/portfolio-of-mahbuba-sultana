import { ArrowRight, FileDown } from "lucide-react";
import React from "react";

function HeroSectionBtns() {
  return (
    <div className="flex flex-wrap md:flex-col items-center gap-3 pt-1">

{/* Download Resume */}
<a 
  href="/resume.pdf" 
  download 
  className="group relative overflow-hidden inline-flex items-center justify-center btn btn-neutral bg-slate-800/90 hover:bg-slate-700 text-white border border-white/10 rounded-full px-6 py-3 text-xs sm:text-sm font-bold shadow-lg"
>
  <span className="inline-flex gap-2 items-center justify-center">
    {/* icon-er wrapper: width 0 theke expand hobe, and clip kore rakhbe */}
    <span className="overflow-hidden w-0 group-hover:w-5 transition-[width] duration-300 ease-[cubic-bezier(0.75,0,0.125,1)] flex items-center justify-center">
      <FileDown 
        size={16} 
        className="text-emerald-400 shrink-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.75,0,0.125,1)]" 
      />
    </span>
    <span>Download Resume</span>
  </span>
</a>

{/* Explore Projects */}
<a 
  href="#projects" 
  className="group relative overflow-hidden inline-flex items-center justify-center btn btn-outline border-emerald-500/80 hover:border-emerald-400 text-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300 rounded-full px-6 py-3 text-xs sm:text-sm font-bold"
>
  <span className="inline-flex gap-2 items-center justify-center">
    <span>Explore Projects</span>
    <span className="overflow-hidden w-0 group-hover:w-5 transition-[width] duration-300 ease-[cubic-bezier(0.75,0,0.125,1)] flex items-center justify-center">
      <ArrowRight 
        size={15} 
        className="shrink-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.75,0,0.125,1)]" 
      />
    </span>
  </span>
</a>
    </div>
  );
}

export default HeroSectionBtns;
