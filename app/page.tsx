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
    <div ref={containerRef} className="bg-aetrixa-charcoal text-aetrixa-ivory selection:bg-aetrixa-gold selection:text-