import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function initSkillsScroll() {
  const cards = gsap.utils.toArray(".skills-scroll-wrapper .content")
  const triggers = []

  cards.forEach((card, index) => {
    const inner = card.querySelector(".content__inner")
    if (!inner) return

    const isLast = index === cards.length - 1

    card.style.zIndex = index + 1

    if (!isLast) {
      // ১. Pinning Trigger: কার্ডের সম্পূর্ণ কন্টেন্ট শেষ হওয়ার পর পিন স্টার্ট হবে
      const pin = ScrollTrigger.create({
        trigger: card,
        // কন্টেন্ট বড় হলে 'bottom bottom' ব্যবহার করা হয় যাতে ইউজার শেষ পর্যন্ত স্ক্রল করতে পারে
        start: "bottom bottom", 
        endTrigger: ".skills-scroll-wrapper",
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
      })
      triggers.push(pin)

      // ২. Fade Effect: পরবর্তী কার্ড আসার সময় স্কেলিং
      const fade = gsap.to(inner, {
        scale: 0.9,
        opacity: 0.2,
        filter: "blur(4px)",
        ease: "none",
        scrollTrigger: {
          trigger: cards[index + 1],
          start: "top bottom", // পরের কার্ড নিচে দেখা যাওয়া মাত্রই
          end: "top top",      // পরের কার্ড পুরোপুরি ঢেকে ফেললে
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