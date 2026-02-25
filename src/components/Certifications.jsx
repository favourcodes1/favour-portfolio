import { motion } from "framer-motion"

const certData = [
    {
    title: "Computer Science for Cybersecurity",
    company: "edX",
    country: "Online",
    period: "07/2025",
    desc: "Cybersecurity principles, cryptography basics, and secure system design."
  },
   {
    title: "AWS Academy Graduate – Cloud Foundations",
    company: "Amazon Web Services Training and Certification",
    country: "Online",
    period: "11/2024",
    desc: "Cloud computing fundamentals including AWS services, security, and infrastructure architecture."
  },
  {
    title: "JavaScript Beginner Bootcamp",
    company: "Udemy - Rob Merrill",
    country: "Online",
    period: "01/07/2023",
    desc: "Fundamentals of JavaScript programming, DOM manipulation, and web development basics."
  },
  {
    title: "Complete React Developer Course (w/ Hooks and Redux)",
    company: "Udemy",
    country: "Online",
    period: "09/2022",
    desc: "Comprehensive React training focused on Hooks, Redux, and building scalable applications.",
  }
]

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-32 border-t border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-4xl mx-auto px-8">

        <h3 className="text-4xl font-bold mb-16 text-center">
          Some Certifications
        </h3>

        <div className="space-y-12">

          {certData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-primary transition"
            >

              <h4 className="text-lg font-semibold text-white">
                {item.title}
              </h4>

              <h2 className="text-xl font-bold text-primary mt-1">
                <span className="italic">{item.company}</span>

                <span className="text-sm font-normal text-slate-500 ml-2">
                  ({item.country})
                </span>
              </h2>

              <p className="text-xs uppercase tracking-wide text-slate-500 mt-1">
                {item.period}
              </p>

              <p className="mt-3 text-slate-400 leading-relaxed">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}