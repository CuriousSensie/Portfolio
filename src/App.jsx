"use client";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import FeaturedCollaborations from "./components/FeaturedCollaborations";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";

function App() {
  return (
    <div className=" overflow-x-hidden text-neutral-300 font selection:bg-purple-900 selection:text-slate-200">
      <div className="fixed top-0 -z-10 h-full w-full">
        <BackgroundGradientAnimation></BackgroundGradientAnimation>
      </div>

      <div className="container mx-auto px-8">
        <Nav />
        <Hero />
        <FeaturedCollaborations />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
