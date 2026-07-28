import { motion } from "framer-motion";
import React from "react";

function Stats() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        delay: 0.45,
      }}
      className="
  grid
  grid-cols-3
  gap-3
  pt-4
  max-w-xl
  "
    >
      {[
        {
    value: "08+",
    title: "Projects Built",
    subtitle: "Real-world applications"
  },
  {
    value: "10+",
   title: "Months Coding",
   subtitle: "Continuous learning journey"
  },
  {
    value: "10+",
    title: "Technologies",
    subtitle: "Modern web stack"
  }
      ].map((stat) => (
        <div
          key={stat.title}
          className="
      group
      rounded-2xl
      bg-card/70
      backdrop-blur-xl
      border
      border-white/10
      p-4
      hover:-translate-y-1
      transition-all
      duration-300
      "
        >
          <h3
            className="
        text-2xl
        font-black
        text-foreground
        bg-gradient-to-r
        from-primary
        to-secondary
        bg-clip-text
        text-transparent
        "
          >
            {stat.value}
          </h3>

          <p
            className="
        text-sm
        font-bold
        text-foreground
        mt-1
        "
          >
            {stat.title}
          </p>

          <p
            className="
        text-xs
        text-muted
        "
          >
            {stat.subtitle}
          </p>
        </div>
      ))}
    </motion.div>
  );
}

export default Stats;
