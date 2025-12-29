"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, User, Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils"; // Assumes standard cn utility exists, or use clsx directly

const navLinks = [
  { name: "Destinations", href: "/destinations", mega: true },
  { name: "Private Jets", href: "/jets", mega: false },
  { name: "Yachts", href: "/yachts", mega: false },
  { name: "Curated Store", href: "/store", mega: false },
  { name: "Journal", href: "/journal", mega: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
        scrolled
          ? "glass-nav border-white/5 py-4"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo - Serif, Gold Accent */}
        <Link href="/" className="z-50 group">
          <h1 className="font-serif text-2xl tracking-[0.2em] text-aetrixa-ivory group-hover:text-aetrixa-gold transition-colors duration-300">
            AETRIX<span className="text-aetrixa-gold">A</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <div 
              key={link.name}
              className="relative group"
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <Link
                href={link.href}
                className="text-sm uppercase tracking-widest text-aetrixa-ivory/80 hover:text-aetrixa-gold transition-colors duration-300 flex items-center gap-1"
              >
                {link.name}
                {link.mega && <ChevronDown className="w-3 h-3 text-aetrixa-gold/70" />}
              </Link>
              
              {/* Subtle Underline Animation */}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-aetrixa-gold group-hover:w-full transition-all duration-300 ease-out" />
            </div>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center space-x-8 text-aetrixa-ivory/90">
          <button className="hover:text-aetrixa-gold transition-colors">
            <Search className="w-5 h-5 stroke-[1.5]" />
          </button>
          <Link href="/account" className="hover:text-aetrixa-gold transition-colors">
            <User className="w-5 h-5 stroke-[1.5]" />
          </Link>
          <Link href="/cart" className="relative hover:text-aetrixa-gold transition-colors">
            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-aetrixa-gold rounded-full animate-pulse" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-aetrixa-ivory hover:text-aetrixa-gold"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass-panel border-t border-white/10 md:hidden flex flex-col p-8 space-y-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-serif tracking-wide text-aetrixa-ivory hover:text-aetrixa-gold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-[1px] bg-white/10 w-full my-4" />
            <div className="flex justify-between px-4">
              <Search className="w-6 h-6 text-aetrixa-ivory" />
              <User className="w-6 h-6 text-aetrixa-ivory" />
              <ShoppingBag className="w-6 h-6 text-aetrixa-ivory" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
