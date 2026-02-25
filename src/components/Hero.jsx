import { motion } from "framer-motion"
import CVButton from "./CVButton"
import HeroBackground from "./HeroBackground"
import CountUp from "react-countup"

export default function Hero() {
  return (
    <section className="relative pt-48 pb-32 text-center overflow-hidden">

      <HeroBackground />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl md:text-7xl font-bold mb-8"
      >
        Building Intelligent Systems
        <br />
        <span className="text-primary">
          For the Future of Software.
        </span>
      </motion.h2>

      <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-12">
        Software Engineer | AI Systems | Scalable Architecture | Cloud Native Development
      </p>

      {/* Stats */}
      <div className="flex justify-center gap-16 mb-12 text-center">

        <div>
          <h3 className="text-3xl font-bold">
            <CountUp end={10} />+
          </h3>
          <p className="text-slate-400 text-sm">Projects</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">
            <CountUp end={5} />+
          </h3>
          <p className="text-slate-400 text-sm">Technologies</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">
            <CountUp end={2} />+
          </h3>
          <p className="text-slate-400 text-sm">Years Experience</p>
        </div>

      </div>

      <div className="flex justify-center gap-6 flex-wrap">
        <CVButton />

        <a
          href="#projects"
          className="border border-slate-700 px-6 py-3 rounded-xl hover:bg-slate-800 transition"
        >
          View Projects
        </a>
      </div>

    </section>
  )
}