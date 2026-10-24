import { companyProfile, safetyCertifications, trainingTopics } from '../data/servicesData'
import { useScrollProgress } from '../lib/motion'
import { GridLines, Kicker, Media, Reveal, SplitHeading } from './ui'

interface AboutPageProps {
  go: (hash: string) => void
  enquire: (topic?: string) => void
}

const focus = [
  {
    title: 'Precision engineering',
    text: 'Tight engineering tolerances, certified welding procedures (WPS/PQR) and sub-millimetre laser optical alignment on every lift.',
  },
  {
    title: 'On-site technical expertise',
    text: 'Experienced rigging masters, coded welders, structural supervisors and heavy-equipment operators for high-altitude technological erection.',
  },
  {
    title: 'Safety & compliance',
    text: 'OHSAS 18001, Contractor Safety Code enforcement, smart confined-space monitoring and JSW-Dolvi model emergency response plans.',
  },
  {
    title: 'On-time execution',
    text: 'Disciplined critical-path scheduling so plant shutdowns and greenfield packages are handed over ahead of commercial deadlines.',
  },
]

const credentials = [
  {
    tag: 'Government of Andhra Pradesh',
    title: 'AMRUT 2.0 urban water supply',
    rows: [
      ['Main contractor', 'M/s. Civet Projects Pvt Ltd · CIN U45500TG1018PTC122108'],
      ['Work order', 'WO.NO.CPPL/AP AMRUT 2.0/2025-26/1314-A1'],
      ['Project', 'Urban water supply & HDPE pipeline network — Mandapeta & Peddapuram municipalities'],
      ['Scope', '11,735+ Rmtr of 110–355 mm HDPE, CC road cutting, trenchless auger crossings, 100% hydrostatic testing'],
    ],
  },
  {
    tag: 'Industrial clients',
    title: 'Metallurgical & process facilities',
    rows: [
      ['Sectors', 'Integrated steel plants, cement manufacturing, bulk material handling terminals, thermal power stations'],
      ['Specialisations', 'Rolling-mill installation, coke oven SCP cars, CDQ systems, 2,500 TPH conveyor galleries'],
      ['Recent', 'JSW Steel Ltd & JSW Cement Ltd, Toranagallu — fabrication & erection via Indu Constructions'],
    ],
  },
]

export default function AboutPage({ go }: AboutPageProps) {
  const heroRef = useScrollProgress<HTMLElement>('exit', { smooth: 0.2 })

  const facts: [string, string][] = [
    ['Legal name', companyProfile.legalName],
    ['Proprietor', companyProfile.proprietor],
    ['Managing Director', companyProfile.managingDirector],
    ['GSTIN', companyProfile.gstin],
    ['Headquarters', 'Gopalapatnam, Visakhapatnam, AP'],
    ['Track record', '1,000+ projects executed'],
    ['Active contract', 'AP AMRUT 2.0 · 11.7+ km HDPE'],
  ]

  return (
    <main id="main" className="page">
      <section ref={heroRef} className="phero" aria-label="About us">
        <div className="phero-bg" aria-hidden="true">
          <img src="/assets/team.jpg" alt="" fetchPriority="high" decoding="async" />
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
            <span aria-current="page">About</span>
          </nav>
          <SplitHeading as="h1" className="phero-title" lines={['Built on', { em: 'discipline.' }]} delay={100} />
          <Reveal as="p" className="phero-lede" delay={450}>
            Specialists in structural fabrication, erection and heavy equipment works — headquartered in Visakhapatnam,
            working wherever steel needs to stand.
          </Reveal>
        </div>
      </section>

      <section className="paper about-profile">
        <div className="wrap two-col">
          <Kicker index="01">Company profile</Kicker>
          <div>
            <Reveal as="p" className="lead-xl">
              S Ganapati Construction is an industrial engineering and contracting firm specialising in structural works,
              heavy fabrication, on-site erection, mechanical equipment installation and turnkey commissioning.
            </Reveal>
            <Reveal as="p" className="body-l" delay={120}>
              Operating with certified occupational safety procedures under OHSAS 18001, our 50+ strong engineering and
              rigging crews execute critical turnarounds and greenfield packages for integrated steel plants, rolling
              mills, cement complexes, material handling corridors, power stations and municipal authorities.
            </Reveal>
            <Reveal className="titleblock titleblock--light" delay={200}>
              <div className="tb-head mono">
                <span>Registered particulars</span>
                <span>Verified</span>
              </div>
              {facts.map(([k, v]) => (
                <div className="tb-row" key={k}>
                  <span className="mono">{k}</span>
                  <strong>{v}</strong>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="ink about-leaders">
        <div className="wrap">
          <div className="sec-head">
            <Kicker index="02">Leadership</Kicker>
            <SplitHeading className="h-display" lines={['The people who', { em: 'sign the drawings.' }]} />
          </div>
          <div className="leaders">
            {[
              { name: companyProfile.proprietor, role: 'Proprietor' },
              { name: companyProfile.managingDirector, role: 'Managing Director' },
            ].map((l, i) => (
              <Reveal as="article" className="leader" key={l.name} delay={i * 120}>
                <span className="leader-mono" aria-hidden="true">
                  {l.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </span>
                <div>
                  <span className="mono">{l.role}</span>
                  <h3>{l.name}</h3>
                  <p>{companyProfile.legalName} · Visakhapatnam</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="paper about-creds">
        <div className="wrap">
          <div className="sec-head">
            <Kicker index="03">Credentials</Kicker>
            <SplitHeading className="h-display" lines={['Government contracts.', { em: 'Industrial clients.' }]} />
          </div>
          <div className="creds">
            {credentials.map((c, i) => (
              <Reveal as="article" className="cred" key={c.title} delay={i * 120}>
                <span className="mono cred-tag">{c.tag}</span>
                <h3>{c.title}</h3>
                <dl>
                  {c.rows.map(([k, v]) => (
                    <div key={k}>
                      <dt className="mono">{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="ink about-focus">
        <div className="wrap">
          <div className="sec-head">
            <Kicker index="04">How we work</Kicker>
            <SplitHeading className="h-display" lines={['Four rules,', { em: 'every site.' }]} />
          </div>
          <div className="caps-grid">
            {focus.map((f, i) => (
              <Reveal as="article" className="cap" key={f.title} delay={i * 80}>
                <span className="mono">0{i + 1}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="paper about-training">
        <div className="wrap training-grid">
          <div>
            <Kicker index="05">Workforce development</Kicker>
            <SplitHeading className="h-display" lines={['Trained before', { em: 'they climb.' }]} />
            <Reveal as="p" className="body-l" delay={120}>
              Every rigger, welder and supervisor completes a structured lifting-safety curriculum before stepping on
              site — and refreshes it in daily Tool Box Talks.
            </Reveal>
            <ol className="training">
              {trainingTopics.map((t, i) => (
                <Reveal as="li" key={t} delay={i * 50}>
                  <span className="mono">{String(i + 1).padStart(2, '0')}</span>
                  {t}
                </Reveal>
              ))}
            </ol>
          </div>
          <div className="training-media">
            <Media src="/assets/safety-team-site.jpg" alt="Safety officers inspecting a site" ratio="4 / 5" />
            <ul className="training-certs">
              {safetyCertifications.map((c) => (
                <Reveal as="li" key={c.title}>
                  {c.title}
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

    </main>
  )
}
