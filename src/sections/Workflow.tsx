import { motion } from "framer-motion";
import "./workflow.css";

const steps = [
  { label: "Discover", detail: "Requirements & business context" },
  { label: "Design", detail: "Figma wireframes & prototypes" },
  { label: "Develop", detail: "Flutter / React implementation" },
  { label: "Integrate", detail: "APIs, Firebase & backend services" },
  { label: "Test", detail: "Manual & automated verification" },
  { label: "Ship", detail: "Git, GitHub & version control" },
  { label: "Iterate", detail: "Feedback-driven refinement" },
];

export function Workflow() {
  return (
    <section id="workflow" className="workflow">
      <div className="container">
        <span className="eyebrow">Process</span>
        <h2 className="section-heading">How I build</h2>
        <p className="section-lead">
          A consistent workflow from requirements to production, whether the surface is a Flutter
          banking screen or a React dashboard.
        </p>

        <ol className="workflow__steps">
          {steps.map((s, i) => (
            <motion.li
              key={s.label}
              className="workflow__step"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <span className="workflow__index">{String(i + 1).padStart(2, "0")}</span>
              <span className="workflow__label">{s.label}</span>
              <span className="workflow__detail">{s.detail}</span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
