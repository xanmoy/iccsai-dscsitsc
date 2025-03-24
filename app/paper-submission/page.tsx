import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink } from "lucide-react"
import "./paper.module.css"
export default function PaperSubmissionPage() {

  const callForPapersData = {
    title: "Call for Papers",
    description:
      "The International Conference on Cyber Security and Artificial Intelligence (ICCSAI) 2025 invites high-quality original research papers on all aspects of cyber security and artificial intelligence. The conference aims to bring together researchers, practitioners, and industry experts to share cutting-edge research, innovations, and applications.",
    tracks: {
      "Cyber Security in Infrastructure": [
        "System and Data Integrity",
        "Gamification in Cyber Security",
        "Security in Block Chain",
        "Trust Management",
        "Digital Forensics",
        "Cyber-physical Attack",
        "Smart-grid Security",
        "Sensor Network Security",
        "Lightweight Cryptography",
      ],
      "AI-driven Cyber Security": [
        "AI-driven Security in Automation",
        "Big Data Security and AI",
        "AI Governance and Cyber Security",
        "Cyber Threat Prediction",
        "Post-quantum Security",
        "Explainable AI for Security",
      ],
      "Cyber Security for Emerging Technologies": [
        "Security in Web Service",
        "E-health Security",
        "Distributed System Security",
        "Cyber Warfare",
        "5G Cyber Security",
        "Zero Trust Architecture",
        "IoT and Cloud Forensic",
        "Embedded System Security",
        "Digital Twins and Cyber Security",
      ],
    },
    importantDates: [
      { label: "Paper Submission Deadline", date: "June 15, 2025" },
      { label: "Notification of Acceptance", date: "July 15, 2025" },
      { label: "Camera-Ready Submission", date: "July 30, 2025" },
      { label: "Conference Dates", date: "August 28-29, 2025" },
    ],
  };


  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Paper Submission</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Guidelines and information for submitting your research to ICCSAI 2025.
          </p>
        </div>
      </div>

      {/* Call for Papers */}
      <section className="mt-16 flex justify-center sm:px-6 lg:px-8" id="Call">
        <div className="max-w-5xl w-full p-6 sm:p-8 md:p-10 rounded-lg">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-6">
            {callForPapersData.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
            {callForPapersData.description}
          </p>

          {/* Tracks and Topics */}
          <h3 className="text-2xl font-semibold text-primary mt-8">Tracks and Topics</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {Object.entries(callForPapersData.tracks).map(([track, topics], index) => (
              <div key={track} className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-white p-5 sm:p-6 rounded-lg shadow-md">
                <h4 className="text-lg sm:text-xl font-semibold mb-3">{track}</h4>
                <ul className="space-y-2 list-none pl-0">
                  {topics.map((topic, i) => (
                    <li key={i} className="text-white/90">{topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Important Dates */}
          <h3 className="text-2xl text-center font-semibold text-primary mt-10">Important Dates</h3>
          <div className="lg:text-center mt-4 p-4 sm:p-6 rounded-lg shadow-sm">
            {callForPapersData.importantDates.map((dateItem, index) => (
              <p key={index} className="text-base sm:text-lg text-gray-800 dark:text-gray-300">
                <strong className="text-primary">{dateItem.label}:</strong> {dateItem.date}
              </p>
            ))}
          </div>

          {/* Download Button */}
          <div className="flex justify-center mt-8">
            <Button className="flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-3 text-base sm:text-lg">
              <Download className="h-5 w-5" />
              Download Call for Papers (PDF)
            </Button>
          </div>
        </div>
      </section>





      {/* Author Guidelines */}
      <section className="mt-16 flex justify-center" id="Guidelines">
        <div className="max-w-4xl w-full p-8 rounded-lg">
          <h2 className="text-4xl font-bold mb-6 text-center text-primary">Author Guidelines</h2>
          <div className="prose prose-blue dark:prose-invert max-w-none leading-relaxed">

            <h3 className="text-xl font-semibold text-primary">Paper Format</h3>
            <p>
              All submissions must be original, unpublished, and not under consideration for publication elsewhere. Papers
              must be written in English and submitted in PDF format.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-6">Paper Categories</h3>
            <div className="space-y-4">
              <p><strong>📄 Full Papers:</strong> Up to 10 pages, including figures, tables, and references. Should present completed research with substantial results.</p>
              <p><strong>📄 Short Papers:</strong> Up to 6 pages, including figures, tables, and references. May present work in progress, preliminary results, or focused contributions.</p>
              <p><strong>📌 Posters:</strong> 2-page extended abstract. Ideal for presenting late-breaking results or ongoing research.</p>
            </div>

            <h3 className="text-xl font-semibold text-primary mt-6">Formatting Instructions</h3>
            <p>Papers must be formatted according to the IEEE conference template, available in LaTeX and Word formats.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                LaTeX Template
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Word Template
              </Button>
            </div>

            <h3 className="text-xl font-semibold text-primary mt-8">Review Process</h3>
            <p>
              All submissions will undergo a double-blind peer review process by at least three members of the program
              committee. Authors should make every effort to anonymize their submissions by removing author names,
              affiliations, and obvious self-references.
            </p>

            <h3 className="text-xl font-semibold text-primary mt-8">Publication</h3>
            <p>
              Accepted papers will be published in the conference proceedings and will be submitted for inclusion in IEEE
              Xplore Digital Library, subject to meeting IEEE's scope and quality requirements.
            </p>
          </div>
        </div>
      </section>



      {/* Paper Submission */}
      <section className="mt-16 text-center px-6 max-w-3xl mx-auto" id="Submission">
        <div className="py-5">
          <h2 className="text-4xl font-bold text-primary mb-6">Paper Submission</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Papers should be submitted electronically through the Microsoft CMT conference management system.
            The submission site will be open from <strong>March 1, 2025</strong>.
          </p>
        </div>
        

        {/* Submission Instructions */}
        <h3 className="text-2xl font-semibold text-primary mt-8">Submission Instructions</h3>
        <ol className="list-decimal pl-6 space-y-3 text-lg text-gray-700 dark:text-gray-300 text-left mx-auto max-w-2xl">
          <li>Create an account on the Microsoft CMT system (if you don't already have one).</li>
          <li>Log in to the system and select <strong>"ICCSAI 2025"</strong>.</li>
          <li>Click on <strong>"Create a New Submission"</strong> and follow the instructions.</li>
          <li>Upload your paper as a <strong>PDF file</strong>.</li>
          <li>Enter all required metadata (title, abstract, keywords, topics).</li>
          <li>Add all authors and their affiliations.</li>
          <li>Review your submission and submit.</li>
        </ol>

        {/* Submission Button */}
        <div className="flex justify-center mt-8">
          <Link href="https://cmt3.research.microsoft.com/" target="_blank">
            <Button className="flex items-center gap-2 text-sm sm:text-lg px-4 sm:px-6 py-2 sm:py-3">
              <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
              Go to Microsoft CMT Submission System
            </Button>
          </Link>
        </div>


        {/* Contact Information */}
        <h3 className="text-2xl font-semibold text-primary mt-10">Contact</h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
          For any questions regarding paper submission, please contact the Program Chairs at:
          <a href="mailto:program-chairs@iccsai2025.org" className="text-blue-600 dark:text-blue-400 ml-1 font-medium hover:underline">
            program-chairs@iccsai2025.org
          </a>
        </p>
      </section>


    </div>
  )
}

