import { profile } from "../data/profile";
import { Reveal } from "../components/Reveal";
import "./footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <Reveal as="div" duration={0.5} className="container footer__inner">
        <span>© {new Date().getFullYear()} {profile.name}. Built with React, TypeScript &amp; Vite.</span>
        <div className="footer__links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </Reveal>
    </footer>
  );
}
