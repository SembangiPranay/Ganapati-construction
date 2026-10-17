import { useState } from 'react'
import { projectsData } from '../data/servicesData'

interface ProjectsDetailPageProps {
  onNavigateHome: () => void
  onContactClick: (projectType?: string) => void
}

const Arrow = () => <span aria-hidden="true">→</span>
const BackArrow = () => <span aria-hidden="true">←</span>

export default function ProjectsDetailPage({ onNavigateHome, onContactClick }: ProjectsDetailPageProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const categories = ['All', 'Structural Fabrication', 'Structural Erection', 'Heavy Equipment Works', 'Industrial Construction']

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category.toLowerCase().includes(activeCategory.toLowerCase()))

  return (
    <div className="projects-detail-view">
      {/* Breadcrumb */}
      <section className="detail-breadcrumb-bar">
        <div className="container breadcrumb-inner">
          <div className="breadcrumb-links">
            <button type="button" className="breadcrumb-btn" onClick={onNavigateHome}>
              Home
            </button>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Projects Showcase</span>
          </div>
          <button type="button" className="button button--outline-dark button--small" onClick={onNavigateHome}>
            <BackArrow /> Back to Overview
          </button>
        </div>
      </section>

      {/* Hero */}
      <section className="detail-hero">
        <div className="detail-hero-backdrop" style={{ backgroundImage: "url('/assets/plant.jpg')" }} />
        <div className="detail-hero-overlay" />
        <div className="container detail-hero-inner">
          <div className="detail-hero-badge">
            <span className="detail-number-badge green">PROJ</span>
            <span className="detail-badge-text">Track Record &amp; Portfolio</span>
          </div>
          <h1>Our Work Speaks for Itself</h1>
          <p className="detail-hero-tagline">
            Explore our delivered industrial fabrication, erection, and equipment installation projects across South India.
          </p>
          <div className="detail-hero-actions">
            <button type="button" className="button button--red" onClick={() => onContactClick()}>
              Discuss Your Project <Arrow />
            </button>
            <button type="button" className="button button--outline" onClick={onNavigateHome}>
              Return to Home
            </button>
          </div>
        </div>
      </section>

      {/* Project Filters and Grid */}
      <main className="detail-main-content">
        <div className="container">
          {/* Category Filter Pills */}
          <div className="project-filter-bar">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                className={`project-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-showcase-grid">
            {filteredProjects.map((project) => (
              <article className="project-showcase-card" key={project.id}>
                <div className="project-card-image">
                  <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
                  <span className="project-card-num">{project.id}</span>
                  <span className="project-card-badge">{project.category}</span>
                </div>
                <div className="project-card-body">
                  <div className="project-card-meta">
                    <span className="project-loc">📍 {project.location}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.scope}</p>

                  <div className="project-metrics-row">
                    {project.metrics.map((m, idx) => (
                      <span className="project-metric-pill" key={idx}>
                        ✓ {m}
                      </span>
                    ))}
                  </div>

                  <div className="project-card-footer">
                    <button
                      type="button"
                      className="button button--red button--small button--full"
                      onClick={() => onContactClick(project.title)}
                    >
                      Enquire Similar Project <Arrow />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom CTA Box */}
          <div className="projects-bottom-cta">
            <div className="cta-copy">
              <span className="eyebrow eyebrow--green">Plan Your Next Phase</span>
              <h2>Ready to Execute Your Industrial Construction?</h2>
              <p>Contact our project management team in Visakhapatnam for technical proposals, BOQ estimation, and site surveys.</p>
            </div>
            <button type="button" className="button button--red" onClick={() => onContactClick()}>
              Get in Touch Today <Arrow />
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
