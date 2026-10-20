import S from '../content.js';
import Section from './Section.jsx';
import Reveal from './Reveal.jsx';

export default function Trail() {
  return (
    <Section id="trail" title="Trail">
      {(S.trail || []).map((t) => (
        <Reveal as="article" className="row" key={t.when + t.title}>
          <div className="w">{t.when}<small>{t.kind}</small></div>
          <div>
            <h3>{t.title}</h3>
            <em>{t.place}</em>
            <ul>{(t.points || []).map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        </Reveal>
      ))}
    </Section>
  );
}
