import { useEffect, useRef } from 'react'

export interface LightboxImage {
  src: string
  title?: string
  caption?: string
}

interface LightboxProps {
  images: LightboxImage[]
  index: number
  onIndex: (index: number) => void
  onClose: () => void
}

export default function Lightbox({ images, index, onIndex, onClose }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const startX = useRef<number | null>(null)
  const count = images.length
  const image = images[index]
  const step = (dir: number) => onIndex((index + dir + count) % count)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    document.documentElement.classList.add('is-locked')
    return () => {
      document.documentElement.classList.remove('is-locked')
      previous?.focus?.()
    }
  }, [])

  if (!image) return null

  return (
    <div
      className="lb"
      role="dialog"
      aria-modal="true"
      aria-label={image.title ?? 'Photograph'}
      onPointerDown={(e) => {
        startX.current = e.clientX
      }}
      onPointerUp={(e) => {
        if (startX.current === null) return
        const dx = e.clientX - startX.current
        startX.current = null
        if (Math.abs(dx) > 60) step(dx < 0 ? 1 : -1)
      }}
    >
      <div className="lb-top mono">
        <span>
          {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
        </span>
        <button ref={closeRef} type="button" className="lb-close" onClick={onClose} aria-label="Close viewer">
          Close <span aria-hidden="true">✕</span>
        </button>
      </div>

      <figure className="lb-figure">
        <img key={image.src} src={image.src} alt={image.caption ?? image.title ?? ''} draggable={false} />
        {(image.title || image.caption) && (
          <figcaption>
            {image.title && <strong>{image.title}</strong>}
            {image.caption && <span>{image.caption}</span>}
          </figcaption>
        )}
      </figure>

      {count > 1 && (
        <>
          <button type="button" className="lb-nav lb-nav--prev" onClick={() => step(-1)} aria-label="Previous photograph">
            <span aria-hidden="true">←</span>
          </button>
          <button type="button" className="lb-nav lb-nav--next" onClick={() => step(1)} aria-label="Next photograph">
            <span aria-hidden="true">→</span>
          </button>
        </>
      )}
    </div>
  )
}
