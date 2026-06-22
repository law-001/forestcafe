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
          className={`flex w-full max-w-5xl items-center justify-between gap-6 rounded-full border px-2.5 py-2 pl-4 transition-all duration-500 sm:px-3 sm:py-3 sm:pl-5 ${
            scrolled
              ? 'border-cream/10 bg-white/75 shadow-[0_14px_38px_rgba(20,48,28,0.10)] backdrop-blur-2xl'
              : 'border-cream/5 bg-white/40 backdrop-blur-lg'
          }`}
        >
          <a href="#hero" className="flex flex-none items-center gap-2.5" aria-label="Forest Cafe — home">
            <img
              src="/assets/logo-transparent.png"
              alt="Forest Cafe PH Arena"
              className="h-9 w-auto drop-shadow-[0_4px_10px_rgba(20,48,28,0.18)]"
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
                className="rounded-full px-4 py-2 font-body text-[14px] text-mist transition-colors duration-200 hover:bg-cream/5 hover:text-cream"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#reserve"
              className="hidden items-center justify-center rounded-full bg-lime px-5 py-2.5 font-display text-[14px] font-semibold tracking-tight text-white shadow-[0_10px_26px_rgba(234,93,42,0.28)] transition-transform duration-200 hover:-translate-y-0.5 md:inline-flex"
            >
              Reserve
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full bg-cream/5 md:hidden"
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
          className="fc-overlay-in fixed inset-0 z-[200] bg-pine/35 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        >
          <div
            className="fc-drawer-in absolute inset-y-0 right-0 flex w-[min(78vw,300px)] flex-col gap-0.5 border-l border-cream/10 bg-ink/95 px-6 py-6 shadow-[-20px_0_60px_rgba(20,48,28,0.18)] backdrop-blur-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between">
              <img src="/assets/logo-transparent.png" alt="Forest Cafe" className="h-12" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="cursor-pointer rounded-full bg-cream/5 px-3 font-display text-[28px] leading-none text-cream"
              >
                &times;
              </button>
            </div>
            {nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-cream/10 px-1 py-3.5 font-display text-[18px] text-cream transition-colors hover:text-lime"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#reserve"
              onClick={() => setOpen(false)}
              className="mt-5 rounded-full bg-lime px-4 py-3.5 text-center font-display text-[16px] font-semibold text-white"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      )}
    </>
  )
}
