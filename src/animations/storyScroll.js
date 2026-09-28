import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function initStoryScroll() {
  const cards = gsap.utils.toArray(".story-scroll-wrapper .story-card")
  const triggers = []

  cards.forEach((card, index) => {
    const inner = card.querySelector(".story-card__inner")
    const icon = card.querySelector(".story-card__icon")
    if (!inner) return

    const isLast = index === cards.length - 1
    card.style.zIndex = index + 1

    // 🌟 Icon float & rotate effect (ScrollTrigger scrub)
    if (icon) {
      const floatAndRotate = gsap.fromTo(
        icon,
        {
          rotate: -60,
          y: 60,
        },
        {
          rotate: 60,
          y: -60,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      )
      triggers.push(floatAndRotate.scrollTrigger)
    }

    // Pinning Logic — last card পিন হবে না
    if (!isLast) {
      const pin = ScrollTrigger.create({
        trigger: card,
        start: "bottom bottom",
        endTrigger: ".story-scroll-wrapper",
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
      })
      triggers.push(pin)

      // পরের card আসার সময় বর্তমান card fade+scale হয়ে পিছিয়ে যাবে
      const fade = gsap.to(inner, {
        scale: 0.9,
        opacity: 0.2,
        filter: "blur(4px)",
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

  return () => {
    triggers.forEach((t) => t && t.kill())
  }
}
