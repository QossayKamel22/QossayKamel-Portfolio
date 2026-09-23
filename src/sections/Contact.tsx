import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "../data/profile";
import { Reveal } from "../components/Reveal";
import "./contact.css";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name || "website visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setSent(false);
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact__grid">
        <Reveal>
          <span className="eyebrow">Get in Touch</span>
          <h2 className="section-heading">Let's build something useful.</h2>
          <p className="section-lead">
            Open to Flutter, full-stack, and AI agent engineering opportunities. The fastest way
            to reach me is email.
          </p>
          <div className="contact__links">
            <a href={`mailto:${profile.email}`} className="focus-ring">{profile.email}</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="focus-ring">GitHub ↗</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="focus-ring">LinkedIn ↗</a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="card contact__form-wrap">
          <AnimatePresence mode="wait" initial={false}>
            {sent ? (
              <motion.div
                key="sent"
                className="contact__sent"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <span className="contact__sent-icon" aria-hidden="true">
                  <motion.svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
                  >
                    <motion.path
                      d="M5 12.5l4.5 4.5L19 7"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </span>
                <h3 className="contact__sent-title">Message ready to send</h3>
                <p className="contact__sent-copy">
                  Your email app should now be open with everything filled in for {profile.email} —
                  just hit send.
                </p>
                <button type="button" className="btn btn-secondary focus-ring" onClick={handleReset}>
                  Write another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                className="contact__form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                <label>
                  Name
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />
                </label>
                <label>
                  Message
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </label>
                <button type="submit" className="btn btn-primary focus-ring">
                  Send Message <span className="btn__arrow">→</span>
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
