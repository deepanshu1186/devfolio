"use client";

import React, { useState } from "react";
import Link from "next/link";

interface NavLink {
    href: string;
    label: string;
}

const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Brand Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                            D
                        </div>
                        <span className="font-semibold text-lg text-slate-800">Deepanshu</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-slate-700 hover:text-blue-600 transition"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <a
                            href="https://github.com/yourgithub"
                            target="_blank"
                            rel="noreferrer"
                            className="ml-2 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                        >
                            GitHub
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setOpen(!open)}
                            aria-label="Toggle menu"
                            className="p-2 rounded-md text-slate-700 hover:bg-slate-100"
                        >
                            {open ? (
                                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            ) : (
                                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {open && (
                <div className="md:hidden border-t">
                    <div className="px-4 pt-3 pb-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="block px-3 py-2 rounded-md text-slate-800 hover:bg-slate-100"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href="https://github.com/yourgithub"
                            target="_blank"
                            rel="noreferrer"
                            className="block px-3 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}