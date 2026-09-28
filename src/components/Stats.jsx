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
    text-center
  pt-4
  max-w-xl
  "
    >
    
        <div
         
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
        from-emerald-600
        to-secondary
        bg-clip-text
        text-transparent
        "
          >
           1+
          </h3>

          <p
            className="
        text-sm
        font-bold
        text-foreground
        mt-1
        "
          >
          Year Coding
          </p>

          <p
            className="
        text-xs
        text-muted
        "
          >
           Continuous learning journey
          </p>
        </div>
    
    </motion.div>
  );
}

export default Stats;
