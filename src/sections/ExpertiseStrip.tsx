import { motion } from "framer-motion";
import "./expertise.css";

const items = [
  { label: "Mobile Banking Engineering", detail: "Flutter · Dart · Production Apps" },
  { label: "Full-Stack Web", detail: "React · TypeScript · Firebase" },
  { label: "Backend & Cloud Engineering", detail: "Python · FastAPI · REST APIs · Cloud" },
  { label: "AI Agent Engineering", detail: "Python · LangGraph · AI Agents" },
  { label: "Product Design", detail: "Figma · UI/UX · Prototyping" },
];

export function ExpertiseStrip() {
  return (
    <section className="expertise">
      <div className="container expertise__grid">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            className="expertise__item"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
          >
            <span className="expertise__index">{String(i + 1).padStart(2, "0")}</span>
            <span className="expertise__label">{item.label}</span>
            <span className="expertise__detail">{item.detail}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
