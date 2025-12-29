"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, Gem, Plane, Search, MapPin, Calendar } from "lucide-react";

// --- Mock Data (Replace with Prisma/CMS data later) ---
const DESTINATIONS = [
  {
    id: 1,
    name: "Kyoto, Japan",
    tag: "Cultural Heritage",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop",
    price: "From $12,500",
  },
  {
    id: 2,
    name: "Amalfi Coast, Italy",
    tag: "Coastal Retreat",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=2169&auto=format&fit=crop",
    price: "From $18,200",
  },
  {
    id: 3,
    name: "Reykjavik, Iceland",
    tag: "Arctic Expedition",
    image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=2159&auto=format&fit=crop",
    price: "From $15,000",
  },
];

const EXCLUSIVE_DEALS = [
  {
    id: 1,
    title: "Gulfstream G650 Charter",
    category: "Private Aviation",
    price: "$14,000 / hr",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "The Royal Penthouse",
    category: "Paris, France",
    price: "$25,000 / night",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Louis Vuitton Horizon",
    category: "Travel Essentials",
    price: "$3,400",
    image: "https://images.unsplash.com/photo-1565098735469-6ec1842a7b2c?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="bg-aetrixa-charcoal text-aetrixa-ivory selection:bg-aetrixa-gold selection:text-black">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-aetrixa-charcoal via-transparent to-transparent z-10" />
          <Image
            src="https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Travel"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-6 pt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-aetrixa-gold font-sans tracking-[0.3em] text-sm uppercase mb-4">
              The Art of Modern Travel
            </h2>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
              Curating the <br />
              <span className="italic text-aetrixa-gold-light">Extraordinary</span>
            </h1>
          </motion.div>

          {/* Glass Search Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass-panel mx-auto max-w-4xl p-2 rounded-full mt-12 hidden md:flex items-center justify-between"
          >
            <div className="flex-1 px-6 border-r border-white/10 flex items-center gap-3">
              <MapPin className="text-aetrixa-gold w-5 h-5" />
              <div className="text-left">
                <p className="text-xs text-white/50 uppercase tracking-wide">Destination</p>
                <input type="text" placeholder="Where to?" className="bg-transparent border-none text-white focus:ring-0 p-0 text-sm w-full placeholder:text-white/30" />
              </div>
            </div>
            <div className="flex-1 px-6 border-r border-white/10 flex items-center gap-3">
              <Calendar className="text-aetrixa-gold w-5 h-5" />
              <div className="text-left">
                <p className="text-xs text-white/50 uppercase tracking-wide">Dates</p>
                <input type="text" placeholder="Add dates" className="bg-transparent border-none text-white focus:ring-0 p-0 text-sm w-full placeholder:text-white/30" />
              </div>
            </div>
            <div className="px-6 flex items-center gap-3">
              <div className="text-left">
                <p className="text-xs text-white/50 uppercase tracking-wide">Travelers</p>
                <span className="text-sm">2 Guests</span>
              </div>
            </div>
            <button className="bg-aetrixa-gold hover:bg-aetrixa-gold-light text-aetrixa-charcoal rounded-full p-4 transition-all duration-300">
              <Search className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- FEATURED DESTINATIONS --- */}
      <section className="py-24 md:py-32 container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h3 className="text-aetrixa-gold text-sm tracking-widest uppercase mb-2">Curated Escapes</h3>
            <h2 className="font-serif text-4xl md:text-5xl">Destinations of Desire</h2>
          </div>
          <Link href="/destinations" className="group flex items-center gap-2 text-sm uppercase tracking-widest border-b border-aetrixa-gold pb-1 hover:text-aetrixa-gold transition-colors">
            View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest, i) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative h-[500px] overflow-hidden cursor-pointer"
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-aetrixa-gold text-xs tracking-widest uppercase mb-2 block">{dest.tag}</span>
                <div className="flex justify-between items-end">
                  <h3 className="font-serif text-3xl text-white group-hover:text-aetrixa-gold transition-colors duration-300">{dest.name}</h3>
                  <p className="text-sm text-white/70">{dest.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- LUXURY AFFILIATE DEALS --- */}
      <section className="py-24 bg-aetrixa-slate relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-aetrixa-gold/30 to-transparent" />
        
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="bg-aetrixa-gold/10 text-aetrixa-gold px-4 py-1 rounded-full text-xs uppercase tracking-widest mb-4 inline-block border border-aetrixa-gold/20">
              Members Only
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">The Aetrixa Collection</h2>
            <p className="text-white/60 font-sans font-light leading-relaxed">
              Exclusive access to private aviation, high-end real estate, and limited-edition goods from our global partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EXCLUSIVE_DEALS.map((deal, i) => (
              <motion.div
                key={deal.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-aetrixa-charcoal border border-white/5 p-4 group hover:border-aetrixa-gold/30 transition-all duration-300"
              >
                <div className="relative h-64 mb-6 overflow-hidden">
                  <Image
                    src={deal.image}
                    alt={deal.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-aetrixa-gold text-aetrixa-charcoal text-xs font-bold px-3 py-1 uppercase tracking-wider">
                    Exclusive
                  </div>
                </div>
                <div className="px-2">
                  <p className="text-aetrixa-gold text-xs tracking-widest uppercase mb-2">{deal.category}</p>
                  <h3 className="font-serif text-2xl mb-2">{deal.title}</h3>
                  <div className="flex justify-between items-center mt-4 border-t border-white/5 pt-4">
                    <span className="text-white/80">{deal.price}</span>
                    <button className="text-xs uppercase tracking-widest hover:text-aetrixa-gold transition-colors">
                      Reserve Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TRUST & TESTIMONIALS --- */}
      <section className="py-24 container mx-auto px-6 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl mb-8">Why the World's Elite Choose Aetrixa</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <ShieldCheck className="text-aetrixa-gold w-8 h-8 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-medium mb-1">Uncompromising Privacy</h4>
                  <p className="text-white/50 text-sm leading-relaxed">Discretion is our currency. Your data and itinerary are sealed within our encrypted ecosystem.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Gem className="text-aetrixa-gold w-8 h-8 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-medium mb-1">Rare Access</h4>
                  <p className="text-white/50 text-sm leading-relaxed">Doors that are closed to the public are open to you. Experience the inaccessible.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Plane className="text-aetrixa-gold w-8 h-8 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-medium mb-1">Seamless Logistics</h4>
                  <p className="text-white/50 text-sm leading-relaxed">From tarmac to villa, our concierge ensures a fluid transition across borders.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-aetrixa-gold/5 blur-2xl rounded-full" />
            <div className="glass-panel p-10 relative">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-aetrixa-gold fill-aetrixa-gold" />
                ))}
              </div>
              <blockquote className="font-serif text-2xl leading-relaxed mb-6">
                "Aetrixa doesn't just book travel; they curate moments of silence and splendor in a noisy world. The attention to detail is simply unmatched."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-600 rounded-full overflow-hidden relative">
                   <Image 
                     src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" 
                     alt="User" 
                     fill 
                   />
                </div>
                <div>
                  <p className="text-sm font-medium">Alexander V.</p>
                  <p className="text-xs text-aetrixa-gold uppercase tracking-wider">CEO, Venture Capital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Brand Strip */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center md:justify-between gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Placeholder for Logos - Using text for now as per instructions */}
           {['Forbes Travel Guide', 'Condé Nast Traveller', 'Relais & Châteaux', 'Virtuoso'].map((brand) => (
             <span key={brand} className="font-serif text-xl tracking-wider hover:text-aetrixa-gold cursor-default">{brand}</span>
           ))}
        </div>
      </section>
    </div>
  );
      }
