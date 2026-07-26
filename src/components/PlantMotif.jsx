import { motion, useScroll, useTransform } from 'framer-motion'

function PlantMotif({ targetRef }) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  })

  const stemLength = useTransform(scrollYProgress, [0, 0.85], [0, 1])
  const bloomOpacity = useTransform(scrollYProgress, [0.75, 0.95], [0, 1])
  const bloomScale = useTransform(scrollYProgress, [0.75, 0.95], [0.6, 1])

  return (
    <div
  aria-hidden="true"
  className="hidden md:block fixed left-3 top-20 bottom-0 z-10 w-16 pointer-events-none border-4 border-red-500"
>
      <svg viewBox="0 0 80 1000" preserveAspectRatio="none" className="h-full w-full">
        <circle cx="40" cy="990" r="5" fill="#2f5d3a" opacity="0.5" />

        <motion.path
          d="M40 100 C36 180, 44 250, 38 350 C 30 550, 42 750, 40 1000"
          stroke="#2f5d3a"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          style={{ pathLength: stemLength }}
        />

        <motion.g
          style={{ opacity: bloomOpacity, scale: bloomScale, transformOrigin: '40px 90px' }}
        >
          <circle cx="40" cy="90" r="10" fill="#c9a15a" />
          <circle cx="28" cy="80" r="9" fill="#c9a15a" opacity="0.85" />
          <circle cx="52" cy="80" r="9" fill="#c9a15a" opacity="0.85" />
          <circle cx="34" cy="65" r="9" fill="#c9a15a" opacity="0.7" />
          <circle cx="46" cy="65" r="9" fill="#c9a15a" opacity="0.7" />
          <circle cx="40" cy="88" r="5" fill="#2f5d3a" />
        </motion.g>
      </svg>
    </div>
  )
}

export default PlantMotif