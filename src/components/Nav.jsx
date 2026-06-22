import { useEffect, useState } from 'react'
import { nav } from '../data'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY || 0) > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[150] flex justify-center px-4 pt-[clamp(14px,2.4vw,26px)]">
        <nav
          className={`flex w-full max-w-5xl items-center justify-between gap-6 rounded-full border px-3 py-3 pl-5 transition-all duration-500 ${
            scrolled
              ? 'border-white/10 bg-ink/35 shadow-[0_18px_50px_rgba(0,0,0,0.45)] backdrop-blur-2xl'
              : 'border-white/5 bg-white/[0.015] backdrop-blur-lg'
          }`}
        >
          <a href="#hero" className="flex flex-none items-center gap-2.5" aria-label="Forest Cafe — home">
            <img
              src="/assets/logo-transparent.png"
              alt="Forest Cafe PH Arena"
              className="h-9 w-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)]"
            />
            <span className="hidden font-display text-[15px] font-semibold tracking-tight text-cream sm:block">
              Forest Cafe
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 font-body text-[14px] text-mist transition-colors duration-200 hover:bg-white/5 hover:text-cream"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#reserve"
              className="hidden items-center justify-center rounded-full bg-lime px-5 py-2.5 font-display text-[14px] font-semibold tracking-tight text-ink shadow-[0_10px_26px_rgba(244, 136, 43,0.28)] transition-transform duration-200 hover:-translate-y-0.5 md:inline-flex"
            >
              Reserve
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full bg-white/5 md:hidden"
            >
              {[0, 1, 2].map((i) => (
                <span key={i} className="block h-0.5 w-5 rounded-sm bg-cream" />
              ))}
            </button>
          </div>
        </nav>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[200] bg-ink/80 backdrop-blur-md md:hidden"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute inset-y-0 right-0 flex w-[min(86vw,360px)] flex-col gap-1.5 border-l border-lime/10 bg-surface px-7 py-7 shadow-[-20px_0_60px_rgba(0,0,0,0.5)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-center justify-between">
              <img src="/assets/logo-transparent.png" alt="Forest Cafe" className="h-12" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="cursor-pointer rounded-full bg-white/5 px-3 font-display text-[28px] leading-none text-cream"
              >
                &times;
              </button>
            </div>
            {nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 px-1 py-4 font-display text-[22px] text-cream transition-colors hover:text-lime"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#reserve"
              onClick={() => setOpen(false)}
              className="mt-6 rounded-full bg-lime px-4 py-4 text-center font-display text-[17px] font-semibold text-ink"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      )}
    </>
  )
}
