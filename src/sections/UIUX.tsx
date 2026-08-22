import { figmaWork } from "../data/skills";
import "./uiux.css";

export function UIUX() {
  if (figmaWork.length === 0) return null;
  return (
    <section id="uiux" className="uiux">
      <div className="container">
        <span className="eyebrow">Design</span>
        <h2 className="section-heading">UI/UX &amp; Product Design</h2>
        <p className="section-lead">Selected Figma product design work, alongside the engineering.</p>

        <div className="uiux__grid">
          {figmaWork.map((f) => (
            <a key={f.name} href={f.url} target="_blank" rel="noreferrer" className="card uiux__card focus-ring">
              <h3>{f.name}</h3>
              <p>{f.description}</p>
              <span className="uiux__link">View on Figma ↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
