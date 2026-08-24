import { education, languages } from "../data/education";
import { resolveProjectLogo } from "../data/projectImages";
import { Reveal } from "../components/Reveal";
import "./education.css";

export function EducationSection() {
  return (
    <section id="education" className="education">
      <div className="container education__grid">
        <div>
          <Reveal>
            <span className="eyebrow">Background</span>
            <h2 className="section-heading">Education</h2>
          </Reveal>
          <div className="education__list">
            {education.map((e, i) => (
              <Reveal key={e.title} className="education__item" delay={i * 0.08} duration={0.5}>
                {e.logo && (
                  <span className="education__avatar">
                    <img src={resolveProjectLogo(e.logo)} alt={`${e.org} logo`} />
                  </span>
                )}
                <div className="education__item-body">
                  <h3>{e.title}</h3>
                  {e.org && <p className="education__org">{e.org}</p>}
                  <div className="education__meta">
                    <span>{e.period}</span>
                    {e.detail && <span>{e.detail}</span>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal delay={0.1}>
            <span className="eyebrow">Languages</span>
            <h2 className="section-heading">Languages</h2>
          </Reveal>
          <div className="education__languages">
            {languages.map((l, i) => (
              <Reveal key={l.name} className="card education__lang" delay={0.15 + i * 0.08} duration={0.5}>
                <span>{l.name}</span>
                <span className="tag">{l.level}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
