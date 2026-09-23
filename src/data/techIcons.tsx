import type { IconType } from "react-icons";
import {
  SiFlutter, SiDart, SiExpo, SiGetx, SiFirebase, SiApple, SiAndroid,
  SiTypescript, SiJavascript, SiVite, SiHtml5, SiPython, SiFastapi,
  SiNodedotjs, SiNestjs, SiExpress, SiSpringboot, SiSqlalchemy, SiDocker,
  SiPostgresql, SiLangchain, SiFigma, SiGit, SiGithub, SiXcode,
  SiAndroidstudio, SiReact,
} from "react-icons/si";
import { FaJava, FaCss3Alt, FaDatabase, FaCode } from "react-icons/fa6";

/** Maps a skill label to its brand icon. Concepts without a real logo
 * (e.g. "REST API", "UI/UX") are left unmapped and render as a monogram
 * badge instead of a fabricated or mismatched icon. */
export const techIconMap: Record<string, IconType> = {
  Flutter: SiFlutter,
  Dart: SiDart,
  "React Native": SiReact,
  Expo: SiExpo,
  GetX: SiGetx,
  Firebase: SiFirebase,
  iOS: SiApple,
  Android: SiAndroid,
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Vite: SiVite,
  HTML: SiHtml5,
  CSS: FaCss3Alt,
  Python: SiPython,
  FastAPI: SiFastapi,
  "Node.js": SiNodedotjs,
  NestJS: SiNestjs,
  "Express.js": SiExpress,
  Java: FaJava,
  "Spring Boot": SiSpringboot,
  SQLAlchemy: SiSqlalchemy,
  Docker: SiDocker,
  "Cloud Firestore": SiFirebase,
  PostgreSQL: SiPostgresql,
  SQL: FaDatabase,
  LangGraph: SiLangchain,
  Figma: SiFigma,
  Git: SiGit,
  GitHub: SiGithub,
  "VS Code": FaCode,
  Xcode: SiXcode,
  "Android Studio": SiAndroidstudio,
};
