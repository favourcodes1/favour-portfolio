import { useState } from "react"
import { FaRobot, FaTimes } from "react-icons/fa"

export default function AiChat() {

  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hey 👋 Ask me about Favour's work!" }
  ])
  const [input, setInput] = useState("")

  const sendMessage = () => {

    if (!input) return

    setMessages(prev => [
      ...prev,
      { role: "user", text: input },
      { role: "bot", text: "This is a demo AI response 😈" }
    ])

    setInput("")
  }

  // 🔹 If closed → Show only floating icon
  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-primary text-black p-4 rounded-full shadow-xl hover:scale-110 transition z-50"
      >
        <FaRobot size={22} />
      </button>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 bg-black/80 backdrop-blur-xl p-4 rounded-2xl border border-slate-800 z-50">

      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-semibold">AI Assistant</h3>

        <button onClick={() => setOpen(false)}>
          <FaTimes />
        </button>
      </div>

      {/* Messages */}
      <div className="h-60 overflow-y-auto space-y-3 text-sm">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={msg.role === "user"
              ? "text-right text-primary"
              : "text-left text-slate-300"}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex gap-2 mt-3">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className="w-full bg-slate-900 p-2 rounded-lg text-sm"
          placeholder="Ask anything..."
        />

        <button
          onClick={sendMessage}
          className="bg-primary px-3 rounded-lg text-black"
        >
          Send
        </button>
      </div>

    </div>
  )
}