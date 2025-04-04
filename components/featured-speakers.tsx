import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const featuredSpeakers = [
  {
    name: "Dr. Goutam Paul",
    title: "Keynote Speaker",
    affiliation: "Indian Statistical Institute, Kolkata, India",
    image: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1742587175/unnamed_ankf5o.jpg",
    topic: "Cryptology & Security Research Unit (CSRU)",
    // bio: "Cryptology & Security Research Unit (CSRU)",
  },
  {
    name: "Prof. (Dr.) Prasanta Kumar Jana",
    title: "Keynote Speaker",
    affiliation: "Indian Institute of Technology (ISM), Dhanbad, India",
    image: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1742587271/unnamed_1_hvvuzg.jpg",
    topic: "Department of Computer Science & Engineering",
    // bio: "Department of Computer Science & Engineering",
  },
  {
    name: "Dr. Arijit Karati",
    title: "Invited Talk",
    affiliation: "National Sun Yat-sen University (NSYSU), Taiwan",
    image: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1742587317/unnamed_2_y8rlyf.jpg",
    topic: "Department of Computer Science & Engineering",
    // bio: "Pioneering researcher in adversarial machine learning and AI robustness.",
  },
  {
    name: "Dr. Tanushyam Chattopadhyay",
    title: "Distinguished Speaker",
    affiliation: "AI Lab, Adani Enterprise Ltd, India",
    image: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1742587371/unnamed_3_f7emra.jpg",
    topic: "Principal Scientist",
    // bio: "Industry leader in AI security and privacy-preserving machine learning techniques.",
  },
  {
    name: "Prof. (Dr.) Anand Nayyar",
    title: "Plenary Speaker",
    affiliation: "Duy Tan University, Da Nang, Viet Nam",
    image: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743448839/Dr.AnandNayyar_qvyepp.png",
    topic: "School of Computer Science",
    // bio: "Industry leader in AI security and privacy-preserving machine learning techniques.",
  },
  {
    name: "Mrs. Atreyee Dey",
    title: "Distinguished Speaker",
    affiliation: "Leading Google Search India",
    image: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1743753472/Atreyee_Dey_zvlgzp.jpg",
    topic: "Senior Staff Software Engineer",
    // bio: "Industry leader in AI security and privacy-preserving machine learning techniques.",
  },
]

export function FeaturedSpeakers() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 md:mb-16">
          <div className="space-y-2 max-w-3xl">
            <h2 className="section-title gradient-heading">Featured Speakers</h2>
            <p className="section-description">
              Meet our distinguished speakers who will share their expertise and insights at ICCSAI 2025.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredSpeakers.map((speaker, index) => (
            <div
              key={index}
              className="flex flex-col items-center group card-hover bg-card rounded-xl p-6 border dark:border-border"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 border-4 border-primary/20 group-hover:border-primary/70 transition-colors shadow-md">
                <Image src={speaker.image || "/placeholder.svg"} alt={speaker.name} fill className="object-cover" />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-lg md:text-xl font-bold">{speaker.name}</h3>
                <p className="text-primary font-medium text-sm md:text-base">{speaker.title}</p>
                <p className="mt-2 text-muted-foreground font-medium text-sm md:text-base">{speaker.topic}</p>
                <p className="text-xs md:text-sm">{speaker.affiliation}</p>
                
                {/* <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">{speaker.bio}</p> */}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10 md:mt-12">
          <Link href="/speakers">
            <Button className="shadow-md dark:shadow-none">View All Speakers</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

