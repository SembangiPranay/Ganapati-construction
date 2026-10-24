import type { CSSProperties, ElementType, KeyboardEvent, ReactNode, MouseEvent } from 'react'
import { useInView, useScrollProgress, prefersReducedMotion } from '../lib/motion'

type Vars = CSSProperties & Record<`--${string}`, string | number>

/* ------------------------------------------------------------------ icons */

export const Arrow = ({ className = '' }: { className?: string }) => (
  <svg className={`ico ico-arrow ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true">
    <path d="M3 12h17M14 6l6 6-6 6" />
  </svg>
)

export const ArrowUpRight = ({ className = '' }: { className?: string }) => (
  <svg className={`ico ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true">
    <path d="M6 18 18 6M8 6h10v10" />
  </svg>
)

export const PhoneIcon = () => (
  <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M7.2 3.5 10 7.8 7.8 10a15 15 0 0 0 6.2 6.2l2.2-2.2 4.3 2.8c.5.3.7.9.5 1.5-.6 1.8-2.2 3-4.1 3C9 20.7 3.3 15 2.7 7.1c0-1.9 1.2-3.5 3-4.1.6-.2 1.2 0 1.5.5Z" />
  </svg>
)

export const WhatsAppIcon = () => (
  <svg className="ico" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
)

/* ------------------------------------------------------------------ brand */

export function Brand({ onClick, compact = false }: { onClick?: () => void; compact?: boolean }) {
  return (
    <a
      className={`brand ${compact ? 'brand--compact' : ''}`}
      href="#/"
      onClick={(e) => {
        if (!onClick) return
        e.preventDefault()
        onClick()
      }}
      aria-label="S Ganapati Construction — home"
    >
      <img src="/assets/ganapati-logo.png" alt="" width={34} height={43} decoding="async" />
      <span className="brand-word">
        <strong>S Ganapati</strong>
        <small>Construction</small>
      </span>
    </a>
  )
}

/* ---------------------------------------------------------------- reveals */

/** Fades + lifts its content into place the first time it enters the viewport. */
export function Reveal({
  as = 'div',
  className = '',
  delay = 0,
  children,
  style,
  ...rest
}: {
  as?: ElementType
  className?: string
  delay?: number
  children?: ReactNode
  style?: CSSProperties
  [key: string]: unknown
}) {
  const ref = useInView<HTMLElement>()
  const Tag = as
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ '--d': `${delay}ms`, ...style } as Vars} {...rest}>
      {children}
    </Tag>
  )
}

export type Line = string | { em: string }

/** Heading whose words rise out of a mask, one after another. */
export function SplitHeading({
  as = 'h2',
  lines,
  className = '',
  delay = 0,
  id,
}: {
  as?: ElementType
  lines: Line[]
  className?: string
  delay?: number
  id?: string
}) {
  const ref = useInView<HTMLElement>()
  const Tag = as
  let index = 0
  return (
    <Tag ref={ref} id={id} className={`split ${className}`} style={{ '--d': `${delay}ms` } as Vars}>
      {lines.map((line, li) => {
        const text = typeof line === 'string' ? line : line.em
        const words = text.split(' ').map((word, wi, all) => (
          <span key={wi}>
            <span className="w">
              <span className="wi" style={{ '--i': index++ } as Vars}>
                {word}
              </span>
            </span>
            {wi < all.length - 1 ? ' ' : ''}
          </span>
        ))
        return (
          <span className="line" key={li}>
            {typeof line === 'string' ? words : <em>{words}</em>}
          </span>
        )
      })}
    </Tag>
  )
}

/** Small mono label used above headings: "(02) — Capabilities". */
export function Kicker({ index, children, className = '' }: { index?: string; children: ReactNode; className?: string }) {
  return (
    <Reveal as="p" className={`kicker ${className}`}>
      {index && <span className="kicker-i">({index})</span>}
      <span className="kicker-rule" aria-hidden="true" />
      <span>{children}</span>
    </Reveal>
  )
}

/* ------------------------------------------------------------------ media */

/**
 * Photo that wipes open when it enters the viewport and drifts slightly
 * against the scroll for depth.
 */
export function Media({
  src,
  alt,
  className = '',
  eager = false,
  parallax = true,
  ratio,
  onClick,
  children,
}: {
  src: string
  alt: string
  className?: string
  eager?: boolean
  parallax?: boolean
  ratio?: string
  onClick?: (e: MouseEvent<HTMLElement>) => void
  children?: ReactNode
}) {
  const reveal = useInView<HTMLDivElement>()
  const scroll = useScrollProgress<HTMLDivElement>('through')
  return (
    <div
      ref={reveal}
      className={`media ${onClick ? 'media--click' : ''} ${className}`}
      style={ratio ? ({ aspectRatio: ratio } as CSSProperties) : undefined}
      onClick={onClick}
      {...(onClick
        ? {
            role: 'button',
            tabIndex: 0,
            'aria-label': `View photograph: ${alt}`,
            onKeyDown: (e: KeyboardEvent<HTMLDivElement>) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                e.currentTarget.click()
              }
            },
          }
        : {})}
    >
      <div ref={scroll} className={`media-inner ${parallax ? 'media-inner--px' : ''}`}>
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          {...(eager ? { fetchPriority: 'high' as const } : {})}
        />
      </div>
      {children}
    </div>
  )
}

/* ---------------------------------------------------------------- numbers */

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

/** Counts up to `to` the first time it is seen. Writes to the DOM directly — no re-renders. */
export function Counter({
  to,
  decimals = 0,
  suffix = '',
  duration = 2000,
}: {
  to: number
  decimals?: number
  suffix?: string
  duration?: number
}) {
  const format = (n: number) =>
    n.toLocaleString('en-IN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix

  const ref = useInView<HTMLSpanElement>(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion()) {
      el.textContent = format(to)
      return
    }
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      el.textContent = format(to * easeOutExpo(t))
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  })

  return (
    <span ref={ref} className="counter" aria-label={format(to)}>
      {format(0)}
    </span>
  )
}

/* --------------------------------------------------------------- marquee */

/** Outlined type band that slides sideways as the page scrolls. */
export function ScrollMarquee({ items, reverse = false, className = '' }: { items: string[]; reverse?: boolean; className?: string }) {
  const ref = useScrollProgress<HTMLDivElement>('through', { smooth: 0.1 })
  const group = (
    <div className="smarquee-group">
      {items.map((item, i) => (
        <span key={i}>
          {item}
          <i aria-hidden="true" />
        </span>
      ))}
    </div>
  )
  return (
    <div ref={ref} className={`smarquee ${reverse ? 'smarquee--rev' : ''} ${className}`} role="img" aria-label={items.join(', ')}>
      <div className="smarquee-track" aria-hidden="true">
        {group}
        {group}
      </div>
    </div>
  )
}

/** Gridline bubbles — the A / B / C / D column markers of a structural drawing. */
export function GridLines({ labels = ['A', 'B', 'C', 'D', 'E'] }: { labels?: string[] }) {
  return (
    <div className="gridlines" aria-hidden="true">
      {labels.map((l) => (
        <span key={l}>
          <b>{l}</b>
        </span>
      ))}
    </div>
  )
}
