import { useTheme } from "./hooks/useTheme";
import { Nav } from "./components/Nav";
import { Hero } from "./sections/Hero";
import { ExpertiseStrip } from "./sections/ExpertiseStrip";
import { About } from "./sections/About";
import { FeaturedWork } from "./sections/FeaturedWork";
import { Banking } from "./sections/Banking";
import { Experience } from "./sections/Experience";
import { Technology } from "./sections/Technology";
import { UIUX } from "./sections/UIUX";
import { EducationSection } from "./sections/EducationSection";
import { Social } from "./sections/Social";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <div className="ambient-bg" aria-hidden="true">
        <span />
        <span />
      </div>
      <Nav theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <ExpertiseStrip />
        <About />
        <FeaturedWork />
        <Banking />
        <Experience />
        <Technology />
        <UIUX />
        <EducationSection />
        <Social />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
