import S from '../content.js';
import Section from './Section.jsx';
import Reveal from './Reveal.jsx';

export default function Hello() {
  return (
    <Section id="hello" title="Hello">
      <Reveal>
        <p className="lead">{S.hello?.title}</p>
        <p className="hp">{S.hello?.text}</p>
        <a className="hi" href={`mailto:${S.email}`}>{S.email}</a>
      </Reveal>
      <div className="bts">
        {(S.links || []).map(([label, href]) => <a key={label} className="bt" href={href} target="_blank" rel="noopener">{label}</a>)}
      </div>
    </Section>
  );
}
