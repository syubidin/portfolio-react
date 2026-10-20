import { useEffect } from 'react';
export { animate, createTimeline, stagger } from 'animejs';

export const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

// Calls cb(el) once, the first time el scrolls into view.
export function useInView(ref, cb, threshold = 0.15) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([x]) => {
      if (x.isIntersecting) { io.disconnect(); cb(el); }
    }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}
