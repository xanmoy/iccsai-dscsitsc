"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1742586381/aboutsurtech_lnv0mh.jpg",
    title: "International Conference on Cyber Security and Artificial Intelligence",
    subtitle: "August 28-29, 2025",
    description: "Join leading researchers and practitioners at the intersection of cyber security and AI",
  },
  {
    image: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1742586537/wallpaperflare.com_wallpaper_mgc1zf.jpg",
    title: "Advancing Security Through AI",
    subtitle: "ICCSAI 2025",
    description: "Explore cutting-edge research and applications in cyber security and artificial intelligence",
  },
  {
    image: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1742586594/wallpaperflare.com_wallpaper_1_biccde.jpg",
    title: "Call for Papers Now Open",
    subtitle: "Submission Deadline: June 15, 2025",
    description: "Submit your research on AI-driven security solutions and secure AI systems",
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [current])

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl space-y-4 md:space-y-6 animate-fade-in">
              <h2 className="text-xl md:text-2xl font-semibold text-primary-foreground/90">{slide.subtitle}</h2>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                {slide.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto">{slide.description}</p>
              
              <div className="flex items-center gap-3 mt-4 flex-wrap justify-center">
                <img src="https://www.surtech.edu.in/images/jis-logo.png" alt="JIS Logo" className="w-[40px] md:w-[40px]" />
                <img src="https://www.surtech.edu.in/images/Accreditation/logo-front/NAAC-surtech.png" alt="NAAC Logo" className="w-[40px] md:w-[40px]" />
                <img src="https://www.surtech.edu.in/images/Accreditation/logo-front/ugc.png" alt="UGC Logo" className="w-[35px] md:w-[40px]" />
                <img src="https://www.surtech.edu.in/images/Accreditation/logo-front/iic.png" alt="IIC Logo" className="w-[35px] md:w-[40px]" />
                <img src="https://www.surtech.edu.in/images/Accreditation/logo-front/nba.png" alt="NBA Logo" className="w-[35px] md:w-[40px]" />
                <img src="https://www.surtech.edu.in/images/Accreditation/logo-front/wbut.png" alt="WBUT Logo" className="w-[35px] md:w-[35px]" />
                <img src="https://www.surtech.edu.in/images/Accreditation/logo-front/aicte.png" alt="AICTE Logo" className="w-[35px] md:w-[35px]" />
              </div>


              <div className="flex flex-wrap justify-center gap-3 md:gap-4 pt-4 md:pt-6">
                <Link href="/registration">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg">
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
      ))}

      <button
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-1 sm:p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <button
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-1 sm:p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

