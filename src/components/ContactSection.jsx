import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle, Copy, Check, Sparkles, ArrowUpRight } from 'lucide-react'
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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          card bg-[#071A1F] 
          rounded-[2.5rem]
          overflow-hidden
          shadow-2xl
          border border-white/10
          relative
        "
      >

        {/* Ambient Lights */}
        <div className="
          absolute -top-32 -right-20 
          w-96 h-96 
          bg-emerald-400/20 
          blur-[100px]
        "/>

        <div className="
          absolute -bottom-32 -left-20 
          w-96 h-96 
          bg-cyan-400/10 
          blur-[100px]
        "/>


        <div className="
          card-body
          grid md:grid-cols-2
          gap-12
          p-8 md:p-14
          relative z-10
        ">


          {/* Left Content */}

          <div className="space-y-6">

            <div className="badge badge-lg bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 gap-2">
              <Sparkles size={14}/>
              Open for opportunities
            </div>


            <h2 className="
              text-4xl md:text-5xl 
              font-black 
              text-white 
              leading-tight
            ">
              Let's create something
              <span className="text-emerald-400">
                {" "}meaningful
              </span>
              together.
            </h2>


            <p className="
              text-gray-300
              leading-relaxed
              max-w-md
              text-base md:text-lg
            ">
              Whether it's a new project, collaboration, or a developer
              opportunity — I would love to hear about it.
              My inbox is always open.
            </p>


            <div className="
              inline-flex items-center gap-2
              text-sm
              text-emerald-300
              bg-emerald-400/10
              px-4 py-2
              rounded-full
              border border-emerald-400/20
            ">
              <Sparkles size={15}/>
              Usually replies within 24 hours
            </div>

          </div>



          {/* Right Contact Card */}

          <div className="
            bg-white/5
            backdrop-blur-md
            rounded-3xl
            border border-white/10
            p-6
            space-y-5
          ">


            <h3 className="text-white font-bold text-xl">
              Let's connect
            </h3>



            {/* Email */}

            <div className="
              flex items-center justify-between
              bg-black/20
              rounded-2xl
              px-4 py-3
            ">

              <a
                href={`mailto:${profile.email}`}
                className="
                  flex items-center gap-3
                  text-gray-200
                  hover:text-emerald-300
                  transition
                  text-sm
                "
              >
                <Mail size={18} className="text-emerald-400"/>
                {profile.email}
              </a>


              <button
                onClick={handleCopyEmail}
                className="
                  btn btn-sm btn-circle
                  bg-white/10
                  border-none
                  text-white
                  hover:bg-emerald-400/20
                "
              >
                {
                  copied
                  ? <Check size={16}/>
                  : <Copy size={16}/>
                }
              </button>

            </div>



            {/* WhatsApp */}

            <a
              href={`https://wa.me/88${profile.phone}`}
              target="_blank"
              rel="noreferrer"
              className="
                btn
                w-full
                rounded-2xl
                bg-emerald-400
                text-[#062015]
                border-none
                hover:bg-emerald-300
                font-bold
              "
            >
              <MessageCircle size={19}/>
              Message on WhatsApp
              <ArrowUpRight size={17}/>
            </a>



            {/* Phone */}

            <a
              href={`tel:${profile.phone}`}
              className="
                flex items-center gap-3
                text-gray-300
                hover:text-white
                transition
                px-2
              "
            >
              <Phone 
                size={18}
                className="text-cyan-400"
              />

              <span>
                {profile.phone}
              </span>

            </a>


          </div>


        </div>

      </motion.div>

    </section>
  )
}

export default ContactSection