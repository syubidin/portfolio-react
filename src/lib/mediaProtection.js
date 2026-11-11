/**
 * Global media protection: Prevents click-hold-drag on all images and videos,
 * protecting assets across the entire application (both existing and dynamically added).
 */
export function initMediaProtection() {
  if (typeof window === 'undefined') return;

  // 1. Intercept and block HTML5 dragstart at the capture phase
  window.addEventListener(
    'dragstart',
    (e) => {
      const el = e.target;
      if (
        el instanceof HTMLImageElement ||
        el instanceof HTMLVideoElement ||
        el?.tagName === 'IMG' ||
        el?.tagName === 'VIDEO' ||
        el?.closest?.('img, video, picture, .shot, .modal-preview, .lightbox-content, .fc')
      ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    },
    { capture: true }
  );

  // 2. Ensure draggable is set to false on any element interacted with
  const applyProtection = (el) => {
    if (!el) return;
    if (el.tagName === 'IMG' || el.tagName === 'VIDEO') {
      if (el.getAttribute('draggable') !== 'false') {
        el.setAttribute('draggable', 'false');
      }
    }
    if (el.querySelectorAll) {
      el.querySelectorAll('img, video').forEach((media) => {
        if (media.getAttribute('draggable') !== 'false') {
          media.setAttribute('draggable', 'false');
        }
      });
    }
  };

  // Prevent drag initiation on pointerdown / mousedown while preserving clicks
  window.addEventListener(
    'pointerdown',
    (e) => {
      applyProtection(e.target);
    },
    { capture: true, passive: true }
  );

  // 3. MutationObserver ensures ANY future dynamically added images/videos are instantly protected
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === 1) {
          applyProtection(node);
        }
      }
    }
  });

  const startObserver = () => {
    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true });
      applyProtection(document.body);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startObserver);
  } else {
    startObserver();
  }
}

