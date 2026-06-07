"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import {
  MapPin, DollarSign, Star, Clock, CheckCircle, ArrowRight,
  Navigation, Phone, User, ChevronRight
} from "lucide-react";

const showcaseItems = [
  {
    id: "rider",
    label: "Rider App",
    platform: "LetsGO",
    color: "#0A8FCC",
    description: "Seamless ride booking with live tracking, transparent pricing, and driver safety ratings.",
    screen: "rider",
  },
  {
    id: "driver",
    label: "Driver App",
    platform: "LetsGO",
    color: "#0A8FCC",
    description: "Driver-first design with optimised dispatch, live earnings, and compliance onboarding.",
    screen: "driver",
  },
  {
    id: "provider",
    label: "Provider Dashboard",
    platform: "HelpingHandsAu",
    color: "#1AABF0",
    description: "Complete job management, payment tracking, and customer communication in one view.",
    screen: "provider",
  },
  {
    id: "tracking",
    label: "Live Tracking",
    platform: "LetsGO",
    color: "#4A4F4A",
    description: "Realtime GPS tracking with ETA updates, route optimisation, and safety check-ins.",
    screen: "tracking",
  },
  {
    id: "bidding",
    label: "Bidding Flow",
    platform: "HelpingHandsAu",
    color: "#1AABF0",
    description: "Transparent task bidding where customers compare providers by price, rating, and availability.",
    screen: "bidding",
  },
];

function RiderScreen() {
  return (
    <div className="w-full h-full bg-[#F4F8FB] flex flex-col">
      {/* Map area */}
      <div className="flex-1 relative bg-[#E8EDE8] overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 300 300">
          <path d="M0 150 Q75 100 150 150 T300 150" stroke="#1AABF0" strokeWidth="2" fill="none" />
          <path d="M0 120 Q75 80 150 120 T300 120" stroke="#0A8FCC" strokeWidth="1.5" fill="none" opacity="0.5" />
          <path d="M50 0 L50 300" stroke="#111" strokeWidth="0.5" opacity="0.1" />
          <path d="M150 0 L150 300" stroke="#111" strokeWidth="0.5" opacity="0.1" />
          <path d="M250 0 L250 300" stroke="#111" strokeWidth="0.5" opacity="0.1" />
          <path d="M0 100 L300 100" stroke="#111" strokeWidth="0.5" opacity="0.1" />
          <path d="M0 200 L300 200" stroke="#111" strokeWidth="0.5" opacity="0.1" />
        </svg>
        {/* Driver marker */}
        <div className="absolute top-[40%] left-[45%] transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 bg-[#0A8FCC] rounded-full flex items-center justify-center shadow-lg">
            <Navigation size={14} className="text-white" />
          </div>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-6 border-transparent border-t-[#0A8FCC]" />
        </div>
        {/* Destination marker */}
        <div className="absolute top-[25%] right-[30%]">
          <div className="w-6 h-6 bg-[#111111] rounded-full flex items-center justify-center">
            <MapPin size={12} className="text-white" />
          </div>
        </div>
        {/* Route line */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300">
          <path d="M135 120 Q160 110 200 90" stroke="#0A8FCC" strokeWidth="2.5" fill="none" strokeDasharray="5,3" />
        </svg>
      </div>

      {/* Bottom card */}
      <div className="bg-white p-4 rounded-t-3xl shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-[#0A8FCC]/10 flex items-center justify-center">
            <User size={18} className="text-[#0A8FCC]" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-semibold text-[#111111]">James K.</span>
              <div className="flex items-center gap-0.5">
                <Star size={9} className="text-amber-400 fill-amber-400" />
                <span className="text-[10px] text-[#6B7280]">4.9</span>
              </div>
            </div>
            <span className="text-[10px] text-[#6B7280]">2 min away</span>
          </div>
          <div className="w-9 h-9 rounded-full bg-[#111111] flex items-center justify-center">
            <Phone size={14} className="text-white" />
          </div>
        </div>
        <div className="flex items-center gap-2 bg-[#F4F8FB] rounded-2xl px-3 py-2.5">
          <Clock size={12} className="text-[#0A8FCC]" />
          <span className="text-xs text-[#4A4F4A] font-medium">Arriving in 2 min</span>
          <div className="ml-auto flex items-center gap-1">
            <DollarSign size={11} className="text-[#111111]" />
            <span className="text-xs font-semibold text-[#111111]">18.50</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DriverScreen() {
  return (
    <div className="w-full h-full bg-[#F4F8FB] flex flex-col">
      <div className="bg-[#111111] px-4 pt-5 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Today's Earnings</div>
            <div className="text-2xl font-bold text-white">$284.50</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#0A8FCC]/20 flex items-center justify-center">
            <div className="w-2 h-2 bg-[#1AABF0] rounded-full animate-pulse" />
          </div>
        </div>
        <div className="flex gap-3">
          {[["12", "Trips"], ["4.95", "Rating"], ["98%", "Accept"]].map(([val, lbl]) => (
            <div key={lbl} className="flex-1 bg-white/8 rounded-xl p-2.5 text-center">
              <div className="text-sm font-bold text-white">{val}</div>
              <div className="text-[9px] text-gray-400">{lbl}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 px-4 py-3">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-[#6B7280] mb-3">New Request</div>
        <div className="bg-white rounded-2xl p-4 shadow-[var(--shadow-card)] border border-[rgba(0,0,0,0.05)]">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-[#F4F8FB] flex items-center justify-center">
              <User size={16} className="text-[#4A4F4A]" />
            </div>
            <div className="flex-1">
              <span className="text-xs font-semibold text-[#111111]">Sarah M.</span>
              <div className="text-[10px] text-[#6B7280] mt-0.5">2.4 km · ~12 min</div>
            </div>
            <span className="text-sm font-bold text-[#0A8FCC]">$22.00</span>
          </div>
          <div className="mt-3 flex gap-2">
            <button className="flex-1 bg-[#0A8FCC] text-white rounded-xl py-2 text-xs font-semibold">Accept</button>
            <button className="flex-1 bg-[#F4F8FB] text-[#4A4F4A] rounded-xl py-2 text-xs font-semibold">Decline</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProviderScreen() {
  return (
    <div className="w-full h-full bg-[#F4F8FB] flex flex-col">
      <div className="px-4 pt-5 pb-3">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-[#6B7280] mb-1">Dashboard</div>
        <div className="text-base font-bold text-[#111111]">Good morning, Alex</div>
      </div>

      <div className="px-4 mb-3">
        <div className="bg-[#111111] rounded-2xl p-4 text-white">
          <div className="text-[10px] text-gray-400 mb-1">Active Escrow</div>
          <div className="text-xl font-bold">$1,240.00</div>
          <div className="mt-2 flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-[#1AABF0] rounded-full" />
            <span className="text-[10px] text-gray-300">3 jobs in progress</span>
          </div>
        </div>
      </div>

      <div className="flex-1 px-4 overflow-hidden">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-[#6B7280] mb-2">Active Jobs</div>
        {[
          { client: "Emma T.", job: "Home Cleaning", status: "In Progress", amount: "$120" },
          { client: "David R.", job: "Garden Maintenance", status: "Awaiting", amount: "$85" },
        ].map((item) => (
          <div key={item.client} className="flex items-center gap-3 bg-white rounded-xl p-3 mb-2 border border-[rgba(0,0,0,0.05)]">
            <div className="w-8 h-8 rounded-full bg-[#1AABF0]/10 flex items-center justify-center">
              <User size={14} className="text-[#1AABF0]" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-semibold text-[#111111]">{item.client}</div>
              <div className="text-[10px] text-[#6B7280]">{item.job}</div>
            </div>
            <div className="text-right">
              <div className="text-xs font-bold text-[#111111]">{item.amount}</div>
              <div className="text-[9px] text-[#1AABF0]">{item.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TrackingScreen() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="w-full h-full bg-[#ECECE8] relative overflow-hidden">
      {/* Simulated map */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 500">
        <path d="M0 250 Q150 200 300 250" stroke="#1AABF0" strokeWidth="3" fill="none" />
        <path d="M0 200 Q150 160 300 200" stroke="#0A8FCC" strokeWidth="1.5" fill="none" opacity="0.4" />
        {[50, 100, 150, 200, 250].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="500" stroke="#111" strokeWidth="0.4" opacity="0.08" />
        ))}
        {[100, 200, 300, 400].map((y) => (
          <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="#111" strokeWidth="0.4" opacity="0.08" />
        ))}
        {/* Route */}
        <motion.path
          d="M60 380 Q120 300 180 230 T250 140"
          stroke="#0A8FCC"
          strokeWidth="3"
          fill="none"
          strokeDasharray="8,4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={
            reduceMotion
              ? { duration: 0.35, ease: "easeOut" }
              : { duration: 2.5, ease: "easeInOut", repeat: Infinity }
          }
        />
        {/* Car */}
        <circle cx="160" cy="240" r="8" fill="#0A8FCC" />
        <circle cx="160" cy="240" r="14" fill="#0A8FCC" opacity="0.2" />
        {/* Destination */}
        <circle cx="250" cy="140" r="8" fill="#111111" />
        <circle cx="250" cy="140" r="16" fill="#111111" opacity="0.15" />
      </svg>

      {/* Bottom overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-[#1AABF0] rounded-full animate-pulse" />
          <span className="text-xs font-semibold text-[#111111]">Live Tracking Active</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-[#F4F8FB] rounded-xl p-2.5">
            <div className="text-[10px] text-[#6B7280]">ETA</div>
            <div className="text-sm font-bold text-[#111111]">4 min</div>
          </div>
          <div className="flex-1 bg-[#F4F8FB] rounded-xl p-2.5">
            <div className="text-[10px] text-[#6B7280]">Distance</div>
            <div className="text-sm font-bold text-[#111111]">1.2 km</div>
          </div>
          <div className="flex-1 bg-[#F4F8FB] rounded-xl p-2.5">
            <div className="text-[10px] text-[#6B7280]">Speed</div>
            <div className="text-sm font-bold text-[#111111]">42 km/h</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BiddingScreen() {
  return (
    <div className="w-full h-full bg-[#F4F8FB] flex flex-col">
      <div className="px-4 pt-5 pb-3">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-[#6B7280] mb-1">Task Bidding</div>
        <div className="text-sm font-bold text-[#111111]">House Cleaning — 3BR</div>
        <div className="text-[10px] text-[#6B7280] mt-0.5">Newtown, Sydney · Tomorrow 9AM</div>
      </div>

      <div className="px-4 flex-1 overflow-hidden">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-[#6B7280] mb-2">3 Bids Received</div>
        {[
          { name: "Maria S.", rating: "4.9", count: "156", price: "$140", badge: "Top Rated" },
          { name: "Carlos M.", rating: "4.8", count: "89", price: "$125", badge: null },
          { name: "Priya K.", rating: "4.7", count: "44", price: "$115", badge: "New" },
        ].map((bid, i) => (
          <div
            key={bid.name}
            className={`flex items-center gap-3 bg-white rounded-xl p-3 mb-2 border transition-all ${
              i === 0 ? "border-[#1AABF0]/30 shadow-[0_2px_12px_rgba(26,171,240,0.14)]" : "border-[rgba(0,0,0,0.05)]"
            }`}
          >
            <div className="w-8 h-8 rounded-full bg-[#1AABF0]/10 flex items-center justify-center">
              <User size={14} className="text-[#1AABF0]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold text-[#111111]">{bid.name}</span>
                {bid.badge && (
                  <span className="text-[8px] font-bold bg-[#1AABF0]/10 text-[#1AABF0] px-1.5 py-0.5 rounded-full">
                    {bid.badge}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1">
                <Star size={9} className="text-amber-400 fill-amber-400" />
                <span className="text-[10px] text-[#6B7280]">{bid.rating} · {bid.count} jobs</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-[#111111]">{bid.price}</div>
              <div className="flex items-center gap-0.5 justify-end">
                <CheckCircle size={9} className="text-[#1AABF0]" />
                <span className="text-[9px] text-[#1AABF0]">Verified</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const screenComponents: Record<string, React.FC> = {
  rider: RiderScreen,
  driver: DriverScreen,
  provider: ProviderScreen,
  tracking: TrackingScreen,
  bidding: BiddingScreen,
};

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState("rider");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const activeItem = showcaseItems.find((i) => i.id === activeTab) || showcaseItems[0];
  const ActiveScreen = screenComponents[activeTab] || RiderScreen;

  return (
    <section id="showcase" className="section-padding bg-[#ECECE8]" aria-labelledby="showcase-heading">
      <div className="container-tight">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#4A4F4A] mb-4 block">
            Product Experience
          </span>
          <h2
            id="showcase-heading"
            className="text-[clamp(28px,4vw,52px)] font-semibold tracking-tight text-[#111111] max-w-2xl mx-auto text-balance"
          >
            Crafted for every user
          </h2>
          <p className="mt-5 text-base text-[#4A4F4A] max-w-xl mx-auto font-light">
            Elegant, intuitive experiences across every touchpoint — from first tap to final payment.
          </p>
        </motion.div>

        {/* Tab selector */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
          role="tablist"
          aria-label="Product screens"
        >
          {showcaseItems.map((item) => (
            <button
              key={item.id}
              role="tab"
              aria-selected={activeTab === item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A8FCC] ${
                activeTab === item.id
                  ? "bg-[#111111] text-white shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
                  : "bg-white text-[#4A4F4A] border border-[rgba(0,0,0,0.08)] hover:border-[rgba(0,0,0,0.15)]"
              }`}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: activeTab === item.id ? "white" : item.color }}
              />
              {item.label}
            </button>
          ))}
        </motion.div>

        {/* Showcase area */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Device mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0 flex justify-center"
          >
            <div className="device-mockup w-[260px] h-[530px]">
              {/* Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#111111] rounded-full z-10" />
              <div className="device-screen w-full h-full relative overflow-hidden">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 pt-8"
                >
                  <ActiveScreen />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            key={activeTab + "-desc"}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 max-w-lg"
          >
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
              style={{
                background: `${activeItem.color}12`,
                color: activeItem.color,
              }}
            >
              {activeItem.platform}
            </span>
            <h3 className="text-3xl font-semibold tracking-tight text-[#111111] mb-4">
              {activeItem.label}
            </h3>
            <p className="text-base text-[#4A4F4A] leading-relaxed mb-8">
              {activeItem.description}
            </p>

            {/* Feature list */}
            <div className="space-y-3">
              {[
                "Designed for one-handed use",
                "Optimised for low-bandwidth conditions",
                "Accessibility compliant (WCAG 2.1 AA)",
                "Localised for Australian users",
              ].map((feat) => (
                <div key={feat} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: `${activeItem.color}15` }}>
                    <CheckCircle size={12} style={{ color: activeItem.color }} />
                  </div>
                  <span className="text-sm text-[#4A4F4A]">{feat}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
