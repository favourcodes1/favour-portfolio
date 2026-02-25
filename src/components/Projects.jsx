import { motion } from "framer-motion"
import { projects } from "../data/projects"

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 max-w-6xl mx-auto px-8"
    >
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-20 text-center"
      >
        Selected Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
          >
            <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition">
              {project.title}
            </h3>

            <p className="text-slate-400 mb-6 leading-relaxed">
              {project.description}
            </p>

            <span className="text-primary text-sm font-medium">
              {project.tech}
            </span>

          </motion.div>
        ))}
      </div>

    </section>
  )
}