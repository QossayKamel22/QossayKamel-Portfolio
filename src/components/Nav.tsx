import { useEffect, useState } from "react";
import type { Theme } from "../hooks/useTheme";
import "./nav.css";

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
          Qossay Kamel
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
            {theme === "dark" ? "☾" : "☀"}
          </button>
          <button
            className="nav__menu-btn focus-ring"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="nav__links nav__links--mobile" aria-label="Mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="focus-ring" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
