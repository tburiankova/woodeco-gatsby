import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

export const fadeIntoView = ([node, trigger = node]) => {
  gsap.from(node, 0.8, {
    y: 100,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: trigger,
      start: "top 80%",
    },
  })
}

// page transitions
export const onEnter = (entry, node) => {
  // console.log(node)
  gsap.from(node.children, 0.8, {
    y: 30,
    delay: 0.3,
    opacity: 0,
    ease: "power3.out",
    stagger: {
      amount: 0.2,
    },
  })
}
export const onExit = (exit, node) => {
  gsap.to(node.children, 0.8, {
    y: -30,
    opacity: 0,
    delay: 0.3,
    ease: "power3.out",
    stagger: {
      amount: 0.2,
    },
  })
}
