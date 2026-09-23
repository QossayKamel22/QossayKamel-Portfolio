import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";
import { techIconMap } from "../data/techIcons";
import { Reveal } from "../components/Reveal";
import "./technology.css";

function initials(label: string) {
  const clean = label.replace(/[.()]/g, "");
  const parts = clean.split(/[\s/]+/).filter(Boolean);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return clean.slice(0, 2).toUpperCase();
}

export function Technology() {
  return (
    <section id="technology" className="technology">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Toolbox</span>
          <h2 className="section-heading">Tools I build with</h2>
          <p className="section-lead">
            Grouped by area — no arbitrary proficiency percentages, just the tools used in real
            projects.
          </p>
        </Reveal>

        <div className="technology__grid">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.05} duration={0.5} className="card technology__group">
              <h3>{group.category}</h3>
              <div className="technology__items">
                {group.items.map((item, j) => {
                  const Icon = techIconMap[item];
                  return (
                    <motion.span
                      key={item}
                      className="technology__chip"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-20px" }}
                      transition={{ duration: 0.3, delay: j * 0.02 }}
                      whileHover={{ y: -3, scale: 1.05 }}
                    >
                      <span className="technology__chip-icon">
                        {Icon ? <Icon /> : <span className="technology__chip-mono">{initials(item)}</span>}
                      </span>
                      {item}
                    </motion.span>
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
