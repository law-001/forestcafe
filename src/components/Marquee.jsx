const WORDS = [
  'Indoor forest',
  'Lantern glow',
  'All-day breakfast',
  'Slow mornings',
  'Free Wi-Fi',
  'Beside the Arena',
  'Specialty coffee',
  'Preserved moss wall',
]

export default function Marquee() {
  const row = [...WORDS, ...WORDS]
  return (
    <section className="relative overflow-hidden border-y border-lime/10 bg-ink-2 py-7">
      <div className="fc-marquee items-center">
        {row.map((w, i) => (
          <span key={i} className="flex flex-none items-center">
            <span className="px-8 font-display text-[clamp(1.1rem,2.4vw,1.9rem)] font-medium tracking-tight text-cream/80">
              {w}
            </span>
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-lime/70 shadow-[0_0_10px_2px_rgba(244, 136, 43,0.5)]"
            />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-[linear-gradient(90deg,#0a140e,transparent)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-[linear-gradient(270deg,#0a140e,transparent)]" />
    </section>
  )
}
