import { useState, useEffect, Component, type ErrorInfo, type ReactNode } from 'react'
import {
  servicesData,
  companyProfile,
  safetyCertifications,
  keyMetrics,
  industriesServed,
  whyChooseUs,
} from './data/servicesData'
import { authenticProjects, OfficialProject } from './data/projectsData'
import ServiceDetailPage from './components/ServiceDetailPage'
import AboutDetailPage from './components/AboutDetailPage'
import ProjectsDetailPage from './components/ProjectsDetailPage'
import ProjectDossierModal from './components/ProjectDossierModal'
import {
  CloseIcon,
  CheckIcon,
  CameraIcon,
  PinIcon,
  GovEmblemIcon,
  IBeamIcon,
  CraneHookIcon,
  FactoryPlantIcon,
} from './components/CorporateIcons'

const Arrow = () => <span aria-hidden="true">→</span>

interface ErrorBoundaryProps {
  children: ReactNode
}
interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo)
  }
  render() {
    if (this.state.hasError) {
      return (
        <main className="detail-page-wrapper">
          <div className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '24px', color: '#c82a20', marginBottom: '12px', fontWeight: 800 }}>
              Notice: Unable to Load Detail View
            </h2>
            <p style={{ color: '#555', marginBottom: '24px', fontSize: '15px' }}>
              {this.state.error?.message || 'An unexpected rendering issue occurred.'}
            </p>
            <button
              type="button"
              className="button button--red"
              onClick={() => {
                window.location.hash = ''
                window.location.reload()
              }}
            >
              Return to Home Overview <Arrow />
            </button>
          </div>
        </main>
      )
    }
    return this.props.children
  }
}

function BrandLogo({ small = false }: { small?: boolean }) {
  return (
    <div className={`brand-logo-container ${small ? 'brand-logo-container--small' : ''}`} aria-hidden="true">
      <img
        src="/assets/ganapati-logo.png"
        alt="S Ganapati Construction Logo"
        className="brand-logo-img"
        width={small ? 36 : 46}
        height={small ? 45 : 58}
        loading="eager"
        decoding="async"
      />
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
      <BrandLogo small={footer} />
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
  ['helmet', 'Experienced', 'Workforce'],
  ['target', 'Precision', 'Engineering'],
  ['shield', 'Safety', 'OHSAS 18001'],
  ['team', 'Client', 'Centric'],
]

const mobileVisualProjects = [
  {
    id: 'steel',
    tab: 'Heavy Steel',
    icon: '🏗️',
    title: 'Heavy Structural Steel Bays',
    subtitle: 'JSW Steel Complex • 1,000+ MT Fabricated',
    image: '/projects/0a98a433-bbc2-4c61-8704-a8c79019ee9a.jpg',
    targetId: 'jsw-toranagallu-steel-cement',
    tag: 'Industrial Steel Plant',
  },
  {
    id: 'amrut',
    tab: 'AMRUT 2.0',
    icon: '💧',
    title: 'Govt AP AMRUT 2.0 Water Mains',
    subtitle: 'Mandapeta & Peddapuram • 11.7+ km Pipeline',
    image: '/projects/7a42a22e-209c-4ee8-a002-3b1905c174b9.jpg',
    targetId: 'amrut-master-1314-a1',
    tag: 'Govt Work Order WO 1314-A1',
  },
  {
    id: 'crane',
    tab: '90m Rigging',
    icon: '🚜',
    title: '90m Tandem Rigging & Erection',
    subtitle: '100T+ Tandem Crane Heavy Lifts & Trusses',
    image: '/assets/steel-hero.jpg',
    targetId: 'jsw-toranagallu-steel-cement',
    tag: 'High-Elevation Erection',
  },
  {
    id: 'machinery',
    tab: 'Plant Work',
    icon: '⚙️',
    title: 'Heavy Foundation & Plant Bays',
    subtitle: 'Concrete Pumping & Structural Portal Bays',
    image: '/projects/340bd80d-55a0-494c-83df-694462dded8b.jpg',
    targetId: 'peddapuram-ulb-ra02',
    tag: 'Structural Engineering',
  },
]

type ActiveView =
  | { type: 'home' }
  | { type: 'service'; serviceId: string }
  | { type: 'about' }
  | { type: 'projects'; targetProjectId?: string }

export default function App() {
  const [currentView, setCurrentView] = useState<ActiveView>({ type: 'home' })
  const [selectedProjectType, setSelectedProjectType] = useState<string>('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const [activeSlide, setActiveSlide] = useState<number>(0)

  // Auto-advance visual slides on mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % mobileVisualProjects.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

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
      } else if (
        hash.startsWith('#/all-projects') ||
        hash.startsWith('#all-projects') ||
        hash === '#/projects-showcase'
      ) {
        const targetId = hash.replace(/^#\/?all-projects\/?/, '')
        setCurrentView({
          type: 'projects',
          targetProjectId: targetId && targetId.length > 0 ? targetId : undefined,
        })
        if (!targetId) {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
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

  const navigateToProjects = (projectId?: string) => {
    setMobileMenuOpen(false)
    window.location.hash = projectId ? `#/all-projects/${projectId}` : '#/all-projects'
    setCurrentView({ type: 'projects', targetProjectId: projectId })
    if (!projectId) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleContactClick = (serviceOrProject?: string) => {
    setMobileMenuOpen(false)
    if (serviceOrProject) {
      setSelectedProjectType(serviceOrProject)
    }
    navigateToHome('contact')
  }

  const [dossierProject, setDossierProject] = useState<OfficialProject | null>(null)
  const [dossierModalOpen, setDossierModalOpen] = useState<boolean>(false)

  const handleOpenDossier = (proj: OfficialProject) => {
    setDossierProject(proj)
    setDossierModalOpen(true)
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
              href="#industries"
              onClick={(e) => {
                e.preventDefault()
                navigateToHome('industries')
              }}
            >
              Industries
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
              Our Works
            </a>
            <a
              href="#safety"
              onClick={(e) => {
                e.preventDefault()
                navigateToHome('safety')
              }}
            >
              Safety &amp; Certifications
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
            <CloseIcon />
          </button>
        </div>

        <div className="mobile-drawer-content">
          <div className="mobile-nav-links">
            <button
              type="button"
              className={`mobile-nav-item ${currentView.type === 'home' ? 'active' : ''}`}
              onClick={() => navigateToHome()}
            >
              <span>Home Overview</span>
              <Arrow />
            </button>

            <button
              type="button"
              className={`mobile-nav-item ${currentView.type === 'about' ? 'active' : ''}`}
              onClick={navigateToAbout}
            >
              <span>About Company</span>
              <Arrow />
            </button>

            <div className="mobile-nav-group">
              <span className="mobile-group-title">6 Core Industrial Services</span>
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
              className="mobile-nav-item"
              onClick={() => navigateToHome('industries')}
            >
              <span>Industries We Serve</span>
              <Arrow />
            </button>

            <button
              type="button"
              className={`mobile-nav-item ${currentView.type === 'projects' ? 'active' : ''}`}
              onClick={() => navigateToProjects()}
            >
              <span>Projects Showcase</span>
              <Arrow />
            </button>

            <button
              type="button"
              className="mobile-nav-item"
              onClick={() => navigateToHome('safety')}
            >
              <span>Safety Standards (OHSAS 18001)</span>
              <Arrow />
            </button>

            <button
              type="button"
              className="mobile-nav-item"
              onClick={() => navigateToHome('contact')}
            >
              <span>Contact &amp; Head Office</span>
              <Arrow />
            </button>
          </div>

          <div className="mobile-drawer-cta">
            <button
              type="button"
              className="button button--red button--full"
              onClick={() => handleContactClick()}
            >
              Get Project Estimation <Arrow />
            </button>

            <div className="mobile-drawer-contact-links">
              <a href={`tel:+91${companyProfile.phonePrimary}`} className="drawer-quick-link">
                <PhoneCallIcon /> <span>Call {companyProfile.phonePrimary}</span>
              </a>
              <a
                href={`https://wa.me/91${companyProfile.phonePrimary}?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20S%20Ganapati%20Construction%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="drawer-quick-link whatsapp-link"
              >
                <WhatsAppIcon /> <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Conditional View Rendering */}
      <ErrorBoundary>
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
            initialProjectId={currentView.targetProjectId}
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
                {/* Desktop Hero Layout */}
                <div className="hero-copy desktop-hero-layout">
                  <p className="eyebrow eyebrow--light">
                    <span className="eyebrow-accent" aria-hidden="true" />
                    <span className="eyebrow-text">
                      {companyProfile.name} • Visakhapatnam, AP
                    </span>
                  </p>
                  <h1 className="hero-heading">
                    <span className="hero-title-main">Engineering Excellence</span>{' '}
                    <span className="hero-title-sub">in Steel Infrastructure &amp; Public Utilities.</span>
                  </h1>
                  <p className="hero-subtitle">
                    Specialists in heavy structural fabrications, high-altitude technological erection, rolling mill equipment assembly, and Government of Andhra Pradesh AMRUT 2.0 municipal water supply pipelines.
                  </p>

                  <div className="hero-badges-row">
                    <span className="hero-badge-pill hero-badge-pill--govt">
                      <CheckIcon className="pill-check-icon" />
                      <span>Official Work Order: WO 1314-A1 (Govt of AP AMRUT 2.0)</span>
                    </span>
                    <span className="hero-badge-pill">
                      <CheckIcon className="pill-check-icon" />
                      <span>OHSAS 18001 Certified Standards</span>
                    </span>
                    <span className="hero-badge-pill">
                      <CheckIcon className="pill-check-icon" />
                      <span>1,000+ Industrial Projects Delivered</span>
                    </span>
                  </div>

                  <div className="button-row hero-button-row">
                    <button
                      type="button"
                      className="button button--red hero-btn-primary"
                      onClick={() => navigateToProjects()}
                    >
                      Explore Our Work <Arrow />
                    </button>
                    <a className="button button--outline hero-btn-secondary" href="#contact">
                      Contact Office
                    </a>
                  </div>

                  <div className="slider-index">
                    <b>01</b>
                    <span>02</span>
                    <span>03</span>
                  </div>
                </div>

                {/* Mobile Hero Layout: Minimal, Visual-First Reference Design */}
                <div className="mobile-hero-ref-layout">
                  <p className="hero-ref-eyebrow">
                    <span className="hero-ref-bar" aria-hidden="true" />
                    <span className="hero-ref-eyebrow-text">
                      {companyProfile.name} • VISAKHAPATNAM, AP
                    </span>
                  </p>

                  <h1 className="hero-ref-heading">
                    <span className="hero-ref-white">Engineering steel.</span>
                    <span className="hero-ref-green">Building industry.</span>
                  </h1>

                  <p className="hero-ref-subtitle">
                    Structural fabrication, erection and heavy equipment works for industrial infrastructure.
                  </p>

                  <div className="hero-ref-buttons">
                    <button
                      type="button"
                      className="button button--red hero-ref-btn-primary"
                      onClick={() => navigateToProjects()}
                    >
                      <span>Explore Our Work</span>
                      <Arrow />
                    </button>
                    <a className="button hero-ref-btn-secondary" href="#contact">
                      Contact Office
                    </a>
                  </div>

                  {/* High-Impact Hero Photographic Showcase Card */}
                  <div
                    className="hero-ref-card"
                    onClick={() => navigateToProjects('jsw-toranagallu-steel-cement')}
                    role="button"
                    tabIndex={0}
                    aria-label="View Industrial Steelworks Project Dossier"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        navigateToProjects('jsw-toranagallu-steel-cement')
                      }
                    }}
                  >
                    <img
                      src="/assets/industrial-steelworks-reference.jpg"
                      alt="Industrial Steelworks Construction and Heavy Rigging"
                      className="hero-ref-img"
                      loading="eager"
                    />
                    <div className="hero-ref-badge">
                      <span className="hero-ref-badge-bar" aria-hidden="true" />
                      <span className="hero-ref-badge-text">INDUSTRIAL STEELWORKS</span>
                    </div>
                  </div>

                  {/* 3-Column Engineering Features Strip with Vector Icons */}
                  <div className="hero-ref-feature-strip">
                    <div
                      className="hero-ref-feature-col"
                      onClick={() => navigateToService('structural-works')}
                      role="button"
                      tabIndex={0}
                    >
                      <IBeamIcon className="hero-ref-feature-icon" />
                      <div className="hero-ref-feature-text">
                        <span>STEEL</span>
                        <span>FABRICATION</span>
                      </div>
                      <span className="hero-ref-feature-underline" />
                    </div>

                    <div className="hero-ref-feature-divider" />

                    <div
                      className="hero-ref-feature-col"
                      onClick={() => navigateToService('erection-works')}
                      role="button"
                      tabIndex={0}
                    >
                      <CraneHookIcon className="hero-ref-feature-icon" />
                      <div className="hero-ref-feature-text">
                        <span>HEAVY</span>
                        <span>LIFTING</span>
                      </div>
                      <span className="hero-ref-feature-underline" />
                    </div>

                    <div className="hero-ref-feature-divider" />

                    <div
                      className="hero-ref-feature-col"
                      onClick={() => navigateToService('equipment-installation')}
                      role="button"
                      tabIndex={0}
                    >
                      <FactoryPlantIcon className="hero-ref-feature-icon" />
                      <div className="hero-ref-feature-text">
                        <span>PLANT</span>
                        <span>INSTALLATION</span>
                      </div>
                      <span className="hero-ref-feature-underline" />
                    </div>
                  </div>
                </div>
              <p className="hero-statement">
                Precision<br />
                Engineering<br />
                for a stronger<br />
                tomorrow
              </p>
            </div>
          </section>

          {/* Key Milestone Metrics Strip (Desktop / Laptop Elongation Bar) */}
          <section className="metrics-strip" aria-label="Key company achievements">
            <div className="container">
              <div className="metrics-grid">
                {keyMetrics.map((m, idx) => (
                  <div className="metric-box" key={idx}>
                    <span className="metric-val">{m.value}</span>
                    <strong className="metric-lbl">{m.label}</strong>
                    <span className="metric-sub">{m.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Core Capabilities Strip */}
          <section className="capability-strip" aria-label="Core capabilities">
            {/* Desktop Capability Inner */}
            <div className="container capability-inner desktop-capability-layout">
              <strong>
                Our Core
                <br />
                Divisions
              </strong>
              <div className="capability-list">
                {servicesData.map((s) => (
                  <span
                    key={s.id}
                    onClick={() => navigateToService(s.id)}
                    role="button"
                    tabIndex={0}
                  >
                    {s.title}
                  </span>
                ))}
              </div>
            </div>

            {/* Mobile Capability Layout (Matches Reference Image Exactly) */}
            <div className="container mobile-capability-layout">
              <div className="mobile-cap-header">
                <p className="mobile-cap-kicker">
                  <span className="mobile-cap-bar" aria-hidden="true" />
                  <span>OUR CAPABILITIES</span>
                </p>
                <h2 className="mobile-cap-title">
                  Industrial work,<br />
                  <span className="mobile-cap-green">executed with precision.</span>
                </h2>
                <p className="mobile-cap-desc">
                  We deliver reliable, safe and high-quality solutions for industrial and public utility infrastructure projects through a skilled team and disciplined execution.
                </p>
              </div>

              <div className="mobile-cap-cards">
                <div
                  className="mobile-cap-card"
                  onClick={() => navigateToService('structural-works')}
                  role="button"
                  tabIndex={0}
                  aria-label="View Structural Fabrication Works"
                >
                  <div className="mobile-cap-card-img-wrap">
                    <img
                      src="/assets/welding.jpg"
                      alt="Industrial Structural Fabrication & Welding"
                      className="mobile-cap-img"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div
                  className="mobile-cap-card"
                  onClick={() => navigateToService('erection-works')}
                  role="button"
                  tabIndex={0}
                  aria-label="View Heavy Erection Works"
                >
                  <div className="mobile-cap-card-img-wrap">
                    <img
                      src="/assets/structure.jpg"
                      alt="High-Altitude Heavy Erection & Rigging"
                      className="mobile-cap-img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="about" id="about">
            <div className="container about-grid">
              <div className="section-copy">
                <SectionTitle
                  kicker="About S Ganapati Construction"
                  title={
                    <>
                      Building Industrial &amp; Public
                      <br />
                      Infrastructure with Discipline
                    </>
                  }
                />
                <p>
                  Headquartered in Visakhapatnam, Andhra Pradesh, <strong>S Ganapati Construction</strong> (Proprietor: <strong>{companyProfile.proprietor}</strong>, Managing Director: <strong>{companyProfile.managingDirector}</strong>, GSTIN: <strong>{companyProfile.gstin}</strong>) is an established industrial contractor specializing in structural steel fabrication, high-altitude erection, mechanical equipment assembly, and urban water infrastructure pipelines.
                </p>
                <div className="about-active-pill">
                  <span className="active-pill-icon-wrap"><GovEmblemIcon /></span>
                  <span>
                    <strong>Active Government Contract:</strong> AP AMRUT 2.0 Urban Water Supply (11,735+ Rmtr HDPE Pipeline laying in Mandapeta &amp; Peddapuram Municipalities)
                  </span>
                </div>
                <p>
                  Operating with certified safety management under <strong>OHSAS 18001</strong> and execution protocols modeled after the JSW-Dolvi emergency response framework, our 50+ strong professional engineering and rigging crews execute critical turnarounds and greenfield packages for integrated steel plants, rolling mills, cement complexes, and municipal authorities.
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
                <div className="button-row">
                  <button
                    type="button"
                    className="button button--red button--small"
                    onClick={navigateToAbout}
                  >
                    Know More About Us <Arrow />
                  </button>
                  <button
                    type="button"
                    className="button button--outline-dark button--small"
                    onClick={() => handleContactClick()}
                  >
                    Schedule Consultation
                  </button>
                </div>
              </div>
              <div
                className="about-photo"
                style={{ backgroundImage: "url('/assets/safety-team-site.jpg')" }}
              >
                <div className="photo-slash" aria-hidden="true" />
              </div>
              <aside className="mission">
                <span>
                  Our
                  <br />
                  Mission &amp;
                  <br />
                  Commitment
                </span>
                <i />
                <p>To deliver heavy industrial construction and public utility infrastructure with uncompromising zero-incident safety, certified quality standards, and disciplined milestone completion.</p>
              </aside>
            </div>
          </section>

          {/* Industries We Serve Section */}
          <section className="industries-section" id="industries">
            <div className="container">
              <div className="industries-heading">
                <SectionTitle kicker="Industries We Serve" title="Mission-Critical Sector Capabilities" />
                <p>
                  From metallurgical facilities and power stations to municipal water networks, we provide dedicated engineering, heavy machinery rigging, and civil integration across core infrastructure corridors.
                </p>
              </div>
              <div className="industries-grid">
                {industriesServed.map((ind) => (
                  <article className="industry-card" key={ind.id}>
                    <div>
                      <span className="industry-tag">{ind.tag}</span>
                      <h3>{ind.title}</h3>
                      <p>{ind.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* 6 Core Industrial Services Section */}
          <section className="services section" id="services">
            <div className="container">
              <div className="services-heading">
                <SectionTitle kicker="Our Top Services" title="Specialists in Industrial Construction & Erection" />
                <p>
                  We provide end-to-end solutions in structural fabrications, high-altitude erection, mechanical installation, and commissioning across heavy industrial sectors.
                </p>
              </div>
              <div className="service-grid service-grid--6">
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
                      <span className={index % 2 ? 'number red' : 'number'}>{service.number}</span>
                    </div>
                    <div className="service-body">
                      <h3>{service.title}</h3>
                      <p>{service.shortDescription}</p>
                      <ul className="service-caps-preview">
                        {service.capabilities.slice(0, 3).map((cap, cIdx) => (
                          <li key={cIdx}>{cap.title}</li>
                        ))}
                      </ul>
                      <button
                        type="button"
                        className="service-arrow-btn"
                        aria-label={`View detailed specifications on ${service.title}`}
                        onClick={(e) => {
                          e.stopPropagation()
                          navigateToService(service.id)
                        }}
                      >
                        Explore Specifications <Arrow />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Engineering Differentiators (Why Choose SGC) */}
          <section className="why-us-section" id="differentiators">
            <div className="container why-us-inner">
              <div className="why-us-heading">
                <SectionTitle kicker="Engineering Differentiators" title="Why Industrial Leaders Choose SGC" />
                <p>
                  Built on a foundation of precision engineering, heavy-duty fabrication yards, high-altitude rigging expertise, and zero-compromise safety protocols.
                </p>
              </div>
              <div className="why-us-grid">
                {whyChooseUs.map((w) => (
                  <div className="why-us-card" key={w.number}>
                    <b>{w.number}</b>
                    <h3>{w.title}</h3>
                    <p>{w.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Works: 4 Official Government & Heavy Industrial Contracts */}
          <section className="our-works-section" id="projects">
            <div className="container">
              <div className="our-works-header">
                <SectionTitle kicker="Our Works Portfolio" title="Verified Government & Industrial Contracts" />
                <p>
                  Official executed contracts and running account milestone deliveries across Government of Andhra Pradesh AMRUT 2.0 public water supply schemes and JSW Toranagallu integrated metallurgical and cement complexes.
                </p>
              </div>

              <div className="our-works-home-grid">
                {authenticProjects.map((proj) => (
                  <article
                    className="our-works-home-card clickable-home-card"
                    key={proj.id}
                    onClick={() => navigateToProjects(proj.id)}
                    tabIndex={0}
                    role="button"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        navigateToProjects(proj.id)
                      }
                    }}
                  >
                    <div className="home-work-img-wrap">
                      <img src={proj.coverImage} alt={proj.title} loading="lazy" decoding="async" />
                      <span className="home-work-num">Project {proj.projectNumber}</span>
                      <span className="home-work-badge">{proj.verifiedBadge}</span>
                      <div className="home-work-photo-indicator">
                        <span><CameraIcon className="card-photo-icon" /> {proj.galleryPhotos?.length || proj.imageSlots.length} Site Photographs</span>
                      </div>
                    </div>
                    <div className="home-work-content">
                      <div className="home-work-meta">
                        <span className="home-work-loc"><PinIcon className="card-loc-icon" /> {proj.location}</span>
                        <span className="home-work-cat">{proj.categoryLabel}</span>
                      </div>
                      <h3>{proj.title}</h3>
                      <div className="home-work-client-snippet">
                        <p><strong>Client:</strong> {proj.client}</p>
                        <p><strong>Contract:</strong> <code>{proj.workOrderNo}</code></p>
                      </div>
                      <p className="home-work-desc">{proj.summary}</p>
                      <div className="home-work-chips">
                        {proj.keyMetrics.slice(0, 3).map((m, mIdx) => (
                          <span className="home-work-chip" key={mIdx}>
                            <b>{m.value}</b> {m.label}
                          </span>
                        ))}
                      </div>
                      <div className="home-work-actions">
                        <button
                          type="button"
                          className="button button--red button--small"
                          onClick={(e) => {
                            e.stopPropagation()
                            navigateToProjects(proj.id)
                          }}
                        >
                          View Full Project &amp; Photos <Arrow />
                        </button>
                        <button
                          type="button"
                          className="button button--outline-dark button--small"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleContactClick(proj.shortTitle)
                          }}
                        >
                          Enquire
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="our-works-footer-cta">
                <div className="our-works-cta-text">
                  <h4>Looking for detailed measurement sheets, billing certificates, or lift schedules?</h4>
                  <p>Our engineering and planning office provides verified documentation and technical tenders for EPC contractors.</p>
                </div>
                <button
                  type="button"
                  className="button button--white"
                  onClick={() => navigateToProjects()}
                >
                  Explore All 4 Projects &amp; Specifications <Arrow />
                </button>
              </div>
            </div>
          </section>

          {/* Safety & Quality Section (OHSAS 18001 & JSW Model) */}
          <section className="quality" id="safety">
            <div className="container quality-grid">
              <div className="quality-copy">
                <SectionTitle kicker="Certifications & Safety" title="Certified OHSAS 18001 Standards" />
                <p>
                  All manufacturing, fabrication yards, and project sites strictly comply with the <strong>OHSAS 18001 Occupational Health &amp; Safety Management System</strong>, supported by smart confined-space cameras, automated PPE tracking, and the JSW-Dolvi Model.
                </p>
                <div className="feature-row">
                  {safetyCertifications.slice(0, 3).map((item, idx) => (
                    <div className="feature" key={idx}>
                      <Icon name={item.icon} />
                      <span>
                        {item.title.split(' ')[0]}
                        <br />
                        {item.title.split(' ').slice(1, 3).join(' ')}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="safety-assurance">
                  <span>Safety Policy</span>
                  <strong>"Safety is not a requirement, it is a responsibility."</strong>
                </div>
              </div>
              <div className="quality-visual">
                <div
                  className="quality-photo"
                  style={{ backgroundImage: "url('/assets/workforce-training.jpg')" }}
                />
                <div className="quality-caption">
                  <small>Our Safety Benchmark</small>
                  <strong>
                    OHSAS 18001 Certified.
                    <br />
                    Accident-Free Execution.
                  </strong>
                </div>
              </div>
              <div className="quality-red" aria-hidden="true">
                <span />
              </div>
            </div>
          </section>

          {/* Contact Section with Official GSTIN & Proprietor */}
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
                  Get in touch with S Ganapati Construction for technical tenders, fabrication drawings, crane lift schedules, or site surveys.
                </p>
              </div>
              <address className="contact-details">
                <p>
                  <Icon name="phone" />
                  <strong>
                    <a href={`tel:+91${companyProfile.phonePrimary}`} style={{ color: 'inherit' }}>
                      +91 {companyProfile.phonePrimary}
                    </a>
                    <br />
                    <a href={`tel:+91${companyProfile.phoneSecondary}`} style={{ color: 'inherit' }}>
                      +91 {companyProfile.phoneSecondary}
                    </a>
                    <br />
                    <a href={`tel:+91${companyProfile.phoneTertiary}`} style={{ color: 'inherit' }}>
                      +91 {companyProfile.phoneTertiary}
                    </a>
                  </strong>
                </p>
                <p>
                  <Icon name="mail" />
                  <a href={`mailto:${companyProfile.email}`} style={{ color: 'inherit' }}>
                    {companyProfile.email}
                  </a>
                </p>
                <p>
                  <Icon name="pin" />
                  <span>
                    <b>{companyProfile.name}</b>
                    <br />
                    Proprietor: {companyProfile.proprietor}
                    <br />
                    Managing Director: {companyProfile.managingDirector}
                    <br />
                    <b>GSTIN:</b> {companyProfile.gstin}
                    <br />
                    {companyProfile.address.doorNo}, {companyProfile.address.building},
                    <br />
                    {companyProfile.address.colony},
                    <br />
                    {companyProfile.address.area},
                    <br />
                    {companyProfile.address.state} - {companyProfile.address.pincode}
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
                    <option value="">Select Required Service</option>
                    <option value="Water & Public Infrastructure (AMRUT 2.0)">00. Water &amp; Public Infrastructure (AMRUT 2.0 Pipeline)</option>
                    <option value="Structural Works">01. Structural Works</option>
                    <option value="Fabrication Works">02. Fabrication Works</option>
                    <option value="Erection Works">03. Erection Works</option>
                    <option value="Equipment Installation">04. Equipment Installation</option>
                    <option value="Maintenance Services">05. Maintenance Services</option>
                    <option value="Commissioning Work">06. Commissioning &amp; Specialized Machinery</option>
                  </select>
                  <textarea aria-label="Project details" placeholder="Project Scope, Drawings, & Tonnage Details *" required />
                </div>
                <button className="button button--red button--small button--full" type="submit">
                  Send Project Enquiry <Arrow />
                </button>
              </form>
            </div>
          </section>
        </main>
      )}
      </ErrorBoundary>

      {/* Floating Mobile Bottom Action Bar */}
      <nav className="mobile-quick-bar" aria-label="Quick contact actions">
        <a href={`tel:+91${companyProfile.phonePrimary}`} className="mobile-quick-btn mobile-call-btn">
          <PhoneCallIcon />
          <span>Call Now</span>
        </a>
        <a
          href={`https://wa.me/91${companyProfile.phonePrimary}?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20S%20Ganapati%20Construction%20services.`}
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

      {/* Corporate Multi-Column Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-corporate-grid">
            {/* Col 1: Brand & Bio */}
            <div className="footer-col footer-col--brand">
              <Brand footer onBrandClick={() => navigateToHome()} />
              <p className="footer-company-desc">
                Engineering excellence in structural steel fabrication, high-altitude technological erection, rolling mills, and municipal water supply infrastructure across Andhra Pradesh and nationwide.
              </p>
              <div className="footer-proprietor-badge">
                <span><b>Proprietor:</b> {companyProfile.proprietor}</span>
                <span><b>Managing Director:</b> {companyProfile.managingDirector}</span>
                <span><b>GSTIN:</b> {companyProfile.gstin}</span>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="footer-col">
              <h4>Quick Navigation</h4>
              <ul className="footer-nav-list">
                <li><a href="#home" onClick={(e) => { e.preventDefault(); navigateToHome(); }}>Home Overview</a></li>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); navigateToAbout(); }}>About Us</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); navigateToHome('services'); }}>Core Services</a></li>
                <li><a href="#industries" onClick={(e) => { e.preventDefault(); navigateToHome('industries'); }}>Industries We Serve</a></li>
                <li><a href="#projects" onClick={(e) => { e.preventDefault(); navigateToProjects(); }}>Projects Showcase</a></li>
                <li><a href="#safety" onClick={(e) => { e.preventDefault(); navigateToHome('safety'); }}>Safety Standards</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); navigateToHome('contact'); }}>Contact Office</a></li>
              </ul>
            </div>

            {/* Col 3: Services Directory */}
            <div className="footer-col">
              <h4>Industrial Services</h4>
              <ul className="footer-nav-list">
                {servicesData.map((s) => (
                  <li key={s.id}>
                    <a href={`#/services/${s.id}`} onClick={(e) => { e.preventDefault(); navigateToService(s.id); }}>
                      {s.number}. {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Verified Credentials & HQ */}
            <div className="footer-col footer-col--contact">
              <h4>Registered Office</h4>
              <div className="footer-credentials-card">
                <p><strong>{companyProfile.name}</strong></p>
                <p>{companyProfile.address.doorNo}, {companyProfile.address.building}, {companyProfile.address.colony}, {companyProfile.address.area}, {companyProfile.address.state} - {companyProfile.address.pincode}</p>
                <p><strong>Direct Phones:</strong> +91 {companyProfile.phonePrimary} / +91 {companyProfile.phoneSecondary}</p>
                <p><strong>Alternate:</strong> +91 {companyProfile.phoneTertiary}</p>
                <p><strong>Email:</strong> {companyProfile.email}</p>
                <div className="footer-wo-tag">
                  <CheckIcon className="seal-check-icon" /> Active Govt Contract: AP AMRUT 2.0 (WO 1314-A1)
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <span>© {new Date().getFullYear()} {companyProfile.name}. All rights reserved.</span>
            <span>OHSAS 18001 Certified Standards • JSW-Dolvi Emergency Response Model • Civet Projects Pvt Ltd</span>
          </div>
        </div>
      </footer>

      {/* Interactive Project Dossier Modal */}
      <ProjectDossierModal
        project={dossierProject}
        isOpen={dossierModalOpen}
        onClose={() => setDossierModalOpen(false)}
        onContactClick={(pTitle) => handleContactClick(pTitle)}
      />
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
