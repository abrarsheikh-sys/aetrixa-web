import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
// Yahan humne path ko "../" se theek kiya hai
import Navbar from "../components/Navbar";

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
  title: "AETRIXA | Luxury Redefined",
  description: "Experience the pinnacle of luxury travel and lifestyle.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
