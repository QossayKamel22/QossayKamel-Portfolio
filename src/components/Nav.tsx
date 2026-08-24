import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Theme } from "../hooks/useTheme";
import { BrandMark } from "./BrandMark";
import "./nav.css";

const EASE = [0.16, 1, 0.3, 1] as const;

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#banking", label: "Banking" },
  { href: "#experience", label: "Experience" },
  { href: "#technology", label: "Technology" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Nav({ theme, onToggleTheme }: { theme: Theme; onToggleTheme: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand focus-ring">
          <BrandMark size={26} />
          <span>Qossay Kamel</span>
        </a>

        <nav className="nav__links nav__links--desktop" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="focus-ring">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            className="nav__theme-btn focus-ring"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                transition={{ duration: 0.3, ease: EASE }}
                style={{ display: "inline-flex" }}
              >
                {theme === "dark" ? "☾" : "☀"}
              </motion.span>
            </AnimatePresence>
          </button>
          <button
            className="nav__menu-btn focus-ring"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "open"}
                initial={{ opacity: 0, rotate: -45, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.6 }}
                transition={{ duration: 0.25, ease: EASE }}
                style={{ display: "inline-flex" }}
              >
                {open ? "✕" : "☰"}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            style={{ overflow: "hidden" }}
          >
            <nav className="nav__links nav__links--mobile" aria-label="Mobile">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  className="focus-ring"
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.03, ease: EASE }}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
