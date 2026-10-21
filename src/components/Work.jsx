import { useState, useEffect } from 'react';
import S from '../content.js';
import Section from './Section.jsx';
import Reveal from './Reveal.jsx';

const Btn = ({ label, href }) =>
  href
    ? <a className="bt" href={href} target="_blank" rel="noopener">{label}</a>
    : <span className="bt off">{label} (soon)</span>;

function Project({ p, onOpenCaseStudy, onZoom }) {
  const [missing, setMissing] = useState(false);
  return (
    <Reveal as="article" className="pl">
      <div
        className={`shot${missing ? ' no' : ''}`}
        onClick={() => !missing && p.image && onZoom({ src: p.image, alt: `Screenshot of ${p.title}` })}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if ((e.key === 'Enter' || e.key === ' ') && !missing && p.image) {
            e.preventDefault();
            onZoom({ src: p.image, alt: `Screenshot of ${p.title}` });
          }
        }}
        aria-label={`Inspect screenshot of ${p.title}`}
        title={!missing ? "Click to view enlarged screenshot" : undefined}
      >
        <img src={p.image} alt={`Screenshot of ${p.title}`} loading="lazy" decoding="async" onError={() => setMissing(true)} />
        {!missing && <span className="shot-hint" aria-hidden="true">🔍 Zoom</span>}
      </div>
      <div>
        <span className="yr">{p.year}{p.category ? ` • ${p.category}` : ''}</span>
        <h3>{p.title}</h3>
        <p>{p.text}</p>
        <div className="st">{(p.stack || []).map((s) => <b key={s}>{s}</b>)}</div>
        <div className="bts">
          <Btn label="Live demo" href={p.demo} />
          <Btn label="Source code" href={p.repo} />
          {p.caseStudy && (
            <button
              type="button"
              className="bt bt-case"
              onClick={() => onOpenCaseStudy(p)}
              aria-label={`View architecture details for ${p.title}`}
            >
              Architecture & Details ↗
            </button>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default function Work() {
  const [activeCat, setActiveCat] = useState('All');
  const [modalProject, setModalProject] = useState(null);
  const [lightboxImg, setLightboxImg] = useState(null);

  const categories = ['All', ...Array.from(new Set((S.projects || []).map((p) => p.category).filter(Boolean)))];

  const filtered = activeCat === 'All'
    ? (S.projects || [])
    : (S.projects || []).filter((p) => p.category === activeCat);

  // Close modals on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setModalProject(null);
        setLightboxImg(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <Section id="work" title="Work">
      {/* Category Filter Badges */}
      <div className="filter-bar" role="tablist" aria-label="Project category filter">
        {categories.map((cat) => {
          const count = cat === 'All'
            ? (S.projects || []).length
            : (S.projects || []).filter((p) => p.category === cat).length;
          const isActive = activeCat === cat;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`filter-btn${isActive ? ' on' : ''}`}
              onClick={() => setActiveCat(cat)}
            >
              {cat} <span className="filter-count">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Projects List */}
      <div className="projects-grid">
        {filtered.map((p) => (
          <Project
            key={p.title}
            p={p}
            onOpenCaseStudy={setModalProject}
            onZoom={setLightboxImg}
          />
        ))}
      </div>

      {/* Architecture & Case Study Modal */}
      {modalProject && (
        <div
          className="modal-backdrop"
          onClick={() => setModalProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
        >
          <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="modal-head">
              <div>
                <span className="yr">{modalProject.year} • {modalProject.category}</span>
                <h3 id="case-study-title">{modalProject.title}</h3>
                {modalProject.caseStudy?.role && (
                  <p className="modal-meta">
                    <strong>Role:</strong> {modalProject.caseStudy.role} &nbsp;|&nbsp; <strong>Timeline:</strong> {modalProject.caseStudy.timeline}
                  </p>
                )}
              </div>
              <button
                type="button"
                className="modal-close"
                onClick={() => setModalProject(null)}
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-sec">
                <h4>System Overview</h4>
                <p>{modalProject.caseStudy?.overview || modalProject.text}</p>
              </div>

              {modalProject.caseStudy?.challenges && (
                <div className="modal-sec">
                  <h4>The Challenges Addressed</h4>
                  <ul className="modal-list">
                    {modalProject.caseStudy.challenges.map((c, i) => <li key={i}>{c}</li>)}
                  </ul>
                </div>
              )}

              {modalProject.caseStudy?.solutions && (
                <div className="modal-sec">
                  <h4>System Architecture & Implementation Decisions</h4>
                  <ul className="modal-list">
                    {modalProject.caseStudy.solutions.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                </div>
              )}

              {modalProject.caseStudy?.highlights && (
                <div className="modal-sec">
                  <h4>Key Deliverables & Validation</h4>
                  <ul className="modal-list">
                    {modalProject.caseStudy.highlights.map((h, i) => <li key={i}>{h}</li>)}
                  </ul>
                </div>
              )}

              <div className="modal-sec">
                <h4>Technical Stack</h4>
                <div className="st">
                  {(modalProject.stack || []).map((s) => <b key={s}>{s}</b>)}
                </div>
              </div>

              <div className="bts modal-actions">
                <Btn label="Open Live Demo ↗" href={modalProject.demo} />
                <Btn label="View Source Code ↗" href={modalProject.repo} />
                <button type="button" className="bt" onClick={() => setModalProject(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Lightbox Modal */}
      {lightboxImg && (
        <div
          className="modal-backdrop lightbox-backdrop"
          onClick={() => setLightboxImg(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close lightbox-close"
              onClick={() => setLightboxImg(null)}
              aria-label="Close image"
            >
              ✕
            </button>
            <img src={lightboxImg.src} alt={lightboxImg.alt} />
            <p className="lightbox-caption">{lightboxImg.alt}</p>
          </div>
        </div>
      )}
    </Section>
  );
}
