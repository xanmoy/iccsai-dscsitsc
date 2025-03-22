import { Calendar } from "lucide-react";

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
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 md:mb-16">
          <div className="space-y-2 max-w-3xl">
            <h2 className="section-title gradient-heading">Important Dates</h2>
            <p className="section-description">
              Mark your calendar with these key deadlines for ICCSAI 2025.
            </p>
          </div>
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-1/2 w-1 bg-primary h-full transform -translate-x-1/2"></div>
          {dates.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-8 ${index % 2 === 0 ? "justify-start pl-8" : "justify-end pr-8"
                }`}
            >
              <div className="w-1/2 p-4 bg-background rounded-lg shadow-md">
                <h3 className="text-base md:text-lg font-bold">{item.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{item.description}</p>
                <div className="mt-2 font-semibold text-sm md:text-base text-primary">
                  {item.date}
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-md">
                <Calendar className="h-5 w-5 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
