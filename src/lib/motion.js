import { useEffect } from 'react';
import { observeOnce } from './observer.js';
export { animate, createTimeline, stagger } from 'animejs';

export const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

// Calls cb(el) once, the first time el scrolls into view using shared singleton observer.
export function useInView(ref, cb) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return observeOnce(el, cb);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}
