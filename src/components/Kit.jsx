import { useState } from 'react';
import S from '../content.js';
import Section from './Section.jsx';
import Reveal from './Reveal.jsx';

export default function Kit() {
  const [activeSkill, setActiveSkill] = useState(null);

  // Check which projects use this skill
  const getProjectUsage = (skill) => {
    return (S.projects || []).filter((p) =>
      (p.stack || []).some((s) => s.toLowerCase().includes(skill.toLowerCase()) || skill.toLowerCase().includes(s.toLowerCase()))
    );
  };

  return (
    <Section id="kit" title="Kit">
      {/* Skill Grid */}
      <div className="kit">
        {Object.entries(S.kit || {}).map(([group, items]) => (
          <Reveal key={group} kids="b">
            <h3>{group}</h3>
            <div>
              {(items || []).map((s) => {
                const usedIn = getProjectUsage(s);
                const isSelected = activeSkill === s;
                return (
                  <b
                    key={s}
                    className={`kit-badge${isSelected ? ' active' : ''}${usedIn.length > 0 ? ' has-project' : ''}`}
                    onClick={() => setActiveSkill(isSelected ? null : s)}
                    title={usedIn.length > 0 ? `Used in: ${usedIn.map((p) => p.title).join(', ')}` : undefined}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveSkill(isSelected ? null : s);
                      }
                    }}
                  >
                    {s}
                    {usedIn.length > 0 && <span className="kit-dot" aria-hidden="true">•</span>}
                  </b>
                );
              })}
            </div>
          </Reveal>
        ))}
      </div>

      {/* Dynamic Skill Inspector Pill */}
      {activeSkill && (
        <div className="skill-inspector" role="status">
          <strong>Skill: {activeSkill}</strong>
          {getProjectUsage(activeSkill).length > 0 ? (
            <span>
              &nbsp;— Applied in: <em>{getProjectUsage(activeSkill).map((p) => p.title).join(', ')}</em>
            </span>
          ) : (
            <span>&nbsp;— Core technical foundation & practical proficiency</span>
          )}
          <button type="button" className="skill-inspector-close" onClick={() => setActiveSkill(null)} aria-label="Clear skill inspection">
            ✕
          </button>
        </div>
      )}

      {/* Certifications with Verified Credentials */}
      <Reveal className="cr">
        <div className="cert-header">
          <h3>Certifications & Credentials</h3>
          <span className="cert-sub">Accredited by National & University Institutions</span>
        </div>
        <ul className="cert-grid">
          {(S.certs || []).map((c, i) => {
            const isObj = typeof c === 'object';
            const title = isObj ? c.name : c;
            const issuer = isObj ? c.issuer : null;
            const id = isObj ? c.id : null;
            return (
              <li key={i} className="cert-card">
                <div className="cert-main">
                  <span className="cert-badge-icon">✓</span>
                  <strong>{title}</strong>
                </div>
                {issuer && <small className="cert-issuer">{issuer}</small>}
                {id && <code className="cert-code">{id}</code>}
              </li>
            );
          })}
        </ul>
      </Reveal>
    </Section>
  );
}
