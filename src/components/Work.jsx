import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import S from '../content.js';
import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import SkillIcon from './SkillIcon.jsx';

const ZoomIcon = () => (
  <svg className="hint-icon" viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
    <path fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M19 11a8 8 0 11-16 0 8 8 0 0116 0z" />
    <path fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" d="M11 8v6M8 11h6" />
  </svg>
);

const ReplayIcon = () => (
  <svg className="replay-icon" viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
    <path fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" d="M1 4v6h6M23 20v-6h-6" />
    <path fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15" />
  </svg>
);

const Btn = ({ label, href }) =>
  href
    ? <a className="bt" href={href} target="_blank" rel="noopener noreferrer">{label}</a>
    : <span className="bt off">{label} (soon)</span>;

/**
 * ProjectMedia handles dynamic video/gif playback for project thumbnails and modal previews.
 * - Plays video/gif when first displayed in view.
 * - Switches to static image when playback finishes (onEnded).
 * - Restarts from the beginning when hover is released (onMouseLeave).
 * - Allows clicking thumbnail to open image lightbox zoom.
 * - Zero layout shift with exact 16/10 matching frame.
 */
function ProjectMedia({ project, isModal = false, onZoom }) {
  const [hasEnded, setHasEnded] = useState(false);
  const [mediaError, setMediaError] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [inView, setInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const previewSrc = project.preview;
  const isVideo = previewSrc && !previewSrc.endsWith('.gif');
  const isGif = previewSrc && previewSrc.endsWith('.gif');

  // Check if project has no valid image or video preview
  const hasNoImage = (!project.image || imgError) && (!previewSrc || mediaError);

  // Trigger autoplay only when element scrolls into view (or immediately in modal)
  useEffect(() => {
    if (isModal) {
      setInView(true);
      return;
    }
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isModal]);

  // Autoplay video or run GIF duration when inView becomes true
  useEffect(() => {
    if (!inView || !previewSrc || mediaError || hasNoImage) return;

    if (isVideo && videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise) {
        playPromise.catch(() => {
          // If browser blocked autoplay policy, gracefully show static image
          setHasEnded(true);
        });
      }
    } else if (isGif) {
      const timer = setTimeout(() => {
        setHasEnded(true);
      }, project.previewDuration || 4500);
      return () => clearTimeout(timer);
    }
  }, [inView, previewSrc, mediaError, isVideo, isGif, project.previewDuration, hasNoImage]);

  // When hover starts: switch to static image
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (isVideo && videoRef.current) {
      videoRef.current.pause();
    }
  };

  // When cursor moves away: restart video/gif from the beginning
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!previewSrc || mediaError || hasNoImage) return;
    if (isVideo && videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise) {
        playPromise.then(() => {
          setHasEnded(false);
        }).catch(() => { });
      }
    } else if (isGif) {
      setHasEnded(false);
      setTimeout(() => {
        setHasEnded(true);
      }, project.previewDuration || 4500);
    }
  };

  const handleVideoEnded = () => {
    setHasEnded(true);
  };

  const handleReplay = (e) => {
    e.stopPropagation();
    if (!previewSrc || mediaError || hasNoImage) return;
    if (isVideo && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().then(() => {
        setHasEnded(false);
      }).catch(() => { });
    } else if (isGif) {
      setHasEnded(false);
      setTimeout(() => {
        setHasEnded(true);
      }, project.previewDuration || 4500);
    }
  };

  const handleThumbnailClick = () => {
    if (!hasNoImage && onZoom && project.image) {
      onZoom({ src: project.image, alt: `Screenshot of ${project.title}` });
    }
  };

  // Video is visible if preview exists, has not ended, not hovered, and no error
  const showVideo = Boolean(previewSrc && isVideo && !hasEnded && !mediaError && !hasNoImage && !isHovered);
  const showGif = Boolean(previewSrc && isGif && !hasEnded && !mediaError && !hasNoImage && !isHovered);

  return (
    <div
      ref={containerRef}
      className={`${isModal ? 'modal-preview' : 'shot'}${hasNoImage ? ' no' : ''}`}
      onMouseEnter={!isModal && !hasNoImage ? handleMouseEnter : undefined}
      onMouseLeave={!isModal && !hasNoImage ? handleMouseLeave : undefined}
      onClick={!hasNoImage ? handleThumbnailClick : undefined}
      role={!hasNoImage ? "button" : undefined}
      tabIndex={!hasNoImage ? 0 : -1}
      onKeyDown={(e) => {
        if (!hasNoImage && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          handleThumbnailClick();
        }
      }}
      aria-label={!hasNoImage ? `Inspect screenshot of ${project.title}` : undefined}
      title={!hasNoImage ? "Click to view enlarged screenshot" : undefined}
    >
      {/* Static Image (shown when video ended or as fallback) */}
      {project.image && !hasNoImage && (
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          loading={isModal ? 'eager' : 'lazy'}
          decoding="async"
          draggable={false}
          onError={() => setImgError(true)}
          className="project-static-img"
          style={{
            opacity: showVideo || showGif ? 0 : 1,
            transition: 'opacity 0.35s ease-in-out'
          }}
        />
      )}

      {/* Video Preview */}
      {previewSrc && isVideo && !mediaError && !hasNoImage && (
        <video
          ref={videoRef}
          src={previewSrc}
          muted
          playsInline
          draggable={false}
          preload={inView ? 'metadata' : 'none'}
          onEnded={handleVideoEnded}
          onError={() => setMediaError(true)}
          className="project-video-preview"
          style={{
            opacity: showVideo ? 1 : 0,
            pointerEvents: 'none',
            transition: 'opacity 0.35s ease-in-out'
          }}
        />
      )}

      {/* GIF Preview */}
      {previewSrc && isGif && !mediaError && showGif && !hasNoImage && (
        <img
          src={previewSrc}
          alt={`Preview of ${project.title}`}
          draggable={false}
          onError={() => setMediaError(true)}
          className="project-gif-preview"
          style={{
            opacity: showGif ? 1 : 0,
            pointerEvents: 'none',
            transition: 'opacity 0.35s ease-in-out'
          }}
        />
      )}

      {/* Zoom indicator with crisp SVG icon */}
      {!isModal && !hasNoImage && (
        <span className="shot-hint" aria-hidden="true">
          <ZoomIcon />
          <span>Zoom</span>
        </span>
      )}

      {isModal && hasEnded && previewSrc && !mediaError && !hasNoImage && (
        <button
          type="button"
          className="preview-replay-btn"
          onClick={handleReplay}
          aria-label="Replay preview video"
        >
          <ReplayIcon />
          <span>Replay preview</span>
        </button>
      )}
    </div>
  );
}

function Project({ p, onOpenCaseStudy, onZoom }) {
  return (
    <Reveal as="article" className="pl">
      <ProjectMedia project={p} onZoom={onZoom} />
      <div>
        <span className="yr">{p.year}{p.category ? ` • ${p.category}` : ''}</span>
        <h3>{p.title}</h3>
        <p>{p.text}</p>
        <div className="st">
          {(p.stack || []).map((s) => (
            <b key={s}>
              <SkillIcon name={s} />
              <span>{s}</span>
            </b>
          ))}
        </div>
        <div className="bts">
          <Btn label="Live demo" href={p.demo} />
          <Btn label="Source code" href={p.repo} />
          {p.caseStudy && (
            <button
              type="button"
              className="bt bt-case"
              onClick={() => onOpenCaseStudy(p)}
              aria-label={`View architecture details and case study for ${p.title}`}
            >
              <svg className="bt-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              <span>Architecture &amp; Details ↗</span>
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

  // Lock body scroll when any modal is open
  useEffect(() => {
    if (modalProject || lightboxImg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalProject, lightboxImg]);

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
    <Section id="work" title="Works">
      {/* Category Filter Bar */}
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

      {/* Architecture & Details Modal */}
      {modalProject && createPortal(
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
              {/* Media Preview inside Modal: Displays video/gif, transitions to static image when finished, matching 16/10 frame */}
              <ProjectMedia
                project={modalProject}
                isModal={true}
                onZoom={setLightboxImg}
              />

              {/* SEKALIGUS: Architecture & Details Info Sections */}
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
                  {(modalProject.stack || []).map((s) => (
                    <b key={s}>
                      <SkillIcon name={s} />
                      <span>{s}</span>
                    </b>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                <div className="modal-actions-links">
                  <Btn label="Open Live Demo ↗" href={modalProject.demo} />
                  <Btn label="View Source Code ↗" href={modalProject.repo} />
                </div>
                <button
                  type="button"
                  className="bt bt-modal-foot-close"
                  onClick={() => setModalProject(null)}
                  aria-label="Close architecture and details dialog"
                >
                  <svg className="bt-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                    <path fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M18 6L6 18M6 6l12 12" />
                  </svg>
                  <span>Close</span>
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Image Lightbox Modal */}
      {lightboxImg && createPortal(
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
            <img src={lightboxImg.src} alt={lightboxImg.alt} draggable={false} />
            <p className="lightbox-caption">{lightboxImg.alt}</p>
          </div>
        </div>,
        document.body
      )}
    </Section>
  );
}
