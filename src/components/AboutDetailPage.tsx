import type { ReactNode } from 'react'

interface AboutDetailPageProps {
  onNavigateHome: () => void
  onContactClick: () => void
}

const Arrow = () => <span aria-hidden="true">→</span>
const BackArrow = () => <span aria-hidden="true">←</span>

export default function AboutDetailPage({ onNavigateHome, onContactClick }: AboutDetailPageProps) {
  return (
    <div className="about-detail-view">
      {/* Breadcrumb */}
      <section className="detail-breadcrumb-bar">
        <div className="container breadcrumb-inner">
          <div className="breadcrumb-links">
            <button type="button" className="breadcrumb-btn" onClick={onNavigateHome}>
              Home
            </button>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">About Us</span>
          </div>
          <button type="button" className="button button--outline-dark button--small" onClick={onNavigateHome}>
            <BackArrow /> Back to Overview
          </button>
        </div>
      </section>

      {/* Hero */}
      <section className="detail-hero">
        <div className="detail-hero-backdrop" style={{ backgroundImage: "url('/assets/steel-worker.jpg')" }} />
        <div className="detail-hero-overlay" />
        <div className="container detail-hero-inner">
          <div className="detail-hero-badge">
            <span className="detail-number-badge red">SGC</span>
            <span className="detail-badge-text">Company Profile &amp; Ethos</span>
          </div>
          <h1>Building Industrial Infrastructure with Precision</h1>
          <p className="detail-hero-tagline">
            Trusted structural fabrication, erection, and heavy mechanical engineering partner based in Visakhapatnam, Andhra Pradesh.
          </p>
          <div className="detail-hero-actions">
            <button type="button" className="button button--red" onClick={onContactClick}>
              Work With Us <Arrow />
            </button>
            <button type="button" className="button button--outline" onClick={onNavigateHome}>
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="detail-main-content">
        <div className="container detail-layout-grid">
          <div className="detail-primary-col">
            <section className="detail-card">
              <div className="detail-section-heading">
                <span className="eyebrow">Who We Are</span>
                <h2>Decades of Industrial Engineering Expertise</h2>
              </div>
              <p className="detail-lead-paragraph">
                S Ganapati Construction is a premier engineering contractor specializing in structural steel fabrication, high-altitude structural erection, and heavy industrial equipment installation. Headquartered in Visakhapatnam, we serve major industrial clients across India, delivering robust, code-compliant, and on-time engineering solutions.
              </p>
              <p>
                Our multidisciplinary teams of certified structural engineers, coded welders, experienced riggers, and dedicated safety officers bring disciplined execution to every phase of project delivery. From greenfield industrial plants to complex shutdown revamps, we ensure highest standards of workmanship and zero-compromise safety.
              </p>
            </section>

            {/* Core Values */}
            <section className="detail-card">
              <div className="detail-section-heading">
                <span className="eyebrow">Core Values</span>
                <h2>The Principles Guiding Our Work</h2>
              </div>
              <div className="capabilities-grid">
                <div className="capability-card">
                  <div className="capability-header">
                    <span className="capability-idx">01</span>
                    <h3>Safety Above All</h3>
                  </div>
                  <p>Uncompromising commitment to zero lost-time injuries through daily hazard analysis, comprehensive PPE compliance, and strict adherence to international HSE protocols.</p>
                </div>
                <div className="capability-card">
                  <div className="capability-header">
                    <span className="capability-idx">02</span>
                    <h3>Precision Engineering</h3>
                  </div>
                  <p>Adherence to tight fabrication tolerances, certified welding procedures, and optical/laser alignment methods that guarantee operational reliability.</p>
                </div>
                <div className="capability-card">
                  <div className="capability-header">
                    <span className="capability-idx">03</span>
                    <h3>On-Time Milestone Delivery</h3>
                  </div>
                  <p>Disciplined project scheduling and critical path management to ensure industrial facilities commence commercial operations without delays.</p>
                </div>
                <div className="capability-card">
                  <div className="capability-header">
                    <span className="capability-idx">04</span>
                    <h3>Client-Centric Transparency</h3>
                  </div>
                  <p>Open communication, continuous technical reporting, and flexible adaptation to plant shutdown requirements and evolving site challenges.</p>
                </div>
              </div>
            </section>

            {/* Mission & Vision */}
            <section className="detail-card">
              <div className="detail-section-heading">
                <span className="eyebrow">Vision &amp; Mission</span>
                <h2>Driving Industrial Progress</h2>
              </div>
              <div className="vision-mission-grid">
                <div className="vm-box">
                  <strong>Our Mission</strong>
                  <p>To deliver world-class industrial construction, structural fabrication, and heavy lifting solutions through skilled craftsmanship, certified quality assurance, and an unwavering safety culture.</p>
                </div>
                <div className="vm-box vm-box--alt">
                  <strong>Our Vision</strong>
                  <p>To be the most dependable and sought-after engineering construction partner for India’s core industrial sectors, recognized for structural integrity, technical prowess, and flawless project delivery.</p>
                </div>
              </div>
            </section>

            {/* Safety & Quality Policy */}
            <section className="detail-card">
              <div className="detail-section-heading">
                <span className="eyebrow">Commitment</span>
                <h2>Health, Safety &amp; Environment (HSE) Policy</h2>
              </div>
              <p>
                At S Ganapati Construction, safety is not merely a compliance checklist—it is an ingrained core culture. Every employee, from senior project managers to apprentice fitters, possesses the authority to stop work if unsafe conditions arise.
              </p>
              <div className="equipment-tag-cloud">
                <span className="equipment-tag">100% Fall Protection at Heights</span>
                <span className="equipment-tag">Daily Tool Box Safety Briefings</span>
                <span className="equipment-tag">Third-Party Certified Lifting Gear</span>
                <span className="equipment-tag">Mandatory Full PPE Protocols</span>
                <span className="equipment-tag">Hot Work &amp; Confined Space Permits</span>
                <span className="equipment-tag">First Aid Certified Site Personnel</span>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="detail-sidebar-col">
            <div className="sidebar-card contact-cta-card">
              <span className="eyebrow eyebrow--green">Get In Touch</span>
              <h3>Partner with Us</h3>
              <p>Looking for a reliable fabrication and erection contractor for your next infrastructure project?</p>
              <div className="sidebar-contacts">
                <div className="sidebar-contact-row">
                  <strong>Headquarters:</strong>
                  <span>GSN Towers, Visakhapatnam, AP</span>
                </div>
                <div className="sidebar-contact-row">
                  <strong>Contact Numbers:</strong>
                  <span>94417 71333 / 90320 79333</span>
                </div>
                <div className="sidebar-contact-row">
                  <strong>Email:</strong>
                  <span>sganapati1585@gmail.com</span>
                </div>
              </div>
              <button type="button" className="button button--red button--full" onClick={onContactClick}>
                Contact Our Team <Arrow />
              </button>
            </div>

            <div className="sidebar-card badge-card">
              <div className="badge-highlight">
                <strong>Registered Contractor</strong>
                <p>Licensed engineering contractor specialized in industrial, metallurgical, and power infrastructure works.</p>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
