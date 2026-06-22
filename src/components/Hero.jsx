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

      // background drift + zoom as the hero leaves
      gsap.fromTo(
        bg.current,
        { scale: 1.05, yPercent: 0 },
        {
          scale: 1.45,
          yPercent: 28,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
        },
      )
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
          filter: 'saturate(1.05) contrast(1.04) brightness(0.7)',
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,48,28,0.4),rgba(20,48,28,0.55))]" />

      <div
        data-hero-content
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-24 pt-28 text-center"
      >
        <span className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-lime/35 bg-lime/12 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.28em] text-lime-bright backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-lime shadow-[0_0_10px_2px_rgba(234,93,42,0.7)]" />
          Bocaue, Bulacan
        </span>

        <h1 className="m-0 flex w-full justify-center">
          <span className="block overflow-hidden">
            <img
              data-hero-line
              src="/assets/logo2.png"
              alt="Forest Cafe"
              className="block w-[clamp(14rem,38vw,28rem)] drop-shadow-[0_18px_36px_rgba(0,0,0,0.45)]"
            />
          </span>
        </h1>

        <p
          data-hero-sub
          className="mx-auto mt-7 max-w-xl text-[clamp(1rem,1.6vw,1.2rem)] leading-relaxed text-white/80"
        >
          A real-feel rainforest beside the Philippine Arena — towering indoor trees, woven lantern
          glow, and slow, leafy mornings made for lingering.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5">
          <a
            data-hero-cta
            href="#reserve"
            className="inline-flex h-14 items-center justify-center rounded-full bg-lime px-8 font-display text-[16px] font-semibold tracking-tight text-white shadow-[0_8px_28px_rgba(234,93,42,0.28)] transition-transform duration-200 hover:-translate-y-1"
          >
            Reserve a Table
          </a>
          <a
            data-hero-cta
            href="#menu"
            className="inline-flex h-14 items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 font-display text-[16px] font-medium text-white backdrop-blur-sm transition-colors duration-200 hover:border-white/60 hover:bg-white/20"
          >
            View the Menu
          </a>
        </div>
      </div>

      <div
        data-hero-cue
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/70"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-9 w-px bg-[linear-gradient(#ea5d2a,transparent)]" />
      </div>
    </header>
  )
}
