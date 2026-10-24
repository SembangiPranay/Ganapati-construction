import { servicesData, type ServiceDetail } from '../data/servicesData'
import { useScrollProgress } from '../lib/motion'
import type { LightboxImage } from './Lightbox'
import { Arrow, GridLines, Kicker, Media, Reveal, SplitHeading } from './ui'

interface ServicePageProps {
  service: ServiceDetail
  go: (hash: string) => void
  enquire: (topic?: string) => void
  view: (images: LightboxImage[], index: number) => void
}

export default function ServicePage({ service, go, enquire, view }: ServicePageProps) {
  const heroRef = useScrollProgress<HTMLElement>('exit', { smooth: 0.2 })
  const index = servicesData.findIndex((s) => s.id === service.id)
  const next = servicesData[(index + 1) % servicesData.length]
  const photos: LightboxImage[] = [service.heroImage, ...service.gallery].map((src, i) => ({
    src,
    title: service.title,
    caption: i === 0 ? service.tagline : `${service.title} — field photograph ${i + 1}`,
  }))

  return (
    <main id="main" className="page">
      <section ref={heroRef} className="phero" aria-label={service.title}>
        <div className="phero-bg" aria-hidden="true">
          <img src={service.heroImage} alt="" fetchPriority="high" decoding="async" />
        </div>
        <div className="phero-shade" aria-hidden="true" />
        <GridLines />
        <div className="wrap phero-inner">
          <nav className="crumbs mono" aria-label="Breadcrumb">
            <a
              href="#/"
              onClick={(e) => {
                e.preventDefault()
                go('#/')
              }}
            >
              Home
            </a>
            <span>/</span>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault()
                go('#services')
              }}
            >
              Capabilities
            </a>
            <span>/</span>
            <span aria-current="page">{service.number}</span>
          </nav>
          <span className="phero-num" aria-hidden="true">
            {service.number}
          </span>
          <SplitHeading as="h1" className="phero-title" lines={[service.title]} delay={100} />
          <Reveal as="p" className="phero-lede" delay={450}>
            {service.tagline}
          </Reveal>
          <Reveal className="phero-actions" delay={600}>
            <button type="button" className="btn btn--solid" onClick={() => enquire(service.title)}>
              Request a quote <Arrow />
            </button>
            <a
              className="btn btn--line"
              href="#overview"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Specifications
            </a>
          </Reveal>
        </div>
      </section>

      <section className="paper sp-overview" id="overview">
        <div className="wrap two-col">
          <Kicker index="01">Overview</Kicker>
          <Reveal as="p" className="lead-xl">
            {service.fullDescription}
          </Reveal>
        </div>
      </section>

      <section className="paper sp-caps">
        <div className="wrap">
          <div className="sec-head">
            <Kicker index="02">Core capabilities</Kicker>
            <SplitHeading className="h-display" lines={['What we', { em: 'deliver.' }]} />
          </div>
          <div className="caps-grid">
            {service.capabilities.map((c, i) => (
              <Reveal as="article" className="cap" key={c.title} delay={i * 80}>
                <span className="mono">0{i + 1}</span>
                <h3>{c.title}</h3>
                <p>{c.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="ink sp-specs">
        <div className="wrap">
          <div className="sec-head">
            <Kicker index="03">Technical specification</Kicker>
            <SplitHeading className="h-display" lines={['Built to', { em: 'code.' }]} />
          </div>

          <Reveal className="titleblock">
            <div className="tb-head mono">
              <span>SGC · {service.number} · {service.id.toUpperCase()}</span>
              <span>Sheet 1 of 1</span>
            </div>
            {service.specifications.map((s) => (
              <div className="tb-row" key={s.label}>
                <span className="mono">{s.label}</span>
                <strong>{s.value}</strong>
              </div>
            ))}
          </Reveal>

          <div className="lists-3">
            <SpecList title="Machinery & equipment" items={service.machineryEquipment} />
            <SpecList title="Quality & safety" items={service.qualitySafety} delay={100} />
            <SpecList title="Applications" items={service.applications} delay={200} />
          </div>
        </div>
      </section>

      <section className="paper sp-gallery">
        <div className="wrap">
          <div className="sec-head">
            <Kicker index="04">In the field</Kicker>
          </div>
          <div className="sp-gal">
            {photos.map((p, i) => (
              <Media
                key={p.src}
                className={`sp-gal-item sp-gal-item--${i}`}
                src={p.src}
                alt={p.caption ?? service.title}
                onClick={() => view(photos, i)}
              >
                <span className="media-tag mono">Fig. {String(i + 1).padStart(2, '0')}</span>
              </Media>
            ))}
          </div>

          <nav className="svc-tabs" aria-label="All capabilities">
            {servicesData.map((s) => (
              <a
                key={s.id}
                href={`#/services/${s.id}`}
                className={s.id === service.id ? 'is-current' : ''}
                aria-current={s.id === service.id ? 'page' : undefined}
                onClick={(e) => {
                  e.preventDefault()
                  if (s.id !== service.id) go(`#/services/${s.id}`)
                }}
              >
                <span className="mono">{s.number}</span> {s.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <a
        className="next-panel"
        href={`#/services/${next.id}`}
        onClick={(e) => {
          e.preventDefault()
          go(`#/services/${next.id}`)
        }}
      >
        <div className="next-bg" aria-hidden="true">
          <img src={next.heroImage} alt="" loading="lazy" decoding="async" />
        </div>
        <div className="wrap next-inner">
          <span className="mono">Next discipline — {next.number}</span>
          <strong>{next.title}</strong>
          <Arrow className="next-arrow" />
        </div>
      </a>
    </main>
  )
}

function SpecList({ title, items, delay = 0 }: { title: string; items: string[]; delay?: number }) {
  return (
    <Reveal className="speclist" delay={delay}>
      <h3 className="mono">{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Reveal>
  )
}
