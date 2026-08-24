import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, type Project } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectDetailModal } from "../components/ProjectDetailModal";
import "./featured-work.css";

const EASE = [0.16, 1, 0.3, 1] as const;

export function FeaturedWork() {
  const [active, setActive] = useState<Project | null>(null);
  const [expanded, setExpanded] = useState(false);

  const priority = projects.filter((p) => p.featured);
  const secondary = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="featured">
      <div className="container">
        <span className="eyebrow">Featured Work</span>
        <h2 className="section-heading">Selected engineering &amp; product work</h2>
        <p className="section-lead">
          A mix of production banking engineering, full-stack products, and an AI agent system —
          shown with what's actually verifiable in each public repository.
        </p>

        <div className="featured__grid">
          {priority.map((p) => (
            <ProjectCard key={p.slug} project={p} size="lg" onOpen={setActive} />
          ))}
        </div>

        {secondary.length > 0 && (
          <div className="featured__more">
            <button
              type="button"
              className="featured__more-toggle focus-ring"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
            >
              More Work
              <span className="featured__more-sub">
                {expanded ? "Hide projects" : "View all projects"}{" "}
                <span className={`btn__arrow ${expanded ? "featured__arrow--up" : ""}`}>→</span>
              </span>
            </button>

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  key="more-work-panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="featured__secondary-grid">
                    {secondary.map((p, i) => (
                      <motion.div
                        key={p.slug}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
                      >
                        <ProjectCard project={p} size="sm" onOpen={setActive} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      <ProjectDetailModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
