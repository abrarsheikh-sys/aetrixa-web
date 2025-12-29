import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // AETRIXA Signature Palette
        aetrixa: {
          charcoal: "#111111", // Deep background
          slate: "#1C1C1C",    // Card/Secondary background
          gold: {
            DEFAULT: "#C7A17A", // Burnished Gold
            hover: "#D4B492",   // Lighter Gold for interaction
            dim: "#8C7154",     // Muted Gold for borders
          },
          ivory: "#F9F9F9",     // Primary Text
          silver: "#A1A1AA",    // Secondary Text
        },
      },
      fontFamily: {
        // Requires importing these fonts in layout.tsx
        serif: ["var(--font-playfair)", "serif"], 
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "luxury-gradient": "linear-gradient(to bottom, #111111 0%, #161616 100%)",
        "gold-sheen": "linear-gradient(45deg, transparent 25%, rgba(199, 161, 122, 0.1) 50%, transparent 75%)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
