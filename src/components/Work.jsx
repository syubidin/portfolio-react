import { useState } from 'react';
import S from '../content.js';
import Section from './Section.jsx';
import Reveal from './Reveal.jsx';

const Btn = ({ label, href }) =>
  href
    ? <a className="bt" href={href} target="_blank" rel="noopener">{label}</a>
    : <span className="bt off">{label} (soon)</span>;

function Project({ p }) {
  const [missing, setMissing] = useState(false);
  const link = p.demo || p.repo;
  return (
    <Reveal as="article" className="pl">
      <a
        className={`shot${missing ? ' no' : ''}`}
        href={link || '#work'}
        {...(link ? { target: '_blank', rel: 'noopener' } : {})}
        aria-label={`Open ${p.title}`}
        tabIndex={-1}
      >
        <img src={p.image} alt={`Screenshot of ${p.title}`} loading="lazy" decoding="async" onError={() => setMissing(true)} />
      </a>
      <div>
        <span className="yr">{p.year}</span>
        <h3>{p.title}</h3>
        <p>{p.text}</p>
        <div className="st">{(p.stack || []).map((s) => <b key={s}>{s}</b>)}</div>
        <div className="bts"><Btn label="Live demo" href={p.demo} /><Btn label="Source code" href={p.repo} /></div>
      </div>
    </Reveal>
  );
}

export default function Work() {
  return <Section id="work" title="Work">{(S.projects || []).map((p) => <Project key={p.title} p={p} />)}</Section>;
}
