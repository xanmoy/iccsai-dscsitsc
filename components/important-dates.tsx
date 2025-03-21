import { Calendar } from "lucide-react"

export function ImportantDates() {
  const dates = [
    {
      title: "Paper Submission Deadline",
      description: "Full papers, short papers, and posters",
      date: "June 15, 2025",
    },
    {
      title: "Notification of Acceptance",
      description: "Decision notifications sent to authors",
      date: "July 15, 2025",
    },
    {
      title: "Camera-Ready Submission",
      description: "Final version of accepted papers",
      date: "July 30, 2025",
    },
    {
      title: "Early Bird Registration",
      description: "Discounted registration fees",
      date: "August 1, 2025",
    },
    {
      title: "Conference Dates",
      description: "Main conference program",
      date: "August 28-29, 2025",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 md:mb-16">
          <div className="space-y-2 max-w-3xl">
            <h2 className="section-title gradient-heading">Important Dates</h2>
            <p className="section-description">Mark your calendar with these key deadlines for ICCSAI 2025.</p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {dates.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-lg border bg-card p-4 shadow-sm card-hover"
            >
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-primary/10 p-2 hidden sm:block">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold">{item.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
              <div className="mt-2 sm:mt-0 font-semibold text-sm md:text-base text-primary">{item.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

