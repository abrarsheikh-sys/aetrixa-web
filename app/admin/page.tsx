"use client";

import { motion } from "framer-motion";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Globe, 
  ArrowUpRight, 
  Link as LinkIcon 
} from "lucide-react";

// Mock Data (In production, fetch this via Server Actions/Prisma)
const STATS = [
  { label: "Total Revenue (Q1)", value: "$1,240,500", change: "+12%", icon: DollarSign },
  { label: "Active Travelers", value: "84", change: "+5%", icon: Users },
  { label: "Affiliate Clicks", value: "12,402", change: "+24%", icon: BarChart3 },
  { label: "Global Partners", value: "32", change: "+2%", icon: Globe },
];

const RECENT_CLICKS = [
  { id: 1, name: "VistaJet Charter", slug: "vista-jet-promo", time: "2 mins ago", location: "London, UK", revenue: "Potential $15k" },
  { id: 2, name: "Aman Tokyo Suite", slug: "aman-tokyo", time: "14 mins ago", location: "New York, USA", revenue: "Potential $4k" },
  { id: 3, name: "Rolex Daytona Ref", slug: "watch-finder", time: "45 mins ago", location: "Dubai, UAE", revenue: "Potential $35k" },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-aetrixa-charcoal text-aetrixa-ivory p-8 md:p-12">
      
      {/* Header */}
      <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-6">
        <div>
          <h2 className="text-aetrixa-gold text-xs tracking-widest uppercase mb-2">Command Center</h2>
          <h1 className="font-serif text-3xl md:text-4xl">Dashboard Overview</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-white/50">Last updated: Just now</span>
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-panel p-6 rounded-xl hover:border-aetrixa-gold/30 transition-colors duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-white/5 rounded-lg text-aetrixa-gold">
                <stat.icon className="w-6 h-6" />
              </div>
              <span className="text-green-400 text-xs font-mono bg-green-400/10 px-2 py-1 rounded">
                {stat.change}
              </span>
            </div>
            <h3 className="text-white/50 text-sm uppercase tracking-wide mb-1">{stat.label}</h3>
            <p className="font-serif text-2xl md:text-3xl">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Main Content Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Affiliate Tracking Live Feed */}
        <div className="lg:col-span-2 glass-panel p-8 rounded-xl">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-serif text-xl">Live Affiliate Intelligence</h3>
            <button className="text-xs text-aetrixa-gold uppercase tracking-widest hover:text-white transition-colors">
              View Full Report
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-12 text-xs text-white/40 uppercase tracking-widest pb-4 border-b border-white/5">
              <div className="col-span-4">Asset / Link</div>
              <div className="col-span-3">Slug</div>
              <div className="col-span-3">Origin</div>
              <div className="col-span-2 text-right">Activity</div>
            </div>
            
            {RECENT_CLICKS.map((click) => (
              <div key={click.id} className="grid grid-cols-12 items-center py-4 border-b border-white/5 hover:bg-white/5 transition-colors -mx-4 px-4">
                <div className="col-span-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-aetrixa-gold">
                    <LinkIcon className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-sm">{click.name}</span>
                </div>
                <div className="col-span-3">
                  <span className="text-xs font-mono text-white/60 bg-black/30 px-2 py-1 rounded">/{click.slug}</span>
                </div>
                <div className="col-span-3 text-sm text-white/70">
                  {click.location}
                </div>
                <div className="col-span-2 text-right">
                  <span className="text-xs text-aetrixa-gold block">{click.time}</span>
                  <span className="text-[10px] text-white/30">{click.revenue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions / System Status */}
        <div className="glass-panel p-8 rounded-xl bg-gradient-to-b from-aetrixa-gold/10 to-transparent border-aetrixa-gold/20">
          <h3 className="font-serif text-xl mb-6">System Health</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-white/70">Database Load</span>
                <span className="text-aetrixa-gold">Healthy</span>
              </div>
              <div className="w-full bg-black/40 h-1 rounded-full overflow-hidden">
                <div className="bg-aetrixa-gold w-[20%] h-full"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-white/70">API Latency</span>
                <span className="text-aetrixa-gold">24ms</span>
              </div>
              <div className="w-full bg-black/40 h-1 rounded-full overflow-hidden">
                <div className="bg-aetrixa-gold w-[5%] h-full"></div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-aetrixa-gold/20">
              <button className="w-full py-4 bg-aetrixa-gold text-aetrixa-charcoal font-bold text-sm uppercase tracking-widest hover:bg-white transition-colors">
                Create New Deal
              </button>
              <button className="w-full mt-4 py-4 border border-white/10 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-colors">
                Manage Destinations
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
