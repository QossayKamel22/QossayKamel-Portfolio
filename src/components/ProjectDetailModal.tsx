import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import type { Project } from "../data/projects";
import { resolveProjectImage } from "../data/projectImages";
import "./project-detail-modal.css";

export function ProjectDetailModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  const image = project ? resolveProjectImage(project.image) : undefined;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="pmodal__backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="pmodal"
            role="dialog"
            aria-modal="true"
            aria-label={`${project.name} details`}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="pmodal__close focus-ring" onClick={onClose} aria-label="Close">
              ✕
            </button>

            {image && (
              <div className="pmodal__media">
                <img src={image} alt={project.imageAlt ?? `${project.name} product screens`} />
              </div>
            )}

            <div className="pmodal__body">
              <span className="pmodal__category">{project.category}</span>
              <h3 className="pmodal__title">{project.name}</h3>
              <p className="pmodal__tagline">{project.tagline}</p>
              <p className="pmodal__desc">{project.description}</p>

              {project.tech.length > 0 && (
                <>
                  <h4 className="pmodal__label">Technology</h4>
                  <div className="pmodal__tech">
                    {project.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </>
              )}

              {project.hasVersionControl && (
                <>
                  <h4 className="pmodal__label">Project Control</h4>
                  <div className="pmodal__tech">
                    <span className="tag">Git</span>
                    <span className="tag">GitHub</span>
                    <span className="tag">Version Control</span>
                  </div>
                </>
              )}

              <div className="pmodal__actions">
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noreferrer" className="btn btn-primary focus-ring">
                    View Repository <span className="btn__arrow">→</span>
                  </a>
                )}
                {project.isPrivate && <span className="pcard__private-note">{project.status}</span>}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
