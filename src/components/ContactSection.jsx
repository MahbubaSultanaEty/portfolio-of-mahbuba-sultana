import { Mail, Phone, MessageCircle } from 'lucide-react'
import VersionTag from './VersionTag'
import { profile } from '../data/profile'

function ContactSection() {
  return (
    <section id="contact" className="max-w-2xl mx-auto px-6 py-24 text-center">
      <VersionTag version="v2.0" label="let's build something" />

      <h2 className="text-3xl font-bold text-ink mt-4">Get in touch</h2>
      <p className="text-gray-600 mt-3">
        Have a project in mind, or just want to say hi? I'd love to hear from you.
      </p>

      <div className="flex flex-col items-center gap-4 mt-8">
        <a
          href={`mailto:${profile.email}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 text-ink font-medium hover:text-accent transition"
        >
          <Mail size={18} />
          {profile.email}
        </a>

        <a
          href={`tel:${profile.phone}`}
          className="flex items-center gap-3 text-ink font-medium hover:text-accent transition"
        >
          <Phone size={18} />
          {profile.phone}
        </a>

        <a
          href={`https://wa.me/88${profile.phone}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-accent text-white text-sm font-medium rounded-full px-5 py-2 mt-2 hover:opacity-90 transition"
        >
          <MessageCircle size={16} />
          Message on WhatsApp
        </a>
      </div>
    </section>
  )
}

export default ContactSection