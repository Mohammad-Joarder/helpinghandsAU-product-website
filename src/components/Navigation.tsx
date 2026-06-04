"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Platforms",      href: "#ecosystem" },
  { label: "Features",       href: "#features" },
  { label: "Trust & Safety", href: "#trust" },
  { label: "Technology",     href: "#technology" },
  { label: "Get the App",    href: "#download" },
  { label: "Legal",          href: "#legal" },
];

// Map each nav href to the section id it tracks
const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export default function Navigation() {
  const [mounted, setMounted]           = useState(false);
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    setMounted(true);
    setScrolled(window.scrollY > 20);
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const next = window.scrollY > 20;
        setScrolled((prev) => (prev === next ? prev : next));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection Observer — highlights the nav link for whichever section
  // occupies the most of the upper viewport at any given moment.
  // Uses sparse thresholds + rAF + setState only when the winner changes to
  // avoid scroll-time allocation storms and excessive re-renders.
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const ratios = new Map<string, number>();
    sectionIds.forEach((id) => ratios.set(id, 0));

    let rafId = 0;
    let lastPosted = "";

    const flush = () => {
      rafId = 0;
      let best = "";
      let bestRatio = 0;
      for (const id of sectionIds) {
        const ratio = ratios.get(id) ?? 0;
        if (ratio > bestRatio) {
          bestRatio = ratio;
          best = id;
        }
      }
      if (best && best !== lastPosted) {
        lastPosted = best;
        setActiveSection(best);
      }
    };

    const scheduleFlush = () => {
      if (rafId !== 0) return;
      rafId = requestAnimationFrame(flush);
    };

    const thresholds = [0, 0.15, 0.35, 0.55, 0.75, 1];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          ratios.set(id, entry.intersectionRatio);
          scheduleFlush();
        },
        { threshold: thresholds, rootMargin: "-72px 0px 0px 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      if (rafId !== 0) cancelAnimationFrame(rafId);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const isActive = (href: string) => activeSection === href.replace("#", "");

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
        suppressHydrationWarning
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          mounted && scrolled ? "glass shadow-[0_1px_0_rgba(0,0,0,0.06)]" : "bg-transparent"
        }`}
      >
        <div className="container-tight">
          <nav className="flex items-center justify-between h-16 md:h-[72px]" aria-label="Main navigation">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1AABF0] rounded-lg"
              aria-label="HelpingHandsAu and LetsGO home"
            >
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 flex-shrink-0">
                  <Image src="/icon-helpinghandsau.png" alt="HelpingHandsAu" fill sizes="32px" className="object-contain" priority />
                </div>
                <span className="font-semibold text-[14px] text-[#111111] tracking-tight hidden sm:block">
                  HelpingHands<span className="text-[#1AABF0]">Au</span>
                </span>
                <div className="w-px h-5 bg-[rgba(0,0,0,0.12)] mx-0.5" aria-hidden="true" />
                <div className="relative w-8 h-8 flex-shrink-0">
                  <Image src="/icon_letsgo.png" alt="LetsGO" fill sizes="32px" className="object-contain" priority />
                </div>
                <span className="font-semibold text-[14px] text-[#111111] tracking-tight hidden sm:block">
                  Let&rsquo;s<span className="text-[#E8511A]">GO</span>
                </span>
              </div>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    aria-current={active ? "location" : undefined}
                    className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1AABF0] whitespace-nowrap ${
                      active
                        ? "text-[#111111]"
                        : link.label === "Get the App"
                        ? "text-[#1AABF0] hover:text-[#0A8FCC] hover:bg-[rgba(26,171,240,0.06)]"
                        : "text-[#4A4F4A] hover:text-[#111111] hover:bg-[rgba(0,0,0,0.04)]"
                    }`}
                  >
                    {/* Active pill background */}
                    {active && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-lg bg-[rgba(0,0,0,0.06)]"
                        transition={{ type: "spring", stiffness: 380, damping: 36 }}
                        aria-hidden="true"
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                    {/* Active underline dot */}
                    {active && (
                      <motion.span
                        layoutId="nav-active-dot"
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#1AABF0]"
                        transition={{ type: "spring", stiffness: 380, damping: 36 }}
                        aria-hidden="true"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => handleNavClick("#contact")}
                className="text-sm font-medium bg-[#111111] text-white px-5 py-2.5 rounded-full hover:bg-[#2A2D2A] transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2 whitespace-nowrap"
              >
                Get in Touch
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-[#4A4F4A] hover:text-[#111111] transition-colors rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1AABF0]"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
            className="fixed top-[64px] left-0 right-0 z-40 glass border-b border-[rgba(0,0,0,0.06)] lg:hidden"
          >
            <div className="container-tight py-4">
              {/* Platform logos */}
              <div className="flex items-center gap-4 px-4 py-3 mb-2 bg-[rgba(0,0,0,0.02)] rounded-2xl">
                <div className="flex items-center gap-2">
                  <div className="relative w-7 h-7">
                    <Image src="/icon-helpinghandsau.png" alt="HelpingHandsAu" fill sizes="28px" className="object-contain" />
                  </div>
                  <span className="text-xs font-semibold text-[#111111]">HelpingHandsAu</span>
                </div>
                <div className="w-px h-4 bg-[rgba(0,0,0,0.1)]" />
                <div className="flex items-center gap-2">
                  <div className="relative w-7 h-7">
                    <Image src="/icon_letsgo.png" alt="LetsGO" fill sizes="28px" className="object-contain" />
                  </div>
                  <span className="text-xs font-semibold text-[#111111]">LetsGO</span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <button
                      key={link.label}
                      onClick={() => handleNavClick(link.href)}
                      aria-current={active ? "location" : undefined}
                      className={`text-left text-sm px-4 py-3 rounded-xl transition-all duration-200 flex items-center gap-2 ${
                        active
                          ? "bg-[rgba(0,0,0,0.06)] text-[#111111] font-semibold"
                          : "text-[#2A2D2A] hover:text-[#111111] hover:bg-[rgba(0,0,0,0.04)] font-normal"
                      }`}
                    >
                      {active && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1AABF0] flex-shrink-0" aria-hidden="true" />
                      )}
                      {link.label}
                    </button>
                  );
                })}
                <div className="border-t border-[rgba(0,0,0,0.06)] mt-2 pt-3">
                  <button
                    onClick={() => handleNavClick("#contact")}
                    className="w-full text-sm font-medium bg-[#111111] text-white px-5 py-3 rounded-xl text-center"
                  >
                    Get in Touch
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
