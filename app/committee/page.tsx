"use client"
import Link from 'next/link'

import { motion } from 'framer-motion'

export default function CommitteePage() {
  const dates = [
    {
      slug: "advisory",
      title: "Advisory Committee",
    },
    {
      slug: "technical",
      title: "Technical Committee",
    },
    {
      slug: "core",
      title: "Core Committee",
    },
  ]



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
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Committee</h1>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl">
                Meet the team behind ICCSAI 2025 who are working to make this conference a success.
            </p>
            </div>
          </motion.div>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div> */}
      </div>

    <div className="container px-4 py-12 md:px-6 md:py-24">
     
      {/* <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center space-y-4 text-center"
      >
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Committee</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Meet the team behind ICCSAI 2025 who are working to make this conference a success.
          </p>
        </div>
      </motion.div> */}

      <div className="mx-auto max-w-3xl space-y-4">
        {dates.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-lg border bg-card p-4 shadow-sm card-hover dark:border-border"
          >
            <Link href={`/committee/${item.slug.toLowerCase().replace(" ", "-")}`} className="w-full">
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-primary/10 p-2 hidden sm:block">
                    {/* <Calendar className="h-5 w-5 text-primary" /> */}
                  </div>
                  <h3 className="text-base md:text-lg font-bold whitespace-nowrap">{item.title}</h3>
                </div>
                <div className="font-semibold text-sm md:text-base text-primary whitespace-nowrap">
                  Meet The Team
                </div>
              </div>
            </Link>

          </div>
        ))}
      </div>
     
      </div>
    </div>
  )
}

