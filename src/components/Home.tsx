import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from 'react'
import {
  servicesData,
  companyProfile,
  industriesServed,
  whyChooseUs,
  safetyCertifications,
} from '../data/servicesData'
import { authenticProjects } from '../data/projectsData'
import { useScrollProgress, useInView } from '../lib/motion'
import { Arrow, ArrowUpRight, Counter, GridLines, Kicker, Media, Reveal, ScrollMarquee, SplitHeading } from './ui'

type Vars = CSSProperties & Record<`--${string}`, string | number>

interface HomeProps {
  go: (hash: string) => void
  enquire: (topic?: string) => void
}

export default function Home({ go, enquire }: HomeProps) {
  return (
    <main id="main">
      <Hero go={go} enquire={enquire} />
      <Manifesto go={go} />
      <Numbers />
      <Services go={go} />
      <Industries />
      <Showcase go={go} />
      <Principles />
      <Safety />
      <Clients />
    </main>
  )
}

/* ------------------------------------------------------------------- hero */

const istTime = () =>
  new Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date())

function Hero({ go, enquire }: HomeProps) {
  const ref = useScrollProgress<HTMLElement>('exit', { smooth: 0.2 })
  const [time, setTime] = useState(istTime)

  useEffect(() => {
    const id = window.setInterval(() => setTime(istTime()), 20000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section ref={ref} className="hero" aria-label="Introduction">
      <div className="hero-bg" aria-hidden="true">
        <img src="/assets/steel-worker.jpg" alt="" width={1600} height={1067} fetchPriority="high" decoding="async" />
      </div>
      <div className="hero-shade" aria-hidden="true" />
      <GridLines />

      <div className="hero-inner wrap">
        <div className="hero-meta mono">
          <span>17.69° N — 83.22° E</span>
          <span>Visakhapatnam · {time} IST</span>
          <span className="live">
            <i aria-hidden="true" /> AMRUT 2.0 · WO 1314-A1 · In execution
          </span>
        </div>

        <SplitHeading as="h1" className="hero-title" lines={['Forged in steel.', 'Raised with', { em: 'precision.' }]} delay={120} />

        <div className="hero-foot">
          <Reveal className="hero-lede" delay={650}>
            <p>
              Structural fabrication, high-altitude erection and heavy equipment installation for India&rsquo;s steel
              plants, cement complexes and public utilities.
            </p>
          </Reveal>
          <Reveal className="hero-actions" delay={800}>
            <button type="button" className="btn btn--solid" onClick={() => enquire()}>
              Start a project <Arrow />
            </button>
            <a
              className="btn btn--line"
              href="#/all-projects"
              onClick={(e) => {
                e.preventDefault()
                go('#/all-projects')
              }}
            >
              View our work
            </a>
          </Reveal>
        </div>
      </div>

      <div className="hero-scroll mono" aria-hidden="true">
        <span>Scroll</span>
        <i />
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- manifesto */

const manifesto =
  'For over a decade, S Ganapati Construction has fabricated, lifted and commissioned the steel that India’s plants and cities stand on — eleven kilometres of water main beneath two municipalities, technological structures ninety metres in the air, and more than a thousand projects delivered without a compromise on safety.'

function Manifesto({ go }: Pick<HomeProps, 'go'>) {
  const ref = useScrollProgress<HTMLDivElement>('focus', { smooth: 0.22 })
  const words = manifesto.split(' ')

  return (
    <section className="manifesto paper" id="about">
      <div className="wrap">
        <Kicker index="01">The company</Kicker>
        <div ref={ref} className="manifesto-text" style={{ '--n': words.length } as Vars}>
          <p>
            {words.map((w, i) => (
              <span key={i} style={{ '--i': i } as Vars}>
                {w}{' '}
              </span>
            ))}
          </p>
        </div>

        <div className="manifesto-foot">
          <Reveal className="person">
            <span className="mono">Proprietor</span>
            <strong>{companyProfile.proprietor}</strong>
          </Reveal>
          <Reveal className="person" delay={90}>
            <span className="mono">Managing Director</span>
            <strong>{companyProfile.managingDirector}</strong>
          </Reveal>
          <Reveal className="person" delay={180}>
            <span className="mono">Headquarters</span>
            <strong>Visakhapatnam, AP</strong>
          </Reveal>
          <Reveal className="person person--cta" delay={270}>
            <a
              className="link-arrow"
              href="#/about-us"
              onClick={(e) => {
                e.preventDefault()
                go('#/about-us')
              }}
            >
              Read our story <Arrow />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- numbers */

const stats = [
  { to: 11.7, decimals: 1, suffix: '+', unit: 'km', label: 'HDPE water main', sub: 'AP AMRUT 2.0 · 110–355 mm dia' },
  { to: 1000, decimals: 0, suffix: '+', unit: '', label: 'Projects executed', sub: 'Steel, power & infrastructure' },
  { to: 90, decimals: 0, suffix: '+', unit: 'm', label: 'Max lift elevation', sub: 'High-altitude technological towers' },
  { to: 100, decimals: 0, suffix: '+', unit: 'MT', label: 'Tandem crane lifts', sub: 'Engineered rigging operations' },
  { to: 50, decimals: 0, suffix: '+', unit: '', label: 'Certified professionals', sub: 'Riggers, coded welders, supervisors' },
]

/** Elevation of a Warren truss that draws itself, member by member, as it scrolls past. */
function TrussDrawing() {
  const ref = useScrollProgress<HTMLDivElement>('through', { smooth: 0.16 })
  const L = 60
  const R = 1140
  const top = 70
  const bottom = 210
  const panels = 9
  const step = (R - L) / panels

  const members: { x1: number; y1: number; x2: number; y2: number; kind: 'chord' | 'web' }[] = []
  members.push({ x1: L, y1: bottom, x2: R, y2: bottom, kind: 'chord' })
  members.push({ x1: L + step / 2, y1: top, x2: R - step / 2, y2: top, kind: 'chord' })
  for (let i = 0; i < panels; i++) {
    const x0 = L + i * step
    members.push({ x1: x0, y1: bottom, x2: x0 + step / 2, y2: top, kind: 'web' })
    members.push({ x1: x0 + step / 2, y1: top, x2: x0 + step, y2: bottom, kind: 'web' })
  }
  const total = members.length

  return (
    <div ref={ref} className="truss" aria-hidden="true">
      <svg viewBox="0 0 1200 290" preserveAspectRatio="xMidYMid meet">
        {Array.from({ length: panels + 1 }, (_, i) => (
          <g key={`g${i}`} className="truss-grid" style={{ '--a': i / (panels * 4) } as Vars}>
            <line x1={L + i * step} y1={16} x2={L + i * step} y2={bottom + 22} pathLength={1} />
            <circle cx={L + i * step} cy={14} r={9} />
            <text x={L + i * step} y={17.5}>
              {i + 1}
            </text>
          </g>
        ))}
        {members.map((m, i) => (
          <line
            key={i}
            className={`truss-${m.kind}`}
            x1={m.x1}
            y1={m.y1}
            x2={m.x2}
            y2={m.y2}
            pathLength={1}
            style={{ '--a': 0.02 + (i / total) * 0.22 } as Vars}
          />
        ))}
        {[L, R].map((x, i) => (
          <path key={`s${i}`} className="truss-support" d={`M${x} ${bottom} l-12 18 h24 z`} pathLength={1} style={{ '--a': 0.26 } as Vars} />
        ))}
        <g className="truss-dim" style={{ '--a': 0.28 } as Vars}>
          <line x1={L} y1={262} x2={R} y2={262} pathLength={1} />
          <line x1={L} y1={252} x2={L} y2={272} pathLength={1} />
          <line x1={R} y1={252} x2={R} y2={272} pathLength={1} />
          <text x={(L + R) / 2} y={284}>
            CLEAR SPAN 36 000 · IS 800 · HSFG 10.9
          </text>
        </g>
      </svg>
    </div>
  )
}

function Numbers() {
  return (
    <section className="numbers ink" aria-label="Key figures">
      <div className="wrap">
        <div className="numbers-head">
          <Kicker index="—">By the numbers</Kicker>
          <Reveal as="p" className="numbers-note mono">
            Fig. 01 — Warren truss elevation, drawn to the standard we build to.
          </Reveal>
        </div>
        <TrussDrawing />
        <div className="stats">
          {stats.map((s, i) => (
            <Reveal className="stat" key={s.label} delay={i * 80}>
              <div className="stat-value">
                <Counter to={s.to} decimals={s.decimals} suffix={s.suffix} />
                {s.unit && <small>{s.unit}</small>}
              </div>
              <strong>{s.label}</strong>
              <span className="mono">{s.sub}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* --------------------------------------------------------------- services */

function Services({ go }: Pick<HomeProps, 'go'>) {
  const [active, setActive] = useState(0)
  const [previous, setPrevious] = useState(-1)
  const activeRef = useRef(0)
  const items = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const next = Number((entry.target as HTMLElement).dataset.index)
          if (next === activeRef.current) continue
          setPrevious(activeRef.current)
          activeRef.current = next
          setActive(next)
        }
      },
      { rootMargin: '-48% 0px -48% 0px' },
    )
    items.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  const current = servicesData[active]

  return (
    <section className="services paper" id="services">
      <div className="wrap">
        <div className="sec-head">
          <Kicker index="02">Capabilities</Kicker>
          <SplitHeading className="h-display" lines={['Six disciplines.', { em: 'One standard.' }]} />
          <Reveal as="p" className="sec-lede" delay={200}>
            From the fabrication bay to the last HSFG bolt torqued ninety metres up — every package is engineered,
            executed and certified by our own crews.
          </Reveal>
        </div>

        <div className="svc">
          <div className="svc-stage" aria-hidden="true">
            <div className="svc-frame">
              {servicesData.map((s, i) => (
                <img
                  key={s.id}
                  src={s.heroImage}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className={i === active ? 'on' : i === previous ? 'prev' : ''}
                />
              ))}
              <div className="svc-frame-shade" />
              <div className="svc-count mono">
                <b key={current.number}>{current.number}</b>
                <span>/ {String(servicesData.length).padStart(2, '0')}</span>
              </div>
              <p className="svc-caption mono" key={current.id}>
                {current.tagline}
              </p>
            </div>
          </div>

          <ol className="svc-list">
            {servicesData.map((s, i) => (
              <li
                key={s.id}
                ref={(el) => {
                  items.current[i] = el
                }}
                data-index={i}
                className={`svc-item ${i === active ? 'is-active' : ''}`}
              >
                <a
                  href={`#/services/${s.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    go(`#/services/${s.id}`)
                  }}
                >
                  <span className="svc-num mono">{s.number}</span>
                  <img className="svc-thumb" src={s.heroImage} alt={s.title} loading="lazy" decoding="async" />
                  <h3>{s.title}</h3>
                  <p>{s.shortDescription}</p>
                  <ul className="svc-caps">
                    {s.capabilities.slice(0, 3).map((c) => (
                      <li key={c.title}>{c.title}</li>
                    ))}
                  </ul>
                  <span className="link-arrow">
                    Explore the discipline <Arrow />
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------- industries */

function Industries() {
  return (
    <section className="industries ink" id="industries">
      <ScrollMarquee items={['Steel & Metallurgy', 'Urban Water', 'Cement', 'Power', 'Ports & RMHS']} />
      <div className="wrap">
        <div className="sec-head sec-head--row">
          <div>
            <Kicker index="03">Sectors</Kicker>
            <SplitHeading className="h-display" lines={['Where the', { em: 'heavy work' }, 'happens.']} />
          </div>
          <Reveal as="p" className="sec-lede" delay={150}>
            From blast furnaces and rolling mills to municipal water networks — dedicated engineering, heavy rigging and
            civil integration across India&rsquo;s core infrastructure corridors.
          </Reveal>
        </div>

        <ul className="ind-list">
          {industriesServed.map((ind, i) => (
            <Reveal as="li" className="ind" key={ind.id} delay={i * 70}>
              <span className="ind-n mono">0{i + 1}</span>
              <h3>{ind.title}</h3>
              <p>{ind.description}</p>
              <span className="ind-tag mono">{ind.tag}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* --------------------------------------------------------------- showcase */

const showcaseImage: Record<string, string> = {
  'amrut-master-1314-a1': '/projects/d29f8059-59c6-42e1-9a85-bb6d7991cd32.jpg',
  'jsw-toranagallu-steel-cement': '/projects/0a98a433-bbc2-4c61-8704-a8c79019ee9a.jpg',
  'mandapeta-ulb-ra01': '/projects/66a3f2c8-783f-4a8d-bc77-25485927ebb4.jpg',
  'peddapuram-ulb-ra02': '/projects/340bd80d-55a0-494c-83df-694462dded8b.jpg',
}

/** Pinned section: vertical scroll drives a horizontal pan through the projects (desktop). */
function Showcase({ go }: Pick<HomeProps, 'go'>) {
  const wrapRef = useScrollProgress<HTMLDivElement>('sticky', { smooth: 0.12 })
  const trackRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const wrap = wrapRef.current
    const track = trackRef.current
    if (!wrap || !track) return
    const mq = window.matchMedia('(min-width: 1000px) and (prefers-reduced-motion: no-preference)')
    const update = () => {
      if (!mq.matches) {
        wrap.style.height = ''
        wrap.style.removeProperty('--dist')
        return
      }
      const dist = Math.max(0, track.scrollWidth - window.innerWidth)
      wrap.style.setProperty('--dist', `${dist}px`)
      wrap.style.height = `${dist + window.innerHeight}px`
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(track)
    window.addEventListener('resize', update)
    mq.addEventListener('change', update)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', update)
      mq.removeEventListener('change', update)
    }
  }, [])

  return (
    <section className="showcase ink" id="projects" aria-label="Selected projects">
      <div ref={wrapRef} className="sc-wrap">
        <div className="sc-sticky">
          <div ref={trackRef} className="sc-track">
            <div className="sc-intro">
              <Kicker index="04">Selected works</Kicker>
              <SplitHeading className="h-display" lines={['Verified contracts.', { em: 'Real steel.' }]} />
              <Reveal as="p" className="sec-lede" delay={150}>
                Government of Andhra Pradesh AMRUT 2.0 water schemes and the JSW Toranagallu steel and cement complex —
                every project backed by a work order, every milestone certified.
              </Reveal>
              <Reveal className="sc-hint mono" delay={260}>
                <span>Keep scrolling</span> <Arrow />
              </Reveal>
            </div>

            {authenticProjects.map((p) => (
              <article className="sc-card" key={p.id}>
                <a
                  href={`#/all-projects/${p.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    go(`#/all-projects/${p.id}`)
                  }}
                >
                  <div className="sc-img">
                    <img src={showcaseImage[p.id] ?? p.coverImage} alt={p.title} loading="lazy" decoding="async" />
                  </div>
                  <div className="sc-top mono">
                    <span>Project {p.projectNumber}</span>
                    <span className="sc-badge">{p.verifiedBadge}</span>
                  </div>
                  <div className="sc-body">
                    <h3>{p.shortTitle}</h3>
                    <dl className="sc-meta">
                      <div>
                        <dt className="mono">Location</dt>
                        <dd>{p.location}</dd>
                      </div>
                      <div>
                        <dt className="mono">Work order</dt>
                        <dd className="mono">{p.workOrderNo}</dd>
                      </div>
                    </dl>
                    <div className="sc-metrics">
                      {p.keyMetrics.slice(0, 2).map((m) => (
                        <span key={m.label}>
                          <b>{m.value}</b>
                          <small>{m.label}</small>
                        </span>
                      ))}
                    </div>
                    <span className="sc-open">
                      Open case study <ArrowUpRight />
                    </span>
                  </div>
                </a>
              </article>
            ))}

            <div className="sc-end">
              <p className="mono">28 site photographs · 4 case studies</p>
              <a
                className="sc-end-link"
                href="#/all-projects"
                onClick={(e) => {
                  e.preventDefault()
                  go('#/all-projects')
                }}
              >
                <span>The full</span>
                <em>archive</em>
                <Arrow />
              </a>
            </div>
          </div>
          <div className="sc-progress" aria-hidden="true">
            <span />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------- principles */

function Principles() {
  return (
    <section className="principles paper" id="differentiators">
      <div className="wrap principles-grid">
        <div className="principles-head">
          <Kicker index="05">Why SGC</Kicker>
          <SplitHeading className="h-display" lines={['Why industry', 'leaders', { em: 'choose us.' }]} />
          <Reveal as="p" className="sec-lede" delay={150}>
            Precision engineering, heavy-duty fabrication yards, high-altitude rigging expertise and zero-compromise
            safety — built in, not bolted on.
          </Reveal>
        </div>
        <ol className="principles-list">
          {whyChooseUs.map((w) => (
            <Reveal as="li" className="principle" key={w.number}>
              <span className="principle-n">{w.number}</span>
              <div>
                <h3>{w.title}</h3>
                <p>{w.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------- safety */

function SafetySeal() {
  const ref = useScrollProgress<HTMLDivElement>('through', { smooth: 0.1 })
  const text = 'OHSAS 18001 · ZERO HARM · PERMIT TO WORK · SAFETY FIRST · '
  return (
    <div ref={ref} className="seal" aria-hidden="true">
      <svg viewBox="0 0 200 200">
        <defs>
          <path id="seal-circle" d="M100 100 m-78 0 a78 78 0 1 1 156 0 a78 78 0 1 1 -156 0" />
        </defs>
        <text>
          <textPath href="#seal-circle" textLength={486} lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="seal-core">
        <b>18001</b>
        <small className="mono">OHSAS</small>
      </span>
    </div>
  )
}

function Safety() {
  return (
    <section className="safety ink" id="safety">
      <div className="wrap">
        <div className="safety-top">
          <Kicker index="06">Safety & certification</Kicker>
          <SafetySeal />
        </div>
        <SplitHeading
          as="h2"
          className="safety-quote"
          lines={['Safety is not a', 'requirement.', { em: 'It is a responsibility.' }]}
        />
        <div className="safety-grid">
          <Media className="safety-media" src="/assets/workforce-training.jpg" alt="Site crew during a safety training session" ratio="4 / 3">
            <span className="media-tag mono">Daily Tool Box Talk</span>
          </Media>
          <ul className="certs">
            {safetyCertifications.map((c, i) => (
              <Reveal as="li" className="cert" key={c.title} delay={i * 80}>
                <span className="mono">0{i + 1}</span>
                <h3>{c.title}</h3>
                <p>{c.description}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- clients */

const clients = [
  'Govt. of Andhra Pradesh · AMRUT 2.0',
  'Civet Projects Pvt Ltd',
  'JSW Steel Ltd',
  'JSW Cement Ltd',
  'Indu Constructions',
  'AIIB Urban Water Supply',
]

function Clients() {
  const ref = useInView<HTMLDivElement>()
  return (
    <section className="clients paper" aria-label="Clients">
      <div ref={ref} className="clients-inner">
        <p className="mono clients-label">Trusted on site by</p>
        <div className="clients-rail">
          <div className="clients-track">
            {[...clients, ...clients].map((c, i) => (
              <span key={i} aria-hidden={i >= clients.length}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
