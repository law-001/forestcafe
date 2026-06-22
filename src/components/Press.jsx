import { useState } from 'react'
import { press } from '../data'
import { Reveal, Eyebrow, Icon } from './primitives'

const N = press.length
const avatarBg = (i) =>
  ['linear-gradient(135deg,#f4882b,#4d7c3a)', 'linear-gradient(135deg,#f2c679,#f4882b)', 'linear-gradient(135deg,#4d7c3a,#1f3d2b)'][
    i % 3
  ]

export default function Press() {
  const [i, setI] = useState(0)
  const go = (n) => setI(((n % N) + N) % N)
  const p = press[i]

  return (
    <section className="relative px-[clamp(20px,5vw,64px)] py-[clamp(90px,12vw,150px)]">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-[clamp(40px,6vw,64px)]">
          <Eyebrow>Visited and loved</Eyebrow>
          <h2 className="m-0 font-display text-[clamp(2rem,4.6vw,3.5rem)] font-semibold leading-[1.03] tracking-[-0.025em] text-cream">
            What guests keep saying.
          </h2>
        </Reveal>

        <Reveal className="hairline relative overflow-hidden rounded-[28px] bg-surface p-[clamp(28px,5vw,64px)]">
          <span className="pointer-events-none absolute -left-2 -top-10 select-none font-display text-[clamp(8rem,16vw,14rem)] leading-none text-lime/10">
            &ldquo;
          </span>

          <span className="relative inline-flex items-center gap-1 text-ember" aria-label={`${p.stars} out of 5 stars`}>
            {Array.from({ length: p.stars }).map((_, s) => (
              <Icon key={s} name="star" size={18} />
            ))}
          </span>

          <p
            key={i}
            className="relative m-0 mt-6 font-display text-[clamp(1.4rem,3.2vw,2.5rem)] font-medium leading-[1.2] tracking-[-0.015em] text-cream"
          >
            {p.quote}
          </p>

          <div className="relative mt-9 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <span
                className="inline-flex h-12 w-12 items-center justify-center rounded-full font-display text-[18px] font-semibold text-ink"
                style={{ background: avatarBg(i) }}
              >
                {p.initial}
              </span>
              <div>
                <p className="m-0 font-display font-medium text-cream">{p.name}</p>
                <p className="m-0 font-mono text-[12px] text-mist-dim">Guest review</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => go(i - 1)}
                aria-label="Previous review"
                className="hairline flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/[0.03] text-cream transition-colors hover:bg-white/10"
              >
                <Icon name="chevLeft" />
              </button>
              <button
                type="button"
                onClick={() => go(i + 1)}
                aria-label="Next review"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-lime text-ink transition-transform hover:scale-105"
              >
                <Icon name="chevRight" />
              </button>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 flex items-center gap-2.5">
          {press.map((_, n) => (
            <button
              key={n}
              type="button"
              onClick={() => go(n)}
              aria-label={`Go to review ${n + 1}`}
              className="h-2.5 cursor-pointer rounded-full border-0 p-0 transition-all duration-300"
              style={{ width: n === i ? 30 : 10, background: n === i ? '#f4882b' : 'rgba(238,242,236,0.2)' }}
            />
          ))}
          <span className="ml-3 font-mono text-[12px] text-mist-dim">Placeholder reviews — replace with real quotes.</span>
        </div>
      </div>
    </section>
  )
}
