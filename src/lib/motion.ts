import { useEffect, useRef } from 'react'

/*
 * Tiny motion runtime. Everything shares one IntersectionObserver (reveals)
 * and one requestAnimationFrame loop (scroll-linked progress), so the page
 * stays at 60fps no matter how many animated elements are mounted.
 */

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* ---------------------------------------------------------------- reveal */

const revealCallbacks = new WeakMap<Element, () => void>()
let revealObserver: IntersectionObserver | null = null

function getRevealObserver() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          revealCallbacks.get(entry.target)?.()
          revealCallbacks.delete(entry.target)
          revealObserver?.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -7% 0px', threshold: 0 },
    )
  }
  return revealObserver
}

/** Adds `is-in` to the element the first time it scrolls into view. */
export function useInView<T extends Element>(onEnter?: () => void) {
  const ref = useRef<T>(null)
  const cb = useRef(onEnter)
  cb.current = onEnter

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const enter = () => {
      el.classList.add('is-in')
      cb.current?.()
    }
    if (typeof IntersectionObserver === 'undefined') {
      enter()
      return
    }
    const io = getRevealObserver()
    revealCallbacks.set(el, enter)
    io.observe(el)
    return () => {
      io.unobserve(el)
      revealCallbacks.delete(el)
    }
  }, [])

  return ref
}

/* --------------------------------------------------------- scroll progress */

/**
 * through — 0 when the element's top meets the viewport bottom, 1 when its bottom leaves the top
 * sticky  — 0..1 across a tall section whose child is position: sticky
 * focus   — 0 when the top reaches 90% of the viewport, 1 when the bottom reaches 50%
 * exit    — 0 while the element's top is at the viewport top, 1 when it has fully scrolled away
 */
export type ScrollMode = 'through' | 'sticky' | 'focus' | 'exit'

interface Track {
  el: HTMLElement
  mode: ScrollMode
  cur: number
  target: number
  smooth: number
  onUpdate: { current?: (p: number) => void }
}

const tracks = new Set<Track>()
let frameId = 0
let viewport = typeof window !== 'undefined' ? window.innerHeight : 800

const clamp01 = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n)

function measure(t: Track) {
  const r = t.el.getBoundingClientRect()
  switch (t.mode) {
    case 'sticky':
      return clamp01(-r.top / Math.max(1, r.height - viewport))
    case 'focus':
      return clamp01((viewport * 0.9 - r.top) / (viewport * 0.4 + r.height))
    case 'exit':
      return clamp01(-r.top / Math.max(1, r.height))
    default:
      return clamp01((viewport - r.top) / (viewport + r.height))
  }
}

function frame() {
  frameId = 0
  let moving = false
  // Read every rect first, then write, so layout is never thrashed.
  for (const t of tracks) t.target = measure(t)
  for (const t of tracks) {
    const delta = t.target - t.cur
    if (Math.abs(delta) < 0.0004) {
      if (t.cur === t.target) continue
      t.cur = t.target
    } else {
      t.cur += delta * t.smooth
      moving = true
    }
    t.el.style.setProperty('--p', t.cur.toFixed(4))
    t.onUpdate.current?.(t.cur)
  }
  if (moving) frameId = requestAnimationFrame(frame)
}

export function requestScrollFrame() {
  if (!frameId) frameId = requestAnimationFrame(frame)
}

if (typeof window !== 'undefined') {
  window.addEventListener('scroll', requestScrollFrame, { passive: true })
  window.addEventListener('resize', () => {
    viewport = window.innerHeight
    requestScrollFrame()
  })
}

/** Writes a smoothed `--p` (0..1) custom property on the element as the page scrolls. */
export function useScrollProgress<T extends HTMLElement>(
  mode: ScrollMode = 'through',
  options: { smooth?: number; onUpdate?: (p: number) => void } = {},
) {
  const ref = useRef<T>(null)
  const onUpdate = useRef(options.onUpdate)
  onUpdate.current = options.onUpdate
  const smooth = options.smooth ?? 0.14

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const track: Track = {
      el,
      mode,
      cur: 0,
      target: 0,
      smooth: prefersReducedMotion() ? 1 : smooth,
      onUpdate,
    }
    track.cur = measure(track)
    el.style.setProperty('--p', track.cur.toFixed(4))
    onUpdate.current?.(track.cur)
    tracks.add(track)
    requestScrollFrame()
    return () => {
      tracks.delete(track)
    }
  }, [mode, smooth])

  return ref
}
