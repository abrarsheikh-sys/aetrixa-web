import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Elegant Serif for Headings
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: "swap",
});

// Clean Sans for UI/Body
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter", 
  display: "swap",
});

export const metadata: Metadata = {
  title: "AETRIXA | The Art of Modern Travel",
  description: "Experience the pinnacle of luxury travel and curated goods. AETRIXA offers exclusive access to private jets, yachts, and high-fashion essentials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} font-sans bg-aetrixa-charcoal antialiased selection:bg-aetrixa-gold selection:text-aetrixa-charcoal`}>
        {/* Navigation is fixed, so content doesn't jump */}
        <Navbar />
        
        {/* Main Content Area */}
        <main className="min-h-screen flex flex-col relative overflow-hidden">
          {children}
        </main>

        {/* Placeholder Footer for visual completeness */}
        <footer className="w-full py-12 border-t border-white/10 text-center text-white/40 text-sm">
          <p>© {new Date().getFullYear()} AETRIXA. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
