import { useReveal } from '../hooks/useReveal'

/* Line icons — single 1.8–2px stroke family, tied to the rattan/leaf motif. */
const S = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const Icon = ({ name, size = 24 }) => {
  const p = { width: size, height: size, viewBox: '0 0 24 24', 'aria-hidden': true, ...S }
  switch (name) {
    case 'tree':
      return (
        <svg {...p}>
          <path d="M12 21v-7" />
          <path d="M9 9a4 4 0 0 1-2-7 5 5 0 0 1 5-1 5 5 0 0 1 5 1 4 4 0 0 1-2 7 3 3 0 0 1-3 4 3 3 0 0 1-3-4Z" />
        </svg>
      )
    case 'lantern':
      return (
        <svg {...p}>
          <path d="M12 3v2" />
          <path d="M7 8h10" />
          <path d="M7 16h10" />
          <path d="M6.5 8a5.5 8 0 0 0 11 0" />
          <path d="M6.5 16a5.5 8 0 0 1 11 0" />
          <path d="M12 19v2" />
        </svg>
      )
    case 'leaf':
      return (
        <svg {...p}>
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6" />
        </svg>
      )
    case 'pin':
      return (
        <svg {...p} strokeWidth={1.9}>
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      )
    case 'clock':
      return (
        <svg {...p} strokeWidth={1.9}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      )
    case 'phone':
      return (
        <svg {...p} strokeWidth={2}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
        </svg>
      )
    case 'mail':
      return (
        <svg {...p} strokeWidth={2}>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-10 6L2 7" />
        </svg>
      )
    case 'arrow':
      return (
        <svg {...p} width={17} height={17} strokeWidth={2.2}>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      )
    case 'chevLeft':
      return (
        <svg {...p} strokeWidth={2.4}>
          <path d="m15 18-6-6 6-6" />
        </svg>
      )
    case 'chevRight':
      return (
        <svg {...p} strokeWidth={2.4}>
          <path d="m9 18 6-6-6-6" />
        </svg>
      )
    case 'facebook':
      return (
        <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M14 9h3l.5-3H14V4.5c0-.85.3-1.5 1.6-1.5H18V.2C17.5.1 16.4 0 15.3 0 12.8 0 11 1.5 11 4.2V6H8v3h3v9h3V9Z" />
        </svg>
      )
    case 'instagram':
      return (
        <svg {...p} width={18} height={18} strokeWidth={2}>
          <rect x="2" y="2" width="20" height="20" rx="5.5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'wifi':
      return (
        <svg {...p}>
          <path d="M5 12.55a11 11 0 0 1 14 0" />
          <path d="M8.5 16.1a6 6 0 0 1 7 0" />
          <path d="M2 8.82a15 15 0 0 1 20 0" />
          <line x1="12" y1="20" x2="12.01" y2="20" />
        </svg>
      )
    case 'sun':
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      )
    case 'star':
      return (
        <svg {...p} fill="currentColor" stroke="none">
          <path d="m12 2 2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2Z" />
        </svg>
      )
    default:
      return null
  }
}

/** Eyebrow label — small tracked mono with a lit dot. Descriptive words only. */
export const Eyebrow = ({ children, className = '' }) => (
  <span
    className={`mb-5 inline-flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.32em] text-lime ${className}`}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-lime shadow-[0_0_12px_2px_rgba(244, 136, 43,0.7)]" />
    {children}
  </span>
)

/** Reveal wrapper: fade + slide-up on scroll, with optional stagger delay. */
export const Reveal = ({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) => {
  const ref = useReveal(delay)
  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  )
}
