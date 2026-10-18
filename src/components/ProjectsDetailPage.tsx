import { useState } from 'react'
import { authenticProjects, OfficialProject } from '../data/projectsData'
import ProjectDossierModal from './ProjectDossierModal'

interface ProjectsDetailPageProps {
  onNavigateHome: () => void
  onContactClick: (projectType?: string) => void
}

const Arrow = () => <span aria-hidden="true">→</span>
const BackArrow = () => <span aria-hidden="true">←</span>

export default function ProjectsDetailPage({ onNavigateHome, onContactClick }: ProjectsDetailPageProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [selectedProject, setSelectedProject] = useState<OfficialProject | null>(null)
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const filterOptions = [
    { id: 'all', label: 'All 4 Flagship Projects' },
    { id: 'water', label: 'AP AMRUT 2.0 Water Schemes' },
    { id: 'jsw', label: 'JSW Steel & Cement (Toranagallu)' },
    { id: 'ra-bills', label: 'Verified RA Milestone Bills' },
  ]

  const filteredProjects = authenticProjects.filter((p) => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'water') return p.category === 'water-utilities'
    if (activeFilter === 'jsw') return p.category === 'steel-metallurgical' || p.category === 'cement-plants'
    if (activeFilter === 'ra-bills') return p.contractType === 'Running Account (RA) Milestone Bill'
    return true
  })

  const handleOpenDossier = (project: OfficialProject) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

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
            <span className="breadcrumb-current">Our Works &amp; Executed Contracts</span>
          </div>
          <button type="button" className="button button--outline-dark button--small" onClick={onNavigateHome}>
            <BackArrow /> Back to Overview
          </button>
        </div>
      </section>

      {/* Hero Banner */}
      <section className="detail-hero">
        <div className="detail-hero-backdrop" style={{ backgroundImage: "url('/assets/crane-high-lift.jpg')" }} />
        <div className="detail-hero-overlay" />
        <div className="container detail-hero-inner">
          <div className="detail-hero-badge">
            <span className="detail-number-badge green">WORKS</span>
            <span className="detail-badge-text">Authentic Projects Portfolio</span>
          </div>
          <h1>Our Works &amp; Executed Industrial Contracts</h1>
          <p className="detail-hero-tagline">
            Complete dossier of verified government and industrial contracts: Government of Andhra Pradesh AMRUT 2.0 urban water supply HDPE pipelines in Mandapeta &amp; Peddapuram, and JSW Steel &amp; JSW Cement industrial fabrication and erection in Toranagallu, Bellary.
          </p>
          <div className="detail-hero-actions">
            <button type="button" className="button button--red" onClick={() => onContactClick()}>
              Enquire for Your Project <Arrow />
            </button>
            <button type="button" className="button button--outline" onClick={onNavigateHome}>
              Return to Home
            </button>
          </div>
        </div>
      </section>

      {/* Main Works Module */}
      <main className="detail-main-content">
        <div className="container">
          {/* Filter Pills */}
          <div className="project-filter-bar">
            {filterOptions.map((f) => (
              <button
                type="button"
                key={f.id}
                className={`project-filter-btn ${activeFilter === f.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Interactive 4-Project Grid */}
          <div className="our-works-grid">
            {filteredProjects.map((project) => (
              <article className="our-work-card" key={project.id}>
                {/* Visual Area */}
                <div className="our-work-media">
                  <img src={project.coverImage} alt={project.title} loading="lazy" decoding="async" />
                  <span className="our-work-num-ribbon">Project {project.projectNumber}</span>
                  <span className="our-work-seal-badge">{project.verifiedBadge}</span>
                  <div className="our-work-photo-status">
                    <span>📸 {project.imageSlots.filter((s) => s.imageUrl).length || project.imageSlots.length} Authentic Site Photos</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="our-work-body">
                  <div className="our-work-meta-row">
                    <span className="our-work-loc">📍 {project.location}, {project.districtState}</span>
                    <span className="our-work-cat-tag">{project.categoryLabel}</span>
                  </div>

                  <h3 className="our-work-heading">{project.title}</h3>

                  <div className="our-work-client-box">
                    <p><strong>Issuing Contractor:</strong> {project.client}</p>
                    <p><strong>Beneficiary / Client:</strong> {project.endClient}</p>
                    <p className="our-work-wo-code"><strong>Contract Ref:</strong> <code>{project.workOrderNo}</code></p>
                  </div>

                  <p className="our-work-summary">{project.summary}</p>

                  {/* Highlights / Metrics */}
                  <div className="our-work-metrics-strip">
                    {project.keyMetrics.map((m, idx) => (
                      <div className="our-work-metric-chip" key={idx}>
                        <b>{m.value}</b>
                        <small>{m.label}</small>
                      </div>
                    ))}
                  </div>

                  {/* Card Actions */}
                  <div className="our-work-card-footer">
                    <button
                      type="button"
                      className="button button--red button--small"
                      onClick={() => handleOpenDossier(project)}
                    >
                      View Complete Work Order &amp; Specs <Arrow />
                    </button>
                    <button
                      type="button"
                      className="button button--outline-dark button--small"
                      onClick={() => onContactClick(project.shortTitle)}
                    >
                      Enquire for Similar Work
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Tender Support Banner */}
          <div className="projects-bottom-cta">
            <div className="cta-copy">
              <span className="eyebrow eyebrow--green">Tenders &amp; Turnaround Packages</span>
              <h2>Have Technical Drawings, Tonnages, or Pipeline Alignments?</h2>
              <p>
                S Ganapati Construction provides comprehensive technical bids, crane lift plans, equipment mobilization schedules, and OHSAS 18001 safety dossiers for EPC contractors and municipal authorities across India.
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

      {/* Interactive Project Dossier Modal */}
      <ProjectDossierModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onContactClick={(pTitle) => onContactClick(pTitle)}
      />
    </div>
  )
}
