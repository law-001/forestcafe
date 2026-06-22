import { useRef } from 'react'
import { gallery } from '../data'
import { gsap, useGSAP, reduced } from '../lib/gsap'
import { Eyebrow, Icon } from './primitives'

export default function Gallery() {
  const root = useRef(null)
  const track = useRef(null)

  useGSAP(
    () => {
      if (reduced()) return
      const el = track.current
      const getScroll = () => el.scrollWidth - window.innerWidth
      const horizontal = gsap.to(el, {
        x: () => -getScroll(),
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: () => '+=' + getScroll(),
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      // each panel breathes in from a slightly smaller, dimmer state
      gsap.utils.toArray('[data-panel]').forEach((panel) => {
        gsap.from(panel, {
          scale: 0.86,
          opacity: 0.35,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: panel,
            containerAnimation: horizontal,
            start: 'left 92%',
            end: 'left 55%',
            scrub: true,
          },
        })
      })
    },
    { scope: root },
  )

  return (
    <section id="gallery" ref={root} className="relative overflow-hidden bg-ink-2 py-0">
      <div
        ref={track}
        className="flex h-[100svh] w-max items-center gap-5 px-[clamp(20px,5vw,64px)] will-change-transform"
      >
        {/* intro panel */}
        <div className="flex h-[clamp(20rem,62vh,34rem)] w-[clamp(20rem,80vw,30rem)] flex-none flex-col justify-center pr-6">
          <Eyebrow>A look around</Eyebrow>
          <h2 className="m-0 font-display text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.02] tracking-[-0.025em] text-cream">
            Step inside the canopy.
          </h2>
          <p className="m-0 mt-5 max-w-sm text-[16px] leading-relaxed text-mist">
            Seven frames from inside the room — drag your way through the trees, the glow, and the
            quiet corners.
          </p>
          <span className="mt-7 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.2em] text-lime">
            Scroll to pan <Icon name="arrow" />
          </span>
        </div>

        {gallery.map((g, i) => (
          <figure
            key={g.src}
            data-panel
            className="group relative m-0 h-[clamp(20rem,62vh,34rem)] w-[clamp(17rem,46vw,28rem)] flex-none overflow-hidden rounded-3xl"
          >
            <img
              src={g.src}
              alt={g.alt}
              className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(6,13,9,0.8))]" />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-6">
              <span className="max-w-[14rem] font-body text-[14px] leading-snug text-cream/90">
                {g.alt}
              </span>
              <span className="font-mono text-[12px] text-lime">
                {String(i + 1).padStart(2, '0')} / {String(gallery.length).padStart(2, '0')}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
