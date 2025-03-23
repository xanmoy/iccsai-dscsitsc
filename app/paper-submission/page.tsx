import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink } from "lucide-react"

export default function PaperSubmissionPage() {
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
      <section className="mt-16" id="Call">
        <h2 className="text-2xl font-bold mb-8">Call for Papers</h2>
        <div className="prose prose-blue dark:prose-invert max-w-none">
          <p>
            The International Conference on Cyber Security and Artificial Intelligence (ICCSAI) 2025 invites
            high-quality original research papers on all aspects of cyber security and artificial intelligence. The
            conference aims to bring together researchers, practitioners, and industry experts to share cutting-edge
            research, innovations, and applications.
          </p>

          <h3>Topics of Interest</h3>
          <p>Topics of interest include, but are not limited to:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <h4 className="text-lg font-semibold mb-2">Cyber Security</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Network Security</li>
                <li>Cryptography and Cryptanalysis</li>
                <li>Security Protocols</li>
                <li>Intrusion Detection and Prevention</li>
                <li>Malware Analysis and Detection</li>
                <li>Digital Forensics</li>
                <li>Security in Cloud Computing</li>
                <li>IoT Security</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Artificial Intelligence</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>AI for Security Applications</li>
                <li>Machine Learning for Cyber Defense</li>
                <li>Adversarial Machine Learning</li>
                <li>Privacy-Preserving AI</li>
                <li>Explainable AI for Security</li>
                <li>AI Ethics and Security</li>
                <li>Deep Learning for Threat Detection</li>
                <li>Natural Language Processing for Security</li>
              </ul>
            </div>
          </div>

          <h3 className="mt-8">Important Dates</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Paper Submission Deadline:</strong> June 15, 2025
            </li>
            <li>
              <strong>Notification of Acceptance:</strong> July 15, 2025
            </li>
            <li>
              <strong>Camera-Ready Submission:</strong> July 30, 2025
            </li>
            <li>
              <strong>Conference Dates:</strong> August 28-29, 2025
            </li>
          </ul>

          <div className="flex justify-center mt-8">
            <Button className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Call for Papers (PDF)
            </Button>
          </div>
        </div>
      </section>

      {/* Author Guidelines */}
      <section className="mt-16" id="Guidelines">
        <h2 className="text-2xl font-bold mb-8">Author Guidelines</h2>
        <div className="prose prose-blue dark:prose-invert max-w-none">
          <h3>Paper Format</h3>
          <p>
            All submissions must be original, unpublished, and not under consideration for publication elsewhere. Papers
            must be written in English and submitted in PDF format.
          </p>

          <h3>Paper Categories</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Full Papers:</strong> Up to 10 pages, including figures, tables, and references. Full papers
              should present completed research with substantial results.
            </li>
            <li>
              <strong>Short Papers:</strong> Up to 6 pages, including figures, tables, and references. Short papers may
              present work in progress, preliminary results, or focused contributions.
            </li>
            <li>
              <strong>Posters:</strong> 2-page extended abstract. Posters are ideal for presenting late-breaking results
              or ongoing research.
            </li>
          </ul>

          <h3>Formatting Instructions</h3>
          <p>
            Papers must be formatted according to the IEEE conference template. The template is available in both LaTeX
            and Word formats.
          </p>

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

          <h3 className="mt-8">Review Process</h3>
          <p>
            All submissions will undergo a double-blind peer review process by at least three members of the program
            committee. Authors should make every effort to anonymize their submissions by removing author names,
            affiliations, and obvious self-references.
          </p>

          <h3>Publication</h3>
          <p>
            Accepted papers will be published in the conference proceedings and will be submitted for inclusion in IEEE
            Xplore Digital Library, subject to meeting IEEE's scope and quality requirements.
          </p>
        </div>
      </section>

      {/* Paper Submission */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8" id="Submission">Paper Submission</h2>
        <div className="prose prose-blue dark:prose-invert max-w-none">
          <p>
            Papers should be submitted electronically through the Microsoft CMT conference management system. The
            submission site will be open from March 1, 2025.
          </p>

          <div className="bg-muted p-6 rounded-lg mt-6">
            <h3 className="text-xl font-bold mb-4">Submission Instructions</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Create an account on the Microsoft CMT system (if you don't already have one)</li>
              <li>Log in to the system and select "ICCSAI 2025"</li>
              <li>Click on "Create a New Submission" and follow the instructions</li>
              <li>Upload your paper as a PDF file</li>
              <li>Enter all required metadata (title, abstract, keywords, topics)</li>
              <li>Add all authors and their affiliations</li>
              <li>Review your submission and submit</li>
            </ol>

            <div className="flex justify-center mt-8">
              <Link href="https://cmt3.research.microsoft.com/" target="_blank">
                <Button className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Go to Microsoft CMT Submission System
                </Button>
              </Link>
            </div>
          </div>

          <h3 className="mt-8">Contact</h3>
          <p>
            For any questions regarding paper submission, please contact the Program Chairs at:
            <a href="mailto:program-chairs@iccsai2025.org" className="ml-1">
              program-chairs@iccsai2025.org
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}

