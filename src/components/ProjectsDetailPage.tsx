import { useState, useEffect } from 'react'
import {
  authenticProjects,
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
  const [lightboxPhotos, setLightboxPhotos] = useState<ProjectGalleryPhoto[]>([])
  const [lightboxIndex, setLightboxIndex] = useState<number>(0)

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
            <span className="breadcrumb-current">Our Works Portfolio &amp; Site Documentation</span>
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
            <span className="detail-badge-text">Single-Page Verified Dossier &amp; Site Photography</span>
          </div>
          <h1>Our Works &amp; Executed Industrial Contracts</h1>
          <p className="detail-hero-tagline">
            Complete single-page engineering documentation: Government of Andhra Pradesh AMRUT 2.0
            water transmission networks, JSW Steel &amp; Cement Toranagallu heavy structural
            fabrication and technological erection, certified milestone billing sheets, and authentic
            high-resolution site photographs.
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
              onClick={() => scrollToSection(authenticProjects[0].id)}
            >
              Explore Project Dossiers ↓
            </button>
          </div>
        </div>
      </section>

      {/* Sticky Project Jump Bar */}
      <nav className="project-jump-nav-bar" aria-label="Project quick jump navigation">
        <div className="container jump-nav-inner">
          <span className="jump-nav-label">Jump to Contract:</span>
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
          </div>
        </div>
      </nav>

      {/* Main Content: All 4 Projects Fully Displayed on the Same Page */}
      <main className="detail-main-content">
        <div className="container">
          {authenticProjects.map((project) => {
            const photos = project.galleryPhotos || []
            const leadPhoto = photos[0]
            const photo2 = photos[1]
            const photo3 = photos[2]
            const photo4 = photos[3]

            return (
              <article
                className="full-project-block"
                id={project.id}
                key={project.id}
                aria-label={project.title}
              >
                {/* 1. Project Header Banner */}
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

                {/* 2. Big Landscaped Photo On Top */}
                {leadPhoto && (
                  <div
                    className="project-lead-landscape-card"
                    onClick={() => openLightbox(photos, 0)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View full-screen photograph of ${leadPhoto.title}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        openLightbox(photos, 0)
                      }
                    }}
                  >
                    <div className="lead-photo-img-wrap">
                      <img
                        src={leadPhoto.url}
                        alt={leadPhoto.title}
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="lead-photo-gradient-overlay">
                        <div className="lead-photo-meta-content">
                          <span className="lead-photo-tag">
                            📸 Photo 1 of 4 • Primary Site Landscape • Project {project.projectNumber}
                          </span>
                          <h3 className="lead-photo-title">{leadPhoto.title}</h3>
                          <p className="lead-photo-desc">{leadPhoto.description}</p>
                        </div>
                        <span className="lead-expand-pill">⤢ View Full Screen</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Project Body: Flowing Full-Width Layout (No cramped side column) */}
                <div className="project-body-content">
                  {/* Scope & Contractor Identity + Photo 2 in balanced layout */}
                  <div className="project-scope-credentials-section">
                    <div className="scope-credentials-col">
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
                    </div>

                    {/* Photo 2: Featured Inline Site Photography */}
                    {photo2 && (
                      <div
                        className="project-featured-inline-photo"
                        onClick={() => openLightbox(photos, 1)}
                        role="button"
                        tabIndex={0}
                        aria-label={`View full-screen photograph of ${photo2.title}`}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            openLightbox(photos, 1)
                          }
                        }}
                      >
                        <div className="inline-photo-img-wrap">
                          <img
                            src={photo2.url}
                            alt={photo2.title}
                            loading="lazy"
                            decoding="async"
                          />
                          <div className="inline-photo-hover-overlay">
                            <span className="hover-expand-btn">⤢ View Full Screen</span>
                          </div>
                          <span className="inline-photo-badge">Photo 2 of 4</span>
                        </div>
                        <div className="inline-photo-caption">
                          <span className="inline-cat-tag">{photo2.categoryLabel}</span>
                          <h4>{photo2.title}</h4>
                          <p>{photo2.description}</p>
                        </div>
                        <div className="inline-photo-inspection-note">
                          <span>🔍 In-Field Verification: Certified according to approved engineering drawings and site safety protocols.</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Technical Specifications & Certified Measurement Tables (Full Width) */}
                  <div className="project-technical-tables-section">
                    {/* Technical Table 1: HDPE Pipe Schedule (AMRUT 2.0) */}
                    {project.pipeSchedule && (
                      <div className="project-data-card">
                        <h3>HDPE Pipeline Diameter &amp; Length Schedule (11.7+ km Network)</h3>
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
                  </div>

                  {/* 4. Dual In-Field Engineering Execution Photos (Photo 3 & Photo 4) */}
                  {(photo3 || photo4) && (
                    <div className="project-dual-photos-strip">
                      <div className="dual-photos-heading">
                        <h3>📸 In-Field Execution Photography ({photos.length} Total Site Records)</h3>
                        <span className="photo-prompt-badge">🔍 Click Any Photo for Full Screen</span>
                      </div>

                      <div className="dual-photos-grid">
                        {photo3 && (
                          <div
                            className="dual-photo-card"
                            onClick={() => openLightbox(photos, 2)}
                            role="button"
                            tabIndex={0}
                            aria-label={`View full-screen photograph of ${photo3.title}`}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                openLightbox(photos, 2)
                              }
                            }}
                          >
                            <div className="dual-photo-img-wrap">
                              <img
                                src={photo3.url}
                                alt={photo3.title}
                                loading="lazy"
                                decoding="async"
                              />
                              <div className="dual-photo-hover-overlay">
                                <span className="hover-expand-btn">⤢ View Full Screen</span>
                              </div>
                              <span className="dual-photo-badge">Photo 3 of 4</span>
                            </div>
                            <div className="dual-photo-caption">
                              <span className="inline-cat-tag">{photo3.categoryLabel}</span>
                              <h4>{photo3.title}</h4>
                              <p>{photo3.description}</p>
                            </div>
                          </div>
                        )}

                        {photo4 && (
                          <div
                            className="dual-photo-card"
                            onClick={() => openLightbox(photos, 3)}
                            role="button"
                            tabIndex={0}
                            aria-label={`View full-screen photograph of ${photo4.title}`}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                openLightbox(photos, 3)
                              }
                            }}
                          >
                            <div className="dual-photo-img-wrap">
                              <img
                                src={photo4.url}
                                alt={photo4.title}
                                loading="lazy"
                                decoding="async"
                              />
                              <div className="dual-photo-hover-overlay">
                                <span className="hover-expand-btn">⤢ View Full Screen</span>
                              </div>
                              <span className="dual-photo-badge">Photo 4 of 4</span>
                            </div>
                            <div className="dual-photo-caption">
                              <span className="inline-cat-tag">{photo4.categoryLabel}</span>
                              <h4>{photo4.title}</h4>
                              <p>{photo4.description}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* 5. Quality & Safety Protocols + Project Contact Action Bar */}
                  <div className="project-footer-action-strip">
                    <div className="project-safety-box">
                      <h4>Quality &amp; Site Safety Assurance</h4>
                      <ul className="project-safety-checklist">
                        {project.safetyStandards.map((safe, idx) => (
                          <li key={idx}>
                            <span className="shield-bullet">🛡️</span>
                            <span>{safe}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="project-cta-box">
                      <h4>Interested in Similar Engineering Execution?</h4>
                      <p>
                        Our estimation and project office provides detailed bills of quantities (BOQ),
                        certified equipment schedules, and turnaround plans for EPC contractors.
                      </p>
                      <div className="project-cta-buttons">
                        <button
                          type="button"
                          className="button button--red"
                          onClick={() => onContactClick(project.shortTitle)}
                        >
                          Enquire for This Scope <Arrow />
                        </button>
                        <a href="tel:+919441771333" className="button button--outline-dark">
                          📞 Call: +91 9441771333
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section Bottom Footer Divider */}
                <div className="project-block-divider">
                  <span>End of Project {project.projectNumber} Official Specification</span>
                  <button
                    type="button"
                    className="scroll-top-link"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    ↑ Back to Top
                  </button>
                </div>
              </article>
            )
          })}

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
            <div className="cta-buttons">
              <button
                type="button"
                className="button button--red"
                onClick={() => onContactClick('All Projects & Engineering Tenders')}
              >
                Request Technical Consultation <Arrow />
              </button>
              <a href="tel:+919441771333" className="button button--outline">
                📞 +91 9441771333
              </a>
            </div>
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
