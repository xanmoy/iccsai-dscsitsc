"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"
import Image from 'next/image'

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)

    const toggleDropdown = (menu: string) => {
        setOpenDropdown(openDropdown === menu ? null : menu)
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background">
            <div className="container flex h-16 items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image src="https://res.cloudinary.com/dg6vdv82c/image/upload/v1742817731/WhatsApp_Image_2025-03-23_at_2.15.13_PM-removebg-preview_srgdrz.png" alt="ICCSAI 2025" width={40} height={40} />
                    <Image src="https://res.cloudinary.com/dg6vdv82c/image/upload/v1742587074/Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19_y62wdr.png" alt="ICCSAI 2025" width={40} height={40} />
                    <span className="hidden font-bold sm:inline-block">ICCSAI 2025</span>
                </Link>

                {/* Mobile Menu Button */}
                <div className="md:hidden ml-auto flex items-center gap-3">
                    <ModeToggle />
                    <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => setIsMobileMenuOpen(true)}>
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 bg-background z-50" onClick={() => setIsMobileMenuOpen(false)}>
                        {/* Prevent clicking inside the menu from closing it */}
                        <div className="fixed right-0 top-0 h-full w-4/5 bg-background shadow-lg flex flex-col p-5" onClick={(e) => e.stopPropagation()}>
                            <div className="flex justify-between items-center mb-5">
                                <span className="text-lg font-bold">Menu</span>
                                <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => setIsMobileMenuOpen(false)}>
                                    <X className="h-5 w-5" />
                                </Button>
                            </div>

                            <nav className="space-y-4">
                                <Link href="/" className="block text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>

                                {/* Dropdowns */}
                                {[
                                    { name: "Speakers", prefix: "/speakers", links: ["#Keynote", "#Plenary", "#Invited", "#Distinguished"] },
                                    { name: "Committee", prefix: "/committee", links: ["#Advisory", "#Technical", "#Core"] },
                                    { name: "Paper Submission", prefix: "/paper-submission", links: ["#Call", "#Guidelines", "#Submission"] },
                                    { name: "Sponsors", prefix: "/sponsors", links: ["#Platinum", "#Gold", "#Silver", "#Bronze"] },
                                ].map((item) => (
                                    <div key={item.name} className="border-b">
                                        <button className="flex justify-between items-center w-full text-base font-medium py-2" onClick={() => toggleDropdown(item.name)}>
                                            {item.name}
                                            <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`} />
                                        </button>
                                        {openDropdown === item.name && (
                                            <div className="pl-4 space-y-2">
                                                {item.links.map((link, index) => (
                                                    <Link key={index} href={`${item.prefix}${link}`} className="block text-sm" onClick={() => setIsMobileMenuOpen(false)}>
                                                        {link.replace("#", "").replace("-", " ")}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}

                                <Link href="/registration" className="block text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>Registration</Link>
                                <Link href="/contact" className="block text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                            </nav>
                        </div>
                    </div>
                )}

                {/* Desktop Menu */}
                <nav className="ml-auto hidden md:flex items-center gap-1 lg:gap-2">
                    <Link href="/" className="text-sm font-medium px-3 py-2 hover:text-primary">Home</Link>

                    {/* Dropdown Menus */}
                    {[
                        { name: "Speakers", prefix: "/speakers", links: ["#Keynote", "#Plenary", "#Invited", "#Distinguished"] },
                        { name: "Committee", prefix: "/committee", links: ["#Technical", "#Finance", "#Registration", "#Management", "#Food", "#Transport", "#Website", "#Publicity"] },
                        { name: "Paper Submission", prefix: "/paper-submission", links: ["#Call", "#Guidelines", "#Submission"] },
                        { name: "Sponsors", prefix: "/sponsors", links: ["#Platinum", "#Gold", "#Silver", "#Bronze"] },
                    ].map((item) => (
                        <div key={item.name} className="relative group">
                            <Button variant="ghost" className="flex items-center gap-1 h-9 px-3">
                                <span className="text-sm font-medium">{item.name}</span>
                                <ChevronDown className="h-4 w-4" />
                            </Button>
                            <div className="absolute right-0 mt-2 w-48 bg-background shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                {item.links.map((link, index) => (
                                    <Link key={index} href={`${item.prefix}${link}`} className="block px-4 py-2 text-sm hover:bg-background/30 hover:text-primary">
                                        {link.replace("#", "").replace("-", " ")}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}

                    <Link href="/registration" className="text-sm font-medium px-3 py-2 hover:text-primary">Registration</Link>
                    <Link href="/contact" className="text-sm font-medium px-3 py-2 hover:text-primary">Contact</Link>

                    <ModeToggle />
                </nav>
            </div>
        </header>
    )
}
