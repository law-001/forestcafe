import { nav } from '../data'
import { Icon } from './primitives'

export default function Footer() {
  return (
    <footer className="border-t border-lime/15 bg-ink px-[clamp(20px,5vw,64px)] pb-10 pt-[clamp(56px,8vw,90px)]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-[clamp(32px,5vw,56px)] md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <img src="/assets/logo-transparent.png" alt="Forest Cafe PH Arena" className="mb-5 w-[180px]" />
          <p className="m-0 mb-3 max-w-xs text-[15px] leading-relaxed text-mist">
            A real-feel rainforest cafe beside the Philippine Arena — now in two branches.
          </p>
          <p className="m-0 text-[14px] leading-relaxed text-mist-dim">
            Main · Ciudad de Victoria Bypass Road, Bocaue, Bulacan
            <br />
            Branch 2 · [address — placeholder]
          </p>
        </div>

        <div>
          <p className="m-0 mb-4 font-mono text-[12px] uppercase tracking-[0.22em] text-lime">Explore</p>
          <div className="flex flex-col gap-3 text-[15px] text-mist">
            {nav.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-cream">
                {l.label}
              </a>
            ))}
            <a href="#reserve" className="transition-colors hover:text-cream">
              Reserve
            </a>
          </div>
        </div>

        <div>
          <p className="m-0 mb-4 font-mono text-[12px] uppercase tracking-[0.22em] text-lime">Get in touch</p>
          <div className="flex flex-col gap-3 text-[15px] text-mist">
            <a href="tel:+639659470077" className="transition-colors hover:text-cream">
              +63 965 947 0077
            </a>
            <a href="mailto:forestcafepharena@gmail.com" className="transition-colors hover:text-cream">
              forestcafepharena@gmail.com
            </a>
            <p className="m-0">Open daily · 8AM – 10PM</p>
            <div className="mt-2 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream/8 text-cream transition-colors hover:bg-lime hover:text-white"
              >
                <Icon name="facebook" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream/8 text-cream transition-colors hover:bg-lime hover:text-white"
              >
                <Icon name="instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-[clamp(40px,5vw,56px)] flex max-w-6xl flex-wrap justify-between gap-2.5 border-t border-cream/10 pt-6 font-mono text-[12px] text-mist-dim">
        <span>© 2026 Forest Cafe PH Arena. All rights reserved.</span>
        <span>Made for the canopy.</span>
      </div>
    </footer>
  )
}
