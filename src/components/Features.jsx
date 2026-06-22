import { Reveal, Eyebrow, Icon } from './primitives'

export default function Features() {
  return (
    <section className="relative px-[clamp(20px,5vw,64px)] pb-[clamp(90px,12vw,150px)] pt-[clamp(20px,5vw,60px)]">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-[clamp(44px,6vw,72px)] max-w-3xl">
          <Eyebrow>Why people stay</Eyebrow>
          <h2 className="m-0 font-display text-[clamp(2rem,4.6vw,3.5rem)] font-semibold leading-[1.04] tracking-[-0.025em] text-cream">
            More than a cafe — a forest
            <span
              className="mx-3 inline-block h-[0.62em] w-[1.5em] translate-y-[0.06em] rounded-full bg-cover bg-center align-middle ring-1 ring-lime/20"
              style={{ backgroundImage: "url('/assets/moss-wall.jpg')" }}
              aria-hidden
            />
            you can sit inside.
          </h2>
        </Reveal>

        <div className="grid grid-flow-dense grid-cols-1 gap-3.5 md:grid-cols-4 md:auto-rows-[clamp(10.5rem,13vw,14rem)]">
          {/* Card 1 — hero image, 2x2 */}
          <Reveal className="group relative overflow-hidden rounded-3xl md:col-span-2 md:row-span-2">
            <img
              src="/assets/interior-trees.jpg"
              alt="Indoor trees rising to the ceiling with woven lanterns"
              className="h-full min-h-[18rem] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(20,48,28,0.88))]" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <h3 className="m-0 font-display text-[clamp(1.5rem,2.4vw,2rem)] font-semibold text-white">
                Real-feel forest
              </h3>
              <p className="m-0 mt-2 max-w-sm text-[15px] leading-relaxed text-white/80">
                Floor-to-ceiling trees, a living moss wall, and rattan lanterns that glow warm
                overhead. It feels like a forest because it nearly is one.
              </p>
            </div>
          </Reveal>

          {/* Card 2 — wide text */}
          <Reveal
            delay={80}
            className="hairline group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-surface p-7 transition-colors duration-300 hover:bg-surface-2 md:col-span-2"
          >
            <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-lime">Linger</span>
            <div>
              <h3 className="m-0 font-display text-[clamp(1.4rem,2.2vw,1.85rem)] font-semibold text-cream">
                Slow mornings, long stays
              </h3>
              <p className="m-0 mt-2 max-w-md text-[15px] leading-relaxed text-mist">
                Comfy olive-chartreuse seating and coffee made for lingering — built for focused work,
                easy dates, and unhurried catch-ups.
              </p>
            </div>
          </Reveal>

          {/* Card 3 — wifi stat */}
          <Reveal
            delay={120}
            className="hairline group flex flex-col justify-between rounded-3xl bg-surface p-6 transition-colors duration-300 hover:bg-surface-2"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-lime/10 text-lime transition-transform duration-300 group-hover:scale-110">
              <Icon name="wifi" size={22} />
            </span>
            <p className="m-0 mt-4 font-display text-[17px] font-semibold text-cream">
              Fast, free Wi-Fi
            </p>
          </Reveal>

          {/* Card 4 — arena */}
          <Reveal
            delay={160}
            className="hairline group flex flex-col justify-between rounded-3xl bg-surface p-6 transition-colors duration-300 hover:bg-surface-2"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ember/15 text-ember transition-transform duration-300 group-hover:scale-110">
              <Icon name="pin" size={22} />
            </span>
            <div className="mt-4">
              <p className="m-0 font-display text-[26px] font-semibold leading-none text-cream">2 min</p>
              <p className="m-0 mt-1.5 text-[14px] text-mist">to the Philippine Arena</p>
            </div>
          </Reveal>

          {/* Card 5 — moss image wide */}
          <Reveal delay={120} className="group relative overflow-hidden rounded-3xl md:col-span-2">
            <img
              src="/assets/moss-wall.jpg"
              alt="Preserved-moss feature wall with Forest Cafe signage"
              className="h-full min-h-[12rem] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,48,28,0.78),transparent_60%)]" />
            <div className="absolute inset-y-0 left-0 flex flex-col justify-center p-7">
              <p className="m-0 font-display text-[clamp(1.2rem,2vw,1.6rem)] font-semibold text-white">
                A wall of living moss
              </p>
              <p className="m-0 mt-1.5 max-w-[16rem] text-[14px] text-white/80">
                Preserved, hushing the room and keeping the air soft.
              </p>
            </div>
          </Reveal>

          {/* Card 6 — seating image wide */}
          <Reveal delay={160} className="group relative overflow-hidden rounded-3xl md:col-span-2">
            <img
              src="/assets/seating-overhead.jpg"
              alt="Curved olive banquette seating from above"
              className="h-full min-h-[12rem] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_40%,rgba(20,48,28,0.78))]" />
            <div className="absolute inset-y-0 right-0 flex flex-col items-end justify-center p-7 text-right">
              <p className="m-0 font-display text-[clamp(1.2rem,2vw,1.6rem)] font-semibold text-white">
                Curved olive banquettes
              </p>
              <p className="m-0 mt-1.5 max-w-[15rem] text-[14px] text-white/80">
                Soft corners to settle into for hours.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
