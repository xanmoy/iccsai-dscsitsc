import React from 'react'
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"
export function Header() {
  return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center">
              <Link href="/" className="flex items-center space-x-2">
                  {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                  >
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg> */}
                  <span className="font-bold sm:inline-block">ICCSAI 2025</span>
              </Link>

              {/* Mobile Menu */}
              <div className="md:hidden ml-auto flex items-center">
                  <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                          <ModeToggle />
                      </DropdownMenuTrigger>
                      <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-9 w-9">
                              <Menu className="h-5 w-5" />
                              <span className="sr-only">Toggle menu</span>
                          </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-[200px]">
                          <DropdownMenuItem asChild>
                              <Link href="/" className="w-full">
                                  Home
                              </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                              <Link href="/speakers" className="w-full">
                                  Speakers
                              </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                              <Link href="/committee" className="w-full">
                                  Committee
                              </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                              <Link href="/paper-submission" className="w-full">
                                  Paper Submission
                              </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                              <Link href="/registration" className="w-full">
                                  Registration
                              </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                              <Link href="/sponsors" className="w-full">
                                  Sponsors
                              </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                              <Link href="/contact" className="w-full">
                                  Contact
                              </Link>
                          </DropdownMenuItem>
                          
                      </DropdownMenuContent>
                  </DropdownMenu>
              </div>

              {/* Desktop Menu */}
              <nav className="ml-auto hidden md:flex items-center gap-1 lg:gap-2">
                  <Link href="/" className="text-sm font-medium px-3 py-2 hover:text-primary">
                      Home
                  </Link>

                  <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="flex items-center gap-1 h-9 px-3">
                              <span className="text-sm font-medium">Speakers</span>
                              <ChevronDown className="h-4 w-4" />
                          </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                              <Link href="/speakers#keynote">Keynote Speech</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                              <Link href="/speakers#plenary">Plenary Talk</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                              <Link href="/speakers#invited">Invited Talk</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                              <Link href="/speakers#distinguished">Distinguished Talk</Link>
                          </DropdownMenuItem>
                      </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="flex items-center gap-1 h-9 px-3">
                              <span className="text-sm font-medium">Committee</span>
                              <ChevronDown className="h-4 w-4" />
                          </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                              <Link href="/committee#advisory">Advisory Committee</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                              <Link href="/committee#technical">Technical Program Committee</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                              <Link href="/committee#core">Core Committee</Link>
                          </DropdownMenuItem>
                      </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="flex items-center gap-1 h-9 px-3">
                              <span className="text-sm font-medium">Paper Submission</span>
                              <ChevronDown className="h-4 w-4" />
                          </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                              <Link href="/paper-submission#call">Call for Paper</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                              <Link href="/paper-submission#guidelines">Author Guideline</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                              <Link href="/paper-submission#submission">Paper Submission</Link>
                          </DropdownMenuItem>
                      </DropdownMenuContent>
                  </DropdownMenu>

                  <Link href="/registration" className="text-sm font-medium px-3 py-2 hover:text-primary">
                      Registration
                  </Link>

                  <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="flex items-center gap-1 h-9 px-3">
                              <span className="text-sm font-medium">Sponsors</span>
                              <ChevronDown className="h-4 w-4" />
                          </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                              <Link href="/sponsors#platinum">Platinum Sponsor</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                              <Link href="/sponsors#gold">Gold Sponsor</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                              <Link href="/sponsors#silver">Silver Sponsor</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                              <Link href="/sponsors#bronze">Bronze Sponsor</Link>
                          </DropdownMenuItem>
                      </DropdownMenuContent>
                  </DropdownMenu>

                  <Link href="/contact" className="text-sm font-medium px-3 py-2 hover:text-primary">
                      Contact
                  </Link>

                  <ModeToggle />
              </nav>
          </div>
      </header>
  )
}

