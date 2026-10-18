import { useState, useEffect } from 'react'
import {
  authenticProjects,
  masterGalleryPhotos,
  OfficialProject,
  ProjectGalleryPhoto,
} from '../data/projectsData'
import FullScreenImageViewer from './FullScreenImageViewer'

interface ProjectsDetailPageProps {
  initialProjectId?: string
  onNavigateHome: () => void
  onContactClick: (projectType?: string) => void
}

const Arrow = () => <span aria-hidden="true">→</span>
const BackArrow = () => <span aria-hidden="true">←</span>

export default function ProjectsDetailPage({
  initialProjectId,
  onNavigateHome,
  onContactClick,
}: ProjectsDetailPageProps) {
  // Auto-scroll to project if deep-linked or navigated from home
  useEffect(() => {
    if (initialProjectId) {
      const timer = setTimeout(() => {
        const el = document.getElementById(initialProjectId)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 120)
      return () => clearTimeout(timer)
    }
  }, [initialProjectId])

  // Gallery Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false)
  const [lightboxPhotos, setLightboxPhotos] = useState<ProjectGalleryPhoto[]>(masterGalleryPhotos)
  const [lightboxIndex, setLightboxIndex] = useState<number>(0)

  // Master Gallery Category Filter
  const [activeGalleryFilter, setActiveGalleryFilter] = useState<string>('all')

  const galleryCategories = [
    { id: 'all', label: `All 28 Photographs (${masterGalleryPhotos.length})` },
    {
      id: 'steel-structures',
      label: `Heavy Steel Structures (${masterGalleryPhotos.filter((p) => p.category === 'steel-structures').length})`,
    },
    {
      id: 'crane-lifts',
      label: `Crane Lifts & Rigging (${masterGalleryPhotos.filter((p) => p.category === 'crane-lifts').length})`,
    },
    {
      id: 'bridges-fob',
      label: `Bridges & Railway FOBs (${masterGalleryPhotos.filter((p) => p.category === 'bridges-fob').length})`,
    },
    {
      id: 'foundations-civil',
      label: `Civil Foundations (${masterGalleryPhotos.filter((p) => p.category === 'foundations-civil').length})`,
    },
    {
      id: 'utilities',
      label: `Piping & Utilities (${masterGalleryPhotos.filter((p) => p.category === 'utilities').length})`,
    },
  ]

  const filteredMasterPhotos = masterGalleryPhotos.filter((p) => {
    if (activeGalleryFilter === 'all') return true
    return p.category === activeGalleryFilter
  })

  // Open Lightbox handler
  const openLightbox = (photos: ProjectGalleryPhoto[], index: number) => {
    setLightboxPhotos(photos)
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  // Quick jump helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="projects-single-page-view">
      {/* Breadcrumb Bar */}
      <section className="detail-breadcrumb-bar">
        <div className="container breadcrumb-inner">
          <div className="breadcrumb-links">
            <button type="button" className="breadcrumb-btn" onClick={onNavigateHome}>
              Home
            </button>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Our Works Portfolio &amp; Site Photography</span>
          </div>
          <button
            type="button"
            className="button button--outline-dark button--small"
            onClick={onNavigateHome}
          >
            <BackArrow /> Back to Home Overview
          </button>
        </div>
      </section>

      {/* Hero Banner */}
      <section className="detail-hero">
        <div
          className="detail-hero-backdrop"
          style={{ backgroundImage: "url('/projects/0a98a433-bbc2-4c61-8704-a8c79019ee9a.jpg')" }}
        />
        <div className="detail-hero-overlay" />
        <div className="container detail-hero-inner">
          <div className="detail-hero-badge">
            <span className="detail-number-badge green">PORTFOLIO</span>
            <span className="detail-badge-text">Single-Page Verified Dossier &amp; Full Gallery</span>
          </div>
          <h1>Our Works &amp; Executed Industrial Contracts</h1>
          <p className="detail-hero-tagline">
            Complete single-page engineering documentation: Government of Andhra Pradesh AMRUT 2.0
            water transmission networks, JSW Steel &amp; Cement Toranagallu heavy structural
            fabrication and technological erection, certified milestone billing sheets, and 28
            authentic high-resolution site photographs.
          </p>
          <div className="detail-hero-actions">
            <button
              type="button"
              className="button button--red"
              onClick={() => onContactClick('All Works & Tenders')}
            >
              Enquire for Your Project <Arrow />
            </button>
            <button
              type="button"
              className="button button--outline"
              onClick={() => scrollToSection('master-gallery')}
            >
              📸 View 28-Photo Master Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Sticky Project Jump Bar */}
      <nav className="project-jump-nav-bar" aria-label="Project quick jump navigation">
        <div className="container jump-nav-inner">
          <span className="jump-nav-label">Quick Jump:</span>
          <div className="jump-nav-links">
            {authenticProjects.map((proj) => (
              <button
                type="button"
                key={proj.id}
                className="jump-nav-btn"
                onClick={() => scrollToSection(proj.id)}
              >
                <b>{proj.projectNumber}.</b> {proj.shortTitle}
              </button>
            ))}
            <button
              type="button"
              className="jump-nav-btn jump-nav-btn--gallery"
              onClick={() => scrollToSection('master-gallery')}
            >
              📸 Master Photo Gallery (28)
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content: All 4 Projects Fully Displayed on the Same Page */}
      <main className="detail-main-content">
        <div className="container">
          {authenticProjects.map((project, pIndex) => (
            <article
              className="full-project-block"
              id={project.id}
              key={project.id}
              aria-label={project.title}
            >
              {/* Project Header Banner */}
              <div className="project-block-header">
                <div className="project-block-meta-row">
                  <span className="project-block-number">Project {project.projectNumber}</span>
                  <span className="project-block-seal">{project.verifiedBadge}</span>
                  <span className="project-block-cat">{project.categoryLabel}</span>
                  <span className="project-block-contract-type">{project.contractType}</span>
                </div>

                <h2 className="project-block-title">{project.title}</h2>

                <div className="project-block-submeta">
                  <span>
                    📍 <strong>Location:</strong> {project.location}, {project.districtState}
                  </span>
                  <span>
                    🏛️ <strong>Issuing Entity:</strong> {project.client}
                  </span>
                  <span>
                    🏢 <strong>End Beneficiary:</strong> {project.endClient}
                  </span>
                  <span>
                    📄 <strong>Contract Ref:</strong> <code>{project.workOrderNo}</code>
                  </span>
                </div>

                {/* Key Metrics Strip */}
                <div className="project-block-metrics-strip">
                  {project.keyMetrics.map((m, idx) => (
                    <div className="project-metric-box" key={idx}>
                      <span className="project-metric-val">{m.value}</span>
                      <strong className="project-metric-lbl">{m.label}</strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2-Column Responsive Layout: Engineering Data + Prominent Photos */}
              <div className="project-block-grid">
                {/* Left Column: Official Specifications & Technical Data */}
                <div className="project-info-column">
                  {/* Executive Summary */}
                  <div className="project-data-card">
                    <h3>Executive Summary &amp; Scope Overview</h3>
                    <p className="project-summary-lead">{project.summary}</p>
                    <ul className="project-scope-checklist">
                      {project.detailedScope.map((item, idx) => (
                        <li key={idx}>
                          <span className="check-bullet">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Official Credentials & Compliance Card */}
                  <div className="project-data-card">
                    <h3>Official Credentials &amp; Contractor Identity</h3>
                    <dl className="project-cred-dl">
                      <dt>Contract Code:</dt>
                      <dd>
                        <code>{project.workOrderNo}</code>
                      </dd>
                      <dt>Issuing Authority:</dt>
                      <dd>{project.client}</dd>
                      <dt>Executing Contractor:</dt>
                      <dd>
                        <strong>M/S S GANAPATI CONSTRUCTION</strong>
                      </dd>
                      <dt>GSTIN:</dt>
                      <dd>
                        <code>37DIPPG2975E1ZX</code>
                      </dd>
                      <dt>Proprietor / Key Contact:</dt>
                      <dd>Garaka Sreedevi / G Suresh Reddy (Cell: 9441771333)</dd>
                      <dt>Contract Validity:</dt>
                      <dd>{project.validityPeriod}</dd>
                    </dl>
                  </div>

                  {/* Technical Table 1: HDPE Pipe Schedule (AMRUT 2.0) */}
                  {project.pipeSchedule && (
                    <div className="project-data-card">
                      <h3>HDPE Pipeline Diameter &amp; Length Schedule (11.7+ km)</h3>
                      <div className="table-responsive-wrapper">
                        <table className="project-data-table">
                          <thead>
                            <tr>
                              <th>Pipe Diameter</th>
                              <th>Total Running Meters</th>
                              <th>Specification</th>
                            </tr>
                          </thead>
                          <tbody>
                            {project.pipeSchedule.map((p, idx) => (
                              <tr key={idx}>
                                <td>
                                  <strong>{p.dia}</strong>
                                </td>
                                <td>
                                  <b>{p.length}</b>
                                </td>
                                <td>{p.specification || 'PE100 High-Density Polyethylene'}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Technical Table 2: Contract Rates (JSW Toranagallu) */}
                  {project.ratesSchedule && (
                    <div className="project-data-card">
                      <h3>Contract Rate Schedule (Per MT Basis)</h3>
                      <div className="table-responsive-wrapper">
                        <table className="project-data-table">
                          <thead>
                            <tr>
                              <th>Job Description</th>
                              <th>UOM</th>
                              <th>Unit Rate</th>
                              <th>Rate In Words</th>
                            </tr>
                          </thead>
                          <tbody>
                            {project.ratesSchedule.map((r, idx) => (
                              <tr key={idx}>
                                <td>
                                  <strong>{r.item}</strong>
                                </td>
                                <td>{r.uom}</td>
                                <td>
                                  <span className="rate-badge">{r.rate}</span>
                                </td>
                                <td>{r.inwards}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Technical Table 3: Certified Running Account Billing Items (RA 01 & RA 02) */}
                  {project.executedBillingItems && (
                    <div className="project-data-card">
                      <h3>Certified &amp; Executed Quantities (Running Account Measurement)</h3>
                      <div className="table-responsive-wrapper">
                        <table className="project-data-table">
                          <thead>
                            <tr>
                              <th>Item</th>
                              <th>Particulars of Work</th>
                              <th>UOM</th>
                              <th>Rate</th>
                              <th>Quantity</th>
                              <th>Certified Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            {project.executedBillingItems.map((b, idx) => (
                              <tr key={idx}>
                                <td>{b.slNo}</td>
                                <td>{b.description}</td>
                                <td>{b.uom}</td>
                                <td>{b.rate}</td>
                                <td>
                                  <strong>{b.qty}</strong>
                                </td>
                                <td>
                                  <strong>{b.amount}</strong>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Financial Milestone Summary (If applicable) */}
                  {project.financialSummary && (
                    <div className="project-data-card project-data-card--highlight">
                      <h3>Milestone Financial Summary</h3>
                      <div className="financial-milestone-grid">
                        {project.financialSummary.billNo && (
                          <div className="fin-box">
                            <span className="fin-lbl">Bill Reference</span>
                            <strong className="fin-val">{project.financialSummary.billNo}</strong>
                          </div>
                        )}
                        {project.financialSummary.invoiceNo && (
                          <div className="fin-box">
                            <span className="fin-lbl">Tax Invoice</span>
                            <strong className="fin-val">{project.financialSummary.invoiceNo}</strong>
                          </div>
                        )}
                        {project.financialSummary.grossAmount && (
                          <div className="fin-box">
                            <span className="fin-lbl">Gross Billed Value</span>
                            <strong className="fin-val fin-val--gross">
                              {project.financialSummary.grossAmount}
                            </strong>
                          </div>
                        )}
                        {project.financialSummary.cumulativeValueToDate && (
                          <div className="fin-box">
                            <span className="fin-lbl">Cumulative Value to Date</span>
                            <strong className="fin-val fin-val--cumulative">
                              {project.financialSummary.cumulativeValueToDate}
                            </strong>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Safety Protocols */}
                  <div className="project-data-card">
                    <h3>Quality &amp; Site Safety Assurance</h3>
                    <ul className="project-safety-checklist">
                      {project.safetyStandards.map((safe, idx) => (
                        <li key={idx}>
                          <span className="shield-bullet">🛡️</span>
                          <span>{safe}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column: Prominent Project Site Photography Showcase */}
                <div className="project-photos-column">
                  <div className="project-photos-header">
                    <h3>📸 Authentic Site Photography ({project.galleryPhotos?.length || 4})</h3>
                    <span className="photo-prompt-badge">🔍 Click Any Photo for Full Screen</span>
                  </div>

                  <div className="project-photos-showcase-grid">
                    {(project.galleryPhotos && project.galleryPhotos.length > 0
                      ? project.galleryPhotos
                      : project.imageSlots
                    ).map((photoItem, photoIdx) => {
                      const photoUrl =
                        'url' in photoItem
                          ? (photoItem as ProjectGalleryPhoto).url
                          : (photoItem as { imageUrl?: string }).imageUrl || project.coverImage

                      const photoTitle = photoItem.title
                      const photoDesc = photoItem.description

                      return (
                        <div
                          className="project-photo-card"
                          key={photoIdx}
                          onClick={() => {
                            const pList =
                              project.galleryPhotos && project.galleryPhotos.length > 0
                                ? project.galleryPhotos
                                : masterGalleryPhotos
                            openLightbox(pList, photoIdx)
                          }}
                        >
                          <div className="project-photo-img-wrap">
                            <img
                              src={photoUrl}
                              alt={photoTitle}
                              loading="lazy"
                              decoding="async"
                            />
                            <div className="photo-card-hover-overlay">
                              <span className="hover-expand-btn">⤢ View Full Screen</span>
                            </div>
                            <span className="photo-corner-badge">Photo {photoIdx + 1}</span>
                          </div>

                          <div className="project-photo-caption">
                            <h4>{photoTitle}</h4>
                            <p>{photoDesc}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Card Bottom CTA for Project */}
                  <div className="project-side-cta">
                    <h4>Interested in Similar Engineering Execution?</h4>
                    <p>
                      Our estimation and project office provides detailed bills of quantities (BOQ),
                      certified equipment schedules, and turnaround plans for EPC contractors.
                    </p>
                    <div className="project-side-cta-buttons">
                      <button
                        type="button"
                        className="button button--red"
                        onClick={() => onContactClick(project.shortTitle)}
                      >
                        Enquire for This Scope <Arrow />
                      </button>
                      <a
                        href="tel:+919441771333"
                        className="button button--outline-dark"
                      >
                        📞 Call: +91 9441771333
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section Bottom Footer Divider */}
              <div className="project-block-divider">
                <span>End of Project {project.projectNumber} Specification</span>
                <button
                  type="button"
                  className="scroll-top-link"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  ↑ Back to Top
                </button>
              </div>
            </article>
          ))}

          {/* ==========================================================================
             MASTER 28-PHOTO SITE GALLERY SHOWCASE (FULL PAGE IMMERSIVE GRID)
             ========================================================================== */}
          <section className="master-site-gallery-section" id="master-gallery">
            <div className="master-gallery-header">
              <span className="eyebrow eyebrow--green">Comprehensive Visual Archive</span>
              <h2>Authentic Project Site Photography (28 Verified Records)</h2>
              <p>
                Explore high-resolution, unedited site photographs documenting heavy structural steel
                frameworks, high-altitude crawler crane rigging, composite railway and bridge girders,
                foundation bolt grouting, and public municipal utility installations across Andhra Pradesh
                and Karnataka.
              </p>
            </div>

            {/* Gallery Category Filter Pills */}
            <div className="master-gallery-filter-bar">
              {galleryCategories.map((cat) => (
                <button
                  type="button"
                  key={cat.id}
                  className={`master-filter-pill ${activeGalleryFilter === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveGalleryFilter(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Full Width Master Photo Grid */}
            <div className="master-gallery-cards-grid">
              {filteredMasterPhotos.map((photo, pIdx) => (
                <article
                  className="master-photo-card"
                  key={photo.id}
                  onClick={() => openLightbox(filteredMasterPhotos, pIdx)}
                >
                  <div className="master-photo-img-wrap">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="master-photo-overlay">
                      <span className="fullscreen-pill">⤢ Full Screen</span>
                      <span className="category-pill">{photo.categoryLabel}</span>
                    </div>
                    <span className="master-photo-idx">#{pIdx + 1}</span>
                  </div>

                  <div className="master-photo-meta">
                    {photo.projectTitle && (
                      <span className="master-proj-tag">{photo.projectTitle}</span>
                    )}
                    <h3>{photo.title}</h3>
                    <p>{photo.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Bottom Tender Consultation Banner */}
          <div className="projects-bottom-cta">
            <div className="cta-copy">
              <span className="eyebrow eyebrow--green">Tenders &amp; Turnaround Packages</span>
              <h2>Have Technical Drawings, Tonnages, or Pipeline Alignments?</h2>
              <p>
                S Ganapati Construction provides comprehensive technical bids, crane lift plans,
                equipment mobilization schedules, and OHSAS 18001 safety dossiers for EPC contractors
                and municipal authorities across India.
              </p>
            </div>
            <button
              type="button"
              className="button button--red"
              onClick={() => onContactClick('All Projects & Engineering Tenders')}
            >
              Request Technical Consultation <Arrow />
            </button>
          </div>
        </div>
      </main>

      {/* Full-Screen Image Lightbox Viewer */}
      <FullScreenImageViewer
        photos={lightboxPhotos}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  )
}
