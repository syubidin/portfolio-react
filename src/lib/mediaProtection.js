/**
 * Global media protection: Prevents click/tap-hold-drag on all images and videos.
 * Covers desktop drag, mobile long-press "Save Image", and iOS context menus.
 * Both existing and dynamically added assets are protected automatically.
 */
export function initMediaProtection() {
  if (typeof window === 'undefined') return;

  const MEDIA_SELECTOR = 'img, video, picture';
  const MEDIA_CONTAINERS = '.shot, .modal-preview, .lightbox-content, .fc, .modal-body';

  /** Check if the event target is a protected media element */
  const isProtected = (el) =>
    el instanceof HTMLImageElement ||
    el instanceof HTMLVideoElement ||
    el?.tagName === 'IMG' ||
    el?.tagName === 'VIDEO' ||
    el?.tagName === 'PICTURE' ||
    el?.closest?.(MEDIA_CONTAINERS);

  // 1. Block HTML5 dragstart (desktop click-hold-drag)
  window.addEventListener('dragstart', (e) => {
    if (isProtected(e.target)) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, { capture: true });

  // 2. Block contextmenu (right-click on desktop + tap-hold on Android Chrome)
  window.addEventListener('contextmenu', (e) => {
    if (isProtected(e.target)) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, { capture: true });

  // 3. Block iOS long-press "Save Image" (fires on touchstart for 500ms+)
  //    Setting touch-action via JS makes sure it's applied even before CSS loads.
  const applyProtection = (el) => {
    if (!el) return;
    const applyToEl = (node) => {
      if (node.tagName === 'IMG' || node.tagName === 'VIDEO' || node.tagName === 'PICTURE') {
        node.setAttribute('draggable', 'false');
        node.style.webkitTouchCallout = 'none'; // iOS Safari long-press menu
        node.style.userSelect = 'none';
        node.style.webkitUserSelect = 'none';
      }
    };
    applyToEl(el);
    if (el.querySelectorAll) {
      el.querySelectorAll(MEDIA_SELECTOR).forEach(applyToEl);
    }
  };

  // 4. Apply on any pointer interaction (catches lazy-loaded or portal media)
  window.addEventListener('pointerdown', (e) => {
    applyProtection(e.target);
  }, { capture: true, passive: true });

  // 5. MutationObserver: auto-protect future dynamically added media
  const mo = new MutationObserver((mutations) => {
    for (const m of mutations) {
      for (const node of m.addedNodes) {
        if (node.nodeType === 1) applyProtection(node);
      }
    }
  });

  const start = () => {
    if (document.body) {
      mo.observe(document.body, { childList: true, subtree: true });
      applyProtection(document.body);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
}

