import { motion } from "framer-motion"

const educationData = [
  {
    school: "University of Europe of Applied Sciences",
    country: "Potsdam, Germany",
    period: "09/01/2023 – 30/09/2026",
    title: "Software Engineering - B.Sc",
    desc: "Focused on software architecture, cloud computing, AI systems, and full-stack application development."
  },
  {
    school: "Saxion University of Applied Sciences",
    country: "Deventer, Netherlands",
    period: "09/01/2021 – 08/31/2023",
    title: "Information Technology - B.Sc",
    desc: "Studied programming fundamentals, databases, networking, and system design."
  },
  {
    school: "International School of Hague (ISH)",
    country: "Den Haag, Netherlands",
    period: "08/01/2017 – 07/31/2021",
    title: "High School Diploma - IB Diploma",
    desc: "General secondary education with focus on mathematics, science, and technology."
  }
]

export default function Education() {
  return (
    <section
      id="education"
      className="py-32 border-t border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-4xl mx-auto px-8">

        <h3 className="text-4xl font-bold mb-16 text-center">
          Education
        </h3>

        <div className="space-y-12">

          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="border-l border-slate-300 dark:border-slate-700 pl-8"
            >

              <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h4>

              <h2 className="text-xl font-bold text-primary mt-1">
                <span className="italic">{item.school}</span>

                <span className="text-sm font-normal text-slate-500 dark:text-slate-400 ml-2">
                  ({item.country})
                </span>
              </h2>

              <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 mt-1">
                {item.period}
              </p>

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