import Contact from "~/components/Contact";
import Herosection from "~/components/Herosection";
import Projects from "~/components/Project";
import Skills from "~/components/Skills";
export default function Home() {
  return (
    <>
      <Herosection />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
