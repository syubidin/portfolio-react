import { useRef, useState } from 'react';
import S from '../content.js';
import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import { useInView } from '../lib/motion.js';

export default function About() {
  const fc = useRef(null);
  const [shown, setShown] = useState(false);
  const [missing, setMissing] = useState(false);
  useInView(fc, () => setShown(true));

  return (
    <Section id="who" title="Who">
      <div className="ab">
        <div className={`fc${shown ? ' in' : ''}${missing ? ' no' : ''}`} ref={fc}>
          <img src={S.photo} alt={`Portrait of ${S.name}`} width="440" height="550" decoding="async" onError={() => setMissing(true)} />
        </div>
        <Reveal>
          <p className="lead">{S.about?.[0]}</p>
          {(S.about || []).slice(1).map((p, i) => <p key={i}>{p}</p>)}
          <dl>
            {(S.facts || []).map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
