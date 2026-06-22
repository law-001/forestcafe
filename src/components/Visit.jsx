import { useState } from 'react'
import { branches } from '../data'
import { Reveal, Eyebrow, Icon } from './primitives'

export default function Visit() {
  const [active, setActive] = useState(0)
  const branch = branches[active] || branches[0]

  const Row = ({ icon, title, sub, href }) => (
    <div className="flex items-start gap-4">
      <span className="hairline inline-flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-cream/5 text-lime">
        <Icon name={icon} size={20} />
      </span>
      <div>
        {href ? (
          <a href={href} className="font-display text-[18px] text-cream transition-colors hover:text-lime">
            {title}
          </a>
        ) : (
          <p className="m-0 mb-[3px] font-display text-[18px] text-cream">{title}</p>
        )}
        {sub && <p className="m-0 text-[15px] text-mist">{sub}</p>}
      </div>
    </div>
  )

  return (
    <section id="visit" className="relative px-[clamp(20px,5vw,64px)] py-[clamp(90px,12vw,150px)]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-[clamp(36px,5vw,64px)] md:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <Eyebrow>Hours and location</Eyebrow>
          <h2 className="m-0 mb-7 font-display text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.04] tracking-[-0.025em] text-cream">
            Find us under the trees.
          </h2>

          <div className="hairline mb-8 inline-flex gap-1 rounded-full bg-cream/5 p-1.5">
            {branches.map((b, idx) => (
              <button
                key={b.tag}
                type="button"
                onClick={() => setActive(idx)}
                className="cursor-pointer rounded-full border-0 px-5 py-2.5 font-display text-[14px] font-medium transition-colors duration-200"
                style={{
                  color: idx === active ? '#ffffff' : '#4a6149',
                  background: idx === active ? '#ea5d2a' : 'transparent',
                }}
              >
                {b.tag}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <Row icon="clock" title={branch.name} sub={branch.hours} />
            <Row icon="pin" title={branch.address} sub={branch.area} />
            <Row icon="phone" title={branch.phone} href={branch.phoneHref} />
          </div>
        </Reveal>

        <Reveal delay={120} className="hairline overflow-hidden rounded-3xl shadow-[0_18px_44px_rgba(20,48,28,0.12)]">
          <iframe
            title={`Map — ${branch.name}`}
            src={branch.map}
            className="block h-[clamp(300px,38vw,440px)] w-full border-0"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  )
}
