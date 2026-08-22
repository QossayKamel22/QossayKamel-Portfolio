import { motion, useReducedMotion, type Variants } from "framer-motion";
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

const floatChips = [
  { label: "FLOW", top: "2%", left: "2%", duration: 5.5, delay: 0 },
  { label: "MIZAN", top: "14%", right: "0%", duration: 6.2, delay: 0.4 },
  { label: "NOVA", bottom: "16%", left: "0%", duration: 5.8, delay: 0.8 },
  { label: "PULSE", bottom: "0%", right: "4%", duration: 6.5, delay: 1.1 },
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span variants={item} className="eyebrow">
            Software Engineer
          </motion.span>
          <motion.h1 variants={item} className="hero__name">
            {profile.name}
          </motion.h1>
          <motion.p variants={item} className="hero__title">
            {profile.title}
          </motion.p>
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
              Let's Connect
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
          {floatChips.map((c) => (
            <motion.span
              key={c.label}
              className="hero__chip"
              style={{ top: c.top, left: c.left, right: c.right, bottom: c.bottom }}
              animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: c.duration, delay: c.delay, repeat: Infinity, ease: "easeInOut" }}
            >
              {c.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
