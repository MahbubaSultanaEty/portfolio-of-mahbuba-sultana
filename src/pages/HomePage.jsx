import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import StorySection from '../components/StorySection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import EducationSection from '../components/EducationSection'
import ProjectsSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

function HomePage() {
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div className="
      min-h-screen
      bg-background
      text-foreground
      font-sans
      selection:bg-primary/40
      overflow-hidden
    ">

      {/* Scroll progress */}
      <motion.div
        className="
          fixed top-0 left-0 right-0
          h-1
          bg-gradient-to-r
          from-primary
          via-highlight
          to-secondary
          z-50
          origin-left
        "
        style={{ scaleX }}
      />


      <Navbar />


      <main className="pt-16">


        {/* Hero */}
        <section className="
          relative
          bg-mesh-pattern
          overflow-hidden
        ">
          <HeroSection />
        </section>



        {/* Main Content */}
        <section className="
          relative
          bg-background
          space-y-20
          py-20
        ">


          <StorySection />


          <div className="
            mx-auto max-w-6xl px-6
          ">
            <div className="
              h-px
              bg-gradient-to-r
              from-transparent
              via-white/10
              to-transparent
            "/>
          </div>

          <ProjectsSection />


          <SkillsSection />


          <div className="mx-auto max-w-6xl px-6">
            <div className="
              h-px
              bg-gradient-to-r
              from-transparent
              via-white/10
              to-transparent
            "/>
          </div>


          <AboutSection />


          <div className="mx-auto max-w-6xl px-6">
            <div className="
              h-px
              bg-gradient-to-r
              from-transparent
              via-white/10
              to-transparent
            "/>
          </div>


          


          <EducationSection />


        </section>



        {/* Contact */}
        <section className="
          bg-background
          relative
        ">
          <ContactSection />
        </section>


      </main>


      <Footer />


    </div>
  )
}

export default HomePage
