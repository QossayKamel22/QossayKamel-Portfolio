import { motion } from "framer-motion";
import { useState } from "react";
import type { Project } from "../data/projects";
import { resolveProjectLogo } from "../data/projectImages";
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
  const visibleTech = project.tech.slice(0, 4);
  const [bgFailed, setBgFailed] = useState(false);
  const showBg = !!project.bgImage && !bgFailed;

  return (
    <motion.article
      className={`pcard pcard--${size}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
    >
      <div className="pcard__stage" aria-hidden="true">
        {showBg && (
          <img
            src={project.bgImage}
            alt=""
            className="pcard__bg"
            loading="lazy"
            onError={() => setBgFailed(true)}
          />
        )}
        <span className="pcard__overlay" />
      </div>

      <div className="pcard__content">
        <div className="pcard__top">
          <span className={`pcard__logo-chip${project.logoLarge ? " pcard__logo-chip--xl" : ""}`}>
            {logo ? (
              <img src={logo} alt={`${project.name} logo`} className="pcard__logo-img" />
            ) : (
              <span className="pcard__wordmark">{project.name.slice(0, 2)}</span>
            )}
          </span>
          {project.isPrivate && <span className="pcard__badge pcard__badge--private">Private</span>}
        </div>

        <div className="pcard__info">
          <span className="pcard__category">{project.category}</span>
          <h3 className="pcard__title">{project.name}</h3>
          <p className="pcard__summary">{project.summary}</p>

          {visibleTech.length > 0 && (
            <div className="pcard__tech">
              {visibleTech.map((t) => (
                <span key={t} className="pcard__badge">{t}</span>
              ))}
            </div>
          )}

          <div className="pcard__actions">
            <button type="button" className="pcard__action pcard__action--primary focus-ring" onClick={() => onOpen?.(project)}>
              View Project <span className="btn__arrow">→</span>
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
            {project.isPrivate && <span className="pcard__private-note">{project.status}</span>}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
