import { menuCategories } from '../data'
import { Reveal, Eyebrow, Icon } from './primitives'

export default function Menu() {
  return (
    <section id="menu" className="relative overflow-hidden px-[clamp(20px,5vw,64px)] py-[clamp(90px,12vw,150px)]">
      {/* Full-bleed interior photo with warm forest-green gradient overlay */}
      <img
        src="/assets/interior-trees.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(20,48,28,0.7),rgba(14,36,20,0.82)_55%,rgba(20,48,28,0.78))]"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-[clamp(40px,5vw,80px)] lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left — intro */}
        <Reveal>
          <Eyebrow>The Menu</Eyebrow>
          <h2 className="m-0 font-display text-[clamp(2rem,4.6vw,3.5rem)] font-semibold leading-[1.03] tracking-[-0.025em] text-white">
            Comfort food,
            <br />
            brewed <span className="text-canopy">slow</span>.
          </h2>
          <p className="m-0 mt-6 max-w-md text-[clamp(1rem,1.6vw,1.15rem)] leading-relaxed text-white/80">
            All-day breakfast, hearty rice meals, fresh pasta and a coffee bar built for lingering.
            Six categories, served open to close.
          </p>

          <a
            href="#menu-all"
            className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-lime px-7 py-4 font-display text-[16px] font-semibold tracking-tight text-white shadow-[0_14px_36px_rgba(234,93,42,0.32)] transition-transform duration-200 hover:-translate-y-1"
          >
            See the full menu
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              <Icon name="arrow" />
            </span>
          </a>
        </Reveal>

        {/* Right — numbered category list */}
        <Reveal delay={120} className="border-t border-white/15">
          {menuCategories.map((cat, i) => {
            const num = String(i + 1).padStart(2, '0')
            const subtitle = cat.note || `e.g. ${cat.items[0].name}`
            const fromPrice = cat.items[0].price
            return (
              <a
                key={cat.name}
                href="#menu-all"
                className="group flex w-full items-center gap-[clamp(16px,3vw,40px)] border-b border-white/15 py-[clamp(18px,2.4vw,26px)] text-left transition-colors duration-200 hover:bg-white/5"
              >
                <span className="w-7 flex-none font-mono text-[13px] font-medium text-lime-bright">
                  {num}
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block font-display text-[clamp(1.35rem,2.6vw,1.9rem)] font-semibold leading-tight tracking-[-0.015em] text-white transition-colors duration-200 group-hover:text-lime-bright">
                    {cat.name}
                  </span>
                  <span className="mt-1 block truncate text-[14px] text-white/60">
                    {subtitle}
                  </span>
                </span>

                <span className="hidden whitespace-nowrap font-mono text-[13px] tracking-[0.04em] text-white/75 sm:block">
                  from {fromPrice}
                </span>

                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-white/40 text-white transition-all duration-200 group-hover:border-lime group-hover:bg-lime group-hover:text-white">
                  <Icon name="arrow" size={18} />
                </span>
              </a>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
