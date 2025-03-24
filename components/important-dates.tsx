"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export function ImportantDates() {
  type DateItem = {
    title: string;
    description: string;
    date: string;
  };

  const dates: DateItem[] = [
    {
      title: "Paper Submission Deadline",
      description: "Full papers, short papers, and posters",
      date: "May 15, 2025",
    },
    {
      title: "Notification of Acceptance",
      description: "Decision notifications sent to authors",
      date: "July 15, 2025",
    },
    {
      title: "Camera-Ready Submission",
      description: "Final version of accepted papers",
      date: "August 10, 2025",
    },
    {
      title: "Registration Deadline",
      description: "Discounted registration fees",
      date: "August 16, 2025",
    },
    {
      title: "Conference Dates",
      description: "Main conference program",
      date: "August 28-29, 2025",
    },
  ];

  return (
    <section className="w-full py-16 bg-muted/50">
      <div className="container max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary">Important Dates</h2>
          <p className="text-muted-foreground text-lg mt-2">
            Mark your calendar with these key deadlines for ICCSAI 2025.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-4 border-primary ml-6">
          {dates.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 mb-10"
            >
              {/* Icon */}
              <div className="absolute left-[-18px] top-1 bg-primary text-white rounded-full p-2 shadow-lg">
                <Calendar className="w-5 h-5" />
              </div>

              {/* Content Box */}
              <div className="bg-background p-5 rounded-lg shadow-md border">
                <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <div className="mt-2 text-base font-semibold text-accent-foreground">{item.date}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
