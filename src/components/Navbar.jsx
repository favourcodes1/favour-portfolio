import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FaLinkedin, FaGithub, FaEnvelope, FaMoon, FaSun } from "react-icons/fa"

export default function Navbar() {

  const [active, setActive] = useState("")
  const [dark, setDark] = useState(true)
  const [open, setOpen] = useState(false)
  const [shrink, setShrink] = useState(false)

  useEffect(() => {

    document.documentElement.classList.toggle("dark", dark)

    const handleScroll = () => {
      setShrink(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    const sections = document.querySelectorAll("section")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach(section => observer.observe(section))

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }

  }, [dark])

  const links = ["projects", "experience", "education", "certifications", "contact"]

  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300
      ${shrink
          ? "py-3 bg-white/80 dark:bg-black/80 shadow-lg backdrop-blur-xl"
          : "py-5 bg-white/60 dark:bg-black/60 backdrop-blur-xl"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-primary">
          favour.dev
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {links.map(link => (
            <a
              key={link}
              href={`#${link}`}
              className="relative group"
            >
              <span className={
                active === link
                  ? "text-primary"
                  : "text-slate-500 dark:text-slate-400"
              }>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </span>

              <span className="
                absolute left-0 bottom-[-6px]
                w-0 h-[2px]
                bg-primary
                group-hover:w-full
                transition-all duration-300
              "/>
            </a>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5 text-lg">

          <a
            href="https://linkedin.com/in/favourogubuike"
            target="_blank"
            className="hover:text-primary transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/favourcodes1"
            target="_blank"
            className="hover:text-primary transition"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:favourcodes@gmail.com"
            className="hover:text-primary transition"
          >
            <FaEnvelope />
          </a>

          <button
            onClick={() => setDark(!dark)}
            className="hover:text-primary transition"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-8 pb-6 pt-4 flex flex-col gap-4">
          {links.map(link => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-white transition"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>
      )}

    </motion.nav>
  )
}