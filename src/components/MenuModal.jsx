import { useEffect, useRef } from 'react'
import { menuCategories } from '../data'

export default function MenuModal({ onClose }) {
  const cardRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    const prevFocus = document.activeElement
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      const card = cardRef.current
      if (!card) return
      const f = card.querySelectorAll(
        'button, a[href], iframe, [tabindex]:not([tabindex="-1"])',
      )
      if (!f.length) return
      const first = f[0]
      const last = f[f.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      if (prevFocus && prevFocus.focus) {
        try {
          prevFocus.focus()
        } catch {
          /* ignore */
        }
      }
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Forest Cafe full menu"
      className="fixed inset-0 z-[300] flex items-start justify-center overflow-y-auto bg-ink/80 p-[clamp(14px,4vw,52px)] backdrop-blur-md"
      onClick={onClose}
    >
      <div
        ref={cardRef}
        onClick={(e) => e.stopPropagation()}
        className="hairline relative w-full max-w-[1040px] overflow-hidden rounded-[26px] bg-surface shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
      >
        <div className="sticky top-0 z-[5] flex items-center justify-between gap-4 border-b border-lime/10 bg-ink-2/95 px-[clamp(22px,3.5vw,40px)] py-[22px] text-cream backdrop-blur-md">
          <div className="flex items-center gap-3.5">
            <img src="/assets/logo-transparent.png" alt="" className="h-11" />
            <div>
              <p className="m-0 font-display text-[clamp(19px,2.4vw,24px)] font-semibold text-lime">
                Full Menu
              </p>
              <p className="m-0 mt-0.5 text-[12.5px] text-mist">
                Sample items &amp; prices — placeholders to edit
              </p>
            </div>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="h-11 w-11 flex-none cursor-pointer rounded-full border-0 bg-white/10 font-display text-[26px] leading-none text-cream transition-colors hover:bg-white/20"
          >
            &times;
          </button>
        </div>

        <div className="max-h-[calc(92vh-90px)] px-[clamp(20px,3.5vw,44px)] pb-[clamp(30px,4vw,52px)] pt-[clamp(24px,4vw,46px)]">
          {menuCategories.map((cat) => {
            const featured = cat.items[0]
            const rest = cat.items.slice(1)
            return (
              <div key={cat.name} className="mb-[clamp(34px,4vw,52px)]">
                <div className="mb-5 flex items-baseline gap-3.5 border-b border-lime/12 pb-3">
                  <h3 className="m-0 font-display text-[clamp(22px,2.8vw,30px)] font-semibold text-cream">
                    {cat.name}
                  </h3>
                  {cat.note && (
                    <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-lime">
                      {cat.note}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 items-start gap-[clamp(20px,3vw,38px)] sm:grid-cols-[0.8fr_1.2fr]">
                  <div className="hairline rounded-[18px] bg-surface-2 p-3.5">
                    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[12px] border border-dashed border-lime/20 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.02)_0_11px,rgba(255,255,255,0.05)_11px_22px)]">
                      <span className="px-2.5 text-center font-mono text-[12px] tracking-[0.03em] text-mist-dim">
                        Dish photo
                        <br />— replace —
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between gap-2.5 px-1.5 pb-1.5 pt-3.5">
                      <div>
                        <p className="m-0 font-display text-[16px] font-semibold text-cream">
                          {featured.name}
                        </p>
                        <p className="m-0 mt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-ember">
                          House Favourite
                        </p>
                      </div>
                      <span className="whitespace-nowrap font-body text-[16px] font-bold text-lime">
                        {featured.price}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3.5">
                    {rest.map((item) => (
                      <div key={item.name} className="flex items-baseline gap-2.5">
                        <span className="whitespace-nowrap font-body text-[15.5px] font-medium text-cream">
                          {item.name}
                        </span>
                        <span className="-translate-y-1 flex-1 border-b border-dotted border-cream/15" />
                        <span className="whitespace-nowrap font-body text-[15.5px] font-bold text-lime">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
          <p className="m-0 mt-2 text-center text-[13px] tracking-[0.04em] text-mist-dim">
            Dish photos and final prices are placeholders for the owner to drop in.
          </p>
        </div>
      </div>
    </div>
  )
}
