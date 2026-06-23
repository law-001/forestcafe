import { useRef } from 'react'
import { gsap, useGSAP, reduced } from '../lib/gsap'

const BARK = '#3a2516'
const BARK_LIGHT = '#6b4828'

// ---------------------------------------------------------------------------
// Leaf — naturalistic shape with central vein and side veins.
// Origin is at the stem attachment (0,0); tip points toward +x.
// ---------------------------------------------------------------------------
const Leaf = ({ size = 28, fill = '#4f8f3a', edge = null, vein = '#14301c' }) => {
  const w = size
  const h = size * 0.42
  return (
    <g>
      <path
        d={`M0 0 C ${w * 0.22} ${-h * 1.55} ${w * 0.6} ${-h * 1.6} ${w} ${-h * 0.15} C ${w * 0.85} ${h * 0.65} ${w * 0.45} ${h * 0.75} ${w * 0.18} ${h * 0.4} C ${w * 0.08} ${h * 0.3} ${-w * 0.04} ${h * 0.12} 0 0 Z`}
        fill={fill}
      />
      {edge && (
        <path
          d={`M ${w * 0.05} ${-h * 0.3} C ${w * 0.25} ${-h * 1.4} ${w * 0.55} ${-h * 1.5} ${w * 0.95} ${-h * 0.18}`}
          fill="none"
          stroke={edge}
          strokeWidth={1.2}
          strokeLinecap="round"
          opacity={0.85}
        />
      )}
      <path
        d={`M ${w * 0.02} ${h * 0.02} L ${w * 0.95} ${-h * 0.1}`}
        stroke={vein}
        strokeWidth={Math.max(0.55, w * 0.025)}
        opacity={0.5}
        fill="none"
        strokeLinecap="round"
      />
      <g stroke={vein} strokeWidth="0.5" opacity="0.36" fill="none" strokeLinecap="round">
        <path d={`M ${w * 0.22} ${-h * 0.02} L ${w * 0.3} ${-h * 0.78}`} />
        <path d={`M ${w * 0.42} ${-h * 0.07} L ${w * 0.5} ${-h * 0.98}`} />
        <path d={`M ${w * 0.62} ${-h * 0.1} L ${w * 0.7} ${-h * 0.88}`} />
        <path d={`M ${w * 0.8} ${-h * 0.12} L ${w * 0.86} ${-h * 0.55}`} />
        <path d={`M ${w * 0.22} ${h * 0.05} L ${w * 0.3} ${h * 0.5}`} />
        <path d={`M ${w * 0.42} ${h * 0.08} L ${w * 0.5} ${h * 0.6}`} />
        <path d={`M ${w * 0.62} ${h * 0.12} L ${w * 0.7} ${h * 0.55}`} />
      </g>
    </g>
  )
}

const Bud = ({ fill = '#7ab84a', size = 5 }) => (
  <g>
    <circle r={size} fill={fill} />
    <circle r={size * 0.6} cx={-size * 0.25} cy={-size * 0.3} fill="#a3c64a" opacity="0.75" />
    <circle r={size * 0.25} cx={size * 0.2} cy={size * 0.2} fill="#3a6b29" opacity="0.6" />
  </g>
)

const Berry = ({ fill = '#ea5d2a', size = 4 }) => (
  <g>
    <circle r={size} fill={fill} />
    <circle r={size * 0.35} cx={-size * 0.35} cy={-size * 0.35} fill="#fff" opacity="0.55" />
  </g>
)

const BerryCluster = ({ fill = '#ea5d2a' }) => (
  <g>
    <line x1="0" y1="0" x2="0" y2="-10" stroke="#3a2516" strokeWidth="1" strokeLinecap="round" />
    <Berry fill={fill} />
    <g transform="translate(7 -3)">
      <Berry fill={fill} size={3.6} />
    </g>
    <g transform="translate(-4 -6)">
      <Berry fill="#d44a18" size={3.4} />
    </g>
    <g transform="translate(3 5)">
      <Berry fill={fill} size={3.5} />
    </g>
    <g transform="translate(-6 1)">
      <Berry fill="#d44a18" size={3.2} />
    </g>
  </g>
)

const Mushroom = () => (
  <g>
    <rect x="-3" y="-2" width="6" height="11" rx="2" fill="#f2c679" />
    <ellipse cx="0" cy="9" rx="6" ry="1.4" fill="#3a2516" opacity="0.25" />
    <path d="M -12 0 A 12 9 0 0 1 12 0 Z" fill="#ea5d2a" />
    <circle cx="-5" cy="-3" r="1.7" fill="#f7efdf" />
    <circle cx="3" cy="-2" r="1.5" fill="#f7efdf" />
    <circle cx="0" cy="-5" r="1.1" fill="#f7efdf" opacity="0.85" />
    <circle cx="7" cy="-3" r="0.9" fill="#f7efdf" opacity="0.7" />
  </g>
)

const Bird = () => (
  <g>
    {/* tail */}
    <path d="M -6 2 L -12 -2 L -8 4 Z" fill="#1f3d22" />
    {/* body */}
    <path
      d="M -6 2 Q -4 -8 6 -8 Q 18 -6 22 2 Q 20 6 12 7 Q 2 7 -6 2 Z"
      fill="#2a4d28"
    />
    {/* belly */}
    <path
      d="M -2 4 Q 4 7 14 6 Q 18 5 20 3 Q 14 8 4 7 Q -1 6 -2 4 Z"
      fill="#d9a45a"
      opacity="0.85"
    />
    {/* wing */}
    <path d="M 2 -2 Q 8 -6 14 -2 Q 10 3 2 1 Z" fill="#14301c" />
    <path d="M 4 -1 L 10 0 M 6 0 L 12 1" stroke="#0c1f12" strokeWidth="0.5" opacity="0.55" />
    {/* head highlight */}
    <circle cx="14" cy="-4" r="1" fill="#1f3d22" />
    {/* eye */}
    <circle cx="17" cy="-4" r="1.4" fill="#f7efdf" />
    <circle cx="17.4" cy="-4" r="0.7" fill="#14301c" />
    {/* beak */}
    <path d="M 22 -2 L 27 -3 L 22 0 Z" fill="#ea5d2a" />
    {/* feet */}
    <line x1="6" y1="7" x2="6" y2="11" stroke="#3a2516" strokeWidth="1" strokeLinecap="round" />
    <line x1="12" y1="7" x2="12" y2="11" stroke="#3a2516" strokeWidth="1" strokeLinecap="round" />
    <path d="M 4 11 L 8 11 M 10 11 L 14 11" stroke="#3a2516" strokeWidth="0.8" strokeLinecap="round" />
  </g>
)

// ---------------------------------------------------------------------------
// Vertical compression — pulls every branch endpoint, twig, and decoration
// toward the main bough at y=100. Side-effect: straightens the main bough
// (its peaks/troughs collapse proportionally), making the whole divider
// shorter and more horizontal without redrawing each path by hand.
// ---------------------------------------------------------------------------
const CENTER_Y = 100
const SQUASH = 0.55

const cy = (y) => Math.round((CENTER_Y + (y - CENTER_Y) * SQUASH) * 100) / 100

// Compresses Y values in a path string. Assumes purely absolute commands
// (M/C/S/Q) with strictly alternating x/y pairs — which all paths below use.
const compressPath = (d) => {
  let isY = false
  return d.replace(/-?\d+(?:\.\d+)?/g, (m) => {
    const n = parseFloat(m)
    const out = isY ? cy(n) : n
    isY = !isY
    return String(out)
  })
}

const squashPoint = (o) => ({ ...o, y: cy(o.y) })

const squashVariant = (v) => ({
  ...v,
  main: compressPath(v.main),
  subs: v.subs.map(compressPath),
  twigs: v.twigs.map(compressPath),
  leaves: v.leaves.map(squashPoint),
  buds: v.buds?.map(squashPoint),
  berries: v.berries?.map(squashPoint),
  mushrooms: v.mushrooms?.map(squashPoint),
  birds: v.birds?.map(squashPoint),
})

// ---------------------------------------------------------------------------
// Variant data — branch geometry + leaves + ornaments.
// ---------------------------------------------------------------------------
const SPRING_RAW = {
  main: 'M 8 108 C 180 60 360 152 560 96 S 900 52 1080 100 S 1340 132 1395 96',
  subs: [
    'M 180 80 Q 200 50 220 26',
    'M 290 132 Q 285 162 280 186',
    'M 442 110 Q 442 76 446 50',
    'M 560 96 Q 580 80 600 70',
    'M 690 76 Q 706 42 720 20',
    'M 840 66 Q 852 32 862 14',
    'M 990 106 Q 985 140 980 168',
    'M 1180 110 Q 1200 72 1216 46',
    'M 1320 122 Q 1335 92 1346 70',
  ],
  twigs: [
    'M 218 28 Q 232 24 244 18',
    'M 204 36 Q 196 32 188 24',
    'M 446 52 Q 460 46 470 38',
    'M 720 22 Q 736 18 750 12',
    'M 720 22 Q 706 18 696 10',
    'M 862 16 Q 876 12 888 6',
    'M 862 16 Q 850 12 842 6',
    'M 1216 48 Q 1232 42 1246 34',
    'M 1216 48 Q 1200 42 1188 32',
  ],
  leaves: [
    { x: 220, y: 26, rot: -42, size: 30, color: '#4f8f3a' },
    { x: 235, y: 22, rot: -12, size: 26, color: '#5fa346' },
    { x: 244, y: 18, rot: 12, size: 22, color: '#3a6b29' },
    { x: 204, y: 30, rot: -95, size: 24, color: '#3a6b29' },
    { x: 188, y: 24, rot: -135, size: 22, color: '#4f8f3a' },

    { x: 280, y: 186, rot: 105, size: 28, color: '#3a6b29' },
    { x: 295, y: 178, rot: 72, size: 25, color: '#4f8f3a' },
    { x: 268, y: 178, rot: 138, size: 22, color: '#5fa346' },
    { x: 285, y: 195, rot: 90, size: 20, color: '#5fa346' },

    { x: 446, y: 50, rot: -58, size: 32, color: '#4f8f3a' },
    { x: 462, y: 56, rot: -28, size: 26, color: '#5fa346' },
    { x: 470, y: 38, rot: -8, size: 22, color: '#3a6b29' },
    { x: 432, y: 60, rot: -100, size: 24, color: '#3a6b29' },

    { x: 600, y: 70, rot: -28, size: 24, color: '#4f8f3a' },
    { x: 612, y: 78, rot: 6, size: 20, color: '#5fa346' },
    { x: 590, y: 62, rot: -68, size: 22, color: '#3a6b29' },

    { x: 720, y: 20, rot: -42, size: 30, color: '#4f8f3a' },
    { x: 736, y: 16, rot: -10, size: 26, color: '#5fa346' },
    { x: 750, y: 12, rot: 16, size: 22, color: '#3a6b29' },
    { x: 706, y: 18, rot: -92, size: 24, color: '#4f8f3a' },
    { x: 696, y: 10, rot: -130, size: 22, color: '#5fa346' },

    { x: 862, y: 14, rot: -28, size: 30, color: '#4f8f3a' },
    { x: 878, y: 10, rot: 2, size: 26, color: '#5fa346' },
    { x: 888, y: 4, rot: 26, size: 22, color: '#3a6b29' },
    { x: 850, y: 18, rot: -88, size: 26, color: '#4f8f3a' },
    { x: 842, y: 4, rot: -120, size: 22, color: '#5fa346' },

    { x: 980, y: 168, rot: 100, size: 28, color: '#3a6b29' },
    { x: 992, y: 178, rot: 75, size: 24, color: '#4f8f3a' },
    { x: 970, y: 160, rot: 130, size: 22, color: '#5fa346' },
    { x: 988, y: 188, rot: 95, size: 20, color: '#3a6b29' },

    { x: 1216, y: 46, rot: -58, size: 32, color: '#4f8f3a' },
    { x: 1232, y: 40, rot: -25, size: 26, color: '#5fa346' },
    { x: 1246, y: 34, rot: 4, size: 22, color: '#3a6b29' },
    { x: 1200, y: 40, rot: -118, size: 22, color: '#4f8f3a' },
    { x: 1188, y: 30, rot: -148, size: 20, color: '#5fa346' },

    { x: 1346, y: 70, rot: -42, size: 28, color: '#4f8f3a' },
    { x: 1360, y: 64, rot: -12, size: 24, color: '#5fa346' },
    { x: 1330, y: 78, rot: -90, size: 22, color: '#3a6b29' },
  ],
  buds: [
    { x: 545, y: 96, fill: '#7ab84a', size: 5 },
    { x: 1080, y: 100, fill: '#a3c64a', size: 4.5 },
    { x: 318, y: 124, fill: '#7ab84a', size: 4 },
    { x: 1110, y: 108, fill: '#7ab84a', size: 4 },
  ],
  birds: [{ x: 372, y: 118 }],
}

const AUTUMN_RAW = {
  main: 'M 5 100 C 210 148 380 50 580 100 S 880 152 1080 96 S 1320 58 1395 102',
  subs: [
    'M 160 100 Q 175 72 192 50',
    'M 280 70 Q 275 36 268 12',
    'M 420 118 Q 410 148 405 178',
    'M 580 100 Q 600 116 620 132',
    'M 720 108 Q 740 132 756 162',
    'M 870 118 Q 876 148 884 178',
    'M 1020 90 Q 1010 55 1000 26',
    'M 1180 105 Q 1200 130 1218 158',
    'M 1320 70 Q 1335 40 1344 18',
  ],
  twigs: [
    'M 192 50 Q 210 42 224 30',
    'M 192 50 Q 178 40 168 26',
    'M 268 12 Q 282 8 296 0',
    'M 268 12 Q 252 10 240 4',
    'M 405 178 Q 420 184 432 188',
    'M 1000 26 Q 1016 18 1030 8',
    'M 1000 26 Q 984 18 972 8',
    'M 1218 158 Q 1234 164 1248 168',
    'M 1344 18 Q 1358 10 1372 0',
  ],
  leaves: [
    { x: 192, y: 50, rot: -50, size: 30, color: '#e8923a', edge: '#f2c679' },
    { x: 210, y: 42, rot: -22, size: 26, color: '#ea5d2a', edge: '#f2c679' },
    { x: 224, y: 30, rot: 4, size: 22, color: '#d9a45a' },
    { x: 178, y: 40, rot: -108, size: 24, color: '#b35c2a' },
    { x: 168, y: 26, rot: -148, size: 22, color: '#4f8f3a' },

    { x: 268, y: 12, rot: -45, size: 30, color: '#ea5d2a', edge: '#f2c679' },
    { x: 286, y: 8, rot: -14, size: 26, color: '#e8923a' },
    { x: 296, y: 0, rot: 12, size: 22, color: '#d9a45a' },
    { x: 252, y: 10, rot: -118, size: 22, color: '#b35c2a' },
    { x: 240, y: 4, rot: -150, size: 20, color: '#4f8f3a' },

    { x: 405, y: 178, rot: 100, size: 28, color: '#ea5d2a', edge: '#f2c679' },
    { x: 418, y: 184, rot: 72, size: 24, color: '#e8923a' },
    { x: 432, y: 188, rot: 50, size: 22, color: '#d9a45a' },
    { x: 392, y: 172, rot: 130, size: 22, color: '#4f8f3a' },

    { x: 620, y: 132, rot: 60, size: 26, color: '#ea5d2a', edge: '#f2c679' },
    { x: 635, y: 138, rot: 90, size: 22, color: '#d9a45a' },
    { x: 606, y: 122, rot: 30, size: 20, color: '#4f8f3a' },

    { x: 756, y: 162, rot: 95, size: 28, color: '#b35c2a' },
    { x: 770, y: 168, rot: 72, size: 24, color: '#ea5d2a', edge: '#f2c679' },
    { x: 742, y: 154, rot: 125, size: 22, color: '#e8923a' },
    { x: 784, y: 170, rot: 60, size: 20, color: '#4f8f3a' },

    { x: 884, y: 178, rot: 100, size: 28, color: '#ea5d2a', edge: '#f2c679' },
    { x: 898, y: 184, rot: 72, size: 24, color: '#4f8f3a' },
    { x: 870, y: 168, rot: 130, size: 22, color: '#b35c2a' },

    { x: 1000, y: 26, rot: -60, size: 30, color: '#e8923a', edge: '#f2c679' },
    { x: 1016, y: 18, rot: -25, size: 26, color: '#ea5d2a' },
    { x: 1030, y: 8, rot: 4, size: 22, color: '#d9a45a' },
    { x: 984, y: 18, rot: -120, size: 24, color: '#b35c2a' },
    { x: 972, y: 8, rot: -150, size: 22, color: '#4f8f3a' },

    { x: 1218, y: 158, rot: 100, size: 28, color: '#ea5d2a', edge: '#f2c679' },
    { x: 1234, y: 164, rot: 72, size: 24, color: '#e8923a' },
    { x: 1248, y: 168, rot: 50, size: 22, color: '#d9a45a' },
    { x: 1204, y: 148, rot: 130, size: 22, color: '#4f8f3a' },

    { x: 1344, y: 18, rot: -50, size: 30, color: '#ea5d2a' },
    { x: 1358, y: 10, rot: -20, size: 26, color: '#e8923a', edge: '#f2c679' },
    { x: 1372, y: 0, rot: 6, size: 22, color: '#d9a45a' },
  ],
  berries: [
    { x: 340, y: 108, fill: '#ea5d2a' },
    { x: 1148, y: 95, fill: '#ea5d2a' },
    { x: 480, y: 88, fill: '#d44a18' },
  ],
  mushrooms: [
    { x: 500, y: 188, scale: 0.95 },
    { x: 1060, y: 188, scale: 0.7 },
  ],
  buds: [{ x: 660, y: 110, fill: '#a3c64a', size: 4 }],
}

const SPRING = squashVariant(SPRING_RAW)
const AUTUMN = squashVariant(AUTUMN_RAW)

export default function LeafDivider({ variant = 'spring' }) {
  const root = useRef(null)
  const data = variant === 'autumn' ? AUTUMN : SPRING

  useGSAP(
    () => {
      if (reduced()) return

      const paths = root.current?.querySelectorAll('[data-draw]')
      const decor = root.current?.querySelectorAll('[data-decor]')

      paths?.forEach((p, i) => {
        const len = p.getTotalLength()
        gsap.fromTo(
          p,
          { strokeDasharray: len, strokeDashoffset: len },
          {
            strokeDashoffset: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: root.current,
              start: 'top 92%',
              end: 'bottom 35%',
              scrub: 0.65,
            },
            delay: i * 0.015,
          },
        )
      })

      if (decor?.length) {
        gsap.set(decor, { transformOrigin: '0px 0px' })
        gsap.fromTo(
          decor,
          { opacity: 0, scale: 0.4 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.85,
            stagger: { each: 0.022, from: 'random' },
            ease: 'back.out(1.6)',
            scrollTrigger: { trigger: root.current, start: 'top 88%' },
          },
        )
        decor.forEach((d, i) => {
          gsap.to(d, {
            rotation: i % 2 === 0 ? 4 : -4,
            duration: 2.4 + (i % 5) * 0.35,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut',
            delay: (i % 7) * 0.18,
          })
        })
      }
    },
    { scope: root, dependencies: [variant] },
  )

  return (
    <div ref={root} className="relative mx-auto w-full max-w-7xl px-4" aria-hidden>
      <svg
        viewBox="0 20 1400 160"
        preserveAspectRatio="xMidYMid meet"
        className="block h-[clamp(92px,9vw,130px)] w-full"
      >
        <defs>
          <filter id="leaf-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.2" />
          </filter>
        </defs>

        {/* main bough — outer dark stroke */}
        <path
          data-draw
          d={data.main}
          fill="none"
          stroke={BARK}
          strokeWidth="5.5"
          strokeLinecap="round"
        />
        {/* main bough — inner highlight (no draw anim, static under) */}
        <path
          d={data.main}
          fill="none"
          stroke={BARK_LIGHT}
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.55"
        />
        {/* knot details on main bough — y values compressed in sync */}
        <g fill={BARK} opacity="0.85">
          <ellipse cx="380" cy={cy(120)} rx="3.5" ry="2" />
          <ellipse cx="820" cy={cy(68)} rx="3" ry="1.8" />
          <ellipse cx="1180" cy={cy(118)} rx="3.2" ry="1.9" />
        </g>

        {/* secondary branches */}
        {data.subs.map((d, i) => (
          <path
            key={`s${i}`}
            data-draw
            d={d}
            fill="none"
            stroke={BARK}
            strokeWidth="2.8"
            strokeLinecap="round"
          />
        ))}
        {/* twigs */}
        {data.twigs.map((d, i) => (
          <path
            key={`t${i}`}
            data-draw
            d={d}
            fill="none"
            stroke={BARK}
            strokeWidth="1.7"
            strokeLinecap="round"
            opacity="0.92"
          />
        ))}

        {/* leaves — each is two-wrapped: outer = position+orient, inner = GSAP target */}
        {data.leaves.map((l, i) => (
          <g key={`l${i}`} transform={`translate(${l.x} ${l.y}) rotate(${l.rot})`}>
            <g data-decor>
              <Leaf size={l.size} fill={l.color} edge={l.edge} />
            </g>
          </g>
        ))}

        {/* buds */}
        {data.buds?.map((b, i) => (
          <g key={`b${i}`} transform={`translate(${b.x} ${b.y})`}>
            <g data-decor>
              <Bud fill={b.fill} size={b.size} />
            </g>
          </g>
        ))}

        {/* berry clusters */}
        {data.berries?.map((b, i) => (
          <g key={`be${i}`} transform={`translate(${b.x} ${b.y})`}>
            <g data-decor>
              <BerryCluster fill={b.fill} />
            </g>
          </g>
        ))}

        {/* mushrooms */}
        {data.mushrooms?.map((m, i) => (
          <g key={`m${i}`} transform={`translate(${m.x} ${m.y}) scale(${m.scale || 1})`}>
            <g data-decor>
              <Mushroom />
            </g>
          </g>
        ))}

        {/* perched bird */}
        {data.birds?.map((b, i) => (
          <g key={`bi${i}`} transform={`translate(${b.x} ${b.y})`}>
            <g data-decor>
              <Bird />
            </g>
          </g>
        ))}
      </svg>
    </div>
  )
}
