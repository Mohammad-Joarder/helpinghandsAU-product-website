"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[calc(100vh-var(--nav-height))] flex items-center justify-center overflow-hidden bg-[#F4F8FB] noise-bg"
      aria-label="Hero section"
    >
      {/* Ambient bg */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y, background: "radial-gradient(circle, rgba(26,171,240,0.06) 0%, transparent 70%)" }}
          className="absolute top-[5%] right-[3%] w-[700px] h-[700px] rounded-full"
        />
        <motion.div
          style={{ background: "radial-gradient(circle, rgba(232,81,26,0.04) 0%, transparent 70%)" }}
          className="absolute bottom-[15%] left-[-8%] w-[500px] h-[500px] rounded-full"
        />
        <div
          className="absolute top-[35%] left-[15%] w-[350px] h-[350px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(74,79,74,0.03) 0%, transparent 70%)" }}
        />
        {/* Subtle grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.022]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#111111" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <motion.div style={{ opacity }} className="relative z-10 container-tight text-center py-16 md:py-24">

        {/* Platform logo lockup — the centrepiece */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          className="flex items-center justify-center gap-6 md:gap-10 mb-10"
        >
          {/* HelpingHandsAu */}
          <div className="flex flex-col items-center gap-3 group">
            <div className="relative w-16 h-16 md:w-20 md:h-20 drop-shadow-xl group-hover:scale-105 transition-transform duration-500">
              <Image
                src="/icon-helpinghandsau.png"
                alt="HelpingHandsAu"
                fill
                sizes="80px"
                className="object-contain"
                priority
              />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#1AABF0]">
              HelpingHandsAu
            </span>
          </div>

          {/* Connector */}
          <div className="flex flex-col items-center gap-1.5" aria-hidden="true">
            <div className="w-10 md:w-16 h-px bg-gradient-to-r from-[#1AABF0]/40 via-[#4A4F4A]/20 to-[#E8511A]/40" />
            <span className="text-[9px] uppercase tracking-widest text-[#BEBEBE] font-medium">×</span>
            <div className="w-10 md:w-16 h-px bg-gradient-to-r from-[#E8511A]/40 via-[#4A4F4A]/20 to-[#1AABF0]/40" />
          </div>

          {/* LetsGO */}
          <div className="flex flex-col items-center gap-3 group">
            <div className="relative w-16 h-16 md:w-20 md:h-20 drop-shadow-xl group-hover:scale-105 transition-transform duration-500">
              <Image
                src="/icon_letsgo.png"
                alt="LetsGO"
                fill
                sizes="80px"
                className="object-contain"
                priority
              />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#E8511A]">
              LetsGO
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          className="text-[clamp(38px,5.5vw,80px)] font-semibold tracking-[-0.03em] leading-[1.06] text-[#111111] max-w-5xl mx-auto text-balance"
        >
          Two platforms.
          <br />
          <span className="gradient-text">One intelligent</span>
          <br />
          ecosystem.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          className="mt-7 text-[clamp(15px,1.7vw,19px)] text-[#4A4F4A] max-w-2xl mx-auto leading-relaxed text-balance font-light"
        >
          <span className="text-[#1AABF0] font-medium">HelpingHandsAu</span> connects service providers
          with customers through trusted, verified work.{" "}
          <span className="text-[#E8511A] font-medium">LetsGO</span> powers intelligent rideshare
          mobility — together, we move communities forward.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.44, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => handleScroll("#ecosystem")}
            className="group flex items-center gap-2 bg-[#111111] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#2A2D2A] transition-all duration-300 hover:scale-[1.02] shadow-[0_4px_16px_rgba(0,0,0,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2"
          >
            Explore Platforms
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <button
            onClick={() => handleScroll("#download")}
            className="flex items-center gap-2.5 bg-white border border-[rgba(0,0,0,0.1)] text-[#2A2D2A] px-8 py-4 rounded-full text-sm font-medium hover:border-[rgba(0,0,0,0.2)] hover:bg-[#F0F0EE] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1AABF0] focus-visible:ring-offset-2"
          >
            {/* Mini app store icons inline */}
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#4A4F4A]" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download the App
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.58, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: "2", label: "Production Platforms" },
            { value: "AU", label: "Australian Operated" },
            { value: "AI", label: "Powered Intelligence" },
            { value: "24/7", label: "Realtime Operations" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-semibold tracking-tight text-[#111111]">{stat.value}</div>
              <div className="text-xs text-[#6B7280] mt-1 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F4F8FB] to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-widest text-[#BEBEBE] font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#BEBEBE] to-transparent"
        />
      </motion.div>
    </section>
  );
}
