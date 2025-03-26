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
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800 text-white text-center border-l-8 border-yellow-400 shadow-lg p-6 my-6 rounded-lg">
          <p className="text-2xl font-extrabold uppercase tracking-wide">📢 Publication Notice</p>
          <p className="mt-3 text-lg font-semibold">
            All the accepted papers will be published in SPRINGER proceedings 
            <span className="block mt-1 text-base text-gray-200 italic">(Confirmation awaited)</span>
          </p>
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

