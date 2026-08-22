import { motion } from "framer-motion";
import type { Project } from "../data/projects";
import { resolveProjectImage } from "../data/projectImages";
import "./project-card.css";

export function ProjectCard({ project, size = "md" }: { project: Project; size?: "lg" | "md" | "sm" }) {
  const image = resolveProjectImage(project.image);

  return (
    <motion.article
      className={`pcard pcard--${size} ${!image ? "pcard--no-image" : ""}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] as const }}
    >
      {image && (
        <div className="pcard__media">
          <img src={image} alt={project.imageAlt ?? `${project.name} product screens`} loading="lazy" />
          <div className="pcard__media-glow" aria-hidden="true" />
        </div>
      )}

      <div className="pcard__body">
        <div className="pcard__top">
          <span className="pcard__category">{project.category}</span>
          {project.isPrivate && <span className="tag pcard__private">Private</span>}
        </div>
        <h3 className="pcard__title">{project.name}</h3>
        <p className="pcard__tagline">{project.tagline}</p>
        <p className="pcard__desc">{project.description}</p>

        {project.tech.length > 0 && (
          <div className="pcard__tech">
            {project.tech.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        )}

        <div className="pcard__actions">
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer" className="pcard__cta focus-ring">
              View Repository <span className="btn__arrow">→</span>
            </a>
          )}
          {project.isPrivate && (
            <span className="pcard__private-note">{project.status}</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
