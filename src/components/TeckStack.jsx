import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiBetterauth,
} from "react-icons/si";

/**
 * The stack is laid out as the layers of a real request:
 * Client -> Server -> Data -> Security, joined by a rail with a light pulse
 * travelling down it. Each card glows in its own brand color.
 */
const layers = [
  {
    id: "client",
    label: "Client Layer",
    sub: "Interface & experience",
    items: [
      { name: "JavaScript", role: "Language", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React.js", role: "UI library", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", role: "Framework", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind CSS", role: "Styling", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    id: "server",
    label: "Server Layer",
    sub: "APIs & business logic",
    items: [
      { name: "Node.js", role: "Runtime", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", role: "API framework", icon: SiExpress, color: "#FFFFFF" },
    ],
  },
  {
    id: "data",
    label: "Data Layer",
    sub: "Storage & modeling",
    items: [
      { name: "MongoDB", role: "Database", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    id: "security",
    label: "Security Layer",
    sub: "Auth & sessions",
    items: [
      { name: "BetterAuth", role: "Authentication", icon: SiBetterauth, color: "#34D399" },
    ],
  },
];

const total = layers.reduce((n, l) => n + l.items.length, 0);

function TechCard({ tech, number, delay }) {
  const Icon = tech.icon;

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay }}
      onMouseMove={handleMove}
      style={{ "--c": tech.color, "--mx": "50%", "--my": "0%" }}
      className="group relative min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[color:color-mix(in_srgb,var(--c)_45%,transparent)]"
    >
      {/* cursor spotlight in the tech's brand color */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(180px circle at var(--mx) var(--my), color-mix(in srgb, var(--c) 22%, transparent), transparent 70%)",
        }}
      />

      <div className="relative z-10 flex h-full flex-col gap-5 p-4 sm:p-5">
        <div className="flex items-start justify-between">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl border transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg] sm:h-14 sm:w-14"
            style={{
              background: "color-mix(in srgb, var(--c) 12%, transparent)",
              borderColor: "color-mix(in srgb, var(--c) 30%, transparent)",
              boxShadow: "0 0 24px color-mix(in srgb, var(--c) 18%, transparent)",
            }}
          >
            <Icon size={26} style={{ color: tech.color }} />
          </div>

          <span className="font-mono text-[10px] tracking-widest text-slate-600 sm:text-xs">
            {String(number).padStart(2, "0")}
          </span>
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-base font-bold tracking-tight text-white sm:text-lg">
            {tech.name}
          </h3>
          <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-slate-500">
            {tech.role}
          </p>

          <div
            className="mt-3 h-[2px] w-8 rounded-full transition-all duration-500 group-hover:w-full"
            style={{ background: tech.color, opacity: 0.7 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

function TechStack() {
  let counter = 0;

  return (
    <section
      id="tech-stack"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <style>{`
        @keyframes stack-flow {
          0%   { top: 0%;   opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes stack-ring {
          0%   { transform: scale(1);   opacity: .55; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .stack-flow, .stack-ring { animation: none !important; }
        }
      `}</style>

      {/* Background glows */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[360px] w-[360px] translate-x-1/3 rounded-full bg-cyan-500/[0.07] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <div className="mb-12 flex flex-col justify-between gap-6 sm:mb-16 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-emerald-400 sm:text-sm">
              <span className="h-px w-8 bg-emerald-400" />
              Core Stack
            </div>

            <h2 className="mt-4 text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Technologies I Build With
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base lg:text-lg">
              The core technologies I use to build modern, responsive, and
              full-stack web applications, arranged the way a request
              travels through them.
            </p>
          </div>

          <div className="flex gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-center">
              <div className="text-2xl font-black text-white">{total}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                Technologies
              </div>
            </div>
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-3 text-center">
              <div className="text-2xl font-black text-emerald-400">
                {layers.length}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-emerald-300/70">
                Layers
              </div>
            </div>
          </div>
        </div>

        {/* ================= LAYERS ================= */}
        <div className="relative">
          {/* the rail */}
          <div className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-emerald-400/60 via-emerald-400/20 to-transparent" />
          {/* light pulse travelling down the rail */}
          <span
            className="stack-flow absolute left-[3px] h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_3px_rgba(110,231,183,0.8)]"
            style={{ animation: "stack-flow 5s ease-in-out infinite" }}
          />

          <div className="flex flex-col gap-10 sm:gap-12">
            {layers.map((layer, li) => (
              <div
                key={layer.id}
                className="relative pl-8 md:grid md:grid-cols-[210px_1fr] md:gap-8 md:pl-10"
              >
                {/* node on the rail */}
                <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center">
                  <span
                    className="stack-ring absolute h-4 w-4 rounded-full border border-emerald-400"
                    style={{
                      animation: "stack-ring 2.4s ease-out infinite",
                      animationDelay: `${li * 0.5}s`,
                    }}
                  />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                </span>

                {/* layer label */}
                <div className="mb-4 md:mb-0">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-400/70">
                    Layer {String(li + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 text-xl font-extrabold tracking-tight text-white">
                    {layer.label}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">{layer.sub}</p>
                </div>

                {/* cards */}
                <div className="grid min-w-0 grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-4">
                  {layer.items.map((tech, i) => {
                    counter += 1;
                    return (
                      <TechCard
                        key={tech.name}
                        tech={tech}
                        number={counter}
                        delay={i * 0.07}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM LABEL ================= */}
        <div className="mt-12 flex items-center gap-3 text-xs text-slate-500 sm:text-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Core technologies · MERN-stack development foundation
        </div>
      </div>
    </section>
  );
}

export default TechStack;