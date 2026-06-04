"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MapPin, Shield } from "lucide-react";

// Evaluated once at module load — same value on server and client, no hydration mismatch
const CURRENT_YEAR = new Date().getFullYear();

const footerLinks = {
  "HelpingHandsAu": [
    { label: "How it Works",         href: "#ecosystem" },
    { label: "For Providers",        href: "#ecosystem" },
    { label: "For Customers",        href: "#ecosystem" },
    { label: "Trust & Safety",       href: "#trust" },
    { label: "Provider Verification",href: "#features" },
  ],
  "LetsGO": [
    { label: "Ride with LetsGO",  href: "#ecosystem" },
    { label: "Drive with LetsGO", href: "#ecosystem" },
    { label: "Driver Compliance", href: "#features" },
    { label: "Live Tracking",     href: "#showcase" },
    { label: "Safety Systems",    href: "#trust" },
  ],
  "Company": [
    { label: "About Us",    href: "#" },
    { label: "Technology",  href: "#technology" },
    { label: "Newsroom",    href: "#" },
    { label: "Careers",     href: "#" },
    { label: "Contact",     href: "#contact" },
  ],
  "Legal": [
    { label: "Privacy Policy",       href: "/legal/privacy" },
    { label: "Terms of Service",     href: "/legal/terms" },
    { label: "Cookie Policy",        href: "/legal/cookies" },
    { label: "Community Guidelines", href: "/legal/community" },
    { label: "Accessibility",        href: "/legal/accessibility" },
  ],
};

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <footer className="bg-[#0E0E0E] text-white" role="contentinfo" aria-label="Site footer">
      <div className="container-tight">

        {/* App download strip */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="pt-12 pb-10 border-b border-white/[0.06]"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

            {/* Left: brand summary */}
            <div className="flex flex-col gap-5">
              {/* Platform logos stacked */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center p-1.5 flex-shrink-0">
                    <Image
                      src="/icon-helpinghandsau.png"
                      alt="HelpingHandsAu"
                      fill
                      sizes="40px"
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">Marketplace</div>
                    <div className="text-sm font-semibold text-white tracking-tight leading-snug">
                      HelpingHands<span className="text-[#1AABF0]">Au</span>
                    </div>
                  </div>
                </div>

                <div className="w-px h-8 bg-white/[0.08]" aria-hidden="true" />

                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center p-1.5 flex-shrink-0">
                    <Image
                      src="/icon_letsgo.png"
                      alt="LetsGO"
                      fill
                      sizes="40px"
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">Rideshare</div>
                    <div className="text-sm font-semibold text-white tracking-tight leading-snug">
                      Let&rsquo;s<span className="text-[#E8511A]">GO</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                Two intelligent Australian platforms connecting communities through trusted
                services and mobility — secure, compliant, and built to scale.
              </p>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <MapPin size={11} className="text-[#1AABF0]" aria-hidden="true" />
                  <span>Queensland, Australia</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Shield size={11} className="text-[#1AABF0]" aria-hidden="true" />
                  <span>Privacy Act 1988 Compliant</span>
                </div>
              </div>
            </div>

            {/* Right: HelpingHandsAu QR + LetsGO coming soon */}
            <div className="flex items-start gap-6">
              {/* HelpingHandsAu — iOS QR */}
              <div className="flex flex-col items-center gap-2">
                <div className="relative w-[80px] h-[80px] bg-white rounded-xl p-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
                  <Image
                    src="/qr-apple.png"
                    alt="Scan to download HelpingHandsAu on App Store"
                    fill
                    sizes="80px"
                    className="object-contain p-0.5 rounded-lg"
                  />
                </div>
                <div className="text-center">
                  <div className="text-[10px] font-bold text-white">iOS App</div>
                  <div className="text-[9px] text-gray-500">App Store</div>
                </div>
              </div>

              {/* HelpingHandsAu — Android QR */}
              <div className="flex flex-col items-center gap-2">
                <div className="relative w-[80px] h-[80px] bg-white rounded-xl p-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
                  <Image
                    src="/qr-android.png"
                    alt="Scan to download HelpingHandsAu on Google Play"
                    fill
                    sizes="80px"
                    className="object-contain p-0.5 rounded-lg"
                  />
                </div>
                <div className="text-center">
                  <div className="text-[10px] font-bold text-white">Android App</div>
                  <div className="text-[9px] text-gray-500">Google Play</div>
                </div>
              </div>

              {/* LetsGO — Coming Soon */}
              <div className="flex flex-col items-center gap-2">
                <div
                  className="w-[80px] h-[80px] rounded-xl flex flex-col items-center justify-center gap-1 border"
                  style={{
                    background: "rgba(232,81,26,0.08)",
                    borderColor: "rgba(232,81,26,0.25)",
                    boxShadow: "0 4px 16px rgba(232,81,26,0.15)",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
                    <rect x="5" y="2" width="14" height="20" rx="2.5" stroke="#E8511A" strokeWidth="1.5" fill="rgba(232,81,26,0.1)"/>
                    <circle cx="12" cy="18" r="1" fill="#E8511A" opacity="0.7"/>
                    <rect x="9" y="5" width="6" height="1" rx="0.5" fill="#E8511A" opacity="0.4"/>
                  </svg>
                  <span className="text-[8px] font-black uppercase tracking-wide leading-tight text-center" style={{ color: "#E8511A" }}>
                    June<br/>2026
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-[10px] font-bold" style={{ color: "#E8511A" }}>LetsGO</div>
                  <div className="text-[9px] text-gray-500">Coming Soon</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main link grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {Object.entries(footerLinks).map(([category, links], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.06 }}
            >
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200 link-underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1AABF0] rounded"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06]" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-gray-600 text-center sm:text-left">
            © {CURRENT_YEAR} HelpingHandsAu Pty Ltd.
            All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-[#1AABF0] rounded-full animate-pulse-subtle" aria-hidden="true" />
              <span className="text-[10px] text-gray-600 font-medium uppercase tracking-widest">All Systems Operational</span>
            </div>
            <span className="text-gray-700 text-xs" aria-hidden="true">·</span>
            <a href="/legal/accessibility" className="text-xs text-gray-600 hover:text-gray-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1AABF0] rounded">
              WCAG 2.1 AA
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
