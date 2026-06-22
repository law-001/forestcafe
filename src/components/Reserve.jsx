import { branches } from '../data'
import { Reveal, Icon } from './primitives'

export default function Reserve() {
  return (
    <section
      id="reserve"
      className="relative overflow-hidden px-[clamp(20px,5vw,64px)] py-[clamp(110px,16vw,200px)] text-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/night-lanterns.jpg')", filter: 'brightness(0.4) saturate(1.05)' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(65%_70%_at_50%_42%,rgba(242,198,121,0.22),rgba(6,13,9,0.92)_72%)]" />

      <Reveal className="relative z-10 mx-auto max-w-4xl">
        <p className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-lime/20 bg-lime/[0.06] px-4 py-1.5 font-mono text-[12px] uppercase tracking-[0.28em] text-lime backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-lime shadow-[0_0_12px_2px_rgba(244, 136, 43,0.7)]" />
          Reservations
        </p>
        <h2 className="m-0 font-display text-[clamp(2.4rem,7vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-cream">
          Reserve your table
          <br />
          under the <span className="text-canopy">canopy</span>.
        </h2>
        <p className="m-0 mx-auto mt-7 max-w-xl text-[clamp(1rem,1.8vw,1.25rem)] text-mist">
          Call or email us to book — no forms, no fuss. We will hold a spot among the trees for you.
        </p>

        <div className="mt-11 flex flex-wrap justify-center gap-4">
          <a
            href="tel:+639659470077"
            className="inline-flex items-center gap-3 rounded-full bg-lime px-9 py-5 font-display text-[clamp(1rem,2vw,1.2rem)] font-semibold text-ink shadow-[0_18px_44px_rgba(244, 136, 43,0.3)] transition-transform duration-200 hover:-translate-y-1"
          >
            <Icon name="phone" size={19} />
            +63 965 947 0077
          </a>
          <a
            href="mailto:forestcafepharena@gmail.com"
            className="inline-flex items-center gap-3 rounded-full border border-cream/25 bg-white/[0.04] px-9 py-5 font-display text-[clamp(0.95rem,2vw,1.1rem)] font-medium text-cream backdrop-blur-sm transition-colors duration-200 hover:border-cream/60 hover:bg-white/[0.1]"
          >
            <Icon name="mail" size={19} />
            forestcafepharena@gmail.com
          </a>
        </div>

        <div className="mt-9 flex flex-wrap justify-center gap-x-7 gap-y-2.5 text-[14px] text-mist">
          {branches.map((b) => (
            <span key={b.tag} className="inline-flex items-center gap-2">
              <span className="h-[7px] w-[7px] rounded-full" style={{ background: b.tagBg }} />
              <b className="font-display font-medium text-cream">{b.tag}:</b> {b.phone}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
