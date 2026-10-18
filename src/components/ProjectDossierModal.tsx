import { useState, useEffect } from 'react'
import { OfficialProject } from '../data/projectsData'

interface ProjectDossierModalProps {
  project: OfficialProject | null
  isOpen: boolean
  onClose: () => void
  onContactClick: (projectName: string) => void
}

const Arrow = () => <span aria-hidden="true">→</span>

export default function ProjectDossierModal({
  project,
  isOpen,
  onClose,
  onContactClick,
}: ProjectDossierModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'technical' | 'credentials' | 'gallery'>('overview')

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen || !project) return null

  return (
    <div className="dossier-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="dossier-modal-container"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        {/* Header */}
        <header className="dossier-modal-header">
          <div className="dossier-header-meta">
            <span className="dossier-num-badge">{project.projectNumber}</span>
            <span className="dossier-verified-seal">{project.verifiedBadge}</span>
            <span className="dossier-cat-pill">{project.categoryLabel}</span>
          </div>
          <button
            type="button"
            className="dossier-close-btn"
            aria-label="Close project dossier"
            onClick={onClose}
          >
            ✕
          </button>
          <h2 className="dossier-title">{project.title}</h2>
          <div className="dossier-submeta">
            <span>📍 <strong>Location:</strong> {project.location}, {project.districtState}</span>
            <span>🏛️ <strong>Client:</strong> {project.client}</span>
            <span>📄 <strong>Contract:</strong> {project.workOrderNo}</span>
          </div>

          {/* Navigation Tabs */}
          <nav className="dossier-tabs-nav" aria-label="Dossier section tabs">
            <button
              type="button"
              className={`dossier-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              📋 Scope &amp; Overview
            </button>
            <button
              type="button"
              className={`dossier-tab-btn ${activeTab === 'technical' ? 'active' : ''}`}
              onClick={() => setActiveTab('technical')}
            >
              ⚙️ Technical &amp; Quantities
            </button>
            <button
              type="button"
              className={`dossier-tab-btn ${activeTab === 'credentials' ? 'active' : ''}`}
              onClick={() => setActiveTab('credentials')}
            >
              🏛️ Official Credentials
            </button>
            <button
              type="button"
              className={`dossier-tab-btn ${activeTab === 'gallery' ? 'active' : ''}`}
              onClick={() => setActiveTab('gallery')}
            >
              🖼️ Site Photos (Slots)
            </button>
          </nav>
        </header>

        {/* Modal Body */}
        <div className="dossier-modal-body">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="dossier-tab-pane">
              <div className="dossier-metrics-grid">
                {project.keyMetrics.map((m, idx) => (
                  <div className="dossier-metric-card" key={idx}>
                    <span className="dossier-metric-val">{m.value}</span>
                    <strong className="dossier-metric-lbl">{m.label}</strong>
                  </div>
                ))}
              </div>

              <div className="dossier-section-block">
                <h3>Executive Summary</h3>
                <p className="dossier-lead">{project.summary}</p>
              </div>

              <div className="dossier-section-block">
                <h3>Detailed Scope of Execution</h3>
                <ul className="dossier-scope-list">
                  {project.detailedScope.map((item, idx) => (
                    <li key={idx}>
                      <span className="dossier-check-icon">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="dossier-section-block">
                <h3>Quality &amp; Site Safety Protocols</h3>
                <ul className="dossier-safety-list">
                  {project.safetyStandards.map((safe, idx) => (
                    <li key={idx}>
                      <span className="dossier-shield-icon">🛡️</span>
                      <span>{safe}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 2: TECHNICAL & QUANTITIES */}
          {activeTab === 'technical' && (
            <div className="dossier-tab-pane">
              {project.pipeSchedule && (
                <div className="dossier-section-block">
                  <h3>HDPE Pipeline Diameter &amp; Length Schedule</h3>
                  <div className="dossier-table-wrapper">
                    <table className="dossier-table">
                      <thead>
                        <tr>
                          <th>Pipe Diameter</th>
                          <th>Total Running Meters</th>
                          <th>Specification</th>
                        </tr>
                      </thead>
                      <tbody>
                        {project.pipeSchedule.map((p, idx) => (
                          <tr key={idx}>
                            <td><strong>{p.dia}</strong></td>
                            <td>{p.length}</td>
                            <td>{p.specification || 'PE100 High-Density Polyethylene'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {project.ratesSchedule && (
                <div className="dossier-section-block">
                  <h3>Contract Rate Schedule (MT Basis)</h3>
                  <div className="dossier-table-wrapper">
                    <table className="dossier-table">
                      <thead>
                        <tr>
                          <th>Job Description</th>
                          <th>UOM</th>
                          <th>Unit Rate</th>
                          <th>Rate in Words</th>
                        </tr>
                      </thead>
                      <tbody>
                        {project.ratesSchedule.map((r, idx) => (
                          <tr key={idx}>
                            <td><strong>{r.item}</strong></td>
                            <td>{r.uom}</td>
                            <td><span className="rate-badge">{r.rate}</span></td>
                            <td>{r.inwards}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {project.executedBillingItems && (
                <div className="dossier-section-block">
                  <h3>Certified &amp; Executed Quantities (Running Account Measurement)</h3>
                  <div className="dossier-table-wrapper">
                    <table className="dossier-table">
                      <thead>
                        <tr>
                          <th>Sl.</th>
                          <th>Particulars / Nature of Work</th>
                          <th>UOM</th>
                          <th>Rate</th>
                          <th>Quantity</th>
                          <th>Certified Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {project.executedBillingItems.map((b, idx) => (
                          <tr key={idx}>
                            <td>{b.slNo}</td>
                            <td>{b.description}</td>
                            <td>{b.uom}</td>
                            <td>{b.rate}</td>
                            <td><strong>{b.qty}</strong></td>
                            <td><strong>{b.amount}</strong></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: OFFICIAL CREDENTIALS */}
          {activeTab === 'credentials' && (
            <div className="dossier-tab-pane">
              <div className="credentials-cards-grid">
                <div className="cred-card">
                  <h4>Work Order &amp; Agreement Details</h4>
                  <dl className="cred-dl">
                    <dt>Contract Code / Ref:</dt>
                    <dd><strong>{project.workOrderNo}</strong></dd>
                    <dt>Contract Type:</dt>
                    <dd>{project.contractType}</dd>
                    <dt>Date of Issuance:</dt>
                    <dd>{project.workOrderDate}</dd>
                    <dt>Contract Validity:</dt>
                    <dd>{project.validityPeriod}</dd>
                  </dl>
                </div>

                <div className="cred-card">
                  <h4>Client &amp; Beneficiary Entities</h4>
                  <dl className="cred-dl">
                    <dt>Issuing Contractor:</dt>
                    <dd><strong>{project.client}</strong></dd>
                    <dt>Client Location:</dt>
                    <dd>{project.clientLocation}</dd>
                    <dt>End Beneficiary:</dt>
                    <dd>{project.endClient}</dd>
                    <dt>Project Site:</dt>
                    <dd>{project.location}, {project.districtState}</dd>
                  </dl>
                </div>

                <div className="cred-card">
                  <h4>Executing Contractor Identity</h4>
                  <dl className="cred-dl">
                    <dt>Company:</dt>
                    <dd><strong>M/S S GANAPATI CONSTRUCTION</strong></dd>
                    <dt>Proprietor / Key Contact:</dt>
                    <dd>Garaka Sreedevi / G Suresh Reddy</dd>
                    <dt>GSTIN:</dt>
                    <dd><strong>37DIPPG2975E1ZX</strong></dd>
                    <dt>Registered Office:</dt>
                    <dd>11-30/27, F-303, GSN Towers, Bhagath Singh Nagar, Yellapuvanipalem, Gopalapatnam, Visakhapatnam, AP 530027</dd>
                  </dl>
                </div>

                {project.financialSummary && (
                  <div className="cred-card cred-card--highlight">
                    <h4>Milestone Billing Summary</h4>
                    <dl className="cred-dl">
                      {project.financialSummary.billNo && (
                        <>
                          <dt>Bill Number:</dt>
                          <dd><strong>{project.financialSummary.billNo}</strong></dd>
                        </>
                      )}
                      {project.financialSummary.invoiceNo && (
                        <>
                          <dt>Tax Invoice Ref:</dt>
                          <dd>{project.financialSummary.invoiceNo}</dd>
                        </>
                      )}
                      {project.financialSummary.billPeriod && (
                        <>
                          <dt>Measurement Period:</dt>
                          <dd>{project.financialSummary.billPeriod}</dd>
                        </>
                      )}
                      {project.financialSummary.grossAmount && (
                        <>
                          <dt>Gross Billed Value:</dt>
                          <dd><strong className="gross-tag">{project.financialSummary.grossAmount}</strong></dd>
                        </>
                      )}
                      {project.financialSummary.cumulativeValueToDate && (
                        <>
                          <dt>Cumulative Value to Date:</dt>
                          <dd><strong className="cumulative-tag">{project.financialSummary.cumulativeValueToDate}</strong></dd>
                        </>
                      )}
                    </dl>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 4: SITE PHOTOS & GALLERY SLOTS */}
          {activeTab === 'gallery' && (
            <div className="dossier-tab-pane">
              <div className="gallery-placeholder-callout">
                <div className="gallery-callout-icon">📸</div>
                <div>
                  <h4>{project.awaitingUserImages ? 'Project Site Photography Setup' : 'Verified Project Site Photography'}</h4>
                  <p>{project.placeholderNote}</p>
                </div>
              </div>

              <div className="image-slots-grid">
                {project.imageSlots.map((slot, sIdx) => (
                  <div className="image-slot-card" key={sIdx}>
                    <div className="image-slot-preview">
                      <img src={slot.imageUrl || project.coverImage} alt={slot.title} loading="lazy" />
                      <div className="image-slot-overlay">
                        <span className="slot-pill">Photo {sIdx + 1}</span>
                        <span className="slot-status">{slot.imageUrl ? 'Verified Site Photo' : 'Photo Slot Ready'}</span>
                      </div>
                    </div>
                    <div className="image-slot-body">
                      <h5>{slot.title}</h5>
                      <p>{slot.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <footer className="dossier-modal-footer">
          <div className="dossier-footer-left">
            <span className="dossier-footer-seal">Official Verified Record • S Ganapati Construction</span>
          </div>
          <div className="dossier-footer-right">
            <button type="button" className="button button--outline-dark" onClick={onClose}>
              Close Dossier
            </button>
            <button
              type="button"
              className="button button--red"
              onClick={() => {
                onClose()
                onContactClick(project.shortTitle)
              }}
            >
              Request Proposal for Similar Scope <Arrow />
            </button>
          </div>
        </footer>
      </div>
    </div>
  )
}
