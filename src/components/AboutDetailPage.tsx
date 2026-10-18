import { companyProfile, safetyCertifications, trainingTopics } from '../data/servicesData'
import { CheckIcon } from './CorporateIcons'

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
            <span className="breadcrumb-current">About S Ganapati Construction</span>
          </div>
          <button type="button" className="button button--outline-dark button--small" onClick={onNavigateHome}>
            <BackArrow /> Back to Overview
          </button>
        </div>
      </section>

      {/* Hero */}
      <section className="detail-hero">
        <div className="detail-hero-backdrop" style={{ backgroundImage: "url('/assets/safety-team-site.jpg')" }} />
        <div className="detail-hero-overlay" />
        <div className="container detail-hero-inner">
          <div className="detail-hero-badge">
            <span className="detail-number-badge red">SGC</span>
            <span className="detail-badge-text">Company Profile &amp; Governance</span>
          </div>
          <h1>Engineering Excellence in Steel Infrastructure</h1>
          <p className="detail-hero-tagline">
            Specialists in Structural Fabrications, Erection, and Heavy Equipment Works headquartered in Visakhapatnam, Andhra Pradesh.
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
            {/* Who We Are */}
            <section className="detail-card">
              <div className="detail-section-heading">
                <span className="eyebrow">Company Profile</span>
                <h2>S Ganapati Construction</h2>
              </div>
              <p className="detail-lead-paragraph">
                <strong>S Ganapati Construction</strong> (Proprietor: <strong>{companyProfile.proprietor}</strong>, Managing Director: <strong>{companyProfile.managingDirector}</strong>) is an established industrial engineering and contracting firm specializing in structural works, heavy fabrication, on-site erection, mechanical equipment installation, and turnkey commissioning.
              </p>
              <p>
                Operating with certified occupational safety procedures under <strong>OHSAS 18001</strong> standards, we execute critical packages across integrated steel plants, cement manufacturing complexes, heavy material handling corridors, rolling mills, and power stations.
              </p>
              <div className="profile-specs-pill-row">
                <span className="profile-pill"><b>GSTIN:</b> {companyProfile.gstin}</span>
                <span className="profile-pill"><b>Proprietor:</b> {companyProfile.proprietor}</span>
                <span className="profile-pill"><b>Managing Director:</b> {companyProfile.managingDirector}</span>
                <span className="profile-pill"><b>HQ:</b> Visakhapatnam, AP</span>
                <span className="profile-pill"><b>Work Order:</b> AP AMRUT 2.0 (11.7+ km HDPE)</span>
                <span className="profile-pill"><b>Track Record:</b> 1000+ Projects</span>
              </div>
            </section>

            {/* Major Clients & Government Work Orders */}
            <section className="detail-card">
              <div className="detail-section-heading">
                <span className="eyebrow eyebrow--green">Client Credentials</span>
                <h2>Government Contracts &amp; Industrial Clients</h2>
              </div>
              <p className="detail-lead-paragraph">
                S Ganapati Construction is entrusted by leading EPC contractors and public infrastructure authorities to execute critical water supply networks and heavy technological installations.
              </p>
              <div className="client-contracts-grid">
                <div className="client-contract-box verified-contract">
                  <div className="contract-header">
                    <span className="verified-seal"><CheckIcon className="seal-check-icon" /> OFFICIAL WORK ORDER</span>
                    <h3>Govt of Andhra Pradesh AMRUT 2.0 Scheme</h3>
                  </div>
                  <div className="contract-meta-list">
                    <p><strong>Main Contractor:</strong> M/s. Civet Projects Pvt Ltd (CIN: U45500TG1018PTC122108)</p>
                    <p><strong>Work Order Ref:</strong> WO.NO.CPPL/AP AMRUT 2.0/2025-26/1314-A1</p>
                    <p><strong>Project:</strong> Urban Water Supply &amp; HDPE Pipeline Network in Mandapeta &amp; Peddapuram Municipalities, AP.</p>
                    <p><strong>Scope:</strong> 11,735+ Rmtr (11.7+ km) 110mm to 355mm Dia HDPE, CC road cutting, trenchless auger crossings, and 100% hydrostatic testing.</p>
                  </div>
                  <div className="contract-tags">
                    <span>11,735+ Rmtr HDPE Pipeline</span>
                    <span>Trenchless Auger Boring</span>
                    <span>Butt Fusion Jointing</span>
                    <span>100% Hydrostatic Tested</span>
                  </div>
                </div>

                <div className="client-contract-box">
                  <div className="contract-header">
                    <span className="industry-seal">HEAVY INDUSTRIAL SECTOR</span>
                    <h3>Metallurgical &amp; Process Facilities</h3>
                  </div>
                  <div className="contract-meta-list">
                    <p><strong>Sectors:</strong> Integrated Steel Plants, Cement Manufacturing, Bulk Material Handling Terminals, and Thermal Power Stations.</p>
                    <p><strong>Specializations:</strong> Precision rolling mill installation, Coke Oven Stamping-Charging-Pushing (SCP) cars, CDQ systems, and 2500 TPH conveyor galleries.</p>
                  </div>
                  <div className="contract-tags">
                    <span>Wire Rod Mills (WRM)</span>
                    <span>Coke Oven &amp; CDQ Cars</span>
                    <span>RMHS Conveyors (2,500 TPH)</span>
                    <span>Heavy Crane Lifting</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Work Approach */}
            <section className="detail-card">
              <div className="detail-section-heading">
                <span className="eyebrow">Work Approach</span>
                <h2>Core Operational Focus</h2>
              </div>
              <div className="capabilities-grid">
                <div className="capability-card">
                  <div className="capability-header">
                    <span className="capability-idx">01</span>
                    <h3>Precision Engineering</h3>
                  </div>
                  <p>Adherence to tight engineering tolerances, certified welding procedures (WPS/PQR), and sub-millimeter laser optical alignment.</p>
                </div>
                <div className="capability-card">
                  <div className="capability-header">
                    <span className="capability-idx">02</span>
                    <h3>On-Site Technical Expertise</h3>
                  </div>
                  <p>Deploying experienced rigging masters, coded welders, structural supervisors, and heavy equipment operators for high-altitude technological erection.</p>
                </div>
                <div className="capability-card">
                  <div className="capability-header">
                    <span className="capability-idx">03</span>
                    <h3>Project Safety &amp; Compliance</h3>
                  </div>
                  <p>Adherence to OHSAS 18001, Contractor Safety Code enforcement, smart confined-space monitoring, and JSW-Dolvi Model emergency response plans.</p>
                </div>
                <div className="capability-card">
                  <div className="capability-header">
                    <span className="capability-idx">04</span>
                    <h3>On-Time Execution &amp; Quality</h3>
                  </div>
                  <p>Disciplined critical-path scheduling to ensure industrial facilities and plant shutdown packages are delivered ahead of commercial deadlines.</p>
                </div>
              </div>
            </section>

            {/* Certifications & Safety */}
            <section className="detail-card">
              <div className="detail-section-heading">
                <span className="eyebrow">Safety Benchmarks</span>
                <h2>Certified Occupational Health &amp; Safety Standards</h2>
              </div>
              <p className="detail-lead-paragraph">
                All manufacturing, fabrication yards, and project sites comply with <strong>OHSAS 18001 Occupational Health &amp; Safety Management System</strong>.
              </p>
              <div className="safety-cards-grid">
                {safetyCertifications.map((item, idx) => (
                  <div className="safety-feature-box" key={idx}>
                    <strong><CheckIcon className="seal-check-icon" /> {item.title}</strong>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Workforce Training */}
            <section className="detail-card">
              <div className="detail-section-heading">
                <span className="eyebrow">Workforce Development</span>
                <h2>Structured Training &amp; Safety Programs</h2>
              </div>
              <p>
                We believe safety is not a requirement, it is an ingrained responsibility. Our site personnel undergo structured learning modules covering:
              </p>
              <div className="training-topics-grid">
                {trainingTopics.map((topic, idx) => (
                  <div className="training-item" key={idx}>
                    <span className="training-num">0{idx + 1}</span>
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="detail-sidebar-col">
            <div className="sidebar-card contact-cta-card">
              <span className="eyebrow eyebrow--green">Official Contact</span>
              <h3>S Ganapati Construction</h3>
              <p>Specialists in Structural Fabrications, Erection, Heavy Equipment Works.</p>

              <div className="sidebar-contacts">
                <div className="sidebar-contact-row">
                  <strong>Proprietor:</strong>
                  <span>{companyProfile.proprietor}</span>
                </div>
                <div className="sidebar-contact-row">
                  <strong>Managing Director:</strong>
                  <span>{companyProfile.managingDirector}</span>
                </div>
                <div className="sidebar-contact-row">
                  <strong>GSTIN Registration:</strong>
                  <span>{companyProfile.gstin}</span>
                </div>
                <div className="sidebar-contact-row">
                  <strong>Direct Phones:</strong>
                  <span>+91 {companyProfile.phonePrimary} / +91 {companyProfile.phoneSecondary}</span>
                </div>
                <div className="sidebar-contact-row">
                  <strong>Alternate:</strong>
                  <span>+91 {companyProfile.phoneTertiary}</span>
                </div>
                <div className="sidebar-contact-row">
                  <strong>Email:</strong>
                  <span>{companyProfile.email}</span>
                </div>
                <div className="sidebar-contact-row">
                  <strong>Registered Office:</strong>
                  <span>{companyProfile.address.full}</span>
                </div>
                <div className="sidebar-contact-row">
                  <strong>Active Govt WO:</strong>
                  <span style={{ color: '#174735', fontWeight: 700 }}>WO 1314-A1 (AMRUT 2.0 Water Supply)</span>
                </div>
              </div>

              <button type="button" className="button button--red button--full" onClick={onContactClick}>
                Send Project Enquiry <Arrow />
              </button>
            </div>

            <div className="sidebar-card badge-card">
              <div className="badge-highlight">
                <strong>1000+ Projects Experience</strong>
                <p>Over a decade of trusted industrial execution for heavy infrastructure, steel mills, and process plants.</p>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
