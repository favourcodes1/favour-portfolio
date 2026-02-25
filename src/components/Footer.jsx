export default function Footer() {
  return (
    <footer className="py-8 text-center border-t border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-sm">
      © {new Date().getFullYear()} favour.dev — Built with React & Tailwind
    </footer>
  )
}