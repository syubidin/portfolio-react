import { useRef } from 'react';
import Split from './Split.jsx';
import { animate, stagger, reduced, useInView } from '../lib/motion.js';

export default function Section({ id, title, children }) {
  const h = useRef(null);
  useInView(h, (el) => {
    if (reduced()) return;
    animate(el.querySelectorAll('.ch'), {
      opacity: [0, 1], translateY: ['70%', '0%'], delay: stagger(45), duration: 800, ease: 'outExpo'
    });
  }, 0.1);
  return (
    <section className="sec" id={id}>
      <h2 ref={h} aria-label={title}><Split text={title} /></h2>
      {children}
    </section>
  );
}
