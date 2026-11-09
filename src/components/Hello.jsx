import S from '../content.js';
import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import SkillIcon from './SkillIcon.jsx';

export default function Hello() {
  const subject = encodeURIComponent("Inquiry regarding Software Engineer Role / Project");
  const body = encodeURIComponent(
    `Hi Syuby,\n\nI came across your portfolio and would like to connect regarding an opportunity / project discussion.\n\nName:\nCompany / Organization:\nMessage:\n\nBest regards,`
  );
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(S.email)}&su=${subject}&body=${body}`;

  return (
    <Section id="hello" title="Hello">
      <Reveal>
        <p className="lead">{S.hello?.title}</p>
        <p className="hp">{S.hello?.text}</p>
        <a
          className="hi"
          href={gmailUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Compose message directly in Gmail"
          aria-label={`Send email to ${S.email} via Gmail`}
        >
          {S.email}
        </a>
      </Reveal>
      <div className="bts">
        {(S.links || []).map(([label, href]) => (
          <a key={label} className="bt bt-social" href={href} target="_blank" rel="noopener noreferrer">
            <SkillIcon name={label} className="bt-icon" />
            <span>{label}</span>
          </a>
        ))}
      </div>
    </Section>
  );
}
