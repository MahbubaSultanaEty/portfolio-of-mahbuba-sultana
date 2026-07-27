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
    <div className="min-h-screen bg-[#0D0B14] text-white font-sans selection:bg-accent selection:text-white">
      {/* Page-level scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-accent to-emerald-400 z-50 origin-left shadow-[0_0_12px_rgba(147,51,234,0.6)]"
        style={{ scaleX }}
      />

      <Navbar />

      <main className="pt-16 overflow-hidden">
        {/* HERO SECTION */}
        <div className="relative bg-[#FAFAFA] text-ink">
          <HeroSection />
        </div>

        {/* FEATURED SECTIONS WITH DARK FUTURISTIC SHIULI AMBIENCE */}
        <div className="relative bg-[#0D0B14] space-y-12 py-12">
          {/* Story Section */}
          <div className="relative z-10">
            <StorySection />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          </div>

          {/* About Section */}
          <div className="relative z-10">
            <AboutSection />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          </div>

          {/* Skills Section */}
          <div className="relative z-10">
            <SkillsSection />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          </div>

          {/* Education Section */}
          <div className="relative z-10">
            <EducationSection />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          </div>

          {/* Projects Section */}
          <div className="relative z-10">
            <ProjectsSection />
          </div>
        </div>

        {/* CONTACT SECTION */}
        <div className="relative z-10 bg-[#FAFAFA] text-ink">
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default HomePage