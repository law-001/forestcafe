import { useState } from 'react'
import { Reveal, Eyebrow, Icon } from './primitives'

// ---------------------------------------------------------------------------
// Food spread — three rotating menus of dish photos, shown as a line of
// arch-topped portrait plates. Food first; framing second.
// Swap `img` fields with real Forest Cafe shots when ready.
// ---------------------------------------------------------------------------
const U = (id, w = 900) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`

const SPREADS = [
  {
    key: 'plates',
    label: 'Plates',
    headline: 'What people drive out here for.',
    sub: 'Cooked to order, plated with intention, served at the speed of conversation.',
    plates: [
      {
        n: '01',
        name: 'Forest Tapsilog',
        price: '₱185',
        blurb: 'Garlic beef tapa, buttered sinangag, runny sunny egg.',
        img: U('photo-1546069901-ba9599a7e63c'),
      },
      {
        n: '02',
        name: 'Truffle Carbonara',
        price: '₱245',
        blurb: 'Egg-rich cream, smoked bacon, finishing rain of black truffle.',
        img: U('photo-1473093295043-cdd812d0e601'),
      },
      {
        n: '03',
        name: 'Chicken Inasal',
        price: '₱245',
        blurb: 'Annatto-grilled over flame, garlic rice on the side.',
        img: U('photo-1532550907401-a500c9a57435'),
      },
      {
        n: '04',
        name: 'Crispy Pata Rice',
        price: '₱285',
        blurb: 'Pork knuckle fried to glass, soy-vinegar dip.',
        img: U('photo-1565299624946-b28f40a0ae38'),
      },
    ],
  },
  {
    key: 'drinks',
    label: 'Drinks',
    headline: 'A coffee bar built for lingering.',
    sub: 'No syrups, no shortcuts — just beans from Benguet, leaves, milk, and time.',
    plates: [
      {
        n: '01',
        name: 'Forest Latte',
        price: '₱150',
        blurb: 'Double espresso, steamed milk, a soft pandan whisper.',
        img: U('photo-1509042239860-f550ce710b93'),
      },
      {
        n: '02',
        name: 'Matcha Canopy',
        price: '₱175',
        blurb: 'Ceremonial-grade matcha, stone-ground, poured cold.',
        img: U('photo-1545518514-ce8448f542b3'),
      },
      {
        n: '03',
        name: 'Spanish Latte',
        price: '₱160',
        blurb: 'Two shots over condensed milk — dessert in a glass.',
        img: U('photo-1485808191679-5f86510681a2'),
      },
      {
        n: '04',
        name: 'Iced Caramel',
        price: '₱170',
        blurb: 'Layered espresso over cold milk, slow caramel drizzle.',
        img: U('photo-1517701550927-30cf4ba1dba5'),
      },
    ],
  },
  {
    key: 'sweets',
    label: 'Sweets',
    headline: 'Baked before the doors open.',
    sub: 'Small batch, served warm, gone by 4pm if you wait too long.',
    plates: [
      {
        n: '01',
        name: 'Choco Lava Cake',
        price: '₱165',
        blurb: 'Warm chocolate cake with a slow-spilling molten centre.',
        img: U('photo-1606313564200-e75d5e30476c'),
      },
      {
        n: '02',
        name: 'Berry Cheesecake',
        price: '₱175',
        blurb: 'New York-style under a mixed-berry compote.',
        img: U('photo-1565958011703-44f9829ba187'),
      },
      {
        n: '03',
        name: 'Mango Float',
        price: '₱145',
        blurb: 'Layered cream, graham, ripe carabao mango.',
        img: U('photo-1488477181946-6428a0291777'),
      },
      {
        n: '04',
        name: 'Leche Flan',
        price: '₱125',
        blurb: 'Silky steamed custard under a burnt-caramel mirror.',
        img: U('photo-1551024506-0bccd828d307'),
      },
    ],
  },
]

const TOTAL_DISHES = 36

// Soft-cornered rectangle — quiet, editorial, not a shape gimmick.
const PLATE_RADIUS = '18px'

export default function MenuPreview() {
  const [activeKey, setActiveKey] = useState(SPREADS[0].key)
  const spread = SPREADS.find((s) => s.key === activeKey) ?? SPREADS[0]

  return (
    <section
      id="menu-preview"
      className="relative px-[clamp(20px,5vw,64px)] pb-[clamp(80px,10vw,140px)] pt-[clamp(20px,4vw,60px)]"
    >
      <div className="mx-auto max-w-6xl">
        {/* ───── Editorial header — centered, sparse ───── */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Today on the table</Eyebrow>
          <h2
            key={spread.headline}
            className="m-0 font-display text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.04] tracking-[-0.025em] text-cream"
          >
            {spread.headline}
          </h2>
          <p
            key={spread.sub}
            className="mx-auto mt-5 max-w-md text-[14.5px] leading-relaxed text-mist"
          >
            {spread.sub}
          </p>
        </Reveal>

        {/* ───── Tabs — quiet, centered ───── */}
        <Reveal
          delay={80}
          className="mt-[clamp(28px,4vw,40px)] flex justify-center"
        >
          <div
            role="tablist"
            aria-label="Menu category"
            className="inline-flex items-center gap-1 rounded-full border border-pine/15 bg-surface/70 p-1 backdrop-blur"
          >
            {SPREADS.map((s) => {
              const isOn = s.key === activeKey
              return (
                <button
                  key={s.key}
                  role="tab"
                  aria-selected={isOn}
                  onClick={() => setActiveKey(s.key)}
                  className={`rounded-full px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] transition-colors duration-200 ${
                    isOn
                      ? 'bg-pine text-ink'
                      : 'text-pine/55 hover:text-pine'
                  }`}
                >
                  {s.label}
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* ───── The line — desktop grid (md+) ───── */}
        <div
          key={`grid-${spread.key}`}
          className="fc-line mt-[clamp(40px,6vw,72px)] hidden gap-x-6 md:grid md:grid-cols-4 md:items-stretch"
        >
          {spread.plates.map((plate, i) => (
            <ArchPlate key={plate.n} plate={plate} index={i} />
          ))}
        </div>

        {/* ───── Mobile swipe carousel (below md) ───── */}
        <div
          key={`swipe-${spread.key}`}
          className="mt-[clamp(40px,6vw,72px)] md:hidden"
        >
          <div className="fc-swipe -mx-[clamp(20px,5vw,64px)] flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-[clamp(20px,5vw,64px)] pb-3">
            {spread.plates.map((plate, i) => (
              <div
                key={plate.n}
                className="w-[72%] shrink-0 snap-center sm:w-[58%]"
              >
                <ArchPlate plate={plate} index={i} />
              </div>
            ))}
            {/* trailing spacer so the last card can fully snap-center */}
            <div aria-hidden className="w-px shrink-0" />
          </div>
        </div>

        {/* ───── Footer link ───── */}
        <Reveal
          delay={140}
          className="mt-[clamp(56px,7vw,84px)] flex flex-col items-center justify-between gap-5 border-t border-pine/15 pt-7 sm:flex-row"
        >
          <p className="m-0 font-mono text-[11px] uppercase tracking-[0.24em] text-mist-dim">
            <span className="text-pine">{spread.plates.length}</span>
            <span className="opacity-60"> of </span>
            <span className="text-pine">{TOTAL_DISHES}</span>
            <span className="opacity-60"> dishes shown</span>
          </p>
          <a
            href="#menu-all"
            className="group inline-flex items-center gap-3 rounded-full bg-pine px-6 py-3 font-display text-[14px] font-semibold tracking-tight text-ink transition-transform duration-200 hover:-translate-y-0.5"
          >
            Open the full menu
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              <Icon name="arrow" size={16} />
            </span>
          </a>
        </Reveal>
      </div>

      {/* scoped animations — gentle stagger on category change */}
      <style>{`
        .fc-line .fc-arch { animation: fcArchIn 760ms cubic-bezier(0.22, 0.68, 0.18, 1) both; }
        .fc-line .fc-arch:nth-child(1) { animation-delay: 60ms; }
        .fc-line .fc-arch:nth-child(2) { animation-delay: 140ms; }
        .fc-line .fc-arch:nth-child(3) { animation-delay: 220ms; }
        .fc-line .fc-arch:nth-child(4) { animation-delay: 300ms; }
        @keyframes fcArchIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* mobile swipe carousel — hide scrollbar, keep momentum */
        .fc-swipe { -webkit-overflow-scrolling: touch; scrollbar-width: none; }
        .fc-swipe::-webkit-scrollbar { display: none; }

        @media (prefers-reduced-motion: reduce) {
          .fc-line .fc-arch { animation: none; }
        }
      `}</style>
    </section>
  )
}

// ---------------------------------------------------------------------------
// ArchPlate — single arch-topped portrait food photo with a quiet caption.
// The arch shape comes from a percentage-based border-radius so it scales.
// ---------------------------------------------------------------------------
function ArchPlate({ plate, index = 0 }) {
  return (
    <figure className="fc-arch m-0 flex flex-col">
      <div
        className="group relative w-full overflow-hidden bg-surface ring-1 ring-pine/10 transition-transform duration-500 hover:-translate-y-1"
        style={{
          borderRadius: PLATE_RADIUS,
          aspectRatio: '3 / 5.4',
          boxShadow: '0 24px 50px -28px rgba(20, 48, 28, 0.35)',
        }}
      >
        <img
          src={plate.img}
          alt={plate.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,0.68,0.18,1)] group-hover:scale-[1.06]"
        />
        {/* faint vignette only at the bottom — keeps the food readable, no overlay weight */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(180deg,transparent,rgba(8,22,12,0.32))]"
        />
        {/* tiny index, top-left */}
        <span className="absolute left-3 top-3 font-mono text-[10px] tracking-[0.28em] text-white/85">
          {plate.n}
        </span>
      </div>

      {/* Caption — name + price on one baseline, blurb clamped to 2 lines so
          all four captions occupy identical vertical space and align cleanly. */}
      <figcaption className="mt-4 flex items-baseline justify-between gap-3 px-1">
        <h3 className="m-0 truncate font-display text-[15px] font-semibold leading-tight tracking-[-0.01em] text-pine">
          {plate.name}
        </h3>
        <span className="shrink-0 font-mono text-[12px] tracking-[0.02em] text-lime">
          {plate.price}
        </span>
      </figcaption>
      <p className="mt-1.5 line-clamp-2 min-h-[2.6em] px-1 text-[12px] leading-snug text-mist-dim">
        {plate.blurb}
      </p>
    </figure>
  )
}
