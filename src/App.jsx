import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import TechStack from "./components/TechStack"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Certifications from "./components/Certifications"
import Github from "./components/Github"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import AiChat from "./components/AiChat"

export default function App() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Navbar />
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Github />
      <Contact />
      <Footer />

    <AiChat />
    </div>
  )
}