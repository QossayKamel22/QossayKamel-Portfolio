import { profile } from "../data/profile";
import "./social.css";

export function Social() {
  return (
    <section id="social" className="social">
      <div className="container social__grid">
        <a href={profile.github} target="_blank" rel="noreferrer" className="card social__card focus-ring">
          <h3>GitHub</h3>
          <p>Public repositories, README documentation, and open-source work.</p>
          <span className="social__link">github.com/QossayKamel22 ↗</span>
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="card social__card focus-ring">
          <h3>LinkedIn</h3>
          <p>Professional experience, career history, and connections.</p>
          <span className="social__link">Qossay Kamel ↗</span>
        </a>
      </div>
    </section>
  );
}
