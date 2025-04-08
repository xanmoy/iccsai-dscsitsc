"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"
import Image from 'next/image'
import DropdownMenu from '@/components/DropdownMenu'





export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)

    const toggleMobileDropdown = (menu: string, event?: React.MouseEvent<HTMLButtonElement>) => {
        if (event) event.preventDefault(); // Prevent navigation when clicking the chevron
        setOpenDropdown(openDropdown === menu ? null : menu);
    }


    const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

    interface DropdownEvent extends React.MouseEvent<HTMLButtonElement> { }

    const toggleDropdown = (name: string, event: DropdownEvent): void => {
        event.preventDefault(); // Prevent navigation when clicking the chevron
        setOpenMobileDropdown(openDropdown === name ? null : name);
    };

    const menuItems = [
        { name: "Speakers", prefix: "/speakers", links: ["#Keynote-Address", "#Plenary-Speech", "#Invited-Talk", "#Distinguished-Lecture"] },
        { name: "Committee", prefix: "/committee", links: ["/Advisory-Committee", "/Technical-Program-Committee", "/patrons-chairs", "/Core-Committee"] },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background">
            <div className="container flex h-16 items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <span className="hidden font-bold sm:inline-block">ICCSAI 2025</span>
                    <Image src="https://res.cloudinary.com/dg6vdv82c/image/upload/v1743176971/ICCSAI_final_pqjqxw.png" alt="ICCSAI 2025" width={40} height={40} />
                    <Image src="https://res.cloudinary.com/dg6vdv82c/image/upload/v1743178517/Sur_Logos-04_pkljtx.png" alt="Surtech" width={50} height={50} />
                </Link>

                <div className="hidden md:flex items-center gap-3 flex-wrap justify-start w-fit">
                    <img src="https://www.surtech.edu.in/images/jis-logo.png" alt="JIS Logo" className="w-[40px] md:w-[40px]" />
                    <img src="https://www.surtech.edu.in/images/Accreditation/logo-front/NAAC-surtech.png" alt="NAAC Logo" className="w-[40px] md:w-[40px]" />
                    <img src="https://www.surtech.edu.in/images/Accreditation/logo-front/ugc.png" alt="UGC Logo" className="w-[20px] md:w-[20px]" />
                    <img src="https://www.surtech.edu.in/images/Accreditation/logo-front/iic.png" alt="IIC Logo" className="w-[20px] md:w-[20px]" />
                    <img src="https://www.surtech.edu.in/images/Accreditation/logo-front/nba.png" alt="NBA Logo" className="w-[25px] md:w-[25px]" />
                    <img src="https://www.surtech.edu.in/images/Accreditation/logo-front/wbut.png" alt="WBUT Logo" className="w-[20px] md:w-[20px]" />
                    <img src="https://www.surtech.edu.in/images/Accreditation/logo-front/aicte.png" alt="AICTE Logo" className="w-[25px] md:w-[25px]" />
                </div>


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
                                <DropdownMenu closeHeader={() => setIsMobileMenuOpen(false)} />

                                <Link href="/sponsors" className="block text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>Sponsors</Link>
                                <Link href="/paper-submission" className="block text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>Paper Submission</Link>
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
                        { name: "Speakers", prefix: "/speakers", links: ["#Keynote-Address", "#Plenary-Speech", "#Invited-Talk", "#Distinguished-Lecture"] },
                        { name: "Committee", prefix: "/committee", links: ["/Advisory-Committee", "/Technical-Program-Committee", "/patrons-chairs", "/Core-Committee"] },

                    ].map((item) => (
                        <div key={item.name} className="relative group">
                            <Button variant="ghost" className="flex items-center gap-1 h-9 px-3">
                                <Link href={item.prefix.toLowerCase()} className="text-sm font-medium">{item.name}</Link>
                                <ChevronDown className="h-4 w-4" />
                            </Button>
                            <div className="absolute right-0 mt-2 w-48 bg-background shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                {item.links.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={`${item.prefix}${link.toLowerCase().replaceAll(" ", "-")}`} // Keeps URL formatting
                                        className="block px-4 py-2 text-sm hover:bg-background/30 hover:text-primary"
                                    >
                                        {link.startsWith("#")
                                            ? link.replace("#", "").replaceAll("-", " ") // Fix display name for hash links
                                            : (link.split("/").pop() ?? "").replaceAll("-", " ")} {/* Fix display name for path links */}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}



                    <Link href="/sponsors" className="text-sm font-medium px-3 py-2 hover:text-primary">Sponsors</Link>
                    <Link href="/paper-submission" className="text-sm font-medium px-3 py-2 hover:text-primary">Paper Submission</Link>
                    <Link href="/registration" className="text-sm font-medium px-3 py-2 hover:text-primary">Registration</Link>
                    <Link href="/contact" className="text-sm font-medium px-3 py-2 hover:text-primary">Contact</Link>

                    <ModeToggle />
                </nav>

            </div>
        </header>
    )
}