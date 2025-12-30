"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, User, Menu, X, ChevronDown } from "lucide-react";
// Humne yahan path ko "@/lib/utils" se badal kar "../lib/utils" kar diya hai
import { cn } from "../lib/utils"; 

const navLinks = [
  { name: "Destinations", href: "/destinations", mega: true },
  { name: "Private Jets", href: "/jets", mega: false },
  { name: "Yachts", href: "/yachts", mega: false },
  { name: "Curated Store", href: "/store", mega: true },
  { name: "Journal", href: "/journal", mega: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          AETRIXA<span className="text-gold-500">.</span>
        </Link>
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm uppercase tracking-widest hover:text-gold-600 transition-colors">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
