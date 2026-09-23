import { motion } from "framer-motion";
import { useState } from "react";
import type { Project } from "../data/projects";
import { resolveProjectImage, resolveProjectLogo } from "../data/projectImages";
import "./project-card.css";

export function ProjectCard({
  project,
  size = "md",
  onOpen,
}: {
  project: Project;
  size?: "lg" | "md" | "sm";
  onOpen?: (p: Project) => void;
}) {
  const logo = resolveProjectLogo(project.logo);
  const shot = resolveProjectImage(project.image) || project.bgImage;
  const isRealShot = !!resolveProjectImage(project.image);
  const visibleTech = project.tech.slice(0, 3);
  const [shotFailed, setShotFailed] = useState(false);

  return (
    <motion.article
      className={`pcard pcard--${size}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
    >
      <span className="pcard__sheen" aria-hidden="true" />

      <div className="pcard__header">
        <span className="pcard__icon">
          {logo ? (
            <img src={logo} alt="" className="pcard__icon-img" />
          ) : (
            <span className="pcard__wordmark">{project.name.slice(0, 2)}</span>
          )}
        </span>

        <div className="pcard__heading">
          <h3 className="pcard__title">{project.name}</h3>
          <span className="pcard__category">{project.category}</span>
        </div>

        <button
          type="button"
          className="pcard__get focus-ring"
          onClick={() => onOpen?.(project)}
        >
          View
        </button>
      </div>

      {shot && !shotFailed && (
        <div className={`pcard__media${isRealShot ? "" : " pcard__media--context"}`}>
          <img
            src={shot}
            alt={isRealShot ? project.imageAlt || `${project.name} screenshot` : ""}
            loading="lazy"
            className="pcard__media-img"
            onError={() => setShotFailed(true)}
          />
        </div>
      )}

      {(!shot || shotFailed) && (
        <div className="pcard__media pcard__media--placeholder" aria-hidden="true">
          <span className="pcard__media-mark">
            {logo ? <img src={logo} alt="" /> : project.name.slice(0, 2)}
          </span>
        </div>
      )}

      <p className="pcard__summary">{project.summary}</p>

      <div className="pcard__footer">
        {visibleTech.length > 0 && (
          <div className="pcard__tech">
            {visibleTech.map((t) => (
              <span key={t} className="pcard__badge">{t}</span>
            ))}
            {project.isPrivate && <span className="pcard__badge pcard__badge--private">Private</span>}
          </div>
        )}

        <div className="pcard__actions">
          <button type="button" className="pcard__action focus-ring" onClick={() => onOpen?.(project)}>
            Details <span className="btn__arrow">→</span>
          </button>
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="pcard__action pcard__action--ghost focus-ring"
            >
              GitHub <span className="pcard__ext">↗</span>
            </a>
          )}
          {project.isPrivate && !project.repo && (
            <span className="pcard__private-note">{project.status}</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
