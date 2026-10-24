import { useCallback, useEffect, useRef, useState, type CSSProperties, type FormEvent } from 'react'
import { flushSync } from 'react-dom'
import { servicesData, companyProfile } from './data/servicesData'
import { prefersReducedMotion, useInView } from './lib/motion'
import Home from './components/Home'
import ServicePage from './components/ServicePage'
import ProjectsPage from './components/ProjectsPage'
import AboutPage from './components/AboutPage'
import Lightbox, { type LightboxImage } from './components/Lightbox'
import { Arrow, ArrowUpRight, Brand, Kicker, PhoneIcon, Reveal, SplitHeading, WhatsAppIcon } from './components/ui'

/* ---------------------------------------------------------------- routing */

type View = { type: 'home' } | { type: 'service'; id: string } | { type: 'about' } | { type: 'projects' }
interface Route {
  view: View
  anchor?: string
}

function parseHash(hash: string): Route {
  const h = hash.replace(/^#/, '')
  const service = h.match(/^\/?services\/([\w-]+)/)
  if (service && servicesData.some((s) => s.id === service[1])) return { view: { type: 'service', id: service[1] } }
  if (/^\/?(about-us|about-company)$/.test(h)) return { view: { type: 'about' } }
  const projects = h.match(/^\/?(?:all-projects|projects-showcase)\/?([\w-]*)/)
  if (projects) return { view: { type: 'projects' }, anchor: projects[1] ? `project-${projects[1]}` : undefined }
  if (h && !h.startsWith('/')) return { view: { type: 'home' }, anchor: h }
  return { view: { type: 'home' } }
}

const sameView = (a: View, b: View) =>
  a.type === b.type && (a.type !== 'service' || (b.type === 'service' && a.id === b.id))

const viewKey = (v: View) => (v.type === 'service' ? `service-${v.id}` : v.type)

function jumpTo(anchor: string | undefined, smooth: boolean) {
  const behavior: ScrollBehavior = smooth && !prefersReducedMotion() ? 'smooth' : 'instant'
  const el = anchor ? document.getElementById(anchor) : null
  if (el) el.scrollIntoView({ behavior, block: 'start' })
  else window.scrollTo({ top: 0, behavior })
}

const tel = (n: string) => `tel:+91${n.replace(/\s/g, '')}`
const whatsapp = `https://wa.me/91${companyProfile.phonePrimary.replace(/\s/g, '')}?text=${encodeURIComponent(
  'Hi, I would like to enquire about S Ganapati Construction services.',
)}`

const navLinks = [
  { label: 'Capabilities', hash: '#services', match: 'service' },
  { label: 'Projects', hash: '#/all-projects', match: 'projects' },
  { label: 'About', hash: '#/about-us', match: 'about' },
  { label: 'Safety', hash: '#safety', match: '' },
]

/* -------------------------------------------------------------------- app */

export default function App() {
  const initial = useRef(parseHash(window.location.hash))
  const [view, setView] = useState<View>(initial.current.view)
  const [curtain, setCurtain] = useState<'idle' | 'in' | 'out'>('idle')
  const [menuOpen, setMenuOpen] = useState(false)
  const [topic, setTopic] = useState('')
  const [lightbox, setLightbox] = useState<{ images: LightboxImage[]; index: number } | null>(null)
  const viewRef = useRef(view)
  viewRef.current = view
  const lastHash = useRef(window.location.hash)
  const timers = useRef<number[]>([])
  const headerRef = useRef<HTMLElement>(null)

  const transition = useCallback((route: Route) => {
    timers.current.forEach(window.clearTimeout)
    timers.current = []
    if (prefersReducedMotion()) {
      flushSync(() => setView(route.view))
      jumpTo(route.anchor, false)
      return
    }
    setCurtain('in')
    timers.current.push(
      window.setTimeout(() => {
        flushSync(() => setView(route.view))
        jumpTo(route.anchor, false)
        setCurtain('out')
        timers.current.push(window.setTimeout(() => setCurtain('idle'), 750))
      }, 560),
    )
  }, [])

  const sync = useCallback(() => {
    const hash = window.location.hash
    if (hash === lastHash.current) return
    lastHash.current = hash
    const route = parseHash(hash)
    if (sameView(route.view, viewRef.current)) jumpTo(route.anchor, true)
    else transition(route)
  }, [transition])

  const go = useCallback(
    (hash: string) => {
      setMenuOpen(false)
      if (hash === window.location.hash || (hash === '#/' && !window.location.hash)) {
        jumpTo(parseHash(hash).anchor, true)
        return
      }
      window.history.pushState(null, '', hash)
      sync()
    },
    [sync],
  )

  const scrollToId = useCallback((id: string) => {
    setMenuOpen(false)
    jumpTo(id, true)
  }, [])

  const enquire = useCallback(
    (subject?: string) => {
      setTopic(subject ?? '')
      scrollToId('contact')
    },
    [scrollToId],
  )

  const view_ = useCallback((images: LightboxImage[], index: number) => setLightbox({ images, index }), [])

  // Browser back / forward and hand-edited hashes.
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.addEventListener('popstate', sync)
    window.addEventListener('hashchange', sync)
    if (initial.current.anchor) requestAnimationFrame(() => jumpTo(initial.current.anchor, false))
    return () => {
      window.removeEventListener('popstate', sync)
      window.removeEventListener('hashchange', sync)
    }
  }, [sync])

  // Header: solid after the hero, hidden while scrolling down, back on scroll up. Plus page progress.
  useEffect(() => {
    let lastY = window.scrollY
    let frame = 0
    const root = document.documentElement
    const update = () => {
      frame = 0
      const y = window.scrollY
      const max = Math.max(1, root.scrollHeight - window.innerHeight)
      root.style.setProperty('--scroll', (y / max).toFixed(4))
      const header = headerRef.current
      if (header) {
        header.classList.toggle('is-solid', y > 60)
        if (Math.abs(y - lastY) > 6) {
          header.classList.toggle('is-hidden', y > lastY && y > 500)
          lastY = y
        }
      }
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('is-locked', menuOpen)
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const titles: Record<View['type'], string> = {
    home: 'S Ganapati Construction — Structural Fabrication, Erection & Heavy Equipment Works',
    service: '',
    about: 'About — S Ganapati Construction',
    projects: 'Projects — S Ganapati Construction',
  }
  useEffect(() => {
    document.title =
      view.type === 'service'
        ? `${servicesData.find((s) => s.id === view.id)?.title ?? 'Capabilities'} — S Ganapati Construction`
        : titles[view.type]
  })

  const linkProps = (hash: string) => ({
    href: hash,
    onClick: (e: { preventDefault: () => void }) => {
      e.preventDefault()
      if (hash === '#contact') scrollToId('contact')
      else go(hash)
    },
  })

  const activeService = view.type === 'service' ? servicesData.find((s) => s.id === view.id) : undefined

  return (
    <div className="site">
      <a className="skip" href="#main" onClick={(e) => { e.preventDefault(); scrollToId('main') }}>
        Skip to content
      </a>

      {/* ------------------------------------------------------------ header */}
      <header ref={headerRef} className={`nav ${menuOpen ? 'is-menu' : ''}`}>
        <div className="wrap nav-inner">
          <Brand onClick={() => go('#/')} />
          <nav className="nav-links" aria-label="Primary">
            {navLinks.map((l) => (
              <a key={l.label} {...linkProps(l.hash)} className={l.match === view.type ? 'is-active' : ''}>
                <span>{l.label}</span>
              </a>
            ))}
          </nav>
          <div className="nav-right">
            <a className="nav-phone mono" href={tel(companyProfile.phonePrimary)}>
              +91 {companyProfile.phonePrimary}
            </a>
            <button type="button" className="btn btn--solid btn--sm nav-cta" onClick={() => enquire()}>
              Get a quote <Arrow />
            </button>
            <button
              type="button"
              className="burger"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="menu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
        <div className="nav-progress" aria-hidden="true" />
      </header>

      {/* -------------------------------------------------------------- menu */}
      <div id="menu" className={`menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen} inert={!menuOpen}>
        <div className="wrap menu-inner">
          <nav className="menu-main" aria-label="Menu">
            {[
              { label: 'Home', hash: '#/' },
              { label: 'Capabilities', hash: '#services' },
              { label: 'Projects', hash: '#/all-projects' },
              { label: 'About', hash: '#/about-us' },
              { label: 'Safety', hash: '#safety' },
              { label: 'Contact', hash: '#contact' },
            ].map((l, i) => (
              <a key={l.label} {...linkProps(l.hash)} style={{ '--i': i } as CSSProperties}>
                <span className="mono">0{i + 1}</span>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="menu-side">
            <p className="mono">Capabilities</p>
            <ul>
              {servicesData.map((s) => (
                <li key={s.id}>
                  <a {...linkProps(`#/services/${s.id}`)}>
                    <span className="mono">{s.number}</span> {s.title}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mono">Talk to us</p>
            <a className="menu-phone" href={tel(companyProfile.phonePrimary)}>
              +91 {companyProfile.phonePrimary}
            </a>
            <a className="menu-mail" href={`mailto:${companyProfile.email}`}>
              {companyProfile.email}
            </a>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- pages */}
      <div className="view" key={viewKey(view)}>
        {view.type === 'service' && activeService ? (
          <ServicePage service={activeService} go={go} enquire={enquire} view={view_} />
        ) : view.type === 'about' ? (
          <AboutPage go={go} enquire={enquire} />
        ) : view.type === 'projects' ? (
          <ProjectsPage go={go} enquire={enquire} view={view_} />
        ) : (
          <Home go={go} enquire={enquire} />
        )}
      </div>

      <Contact topic={topic} setTopic={setTopic} />
      <Footer go={go} linkProps={linkProps} />

      {/* --------------------------------------------------------- overlays */}
      <nav className="dock" aria-label="Quick contact">
        <a href={tel(companyProfile.phonePrimary)}>
          <PhoneIcon /> Call
        </a>
        <a href={whatsapp} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon /> WhatsApp
        </a>
        <button type="button" onClick={() => enquire()}>
          Quote <Arrow />
        </button>
      </nav>

      <div className={`curtain curtain--${curtain}`} aria-hidden="true">
        <img src="/assets/ganapati-logo.png" alt="" width={56} height={71} />
      </div>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onIndex={(index) => setLightbox((lb) => (lb ? { ...lb, index } : lb))}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  )
}

/* ---------------------------------------------------------------- contact */

const serviceOptions = [
  'Water & Public Infrastructure (AMRUT 2.0)',
  ...servicesData.map((s) => s.title),
  'Other / not sure yet',
]

function Contact({ topic, setTopic }: { topic: string; setTopic: (t: string) => void }) {
  const [sent, setSent] = useState(false)
  const options = topic && !serviceOptions.includes(topic) ? [topic, ...serviceOptions] : serviceOptions

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const field = (k: string) => String(data.get(k) ?? '').trim()
    const body = [
      `Name: ${field('name')}`,
      `Company: ${field('company') || '—'}`,
      `Email: ${field('email')}`,
      `Phone: ${field('phone') || '—'}`,
      `Service: ${field('service') || '—'}`,
      '',
      field('details'),
    ].join('\n')
    const subject = `Project enquiry${field('service') ? ` — ${field('service')}` : ''} (${field('name')})`
    window.location.href = `mailto:${companyProfile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section className="contact ink" id="contact">
      <div className="wrap">
        <Kicker index="✦">Start a project</Kicker>
        <SplitHeading className="h-mega" lines={['Have steel', { em: 'to raise?' }]} />

        <div className="contact-grid">
          <div className="contact-info">
            <Reveal className="contact-phones">
              {[companyProfile.phonePrimary, companyProfile.phoneSecondary, companyProfile.phoneTertiary].map((p, i) => (
                <a key={p} href={tel(p)} className={i === 0 ? 'is-primary' : ''}>
                  +91 {p} <ArrowUpRight />
                </a>
              ))}
            </Reveal>
            <Reveal as="dl" className="contact-dl" delay={100}>
              <div>
                <dt className="mono">Email</dt>
                <dd>
                  <a href={`mailto:${companyProfile.email}`}>{companyProfile.email}</a>
                </dd>
              </div>
              <div>
                <dt className="mono">Registered office</dt>
                <dd>
                  {companyProfile.address.doorNo}, {companyProfile.address.building}, {companyProfile.address.colony},{' '}
                  {companyProfile.address.area}, {companyProfile.address.state} — {companyProfile.address.pincode}
                </dd>
              </div>
              <div>
                <dt className="mono">GSTIN</dt>
                <dd className="mono">{companyProfile.gstin}</dd>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <a className="btn btn--line" href={whatsapp} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> Message on WhatsApp
              </a>
            </Reveal>
          </div>

          <Reveal as="form" className="enquiry" onSubmit={submit} delay={150}>
            <div className="enquiry-head mono">
              <span>Project enquiry</span>
              <span>Form SGC-01</span>
            </div>
            <label className="field">
              <span className="mono">Name *</span>
              <input name="name" required autoComplete="name" />
            </label>
            <label className="field">
              <span className="mono">Company</span>
              <input name="company" autoComplete="organization" />
            </label>
            <label className="field">
              <span className="mono">Email *</span>
              <input name="email" type="email" required autoComplete="email" />
            </label>
            <label className="field">
              <span className="mono">Phone</span>
              <input name="phone" type="tel" inputMode="tel" autoComplete="tel" />
            </label>
            <label className="field field--wide">
              <span className="mono">Service required</span>
              <select name="service" value={topic} onChange={(e) => setTopic(e.target.value)}>
                <option value="">Select a discipline</option>
                {options.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </label>
            <label className="field field--wide">
              <span className="mono">Scope, drawings & tonnage *</span>
              <textarea name="details" required rows={4} />
            </label>
            <button className="btn btn--solid btn--full" type="submit">
              Send enquiry <Arrow />
            </button>
            {sent && (
              <p className="enquiry-note" role="status">
                Your email app should now open with the enquiry ready to send. Prefer to talk? Call +91{' '}
                {companyProfile.phonePrimary}.
              </p>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------- footer */

function Footer({
  go,
  linkProps,
}: {
  go: (hash: string) => void
  linkProps: (hash: string) => { href: string; onClick: (e: { preventDefault: () => void }) => void }
}) {
  const markRef = useInView<HTMLDivElement>()
  return (
    <footer className="footer ink">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Brand onClick={() => go('#/')} />
            <p>{companyProfile.slogan}.</p>
          </div>
          <nav className="footer-col" aria-label="Company">
            <p className="mono">Company</p>
            <a {...linkProps('#/')}>Home</a>
            <a {...linkProps('#/about-us')}>About</a>
            <a {...linkProps('#/all-projects')}>Projects</a>
            <a {...linkProps('#safety')}>Safety</a>
            <a {...linkProps('#contact')}>Contact</a>
          </nav>
          <nav className="footer-col" aria-label="Capabilities">
            <p className="mono">Capabilities</p>
            {servicesData.map((s) => (
              <a key={s.id} {...linkProps(`#/services/${s.id}`)}>
                {s.title}
              </a>
            ))}
          </nav>
          <div className="footer-col">
            <p className="mono">Office</p>
            <span>
              {companyProfile.address.building}, {companyProfile.address.area}
              <br />
              {companyProfile.address.state} {companyProfile.address.pincode}
            </span>
            <a href={tel(companyProfile.phonePrimary)}>+91 {companyProfile.phonePrimary}</a>
            <a href={tel(companyProfile.phoneSecondary)}>+91 {companyProfile.phoneSecondary}</a>
            <a href={`mailto:${companyProfile.email}`}>{companyProfile.email}</a>
          </div>
        </div>

        <div ref={markRef} className="footer-mark" aria-hidden="true">
          {'GANAPATI'.split('').map((c, i) => (
            <span key={i} style={{ '--i': i } as CSSProperties}>
              {c}
            </span>
          ))}
        </div>

        <div className="footer-bottom mono">
          <span>
            © {new Date().getFullYear()} {companyProfile.legalName}
          </span>
          <span>GSTIN {companyProfile.gstin} · OHSAS 18001</span>
          <button type="button" onClick={() => jumpTo(undefined, true)}>
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}
