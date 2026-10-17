import { useState, useEffect, type ReactNode } from 'react'
import { servicesData } from './data/servicesData'
import ServiceDetailPage from './components/ServiceDetailPage'
import AboutDetailPage from './components/AboutDetailPage'
import ProjectsDetailPage from './components/ProjectsDetailPage'

const Arrow = () => <span aria-hidden="true">→</span>

function Mark({ small = false }: { small?: boolean }) {
  return (
    <div className={`brand-mark ${small ? 'brand-mark--small' : ''}`} aria-hidden="true">
      <span>ॐ</span>
    </div>
  )
}

function Brand({
  footer = false,
  onBrandClick,
}: {
  footer?: boolean
  onBrandClick?: () => void
}) {
  return (
    <a
      className={`brand ${footer ? 'brand--footer' : ''}`}
      href="#home"
      onClick={(e) => {
        if (onBrandClick) {
          e.preventDefault()
          onBrandClick()
        }
      }}
      aria-label="S Ganapati Construction home"
    >
      <Mark small={footer} />
      <span className="brand-copy">
        <strong>S GANAPATI</strong>
        <small>CONSTRUCTION</small>
      </span>
    </a>
  )
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      className="hamburger-svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="22"
      height="22"
      aria-hidden="true"
    >
      {open ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="3" y1="7" x2="21" y2="7" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="17" x2="21" y2="17" />
        </>
      )}
    </svg>
  )
}

function PhoneCallIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.41 11.41 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.41 11.41 0 00.57 3.58 1 1 0 01-.24 1.02l-2.21 2.19z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  )
}

function Icon({ name }: { name: string }) {
  const paths: Record<string, ReactNode> = {
    helmet: (
      <>
        <path d="M4 16v-3a8 8 0 0 1 16 0v3" />
        <path d="M2.5 16h19M8 13V7m8 6V7M6 16v4m12-4v4" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="4.5" />
        <path d="M12 2v3m10 7h-3m-7 10v-3M2 12h3" />
      </>
    ),
    shield: (
      <>
        <path d="M12 2.5 20 6v5.5c0 5-3.3 8.3-8 10-4.7-1.7-8-5-8-10V6l8-3.5Z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </>
    ),
    team: (
      <>
        <circle cx="12" cy="7" r="3" />
        <circle cx="5" cy="10" r="2.3" />
        <circle cx="19" cy="10" r="2.3" />
        <path d="M7 21v-3a5 5 0 0 1 10 0v3M1.5 20v-2.2A4 4 0 0 1 7 14m15.5 6v-2.2A4 4 0 0 0 17 14" />
      </>
    ),
    gear: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3m0 14v3M2 12h3m14 0h3M4.9 4.9 7 7m10 10 2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
        <circle cx="12" cy="12" r="7" />
      </>
    ),
    document: (
      <>
        <path d="M6 2.5h8l4 4V22H6z" />
        <path d="M14 2.5V7h4M9 12h6m-6 4h6m-6 4h4" />
        <path d="m15.5 18 1.5 1.5 3-3" />
      </>
    ),
    phone: (
      <path d="M7.2 3.5 10 7.8 7.8 10a15 15 0 0 0 6.2 6.2l2.2-2.2 4.3 2.8c.5.3.7.9.5 1.5-.6 1.8-2.2 3-4.1 3C9 20.7 3.3 15 2.7 7.1c0-1.9 1.2-3.5 3-4.1.6-.2 1.2 0 1.5.5Z" />
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5.2-8 12-8 12S4 15.2 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  }
  return (
    <span className="line-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {paths[name]}
      </svg>
    </span>
  )
}

const strengths = [
  ['helmet', 'Experienced', 'Team'],
  ['target', 'Precision', 'Execution'],
  ['shield', 'Safety', 'Focused'],
  ['team', 'Client', 'Centric'],
]

const quality = [
  ['helmet', 'Safety-First', 'Approach'],
  ['gear', 'Quality', 'Control'],
  ['team', 'Trained', 'Workforce'],
  ['document', 'Compliance', '& Standards'],
]

type ActiveView =
  | { type: 'home' }
  | { type: 'service'; serviceId: string }
  | { type: 'about' }
  | { type: 'projects' }

export default function App() {
  const [currentView, setCurrentView] = useState<ActiveView>({ type: 'home' })
  const [selectedProjectType, setSelectedProjectType] = useState<string>('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  // Prevent body scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  // Hash Routing Listener
  useEffect(() => {
    function handleHash() {
      const hash = window.location.hash
      if (hash.startsWith('#/services/') || hash.startsWith('#services/')) {
        const id = hash.replace(/^#\/?services\//, '')
        const found = servicesData.find((s) => s.id === id)
        if (found) {
          setCurrentView({ type: 'service', serviceId: found.id })
          window.scrollTo({ top: 0, behavior: 'smooth' })
          return
        }
      } else if (hash === '#/about-us' || hash === '#about-us' || hash === '#/about-company') {
        setCurrentView({ type: 'about' })
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      } else if (hash === '#/all-projects' || hash === '#all-projects' || hash === '#/projects-showcase') {
        setCurrentView({ type: 'projects' })
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      // Default to home if hash is empty or standard anchor (#home, #services, #projects, etc.)
      setCurrentView({ type: 'home' })
    }

    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  // Navigation handlers
  const navigateToHome = (anchor?: string) => {
    setMobileMenuOpen(false)
    setCurrentView({ type: 'home' })
    if (anchor) {
      window.location.hash = anchor
      setTimeout(() => {
        const element = document.getElementById(anchor)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 60)
    } else {
      window.location.hash = ''
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const navigateToService = (serviceId: string) => {
    setMobileMenuOpen(false)
    window.location.hash = `#/services/${serviceId}`
    setCurrentView({ type: 'service', serviceId })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigateToAbout = () => {
    setMobileMenuOpen(false)
    window.location.hash = '#/about-us'
    setCurrentView({ type: 'about' })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigateToProjects = () => {
    setMobileMenuOpen(false)
    window.location.hash = '#/all-projects'
    setCurrentView({ type: 'projects' })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleContactClick = (serviceOrProject?: string) => {
    setMobileMenuOpen(false)
    if (serviceOrProject) {
      setSelectedProjectType(serviceOrProject)
    }
    navigateToHome('contact')
  }

  const activeService =
    currentView.type === 'service'
      ? servicesData.find((s) => s.id === currentView.serviceId) || servicesData[0]
      : null

  return (
    <div className="site-shell">
      {/* Top Navigation Bar */}
      <header className="topbar" id="home">
        <div className="container nav-inner">
          <Brand onBrandClick={() => navigateToHome()} />

          {/* Desktop Navigation */}
          <nav aria-label="Primary navigation" className="desktop-nav">
            <a
              className={currentView.type === 'home' ? 'active' : ''}
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                navigateToHome()
              }}
            >
              Home
            </a>
            <a
              className={currentView.type === 'about' ? 'active' : ''}
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                if (currentView.type === 'home') {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
                } else {
                  navigateToAbout()
                }
              }}
            >
              About Us
            </a>
            <a
              className={currentView.type === 'service' ? 'active' : ''}
              href="#services"
              onClick={(e) => {
                e.preventDefault()
                navigateToHome('services')
              }}
            >
              Services
            </a>
            <a
              className={currentView.type === 'projects' ? 'active' : ''}
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                if (currentView.type === 'home') {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                } else {
                  navigateToProjects()
                }
              }}
            >
              Projects
            </a>
            <a
              href="#safety"
              onClick={(e) => {
                e.preventDefault()
                navigateToHome('safety')
              }}
            >
              Safety &amp; Quality
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                navigateToHome('contact')
              }}
            >
              Contact
            </a>
          </nav>

          <div className="topbar-actions">
            <a
              className="button button--red quote-button desktop-quote-btn"
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                navigateToHome('contact')
              }}
            >
              Get a Quote <Arrow />
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              className="mobile-menu-btn"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <HamburgerIcon open={mobileMenuOpen} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer */}
      <aside
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation Menu"
      >
        <div className="mobile-drawer-header">
          <Brand
            onBrandClick={() => {
              setMobileMenuOpen(false)
              navigateToHome()
            }}
          />
          <button
            type="button"
            className="mobile-drawer-close"
            aria-label="Close menu"
            onClick={() => setMobileMenuOpen(false)}
          >
            ✕
          </button>
        </div>

        <div className="mobile-drawer-content">
          <div className="mobile-nav-links">
            <button
              type="button"
              className={`mobile-nav-item ${currentView.type === 'home' ? 'active' : ''}`}
              onClick={() => navigateToHome()}
            >
              <span>🏠 Home Overview</span>
              <Arrow />
            </button>

            <button
              type="button"
              className={`mobile-nav-item ${currentView.type === 'about' ? 'active' : ''}`}
              onClick={navigateToAbout}
            >
              <span>🏢 About Our Company</span>
              <Arrow />
            </button>

            <div className="mobile-nav-group">
              <span className="mobile-group-title">Services &amp; Capabilities</span>
              {servicesData.map((s) => (
                <button
                  type="button"
                  key={s.id}
                  className={`mobile-sub-item ${currentView.type === 'service' && currentView.serviceId === s.id ? 'active' : ''}`}
                  onClick={() => navigateToService(s.id)}
                >
                  <span className="mobile-sub-num">{s.number}</span>
                  <span className="mobile-sub-title">{s.title}</span>
                  <Arrow />
                </button>
              ))}
            </div>

            <button
              type="button"
              className={`mobile-nav-item ${currentView.type === 'projects' ? 'active' : ''}`}
              onClick={navigateToProjects}
            >
              <span>🏗️ Projects Showcase</span>
              <Arrow />
            </button>

            <button
              type="button"
              className="mobile-nav-item"
              onClick={() => navigateToHome('safety')}
            >
              <span>🛡️ Safety &amp; Quality Protocols</span>
              <Arrow />
            </button>

            <button
              type="button"
              className="mobile-nav-item"
              onClick={() => navigateToHome('contact')}
            >
              <span>📞 Contact &amp; Enquiries</span>
              <Arrow />
            </button>
          </div>

          <div className="mobile-drawer-cta">
            <button
              type="button"
              className="button button--red button--full"
              onClick={() => handleContactClick()}
            >
              Get a Fast Project Quote <Arrow />
            </button>

            <div className="mobile-drawer-contact-links">
              <a href="tel:+919441771333" className="drawer-quick-link">
                <PhoneCallIcon /> <span>Call 94417 71333</span>
              </a>
              <a
                href="https://wa.me/919441771333?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20S%20Ganapati%20Construction%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="drawer-quick-link whatsapp-link"
              >
                <WhatsAppIcon /> <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Conditional View Rendering */}
      {currentView.type === 'service' && activeService ? (
        <ServiceDetailPage
          service={activeService}
          onNavigateHome={() => navigateToHome('services')}
          onNavigateService={navigateToService}
          onContactClick={handleContactClick}
        />
      ) : currentView.type === 'about' ? (
        <AboutDetailPage
          onNavigateHome={() => navigateToHome('about')}
          onContactClick={() => handleContactClick()}
        />
      ) : currentView.type === 'projects' ? (
        <ProjectsDetailPage
          onNavigateHome={() => navigateToHome('projects')}
          onContactClick={(type) => handleContactClick(type)}
        />
      ) : (
        /* Standard Home Page */
        <main>
          {/* Hero */}
          <section className="hero">
            <div className="hero-image" />
            <div className="hero-ring" aria-hidden="true" />
            <div className="hero-green" aria-hidden="true" />
            <div className="container hero-inner">
              <div className="hero-copy">
                <p className="eyebrow eyebrow--light">
                  Industrial engineering
                  <br />
                  built for tomorrow
                </p>
                <h1>
                  Structural
                  <br />
                  Fabrication.
                  <br />
                  Erection.
                  <br />
                  <span>Heavy Equipment Works.</span>
                </h1>
                <p className="hero-subtitle">
                  Reliable engineering and construction solutions
                  <br />
                  for industrial infrastructure.
                </p>
                <div className="button-row">
                  <button
                    type="button"
                    className="button button--red"
                    onClick={navigateToProjects}
                  >
                    Explore Our Work <Arrow />
                  </button>
                  <a className="button button--outline" href="#contact">
                    Contact Us
                  </a>
                </div>
                <div className="slider-index">
                  <b>01</b>
                  <span>02</span>
                  <span>03</span>
                </div>
              </div>
              <p className="hero-statement">
                Precision
                <br />
                engineering
                <br />
                for a stronger
                <br />
                tomorrow
              </p>
            </div>
          </section>

          {/* Capabilities Strip */}
          <section className="capability-strip" aria-label="Core capabilities">
            <div className="container capability-inner">
              <strong>
                Our Core
                <br />
                Capabilities
              </strong>
              <div className="capability-list">
                <span>Structural Works</span>
                <span>Fabrication Works</span>
                <span>Erection Works</span>
                <span>Equipment Installation</span>
                <span>Maintenance Services</span>
                <span>Commissioning Work</span>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="about" id="about">
            <div className="container about-grid">
              <div className="section-copy">
                <SectionTitle
                  kicker="About Us"
                  title={
                    <>
                      Building Industrial
                      <br />
                      Infrastructure with Precision
                    </>
                  }
                />
                <p>
                  S Ganapati Construction is a trusted partner in structural fabrication, erection and heavy equipment works. We deliver reliable, safe and high-quality solutions for industrial and infrastructure projects through a skilled team and disciplined execution.
                </p>
                <div className="feature-row">
                  {strengths.map(([symbol, one, two]) => (
                    <div className="feature" key={one}>
                      <Icon name={symbol} />
                      <span>
                        {one}
                        <br />
                        {two}
                      </span>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  className="button button--red button--small"
                  onClick={navigateToAbout}
                >
                  Know More About Us <Arrow />
                </button>
              </div>
              <div className="about-photo">
                <div className="photo-slash" aria-hidden="true" />
              </div>
              <aside className="mission">
                <span>
                  Our
                  <br />
                  Mission
                </span>
                <i />
                <p>To deliver world-class industrial construction solutions with safety, quality and on-time execution.</p>
              </aside>
            </div>
          </section>

          {/* Services Section */}
          <section className="services section" id="services">
            <div className="container">
              <div className="services-heading">
                <SectionTitle kicker="Our Services" title="Specialists in Industrial Construction & Erection" />
                <p>
                  We provide end-to-end solutions in structural fabrications, erection and heavy equipment works for a wide range of industrial applications.
                </p>
              </div>
              <div className="service-grid">
                {servicesData.map((service, index) => (
                  <article
                    className="service-card"
                    key={service.title}
                    onClick={() => navigateToService(service.id)}
                    tabIndex={0}
                    role="button"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        navigateToService(service.id)
                      }
                    }}
                  >
                    <div className="service-image">
                      <img src={service.heroImage} alt={service.title} loading="lazy" decoding="async" />
                      <span className={index % 2 ? 'number red' : 'number'}>0{index + 1}</span>
                    </div>
                    <div className="service-body">
                      <h3>{service.title}</h3>
                      <p>{service.shortDescription}</p>
                      <button
                        type="button"
                        className="service-arrow-btn"
                        aria-label={`View detailed information on ${service.title}`}
                        onClick={(e) => {
                          e.stopPropagation()
                          navigateToService(service.id)
                        }}
                      >
                        <Arrow />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Projects */}
          <section className="projects" id="projects">
            <div className="project-intro">
              <div>
                <p className="eyebrow eyebrow--green">Featured Projects</p>
                <h2>
                  Our Work
                  <br />
                  Speaks for Itself
                </h2>
                <p>
                  A showcase of our industrial construction,
                  <br />
                  fabrication and erection projects.
                </p>
                <button
                  type="button"
                  className="button button--white button--small"
                  onClick={navigateToProjects}
                >
                  View All Projects <Arrow />
                </button>
              </div>
            </div>
            <div className="project-photo" />
            <div className="project-list">
              {[
                ['01', 'Industrial Plant Structure', 'Visakhapatnam, AP', 'structural-fabrication'],
                ['02', 'Heavy Equipment Installation', 'Industrial Project', 'heavy-equipment-works'],
                ['03', 'Steel Structure Erection', 'Industrial Facility', 'structural-erection'],
              ].map(([number, name, place, sId], index) => (
                <div
                  className="project-item"
                  key={number}
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigateToService(sId)}
                >
                  <b>{number}</b>
                  <span>
                    <strong>{name}</strong>
                    <small>{place}</small>
                  </span>
                  {index === 2 && <Arrow />}
                </div>
              ))}
            </div>
          </section>

          {/* Quality & Safety */}
          <section className="quality" id="safety">
            <div className="container quality-grid">
              <div className="quality-copy">
                <SectionTitle kicker="Safety & Quality" title="People. Process. Performance." />
                <p>
                  We follow strict safety protocols and quality standards to ensure every project is delivered safely, efficiently and to specification.
                </p>
                <div className="feature-row">
                  {quality.map(([symbol, one, two]) => (
                    <div className="feature" key={one}>
                      <Icon name={symbol} />
                      <span>
                        {one}
                        <br />
                        {two}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="safety-assurance">
                  <span>Safety assurance</span>
                  <strong>Disciplined execution at every project site</strong>
                </div>
              </div>
              <div className="quality-visual">
                <div className="quality-photo" />
                <div className="quality-caption">
                  <small>Our commitment</small>
                  <strong>
                    Safe work.
                    <br />
                    Reliable outcomes.
                  </strong>
                </div>
              </div>
              <div className="quality-red" aria-hidden="true">
                <span />
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="contact" id="contact">
            <div className="container contact-grid">
              <div className="contact-heading">
                <p className="eyebrow eyebrow--green">Let's Work Together</p>
                <h2>
                  Discuss Your
                  <br />
                  Next Project
                </h2>
                <p>
                  Get in touch with our team for enquiries,
                  <br />
                  project discussions or site consultations.
                </p>
              </div>
              <address className="contact-details">
                <p>
                  <Icon name="phone" />
                  <strong>
                    <a href="tel:+919441771333" style={{ color: 'inherit' }}>94417 71333</a>
                    <br />
                    <a href="tel:+919032079333" style={{ color: 'inherit' }}>90320 79333</a>
                  </strong>
                </p>
                <p>
                  <Icon name="mail" />
                  <a href="mailto:sganapati1585@gmail.com" style={{ color: 'inherit' }}>
                    sganapati1585@gmail.com
                  </a>
                </p>
                <p>
                  <Icon name="pin" />
                  <span>
                    11-30/27, F-no. 303, GSN Towers,
                    <br />
                    Bhagath Singh Nagar, Yellapuvvanipalem,
                    <br />
                    Gopalapatnam, Visakhapatnam,
                    <br />
                    Andhra Pradesh 530027
                  </span>
                </p>
              </address>
              <form className="enquiry" onSubmit={(event) => event.preventDefault()}>
                <h3>Project Enquiry</h3>
                <div className="form-grid">
                  <input aria-label="Your name" placeholder="Your Name *" required />
                  <input aria-label="Company name" placeholder="Company Name" />
                  <input aria-label="Email address" type="email" placeholder="Email Address *" required />
                  <input aria-label="Phone number" type="tel" inputMode="tel" placeholder="Phone Number" />
                  <select
                    aria-label="Project type"
                    value={selectedProjectType}
                    onChange={(e) => setSelectedProjectType(e.target.value)}
                  >
                    <option value="">Select Project / Service</option>
                    <option value="Structural Fabrication">Structural Fabrication</option>
                    <option value="Structural Erection">Structural Erection</option>
                    <option value="Heavy Equipment Works">Heavy Equipment Works</option>
                    <option value="Industrial Construction">Industrial Construction</option>
                  </select>
                  <textarea aria-label="Project details" placeholder="Project Details & Requirements *" required />
                </div>
                <button className="button button--red button--small button--full" type="submit">
                  Send Enquiry <Arrow />
                </button>
              </form>
            </div>
          </section>
        </main>
      )}

      {/* Floating Mobile Bottom Action Bar */}
      <nav className="mobile-quick-bar" aria-label="Quick contact actions">
        <a href="tel:+919441771333" className="mobile-quick-btn mobile-call-btn">
          <PhoneCallIcon />
          <span>Call Now</span>
        </a>
        <a
          href="https://wa.me/919441771333?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20S%20Ganapati%20Construction%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-quick-btn mobile-whatsapp-btn"
        >
          <WhatsAppIcon />
          <span>WhatsApp</span>
        </a>
        <button
          type="button"
          className="mobile-quick-btn mobile-quote-btn"
          onClick={() => handleContactClick()}
        >
          <span>Get Quote</span>
          <Arrow />
        </button>
      </nav>

      {/* Footer */}
      <footer>
        <div className="container footer-inner">
          <Brand footer onBrandClick={() => navigateToHome()} />
          <div className="footer-links">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                navigateToHome()
              }}
            >
              Home
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault()
                navigateToHome('services')
              }}
            >
              Services
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                navigateToProjects()
              }}
            >
              Projects
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                navigateToAbout()
              }}
            >
              About Us
            </a>
            <a
              href="#safety"
              onClick={(e) => {
                e.preventDefault()
                navigateToHome('safety')
              }}
            >
              Safety &amp; Quality
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                navigateToHome('contact')
              }}
            >
              Contact
            </a>
          </div>
          <p>© 2024 S Ganapati Construction. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function SectionTitle({ kicker, title }: { kicker: string; title: ReactNode }) {
  return (
    <div className="section-title">
      <p className="eyebrow">{kicker}</p>
      <h2>{title}</h2>
    </div>
  )
}
