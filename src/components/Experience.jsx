import { motion } from "framer-motion"

export default function Experience() {
  return (
    <section id="experience" className="py-32 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-8">
        
        <h3 className="text-4xl font-bold mb-16 text-center">
          Experience
        </h3>

        <div className="space-y-12 border-l border-slate-300 dark:border-slate-700 pl-8">

          {[
            {
              title: "AI and Full Stack Developer Intern",
              company: "Gaddr - Sweden",
              period: "Septmeber 2025 – March 2026",
              desc: "Built and maintained full-stack features across web applications while supporting the design, training, and integration of AI/ML models. Collaborated with cross-functional teams to refine product features and resolve technical challenges. Followed best practices in coding, documentation, and security, including NDA compliance, while communicating regularly with team members to provide consistent progress updates. Engaged in continuous learning and proactive problem-solving, and assisted with project handovers and workflow improvements.",
            },
            {
              title: "Software Engineer",
              company: "DutchView - Netherlands",
              period: "December 2021 – May 2022",
              desc: "Maintained and enhanced legacy software by resolving bugs and implementing updates, while participating in architectural discussions to apply design patterns and suggest system improvements. Conducted thorough codebase analysis to identify and resolve software issues, and developed new software features from requirements using relevant programming languages, frameworks, and tools. Collaborated with QA teams to test, debug, and optimize software to improve overall performance and reliability.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
            <div className="space-y-1">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {item.title}
                </h4>

                <h2 className="text-xl font-bold text-primary">
                    {item.company}
                </h2>

                <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
            {item.period}
            </p>
        </div>

            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
            {item.desc}
            </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}