import { useLayoutEffect, useRef } from 'react';
import S from '../content.js';
import Split from './Split.jsx';
import { createTimeline, stagger, reduced } from '../lib/motion.js';

export default function Hero() {
  const root = useRef(null);

  useLayoutEffect(() => {
    if (reduced()) return;
    const q = (s) => root.current.querySelectorAll(s);
    const tl = createTimeline({ defaults: { ease: 'outExpo' } });
    tl.add(q('.ci'), { scale: [0, 1], duration: 1300 }, 0)
      .add(q('.sl'), { translateX: ['-100%', '0%'], duration: 900 }, 0)
      .add(q('.hero p'), { opacity: [0, 1], translateY: [14, 0], duration: 700 }, 200)
      .add(q('h1 .ch'), { opacity: [0, 1], translateY: ['80%', '0%'], delay: stagger(28), duration: 900 }, 300)
      .add(q('.tag'), { opacity: [0, 1], translateY: [24, 0], rotate: [-14, -3], duration: 800 }, 1100)
      .add(q('.hero-bts'), { opacity: [0, 1], translateY: [20, 0], duration: 700 }, 1200)
      .add(q('.mq'), { translateY: ['100%', '0%'], duration: 900 }, 900);
    return () => tl.revert();
  }, []);

  return (
    <section className="hero" id="top" ref={root}>
      <div className="ci" />
      <div className="sl" />
      <p>{S.name}</p>
      <h1 aria-label={(S.headline || []).join(' ')}>
        {(S.headline || []).map((line, i) => <span key={i}><Split text={line} /></span>)}
      </h1>
      <div className="tag">{S.status}</div>
      <div className="hero-bts">
        <a className="bt hero-bt-primary" href="#work">Explore Work ↓</a>
        <a className="bt" href={S.resume || '#hello'} target="_blank" rel="noopener">Download CV ↗</a>
      </div>
      <div className="mq" aria-hidden="true">
        <div>
          {[0, 1].flatMap((n) => [0, 1, 2].flatMap((k) => (S.roles || []).map((r, i) => <span key={`${n}${k}${i}`}>{r}</span>)))}
        </div>
      </div>
    </section>
  );
}
