import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import WorkPage from "./components/WorkPage";
import "./App.css";

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const observerOptions = { threshold: 0.15, rootMargin: "0px 0px -60px 0px" };

    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observerInstance.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  if (window.location.pathname === "/work") {
    return <WorkPage />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Certifications />
      <Skills />
      <About />
      <Contact />
    </>
  );
}

export default App;
