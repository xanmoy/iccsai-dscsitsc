import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="relative overflow-hidden rounded-xl bg-primary p-8 md:p-10 lg:p-12 dark:bg-gradient-to-r dark:from-primary/90 dark:to-primary/70">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/80 dark:hidden"></div>
          <div className="relative z-10 flex flex-col items-center text-center space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Join Us at ICCSAI 2025</h2>
            <p className="text-white/90 max-w-2xl text-base md:text-lg">
              Be part of the premier conference at the intersection of cyber security and artificial intelligence.
              Register today to secure your spot and take advantage of early bird rates.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/registration">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg">
                  Register Now
                </Button>
              </Link>
              <Link href="/paper-submission">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10"
                >
                  Submit Paper
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

