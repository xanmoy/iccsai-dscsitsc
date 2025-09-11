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
          <p className="text-2xl font-extrabold uppercase tracking-wide">📢 Publication Note</p>
          <p className="mt-3 text-lg font-semibold">
            It is planned to publish the peer reviewed and selected papers of conference as proceedings with Springer in their prestigious “IoT and Wireless Communication Networks” series <a className="underline text-yellow-400" href="https://link.springer.com/series/17387">https://link.springer.com/series/17387</a>. For detailed instructions for author and editors of conference proceedings, kindly visit the following link: <a className="underline text-yellow-400" href="https://www.springer.com/us/authors-editors/conference-proceedings">https://www.springer.com/us/authors-editors/conference-proceedings</a>. Selected papers from the conference will be published by Springer as a proceedings book volume. Springer will conduct quality checks on the accepted papers and only papers that pass these checks will be published. Springer Nature does not charge any money for publication of Non-Open Access content. Abstracts/extended abstracts and short papers (less than 4 pages) are not considered for publication.

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

