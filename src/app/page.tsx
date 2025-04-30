import Intro from "./components/intro";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Phases from "./components/phases";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <main className="">   
        <Intro/>
        <About/>
        <Projects/>
        <Skills/>
        <Phases/>
        <Contact/>
      </main>
    </>
  );
}
