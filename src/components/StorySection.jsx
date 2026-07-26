import VersionTag from './VersionTag'

const paragraphs = [
  `I didn't come into programming through a computer science path. A relative first pointed me toward it, and I did the usual thing — a few free HTML/CSS videos on YouTube. Honestly, none of it clicked. I couldn't connect the syntax to anything real, and I quietly decided coding "wasn't my thing."`,
  `That changed by accident, in September 2025. I'd taken a photo I liked and wanted to edit it — swap the middle "o" in the word "October" for a small flower. I asked ChatGPT how to do it, and it couldn't quite get what I meant. When I asked how I could do it myself, it pointed me toward image editing tools, or code. That's the part that stuck with me. I asked it a pretty basic question: could someone with zero technical background actually learn to code, starting from a phone? It said yes — and pointed me toward a few beginner-friendly platforms. I picked freeCodeCamp, since it was free and structured enough for someone starting from nothing.`,
  `By January 2026, I moved into a more structured, deadline-based course — real modules, real assignments, real projects instead of just watching videos. That's where things actually started making sense: building, breaking, fixing.`,
  `That course leans heavily on libraries and frameworks like React and Next.js — and rightly so, since that's what this era of development actually runs on. But I still go back to freeCodeCamp on the side to practice vanilla JavaScript. Frameworks move fast and change often; I want the core language itself to be something I actually understand, not just something I'm abstracted away from.`,
]

function StorySection() {
  return (
    <section id="story" className="max-w-3xl mx-auto px-6 py-16">
      <VersionTag version="v0.1 → v0.2" label="the turning point" />

      <div className="mt-6 space-y-6">
        {paragraphs.map((text, index) => (
          <p
            key={index}
            className={
              index === 0
                ? 'text-2xl leading-relaxed text-ink font-medium'
                : 'text-lg leading-relaxed text-gray-700'
            }
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  )
}

export default StorySection