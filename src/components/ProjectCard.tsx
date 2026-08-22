import { motion } from "framer-motion";
import { useRef } from "react";
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
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  const visibleTech = project.tech.slice(0, 6);

  return (
    <motion.article
      ref={cardRef}
      className={`pcard pcard--${size}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] as const }}
      onMouseMove={handleMouseMove}
    >
      <button
        type="button"
        className="pcard__mark"
        onClick={() => onOpen?.(project)}
        aria-label={`View ${project.name} details`}
        style={image ? { backgroundImage: `url(${image})` } : undefined}
      >
        <span className="pcard__mark-veil" aria-hidden="true" />
        <span className="pcard__mark-content">
          {logo ? (
            <img src={logo} alt={`${project.name} logo`} className="pcard__logo-img" />
          ) : (
            <span className="pcard__wordmark">{project.name}</span>
          )}
        </span>
      </button>

      <div className="pcard__body">
        <div className="pcard__top">
          <span className="pcard__category">{project.category}</span>
          {project.isPrivate && <span className="tag pcard__private">Private</span>}
        </div>
        <h3 className="pcard__title">{project.name}</h3>
        <p className="pcard__tagline">{project.tagline}</p>
        <p className="pcard__desc">{project.description}</p>

        {visibleTech.length > 0 && (
          <div className="pcard__tech">
            {visibleTech.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        )}

        {project.hasVersionControl && (
          <p className="pcard__control">Project Control · Git · GitHub</p>
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
          <button type="button" className="pcard__details focus-ring" onClick={() => onOpen?.(project)}>
            Details <span className="btn__arrow">→</span>
          </button>
        </div>
      </div>
    </motion.article>
  );
}
