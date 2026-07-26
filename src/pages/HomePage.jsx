import { changelog } from '../data/changelog'
import { profile } from '../data/profile'
import VersionTag from '../components/VersionTag'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import StorySection from '../components/StorySection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import EducationSection from '../components/EducationSection'
import ProjectsSection from '../components/ProjectSection'

function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <StorySection/>
      <AboutSection/>
      <SkillsSection/>
      <EducationSection/>
      <ProjectsSection/>
      {changelog.map((entry) => (
        <section key={entry.section} style={{ padding: '40px 0', borderBottom: '1px solid #ccc' }}>
          <VersionTag version={entry.version} label={entry.label} />
          <h2>{entry.section} section goes here</h2>
        </section>
      ))}

      <Footer />
    </div>
  )
}

export default HomePage