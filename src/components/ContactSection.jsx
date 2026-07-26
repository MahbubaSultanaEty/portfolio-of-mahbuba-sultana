import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle, Copy, Check, Sparkles } from 'lucide-react'
import VersionTag from './VersionTag'
import { profile } from '../data/profile'

function ContactSection() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl border-2 border-gray-200/90 p-8 md:p-14 text-center shadow-xl relative overflow-hidden group hover:border-accent/40 transition-colors"
      >
        {/* Background ambient glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex justify-center mb-6">
          <VersionTag version="v2.0" label="let's build something" />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-ink tracking-tight mb-4">
          Let's Build Something Together
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto text-base md:text-lg mb-10 leading-relaxed font-normal">
          Have a project in mind, a hiring opportunity, or just want to chat technology?
          My inbox is always open.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto mb-8">
          {/* Email Box with Copy */}
          <div className="w-full sm:w-auto flex items-center justify-between gap-3 bg-surface border-2 border-gray-200 rounded-full px-6 py-3.5 shadow-sm hover:border-accent/40 transition-all">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2.5 text-sm md:text-base font-bold text-ink hover:text-accent transition-colors"
            >
              <Mail size={18} className="text-accent" />
              <span>{profile.email}</span>
            </a>
            <button
              onClick={handleCopyEmail}
              className="p-2 rounded-full hover:bg-gray-200/80 text-gray-500 hover:text-accent transition-colors"
              title="Copy Email Address"
            >
              {copied ? <Check size={18} className="text-emerald-600" /> : <Copy size={18} />}
            </button>
          </div>

          {/* WhatsApp / Phone CTA */}
          <a
            href={`https://wa.me/88${profile.phone}`}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-accent text-white font-bold text-sm md:text-base rounded-full px-7 py-3.5 hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/25"
          >
            <MessageCircle size={20} />
            Message on WhatsApp
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-semibold text-gray-500 pt-4 border-t border-gray-100">
          <a
            href={`tel:${profile.phone}`}
            className="inline-flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Phone size={16} className="text-secondary" />
            <span>Direct Phone: {profile.phone}</span>
          </a>
          <span className="inline-flex items-center gap-1.5 text-xs text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full font-bold">
            <Sparkles size={14} />
            Response time: &lt; 24 hours
          </span>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactSection
