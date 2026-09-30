import { AppProvider } from "./context/AppContext";
import Background from "./components/Background";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import ITSupport from "./components/ITSupport";
import AIAutomation from "./components/AIAutomation";
import CareerGoals from "./components/CareerGoals";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <AppProvider>
      <div className="relative min-h-screen bg-bg font-sans text-ink">
        <Background />
        <Cursor />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <ITSupport />
          <AIAutomation />
          <CareerGoals />
          <Contact />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}
