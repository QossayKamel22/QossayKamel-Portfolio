import { motion } from "framer-motion";
import { profile } from "../data/profile";
import "./about.css";

export function About() {
  return (
    <section id="about" className="about">
      <div className="container about__grid">
        <div>
          <span className="eyebrow">About</span>
          <h2 className="section-heading">Where engineering meets real banking business</h2>
          <p className="about__statement">
            Building software is only part of the job.
            <br />
            Understanding the people and businesses using it is the other.
          </p>
        </div>
        <div className="about__body">
          {profile.about.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
