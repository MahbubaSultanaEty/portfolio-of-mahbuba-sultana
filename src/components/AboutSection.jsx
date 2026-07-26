import VersionTag from './VersionTag'

function AboutSection() {
  return (
    <section id="about" className="max-w-2xl mx-auto px-6 py-24">
      <VersionTag version="v0.3" label="finding my footing" />

      <div className="mt-6 space-y-6 text-lg leading-relaxed text-gray-700">
        <p>
          What I enjoy building most is polished, detail-heavy interfaces — the kind of UI
          work where spacing, motion, and small interactions are as deliberate as the logic
          underneath. But I care just as much about the full picture: taking something from
          an idea to a real, working, end-to-end product, not just the screens on top.
        </p>
        <p>
          Outside of code, I'm drawn to photography — not as a professional pursuit, just a
          habit of noticing. I like capturing quiet moments and nature, the kind of thing
          that's easy to walk past. It's part of a bigger pattern with me: I tend to observe
          before I interact. I get closer to something by looking at it carefully first —
          which, thinking about it, is probably true of how I approach code too.
        </p>
      </div>
    </section>
  )
}

export default AboutSection