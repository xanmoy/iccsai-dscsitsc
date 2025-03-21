import React from 'react'
import Link from "next/link"

export function Footer() {
  return (
      <footer className="border-t py-6 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
              <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  &copy; {new Date().getFullYear()} ICCSAI DSCSITSC 2025. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                  <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:underline">
                      Privacy Policy
                  </Link>
                  <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:underline">
                      Terms of Service
                  </Link>
              </div>
          </div>
      </footer>
  )
}
