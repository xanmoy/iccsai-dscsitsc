import { Calendar, HandHelping, Clock, Users, Award, BookOpen } from "lucide-react";
import  CountdownTimer  from "@/components/countdownTimer";

export function ConferenceStats() {
  const highlights = [
    {
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: "Aug 28-29",
      subtitle: "Conference Dates",
    },
    {
      icon: <HandHelping className="h-10 w-10 text-primary" />,
      title: "Collaboration",
      subtitle: "Academics and industry",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "June 30",
      subtitle: "Submission Deadline",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "100+",
      subtitle: "Expected Attendees",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "8+",
      subtitle: "Eminent Speakers",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "25+",
      subtitle: "Research Domains",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-background text-foreground">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Event Highlights
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Key details you don’t want to miss!
          </p>
        </div>

        <div className="flex flex-col justify-center mb-12">
          <h3 className="text-center pb-3 text-xl font-bold tracking-wide uppercase">COUNTDOWN</h3>
          <CountdownTimer targetDate="2025-08-28T00:00:00" />
        </div>  
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center p-6 rounded-xl shadow-xl bg-card border border-border transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-card shadow-sm card-hover dark:border-border rounded-xl backdrop-blur-md"></div>
              <div className="relative z-10 flex flex-col items-center space-y-3">
                <div className="p-3 text-primary rounded-full">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground text-center">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
