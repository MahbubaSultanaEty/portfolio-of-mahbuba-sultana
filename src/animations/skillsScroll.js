import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function initSkillsScroll() {
  const cards = gsap.utils.toArray(".skills-scroll-wrapper .content")

  const triggers = []

  cards.forEach((card, index) => {
    const inner = card.querySelector(".content__inner")
    if (!inner) return

    // Pin each card while it's "current"
    const pin = ScrollTrigger.create({
      trigger: card,
      start: "top top",
      end: () => (index < cards.length - 1 ? "bottom top" : "+=1"),
      pin: ".content--sticky",
      pinSpacing: false,
    })
    triggers.push(pin)

    // As the NEXT card scrolls over this one, fade/scale this one down
    if (index < cards.length - 1) {
      const fade = gsap.to(inner, {
        scale: 0.92,
        opacity: 0.35,
        filter: "blur(2px)",
        ease: "none",
        scrollTrigger: {
          trigger: cards[index + 1],
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      })
      triggers.push(fade.scrollTrigger)
    }
  })

  ScrollTrigger.refresh()

  // cleanup function — call this on unmount to avoid duplicate triggers
  return () => {
    triggers.forEach((t) => t && t.kill())
  }
}