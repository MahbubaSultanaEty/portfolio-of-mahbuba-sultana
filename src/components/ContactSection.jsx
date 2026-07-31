import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MessageCircle,
  Copy,
  Check,
  
  Send,
} from 'lucide-react'
import { profile } from '../data/profile'

function ContactSection() {
  const [copied, setCopied] = useState(false)


  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)

    setTimeout(() => setCopied(false), 2000)
  }


  const handleSubmit = (e) => {
  e.preventDefault()

  const form = new FormData(e.target)

  const name = form.get("name")
  const email = form.get("email")
  const subject = form.get("subject")
  const message = form.get("message")

  const mailBody = `
Name: ${name}

Email: ${email}

Message:
${message}
`

  window.location.href = 
    `mailto:${profile.email}?subject=${subject}&body=${encodeURIComponent(mailBody)}`
}


  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-4 sm:px-6 py-24"
    >

      <div className="mb-12">
        <p className="
          text-xs
          uppercase
          tracking-[0.35em]
          text-emerald-300
          font-semibold
          mb-4
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
          Let's connect and
          <span className="text-emerald-400">
            {" "}create something.
          </span>
        </h2>
      </div>



      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="
          grid
          lg:grid-cols-2
          rounded-[2rem]
          overflow-hidden
          border
          border-white/10
          bg-[#071A1F]
        "
      >


        {/* LEFT SIDE */}

        <div className="
          p-6
          sm:p-10
          lg:p-12
          border-b
          lg:border-b-0
          lg:border-r
          border-white/10
        ">

          <h3 className="
            text-2xl
            font-bold
            text-white
          ">
            Let's Connect
          </h3>


          <p className="
            mt-3
            text-sm
            text-gray-400
            leading-relaxed
            max-w-sm
          ">
            Have a project idea or want to collaborate?
            Feel free to reach out. I would love to hear from you.
          </p>



          <div className="mt-10 space-y-7">


            {/* Email */}

            <div className="flex items-center gap-4">

              <div className="
                h-12
                w-12
                shrink-0
                rounded-xl
                bg-emerald-400/10
                flex
                items-center
                justify-center
              ">
                <Mail
                  size={20}
                  className="text-emerald-400"
                />
              </div>


              <div className="min-w-0">

                <p className="
                  text-xs
                  text-gray-500
                  uppercase
                  tracking-wider
                ">
                  Email
                </p>


                <div className="
                  flex
                  items-center
                  gap-2
                  mt-1
                ">

                  <a
                    href={`mailto:${profile.email}`}
                    className="
                      text-sm
                      text-white
                      truncate
                      hover:text-emerald-300
                    "
                  >
                    {profile.email}
                  </a>


                  <button
                    onClick={handleCopyEmail}
                    className="
                      text-gray-400
                      hover:text-white
                    "
                  >
                    {
                      copied
                      ? <Check size={15}/>
                      : <Copy size={15}/>
                    }
                  </button>

                </div>

              </div>

            </div>




            {/* Phone */}

            <div className="flex items-center gap-4">

              <div className="
                h-12
                w-12
                rounded-xl
                bg-cyan-400/10
                flex
                items-center
                justify-center
              ">
                <Phone
                  size={20}
                  className="text-cyan-400"
                />
              </div>


              <div>

                <p className="
                  text-xs
                  text-gray-500
                  uppercase
                  tracking-wider
                ">
                  Phone
                </p>

                <p className="
                  text-sm
                  text-white
                  mt-1
                ">
                  {profile.phone}
                </p>

              </div>

            </div>




            {/* WhatsApp */}

            <a
              href={`https://wa.me/88${profile.phone}`}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                gap-4
                text-white
                hover:text-emerald-300
                transition
              "
            >

              <div className="
                h-12
                w-12
                rounded-xl
                bg-emerald-400/10
                flex
                items-center
                justify-center
              ">
                <MessageCircle
                  size={20}
                  className="text-emerald-400"
                />
              </div>


              <div>

                <p className="
                  text-xs
                  text-gray-500
                  uppercase
                  tracking-wider
                ">
                  WhatsApp
                </p>

                <p className="text-sm mt-1">
                  Start a conversation
                </p>

              </div>


            </a>


          </div>      


        </div>






        {/* RIGHT SIDE FORM */}

        <div className="
          p-6
          sm:p-10
          lg:p-12
        ">


          <h3 className="
            text-2xl
            font-bold
            text-white
            mb-8
          ">
            Send a Message
          </h3>



          <form  onSubmit={handleSubmit} className="space-y-5">


            <div className="
              grid
              sm:grid-cols-2
              gap-5
            ">

              <input
                name="name"
                type="text"
                placeholder="Your name"
                className="
                  w-full
                  rounded-xl
                  bg-white/5
                  border
                  border-white/10
                  px-4
                  py-3.5
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-gray-500
                  focus:border-emerald-400
                "
              />


              <input
                name="email"
                type="email"
                placeholder="Your email"
                className="
                  w-full
                  rounded-xl
                  bg-white/5
                  border
                  border-white/10
                  px-4
                  py-3.5
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-gray-500
                  focus:border-emerald-400
                "
              />

            </div>



            <input
              name="subject"
              type="text"
              placeholder="Subject"
              className="
                w-full
                rounded-xl
                bg-white/5
                border
                border-white/10
                px-4
                py-3.5
                text-sm
                text-white
                outline-none
                placeholder:text-gray-500
                focus:border-emerald-400
              "
            />



            <textarea
              name="message"
              rows="6"
              placeholder="Your message"
              className="
                w-full
                rounded-xl
                bg-white/5
                border
                border-white/10
                px-4
                py-3.5
                text-sm
                text-white
                outline-none
                resize-none
                placeholder:text-gray-500
                focus:border-emerald-400
              "
            />



            <button
              type="submit"
              className="
                w-full
                rounded-xl
                bg-emerald-400
                py-3.5
                flex
                items-center
                justify-center
                gap-2
                font-bold
                text-[#062015]
                hover:bg-emerald-300
                transition
              "
            >
              Send Message
              <Send size={16}/>
            </button>


          </form>


        </div>


      </motion.div>


    </section>
  )
}

export default ContactSection