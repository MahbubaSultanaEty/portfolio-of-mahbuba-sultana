import { useRef } from "react";

/**
 * Usage:  <SkillCloud skills={section.allSkills} />
 * Resting state: chips are green, and a wave of light rolls through them on a loop.
 * Hover state: chips near the cursor lift, glow and get a cursor-following edge light.
 */
export default function SkillCloud({ skills = [] }) {
  const wrapRef = useRef(null);

  const handleMove = (e) => {
    wrapRef.current?.querySelectorAll(".skill-chip").forEach((chip) => {
      const r = chip.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const p = Math.max(0, 1 - Math.hypot(dx, dy) / 170);
      chip.style.setProperty("--x", `${e.clientX - r.left}px`);
      chip.style.setProperty("--y", `${e.clientY - r.top}px`);
      chip.style.setProperty("--p", p.toFixed(3));
    });
  };

  const handleLeave = () => {
    wrapRef.current
      ?.querySelectorAll(".skill-chip")
      .forEach((chip) => chip.style.setProperty("--p", "0"));
  };

  return (
    <>
      <style>{`
        .skill-wrap { position: relative; isolation: isolate; }
        /* ambient glow behind the whole cloud */
        .skill-wrap::before {
          content: "";
          position: absolute;
          inset: -2rem;
          z-index: -1;
          background:
            radial-gradient(40% 60% at 20% 30%, rgba(74,222,128,.14), transparent 70%),
            radial-gradient(40% 60% at 80% 80%, rgba(16,185,129,.12), transparent 70%);
          filter: blur(20px);
          animation: skill-drift 9s ease-in-out infinite alternate;
          pointer-events: none;
        }

        .skill-chip {
          --x: -200px; --y: -200px; --p: 0;
          position: relative;
          overflow: hidden;
          padding: 0.6rem 1.15rem;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          cursor: default;
          border: 1px solid rgba(74,222,128,.28);
          border-radius: 0.5rem;
          border-top-right-radius: 1.1rem;
          border-bottom-left-radius: 1.1rem;
          background: rgba(74,222,128,.07);
          color: color-mix(in srgb, #86efac calc(var(--p) * 100%), #4ade80);
          text-shadow: 0 0 calc(6px + var(--p) * 10px) rgba(74,222,128,.55);
          transform: translateY(calc(var(--p) * -4px)) scale(calc(1 + var(--p) * 0.07));
          box-shadow: 0 0 calc(var(--p) * 30px) rgba(74,222,128, calc(var(--p) * 0.35));
          transition: transform .18s ease-out, box-shadow .18s ease-out;
        }

        /* idle: light sweeps across each chip, staggered so it rolls through the cloud */
        .skill-chip .skill-sweep {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(105deg, transparent 35%, rgba(134,239,172,.55) 50%, transparent 65%);
          background-size: 260% 100%;
          background-position: 160% 0;
          mix-blend-mode: screen;
          animation: skill-sweep 4.8s ease-in-out infinite;
          animation-delay: calc(var(--i) * 0.14s);
          pointer-events: none;
        }
        /* idle: border and glow pulse in the same rhythm */
        .skill-chip .skill-pulse {
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          border: 1px solid #4ade80;
          opacity: 0;
          animation: skill-pulse 4.8s ease-in-out infinite;
          animation-delay: calc(var(--i) * 0.14s);
          pointer-events: none;
        }

        /* hover: edge light that follows the cursor */
        .skill-chip::before {
          content: "";
          position: absolute;
          inset: -1px;
          padding: 1px;
          border-radius: inherit;
          background: radial-gradient(110px circle at var(--x) var(--y), #bbf7d0, transparent 70%);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0);
          opacity: calc(var(--p) * 1.4);
          pointer-events: none;
        }
        .skill-chip::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(90px circle at var(--x) var(--y), rgba(74,222,128,.28), transparent 70%);
          opacity: var(--p);
          pointer-events: none;
        }

        @keyframes skill-sweep {
          0%   { background-position: 160% 0; }
          35%  { background-position: -60% 0; }
          100% { background-position: -60% 0; }
        }
        @keyframes skill-pulse {
          0%, 100% { opacity: 0; box-shadow: 0 0 0 rgba(74,222,128,0); }
          15%      { opacity: 1; box-shadow: 0 0 16px rgba(74,222,128,.55); }
          40%      { opacity: 0; box-shadow: 0 0 0 rgba(74,222,128,0); }
        }
        @keyframes skill-drift {
          from { transform: translate3d(-2%, -2%, 0); }
          to   { transform: translate3d(2%, 3%, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .skill-wrap::before, .skill-sweep, .skill-pulse { animation: none; }
          .skill-chip { transition: none; transform: none; }
        }
      `}</style>

      <div
        ref={wrapRef}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        className="skill-wrap flex flex-wrap gap-3 py-6"
      >
        {skills.map((skill, i) => (
          <span key={skill} className="skill-chip" style={{ "--i": i }}>
            <i className="skill-sweep" />
            <i className="skill-pulse" />
            {skill}
          </span>
        ))}
      </div>
    </>
  );
}