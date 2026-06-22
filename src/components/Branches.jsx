import { branches } from '../data'
import { Reveal, Eyebrow, Icon } from './primitives'

export default function Branches() {
  return (
    <section id="branches" className="relative px-[clamp(20px,5vw,64px)] py-[clamp(90px,12vw,150px)]">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-[clamp(44px,6vw,72px)] flex flex-col items-start gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>Two locations</Eyebrow>
            <h2 className="m-0 font-display text-[clamp(2rem,4.6vw,3.5rem)] font-semibold leading-[1.03] tracking-[-0.025em] text-cream">
              Find the canopy nearest you.
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-mist">
            Two homes for the same slow, leafy mornings — tap a location for live directions.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {branches.map((b, i) => (
            <Reveal
              key={b.tag}
              as="a"
              delay={i * 120}
              href={b.directions}
              target="_blank"
              rel="noopener"
              className="group relative block aspect-[5/6] overflow-hidden rounded-3xl"
            >
              <img
                src={b.img}
                alt={b.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,48,28,0.1)_0%,rgba(20,48,28,0.05)_40%,rgba(20,48,28,0.9)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-[clamp(26px,3.4vw,42px)]">
                <div className="mb-3 flex items-center gap-2.5">
                  <span
                    className="rounded-full px-3 py-[5px] font-mono text-[11px] uppercase tracking-[0.16em] text-white"
                    style={{ background: b.tagBg }}
                  >
                    {b.tag}
                  </span>
                  {b.placeholder && (
                    <span className="rounded-md border border-dashed border-lime-bright/60 bg-lime/15 px-2 py-[3px] font-mono text-[11px] text-lime-bright">
                      placeholder — edit
                    </span>
                  )}
                </div>
                <h3 className="m-0 font-display text-[clamp(24px,3.1vw,36px)] font-semibold leading-[1.08] text-white">
                  {b.name}
                </h3>
                <p className="m-0 mt-2 text-[14.5px] leading-snug text-white/80">{b.area}</p>
                <span className="mt-5 inline-flex translate-x-[-8px] items-center gap-2 font-display text-[14.5px] font-medium text-lime-bright opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  Get directions
                  <Icon name="arrow" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
