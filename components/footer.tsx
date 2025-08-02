import React from 'react'
import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t pt-10 pb-6">
            <div className="container grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
                {/* Column 1: Quick Links */}
                <div className="flex flex-col gap-2 text-sm">
                    <Link href="/sponsors" className="hover:underline">Sponsors</Link>
                    <Link href="/paper-submission" className="hover:underline">Paper Submission</Link>
                    <Link href="/registration" className="hover:underline">Registration</Link>
                    <Link href="/contact" className="hover:underline">Contact</Link>
                </div>

                {/* Column 2: Speakers */}
                <div>
                    <p className="font-semibold text-indigo-600 mb-1 text-sm">Speakers</p>
                    <ul className="space-y-1 text-sm">
                        <li><Link href="/speakers#Keynote-Address" className="hover:underline">Keynote Address</Link></li>
                        <li><Link href="/speakers#Plenary-Speech" className="hover:underline">Plenary Speech</Link></li>
                        <li><Link href="/speakers#Invited-Talk" className="hover:underline">Invited Talk</Link></li>
                        <li><Link href="/speakers#Distinguished-Lecture" className="hover:underline">Distinguished Lecture</Link></li>
                    </ul>
                </div>

                {/* Column 3: Committee */}
                <div>
                    <p className="font-semibold text-indigo-600 mb-1 text-sm">Committee</p>
                    <ul className="space-y-1 text-sm">
                        <li><Link href="/committee/Advisory-Committee" className="hover:underline">Advisory Committee</Link></li>
                        <li><Link href="/committee/Technical-Program-Committee" className="hover:underline">Technical Program</Link></li>
                        <li><Link href="/committee/Patrons-Chairs" className="hover:underline">Patrons & Chairs</Link></li>
                        <li><Link href="/committee/Core-Committee" className="hover:underline">Core Committee</Link></li>
                    </ul>
                </div>
            </div>

            {/* Divider */}
            <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} ICCSAI DSCSITSC 2025. All rights reserved.
                <br />
                <Link
                    href="https://splitmate.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 text-indigo-600 font-medium"
                >
                    Designed & Developed by SplitMate Software
                </Link>
            </div>
        </footer>
    )
}
