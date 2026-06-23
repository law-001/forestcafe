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
        style={{ backgroundImage: "url('/assets/night-lanterns.jpg')", filter: 'brightness(0.5) saturate(1.1)' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(65%_70%_at_50%_42%,rgba(242,198,121,0.22),rgba(20,48,28,0.92)_72%)]" />

      <Reveal className="relative z-10 mx-auto max-w-4xl">
        <p className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-lime/35 bg-lime/12 px-4 py-1.5 font-mono text-[12px] uppercase tracking-[0.28em] text-lime-bright backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-lime shadow-[0_0_12px_2px_rgba(234,93,42,0.65)]" />
          Reservations
        </p>
        <h2 className="m-0 font-display text-[clamp(2.4rem,7vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-white">
          Reserve your table
          <br />
          under the <span className="text-canopy">canopy</span>.
        </h2>
        <p className="m-0 mx-auto mt-7 max-w-xl text-[clamp(1rem,1.8vw,1.25rem)] text-white/80">
          Call or email us to book — no forms, no fuss. We will hold a spot among the trees for you.
        </p>

        <div className="mt-11 flex flex-wrap justify-center gap-4">
          <a
            href="tel:+639659470077"
            className="inline-flex items-center gap-2.5 rounded-full bg-lime px-6 py-3.5 font-display text-[14px] font-semibold text-white shadow-[0_18px_44px_rgba(234,93,42,0.32)] transition-transform duration-200 hover:-translate-y-1 sm:gap-3 sm:px-9 sm:py-5 sm:text-[clamp(1rem,2vw,1.2rem)]"
          >
            <Icon name="phone" size={16} />
            +63 965 947 0077
          </a>
          <a
            href="mailto:forestcafepharena@gmail.com"
            className="inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 font-display text-[13px] font-medium text-white backdrop-blur-sm transition-colors duration-200 hover:border-white/60 hover:bg-white/20 sm:gap-3 sm:px-9 sm:py-5 sm:text-[clamp(0.95rem,2vw,1.1rem)]"
          >
            <Icon name="mail" size={16} />
            forestcafepharena@gmail.com
          </a>
        </div>

        <div className="mt-9 flex flex-wrap justify-center gap-x-7 gap-y-2.5 text-[14px] text-white/75">
          {branches.map((b) => (
            <span key={b.tag} className="inline-flex items-center gap-2">
              <span className="h-[7px] w-[7px] rounded-full" style={{ background: b.tagBg }} />
              <b className="font-display font-medium text-white">{b.tag}:</b> {b.phone}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
