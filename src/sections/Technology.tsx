import { skillGroups } from "../data/skills";
import { Reveal } from "../components/Reveal";
import "./technology.css";

export function Technology() {
  return (
    <section id="technology" className="technology">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Toolbox</span>
          <h2 className="section-heading">Tools I build with</h2>
          <p className="section-lead">Grouped by area — no arbitrary proficiency percentages, just the tools used in real projects.</p>
        </Reveal>

        <div className="technology__grid">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.05} duration={0.5} className="card technology__group">
              <h3>{group.category}</h3>
              <div className="technology__items">
                {group.items.map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
