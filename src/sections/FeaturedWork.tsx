import { useState } from "react";
import { projects, type Project } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectDetailModal } from "../components/ProjectDetailModal";
import "./featured-work.css";

export function FeaturedWork() {
  const [active, setActive] = useState<Project | null>(null);

  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured && p.image);
  const additional = projects.filter((p) => !p.featured && !p.image);

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
          {featured.map((p, i) => (
            <div key={p.slug} className={i < 2 ? "featured__span2" : ""}>
              <ProjectCard project={p} size={i < 2 ? "lg" : "md"} onOpen={setActive} />
            </div>
          ))}
        </div>

        {more.length > 0 && (
          <>
            <h3 className="featured__subheading">More Work</h3>
            <div className="featured__tier2">
              {more.map((p) => (
                <ProjectCard key={p.slug} project={p} size="sm" onOpen={setActive} />
              ))}
            </div>
          </>
        )}

        {additional.length > 0 && (
          <>
            <h3 className="featured__subheading">Additional Projects</h3>
            <div className="featured__tier3">
              {additional.map((p) => (
                <ProjectCard key={p.slug} project={p} size="sm" onOpen={setActive} />
              ))}
            </div>
          </>
        )}
      </div>

      <ProjectDetailModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
