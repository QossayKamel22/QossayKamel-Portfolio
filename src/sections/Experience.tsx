import { motion } from "framer-motion";
import { experience } from "../data/experience";
import "./experience.css";

export function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <span className="eyebrow">Career</span>
        <h2 className="section-heading">Experience</h2>
        <p className="section-lead">From customer-facing digital banking to production Flutter engineering and UI/UX.</p>

        <ol className="timeline">
          {experience.map((item, i) => (
            <motion.li
              key={item.role + item.org}
              className={`timeline__item ${i < 2 ? "timeline__item--highlight" : ""}`}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <div className="timeline__marker" />
              <div className="timeline__content card">
                <div className="timeline__head">
                  <h3>{item.role}</h3>
                  <span className="timeline__period">{item.period}</span>
                </div>
                <div className="timeline__org-row">
                  <p className="timeline__org">{item.org}</p>
                  {item.type && <span className="tag timeline__type">{item.type}</span>}
                </div>
                <ul>
                  {item.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
