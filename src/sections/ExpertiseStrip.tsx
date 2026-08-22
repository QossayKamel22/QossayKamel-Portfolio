import "./expertise.css";

const items = [
  { label: "Mobile Banking Engineering", detail: "Flutter, production apps" },
  { label: "Full-Stack Web", detail: "React, TypeScript, Firebase" },
  { label: "AI Agent Engineering", detail: "Python, FastAPI, LangGraph" },
  { label: "Product Design", detail: "Figma, UI/UX" },
];

export function ExpertiseStrip() {
  return (
    <section className="expertise">
      <div className="container expertise__grid">
        {items.map((item) => (
          <div key={item.label} className="expertise__item">
            <span className="expertise__label">{item.label}</span>
            <span className="expertise__detail">{item.detail}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
