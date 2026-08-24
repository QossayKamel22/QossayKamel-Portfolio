import { motion, type Variants, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

type RevealOwnProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  as?: "div" | "li" | "a" | "form";
};

/**
 * Shared scroll-reveal wrapper — fades and lifts content into place once when
 * it enters the viewport. Keeps every section's entrance motion consistent
 * without re-declaring the same initial/whileInView/transition per section.
 *
 * Renders as the element itself (not an extra wrapper), so it's safe to drop
 * straight into a CSS grid as the grid item — pass `as="a"` with href/target/
 * rel etc. and they forward through untouched.
 */
export function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  as = "div",
  ...rest
}: RevealOwnProps &
  Omit<HTMLMotionProps<"div"> & HTMLMotionProps<"a"> & HTMLMotionProps<"form">, keyof RevealOwnProps>) {
  const shared = {
    variants,
    initial: "hidden" as const,
    whileInView: "show" as const,
    viewport: { once: true, margin: "-80px" },
    transition: { duration, delay, ease: EASE },
    ...rest,
  };

  // Polymorphic `as` intentionally accepts each tag's own prop shape at the
  // call site (via the union in the exported type); the branches below all
  // share one loosely-typed `shared` object, so a narrow cast is needed here.
  const props = shared as HTMLMotionProps<"div">;
  if (as === "li") return <motion.li {...(shared as HTMLMotionProps<"li">)}>{children}</motion.li>;
  if (as === "a") return <motion.a {...(shared as HTMLMotionProps<"a">)}>{children}</motion.a>;
  if (as === "form") return <motion.form {...(shared as HTMLMotionProps<"form">)}>{children}</motion.form>;
  return <motion.div {...props}>{children}</motion.div>;
}
