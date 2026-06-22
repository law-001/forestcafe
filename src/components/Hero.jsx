import { useRef } from 'react'
import { gsap, useGSAP, reduced } from '../lib/gsap'

export default function Hero() {
  const root = useRef(null)
  const bg = useRef(null)

  useGSAP(
    () => {
      if (reduced()) return
      // entrance
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('[data-hero-line]', { yPercent: 120, opacity: 0, duration: 1.1, stagger: 0.12 }, 0.15)
        .from('[data-hero-sub]', { y: 24, opacity: 0, duration: 0.9 }, '-=0.6')
        .from('[data-hero-cta]', { opacity: 0, duration: 0.7, stagger: 0.1 }, '-=0.5')
        .from('[data-hero-cue]', { opacity: 0, duration: 0.8 }, '-=0.3')

      // background drift + fade as the hero leaves
      gsap.to(bg.current, {
        yPercent: 18,
        scale: 1.12,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      })
      gsap.to('[data-hero-content]', {
        opacity: 0,
        y: -60,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'center top', end: 'bottom top', scrub: true },
      })
    },
    { scope: root },
  )

  return (
    <header
      id="hero"
      ref={root}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink"
    >
      <div
        ref={bg}
        className="absolute inset-0 -top-[6%] scale-105 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: "url('/assets/interior-wide.jpg')",
          filter: 'saturate(0.92) contrast(1.05) brightness(0.62)',
        }}
      />
      <div className="absolute inset-0 bg-[rgba(34,36,34,0.6)]" />

      <div
        data-hero-content
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-24 pt-28 text-center"
      >
        <span className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-lime/20 bg-lime/[0.06] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.28em] text-lime backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-lime shadow-[0_0_10px_2px_rgba(244, 136, 43,0.7)]" />
          Bocaue, Bulacan
        </span>

        <h1 className="m-0 w-full font-display font-semibold leading-[0.96] tracking-[-0.03em] text-cream [font-size:clamp(2.6rem,6.4vw,5.4rem)]">
          <span className="block overflow-hidden pb-[0.14em]">
            <span data-hero-line className="inline-block">
              Coffee, grown
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.14em]">
            <span data-hero-line className="inline-block">
              under the <span className="text-canopy">canopy</span>.
            </span>
          </span>
        </h1>

        <p
          data-hero-sub
          className="mx-auto mt-7 max-w-xl text-[clamp(1rem,1.6vw,1.2rem)] leading-relaxed text-mist"
        >
          A real-feel rainforest beside the Philippine Arena — towering indoor trees, woven lantern
          glow, and slow, leafy mornings made for lingering.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5">
          <a
            data-hero-cta
            href="#reserve"
            className="inline-flex h-14 items-center justify-center rounded-full bg-lime px-8 font-display text-[16px] font-semibold tracking-tight text-ink shadow-[0_8px_28px_rgba(244,136,43,0.22)] transition-transform duration-200 hover:-translate-y-1"
          >
            Reserve a Table
          </a>
          <a
            data-hero-cta
            href="#menu"
            className="inline-flex h-14 items-center justify-center rounded-full border border-cream/25 bg-white/[0.04] px-8 font-display text-[16px] font-medium text-cream backdrop-blur-sm transition-colors duration-200 hover:border-cream/60 hover:bg-white/[0.1]"
          >
            View the Menu
          </a>
        </div>
      </div>

      <div
        data-hero-cue
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-mist"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-9 w-px bg-[linear-gradient(#f4882b,transparent)]" />
      </div>
    </header>
  )
}
