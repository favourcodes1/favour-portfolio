import GitHubCalendar from "react-github-calendar"

export default function GithubStats() {
  return (
    <section className="py-32 text-center border-t border-slate-800">

      <h3 className="text-4xl font-bold mb-12">
        GitHub Activity
      </h3>

      <div className="max-w-4xl mx-auto flex justify-center">
        <GitHubCalendar
          username="favourcodes1"
          colorScheme="dark"
        />
      </div>

    </section>
  )
}