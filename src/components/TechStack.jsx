const stack = [
  "JavaScript / TypeScript",
  "React / Next.js",
  "Node.js / Express",
  "Python",
  "TensorFlow",
  "PostgreSQL / MongoDB",
  "Docker",
  "Git / GitHub",
  "C++ / C#",
  "REST / JWT",
  "PyTorch", 
  "CNNs / RAG Systems"
]

export default function TechStack() {
  return (
    <section className="py-24 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-8 text-center">
        
        <h3 className="text-3xl font-bold mb-12">
          Tech Stack
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stack.map((tech, i) => (
            <div
              key={i}
              className="bg-slate-900 py-4 rounded-xl border border-slate-800 hover:border-primary transition"
            >
              {tech}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}