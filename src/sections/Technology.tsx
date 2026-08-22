import { skillGroups } from "../data/skills";
import "./technology.css";

export function Technology() {
  return (
    <section id="technology" className="technology">
      <div className="container">
        <span className="eyebrow">Toolbox</span>
        <h2 className="section-heading">Tools I build with</h2>
        <p className="section-lead">Grouped by area — no arbitrary proficiency percentages, just the tools used in real projects.</p>

        <div className="technology__grid">
          {skillGroups.map((group) => (
            <div key={group.category} className="card technology__group">
              <h3>{group.category}</h3>
              <div className="technology__items">
                {group.items.map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
