import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aetrixa: {
          charcoal: "#111111", // Deep Black/Grey
          gold: "#C7A17A",     // Muted Luxury Gold
          ivory: "#FDFCF5",    // Warm Off-White
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(to bottom, rgba(17,17,17,0) 0%, rgba(17,17,17,1) 100%)',
      }
    },
  },
  plugins: [],
};
export default config;