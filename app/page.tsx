import { AboutConference } from "@/components/about-conference"
import { ConferenceStats } from "@/components/conference-stats"
import { ConferenceTracks } from "@/components/conference-tracks"
import { CTASection } from "@/components/cta-section"
import { FeaturedSpeakers } from "@/components/featured-speakers"
import { HeroSlider } from "@/components/hero-slider"
import { ImportantDates } from "@/components/important-dates"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section with Slider */}
        <HeroSlider />
        <div className="bg-blue-100 dark:bg-blue-300 text-center border-l-4 border-blue-500 text-blue-700 p-4 my-4">
          <p className="font-semibold">Publication Notice:</p>
          <p>All accepted papers are intended to be published in SPRINGER proceedings.</p>
          <p>(Confirmation is currently pending).</p>
        </div>
        {/* Conference Stats */}
        <ConferenceStats />

        {/* About Section */}
        <AboutConference />

        {/* Featured Speakers Section */}
        <FeaturedSpeakers />

        {/* Conference Tracks */}
        <ConferenceTracks />

        {/* Important Dates */}
        <ImportantDates />

        {/* CTA Section */}
        <CTASection />
      </main>
    </div>
  )
}

