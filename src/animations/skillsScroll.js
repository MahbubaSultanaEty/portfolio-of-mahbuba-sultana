import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function initSkillsScroll() {
  const cards = gsap.utils.toArray(".skills-scroll-wrapper .content")
  const triggers = []

  cards.forEach((card, index) => {
    const inner = card.querySelector(".content__inner")
    const img = card.querySelector("img") // অথবা আপনার কাস্টম ক্লাস যেমন: ".skill-card-icon"
    if (!inner) return

    const isLast = index === cards.length - 1
    card.style.zIndex = index + 1

    // 🌟 SYNCED ROTATION & FLOATING EFFECT
    if (img) {
      const floatAndRotate = gsap.fromTo(
        img,
        {
          rotate: -60,    // শুরুর দিকে ৯০ ডিগ্রি বামে থাকবে
          y: 60,         // নিচে স্ক্রল করার আগে কিছুটা নিচে ঝুলে থাকবে
        },
        {
          rotate: 60,     // স্ক্রল করে উপরে উঠলে ৯০ ডিগ্রি ডানে ঘুরবে
          y: -60,        // স্ক্রল করার সময় ভাসতে ভাসতে ৬০px উপরে উঠে যাবে
          ease: "none",  // স্ক্রলের সাথে রিয়েল-টাইম সিঙ্ক রাখার জন্য 'none' জরুরি
          scrollTrigger: {
            trigger: card,
            start: "top bottom", // কার্ড নিচে দেখা যাওয়া মাত্রই শুরু হবে
            end: "bottom top",   // কার্ড স্ক্রিন ছেড়ে চলে যাওয়া পর্যন্ত চলবে
            scrub: true,         // মাউস/টাচ স্ক্রলের গতির সাথে ১০০% সিঙ্ক করবে
          },
        }
      )
      triggers.push(floatAndRotate.scrollTrigger)
    }

    // Pinning Logic
    if (!isLast) {
      const pin = ScrollTrigger.create({
        trigger: card,
        start: "bottom bottom",
        endTrigger: ".skills-scroll-wrapper",
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
      })
      triggers.push(pin)

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