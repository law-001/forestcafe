import { useEffect } from 'react'
import { menuCategories } from '../data'
import { Icon } from './primitives'

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-')

export default function MenuPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="relative w-full max-w-full overflow-x-hidden">
      {/* Slim top bar */}
      <div className="fixed inset-x-0 top-0 z-[150] flex justify-center px-4 pt-[clamp(14px,2.4vw,26px)]">
        <nav className="flex w-full max-w-5xl items-center justify-between gap-6 rounded-full border border-cream/10 bg-white/75 px-2.5 py-2 pl-4 shadow-[0_14px_38px_rgba(20,48,28,0.10)] backdrop-blur-2xl sm:px-3 sm:py-3 sm:pl-5">
          <a
            href="#menu"
            className="flex flex-none items-center gap-2 rounded-full px-3 py-1.5 font-body text-[14px] text-mist transition-colors hover:text-cream"
          >
            <Icon name="chevLeft" size={18} />
            Back to site
          </a>
          <a href="#hero" className="hidden flex-none items-center gap-2.5 sm:flex" aria-label="Forest Cafe — home">
            <img src="/assets/logo-transparent.png" alt="Forest Cafe" className="h-8 w-auto" />
            <span className="font-display text-[15px] font-semibold tracking-tight text-cream">
              Forest Cafe
            </span>
          </a>
          <a
            href="#reserve"
            className="inline-flex items-center justify-center rounded-full bg-lime px-5 py-2.5 font-display text-[14px] font-semibold tracking-tight text-white shadow-[0_10px_26px_rgba(234,93,42,0.28)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            Reserve
          </a>
        </nav>
      </div>

      {/* Hero header — photo with gray overlay */}
      <header className="relative flex min-h-[42vh] items-end overflow-hidden px-[clamp(20px,5vw,64px)] pb-[clamp(36px,5vw,64px)] pt-[clamp(120px,16vw,180px)]">
        <img
          src="/assets/interior-trees.jpg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(20,48,28,0.55),rgba(20,48,28,0.92))]"
        />
        <div className="relative mx-auto w-full max-w-6xl">
          <span className="mb-4 inline-flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.32em] text-lime-bright">
            <span className="h-1.5 w-1.5 rounded-full bg-lime shadow-[0_0_12px_2px_rgba(234,93,42,0.65)]" />
            Open to close
          </span>
          <h1 className="m-0 max-w-3xl font-display text-[clamp(2.4rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
            Our full <span className="text-canopy">menu</span>
          </h1>
          <p className="m-0 mt-5 max-w-xl text-[clamp(1rem,1.6vw,1.15rem)] leading-relaxed text-white/80">
            All-day breakfast, hearty rice meals, fresh pasta and a coffee bar built for lingering.
          </p>
        </div>
      </header>

      {/* Categories */}
      <div className="mx-auto max-w-6xl px-[clamp(20px,5vw,64px)] py-[clamp(48px,7vw,96px)]">
        {menuCategories.map((cat, i) => (
          <section key={cat.name} className={i === 0 ? '' : 'mt-[clamp(56px,8vw,104px)]'}>
            <div className="mb-[clamp(22px,3vw,36px)] flex items-baseline gap-4 border-b border-lime/12 pb-4">
              <span className="font-mono text-[14px] font-medium text-lime">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h2 className="m-0 font-display text-[clamp(1.6rem,3.4vw,2.4rem)] font-semibold tracking-[-0.02em] text-cream">
                {cat.name}
              </h2>
              {cat.note && (
                <span className="ml-auto font-mono text-[11px] uppercase tracking-[0.14em] text-mist-dim">
                  {cat.note}
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 gap-[clamp(16px,2vw,28px)] sm:grid-cols-2 lg:grid-cols-3">
              {cat.items.map((item, j) => (
                <article
                  key={item.name}
                  className="group hairline overflow-hidden rounded-[18px] bg-surface transition-colors duration-300 hover:border-lime/30"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={`https://picsum.photos/seed/${slug(item.name)}/640/480`}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(20,48,28,0.7))] transition-opacity duration-300 group-hover:opacity-0" />
                    {j === 0 && (
                      <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-pine/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-amber backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-0">
                        <Icon name="star" size={11} />
                        Favourite
                      </span>
                    )}
                    {/* Description reveal on hover */}
                    <div className="pointer-events-none absolute inset-0 flex items-end bg-pine/90 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="m-0 translate-y-2 text-[13.5px] leading-relaxed text-white/90 transition-transform duration-300 group-hover:translate-y-0">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-baseline justify-between gap-3 px-4 py-3.5">
                    <h3 className="m-0 font-display text-[16px] font-semibold text-cream">
                      {item.name}
                    </h3>
                    <span className="whitespace-nowrap font-body text-[15px] font-bold text-lime">
                      {item.price}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        {/* Closing CTA */}
        <div className="mt-[clamp(56px,8vw,104px)] flex flex-col items-center gap-5 rounded-[24px] border border-lime/12 bg-ink-2 px-6 py-[clamp(40px,6vw,72px)] text-center">
          <h2 className="m-0 font-display text-[clamp(1.6rem,3.2vw,2.4rem)] font-semibold tracking-[-0.02em] text-cream">
            Found your order?
          </h2>
          <p className="m-0 max-w-md text-[15.5px] leading-relaxed text-mist">
            Grab a table under the canopy. Sample prices shown — final menu may vary.
          </p>
          <a
            href="#reserve"
            className="group inline-flex items-center gap-2.5 rounded-full bg-lime px-7 py-4 font-display text-[16px] font-semibold tracking-tight text-white shadow-[0_14px_36px_rgba(234,93,42,0.32)] transition-transform duration-200 hover:-translate-y-1"
          >
            Reserve a table
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              <Icon name="arrow" />
            </span>
          </a>
        </div>
      </div>
    </main>
  )
}
