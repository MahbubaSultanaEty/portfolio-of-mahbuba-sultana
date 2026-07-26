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
    <div className="min-h-screen bg-[#FAFAFA] text-ink font-sans selection:bg-accent selection:text-white bg-mesh-pattern">
      {/* Scroll Storytelling Top Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent to-secondary z-50 origin-left shadow-[0_0_12px_#4B3F72]"
        style={{ scaleX }}
      />

      <Navbar />

      <main className="pt-16">
        <HeroSection />
        
        <div className="bg-surface/80 border-y border-gray-200/80 backdrop-blur-sm">
          <StorySection />
        </div>

        <div>
          <AboutSection />
        </div>

        <div className="bg-surface/80 border-y border-gray-200/80 backdrop-blur-sm">
          <SkillsSection />
        </div>

        <div>
          <EducationSection />
        </div>

        <div className="bg-surface/80 border-y border-gray-200/80 backdrop-blur-sm">
          <ProjectsSection />
        </div>

        <div>
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default HomePage
