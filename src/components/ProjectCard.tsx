import { motion } from "framer-motion";
import type { Project } from "../data/projects";
import "./project-card.css";

export function ProjectCard({ project, size = "md" }: { project: Project; size?: "lg" | "md" | "sm" }) {
  return (
    <motion.article
      className={`pcard pcard--${size}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="pcard__top">
        <h3 className="pcard__title">{project.name}</h3>
        {project.isPrivate && <span className="tag pcard__private">Private</span>}
      </div>
      <p className="pcard__tagline">{project.tagline}</p>
      <p className="pcard__desc">{project.description}</p>

      {project.tech.length > 0 && (
        <div className="pcard__tech">
          {project.tech.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      )}

      {project.status && <p className="pcard__status">{project.status}</p>}

      <div className="pcard__actions">
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noreferrer" className="btn btn-secondary focus-ring">
            View Repository ↗
          </a>
        )}
        {project.isPrivate && !project.repo && (
          <span className="pcard__private-note">{project.status}</span>
        )}
      </div>
    </motion.article>
  );
}
