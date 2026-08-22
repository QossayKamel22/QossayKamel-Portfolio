import { motion } from "framer-motion";
import "./capabilities.css";

const capabilityGroups = [
  { label: "Mobile", items: "Flutter · Dart · GetX" },
  { label: "Web", items: "React · TypeScript · Vite" },
  { label: "Backend", items: "Python · FastAPI · REST APIs" },
  { label: "Database", items: "Firebase · Firestore · PostgreSQL" },
  { label: "AI", items: "LangGraph · AI Agents" },
  { label: "Design", items: "Figma · UI/UX" },
  { label: "Dev Tools", items: "Git · GitHub · Version Control" },
];

const practices = [
  "Architecture",
  "API Integration",
  "Authentication",
  "Database Design",
  "State Management",
  "Responsive UI",
  "Version Control",
  "Testing",
  "Deployment",
];

export function Capabilities() {
  return (
    <section className="capabilities">
      <div className="container">
        <div className="capabilities__strip">
          {capabilityGroups.map((g, i) => (
            <motion.div
              key={g.label}
              className="capabilities__pill"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <span className="capabilities__pill-label">{g.label}</span>
              <span className="capabilities__pill-items">{g.items}</span>
            </motion.div>
          ))}
        </div>

        <div className="capabilities__practices">
          <span className="capabilities__practices-label">Engineering Practices</span>
          <div className="capabilities__practices-list">
            {practices.map((p) => (
              <span key={p} className="tag">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
