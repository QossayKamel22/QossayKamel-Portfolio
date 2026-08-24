import { profile } from "../data/profile";
import { Reveal } from "../components/Reveal";
import "./social.css";

export function Social() {
  return (
    <section id="social" className="social">
      <div className="container social__grid">
        <Reveal as="a" href={profile.github} target="_blank" rel="noreferrer" className="card social__card focus-ring">
          <h3>See what I'm building.</h3>
          <p>Public repositories, README documentation, and open-source work.</p>
          <span className="social__link">Visit GitHub <span className="btn__arrow">→</span></span>
        </Reveal>
        <Reveal as="a" href={profile.linkedin} target="_blank" rel="noreferrer" className="card social__card focus-ring" delay={0.08}>
          <h3>Let's connect professionally.</h3>
          <p>Career history, endorsements, and professional network.</p>
          <span className="social__link">Connect on LinkedIn <span className="btn__arrow">→</span></span>
        </Reveal>
      </div>
    </section>
  );
}
