import type { ReactNode } from 'react'
import type { ServiceDetail } from '../data/servicesData'
import { servicesData, companyProfile } from '../data/servicesData'

interface ServiceDetailPageProps {
  service: ServiceDetail
  onNavigateHome: () => void
  onNavigateService: (serviceId: string) => void
  onContactClick: (serviceName?: string) => void
}

const Arrow = () => <span aria-hidden="true">→</span>
const BackArrow = () => <span aria-hidden="true">←</span>

function CheckIcon() {
  return (
    <svg className="detail-check-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default function ServiceDetailPage({
  service,
  onNavigateHome,
  onNavigateService,
  onContactClick,
}: ServiceDetailPageProps) {
  const currentIndex = servicesData.findIndex((s) => s.id === service.id)
  const prevService = currentIndex > 0 ? servicesData[currentIndex - 1] : servicesData[servicesData.length - 1]
  const nextService = currentIndex < servicesData.length - 1 ? servicesData[currentIndex + 1] : servicesData[0]

  return (
    <div className="service-detail-view">
      {/* Breadcrumb Bar */}
      <section className="detail-breadcrumb-bar">
        <div className="container breadcrumb-inner">
          <div className="breadcrumb-links">
            <button type="button" className="breadcrumb-btn" onClick={onNavigateHome}>
              Home
            </button>
            <span className="breadcrumb-sep">/</span>
            <button type="button" className="breadcrumb-btn" onClick={onNavigateHome}>
              Services
            </button>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">{service.title}</span>
          </div>

          <button type="button" className="button button--outline-dark button--small" onClick={onNavigateHome}>
            <BackArrow /> Back to Overview
          </button>
        </div>
      </section>

      {/* Hero Banner */}
      <section className="detail-hero">
        <div className="detail-hero-backdrop" style={{ backgroundImage: `url('${service.heroImage}')` }} />
        <div className="detail-hero-overlay" />
        <div className="container detail-hero-inner">
          <div className="detail-hero-badge">
            <span className={`detail-number-badge ${service.badgeColor}`}>{service.number}</span>
            <span className="detail-badge-text">Industrial Service Specification</span>
          </div>
          <h1>{service.title}</h1>
          <p className="detail-hero-tagline">{service.tagline}</p>
          <div className="detail-hero-actions">
            <button
              type="button"
              className="button button--red"
              onClick={() => onContactClick(service.title)}
            >
              Request Quote for {service.title} <Arrow />
            </button>
            <button
              type="button"
              className="button button--outline"
              onClick={onNavigateHome}
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="detail-main-content">
        <div className="container detail-layout-grid">
          {/* Left Column: Extensive Information */}
          <div className="detail-primary-col">
            {/* Overview */}
            <section className="detail-card">
              <div className="detail-section-heading">
                <span className="eyebrow">Service Overview</span>
                <h2>Engineering Excellence &amp; Execution</h2>
              </div>
              <p className="detail-lead-paragraph">{service.fullDescription}</p>
            </section>

            {/* Core Capabilities */}
            <section className="detail-card">
              <div className="detail-section-heading">
                <span className="eyebrow">Core Capabilities</span>
                <h2>What We Deliver</h2>
              </div>
              <div className="capabilities-grid">
                {service.capabilities.map((item, idx) => (
                  <div className="capability-card" key={idx}>
                    <div className="capability-header">
                      <span className="capability-idx">0{idx + 1}</span>
                      <h3>{item.title}</h3>
                    </div>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Specifications */}
            <section className="detail-card">
              <div className="detail-section-heading">
                <span className="eyebrow">Technical Parameters</span>
                <h2>Standards &amp; Capacities</h2>
              </div>
              <div className="specs-table-wrapper">
                <table className="specs-table">
                  <tbody>
                    {service.specifications.map((spec, idx) => (
                      <tr key={idx}>
                        <td className="spec-label">{spec.label}</td>
                        <td className="spec-value">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Quality & Safety */}
            <section className="detail-card">
              <div className="detail-section-heading">
                <span className="eyebrow">Quality &amp; Compliance</span>
                <h2>Safety &amp; Testing Protocols</h2>
              </div>
              <ul className="bullet-feature-list">
                {service.qualitySafety.map((point, idx) => (
                  <li key={idx}>
                    <CheckIcon />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Machinery & Equipment */}
            <section className="detail-card">
              <div className="detail-section-heading">
                <span className="eyebrow">Equipment &amp; Technology</span>
                <h2>Machinery Deployed</h2>
              </div>
              <div className="equipment-tag-cloud">
                {service.machineryEquipment.map((tool, idx) => (
                  <span className="equipment-tag" key={idx}>
                    {tool}
                  </span>
                ))}
              </div>
            </section>

            {/* Sectors Served */}
            <section className="detail-card">
              <div className="detail-section-heading">
                <span className="eyebrow">Target Industries</span>
                <h2>Sectors &amp; Applications</h2>
              </div>
              <div className="applications-grid">
                {service.applications.map((app, idx) => (
                  <div className="app-item" key={idx}>
                    <span className="app-dot" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar: Quick Contact & Nav */}
          <aside className="detail-sidebar-col">
            {/* Quick Consultation Card */}
            <div className="sidebar-card contact-cta-card">
              <span className="eyebrow eyebrow--green">Project Consultation</span>
              <h3>Need {service.title}?</h3>
              <p>Discuss your project specifications, drawings, and schedule with our technical team.</p>
              <div className="sidebar-contacts">
                <div className="sidebar-contact-row">
                  <strong>Direct Phone:</strong>
                  <span>+91 {companyProfile.phonePrimary} / +91 {companyProfile.phoneSecondary}</span>
                </div>
                <div className="sidebar-contact-row">
                  <strong>Email Enquiries:</strong>
                  <span>{companyProfile.email}</span>
                </div>
                <div className="sidebar-contact-row">
                  <strong>Location:</strong>
                  <span>Visakhapatnam, Andhra Pradesh</span>
                </div>
              </div>
              <button
                type="button"
                className="button button--red button--full"
                onClick={() => onContactClick(service.title)}
              >
                Send Project Enquiry <Arrow />
              </button>
            </div>

            {/* Other Services Navigation */}
            <div className="sidebar-card services-nav-card">
              <h3>All Services</h3>
              <div className="sidebar-services-list">
                {servicesData.map((s) => (
                  <button
                    type="button"
                    key={s.id}
                    className={`sidebar-service-btn ${s.id === service.id ? 'active' : ''}`}
                    onClick={() => onNavigateService(s.id)}
                  >
                    <span className="sidebar-service-num">{s.number}</span>
                    <span className="sidebar-service-title">{s.title}</span>
                    <Arrow />
                  </button>
                ))}
              </div>
            </div>

            {/* Quality Badge */}
            <div className="sidebar-card badge-card">
              <div className="badge-highlight">
                <strong>Safety First. Quality Assured.</strong>
                <p>Every fabrication and erection job complies with AWS, ASME, and IS engineering codes.</p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Prev / Next Service Footer Bar */}
      <section className="detail-pagination-strip">
        <div className="container pagination-inner">
          <button
            type="button"
            className="pagination-btn pagination-prev"
            onClick={() => onNavigateService(prevService.id)}
          >
            <span className="pagination-label">
              <BackArrow /> Previous Service
            </span>
            <strong className="pagination-title">{prevService.title}</strong>
          </button>

          <button type="button" className="button button--white button--small" onClick={onNavigateHome}>
            All Services
          </button>

          <button
            type="button"
            className="pagination-btn pagination-next"
            onClick={() => onNavigateService(nextService.id)}
          >
            <span className="pagination-label">
              Next Service <Arrow />
            </span>
            <strong className="pagination-title">{nextService.title}</strong>
          </button>
        </div>
      </section>
    </div>
  )
}
