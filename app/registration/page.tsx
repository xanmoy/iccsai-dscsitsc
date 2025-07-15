"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CreditCard,
  Calendar,
  Info,
  FileText,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

export default function RegistrationPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary/80 py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Registration
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-3xl">
                Register to attend ICCSAI 2025 and join the global community of
                cyber security and AI researchers.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-5xl px-4 py-12">
        {/* Navigation Tabs */}
        <div className="mb-12 border-b">
          <div className="flex overflow-x-auto space-x-8 py-4 no-scrollbar">
            <a
              href="#info"
              className="text-primary font-medium whitespace-nowrap hover:text-primary/80 transition-colors pb-2 border-b-2 border-primary"
            >
              Registration Info
            </a>
            <a
              href="#fees"
              className="text-foreground font-medium whitespace-nowrap hover:text-primary transition-colors pb-2"
            >
              Fees
            </a>
            <a
              href="#process"
              className="text-foreground font-medium whitespace-nowrap hover:text-primary transition-colors pb-2"
            >
              Process
            </a>
            <a
              href="#policies"
              className="text-foreground font-medium whitespace-nowrap hover:text-primary transition-colors pb-2"
            >
              Policies
            </a>
          </div>
        </div>

        {/* Registration Information */}
        <motion.section
          id="info"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="mb-16"
        >
          <motion.div variants={fadeIn} className="flex items-center mb-8">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <Info className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-primary">
              Registration Information
            </h2>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="bg-card rounded-xl p-8 border mb-8"
          >
            <p className="text-lg leading-relaxed">
              Registration for ICCSAI 2025 includes access to all conference
              sessions, workshops, tutorials, conference materials, coffee
              breaks, lunches, and the conference reception.
            </p>

            <div className="flex items-center gap-3 mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <Calendar className="h-6 w-6 text-primary flex-shrink-0" />
              <p className="font-semibold text-lg">
                Registration Deadline: August 16, 2025
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Registration Fees */}
        <motion.section
          id="fees"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="mb-16"
        >
          <motion.div variants={fadeIn} className="flex items-center mb-8">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <CreditCard className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-primary">
              Registration Fees
            </h2>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="overflow-hidden rounded-xl border"
          >
            <Table>
              <TableCaption className="pb-4">
                All fees are in INR (₹) and USD ($)
              </TableCaption>
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead className="w-[250px] text-base">
                    Category
                  </TableHead>
                  <TableHead className="text-base">
                    Indian Participant (INR)
                  </TableHead>
                  <TableHead className="text-base">
                    Foreign Author (USD)
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-muted/30">
                  <TableCell className="font-medium">
                    Regular Author (Student)
                  </TableCell>
                  <TableCell>₹6000</TableCell>
                  <TableCell>$200</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/30">
                  <TableCell className="font-medium">
                    Regular Author (Academician)
                  </TableCell>
                  <TableCell>₹7500</TableCell>
                  <TableCell>$250</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/30">
                  <TableCell className="font-medium">
                    Regular Author (Industry)
                  </TableCell>
                  <TableCell>₹8500</TableCell>
                  <TableCell>$300</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/30">
                  <TableCell className="font-medium">
                    Delegates (Academia/ Industry)
                  </TableCell>
                  <TableCell>₹5000</TableCell>
                  <TableCell>$150</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/30">
                  <TableCell className="font-medium">
                    Attendees (Author but not Presenter) - One Day
                  </TableCell>
                  <TableCell>₹2500</TableCell>
                  <TableCell>$100</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/30">
                  <TableCell className="font-medium">
                    Attendees (Non-Author) - One Day
                  </TableCell>
                  <TableCell>₹750</TableCell>
                  <TableCell>$50</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/30">
                  <TableCell className="font-medium">
                    Attendees (Non-Author) - Two Days
                  </TableCell>
                  <TableCell>₹1000</TableCell>
                  <TableCell>$75</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </motion.div>
        </motion.section>

        {/* Registration Process */}
        <motion.section
          id="process"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="mb-16"
        >
          <motion.div variants={fadeIn} className="flex items-center mb-8">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-primary">
              Registration Process
            </h2>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="bg-muted/30 p-8 mb-10 flex flex-col items-left justify-start pb-16 pt-7 border rounded-xl text-center"
          >
            {/* <h3 className="text-2xl font-bold mb-4">Coming Soon</h3>
            <p className="text-muted-foreground">Registration process details will be available shortly.</p> */}

            <div className="text-left">
              <h3 className="text-2xl text-left font-bold mb-4">
                To register your paper, follow the instructions provided:
              </h3>
              <ol className="list-decimal pl-5 space-y-3 text-left">
                <li>
                  Check the Registration Amount that to be applicable for your
                  paper registration
                </li>
                <li>
                  Pay the amount in the provided Bank Details mentioned below
                </li>
                <li>
                  After successful payment, fill the <a className="text-primary hover:underline font-medium" href="https://forms.gle/kwBxgtDAkwn2z7wm7">Google Form</a>
                </li>
              </ol>
            </div>
            <div className="mt-8">
              <h3 className="text-xl text-left font-bold mt-6 mb-4">
                Bank Details for Payment:
              </h3>
              <Table className="w-full text-left">
                <TableBody>
                  <TableRow>
                    <TableCell className="font-bold">Bank Name</TableCell>
                    <TableCell>Punjab National Bank</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">Branch Name</TableCell>
                    <TableCell>Salt Lake</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">Account Name</TableCell>
                    <TableCell>DR SUDHIR CHANDRA SUR INSTITUTE OF TECHNOLOGY AND SPORTS COMPLEX</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">Account Number</TableCell>
                    <TableCell>0952000100801471</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">IFSC Code</TableCell>
                    <TableCell>PUNB0095200</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">Payment Mode:</TableCell>
                    <TableCell>Online Payment (NEFT)</TableCell>
                  </TableRow>
                  
                </TableBody>
              </Table>
            </div>
          </motion.div>
        </motion.section>

        {/* Registration Policies */}
        <motion.section
          id="policies"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="mb-16"
        >
          <motion.div variants={fadeIn} className="flex items-center mb-8">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <AlertCircle className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-primary">
              Registration Policies
            </h2>
          </motion.div>

          <motion.div variants={fadeIn} className="space-y-6">
            <div className="flex gap-4 p-6 border rounded-lg hover:border-primary/50 transition-colors">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Author Registration
                </h3>
                <p>
                  At least one author of each accepted paper must register at
                  the full rate (academic or industry) to have the paper
                  included in the conference proceedings.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 border rounded-lg hover:border-primary/50 transition-colors">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Cancellation Policy
                </h3>
                <p>
                  Cancellations received before August 15, 2025 will receive a
                  refund with 50% of the registration fee. No refunds will be
                  issued for cancellations after August 15, 2025.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 border rounded-lg hover:border-primary/50 transition-colors">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Student Registration
                </h3>
                <p>
                  Students must provide proof of student status (student ID or
                  letter from their institution) during the registration
                  process.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Registration CTA */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1 },
          }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Register?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Registration is managed through the Microsoft CMT system. Click
              the button below to proceed to the registration page.
            </p>

            <Link
              href="https://cmt3.research.microsoft.com/ICCSAIconf2025"
              target="_blank"
              className="flex justify-center"
            >
              <Button
                size="lg"
                className="flex items-center gap-2 px-8 py-6 text-lg"
              >
                <CreditCard className="h-5 w-5" />
                Register Now
              </Button>
            </Link>

            <p className="text-sm text-muted-foreground max-w-md mx-auto mt-8">
              For registration assistance, please contact{" "}
              <a
                href="mailto:debashis.das@dsec.ac.in"
                className="text-primary hover:underline"
              >
                conference.surtech@dsec.ac.in
              </a>
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
