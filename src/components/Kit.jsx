import S from '../content.js';
import Section from './Section.jsx';
import Reveal from './Reveal.jsx';

export default function Kit() {
  return (
    <Section id="kit" title="Kit">
      <div className="kit">
        {Object.entries(S.kit || {}).map(([group, items]) => (
          <Reveal key={group} kids="b">
            <h3>{group}</h3>
            <div>{(items || []).map((s) => <b key={s}>{s}</b>)}</div>
          </Reveal>
        ))}
      </div>
      <Reveal className="cr">
        <h3>Certifications</h3>
        <ul>{(S.certs || []).map((c) => <li key={c}>{c}</li>)}</ul>
      </Reveal>
    </Section>
  );
}
