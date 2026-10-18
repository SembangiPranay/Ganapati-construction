import { useEffect } from 'react'
import { ProjectGalleryPhoto } from '../data/projectsData'
import { CloseIcon } from './CorporateIcons'

interface FullScreenImageViewerProps {
  photos: ProjectGalleryPhoto[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function FullScreenImageViewer({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: FullScreenImageViewerProps) {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) {
          onNavigate(currentIndex - 1)
        } else {
          onNavigate(photos.length - 1)
        }
      } else if (e.key === 'ArrowRight') {
        if (currentIndex < photos.length - 1) {
          onNavigate(currentIndex + 1)
        } else {
          onNavigate(0)
        }
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, currentIndex, photos.length, onClose, onNavigate])

  if (!isOpen || photos.length === 0) return null

  const currentPhoto = photos[currentIndex] || photos[0]

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    onNavigate(currentIndex > 0 ? currentIndex - 1 : photos.length - 1)
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    onNavigate(currentIndex < photos.length - 1 ? currentIndex + 1 : 0)
  }

  return (
    <div
      className="lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Full-screen photo viewer"
    >
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        {/* Top Control Bar */}
        <header className="lightbox-header">
          <div className="lightbox-title-meta">
            <span className="lightbox-badge">{currentPhoto.categoryLabel}</span>
            {currentPhoto.projectTitle && (
              <span className="lightbox-project-tag">{currentPhoto.projectTitle}</span>
            )}
            <h3 className="lightbox-heading">{currentPhoto.title}</h3>
          </div>

          <div className="lightbox-actions">
            <span className="lightbox-counter">
              {currentIndex + 1} / {photos.length}
            </span>
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={onClose}
              aria-label="Close full-screen image viewer"
            >
              <CloseIcon />
            </button>
          </div>
        </header>

        {/* Main Stage Image with Navigation Arrows */}
        <div className="lightbox-stage">
          <button
            type="button"
            className="lightbox-nav-btn lightbox-nav-btn--prev"
            onClick={handlePrev}
            aria-label="Previous photograph"
          >
            ‹
          </button>

          <div className="lightbox-image-wrap">
            <img
              src={currentPhoto.url}
              alt={currentPhoto.title}
              className="lightbox-img"
              loading="eager"
            />
          </div>

          <button
            type="button"
            className="lightbox-nav-btn lightbox-nav-btn--next"
            onClick={handleNext}
            aria-label="Next photograph"
          >
            ›
          </button>
        </div>

        {/* Caption & Metadata Footer */}
        <footer className="lightbox-footer">
          <div className="lightbox-caption">
            <p>{currentPhoto.description}</p>
          </div>

          {/* Mini Thumbnail Ribbon */}
          {photos.length > 1 && (
            <div className="lightbox-thumbnails-ribbon" aria-label="Photo thumbnails">
              {photos.map((p, idx) => (
                <button
                  type="button"
                  key={p.id}
                  className={`lightbox-thumb-btn ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => onNavigate(idx)}
                  aria-label={`View photo ${idx + 1}: ${p.title}`}
                >
                  <img src={p.url} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </footer>
      </div>
    </div>
  )
}
