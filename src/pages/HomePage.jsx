import { changelog } from '../data/changelog'
import { profile } from '../data/profile'
import VersionTag from '../components/VersionTag'
import HeroSection from '../components/HeroSection'

function HomePage() {
  return (
    <div>
      <HeroSection />

      {changelog.map((entry) => (
        <section key={entry.section} style={{ padding: '40px 0', borderBottom: '1px solid #ccc' }}>
          <VersionTag version={entry.version} label={entry.label} />
          <h2>{entry.section} section goes here</h2>
        </section>
      ))}
    </div>
  )
}

export default HomePage