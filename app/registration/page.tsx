"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CreditCard, Calendar } from "lucide-react"
import { motion } from "framer-motion"
export default function RegistrationPage() {
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
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Registration</h1>
              <p className="text-white/90 text-lg md:text-xl max-w-3xl">
                Register to attend ICCSAI 2025 and join the global community of cyber security and AI researchers.
              </p>
            </div>
          </motion.div>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div> */}
      </div>
    <div className="container px-4 py-12 md:px-6 md:py-24">
      {/* <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Registration</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Register to attend ICCSAI 2025 and join the global community of cyber security and AI researchers.
          </p>
        </div>
      </div> */}

      {/* Registration Information */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Registration Information</h2>
        <div className="prose prose-blue dark:prose-invert max-w-none">
          <p>
            Registration for ICCSAI 2025 includes access to all conference sessions, workshops, tutorials, conference
            materials, coffee breaks, lunches, and the conference reception.
          </p>

          <div className="flex items-center gap-2 mt-4 text-primary">
            <Calendar className="h-5 w-5" />
            <p className="font-semibold">Registration Deadline: August 16, 2025</p>
          </div>

          <h3 className="mt-8">Registration Fees</h3>
          <Table>
            <TableCaption>All fees are in INR (₹) and USD ($)</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px]">Category</TableHead>
                <TableHead>Indian Author (INR)</TableHead>
                <TableHead>Foreign Author (USD)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Regular Author (Student)</TableCell>
                <TableCell>₹6000</TableCell>
                <TableCell>$200</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Regular Author (Academician)</TableCell>
                <TableCell>₹7500</TableCell>
                <TableCell>$250</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Regular Author (Industry)</TableCell>
                <TableCell>₹8500</TableCell>
                <TableCell>$300</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Attendees (Author but not Presenter) - One Day</TableCell>
                <TableCell>₹2500</TableCell>
                <TableCell>$100</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Attendees (Non-Author) - One Day</TableCell>
                <TableCell>₹750</TableCell>
                <TableCell>$50</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Attendees (Non-Author) - Two Days</TableCell>
                <TableCell>₹1000</TableCell>
                <TableCell>$75</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <h3 className="mt-8">Registration Process</h3>
          <div className="grid text-white grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="border bg-gradient-to-r from-primary via-primary/90 to-primary/80 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4">In-Person Registration</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Access to all conference sessions</li>
                <li>Conference materials and proceedings</li>
                <li>Coffee breaks and lunches (Aug 28-29)</li>
                <li>Welcome reception</li>
                <li>Conference dinner</li>
                <li>Certificate of attendance</li>
                <li>Access to virtual platform</li>
              </ul>
            </div>

            <div className="border bg-gradient-to-r from-primary via-primary/90 to-primary/80 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4">Virtual Registration</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Access to all live-streamed sessions</li>
                <li>Digital conference materials and proceedings</li>
                <li>Access to recorded sessions (post-conference)</li>
                <li>Virtual networking opportunities</li>
                <li>Digital certificate of attendance</li>
                <li>Access to virtual platform</li>
              </ul>
            </div>
          </div>

          <h3 className="mt-8">Registration Policies</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Author Registration:</strong> At least one author of each accepted paper must register at the full
              rate (academic or industry) to have the paper included in the conference proceedings.
            </li>
            <li>
              <strong>Cancellation Policy:</strong> Cancellations received before August 15, 2025 will receive a refund with 50% of the registration fee. No refunds will be issued for cancellations after August 15, 2025.
            </li>
            <li>
              <strong>Student Registration:</strong> Students must provide proof of student status (student ID or letter
              from their institution) during the registration process.
            </li>
          </ul>
        </div>
      </section>

      {/* Registration Button */}
      <section className="mt-16 flex flex-col items-center justify-center space-y-6">
        <div className="text-center max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Ready to Register?</h2>
          <p className="text-muted-foreground">
            Registration is managed through the Microsoft CMT system. Click the button below to proceed to the
            registration page.
          </p>
        </div>

        <Link href="https://cmt3.research.microsoft.com/" target="_blank">
          <Button size="lg" className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Register Now
          </Button>
        </Link>

        <p className="text-sm text-muted-foreground max-w-md text-center">
          For registration assistance, please contact{" "}
          <a href="mailto:debashis.das@dsec.ac.in" className="underline">
            debashis.das@dsec.ac.in
          </a>
        </p>
      </section>
      </div>
    </div>
  )
}

