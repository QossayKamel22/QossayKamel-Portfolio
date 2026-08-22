import { motion } from "framer-motion";
import { profile } from "../data/profile";
import "./hero.css";

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="eyebrow">{profile.title}</span>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__tagline">{profile.tagline}</p>
          <p className="hero__supporting">{profile.supporting}</p>

          <div className="hero__ctas">
            <a href="#work" className="btn btn-primary focus-ring">
              View Work
            </a>
            <a href="#contact" className="btn btn-secondary focus-ring">
              Get in Touch
            </a>
          </div>

          <div className="hero__social">
            <a href={profile.github} target="_blank" rel="noreferrer" className="focus-ring">
              GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="focus-ring">
              LinkedIn ↗
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          aria-hidden="true"
        >
          <div className="hero__frame hero__frame--back">
            <div className="hero__frame-bar" />
            <div className="hero__frame-lines">
              <span style={{ width: "70%" }} />
              <span style={{ width: "45%" }} />
              <span style={{ width: "60%" }} />
            </div>
          </div>
          <div className="hero__frame hero__frame--front">
            <div className="hero__frame-bar" />
            <div className="hero__frame-blocks">
              <div className="hero__block hero__block--accent" />
              <div className="hero__block" />
              <div className="hero__block" />
              <div className="hero__block hero__block--accent" />
            </div>
            <div className="hero__frame-lines">
              <span style={{ width: "80%" }} />
              <span style={{ width: "55%" }} />
            </div>
          </div>
          <div className="hero__glow" />
        </motion.div>
      </div>
    </section>
  );
}
