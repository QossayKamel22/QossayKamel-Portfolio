import { motion, type Variants } from "framer-motion";
import { profile } from "../data/profile";
import { Avatar } from "../components/Avatar";
import "./hero.css";

const EASE = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span variants={item} className="eyebrow">
            {profile.title}
          </motion.span>
          <motion.h1 variants={item} className="hero__name">
            {profile.name}
          </motion.h1>
          <motion.p variants={item} className="hero__tagline">
            {profile.tagline}
          </motion.p>
          <motion.p variants={item} className="hero__supporting">
            {profile.supporting}
          </motion.p>

          <motion.div variants={item} className="hero__ctas">
            <a href="#work" className="btn btn-primary focus-ring">
              View Work <span className="btn__arrow">→</span>
            </a>
            <a href="#contact" className="btn btn-secondary focus-ring">
              Get in Touch
            </a>
          </motion.div>

          <motion.div variants={item} className="hero__social">
            <a href={profile.github} target="_blank" rel="noreferrer" className="focus-ring">
              GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="focus-ring">
              LinkedIn ↗
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
        >
          <div className="hero__portrait-glow" aria-hidden="true" />
          <Avatar size="lg" />
        </motion.div>
      </div>
    </section>
  );
}
