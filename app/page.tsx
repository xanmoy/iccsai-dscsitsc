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

