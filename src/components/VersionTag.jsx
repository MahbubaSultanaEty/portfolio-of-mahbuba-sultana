import { motion } from 'framer-motion'

function VersionTag({ version, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs font-semibold tracking-wide"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
      <span>{version}</span>
      <span className="text-gray-400">•</span>
      <span className="text-gray-600 font-normal uppercase tracking-wider text-[11px]">{label}</span>
    </motion.div>
  )
}

export default VersionTag