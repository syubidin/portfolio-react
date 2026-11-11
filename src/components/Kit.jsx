import { useState, useMemo, useCallback, memo } from 'react';
import S from '../content.js';
import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import SkillIcon from './SkillIcon.jsx';

// Memoized skill badge — only re-renders when its own props change
const SkillBadge = memo(function SkillBadge({ skill, usage, isSelected, onSelect }) {
  return (
    <b
      className={`kit-badge${isSelected ? ' active' : ''}${usage.length > 0 ? ' has-project' : ''}`}
      onClick={() => onSelect(skill)}
      title={usage.length > 0 ? `Used in: ${usage.map((p) => p.title).join(', ')}` : undefined}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(skill);
        }
      }}
    >
      <SkillIcon name={skill} />
      <span>{skill}</span>
      {usage.length > 0 && <span className="kit-dot" aria-hidden="true">•</span>}
    </b>
  );
});

// Memoize the entire Kit component — avoids re-renders from parent
const Kit = memo(function Kit() {
  const [activeSkill, setActiveSkill] = useState(null);

  // Build the usage map once — keyed by skill name
  const usageMap = useMemo(() => {
    const map = {};
    Object.values(S.kit || {}).forEach((items) => {
      (items || []).forEach((skill) => {
        map[skill] = (S.projects || []).filter((p) =>
          (p.stack || []).some(
            (s) => s.toLowerCase().includes(skill.toLowerCase()) || skill.toLowerCase().includes(s.toLowerCase())
          )
        );
      });
    });
    return map;
  }, []); // S is a static import — never changes

  // Stable click handler — toggling active skill
  const handleSelect = useCallback((skill) => {
    setActiveSkill((prev) => (prev === skill ? null : skill));
  }, []);

  const activeUsage = activeSkill ? (usageMap[activeSkill] || []) : [];

  return (
    <Section id="kit" title="Kit">
      {/* Skill Grid with aesthetic theme-matched monochrome SVG icons */}
      <div className="kit">
        {Object.entries(S.kit || {}).map(([group, items]) => (
          <Reveal key={group} kids="b">
            <h3>{group}</h3>
            <div>
              {(items || []).map((s) => (
                <SkillBadge
                  key={s}
                  skill={s}
                  usage={usageMap[s] || []}
                  isSelected={activeSkill === s}
                  onSelect={handleSelect}
                />
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      {/* Dynamic Skill Inspector Pill */}
      {activeSkill && (
        <div className="skill-inspector" role="status">
          <strong>Skill: {activeSkill}</strong>
          {activeUsage.length > 0 ? (
            <span>
              &nbsp;— Applied in: <em>{activeUsage.map((p) => p.title).join(', ')}</em>
            </span>
          ) : (
            <span>&nbsp;— Core technical foundation &amp; practical proficiency</span>
          )}
          <button type="button" className="skill-inspector-close" onClick={() => setActiveSkill(null)} aria-label="Clear skill inspection">
            ✕
          </button>
        </div>
      )}

      {/* Certifications with Direct Certificate Document Links */}
      <Reveal className="cr">
        <div className="cert-header">
          <h3>Certifications &amp; Credentials</h3>
          <span className="cert-sub">Accredited by National &amp; University Institutions</span>
        </div>
        <ul className="cert-grid">
          {(S.certs || []).map((c, i) => {
            const isObj = typeof c === 'object';
            const title = isObj ? c.name : c;
            const issuer = isObj ? c.issuer : null;
            const id = isObj ? c.id : null;
            const docLink = isObj ? (c.doc || c.link) : null;
            return (
              <li key={i} className="cert-card">
                <div className="cert-main">
                  <span className="cert-badge-icon">✓</span>
                  <strong>{title}</strong>
                </div>
                {issuer && <small className="cert-issuer">{issuer}</small>}
                {id && <code className="cert-code">{id}</code>}
                {docLink && (
                  <a
                    href={docLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-doc-link"
                    aria-label={`View certificate document for ${title}`}
                  >
                    View certificate document ↗
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </Reveal>
    </Section>
  );
});

export default Kit;
