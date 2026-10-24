import { useMemo, useState, type CSSProperties, type KeyboardEvent } from 'react'
import { authenticProjects, masterGalleryPhotos, type OfficialProject } from '../data/projectsData'
import { useScrollProgress } from '../lib/motion'
import type { LightboxImage } from './Lightbox'
import { Arrow, Counter, GridLines, Kicker, Media, Reveal, SplitHeading } from './ui'

type Vars = CSSProperties & Record<`--${string}`, string | number>

interface ProjectsPageProps {
  go: (hash: string) => void
  enquire: (topic?: string) => void
  view: (images: LightboxImage[], index: number) => void
}

export default function ProjectsPage({ go, enquire, view }: ProjectsPageProps) {
  const heroRef = useScrollProgress<HTMLElement>('exit', { smooth: 0.2 })

  return (
    <main id="main" className="page">
      <section ref={heroRef} className="phero" aria-label="Selected works">
        <div className="phero-bg" aria-hidden="true">
          <img src="/projects/e7d8de15-df77-4096-bbc0-d5ae7336e7e8.jpg" alt="" fetchPriority="high" decoding="async" />
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
            <span aria-current="page">Projects</span>
          </nav>
          <SplitHeading as="h1" className="phero-title" lines={['Selected', { em: 'works.' }]} delay={100} />
          <Reveal as="p" className="phero-lede" delay={450}>
            Official government work orders and industrial plant contracts — documented with work-order numbers,
            running-account milestones and photographs from the field.
          </Reveal>
          <Reveal className="phero-stats" delay={600}>
            <span>
              <b>
                <Counter to={4} />
              </b>
              <small className="mono">Verified contracts</small>
            </span>
            <span>
              <b>
                <Counter to={11735} suffix="+" />
              </b>
              <small className="mono">Running metres of HDPE</small>
            </span>
            <span>
              <b>
                <Counter to={masterGalleryPhotos.length} />
              </b>
              <small className="mono">Site photographs</small>
            </span>
            <span>
              <b>
                <Counter to={2} />
              </b>
              <small className="mono">States · AP & Karnataka</small>
            </span>
          </Reveal>
        </div>
      </section>

      <nav className="pj-index paper" aria-label="Projects on this page">
        <div className="wrap">
          {authenticProjects.map((p, i) => (
            <Reveal key={p.id} delay={i * 70}>
              <a
                href={`#/all-projects/${p.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  go(`#/all-projects/${p.id}`)
                }}
              >
                <span className="mono">{p.projectNumber}</span>
                <strong>{p.shortTitle}</strong>
                <em className="mono">{p.location}</em>
                <Arrow />
              </a>
            </Reveal>
          ))}
        </div>
      </nav>

      {authenticProjects.map((p, i) => (
        <ProjectCase key={p.id} project={p} tone={i % 2 ? 'ink' : 'paper'} enquire={enquire} view={view} />
      ))}

      <Archive view={view} />
    </main>
  )
}

/* ------------------------------------------------------------------- case */

// Landscape frames for the wide case-study banners (several site photos are portrait phone shots).
const caseLead: Record<string, string> = {
  'amrut-master-1314-a1': '/projects/d29f8059-59c6-42e1-9a85-bb6d7991cd32.jpg',
  'jsw-toranagallu-steel-cement': '/projects/0a98a433-bbc2-4c61-8704-a8c79019ee9a.jpg',
  'mandapeta-ulb-ra01': '/projects/66a3f2c8-783f-4a8d-bc77-25485927ebb4.jpg',
  'peddapuram-ulb-ra02': '/projects/ee6f4400-591f-4457-b8a5-ee338ef356d6.jpg',
}

function ProjectCase({
  project: p,
  tone,
  enquire,
  view,
}: {
  project: OfficialProject
  tone: 'ink' | 'paper'
  enquire: (topic?: string) => void
  view: (images: LightboxImage[], index: number) => void
}) {
  const curated: LightboxImage[] = (p.galleryPhotos?.length
    ? p.galleryPhotos.map((g) => ({ src: g.url, title: g.title, caption: g.description }))
    : p.imageSlots.filter((s) => s.imageUrl).map((s) => ({ src: s.imageUrl as string, title: s.title, caption: s.description }))
  ).slice(0, 4)
  const leadIndex = Math.max(0, curated.findIndex((ph) => ph.src === caseLead[p.id]))
  const photos = [...curated.slice(leadIndex, leadIndex + 1), ...curated.filter((_, i) => i !== leadIndex)]
  const lead = photos[0] ?? { src: p.coverImage, title: p.title }

  const facts: [string, string][] = [
    ['Client', p.client],
    ['End client', p.endClient],
    ['Work order', p.workOrderNo],
    ['Order date', p.workOrderDate],
    ['Period', p.validityPeriod],
    ['Location', p.location],
    ['District · State', p.districtState],
  ]

  const hasRecords = Boolean(p.ratesSchedule?.length || p.executedBillingItems?.length || p.financialSummary)

  return (
    <article className={`case ${tone}`} id={`project-${p.id}`} aria-labelledby={`project-${p.id}-title`}>
      <div className="wrap">
        <header className="case-head">
          <span className="case-n" aria-hidden="true">
            {p.projectNumber}
          </span>
          <div>
            <Reveal as="p" className="case-cat mono">
              {p.categoryLabel} · {p.contractType}
            </Reveal>
            <SplitHeading as="h2" id={`project-${p.id}-title`} className="case-title" lines={[p.title]} />
            <Reveal className="badge mono" delay={200}>
              <i aria-hidden="true" /> {p.verifiedBadge}
            </Reveal>
          </div>
        </header>

        <Media className="case-hero" src={lead.src} alt={lead.title ?? p.title} onClick={() => view(photos, 0)}>
          <span className="media-tag mono">{lead.title}</span>
        </Media>

        <div className="case-body">
          <Reveal as="dl" className="case-facts">
            {facts.map(([k, v]) => (
              <div key={k}>
                <dt className="mono">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </Reveal>

          <div className="case-main">
            <Reveal as="p" className="lead-xl">
              {p.summary}
            </Reveal>

            <div className="case-metrics">
              {p.keyMetrics.map((m, i) => (
                <Reveal className="case-metric" key={m.label} delay={i * 70}>
                  <b>{m.value}</b>
                  <span className="mono">{m.label}</span>
                </Reveal>
              ))}
            </div>

            <Reveal as="h3" className="mini mono">
              Scope of work
            </Reveal>
            <ol className="scope">
              {p.detailedScope.map((s, i) => (
                <Reveal as="li" key={i} delay={i * 50}>
                  <span className="mono">{String(i + 1).padStart(2, '0')}</span>
                  <p>{s}</p>
                </Reveal>
              ))}
            </ol>

            {p.pipeSchedule && <PipeSchedule rows={p.pipeSchedule} />}

            <Reveal as="h3" className="mini mono">
              Safety on this site
            </Reveal>
            <ul className="ticks">
              {p.safetyStandards.map((s) => (
                <Reveal as="li" key={s}>
                  {s}
                </Reveal>
              ))}
            </ul>

            {hasRecords && <Records project={p} />}

            <Reveal className="case-actions">
              <button type="button" className="btn btn--solid" onClick={() => enquire(p.shortTitle)}>
                Enquire about similar work <Arrow />
              </button>
            </Reveal>
          </div>
        </div>

        {photos.length > 1 && (
          <div className="case-gallery">
            {photos.slice(1).map((ph, i) => (
              <Media key={ph.src} src={ph.src} alt={ph.title ?? ''} ratio="4 / 5" onClick={() => view(photos, i + 1)}>
                <span className="media-tag mono">{ph.title}</span>
              </Media>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

function PipeSchedule({ rows }: { rows: NonNullable<OfficialProject['pipeSchedule']> }) {
  const lengths = rows.map((r) => Number(r.length.replace(/[^\d.]/g, '')) || 0)
  const max = Math.max(...lengths, 1)
  return (
    <>
      <Reveal as="h3" className="mini mono">
        Pipe schedule · HDPE PE100
      </Reveal>
      <div className="pipes">
        {rows.map((r, i) => (
          <Reveal className="pipe" key={r.dia} delay={i * 60} style={{ '--w': lengths[i] / max } as Vars}>
            <span className="pipe-dia mono">{r.dia.replace(' HDPE', '')}</span>
            <span className="pipe-bar" aria-hidden="true">
              <i />
            </span>
            <span className="pipe-len mono">{r.length}</span>
          </Reveal>
        ))}
      </div>
    </>
  )
}

function Records({ project: p }: { project: OfficialProject }) {
  const fin = p.financialSummary
  const finRows: [string, string | undefined][] = fin
    ? [
        ['Bill no.', fin.billNo],
        ['Invoice no.', fin.invoiceNo],
        ['Bill period', fin.billPeriod],
        ['Base amount', fin.baseAmount],
        ['GST', fin.gstAmount],
        ['Gross amount', fin.grossAmount],
        ['Cumulative value to date', fin.cumulativeValueToDate],
        ['Net paid to date', fin.netPaidToDate],
      ]
    : []

  return (
    <details className="records">
      <summary>
        <span className="mono">Measurement & billing records</span>
        <i aria-hidden="true" />
      </summary>
      <div className="records-body">
        {p.ratesSchedule && (
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>UOM</th>
                <th>Rate</th>
                <th>In words</th>
              </tr>
            </thead>
            <tbody>
              {p.ratesSchedule.map((r) => (
                <tr key={r.item}>
                  <td>{r.item}</td>
                  <td>{r.uom}</td>
                  <td>{r.rate}</td>
                  <td>{r.inwards}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {p.executedBillingItems && (
          <table>
            <thead>
              <tr>
                <th>Sl.</th>
                <th>Description</th>
                <th>UOM</th>
                <th>Rate</th>
                <th>Qty</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {p.executedBillingItems.map((b) => (
                <tr key={String(b.slNo)}>
                  <td>{b.slNo}</td>
                  <td>{b.description}</td>
                  <td>{b.uom}</td>
                  <td>{b.rate}</td>
                  <td>{b.qty}</td>
                  <td>{b.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {finRows.some(([, v]) => v) && (
          <dl className="records-fin">
            {finRows
              .filter(([, v]) => v)
              .map(([k, v]) => (
                <div key={k}>
                  <dt className="mono">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
          </dl>
        )}
      </div>
    </details>
  )
}

/* ---------------------------------------------------------------- archive */

function Archive({ view }: { view: (images: LightboxImage[], index: number) => void }) {
  const categories = useMemo(() => ['All', ...Array.from(new Set(masterGalleryPhotos.map((g) => g.categoryLabel)))], [])
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? masterGalleryPhotos : masterGalleryPhotos.filter((g) => g.categoryLabel === filter)
  const images: LightboxImage[] = shown.map((g) => ({ src: g.url, title: g.title, caption: g.description }))

  return (
    <section className="archive ink" id="archive">
      <div className="wrap">
        <div className="sec-head sec-head--row">
          <div>
            <Kicker index="✦">Field archive</Kicker>
            <SplitHeading className="h-display" lines={['Straight from', { em: 'the site.' }]} />
          </div>
          <div className="chips" role="group" aria-label="Filter photographs">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                className={c === filter ? 'is-on' : ''}
                aria-pressed={c === filter}
                onClick={() => setFilter(c)}
              >
                {c}
                <small className="mono">
                  {c === 'All' ? masterGalleryPhotos.length : masterGalleryPhotos.filter((g) => g.categoryLabel === c).length}
                </small>
              </button>
            ))}
          </div>
        </div>

        <div className="masonry" key={filter}>
          {shown.map((g, i) => (
            <Reveal
              as="figure"
              key={g.id}
              delay={(i % 3) * 70}
              role="button"
              tabIndex={0}
              aria-label={`View photograph: ${g.title}`}
              onClick={() => view(images, i)}
              onKeyDown={(e: KeyboardEvent) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  view(images, i)
                }
              }}
            >
              <img src={g.url} alt={g.title} loading="lazy" decoding="async" />
              <figcaption>
                <strong>{g.title}</strong>
                <span className="mono">{g.categoryLabel}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
