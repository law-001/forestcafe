import { useRef } from "react";
import { gsap, useGSAP, reduced } from "../lib/gsap";

const TEXT =
  "Step in off the bypass road and the city falls away. Real trees rise to the ceiling, woven lanterns burn warm overhead, and a wall of living moss hushes the room. This is not a theme — it is a forest you can order coffee in.";

const INFO = [
  { value: "Real-feel", label: "forest interior" },
  { value: "Free", label: "fast Wi-Fi" },
  { value: "8AM–10PM", label: "open daily" },
  { value: "Family", label: "friendly" },
];

export default function Statement() {
  const root = useRef(null);
  const textRef = useRef(null);
  const words = TEXT.split(" ");

  useGSAP(
    () => {
      if (reduced()) {
        gsap.set("[data-word]", { opacity: 1 });
        return;
      }
      gsap.to("[data-word]", {
        opacity: 1,
        stagger: 0.4,
        ease: "none",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          end: "bottom 45%",
          scrub: true,
        },
      });
    },
    { scope: root },
  );

  return (
    <section
      id="about"
      ref={root}
      className="relative px-6 py-[clamp(72px,10vw,130px)]"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-10 flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.32em] text-lime">
          <span className="h-1.5 w-1.5 rounded-full bg-lime shadow-[0_0_12px_2px_rgba(234,93,42,0.65)]" />
          The room
        </p>
        <p
          ref={textRef}
          className="m-0 font-display text-[clamp(1.7rem,4.4vw,3.4rem)] font-medium leading-[1.18] tracking-[-0.02em]"
        >
          {words.map((w, i) => (
            <span
              key={i}
              data-word
              className="opacity-[0.12]"
            >
              {w}{" "}
            </span>
          ))}
        </p>

        <div className="mt-[clamp(48px,7vw,88px)] grid grid-cols-2 gap-x-6 gap-y-9 border-t border-cream/10 pt-[clamp(30px,3.5vw,44px)] sm:grid-cols-4">
          {INFO.map((it) => (
            <div key={it.value}>
              <p className="m-0 font-display text-[clamp(1.3rem,2.2vw,1.6rem)] font-semibold tracking-tight text-cream">
                {it.value}
              </p>
              <p className="m-0 mt-1.5 font-body text-[14px] text-mist-dim">
                {it.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
