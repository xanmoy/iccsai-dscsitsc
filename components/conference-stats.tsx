import { Calendar, MapPin, Clock, Users, Award, BookOpen } from "lucide-react"

export function ConferenceStats() {
  return (
    <section className="w-full py-8 md:py-12 lg:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          <div className="flex flex-col items-center space-y-2 p-4 rounded-lg border bg-card shadow-sm card-hover">
            <Calendar className="h-8 w-8 text-primary" />
            <h3 className="text-lg md:text-xl font-bold text-center">Aug 28-29</h3>
            <p className="text-xs md:text-sm text-muted-foreground text-center">Conference Dates</p>
          </div>

          <div className="flex flex-col items-center space-y-2 p-4 rounded-lg border bg-card shadow-sm card-hover">
            <MapPin className="h-8 w-8 text-primary" />
            <h3 className="text-lg md:text-xl font-bold text-center">Hybrid</h3>
            <p className="text-xs md:text-sm text-muted-foreground text-center">Virtual & In-Person</p>
          </div>

          <div className="flex flex-col items-center space-y-2 p-4 rounded-lg border bg-card shadow-sm card-hover">
            <Clock className="h-8 w-8 text-primary" />
            <h3 className="text-lg md:text-xl font-bold text-center">June 15</h3>
            <p className="text-xs md:text-sm text-muted-foreground text-center">Submission Deadline</p>
          </div>

          <div className="flex flex-col items-center space-y-2 p-4 rounded-lg border bg-card shadow-sm card-hover">
            <Users className="h-8 w-8 text-primary" />
            <h3 className="text-lg md:text-xl font-bold text-center">500+</h3>
            <p className="text-xs md:text-sm text-muted-foreground text-center">Expected Attendees</p>
          </div>

          <div className="flex flex-col items-center space-y-2 p-4 rounded-lg border bg-card shadow-sm card-hover">
            <Award className="h-8 w-8 text-primary" />
            <h3 className="text-lg md:text-xl font-bold text-center">12+</h3>
            <p className="text-xs md:text-sm text-muted-foreground text-center">Keynote Speakers</p>
          </div>

          <div className="flex flex-col items-center space-y-2 p-4 rounded-lg border bg-card shadow-sm card-hover">
            <BookOpen className="h-8 w-8 text-primary" />
            <h3 className="text-lg md:text-xl font-bold text-center">6</h3>
            <p className="text-xs md:text-sm text-muted-foreground text-center">Research Tracks</p>
          </div>
        </div>
      </div>
    </section>
  )
}

