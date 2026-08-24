import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useRef } from "react";
import { profile } from "../data/profile";
import { Avatar } from "../components/Avatar";
import heroBg from "../assets/hero/hero-bg.webp";
import "./hero.css";

const EASE = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function Hero() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--cursor-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--cursor-y", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="top" className="hero" ref={heroRef} onMouseMove={handleMouseMove}>
      <div className="hero__cursor-light" aria-hidden="true" />
      <motion.div
        className="hero__bg"
        style={{ backgroundImage: `url(${heroBg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: EASE }}
        aria-hidden="true"
      >
        <div className="hero__bg-overlay" />
      </motion.div>

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
          <motion.p variants={item} className="hero__proof">
            Production Banking · Mobile Engineering · Digital Products
          </motion.p>
          <motion.p variants={item} className="hero__region">
            UAE · Saudi Arabia · GCC
          </motion.p>

          <motion.div variants={item} className="hero__ctas">
            <a href="#work" className="btn btn-primary focus-ring">
              View My Work <span className="btn__arrow">→</span>
            </a>
            <a href="#contact" className="btn btn-secondary focus-ring">
              Let's Connect
            </a>
            <a href={profile.resumeUrl} download className="btn btn-secondary focus-ring">
              Download CV
            </a>
          </motion.div>

          <motion.div variants={item} className="hero__social">
            <a href={profile.github} target="_blank" rel="noreferrer" className="focus-ring">
              GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="focus-ring">
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/QossayKamel22/QossayKamel-Portfolio"
              target="_blank"
              rel="noreferrer"
              className="focus-ring hero__repo-link"
            >
              GitHub Repository ↗
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__portrait-wrap"
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={reduceMotion ? undefined : { scale: 1.015 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
        >
          <div className="hero__portrait-glow" aria-hidden="true" />
          <Avatar size="portrait" />
        </motion.div>
      </div>
    </section>
  );
}
