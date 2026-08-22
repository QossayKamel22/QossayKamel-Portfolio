# Qossay Kamel — Portfolio

Personal portfolio website for Qossay Kamel, a Software Engineer specializing in Flutter mobile
banking applications, full-stack web development (React/TypeScript/Firebase), and AI agent
engineering (Python, FastAPI, LangGraph).

## Tech Stack

- React 19 + TypeScript
- Vite
- Framer Motion (tasteful, reduced-motion-aware animation)
- Plain CSS with theme tokens (light/dark via CSS custom properties + `localStorage`)
- No backend, no database, no environment variables

## Sections

1. Navigation — sticky, blurs on scroll
2. Hero — name, role, tagline, CTAs, social links, abstract device-frame visual
3. Expertise strip
4. About — engineering meets real-world banking business
5. Featured Work — tiered, editorial project layout
6. Production Banking Applications — PCNC banking apps with store links and disclaimers
7. Experience — vertical timeline (desktop) / stacked cards (mobile)
8. Technology — grouped tool stack
9. UI/UX & Product Design — Figma work
10. Education & Languages
11. GitHub & LinkedIn
12. Contact — simple form with `mailto:` fallback
13. Footer

## Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build     # type-check and build for production
npm run preview   # preview the production build locally
```

## Project Structure

```
src/
  data/        # content — profile, experience, education, projects, banking, skills
  components/  # reusable UI (Nav, ProjectCard)
  sections/    # page sections composed in App.tsx
  styles/      # theme tokens and global styles
  hooks/       # useTheme (persists to localStorage, dark by default)
```

## Deployment (Vercel)

This is a static Vite build with no server-side requirements, so it deploys cleanly to Vercel:

1. Push this repository to GitHub (`QossayKamel22/QossayKamel-Portfolio`).
2. In Vercel, **Add New Project → Import Git Repository** and select the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy — Vercel assigns a `*.vercel.app` preview/production URL automatically.
5. **Custom domain (optional):** in the Vercel project, go to **Settings → Domains**, add your
   domain, and follow the DNS instructions Vercel provides (either an `A`/`ALIAS` record to
   Vercel's IP or a `CNAME` to `cname.vercel-dns.com`, depending on whether it's an apex or
   subdomain). Propagation is usually automatic once DNS is verified.

No live domain is currently attached to this project — the steps above are for when one is.

## Content Accuracy

All experience, education, and project content is sourced from the verified CV and from public
GitHub repository content at [github.com/QossayKamel22](https://github.com/QossayKamel22), including
README screenshots used as real project imagery. Where a project's public repository has no
verifiable content yet (e.g. MAKAN), the site omits a repository link rather than inventing one.
The POS Agent repository is private; only CV/GitHub-README-verified facts about it are shown, with
no fabricated public link.
