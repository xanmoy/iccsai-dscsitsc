import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/footer"



const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ICCSAI 2025 - International Conference on Cyber Security and Artificial Intelligence",
  description:
    "Join us for the International Conference on Cyber Security and Artificial Intelligence 2025, happening on August 28-29, 2025.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
import { Header } from "@/components/header"
