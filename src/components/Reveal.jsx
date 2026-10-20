import { useRef } from 'react';
import { animate, stagger, reduced, useInView } from '../lib/motion.js';

// Fades a block in when it scrolls into view. `kids` = selector of children to pop in after it.
export default function Reveal({ as: T = 'div', className = '', kids, children, ...rest }) {
  const ref = useRef(null);
  useInView(ref, (el) => {
    if (reduced()) { el.style.opacity = 1; return; }
    animate(el, { opacity: [0, 1], translateY: [36, 0], duration: 900, ease: 'outExpo' });
    if (kids) animate(el.querySelectorAll(kids), {
      opacity: [0, 1], scale: [0.6, 1], delay: stagger(35, { start: 250 }), duration: 600, ease: 'outBack'
    });
  });
  return <T ref={ref} className={`rv ${className}`.trim()} {...rest}>{children}</T>;
}
