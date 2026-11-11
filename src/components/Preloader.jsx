import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';

// Welcoming, architectural sentence with optimal rhythm and length
const WORDS = ['WELCOME', 'TO', 'MY', 'PORTFOLIO.'];

export default function Preloader({ onDone }) {
  const [phase, setPhase] = useState('loading'); // 'loading' | 'reveal'
  const [loadPercent, setLoadPercent] = useState(0);

  const overlayRef = useRef(null);
  const trackRef = useRef(null);
  const dotExpandRef = useRef(null);
  const scrollPromptRef = useRef(null);
  const charElsRef = useRef([]);
  const tlRef = useRef(null);
  const targetProgress = useRef(0);
  const isZooming = useRef(false);
  const isExiting = useRef(false);

  // Trigger grand exit animation
  const completeExit = useCallback(() => {
    if (isExiting.current) return;
    isExiting.current = true;

    try {
      sessionStorage.setItem('intro_seen', '1');
    } catch {
      /* storage disabled */
    }

    const overlay = overlayRef.current;
    // Reveal main content underneath the expanded dot
    onDone?.();

    if (overlay) {
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.45,
        ease: 'power2.out',
      });
    }
  }, [onDone]);

  // Trigger the dramatic expanding signature blue iris dot
  const triggerDotZoom = useCallback(() => {
    if (isZooming.current || isExiting.current) return;
    isZooming.current = true;

    const dotExpand = dotExpandRef.current;
    if (!dotExpand) {
      completeExit();
      return;
    }

    // Hide scroll prompt
    if (scrollPromptRef.current) {
      gsap.to(scrollPromptRef.current, { opacity: 0, duration: 0.2 });
    }

    // Expand the period dot in signature blue to cover the entire viewport
    gsap.to(dotExpand, {
      scale: 180,
      duration: 0.92,
      ease: 'power3.inOut',
      onComplete: () => {
        completeExit();
      },
    });
  }, [completeExit]);

  // Phase 1: Pure Minimal Loader (0% -> 100%)
  useEffect(() => {
    // Respect repeat visits and reduced-motion
    if (sessionStorage.getItem('intro_seen')) {
      onDone?.();
      return;
    }
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      sessionStorage.setItem('intro_seen', '1');
      onDone?.();
      return;
    }

    const counterObj = { val: 0 };
    const loaderTween = gsap.to(counterObj, {
      val: 100,
      duration: 0.95,
      ease: 'power2.inOut',
      onUpdate: () => {
        setLoadPercent(Math.round(counterObj.val));
      },
      onComplete: () => {
        gsap.to('.pl-minimal-loader', {
          opacity: 0,
          scale: 0.96,
          duration: 0.28,
          ease: 'power2.out',
          onComplete: () => {
            setPhase('reveal');
          },
        });
      },
    });

    return () => {
      loaderTween.kill();
    };
  }, [onDone]);

  // Phase 2: Horizontal Scroll-Driven Text Reveal with GSAP Scrubbing
  useEffect(() => {
    if (phase !== 'reveal') return;

    // Lock body scroll on mobile so the finger drives the reveal, not the page
    const prevOverflow = document.documentElement.style.overflow;
    const prevTouchAction = document.documentElement.style.touchAction;
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.touchAction = 'none';

    const track = trackRef.current;
    const chars = charElsRef.current.filter(Boolean);
    if (!track || chars.length === 0) return;

    // Reset initial states
    charElsRef.current = chars;
    const trackWidth = track.scrollWidth;
    const winWidth = window.innerWidth;

    // Calculate horizontal scroll travel so the last word and dot end centered
    const maxTravel = Math.max(winWidth * 0.4, trackWidth - winWidth * 0.42);

    // Initial positioning: track starts slightly indented, characters start muted
    gsap.set(track, { x: Math.min(80, winWidth * 0.1) });
    gsap.set(chars, { opacity: 0.14, color: 'var(--mu)', y: -12 });

    // Fade in scroll prompt
    if (scrollPromptRef.current) {
      gsap.fromTo(
        scrollPromptRef.current,
        { opacity: 0, y: 8 },
        { opacity: 0.85, y: 0, duration: 0.6, delay: 0.15, ease: 'power2.out' }
      );
    }

    // Build master horizontal scrubbing timeline
    const tl = gsap.timeline({ paused: true });
    tlRef.current = tl;

    // 1. Smooth horizontal track translation from right to left
    tl.to(
      track,
      {
        x: -maxTravel,
        ease: 'none',
        duration: 1,
      },
      0
    );

    // 2. Sequential character reveal from left to right
    const totalChars = chars.length;
    chars.forEach((char, i) => {
      const start = (i / totalChars) * 0.92;
      tl.to(
        char,
        {
          opacity: 1,
          color: 'var(--fg)',
          y: 0,
          duration: 0.08,
          ease: 'power1.out',
        },
        start
      );
    });

    // Function to scrub timeline with smooth GSAP tween
    const scrubTo = (newProgress) => {
      if (isZooming.current || isExiting.current) return;
      targetProgress.current = Math.min(1.0, Math.max(0, newProgress));

      gsap.to(tl, {
        progress: targetProgress.current,
        duration: 0.55,
        ease: 'power2.out',
        overwrite: 'auto',
        onUpdate: () => {
          if (tl.progress() >= 0.985 && !isZooming.current) {
            triggerDotZoom();
          }
        },
      });
    };

    // Desktop Wheel listener
    const onWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY * 0.0013;
      scrubTo(targetProgress.current + delta);
    };

    // Mobile Touch listeners – both axes drive the scrub; always prevent default
    // so vertical scrolling doesn't navigate the page while in the preloader.
    let touchStartX = 0;
    let touchStartY = 0;
    const onTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };
    const onTouchMove = (e) => {
      // Block native scroll/bounce so finger movement only drives the reveal
      e.preventDefault();
      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const deltaX = (touchStartX - currentX) * 0.0028;
      const deltaY = (touchStartY - currentY) * 0.0028;
      touchStartX = currentX;
      touchStartY = currentY;
      // Use whichever axis has greater travel; finger can swipe any direction
      scrubTo(targetProgress.current + (Math.abs(deltaX) >= Math.abs(deltaY) ? deltaX : deltaY));
    };

    // Keyboard navigation
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        completeExit();
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        scrubTo(targetProgress.current + 0.14);
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        scrubTo(targetProgress.current - 0.14);
      }
    };

    // Window resize handler to recalibrate track travel
    const onResize = () => {
      const newWinWidth = window.innerWidth;
      const newTravel = Math.max(newWinWidth * 0.4, track.scrollWidth - newWinWidth * 0.42);
      // Update tween 0 in timeline
      gsap.set(track, { x: -newTravel * (tl.progress() || 0) });
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
      // Restore scroll when phase ends
      document.documentElement.style.overflow = prevOverflow;
      document.documentElement.style.touchAction = prevTouchAction;
      tl.kill();
    };
  }, [phase, triggerDotZoom, completeExit]);

  // Click/tap to advance
  const handleStageClick = () => {
    if (phase !== 'reveal' || isZooming.current || isExiting.current || !tlRef.current) return;
    const nextP = Math.min(1.0, targetProgress.current + 0.16);
    targetProgress.current = nextP;
    gsap.to(tlRef.current, {
      progress: nextP,
      duration: 0.5,
      ease: 'power2.out',
      onUpdate: () => {
        if (tlRef.current.progress() >= 0.985 && !isZooming.current) {
          triggerDotZoom();
        }
      },
    });
  };

  return (
    <aside
      className="preloader"
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome introduction"
      onClick={handleStageClick}
    >
      {/* Phase 1: Pure Minimal Center Loader */}
      {phase === 'loading' && (
        <div className="pl-minimal-loader" aria-live="polite">
          <div className="pl-counter-num">
            {('00' + loadPercent).slice(-3)}
            <span className="pl-counter-symbol">%</span>
          </div>
          <div className="pl-minimal-track">
            <div
              className="pl-minimal-fill"
              style={{ transform: `scaleX(${loadPercent / 100})` }}
            />
          </div>
        </div>
      )}

      {/* Phase 2: Horizontal Scroll-Driven Track */}
      {phase === 'reveal' && (
        <div className="pl-horizontal-stage" aria-live="polite">
          <div className="pl-horizontal-track" ref={trackRef} aria-label={WORDS.join(' ')}>
            {WORDS.map((word, wIdx) => {
              const isLastWord = wIdx === WORDS.length - 1;
              const chars = [...word];

              return (
                <span key={wIdx} className="pl-word">
                  {chars.map((char, cIdx) => {
                    const isDot = isLastWord && cIdx === chars.length - 1;

                    if (isDot) {
                      return (
                        <span key={cIdx} className="pl-char pl-dot-wrap">
                          <span className="pl-dot-glyph">.</span>
                          {/* Signature blue expanding circle that covers the viewport */}
                          <span className="pl-dot-expand" ref={dotExpandRef} aria-hidden="true" />
                        </span>
                      );
                    }

                    return (
                      <span
                        key={cIdx}
                        className="pl-char"
                        ref={(el) => {
                          if (el) charElsRef.current.push(el);
                        }}
                      >
                        {char}
                      </span>
                    );
                  })}
                  {/* Word spacer */}
                  {!isLastWord && <span className="pl-space">&nbsp;</span>}
                </span>
              );
            })}
          </div>

          {/* Minimal Subtle Scroll Indicator */}
          <div className="pl-scroll-prompt" ref={scrollPromptRef} aria-hidden="true">
            <span className="pl-scroll-text">scroll</span>
            <span className="pl-scroll-icon">→</span>
          </div>
        </div>
      )}
    </aside>
  );
}
