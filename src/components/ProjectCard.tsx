import { motion } from "framer-motion";
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
  const image = resolveProjectImage(project.image);
  const logo = resolveProjectLogo(project.logo);
  const visibleTech = project.tech.slice(0, 4);

  return (
    <motion.article
      className={`pcard pcard--${size}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
    >
      <button
        type="button"
        className="pcard__media"
        onClick={() => onOpen?.(project)}
        aria-label={`View ${project.name} details`}
      >
        {image ? (
          <img src={image} alt={project.imageAlt ?? `${project.name} preview`} className="pcard__photo" loading="lazy" />
        ) : (
          <span className="pcard__mark">
            {logo ? (
              <img src={logo} alt={`${project.name} logo`} className="pcard__logo-img" />
            ) : (
              <span className="pcard__wordmark">{project.name}</span>
            )}
          </span>
        )}
      </button>

      <div className="pcard__body">
        <div className="pcard__top">
          <span className="pcard__category">{project.category}</span>
          {project.isPrivate && <span className="tag pcard__private">Private</span>}
        </div>

        <h3 className="pcard__title">{project.name}</h3>
        <p className="pcard__summary">{project.summary}</p>

        {visibleTech.length > 0 && (
          <p className="pcard__tech">{visibleTech.join(" · ")}</p>
        )}

        <div className="pcard__actions">
          <button type="button" className="pcard__action focus-ring" onClick={() => onOpen?.(project)}>
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
    </motion.article>
  );
}
