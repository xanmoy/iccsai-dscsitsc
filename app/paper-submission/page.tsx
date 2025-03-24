import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink, FileText, Calendar, Send, Mail } from "lucide-react"

export default function PaperSubmissionPage() {
  const callForPapersData = {
    title: "Call for Papers",
    description:
      "The International Conference on Cyber Security and Artificial Intelligence (ICCSAI) 2025 invites high-quality original research papers on all aspects of cyber security and artificial intelligence. The conference aims to bring together researchers, practitioners, and industry experts to share cutting-edge research, innovations, and applications.",
    tracks: {
      "Cyber Security in Infrastructure": [
        "System and Data Integrity",
        "Trust Management",
        "Cyber-physical Attack",
        "Lightweight Cryptography",
        "Post-quantum Security",
        "Distributed System Security",
        "Zero Trust Architecture",
        "Embedded System Security",
      ],
      "AI-driven Cyber Security": [
        "Gamification in Cyber Security",
        "AI-driven Security in Automation",
        "Smart-grid Security",
        "Big Data Security and AI",
        "AI Governance and Cyber Security",
        "Cyber Warfare",
        "Cyber Threat Prediction",
      ],
      "Cyber Security for Emerging Technologies": [
        "Security in Block Chain",
        "Digital Forensics",
        "Sensor Network Security",
        "Security in Web Services",
        "E-health Security",
        "5G Cyber Security",
        "Zero Trust Architecture",
        "IoT and Cloud Forensic",
        "Digital Twins and Cyber Security",
      ],
    },
    importantDates: [
      { label: "Paper Submission Deadline", date: "May 15, 2025" },
      { label: "Notification of Acceptance", date: "July 15, 2025" },
      { label: "Camera-Ready Submission", date: "August 16, 2025" },
      { label: "Registration Deadline", date: "August 20, 2025" },
      { label: "Conference Dates", date: "August 28-29, 2025" },
    ],
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary/80 py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Paper Submission</h1>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl">
              Guidelines and information for submitting your research to ICCSAI 2025
            </p>
          </div>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div> */}
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-16 z-30 bg-background border-b">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="flex overflow-x-auto space-x-6 py-4 no-scrollbar">
            <a
              href="#call-for-papers"
              className="text-primary font-medium whitespace-nowrap hover:text-primary/80 transition-colors"
            >
              Call for Papers
            </a>
            <a
              href="#important-dates"
              className="text-primary font-medium whitespace-nowrap hover:text-primary/80 transition-colors"
            >
              Important Dates
            </a>
            <a
              href="#author-guidelines"
              className="text-primary font-medium whitespace-nowrap hover:text-primary/80 transition-colors"
            >
              Author Guidelines
            </a>
            <a
              href="#submission-instructions"
              className="text-primary font-medium whitespace-nowrap hover:text-primary/80 transition-colors"
            >
              Submission Instructions
            </a>
            <a
              href="#contact"
              className="text-primary font-medium whitespace-nowrap hover:text-primary/80 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 py-12">
        {/* Call for Papers Section */}
        <section id="call-for-papers" className="mb-20">
          <div className="flex items-center mb-8">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-primary">{callForPapersData.title}</h2>
          </div>

          <p className="text-foreground text-lg mb-12 leading-relaxed">{callForPapersData.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {Object.entries(callForPapersData.tracks).map(([track, topics], index) => (
              <div key={track} className="rounded-xl overflow-hidden">
                <div className="bg-primary p-4">
                  <h3 className="text-xl font-bold text-white">{track}</h3>
                </div>
                <div className="border border-t-0 rounded-b-xl p-5">
                  <ul className="space-y-2">
                    {topics.map((topic, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block h-2 w-2 rounded-full bg-primary mt-2 mr-2"></span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button className="flex items-center gap-2 px-6 py-2.5 text-base">
              <Download className="h-5 w-5" />
              Download Call for Papers (PDF)
            </Button>
          </div>
        </section>

        {/* Important Dates Section */}
        <section id="important-dates" className="mb-20">
          <div className="flex items-center mb-8">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-primary">Important Dates</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {callForPapersData.importantDates.map((dateItem, index) => (
              <div
                key={index}
                className="border rounded-xl p-5 flex flex-col items-center text-center hover:border-primary transition-colors"
              >
                <h3 className="font-semibold text-lg mb-2">{dateItem.label}</h3>
                <p className="text-primary font-bold text-xl">{dateItem.date}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Author Guidelines Section */}
        <section id="author-guidelines" className="mb-20">
          <div className="flex items-center mb-8">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-primary">Author Guidelines</h2>
          </div>

          <div className="flex flex-col items-center justify-center py-16 border rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Coming Soon</h3>
            <p className="text-muted-foreground">Author guidelines will be available shortly.</p>
          </div>
        </section>

        {/* Submission Instructions Section */}
        <section id="submission-instructions" className="mb-20">
          <div className="flex items-center mb-8">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <Send className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-primary">Paper Submission</h2>
          </div>

          <div className="bg-muted/30 rounded-xl p-8 mb-10">
            <p className="text-lg mb-8">
              Papers should be submitted electronically through the Microsoft CMT conference management system. The
              submission site will be open from <strong>April 1, 2025</strong>.
            </p>

            <h3 className="text-xl font-bold mb-4">Submission Instructions</h3>
            <ol className="list-decimal pl-5 space-y-3">
              <li>Create an account on the Microsoft CMT system (if you don't already have one).</li>
              <li>
                Log in to the system and select <strong>"ICCSAI 2025"</strong>.
              </li>
              <li>
                Click on <strong>"Create a New Submission"</strong> and follow the instructions.
              </li>
              <li>
                Upload your paper as a <strong>PDF file</strong>.
              </li>
              <li>Enter all required metadata (title, abstract, keywords, topics).</li>
              <li>Add all authors and their affiliations.</li>
              <li>Review your submission and submit.</li>
            </ol>
          </div>

          <div className="flex justify-center mb-10">
            <Link href="https://cmt3.research.microsoft.com/" target="_blank">
              <Button className="flex items-center gap-2 px-4 py-2 text-sm md:px-6 md:py-2.5 md:text-base">
                <ExternalLink className="h-4 w-4 md:h-5 md:w-5" />
                <span className="whitespace-nowrap">Go to Microsoft CMT Submission System</span>
              </Button>
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-10">
          <div className="flex items-center mb-8">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-primary">Contact</h2>
          </div>

          <div className="text-center p-8 border rounded-xl">
            <p className="text-lg mb-2">
              For any questions regarding paper submission, please contact the Program Chairs at:
            </p>
            <a href="mailto:debashis.das@dsec.ac.in" className="text-primary text-xl font-medium hover:underline">
              debashis.das@dsec.ac.in
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

