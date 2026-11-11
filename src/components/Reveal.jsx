import { useRef, useEffect } from 'react';
import { animate, stagger, reduced } from '../lib/motion.js';
import { observeOnce } from '../lib/observer.js';

// Fades a block in when it scrolls into view. `kids` = selector of children to pop in after it.
export default function Reveal({ as: T = 'div', className = '', kids, children, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return observeOnce(el, (target) => {
      if (reduced()) { target.style.opacity = 1; return; }
      animate(target, { opacity: [0, 1], translateY: [36, 0], duration: 900, ease: 'outExpo' });
      if (kids) {
        const elements = target.querySelectorAll(kids);
        if (elements.length > 0) {
          // Dynamic stagger: auto-scales when many skills exist to avoid animation queue jank
          const delayStep = Math.min(30, Math.max(6, 400 / elements.length));
          animate(elements, {
            opacity: [0, 1],
            scale: [0.85, 1],
            delay: stagger(delayStep, { start: 160 }),
            duration: 420,
            ease: 'outQuad',
          });
        }
      }
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return <T ref={ref} className={`rv ${className}`.trim()} {...rest}>{children}</T>;
}
