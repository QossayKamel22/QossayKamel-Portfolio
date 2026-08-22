import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import "./featured-work.css";

export function FeaturedWork() {
  const tier1 = projects.filter((p) => p.tier === 1);
  const tier2 = projects.filter((p) => p.tier === 2);
  const tier3 = projects.filter((p) => p.tier === 3);

  return (
    <section id="work" className="featured">
      <div className="container">
        <span className="eyebrow">Featured Work</span>
        <h2 className="section-heading">Selected engineering &amp; product work</h2>
        <p className="section-lead">
          A mix of production banking engineering, full-stack products, and an AI agent system —
          shown with what's actually verifiable in each public repository.
        </p>

        <div className="featured__tier1">
          {tier1.map((p, i) => (
            <div key={p.slug} className={i === 0 ? "featured__span2" : ""}>
              <ProjectCard project={p} size={i === 0 ? "lg" : "md"} />
            </div>
          ))}
        </div>

        <h3 className="featured__subheading">More Work</h3>
        <div className="featured__tier2">
          {tier2.map((p) => (
            <ProjectCard key={p.slug} project={p} size="sm" />
          ))}
        </div>

        <h3 className="featured__subheading">Additional Projects</h3>
        <div className="featured__tier3">
          {tier3.map((p) => (
            <ProjectCard key={p.slug} project={p} size="sm" />
          ))}
        </div>
      </div>
    </section>
  );
}
