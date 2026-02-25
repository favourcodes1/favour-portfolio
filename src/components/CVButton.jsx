import { FaDownload } from "react-icons/fa"

export default function CVButton() {
  return (
    <a
      href="src\assets\Favour CV - New V1 - Copy - LF Updated.pdf"
      download
      className="inline-flex items-center gap-3 bg-primary text-black px-8 py-4 rounded-xl font-medium hover:opacity-90 transition"
    >
      <FaDownload />
      Download CV
    </a>
  )
}