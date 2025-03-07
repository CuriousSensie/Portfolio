import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Technologies from "./components/Technologies"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {

  return (
    <div className=" overflow-x-hidden text-neutral-300 font selection:bg-purple-900 selection:text-slate-200">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(150%_140%_at_50%_50%,#000_40%,#63e_100%)]">

        </div>
      </div>

      <div className="container mx-auto px-8">
        <Nav />
        <Hero />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App