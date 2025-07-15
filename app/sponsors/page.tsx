"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Handshake } from "lucide-react"
import { motion } from "framer-motion"

export default function SponsorsPage() {
  return (
    <div>

      <div className="relative bg-gradient-to-r from-primary to-primary/80 py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Sponsors</h1>
              <p className="text-white/90 text-lg md:text-xl max-w-3xl">
                Our sponsors help make ICCSAI 2025 possible. We are grateful for their support.
              </p>
            </div>
          </motion.div>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div> */}
      </div>


      <div className="container px-4 py-12 md:px-6 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Be the sponsor of ICCSAI 2025
            <Handshake className="inline-block ml-2 w-8 h-8 text-primary" />
          </h2>
        </div>
      {/* <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sponsors</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our sponsors help make ICCSAI 2025 possible. We are grateful for their support.
          </p>
        </div>
      </div> */}

      {/* Platinum Sponsors */}
      {/* <section className="mt-16" id="platinum">
        <h2 className="text-2xl font-bold mb-8 text-center">Platinum Sponsors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={`platinum-${i}`} className="flex flex-col items-center justify-center border rounded-lg p-8">
              <Image
                src="/placeholder.svg?height=150&width=300"
                alt={`Platinum Sponsor ${i}`}
                width={300}
                height={150}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section> */}

      {/* Gold Sponsors */}
      {/* <section className="mt-16" id="gold">
        <h2 className="text-2xl font-bold mb-8 text-center">Gold Sponsors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={`gold-${i}`} className="flex flex-col items-center justify-center border rounded-lg p-6">
              <Image
                src="/placeholder.svg?height=120&width=240"
                alt={`Gold Sponsor ${i}`}
                width={240}
                height={120}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section> */}

      {/* Silver Sponsors */}
      {/* <section className="mt-16" id="silver">
        <h2 className="text-2xl font-bold mb-8 text-center">Silver Sponsors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={`silver-${i}`} className="flex flex-col items-center justify-center border rounded-lg p-4">
              <Image
                src="/placeholder.svg?height=100&width=200"
                alt={`Silver Sponsor ${i}`}
                width={200}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section> */}

      {/* Bronze Sponsors */}
      {/* <section className="mt-16" id="bronze">
        <h2 className="text-2xl font-bold mb-8 text-center">Bronze Sponsors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={`bronze-${i}`} className="flex flex-col items-center justify-center border rounded-lg p-4">
              <Image
                src="/placeholder.svg?height=80&width=160"
                alt={`Bronze Sponsor ${i}`}
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section> */}
      {/* Other Sponsors */}
      {/* <section className="mt-16" id="bronze">
        <h2 className="text-2xl font-bold mb-8 text-center">Other Sponsors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={`bronze-${i}`} className="flex flex-col items-center justify-center border rounded-lg p-4">
              <Image
                src="/placeholder.svg?height=80&width=160"
                alt={`Bronze Sponsor ${i}`}
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section> */}

      {/* Sponsorship Opportunities */}
      <section className="mt-16">
        <div className="bg-muted rounded-lg p-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Become a Sponsor</h2>
            <p className="text-muted-foreground mb-6">
              Showcase your organization to the global cyber security and AI community. ICCSAI 2025 offers various
              sponsorship packages to increase your visibility and connect with leading researchers and practitioners.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Sponsorship Benefits</h3>
              <ul className="text-left list-disc pl-5 space-y-2">
                <li>Brand visibility to a global audience of cyber security and AI professionals</li>
                <li>Networking opportunities with leading researchers and industry experts</li>
                <li>Recognition in conference materials and website</li>
                <li>Exhibition space (for Platinum and Gold sponsors)</li>
                <li>Complimentary registrations based on sponsorship level</li>
              </ul>
            </div>

            <div className="mt-8 flex lg:flex-row flex-col gap-4">
                <Link href="https://drive.google.com/file/d/1uw0WPnak7RhsdpiTmSurK2W1Jzc1XGWf/view?usp=sharing"
                target="_blank">
                <Button className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Sponsorship Prospectus (PDF)
                </Button>
              </Link>
                <Link href="https://drive.google.com/file/d/1keqMzTgNI9JDflcb1heLTdlSlgoj3hEP/view?usp=sharing"
                target="_blank">
                <Button className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Sponsorship Form(PDF)
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}

