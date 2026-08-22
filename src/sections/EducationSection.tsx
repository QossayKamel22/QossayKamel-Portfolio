import { education, languages } from "../data/education";
import "./education.css";

export function EducationSection() {
  return (
    <section id="education" className="education">
      <div className="container education__grid">
        <div>
          <span className="eyebrow">Background</span>
          <h2 className="section-heading">Education</h2>
          <div className="education__list">
            {education.map((e) => (
              <div key={e.title} className="education__item">
                <h3>{e.title}</h3>
                {e.org && <p className="education__org">{e.org}</p>}
                <div className="education__meta">
                  <span>{e.period}</span>
                  {e.detail && <span>{e.detail}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <span className="eyebrow">Languages</span>
          <h2 className="section-heading">Languages</h2>
          <div className="education__languages">
            {languages.map((l) => (
              <div key={l.name} className="card education__lang">
                <span>{l.name}</span>
                <span className="tag">{l.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
