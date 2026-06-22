import { useRef } from 'react'
import { gsap, useGSAP, reduced } from '../lib/gsap'

/**
 * GSAP fade + slide-up reveal on scroll. `delay` (ms) staggers grouped items.
 * Returns a ref to attach to the element you want to animate in.
 */
export function useReveal(delay = 0) {
  const ref = useRef(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return
      if (reduced()) {
        gsap.set(el, { opacity: 1, y: 0 })
        return
      }
      gsap.from(el, {
        opacity: 0,
        y: 36,
        duration: 0.95,
        ease: 'power3.out',
        delay: delay / 1000,
        scrollTrigger: { trigger: el, start: 'top 86%' },
      })
    },
    { scope: ref },
  )

  return ref
}
