import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MessageCircle,
  Copy,
  Check,
  ArrowUpRight
} from 'lucide-react'
import { profile } from '../data/profile'

function ContactSection() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)

    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 py-24">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          relative
          overflow-hidden
          rounded-[2rem]
          bg-[#071A1F]
          border border-white/10
          px-6
          py-12
          sm:px-10
          lg:px-16
        "
      >

        <div className="
          absolute
          -top-24
          left-1/2
          -translate-x-1/2
          h-72
          w-72
          bg-emerald-400/20
          blur-[100px]
        " />


        <div className="relative z-10 text-center">

          <p className="
            text-xs
            uppercase
            tracking-[0.35em]
            text-emerald-300
            font-semibold
            mb-5
          ">
            Contact
          </p>


          <h2 className="
            text-3xl
            sm:text-5xl
            font-black
            text-white
            leading-tight
          ">
            Let's build something
            <span className="text-emerald-400">
              {" "}useful.
            </span>
          </h2>


          <p className="
            max-w-xl
            mx-auto
            mt-5
            text-gray-400
            text-sm
            sm:text-base
            leading-relaxed
          ">
            Have a project idea, collaboration opportunity,
            or just want to discuss web development?
            Feel free to reach out.
          </p>



          {/* Contact Options */}

          <div className="
            mt-10
            grid
            grid-cols-1
            sm:grid-cols-3
            gap-4
          ">


            {/* Email */}

            <div className="
              rounded-2xl
              border border-white/10
              bg-white/5
              p-5
              text-left
            ">

              <Mail className="text-emerald-400 mb-4" size={22}/>

              <p className="text-xs text-gray-500 mb-2">
                Email
              </p>

              <div className="flex items-center gap-2">

                <a
                  href={`mailto:${profile.email}`}
                  className="
                    text-sm
                    text-gray-200
                    truncate
                    hover:text-emerald-300
                  "
                >
                  {profile.email}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="text-gray-400 hover:text-white shrink-0"
                >
                  {
                    copied
                    ? <Check size={15}/>
                    : <Copy size={15}/>
                  }
                </button>

              </div>

            </div>



            {/* Phone */}

            <div className="
              rounded-2xl
              border border-white/10
              bg-white/5
              p-5
              text-left
            ">

              <Phone className="text-cyan-400 mb-4" size={22}/>

              <p className="text-xs text-gray-500 mb-2">
                Phone
              </p>

              <a
                href={`tel:${profile.phone}`}
                className="
                  text-sm
                  text-gray-200
                  hover:text-white
                "
              >
                {profile.phone}
              </a>

            </div>




            {/* WhatsApp */}

            <a
              href={`https://wa.me/88${profile.phone}`}
              target="_blank"
              rel="noreferrer"
              className="
                rounded-2xl
                bg-emerald-400
                p-5
                text-left
                text-[#062015]
                flex
                flex-col
                justify-between
                transition
                hover:bg-emerald-300
              "
            >

              <MessageCircle size={22}/>


              <div className="flex items-center justify-between mt-8">

                <div>
                  <p className="text-xs opacity-70">
                    Quick chat
                  </p>

                  <p className="font-bold">
                    WhatsApp
                  </p>
                </div>


                <ArrowUpRight size={20}/>

              </div>


            </a>


          </div>


          <p className="
            mt-8
            text-xs
            text-gray-500
          ">
            Usually replies within 24 hours
          </p>


        </div>


      </motion.div>

    </section>
  )
}

export default ContactSection