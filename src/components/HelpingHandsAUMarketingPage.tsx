"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import CookieBannerHH from "@/components/CookieBannerHH";
import { APPLE_EASE, ScrollReveal, ScrollRevealGroup, ScrollRevealItem, ScrollSectionIntro } from "@/components/ScrollReveal";

import {
  ClipboardList, Lock, Camera, BadgeCheck,
  ShieldCheck, UserCheck, Star, MessageSquare, Zap, Smartphone,
  Bell, Globe, Wallet, Home, Wrench, Truck, Monitor,
  Sparkles, Users, Palette, Award, CreditCard,
  Sun, Moon, TrendingUp, MapPin, CheckCircle2, Banknote,
  BarChart3, Shield, HeartHandshake, Briefcase, Building2,
  ChevronRight, ArrowRight,
} from "lucide-react";

const STORE_LINKS = {
  android: "https://play.google.com/store/apps/details?id=com.helpinghandsau.app",
  apple: "https://apps.apple.com/app/helpinghandsau/id6761107489",
};

/* ─────────────────────────────────────────────────
   THEME TOKENS
   Section tints give each section its own colour mood.
───────────────────────────────────────────────── */
const LIGHT = {
  "--bg":         "#FAFAFA",
  "--card":       "#FFFFFF",
  "--border":     "rgba(0,0,0,0.08)",
  "--border2":    "rgba(0,0,0,0.05)",
  "--text":       "#0A0F1E",
  "--text2":      "#374151",
  "--text3":      "#6B7280",
  "--nav-bg":     "rgba(250,250,250,0.88)",
  "--shadow":     "0 8px 32px rgba(0,0,0,0.09)",
  "--shadow-sm":  "0 2px 10px rgba(0,0,0,0.06)",
  "--glow":       "rgba(26,171,240,0.20)",
  /* Per-section tints */
  "--s-hero":     "#FFFFFF",
  "--s-how":      "#FFFBF4",   /* warm amber */
  "--s-feat":     "#F9FAFB",   /* near-white neutral */
  "--s-cat":      "#F5F3FF",   /* soft violet */
  "--s-trust":    "#F0FDF7",   /* soft mint */
  "--s-prov":     "#FAFAFA",   /* neutral */
  "--s-dl":       "#FFF7F0",   /* warm peach */
};
const DARK = {
  "--bg":         "#080C14",
  "--card":       "#0E1420",
  "--border":     "rgba(255,255,255,0.08)",
  "--border2":    "rgba(255,255,255,0.04)",
  "--text":       "#EDF2FF",
  "--text2":      "#94A3B8",
  "--text3":      "#4B5563",
  "--nav-bg":     "rgba(8,12,20,0.90)",
  "--shadow":     "0 8px 40px rgba(0,0,0,0.55)",
  "--shadow-sm":  "0 2px 12px rgba(0,0,0,0.40)",
  "--glow":       "rgba(26,171,240,0.25)",
  "--s-hero":     "#080C14",
  "--s-how":      "#100C04",
  "--s-feat":     "#0A0F18",
  "--s-cat":      "#0D0A1C",
  "--s-trust":    "#06130D",
  "--s-prov":     "#080C14",
  "--s-dl":       "#130C06",
};
const BRAND = {
  "--brand":       "#1AABF0",
  "--brand-deep":  "#0A8FCC",
  "--brand-mid":   "#55CCFF",
  "--brand-dim":   "rgba(26,171,240,0.12)",
  "--amber":       "#F59E0B",
  "--amber-dim":   "rgba(245,158,11,0.12)",
  "--violet":      "#7C3AED",
  "--violet-dim":  "rgba(124,58,237,0.12)",
  "--emerald":     "#10B981",
  "--emerald-dim": "rgba(16,185,129,0.12)",
  "--rose":        "#F43F5E",
  "--rose-dim":    "rgba(244,63,94,0.12)",
};

/* ── Shared style helpers ── */
const h2S: React.CSSProperties = {
  fontFamily: "var(--font-jakarta)", fontWeight: 800, letterSpacing: "-0.05em",
  fontSize: "clamp(34px,4.5vw,58px)", color: "var(--text)", lineHeight: 1.06,
  marginBottom: 18, textAlign: "center",
};
const subS: React.CSSProperties = {
  fontSize: 18, color: "var(--text2)", textAlign: "center",
  maxWidth: 560, margin: "0 auto", lineHeight: 1.65, letterSpacing: "-0.01em",
};

/* ── Section label pill ── */
function SectionLabel({ color, children, align = "center" }: {
  color: string; children: React.ReactNode; align?: "center" | "left";
}) {
  return (
    <div style={{ textAlign: align, marginBottom: 14 }}>
      <span style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase",
        color, background: `${color}18`, padding: "5px 14px", borderRadius: 100,
        border: `1px solid ${color}28`,
      }}>{children}</span>
    </div>
  );
}

/* ── Coloured icon box ── */
function IconBox({ icon, color, size = 50 }: { icon: React.ReactNode; color: string; size?: number }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: Math.round(size * 0.28),
      background: `${color}15`, border: `1px solid ${color}25`,
      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
    }}>
      {icon}
    </div>
  );
}

/* ── App Store badges ── */
function AppleStoreBadge({ width = 160 }: { width?: number }) {
  return (
    <svg viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg" width={width} aria-label="Download on the App Store">
      <rect width="160" height="50" rx="9" fill="#000" />
      <rect x=".5" y=".5" width="159" height="49" rx="8.5" stroke="rgba(255,255,255,0.15)" />
      <path d="M22.5 22.8c.03-2.74 2.24-4.06 2.34-4.13-1.27-1.86-3.25-2.11-3.96-2.14-1.69-.17-3.29.99-4.15.99-.86 0-2.16-.97-3.56-.94-1.83.03-3.51 1.06-4.46 2.68-1.9 3.29-.49 8.17 1.37 10.84.91 1.3 1.99 2.77 3.41 2.72 1.37-.05 1.89-.88 3.55-.88 1.65 0 2.11.88 3.55.86 1.47-.02 2.41-1.34 3.3-2.65 1.05-1.51 1.48-2.97 1.5-3.05-.03-.02-2.87-1.1-2.89-4.3z" fill="white" />
      <path d="M19.77 14.88c.75-.92 1.26-2.19 1.11-3.47-1.07.04-2.37.72-3.14 1.62-.69.79-1.25 2.08-1.03 3.3 1.17.09 2.31-.59 3.06-1.45z" fill="white" />
      <text x="35" y="20" fontFamily="-apple-system,Helvetica Neue,sans-serif" fontSize="8" fill="rgba(255,255,255,0.75)" letterSpacing="0.5">Download on the</text>
      <text x="35" y="35" fontFamily="-apple-system,Helvetica Neue,sans-serif" fontSize="17" fontWeight="600" fill="white" letterSpacing="-0.4">App Store</text>
    </svg>
  );
}
function GooglePlayBadge({ width = 180 }: { width?: number }) {
  return (
    <svg viewBox="0 0 180 50" fill="none" xmlns="http://www.w3.org/2000/svg" width={width} aria-label="Get it on Google Play">
      <rect width="180" height="50" rx="9" fill="#000" />
      <rect x=".5" y=".5" width="179" height="49" rx="8.5" stroke="rgba(255,255,255,0.15)" />
      <path d="M12 16.5C11.5 16.8 11.5 17.6 11.5 17.6L11.5 33.4C11.5 33.4 11.5 34.2 12 34.5L12.1 34.6L21 25.15V25L12.1 16.4Z" fill="#00D2FF" />
      <path d="M24 22.4L21 25.15L12 16.5L12.1 16.4C12.5 16.1 13 16.1 13.4 16.4L24 22.4Z" fill="#5FE06A" />
      <path d="M24 27.6L13.4 33.6C13 33.9 12.5 33.9 12.1 33.6L12 33.5L21 24.85Z" fill="#FF3D51" />
      <path d="M24 22.4L13.4 16.4C13 16.1 12.5 16.1 12.1 16.4L21 25L24 27.6L27.5 25.78C28.2 25.42 28.2 24.58 27.5 24.22Z" fill="#FFBC00" />
      <text x="38" y="20" fontFamily="-apple-system,Helvetica Neue,sans-serif" fontSize="8" fill="rgba(255,255,255,0.75)" letterSpacing="0.8">GET IT ON</text>
      <text x="38" y="35" fontFamily="-apple-system,Helvetica Neue,sans-serif" fontSize="17" fontWeight="600" fill="white" letterSpacing="-0.4">Google Play</text>
    </svg>
  );
}

/* ══════════════════════════════════════════════
   THEME TOGGLE
══════════════════════════════════════════════ */
function ThemeToggle({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
  return (
    <button onClick={onToggle} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        width: 46, height: 26, borderRadius: 13, border: "1px solid var(--border)",
        background: dark ? "rgba(26,171,240,0.2)" : "rgba(0,0,0,0.06)",
        cursor: "pointer", position: "relative", padding: 0,
        display: "flex", alignItems: "center", flexShrink: 0, transition: "background 0.3s",
      }}>
      <motion.div animate={{ x: dark ? 22 : 2 }} transition={{ type: "spring", stiffness: 500, damping: 30 }}
        style={{
          width: 20, height: 20, borderRadius: "50%",
          background: "linear-gradient(135deg, var(--brand), var(--brand-deep))",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 2px 8px rgba(26,171,240,0.55)",
        }}>
        {dark ? <Moon size={10} color="#fff" strokeWidth={2} /> : <Sun size={10} color="#fff" strokeWidth={2} />}
      </motion.div>
    </button>
  );
}

/* ══════════════════════════════════════════════
   NAV
══════════════════════════════════════════════ */
function Nav({ logoHref, dark, onToggleDark }: { logoHref: string; dark: boolean; onToggleDark: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Services", href: "#categories" },
    { label: "Safety", href: "#trust-safety" },
    { label: "For Providers", href: "#for-providers" },
  ];
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "var(--nav-bg)" : "transparent",
      backdropFilter: scrolled ? "saturate(180%) blur(24px)" : "none",
      WebkitBackdropFilter: scrolled ? "saturate(180%) blur(24px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      transition: "all 0.4s ease",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href={logoHref} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <Image src="/icon-helpinghandsau.png" alt="HelpingHandsAU" width={36} height={36}
            style={{ borderRadius: 10, display: "block", flexShrink: 0 }} />
          <span style={{ fontFamily: "var(--font-jakarta)", fontWeight: 700, fontSize: 17, color: "var(--text)", letterSpacing: "-0.03em" }}>
            HelpingHands<span style={{ color: "var(--brand)" }}>AU</span>
          </span>
        </a>
        <div style={{ display: "flex", gap: 30, alignItems: "center" }} className="hh-hidden-mobile">
          {links.map(l => (
            <a key={l.label} href={l.href}
              onClick={e => { e.preventDefault(); document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" }); }}
              className="hh-nav-link"
              style={{ color: "var(--text2)", textDecoration: "none", fontSize: 13, fontWeight: 500, letterSpacing: "-0.01em" }}>
              {l.label}
            </a>
          ))}
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <ThemeToggle dark={dark} onToggle={onToggleDark} />
          <a href="#download"
            onClick={e => { e.preventDefault(); document.querySelector("#download")?.scrollIntoView({ behavior: "smooth" }); }}
            className="hh-cta-btn"
            style={{
              background: "linear-gradient(135deg, var(--brand), var(--brand-deep))",
              color: "#fff", fontWeight: 700, fontSize: 13, padding: "9px 20px",
              borderRadius: 10, textDecoration: "none", letterSpacing: "-0.01em",
              display: "flex", alignItems: "center", gap: 6,
              boxShadow: "0 4px 16px var(--glow)",
            }}>
            Get the App <ArrowRight size={13} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ══════════════════════════════════════════════
   HERO  — multi-colour aurora
══════════════════════════════════════════════ */
function Hero({ dark }: { dark: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const rm = useReducedMotion();

  const in0 = (d: number) => rm ? {} : {
    initial: { opacity: 0, y: 44 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.1, delay: d, ease: APPLE_EASE },
  };

  /* Floating category chips — adds colour life to hero */
  const chips = [
    { label: "🏡 Home & Garden", color: "#1AABF0" },
    { label: "🔧 Repairs & Trades", color: "#7C3AED" },
    { label: "✨ Cleaning", color: "#10B981" },
    { label: "🚚 Removals", color: "#F59E0B" },
    { label: "📷 Photography", color: "#F43F5E" },
    { label: "💻 Tech & IT", color: "#06B6D4" },
  ];

  return (
    <section ref={ref} style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      textAlign: "center", padding: "120px 24px 80px", position: "relative", overflow: "hidden",
      background: "var(--s-hero)",
    }}>
      {/* Multi-colour aurora — the rainbow effect */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: dark ? [
          "radial-gradient(ellipse 70% 60% at 20% 20%, rgba(124,58,237,0.22) 0%, transparent 60%)",
          "radial-gradient(ellipse 60% 50% at 80% 15%, rgba(26,171,240,0.24) 0%, transparent 55%)",
          "radial-gradient(ellipse 50% 40% at 10% 80%, rgba(16,185,129,0.16) 0%, transparent 55%)",
          "radial-gradient(ellipse 55% 45% at 90% 75%, rgba(245,158,11,0.14) 0%, transparent 55%)",
          "radial-gradient(ellipse 40% 35% at 50% 50%, rgba(244,63,94,0.10) 0%, transparent 60%)",
        ].join(",") : [
          "radial-gradient(ellipse 70% 60% at 20% 20%, rgba(124,58,237,0.12) 0%, transparent 60%)",
          "radial-gradient(ellipse 60% 50% at 80% 15%, rgba(26,171,240,0.14) 0%, transparent 55%)",
          "radial-gradient(ellipse 50% 40% at 10% 80%, rgba(16,185,129,0.10) 0%, transparent 55%)",
          "radial-gradient(ellipse 55% 45% at 90% 75%, rgba(245,158,11,0.09) 0%, transparent 55%)",
          "radial-gradient(ellipse 40% 35% at 50% 50%, rgba(244,63,94,0.06) 0%, transparent 60%)",
        ].join(","),
      }} />
      {/* Dot grid */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(rgba(120,120,120,0.18) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        maskImage: "radial-gradient(ellipse 75% 75% at 50% 50%, black 20%, transparent 80%)",
      }} />

      {/* Floating chips (decorative) */}
      {chips.map((c, i) => {
        const positions = [
          { top: "18%", left: "6%" }, { top: "30%", right: "5%" },
          { top: "60%", left: "4%" }, { top: "68%", right: "6%" },
          { top: "82%", left: "12%" }, { top: "15%", right: "12%" },
        ];
        return (
          <motion.div key={c.label} aria-hidden
            animate={{ y: [0, i % 2 === 0 ? -10 : 10, 0] }}
            transition={{ repeat: Infinity, duration: 5 + i * 0.8, ease: "easeInOut", delay: i * 0.4 }}
            style={{
              position: "absolute", ...positions[i],
              display: "flex", alignItems: "center", gap: 6,
              background: `${c.color}14`, border: `1px solid ${c.color}28`,
              borderRadius: 100, padding: "7px 14px",
              fontSize: 12, fontWeight: 600, color: c.color,
              backdropFilter: "blur(8px)",
              whiteSpace: "nowrap",
            }}
            className="hh-hidden-mobile"
          >
            {c.label}
          </motion.div>
        );
      })}

      <motion.div style={{
        position: "relative", maxWidth: 900, zIndex: 1, width: "100%",
        opacity: rm ? 1 : heroOpacity, y: rm ? 0 : heroY,
      }}>
        {/* Badge */}
        <motion.div {...in0(0)} style={{ marginBottom: 28 }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8, fontSize: 12, fontWeight: 700,
            letterSpacing: "0.08em", textTransform: "uppercase",
            color: "var(--brand)", background: "var(--brand-dim)",
            padding: "7px 18px", borderRadius: 100, border: "1px solid var(--border)",
          }}>
            <MapPin size={12} strokeWidth={2.5} />
            Local tasks, local people, local trust
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 {...in0(0.12)} className="text-balance" style={{
          fontFamily: "var(--font-jakarta)", fontWeight: 800, letterSpacing: "-0.05em",
          lineHeight: 1.02, color: "var(--text)", marginBottom: 24,
          fontSize: "clamp(42px, 7vw, 84px)",
        }}>
          Get local tasks done<br />
          <span style={{
            backgroundImage: "linear-gradient(135deg, #7C3AED 0%, #1AABF0 40%, #10B981 75%, #F59E0B 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>the smarter way.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p {...in0(0.26)} className="text-balance" style={{
          fontSize: "clamp(18px, 2.2vw, 22px)", color: "var(--text2)", maxWidth: 620,
          margin: "0 auto 52px", lineHeight: 1.6, letterSpacing: "-0.01em",
        }}>
          Connect with local service providers, agree on price, and release payment only when you&rsquo;re happy — all through one simple app.
        </motion.p>

        {/* CTAs */}
        <motion.div {...in0(0.38)} style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 52 }}>
          <a href="#download"
            onClick={e => { e.preventDefault(); document.querySelector("#download")?.scrollIntoView({ behavior: "smooth" }); }}
            className="hh-hero-btn-primary"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10, justifyContent: "center",
              background: "linear-gradient(135deg, #7C3AED, #1AABF0)",
              color: "#fff", fontWeight: 700, fontSize: 17,
              padding: "16px 34px", borderRadius: 12, textDecoration: "none",
              letterSpacing: "-0.022em",
              boxShadow: "0 12px 40px rgba(124,58,237,0.30), 0 4px 16px rgba(26,171,240,0.20)",
            }}>
            <ClipboardList size={20} strokeWidth={2} />
            Post a Task — It&rsquo;s Free
          </a>
          <a href="#for-providers"
            onClick={e => { e.preventDefault(); document.querySelector("#for-providers")?.scrollIntoView({ behavior: "smooth" }); }}
            className="hh-hero-btn-secondary"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10, justifyContent: "center",
              background: "var(--card)", color: "var(--text)", fontWeight: 600, fontSize: 17,
              padding: "16px 34px", borderRadius: 12, textDecoration: "none",
              letterSpacing: "-0.022em", border: "1px solid var(--border)",
              boxShadow: "var(--shadow-sm)",
            }}>
            <Briefcase size={20} strokeWidth={2} />
            Earn as a Provider
          </a>
        </motion.div>

        {/* Trust chips — softened wording */}
        <motion.div {...in0(0.50)} style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          {[
            { icon: <Shield size={14} strokeWidth={2} color="#7C3AED" />, label: "Escrow-backed payments", bg: "var(--violet-dim)", border: "rgba(124,58,237,0.2)" },
            { icon: <UserCheck size={14} strokeWidth={2} color="#10B981" />, label: "Provider ID verification", bg: "var(--emerald-dim)", border: "rgba(16,185,129,0.2)" },
            { icon: <MapPin size={14} strokeWidth={2} color="#1AABF0" />, label: "Australian community", bg: "var(--brand-dim)", border: "rgba(26,171,240,0.2)" },
          ].map(b => (
            <span key={b.label} style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              fontSize: 12, fontWeight: 600, color: "var(--text2)",
              background: b.bg, padding: "9px 16px", borderRadius: 10,
              border: `1px solid ${b.border}`,
            }}>
              {b.icon}{b.label}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   HOW IT WORKS  — warm amber section
══════════════════════════════════════════════ */
function HowItWorks() {
  const steps = [
    { n: "01", icon: <ClipboardList size={26} strokeWidth={1.75} color="#F59E0B" />, title: "Post Your Task", desc: "Describe what you need, your location, and the budget range that works for you. No commitment to post.", color: "#F59E0B" },
    { n: "02", icon: <Lock size={26} strokeWidth={1.75} color="#7C3AED" />, title: "Funds Held in Escrow", desc: "Once you choose a provider, your payment is held securely by Stripe — not us — until the job is done.", color: "#7C3AED" },
    { n: "03", icon: <Camera size={26} strokeWidth={1.75} color="#10B981" />, title: "Track Progress", desc: "Your provider uploads photo proof of completion through the app. You can follow along the whole time.", color: "#10B981" },
    { n: "04", icon: <BadgeCheck size={26} strokeWidth={1.75} color="#1AABF0" />, title: "Release & Review", desc: "Happy with the work? Release the payment and leave a review. Simple, fair, transparent.", color: "#1AABF0" },
  ];
  return (
    <section id="how-it-works" style={{ padding: "100px 24px", background: "var(--s-how)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <ScrollSectionIntro>
          <SectionLabel color="#F59E0B">How It Works</SectionLabel>
          <h2 className="text-balance" style={h2S}>Simple. Secure. Straightforward.</h2>
          <p style={subS}>Four steps that keep you in control from the moment you post to the moment you pay.</p>
        </ScrollSectionIntro>
        <ScrollRevealGroup className="hh-steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginTop: 64 }}>
          {steps.map(s => (
            <ScrollRevealItem key={s.n} className="hh-step-card" style={{
              background: "var(--card)", border: "1px solid var(--border)",
              borderRadius: 20, padding: 32, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column",
            }}>
              <div aria-hidden style={{
                position: "absolute", top: 12, right: 16, fontSize: 80, fontWeight: 900,
                lineHeight: 1, color: s.color, opacity: 0.07,
                fontFamily: "var(--font-jakarta)", letterSpacing: "-0.05em", userSelect: "none",
              }}>{s.n}</div>
              <IconBox icon={s.icon} color={s.color} size={52} />
              <p style={{ fontSize: 11, fontWeight: 800, color: s.color, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10, marginTop: 24 }}>Step {s.n}</p>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--text)", marginBottom: 12, letterSpacing: "-0.025em", lineHeight: 1.2 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: "var(--text2)", lineHeight: 1.75, flex: 1 }}>{s.desc}</p>
              <div style={{ width: 40, height: 3, borderRadius: 3, background: s.color, marginTop: 24 }} />
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   FEATURES  — neutral section
══════════════════════════════════════════════ */
function Features() {
  const feats = [
    { icon: <ShieldCheck size={22} strokeWidth={1.75} color="#7C3AED" />, c: "#7C3AED", title: "Escrow Protection", desc: "Your money moves to Stripe — not to us — and only transfers when you confirm you're satisfied." },
    { icon: <UserCheck size={22} strokeWidth={1.75} color="#10B981" />, c: "#10B981", title: "Provider Verification", desc: "We ask providers to submit ID before they can accept tasks. Giving you one less thing to worry about." },
    { icon: <Star size={22} strokeWidth={1.75} color="#F59E0B" />, c: "#F59E0B", title: "Ratings & Reviews", desc: "Transparent, two-way feedback helps good providers stand out and keeps the community honest." },
    { icon: <MessageSquare size={22} strokeWidth={1.75} color="#1AABF0" />, c: "#1AABF0", title: "In-App Messaging", desc: "Agree on scope, share photos, and clarify details — all within the app without sharing personal numbers." },
    { icon: <Zap size={22} strokeWidth={1.75} color="#F43F5E" />, c: "#F43F5E", title: "Quick Bids", desc: "Post your task and hear back from local providers in minutes. Compare and choose at your own pace." },
    { icon: <Smartphone size={22} strokeWidth={1.75} color="#06B6D4" />, c: "#06B6D4", title: "iOS & Android", desc: "A full experience on both platforms. Post, manage, and pay from wherever you are." },
    { icon: <Bell size={22} strokeWidth={1.75} color="#F59E0B" />, c: "#F59E0B", title: "Timely Notifications", desc: "Stay on top of new bids, messages, and job updates without having to constantly check the app." },
    { icon: <Globe size={22} strokeWidth={1.75} color="#10B981" />, c: "#10B981", title: "Built for Australia", desc: "AUD payments, local support, GST-aware — designed specifically for the Australian market." },
    { icon: <Wallet size={22} strokeWidth={1.75} color="#7C3AED" />, c: "#7C3AED", title: "Provider Payouts", desc: "Stripe Connect handles provider payouts directly to their bank. Fast turnaround, transparent fees." },
  ];
  return (
    <section id="features" style={{ padding: "100px 24px", background: "var(--s-feat)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <ScrollSectionIntro>
          <SectionLabel color="#06B6D4">Platform Features</SectionLabel>
          <h2 className="text-balance" style={h2S}>Built to make hiring easy.</h2>
          <p style={subS}>The tools that help tasks go smoothly — from first message to final payment.</p>
        </ScrollSectionIntro>
        <ScrollRevealGroup style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 14, marginTop: 64 }} stagger={0.06}>
          {feats.map(f => (
            <ScrollRevealItem key={f.title} className="hh-feat-card" style={{
              background: "var(--card)", border: "1px solid var(--border)", borderRadius: 18,
              padding: "30px 28px", cursor: "default",
            }}>
              <IconBox icon={f.icon} color={f.c} size={46} />
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 8, letterSpacing: "-0.022em", marginTop: 20 }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: "var(--text2)", lineHeight: 1.75 }}>{f.desc}</p>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   CATEGORIES  — soft violet section
══════════════════════════════════════════════ */
function Categories() {
  const cats = [
    { icon: <Home size={20} strokeWidth={1.75} color="#1AABF0" />, name: "Home & Garden", sub: "Gardening, landscaping, odd jobs", c: "#1AABF0" },
    { icon: <Wrench size={20} strokeWidth={1.75} color="#7C3AED" />, name: "Repairs & Trades", sub: "Plumbing, electrical, carpentry", c: "#7C3AED" },
    { icon: <Truck size={20} strokeWidth={1.75} color="#F59E0B" />, name: "Removals & Delivery", sub: "Furniture, storage, couriers", c: "#F59E0B" },
    { icon: <Monitor size={20} strokeWidth={1.75} color="#06B6D4" />, name: "Tech & IT", sub: "Setup, repairs, smart home", c: "#06B6D4" },
    { icon: <Camera size={20} strokeWidth={1.75} color="#F43F5E" />, name: "Photography & Video", sub: "Portraits, events, content", c: "#F43F5E" },
    { icon: <Sparkles size={20} strokeWidth={1.75} color="#10B981" />, name: "Cleaning", sub: "Home, office, end of lease", c: "#10B981" },
    { icon: <Palette size={20} strokeWidth={1.75} color="#F97316" />, name: "Design & Creative", sub: "Branding, illustration, UX", c: "#F97316" },
    { icon: <Users size={20} strokeWidth={1.75} color="#EC4899" />, name: "Childcare & Tutoring", sub: "Babysitting, tutoring, coaching", c: "#EC4899" },
  ];
  return (
    <section id="categories" style={{ padding: "100px 24px", background: "var(--s-cat)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <ScrollSectionIntro>
          <SectionLabel color="#7C3AED">Services</SectionLabel>
          <h2 className="text-balance" style={h2S}>What do you need done today?</h2>
          <p style={subS}>Browse by category or just describe your task — local providers will come to you.</p>
        </ScrollSectionIntro>
        <ScrollRevealGroup style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 12, marginTop: 64 }} stagger={0.05}>
          {cats.map(c => (
            <ScrollRevealItem key={c.name} className="hh-cat-card" style={{
              background: "var(--card)", border: "1px solid var(--border)", borderRadius: 16,
              padding: "22px 20px", display: "flex", alignItems: "center", gap: 16, cursor: "default",
            }}>
              <IconBox icon={c.icon} color={c.c} size={46} />
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em" }}>{c.name}</div>
                <div style={{ fontSize: 12, color: "var(--text2)", marginTop: 3 }}>{c.sub}</div>
              </div>
              <ChevronRight size={14} color="var(--text3)" style={{ marginLeft: "auto", flexShrink: 0 }} />
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   TRUST & SAFETY  — soft mint section
══════════════════════════════════════════════ */
function TrustSafety() {
  const pillars = [
    {
      icon: <CreditCard size={26} strokeWidth={1.75} color="#1AABF0" />,
      c: "#1AABF0", badge: "Powered by Stripe",
      title: "Escrow Payments",
      desc: "We use Stripe to hold funds between tasks. Money doesn't move until you're satisfied — reducing risk for everyone involved.",
    },
    {
      icon: <UserCheck size={26} strokeWidth={1.75} color="#10B981" />,
      c: "#10B981", badge: "ID Verification",
      title: "Provider Identity Checks",
      desc: "Providers are asked to verify their identity before they can take on work. It's one layer of assurance when inviting someone to your home.",
    },
    {
      icon: <HeartHandshake size={26} strokeWidth={1.75} color="#F59E0B" />,
      c: "#F59E0B", badge: "Disputes Team",
      title: "Dispute Assistance",
      desc: "If something doesn't go to plan, our team will step in to help both sides reach a fair outcome based on the evidence available.",
    },
    {
      icon: <ShieldCheck size={26} strokeWidth={1.75} color="#7C3AED" />,
      c: "#7C3AED", badge: "Layered Approach",
      title: "Multiple Safeguards",
      desc: "Verification, escrow, ratings, and dispute assistance all work together. No single point of failure — just thoughtful, layered protection.",
    },
  ];
  return (
    <section id="trust-safety" style={{ padding: "100px 24px", background: "var(--s-trust)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <ScrollSectionIntro>
          <SectionLabel color="#10B981">How We Protect You</SectionLabel>
          <h2 className="text-balance" style={h2S}>We take safety seriously.</h2>
          <p style={subS}>We can&rsquo;t promise perfection, but we&rsquo;ve built real protections so you can hire local with confidence.</p>
        </ScrollSectionIntro>
        <ScrollRevealGroup style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 14, marginTop: 64 }}>
          {pillars.map(p => (
            <ScrollRevealItem key={p.title} className="hh-trust-card" style={{
              background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, padding: 36,
            }}>
              <IconBox icon={p.icon} color={p.c} size={54} />
              <div style={{ marginTop: 20, marginBottom: 14 }}>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: 5,
                  fontSize: 10, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase",
                  color: p.c, background: `${p.c}15`, padding: "4px 12px", borderRadius: 6,
                }}>
                  <CheckCircle2 size={10} strokeWidth={2.5} />{p.badge}
                </span>
              </div>
              <h3 style={{ fontSize: 21, fontWeight: 700, color: "var(--text)", marginBottom: 12, letterSpacing: "-0.025em" }}>{p.title}</h3>
              <p style={{ fontSize: 15, color: "var(--text2)", lineHeight: 1.75 }}>{p.desc}</p>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   FOR PROVIDERS  — neutral with dark earnings card
══════════════════════════════════════════════ */
function ForProviders() {
  const perks = [
    { icon: <BarChart3 size={15} strokeWidth={2} />, text: "Browse local tasks posted daily in your area", c: "#1AABF0" },
    { icon: <Banknote size={15} strokeWidth={2} />, text: "Set your own rates — price what feels right to you", c: "#10B981" },
    { icon: <Award size={15} strokeWidth={2} />, text: "Build a profile with reviews to grow your reputation", c: "#F59E0B" },
    { icon: <TrendingUp size={15} strokeWidth={2} />, text: "Get paid via Stripe Connect — straight to your bank", c: "#7C3AED" },
    { icon: <Smartphone size={15} strokeWidth={2} />, text: "Manage bids, chat, and jobs from a single app", c: "#F43F5E" },
    { icon: <Building2 size={15} strokeWidth={2} />, text: "Free to join — start browsing tasks right away", c: "#06B6D4" },
  ];
  return (
    <section id="for-providers" style={{ padding: "100px 24px", background: "var(--s-prov)" }}>
      <div className="hh-for-providers-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <ScrollReveal y={40}>
          <SectionLabel color="#F59E0B" align="left">For Service Providers</SectionLabel>
          <h2 className="text-balance" style={{ ...h2S, textAlign: "left" }}>
            Your skills.<br />
            <span style={{
              backgroundImage: "linear-gradient(135deg, #F59E0B 0%, #F43F5E 50%, #7C3AED 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Your terms.</span>
          </h2>
          <p style={{ fontSize: 18, color: "var(--text2)", lineHeight: 1.65, marginBottom: 36, letterSpacing: "-0.01em" }}>
            Find local work, set your own schedule, and get paid when the job is done. No monthly fees, no lead charges — just tasks waiting for people like you.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px", display: "flex", flexDirection: "column", gap: 14 }}>
            {perks.map(p => (
              <li key={p.text} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                  background: `${p.c}15`, border: `1px solid ${p.c}25`,
                  display: "flex", alignItems: "center", justifyContent: "center", color: p.c, marginTop: 1,
                }}>{p.icon}</div>
                <span style={{ fontSize: 15, color: "var(--text2)", lineHeight: 1.6 }}>{p.text}</span>
              </li>
            ))}
          </ul>
          <a href="#download"
            onClick={e => { e.preventDefault(); document.querySelector("#download")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "linear-gradient(135deg, #F59E0B, #F43F5E)",
              color: "#fff", fontWeight: 700, fontSize: 17,
              padding: "15px 32px", borderRadius: 12, textDecoration: "none",
              letterSpacing: "-0.022em",
              boxShadow: "0 8px 32px rgba(245,158,11,0.30), 0 4px 12px rgba(244,63,94,0.20)",
            }}>
            <Briefcase size={18} strokeWidth={2} />
            Join as a Provider — Free
          </a>
        </ScrollReveal>

        {/* Earnings dashboard */}
        <ScrollReveal delay={0.18} y={60} style={{ display: "flex", justifyContent: "center" }}>
          <div style={{
            background: "linear-gradient(145deg, #080E1C 0%, #0D1830 100%)",
            borderRadius: 24, padding: 36, width: "100%", maxWidth: 420,
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <BarChart3 size={14} color="#64748B" strokeWidth={2} />
                <span style={{ fontSize: 12, color: "#64748B", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>Monthly Snapshot</span>
              </div>
              <span style={{ fontSize: 11, background: "rgba(16,185,129,0.15)", color: "#10B981", padding: "4px 10px", borderRadius: 8, fontWeight: 700 }}>▲ Active</span>
            </div>
            <div style={{ fontSize: 52, fontWeight: 800, color: "#F0F6FF", fontFamily: "var(--font-jakarta)", letterSpacing: "-0.05em", marginBottom: 4 }}>$4,280</div>
            <div style={{ fontSize: 13, color: "#475569", marginBottom: 28, display: "flex", alignItems: "center", gap: 6 }}>
              <CheckCircle2 size={13} color="#10B981" strokeWidth={2} />
              18 tasks · example earnings
            </div>
            {/* Bar chart */}
            <div style={{ display: "flex", gap: 5, alignItems: "flex-end", height: 44, marginBottom: 28 }}>
              {[35, 55, 42, 70, 48, 88, 65].map((h, i) => (
                <div key={i} style={{
                  flex: 1, borderRadius: 4,
                  background: ["rgba(124,58,237,0.5)", "rgba(26,171,240,0.5)", "rgba(16,185,129,0.5)", "rgba(245,158,11,0.5)", "rgba(244,63,94,0.5)", "rgba(6,182,212,0.9)", "rgba(249,115,22,0.5)"][i],
                  height: `${h}%`, boxShadow: i === 5 ? "0 0 12px rgba(6,182,212,0.5)" : "none",
                }} />
              ))}
            </div>
            {[
              { icon: <Wrench size={12} strokeWidth={2} />, task: "Bathroom renovation", amt: "$480", date: "Today", dot: "#1AABF0" },
              { icon: <Monitor size={12} strokeWidth={2} />, task: "Office furniture", amt: "$120", date: "Yesterday", dot: "#10B981" },
              { icon: <Sparkles size={12} strokeWidth={2} />, task: "Garden landscaping", amt: "$650", date: "2 days ago", dot: "#F59E0B" },
              { icon: <Zap size={12} strokeWidth={2} />, task: "Appliance install", amt: "$95", date: "4 days ago", dot: "#7C3AED" },
            ].map(t => (
              <div key={t.task} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "11px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, flexShrink: 0, background: `${t.dot}20`, border: `1px solid ${t.dot}30`, display: "flex", alignItems: "center", justifyContent: "center", color: t.dot }}>{t.icon}</div>
                  <div>
                    <div style={{ fontSize: 13, color: "#E2E8F0", fontWeight: 600 }}>{t.task}</div>
                    <div style={{ fontSize: 11, color: "#475569", marginTop: 1 }}>{t.date}</div>
                  </div>
                </div>
                <div style={{ fontSize: 14, color: "#1AABF0", fontWeight: 700 }}>{t.amt}</div>
              </div>
            ))}
            <p style={{ fontSize: 11, color: "#334155", marginTop: 14, textAlign: "center" }}>Illustrative figures only</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   DOWNLOAD  — warm section, Apple Coming Soon
══════════════════════════════════════════════ */
function Download({ dark }: { dark: boolean }) {
  const badges = [
    { icon: <Building2 size={13} strokeWidth={2} />, label: "Australian Owned", c: "#1AABF0" },
    { icon: <ShieldCheck size={13} strokeWidth={2} />, label: "Stripe Payments", c: "#10B981" },
    { icon: <UserCheck size={13} strokeWidth={2} />, label: "ID Verification", c: "#7C3AED" },
  ];

  return (
    <section id="download" className="hh-app-banner" aria-label="Download the HelpingHandsAU app">
      <div className="hh-app-banner-inner">
        <ScrollReveal className="hh-app-banner-content">
          <div style={{ margin: "0 auto 24px", width: 72, height: 72 }} className="hh-app-banner-icon">
            <Image src="/icon-helpinghandsau.png" alt="" width={72} height={72}
              style={{ borderRadius: 18, display: "block", boxShadow: "0 12px 40px rgba(124,58,237,0.30)" }} />
          </div>
          <h2 className="text-balance" style={{
            fontFamily: "var(--font-jakarta)", fontWeight: 800,
            fontSize: "clamp(30px, 4.5vw, 52px)", color: dark ? "#EDF2FF" : "var(--text)",
            letterSpacing: "-0.05em", marginBottom: 14, textAlign: "center",
          }}>
            Your community, in your pocket.
          </h2>
          <p style={{
            fontSize: "clamp(16px, 2vw, 19px)", color: dark ? "#94A3B8" : "var(--text2)", lineHeight: 1.65,
            textAlign: "center", maxWidth: 520, margin: "0 auto 28px", letterSpacing: "-0.01em",
          }}>
            Post tasks, receive bids, chat with providers, and release payment when you&rsquo;re ready. All in one place.
          </p>

          <div className="hh-app-banner-badges" style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 36 }}>
            {badges.map(b => (
              <span key={b.label} style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                fontSize: 12, fontWeight: 600, color: dark ? "#94A3B8" : "var(--text2)",
                background: dark ? "rgba(255,255,255,0.06)" : "var(--card)",
                padding: "8px 16px", borderRadius: 10, border: "1px solid var(--border)",
              }}>
                <span style={{ color: b.c }}>{b.icon}</span>{b.label}
              </span>
            ))}
          </div>

          <div className="hh-app-banner-stores" style={{ display: "flex", gap: 48, justifyContent: "center", flexWrap: "wrap", alignItems: "flex-start" }}>
            {/* Apple Store — live */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
              <a href={STORE_LINKS.apple} target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store" style={{ display: "block", lineHeight: 0 }}>
                <AppleStoreBadge width={160} />
              </a>
              <div className="hh-app-banner-qr" style={{
                background: "#fff", borderRadius: 14, padding: 10,
                boxShadow: "0 8px 40px rgba(0,0,0,0.18)", border: "2px solid rgba(26,171,240,0.28)",
              }}>
                <Image src="/qr-apple.png" alt="Scan to download on the App Store" width={120} height={120} style={{ display: "block", borderRadius: 6 }} />
              </div>
              <span className="hh-app-banner-qr" style={{ fontSize: 11, color: dark ? "#64748B" : "var(--text2)", fontWeight: 500 }}>Scan for iOS</span>
            </div>

            <div className="hh-app-banner-divider" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: 12 }}>
              <div style={{ width: 1, height: 180, background: "linear-gradient(to bottom, transparent, var(--border), transparent)" }} />
            </div>

            {/* Google Play — live */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
              <a href={STORE_LINKS.android} target="_blank" rel="noopener noreferrer" aria-label="Get it on Google Play" style={{ display: "block", lineHeight: 0 }}>
                <GooglePlayBadge width={180} />
              </a>
              <div className="hh-app-banner-qr" style={{
                background: "#fff", borderRadius: 14, padding: 10,
                boxShadow: "0 8px 40px rgba(0,0,0,0.18)", border: "2px solid rgba(26,171,240,0.28)",
              }}>
                <Image src="/qr-android.png" alt="Scan to download on Google Play" width={120} height={120} style={{ display: "block", borderRadius: 6 }} />
              </div>
              <span className="hh-app-banner-qr" style={{ fontSize: 11, color: dark ? "#64748B" : "var(--text2)", fontWeight: 500 }}>Scan for Android</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   FOOTER
══════════════════════════════════════════════ */
function Footer() {
  const legalLinks = [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Service", href: "/legal/terms" },
    { label: "Cookie Policy", href: "/legal/cookies" },
    { label: "Community Guidelines", href: "/legal/community" },
    { label: "Safety Policy", href: "/legal/safety" },
    { label: "Refunds & Disputes", href: "/legal/refunds" },
    { label: "Accessibility", href: "/legal/accessibility" },
  ];
  return (
    <footer style={{ background: "#040810", borderTop: "1px solid rgba(255,255,255,0.07)", padding: "72px 24px 44px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="hh-footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 64 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <Image src="/icon-helpinghandsau.png" alt="HelpingHandsAU" width={34} height={34}
                style={{ borderRadius: 10, display: "block", flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-jakarta)", fontWeight: 700, fontSize: 16, color: "#EDF2FF" }}>
                HelpingHands<span style={{ color: "#1AABF0" }}>AU</span>
              </span>
            </div>
            <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.8, maxWidth: 280 }}>
              A local task marketplace connecting Australians with skilled providers in their area. Fair, transparent, and community-focused.
            </p>
            <div style={{ marginTop: 24, display: "flex", gap: 8 }}>
              {[{ i: <Globe size={14} strokeWidth={2} />, c: "#1AABF0" }, { i: <Lock size={14} strokeWidth={2} />, c: "#10B981" }, { i: <CheckCircle2 size={14} strokeWidth={2} />, c: "#7C3AED" }].map((v, i) => (
                <div key={i} style={{ width: 32, height: 32, borderRadius: 8, background: `${v.c}15`, border: `1px solid ${v.c}25`, display: "flex", alignItems: "center", justifyContent: "center", color: v.c }}>{v.i}</div>
              ))}
            </div>
          </div>
          {[
            { title: "Platform", links: [{ label: "Post a Task", href: "#how-it-works" }, { label: "Browse Services", href: "#categories" }, { label: "How It Works", href: "#how-it-works" }, { label: "For Providers", href: "#for-providers" }] },
            { title: "Providers", links: [{ label: "Join Free", href: "#for-providers" }, { label: "How It Works", href: "#how-it-works" }, { label: "Earnings", href: "#for-providers" }, { label: "Trust & Safety", href: "#trust-safety" }] },
            { title: "Legal", links: legalLinks },
          ].map(col => (
            <div key={col.title}>
              <h4 style={{ fontSize: 11, fontWeight: 800, color: "#EDF2FF", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>{col.title}</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {col.links.map(l => (
                  <li key={l.label}>
                    <a href={l.href}
                      onClick={l.href.startsWith("#") ? e => { e.preventDefault(); document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" }); } : undefined}
                      className="hh-footer-link"
                      style={{ fontSize: 14, color: "#475569", textDecoration: "none" }}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 32, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <p style={{ fontSize: 13, color: "#334155" }}>© 2026 HelpingHandsAU Pty Ltd. All rights reserved. ABN 94 693 919 185</p>
          <p style={{ fontSize: 13, color: "#334155" }}>Made with ❤️ in Australia 🇦🇺</p>
        </div>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════════════
   PAGE EXPORT
══════════════════════════════════════════════ */
export function HelpingHandsAUMarketingPage({ logoHref }: { logoHref: string }) {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("hh-theme");
    if (saved === "dark") setDark(true);
    else if (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches) setDark(true);
  }, []);

  const toggleDark = () => {
    setDark(d => {
      const next = !d;
      localStorage.setItem("hh-theme", next ? "dark" : "light");
      return next;
    });
  };

  const palette = { ...BRAND, ...(dark ? DARK : LIGHT) };
  const cssVars = Object.entries(palette).map(([k, v]) => `${k}:${v}`).join(";");

  return (
    <div className="hh-root" style={{ colorScheme: dark ? "dark" : "light" }} data-dark={dark ? "" : undefined}>
      <style>{`
        .hh-root { ${cssVars}; }

        .hh-hidden-mobile { display: flex; }
        @media(max-width:768px){ .hh-hidden-mobile { display: none !important; } }
        *, *::before, *::after { box-sizing: border-box; }
        html { overflow-x: hidden; scroll-behavior: smooth; }
        body { overflow-x: hidden; max-width: 100vw; }
        section, nav, footer { overflow: hidden; }

        @media(max-width:900px){ .hh-for-providers-grid { grid-template-columns: 1fr !important; } }
        @media(max-width:900px){ .hh-footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media(max-width:1024px){ .hh-steps-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media(max-width:560px){ .hh-steps-grid { grid-template-columns: 1fr !important; } }

        .hh-step-card  { transition: transform .3s cubic-bezier(.4,0,.2,1), box-shadow .3s, border-color .3s; }
        .hh-step-card:hover  { transform: translateY(-5px); box-shadow: 0 20px 48px var(--glow); border-color: var(--brand) !important; }
        .hh-feat-card  { transition: transform .3s cubic-bezier(.4,0,.2,1), box-shadow .3s, border-color .3s; }
        .hh-feat-card:hover  { transform: translateY(-4px); box-shadow: 0 14px 36px var(--glow); border-color: var(--brand) !important; }
        .hh-cat-card   { transition: transform .3s cubic-bezier(.4,0,.2,1), box-shadow .3s; }
        .hh-cat-card:hover   { transform: translateY(-3px); box-shadow: 0 10px 28px var(--glow); }
        .hh-trust-card { transition: transform .3s cubic-bezier(.4,0,.2,1), box-shadow .3s, border-color .3s; }
        .hh-trust-card:hover { transform: translateY(-5px); box-shadow: 0 20px 48px var(--glow); border-color: var(--brand) !important; }
        .hh-nav-link { transition: color .2s; }
        .hh-nav-link:hover { color: var(--brand) !important; }
        .hh-cta-btn { transition: transform .2s, box-shadow .2s; }
        .hh-cta-btn:hover { transform: translateY(-1px); box-shadow: 0 10px 28px var(--glow) !important; }
        .hh-hero-btn-primary { transition: transform .2s, box-shadow .2s; }
        .hh-hero-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 20px 52px rgba(124,58,237,0.35) !important; }
        .hh-hero-btn-secondary { transition: border-color .2s, transform .2s; }
        .hh-hero-btn-secondary:hover { border-color: var(--brand) !important; transform: translateY(-2px); }
        .hh-footer-link { transition: color .2s; }
        .hh-footer-link:hover { color: var(--brand) !important; }

        .hh-app-banner {
          padding: 100px 24px;
          background: ${dark
            ? "linear-gradient(135deg, #09060C 0%, #100808 50%, #060C14 100%)"
            : "linear-gradient(135deg, rgba(245,158,11,0.06) 0%, #fff 35%, rgba(124,58,237,0.05) 75%, rgba(16,185,129,0.05) 100%)"
          };
          border-top: 1px solid var(--border);
        }
        .hh-app-banner-inner { max-width: 900px; margin: 0 auto; }
        .hh-app-banner-icon { display: none; }

        @media(max-width:768px) {
          .hh-main-with-sticky { padding-bottom: 180px; }
          footer { padding-bottom: calc(180px + env(safe-area-inset-bottom,0px)) !important; }
          .hh-app-banner {
            position: fixed; bottom: 0; left: 0; right: 0; z-index: 90;
            padding: 14px 16px calc(14px + env(safe-area-inset-bottom,0px));
            background: ${dark ? "rgba(6,6,12,0.97)" : "rgba(250,250,250,0.97)"} !important;
            backdrop-filter: blur(20px); border-top: 1px solid var(--border);
            box-shadow: 0 -8px 40px rgba(0,0,0,0.18); overflow: visible;
          }
          .hh-app-banner-inner { max-width: 100%; }
          .hh-app-banner-icon { display: block !important; }
          .hh-app-banner-content h2 { font-size: 18px !important; margin-bottom: 6px !important; }
          .hh-app-banner-content p { font-size: 12px !important; margin-bottom: 12px !important; }
          .hh-app-banner-badges, .hh-app-banner-qr, .hh-app-banner-divider { display: none !important; }
          .hh-app-banner-stores { gap: 10px !important; flex-direction: row !important; align-items: center !important; }
          .hh-app-banner-stores > div { flex-direction: row !important; gap: 0 !important; }
          .hh-app-banner-stores a svg, .hh-app-banner-stores button svg { width: 120px !important; height: auto !important; }
        }

        .hh-root * { transition: background-color 0.3s, border-color 0.3s, color 0.3s; }
        .hh-root img, .hh-root svg, .hh-root button { transition: none; }
      `}</style>
      <style>{`body { background: ${dark ? "#080C14" : "#FAFAFA"} !important; }`}</style>

      {mounted && <Nav logoHref={logoHref} dark={dark} onToggleDark={toggleDark} />}
      {!mounted && <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, height: 62 }} />}

      <main className="hh-main-with-sticky">
        <Hero dark={dark} />
        <HowItWorks />
        <Features />
        <Categories />
        <TrustSafety />
        <ForProviders />
        <Download dark={dark} />
      </main>
      <Footer />
      <CookieBannerHH />
    </div>
  );
}
