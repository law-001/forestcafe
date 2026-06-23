import { Reveal, Eyebrow, Icon } from './primitives'

export default function Features() {
  return (
    <section id="about" className="relative px-[clamp(20px,5vw,64px)] pb-[clamp(90px,12vw,150px)] pt-[clamp(20px,5vw,60px)]">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-[clamp(44px,6vw,72px)] max-w-4xl">
          <Eyebrow>Our story</Eyebrow>
          <h2 className="m-0 font-display text-[clamp(2rem,4.6vw,3.5rem)] font-semibold leading-[1.04] tracking-[-0.025em] text-cream">
            A family-grown
            <span
              className="mx-3 inline-block h-[0.62em] w-[1.5em] translate-y-[0.06em] rounded-full bg-cover bg-center align-middle ring-1 ring-lime/20"
              style={{ backgroundImage: "url('/assets/moss-wall.jpg')" }}
              aria-hidden
            />
            cafe with deep roots.
          </h2>
        </Reveal>

        <div className="grid grid-flow-dense grid-cols-1 gap-3.5 md:grid-cols-4 md:auto-rows-[clamp(10.5rem,13vw,14rem)]">
          {/* Card 1 — founder image, 2x2 */}
          <Reveal className="group relative isolate overflow-hidden rounded-3xl transform-gpu md:col-span-2 md:row-span-2">
            <img
              src="/assets/interior-trees.jpg"
              alt="Founders' first cafe — trees rising under woven lanterns"
              className="h-full min-h-[18rem] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(20,48,28,0.88))]" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-lime-bright">
                Est. 2020
              </span>
              <h3 className="m-0 mt-2 font-display text-[clamp(1.5rem,2.4vw,2rem)] font-semibold text-white">
                Born from one quiet morning
              </h3>
              <p className="m-0 mt-2 max-w-sm text-[15px] leading-relaxed text-white/80">
                Started by a Bulacan family who wanted a place where their kids could read under
                real leaves and their parents could finally slow down. Five years on, it is still
                run by the same hands.
              </p>
            </div>
          </Reveal>

          {/* Card 2 — wide text */}
          <Reveal
            delay={80}
            className="hairline group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-surface p-7 transition-colors duration-300 hover:bg-surface-2 md:col-span-2"
          >
            <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-lime">Our promise</span>
            <div>
              <h3 className="m-0 font-display text-[clamp(1.4rem,2.2vw,1.85rem)] font-semibold text-cream">
                Slow food, fresh leaves, no shortcuts
              </h3>
              <p className="m-0 mt-2 max-w-md text-[15px] leading-relaxed text-mist">
                Every dish is cooked to order, every plant on the floor is real, and every guest
                gets the same unhurried welcome — whether you stay ten minutes or four hours.
              </p>
            </div>
          </Reveal>

          {/* Card 3 — guests stat */}
          <Reveal
            delay={120}
            className="hairline group flex flex-col justify-between rounded-3xl bg-surface p-6 transition-colors duration-300 hover:bg-surface-2"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-lime/10 text-lime transition-transform duration-300 group-hover:scale-110">
              <Icon name="leaf" size={22} />
            </span>
            <div className="mt-4">
              <p className="m-0 font-display text-[26px] font-semibold leading-none text-cream">
                40k+
              </p>
              <p className="m-0 mt-1.5 text-[14px] text-mist">guests welcomed under our canopy</p>
            </div>
          </Reveal>

          {/* Card 4 — sourcing */}
          <Reveal
            delay={160}
            className="hairline group flex flex-col justify-between rounded-3xl bg-surface p-6 transition-colors duration-300 hover:bg-surface-2"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ember/15 text-ember transition-transform duration-300 group-hover:scale-110">
              <Icon name="tree" size={22} />
            </span>
            <p className="m-0 mt-4 font-display text-[17px] font-semibold text-cream">
              Beans from Benguet, produce from local farmers we know by name
            </p>
          </Reveal>

          {/* Card 5 — values image wide */}
          <Reveal delay={120} className="group relative isolate overflow-hidden rounded-3xl transform-gpu md:col-span-2">
            <img
              src="/assets/moss-wall.jpg"
              alt="Preserved-moss feature wall with Forest Cafe signage"
              className="h-full min-h-[12rem] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,48,28,0.82),transparent_65%)]" />
            <div className="absolute inset-y-0 left-0 flex flex-col justify-center p-7">
              <p className="m-0 font-display text-[clamp(1.2rem,2vw,1.6rem)] font-semibold text-white">
                Built green, on purpose
              </p>
              <p className="m-0 mt-1.5 max-w-[18rem] text-[14px] text-white/80">
                Real moss, real trees, refillable everything. The vibe is not a backdrop — it is
                the whole point.
              </p>
            </div>
          </Reveal>

          {/* Card 6 — team image wide */}
          <Reveal delay={160} className="group relative isolate overflow-hidden rounded-3xl transform-gpu md:col-span-2">
            <img
              src="/assets/seating-overhead.jpg"
              alt="Curved olive banquette seating from above"
              className="h-full min-h-[12rem] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_40%,rgba(20,48,28,0.82))]" />
            <div className="absolute inset-y-0 right-0 flex flex-col items-end justify-center p-7 text-right">
              <p className="m-0 font-display text-[clamp(1.2rem,2vw,1.6rem)] font-semibold text-white">
                A team that actually lives here
              </p>
              <p className="m-0 mt-1.5 max-w-[18rem] text-[14px] text-white/80">
                Twelve baristas, four chefs, one sloth mascot — most of us grew up within a
                jeepney ride of these doors.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
