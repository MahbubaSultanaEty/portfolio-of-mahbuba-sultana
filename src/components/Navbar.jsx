import { useState } from 'react'
import { Menu, X, FileText, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import avatarImg from '../assets/avatar.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '#story', label: 'Story' },
     { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },  
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header
      className="
        fixed
        top-4
        left-0
        w-full
        z-40
        px-4
      "
    >

      <div
        className="
          max-w-6xl
          mx-auto
          rounded-2xl
          border
          border-gray-200/80
          bg-white/80
          backdrop-blur-xl
          shadow-lg
        "
      >

        <div
          className="
            flex
            items-center
            justify-between
            px-5
            py-3
          "
        >


          {/* Brand */}

          <a
            href="#"
            className="flex items-center gap-3 group"
          >

            <div className="
              relative
            ">
              <img
                src={avatarImg}
                alt="Mahbuba Sultana"
                className="
                  w-10
                  h-10
                  rounded-full
                  object-cover
                  border-2
                  border-emerald-400/40
                  group-hover:scale-105
                  transition
                "
              />

              <span className="
                absolute
                -bottom-1
                -right-1
                w-3
                h-3
                rounded-full
                bg-emerald-400
                border-2
                border-white
              "/>

            </div>


            <div>

              <h1 className="
                font-black
                text-gray-900
                text-base
                leading-none
                group-hover:text-emerald-600
                transition
              ">
                Mahbuba Sultana
              </h1>
      

            </div>


          </a>




          {/* Desktop Navigation */}

          <nav
            className="
              hidden
              md:flex
              items-center
              gap-1
              bg-gray-50
              rounded-full
              px-2
              py-1
            "
          >

            {
              links.map((link)=>(
                <a
                  key={link.href}
                  href={link.href}
                  className="
                    px-3
                    py-1.5
                    rounded-full
                    text-sm
                    font-medium
                    text-gray-600
                    hover:bg-white
                    hover:text-emerald-600
                    hover:shadow-sm
                    transition-all
                  "
                >
                  {link.label}
                </a>
              ))
            }

          </nav>





          {/* Resume */}

          <div className="
            hidden
            md:flex
          ">

            {/* <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              download
              className="
                btn
                btn-sm
                rounded-full
                bg-emerald-500
                text-white
                border-none
                px-5
                hover:bg-emerald-600
                gap-2
                shadow-md
              "
            >

              <FileText size={15}/>
              Resume

            </a> */}

          </div>




          {/* Mobile Button */}

          <button
            onClick={()=>setIsOpen(!isOpen)}
            className="
              md:hidden
              btn
              btn-circle
              btn-sm
              bg-gray-100
              text-emerald-600
              border-none
            "
          >
            {
              isOpen
              ? <X size={20}/>
              : <Menu size={20}/>
            }
          </button>


        </div>




        {/* Mobile Menu */}

        <AnimatePresence>

          {
            isOpen && (

              <motion.div

                initial={{
                  opacity:0,
                  height:0
                }}

                animate={{
                  opacity:1,
                  height:'auto'
                }}

                exit={{
                  opacity:0,
                  height:0
                }}

                className="
                  md:hidden
                  border-t
                  border-gray-200
                  px-5
                  pb-5
                  overflow-hidden
                "
              >

                <div className="
                  pt-4
                  flex
                  flex-col
                  gap-2
                ">

                  {
                    links.map((link)=>(
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={()=>setIsOpen(false)}
                        className="
                          px-4
                          py-3
                          rounded-xl
                          text-gray-700
                          hover:bg-emerald-50
                          hover:text-emerald-600
                          transition
                        "
                      >
                        {link.label}
                      </a>
                    ))
                  }


                  {/* <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    download
                    className="
                      mt-2
                      text-center
                      rounded-xl
                      py-3
                      bg-emerald-500
                      text-white
                      font-semibold
                    "
                  >
                    Download Resume
                  </a> */}


                </div>


              </motion.div>

            )
          }

        </AnimatePresence>


      </div>

    </header>
  )
}

export default Navbar