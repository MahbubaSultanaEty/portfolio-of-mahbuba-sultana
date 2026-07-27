import { motion } from 'framer-motion'

function VersionTag({ version, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 font-mono text-xs font-semibold tracking-wide backdrop-blur-md shadow-sm"
    >
      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
      <span className="text-purple-200 font-bold">{version}</span>
      <span className="text-gray-500">•</span>
      <span className="text-gray-300 font-normal uppercase tracking-wider text-[11px]">{label}</span>
    </motion.div>
  )
}

export default VersionTag
