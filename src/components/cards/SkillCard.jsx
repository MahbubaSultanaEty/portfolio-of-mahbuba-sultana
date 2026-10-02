import React from "react";

function SkillCard({ section, Icon }) {
  const skills = section.allSkills ?? [];

  return (
    <article className="group flex h-full min-h-[280px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/20 hover:shadow-emerald-950/20 sm:min-h-[300px]">
      {/* IMAGE */}
      <div className="relative h-36 w-full shrink-0 overflow-hidden sm:h-40">
        <img
          src={section.image}
          alt={section.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* ICON */}
        <div className="absolute bottom-3 left-3 flex h-8 w-8 items-center justify-center rounded-xl border border-white/20 bg-black/30 text-emerald-400 backdrop-blur-md sm:h-9 sm:w-9">
          <Icon size={16} className="sm:h-[18px] sm:w-[18px]" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-4 text-left sm:p-5">
        <h3 className="text-base font-bold tracking-tight text-white sm:text-lg">
          {section.title}
        </h3>

        <p className="mt-2 line-clamp-4 text-xs leading-relaxed text-slate-400 sm:text-sm">
          {section.description}
        </p>

        {/* SKILLS */}
        {skills.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-emerald-400/20 bg-emerald-400/5 px-2 py-1 text-[10px] font-medium text-emerald-300 sm:text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default SkillCard;
