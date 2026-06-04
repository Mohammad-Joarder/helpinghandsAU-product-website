"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import CookieBannerHH from "@/components/CookieBannerHH";

/* ─── colour tokens ─── */
const C = {
  green: "#22C55E",
  greenDim: "#16A34A",
  teal: "#14B8A6",
  bg: "#F7F7F5",
  bgAlt: "#ffffff",
  bgCard: "#F8FAFC",
  bgCardHover: "#F1F5F9",
  border: "#E2E8F0",
  borderLight: "#EEF2F7",
  muted: "#64748B",
  text: "#0F172A",
  textSub: "#475569",
  white: "#0F172A",
};

/* ─── SVG icon library ─── */
function Icon({ d, size = 24, color = "currentColor", viewBox = "0 0 24 24", strokeWidth = 1.75 }: {
  d: string | string[]; size?: number; color?: string; viewBox?: string; strokeWidth?: number;
}) {
  const paths = Array.isArray(d) ? d : [d];
  return (
    <svg width={size} height={size} viewBox={viewBox} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths.map((p, i) => <path key={i} d={p} />)}
    </svg>
  );
}

/* Individual named icons */
const Icons = {
  clipboard: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4",
  messageCircle: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  lock: ["M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z", "M7 11V7a5 5 0 0 1 10 0v4"],
  checkCircle: "M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  userCheck: ["M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", "M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8", "M16 11l2 2 4-4"],
  star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  messageSquare: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  zap: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
  smartphone: ["M17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z", "M12 18h.01"],
  bell: ["M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9", "M13.73 21a2 2 0 0 1-3.46 0"],
  globe: ["M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z", "M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"],
  wallet: ["M21 12V7H5a2 2 0 0 1 0-4h14v4", "M3 5v14a2 2 0 0 0 2 2h16v-5H5a2 2 0 0 1 0-4h16", "M18 12h.01"],
  home: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10",
  wrench: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
  truck: ["M1 3h15v13H1z", "M16 8h4l3 3v5h-7V8z", "M5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z", "M18.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"],
  monitor: ["M20 3H4a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z", "M8 21h8M12 17v4"],
  camera: ["M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z", "M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"],
  sparkles: "M9.5 2 11 6.5l4.5 1.5-4.5 1.5L9.5 14 8 9.5 3.5 8 8 6.5 9.5 2zM18 12l1.5 4 4 1.5-4 1.5L18 23l-1.5-4.5L12 17l4.5-1.5L18 12z",
  users: ["M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2", "M23 21v-2a4 4 0 0 0-3-3.87", "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", "M16 3.13a4 4 0 0 1 0 7.75"],
  briefcase: ["M20 7H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z", "M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"],
  creditCard: ["M1 4h22v16H1z", "M1 10h22"],
  broom: "M3 21 12 12M15 3l6 6-8.5 8.5c-.83.83-2.17.83-3 0L8 16l7-13zM9.5 6.5 17 14",
  baby: ["M9 12h.01M15 12h.01", "M8 20v2h8v-2", "M12 2a5 5 0 0 1 5 5v3a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z", "M2 14c0-2 2-3 3-3h14c1 0 3 1 3 3"],
  palette: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 8 6.5 8 8 8.67 8 9.5 7.33 11 6.5 11zm3-4C8.67 7 8 6.33 8 5.5S8.67 4 9.5 4s1.5.67 1.5 1.5S10.33 7 9.5 7zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 4 14.5 4s1.5.67 1.5 1.5S15.33 7 14.5 7zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 8 17.5 8s1.5.67 1.5 1.5S18.33 11 17.5 11z",
  creditCardCheck: ["M1 4h22v16H1z", "M1 10h22", "M15 15l2 2 4-4"],
  shieldCheck: ["M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", "M9 12l2 2 4-4"],
  award: ["M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z", "M8.21 13.89L7 23l5-3 5 3-1.21-9.12"],
  trendingUp: "M23 6l-9.5 9.5-5-5L1 18M17 6h6v6",
  check: "M20 6 9 17l-5-5",
};

/* ─── App Store Badges ─── */
function AppleStoreBadge({ width = 160 }: { width?: number }) {
  return (
    <svg viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg" width={width} aria-label="Download on the App Store">
      <rect width="160" height="50" rx="9" fill="#000000"/>
      <rect x="0.5" y="0.5" width="159" height="49" rx="8.5" stroke="rgba(255,255,255,0.15)"/>
      {/* Apple logo — official proportions */}
      <path d="M22.5 22.8c.03-2.74 2.24-4.06 2.34-4.13-1.27-1.86-3.25-2.11-3.96-2.14-1.69-.17-3.29.99-4.15.99-.86 0-2.16-.97-3.56-.94-1.83.03-3.51 1.06-4.46 2.68-1.9 3.29-.49 8.17 1.37 10.84.91 1.3 1.99 2.77 3.41 2.72 1.37-.05 1.89-.88 3.55-.88 1.65 0 2.11.88 3.55.86 1.47-.02 2.41-1.34 3.3-2.65 1.05-1.51 1.48-2.97 1.5-3.05-.03-.02-2.87-1.1-2.89-4.3z" fill="white"/>
      <path d="M19.77 14.88c.75-.92 1.26-2.19 1.11-3.47-1.07.04-2.37.72-3.14 1.62-.69.79-1.25 2.08-1.03 3.3 1.17.09 2.31-.59 3.06-1.45z" fill="white"/>
      {/* Text */}
      <text x="35" y="20" fontFamily="-apple-system, Helvetica Neue, sans-serif" fontSize="8" fill="rgba(255,255,255,0.75)" letterSpacing="0.5">Download on the</text>
      <text x="35" y="35" fontFamily="-apple-system, Helvetica Neue, sans-serif" fontSize="17" fontWeight="600" fill="white" letterSpacing="-0.4">App Store</text>
    </svg>
  );
}

function GooglePlayBadge({ width = 180 }: { width?: number }) {
  return (
    <svg viewBox="0 0 180 50" fill="none" xmlns="http://www.w3.org/2000/svg" width={width} aria-label="Get it on Google Play">
      <rect width="180" height="50" rx="9" fill="#000000"/>
      <rect x="0.5" y="0.5" width="179" height="49" rx="8.5" stroke="rgba(255,255,255,0.15)"/>
      {/* Google Play triangle — official 4-colour design */}
      <path d="M12 16.5C11.5 16.8 11.5 17.6 11.5 17.6L11.5 33.4C11.5 33.4 11.5 34.2 12 34.5L12.1 34.6L21 25.15V25L12.1 16.4Z" fill="#00D2FF"/>
      <path d="M24 22.4L21 25.15L12 16.5L12.1 16.4C12.5 16.1 13 16.1 13.4 16.4L24 22.4Z" fill="#5FE06A"/>
      <path d="M24 27.6L13.4 33.6C13 33.9 12.5 33.9 12.1 33.6L12 33.5L21 24.85Z" fill="#FF3D51"/>
      <path d="M24 22.4L13.4 16.4C13 16.1 12.5 16.1 12.1 16.4L21 25L24 27.6L27.5 25.78C28.2 25.42 28.2 24.58 27.5 24.22Z" fill="#FFBC00"/>
      {/* Text */}
      <text x="38" y="20" fontFamily="-apple-system, Helvetica Neue, sans-serif" fontSize="8" fill="rgba(255,255,255,0.75)" letterSpacing="0.8">GET IT ON</text>
      <text x="38" y="35" fontFamily="-apple-system, Helvetica Neue, sans-serif" fontSize="17" fontWeight="600" fill="white" letterSpacing="-0.4">Google Play</text>
    </svg>
  );
}

/* ══════════════════════════════════════════════
   NAV
══════════════════════════════════════════════ */
function Nav({ logoHref }: { logoHref: string }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Categories", href: "#categories" },
    { label: "Trust & Safety", href: "#trust-safety" },
    { label: "For Providers", href: "#for-providers" },
  ];

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? `1px solid ${C.border}` : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <a href={logoHref} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <Image
            src="/icon-helpinghandsau.png"
            alt="HelpingHandsAU"
            width={36}
            height={36}
            style={{ borderRadius: 10, display: "block", flexShrink: 0 }}
          />
          <span style={{ fontFamily: "var(--font-jakarta)", fontWeight: 700, fontSize: 18, color: C.text, letterSpacing: "-0.03em" }}>
            HelpingHands<span style={{ color: C.green }}>AU</span>
          </span>
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="hh-hidden-mobile">
          {links.map(l => (
            <a key={l.label} href={l.href}
              onClick={e => { e.preventDefault(); document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" }); }}
              className="hh-nav-link"
              style={{ color: C.muted, textDecoration: "none", fontSize: 14, fontWeight: 500 }}>
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <a href="#how-it-works"
            onClick={e => { e.preventDefault(); document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" }); }}
            title="Coming soon"
            className="hh-cta-btn"
            style={{
              background: `linear-gradient(135deg, ${C.green}, ${C.teal})`,
              color: "#000", fontWeight: 700, fontSize: 14, padding: "10px 20px",
              borderRadius: 10, textDecoration: "none", letterSpacing: "-0.01em",
            }}>
            Post a Task
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ══════════════════════════════════════════════
   HERO
══════════════════════════════════════════════ */
function Hero() {
  return (
    <section style={{
      minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center",
      alignItems: "center", textAlign: "center", padding: "120px 24px 80px",
      background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34,197,94,0.12) 0%, transparent 70%),
                   radial-gradient(ellipse 60% 40% at 80% 50%, rgba(20,184,166,0.08) 0%, transparent 60%),
                   #F7F7F5`,
      position: "relative", overflow: "hidden", maxWidth: "100vw",
    }}>
      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.03,
        backgroundImage: `linear-gradient(${C.text} 1px, transparent 1px), linear-gradient(90deg, ${C.text} 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }} />
      <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: `radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)`, top: -200, left: "50%", transform: "translateX(-50%)", pointerEvents: "none" }} />

      <div style={{ position: "relative", maxWidth: 900, zIndex: 1 }}>
        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(34,197,94,0.1)", border: `1px solid rgba(34,197,94,0.2)`,
          borderRadius: 100, padding: "6px 16px", marginBottom: 32,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.green, display: "inline-block", boxShadow: `0 0 8px ${C.green}` }} />
          <span style={{ fontSize: 13, fontWeight: 600, color: C.green, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Australia&rsquo;s #1 Services Marketplace
          </span>
        </div>

        <h1 style={{
          fontFamily: "var(--font-jakarta)", fontWeight: 800, letterSpacing: "-0.04em",
          lineHeight: 1.05, color: C.text, marginBottom: 24,
          fontSize: "clamp(44px, 7vw, 88px)",
        }}>
          Get Any Task Done —<br />
          <span style={{ background: `linear-gradient(135deg, ${C.green} 0%, ${C.teal} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Fast, Safe & Affordable
          </span>
        </h1>

        <p style={{ fontSize: "clamp(17px, 2vw, 22px)", color: C.muted, maxWidth: 620, margin: "0 auto 48px", lineHeight: 1.65, fontWeight: 400 }}>
          Post your task in minutes. Receive competitive bids from verified local providers.
          Funds held in escrow — you only pay when the job is done perfectly.
        </p>

        {/* CTA row */}
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#how-it-works"
            onClick={e => { e.preventDefault(); document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" }); }}
            title="Coming soon"
            className="hh-hero-btn-primary"
            style={{
              background: `linear-gradient(135deg, ${C.green}, ${C.teal})`,
              color: "#000", fontWeight: 800, fontSize: 16,
              padding: "16px 36px", borderRadius: 14, textDecoration: "none",
              letterSpacing: "-0.02em", boxShadow: `0 0 40px rgba(34,197,94,0.3)`,
            }}>
            Post a Task — It&rsquo;s Free
          </a>
          <a href="#categories"
            onClick={e => { e.preventDefault(); document.querySelector("#categories")?.scrollIntoView({ behavior: "smooth" }); }}
            className="hh-hero-btn-secondary"
            style={{
              background: "transparent", color: C.text, fontWeight: 700, fontSize: 16,
              padding: "16px 36px", borderRadius: 14, textDecoration: "none",
              border: `1px solid ${C.border}`, letterSpacing: "-0.02em",
            }}>
            Browse Tasks →
          </a>
        </div>

        {/* Trust bar */}
        <div style={{ display: "flex", gap: 32, justifyContent: "center", marginTop: 64, flexWrap: "wrap" }}>
          {[
            { stat: "50K+", label: "Tasks Completed" },
            { stat: "12K+", label: "Verified Providers" },
            { stat: "4.9★", label: "Average Rating" },
            { stat: "100%", label: "Escrow Protected" },
          ].map(({ stat, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-jakarta)", fontWeight: 800, fontSize: 28, color: C.text, letterSpacing: "-0.04em" }}>{stat}</div>
              <div style={{ fontSize: 13, color: C.muted, fontWeight: 500, marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   HOW IT WORKS
══════════════════════════════════════════════ */
function HowItWorks() {
  const steps = [
    {
      n: "01",
      icon: <Icon d={Icons.clipboard} size={28} color={C.green} />,
      title: "Post Your Task",
      desc: "Describe what you need done, set your budget, and choose a deadline. Takes under 2 minutes.",
      color: C.green,
    },
    {
      n: "02",
      icon: <Icon d={Icons.messageCircle} size={28} color={C.teal} />,
      title: "Receive Bids",
      desc: "Verified local providers review your task and send competitive bids with their approach and price.",
      color: C.teal,
    },
    {
      n: "03",
      icon: <Icon d={Icons.lock} size={28} color="#A78BFA" />,
      title: "Hire & Secure Funds",
      desc: "Accept the best bid. Your payment is held safely in escrow — the provider can't access it until you approve.",
      color: "#A78BFA",
    },
    {
      n: "04",
      icon: <Icon d={Icons.checkCircle} size={28} color="#F59E0B" />,
      title: "Confirm & Release",
      desc: "Task done? Approve the work and funds are instantly released. Raise a dispute if anything isn't right.",
      color: "#F59E0B",
    },
  ];

  return (
    <section id="how-it-works" style={{ padding: "120px 24px", background: "#ffffff", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel color={C.green}>Simple Process</SectionLabel>
        <h2 style={h2Style}>How HelpingHandsAU Works</h2>
        <p style={subStyle}>Four simple steps between you and a completed task.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24, marginTop: 64 }}>
          {steps.map((s) => (
            <div key={s.n} className="hh-step-card" style={{
              background: "#F8FAFC", border: "1px solid #E2E8F0",
              borderRadius: 20, padding: 32, position: "relative", overflow: "hidden",
            }}>
              <div style={{
                width: 56, height: 56, borderRadius: 14,
                background: `${s.color}12`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20, border: `1px solid ${s.color}20`,
              }}>{s.icon}</div>
              <div style={{
                position: "absolute", top: 24, right: 24,
                fontSize: 64, fontWeight: 900, color: "rgba(0,0,0,0.04)",
                fontFamily: "var(--font-jakarta)", lineHeight: 1,
              }}>{s.n}</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "#0F172A", marginBottom: 12, letterSpacing: "-0.02em" }}>{s.title}</h3>
              <p style={{ fontSize: 15, color: "#64748B", lineHeight: 1.7 }}>{s.desc}</p>
              <div style={{ width: 40, height: 3, borderRadius: 4, background: s.color, marginTop: 20 }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   FEATURES
══════════════════════════════════════════════ */
function Features() {
  const feats = [
    { icon: <Icon d={Icons.shieldCheck} size={24} color={C.green} />, iconColor: C.green, title: "Escrow Protection", desc: "Every payment is held securely until you confirm the job is done. Zero risk of losing your money." },
    { icon: <Icon d={Icons.userCheck} size={24} color={C.teal} />, iconColor: C.teal, title: "Verified Providers", desc: "All service providers undergo identity verification and background checks before joining the platform." },
    { icon: <Icon d={Icons.star} size={24} color="#F59E0B" />, iconColor: "#F59E0B", title: "Ratings & Reviews", desc: "Transparent feedback system so you always know who you're hiring — and providers build their reputation." },
    { icon: <Icon d={Icons.messageSquare} size={24} color="#A78BFA" />, iconColor: "#A78BFA", title: "Built-in Messaging", desc: "Communicate directly with providers, share files and photos, all within the secure HelpingHandsAU chat." },
    { icon: <Icon d={Icons.zap} size={24} color="#F97316" />, iconColor: "#F97316", title: "Instant Bids", desc: "Receive bids from multiple providers within minutes of posting. Compare and choose the best fit." },
    { icon: <Icon d={Icons.smartphone} size={24} color="#06B6D4" />, iconColor: "#06B6D4", title: "Mobile First", desc: "Manage tasks, bids, chat, and payments seamlessly on iOS or Android — wherever you are." },
    { icon: <Icon d={Icons.bell} size={24} color="#EC4899" />, iconColor: "#EC4899", title: "Smart Notifications", desc: "Action Centre keeps you on top of bids, messages, task updates, and payment confirmations in real time." },
    { icon: <Icon d={Icons.globe} size={24} color="#22C55E" />, iconColor: "#22C55E", title: "Australian Made", desc: "Built for Australia — AUD payments, Australian providers, local support. GST compliant." },
    { icon: <Icon d={Icons.wallet} size={24} color="#14B8A6" />, iconColor: "#14B8A6", title: "Wallet & Payouts", desc: "Providers get paid via Stripe Connect. Takers top up a wallet. Fast, reliable, transparent." },
  ];

  return (
    <section id="features" style={{ padding: "120px 24px", background: C.bg, position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel color={C.teal}>Platform Features</SectionLabel>
        <h2 style={{ ...h2Style, color: C.text }}>Everything You Need to Get Things Done</h2>
        <p style={{ ...subStyle, color: C.muted }}>Built with enterprise-grade security and a consumer-grade experience.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, marginTop: 64 }}>
          {feats.map(f => (
            <div key={f.title} className="hh-feat-card" style={{
              background: C.bgCard, border: `1px solid ${C.border}`,
              borderRadius: 16, padding: "28px 28px 28px",
              cursor: "default",
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: `${f.iconColor}15`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 18, border: `1px solid ${f.iconColor}20`,
              }}>{f.icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: C.text, marginBottom: 10, letterSpacing: "-0.02em" }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   CATEGORIES
══════════════════════════════════════════════ */
function Categories() {
  const cats = [
    { icon: <Icon d={Icons.home} size={22} color="#22C55E" />, name: "Home & Garden", tasks: "8,400+ tasks", color: "#22C55E" },
    { icon: <Icon d={Icons.wrench} size={22} color="#3B82F6" />, name: "Repairs & Trades", tasks: "6,200+ tasks", color: "#3B82F6" },
    { icon: <Icon d={Icons.truck} size={22} color="#F59E0B" />, name: "Removals & Delivery", tasks: "4,800+ tasks", color: "#F59E0B" },
    { icon: <Icon d={Icons.monitor} size={22} color="#A78BFA" />, name: "Tech & IT", tasks: "3,500+ tasks", color: "#A78BFA" },
    { icon: <Icon d={Icons.camera} size={22} color="#EC4899" />, name: "Photography & Video", tasks: "2,100+ tasks", color: "#EC4899" },
    { icon: <Icon d={Icons.sparkles} size={22} color="#14B8A6" />, name: "Cleaning", tasks: "5,600+ tasks", color: "#14B8A6" },
    { icon: <Icon d={Icons.palette} size={22} color="#F97316" viewBox="0 0 24 24" strokeWidth={0} />, name: "Design & Creative", tasks: "1,900+ tasks", color: "#F97316" },
    { icon: <Icon d={Icons.users} size={22} color="#06B6D4" />, name: "Childcare & Tutoring", tasks: "2,700+ tasks", color: "#06B6D4" },
  ];

  return (
    <section id="categories" style={{ padding: "120px 24px", background: "#ffffff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel color={C.green}>Popular Categories</SectionLabel>
        <h2 style={h2Style}>What Can We Help You With?</h2>
        <p style={subStyle}>Thousands of tasks posted daily across every service category imaginable.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16, marginTop: 56 }}>
          {cats.map(c => (
            <div key={c.name} className="hh-cat-card" style={{
              background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 16,
              padding: "24px 20px", display: "flex", alignItems: "center", gap: 14,
              cursor: "default",
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: `${c.color}15`,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, border: `1px solid ${c.color}20`,
              }}>{c.icon}</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#0F172A", letterSpacing: "-0.01em" }}>{c.name}</div>
                <div style={{ fontSize: 12, color: "#94A3B8", marginTop: 2, fontWeight: 500 }}>{c.tasks}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   TRUST & SAFETY
══════════════════════════════════════════════ */
function TrustSafety() {
  const pillars = [
    {
      icon: <Icon d={Icons.creditCard} size={28} color="#A78BFA" />,
      iconColor: "#A78BFA",
      title: "Stripe Escrow",
      desc: "Payments are held by Stripe — not HelpingHandsAU — until you confirm the job is complete. Industry-standard financial security.",
      badge: "PCI-DSS Compliant",
    },
    {
      icon: <Icon d={Icons.userCheck} size={28} color="#A78BFA" />,
      iconColor: "#A78BFA",
      title: "Identity Verified",
      desc: "Every provider submits ID verification before they can accept tasks. You always know who's coming to your door.",
      badge: "ID Checked",
    },
    {
      icon: <Icon d={Icons.award} size={28} color="#A78BFA" />,
      iconColor: "#A78BFA",
      title: "Dispute Resolution",
      desc: "If something goes wrong, our trained dispute team steps in. Evidence-based resolution with fair outcomes for both parties.",
      badge: "24/7 Protection",
    },
    {
      icon: <Icon d={Icons.star} size={28} color="#A78BFA" />,
      iconColor: "#A78BFA",
      title: "Ratings System",
      desc: "Every completed task generates a rating. Poor performers are removed. Excellent providers rise to the top.",
      badge: "4.9★ Average",
    },
  ];

  return (
    <section id="trust-safety" style={{
      padding: "120px 24px",
      background: `linear-gradient(180deg, #F0F4FF 0%, #EEF2FF 100%)`,
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel color="#A78BFA">Trust & Safety</SectionLabel>
        <h2 style={{ ...h2Style, color: C.text }}>Your Safety is Non-Negotiable</h2>
        <p style={{ ...subStyle, color: C.muted }}>
          We built every feature around one principle: you should be able to hire anyone on HelpingHandsAU with complete confidence.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24, marginTop: 64 }}>
          {pillars.map(p => (
            <div key={p.title} className="hh-trust-card" style={{
              background: "#ffffff", border: `1px solid ${C.border}`,
              borderRadius: 20, padding: 36,
            }}>
              <div style={{
                width: 56, height: 56, borderRadius: 14,
                background: "rgba(167,139,250,0.12)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20, border: "1px solid rgba(167,139,250,0.2)",
              }}>{p.icon}</div>
              <div style={{
                display: "inline-block", background: "rgba(167,139,250,0.15)", color: "#A78BFA",
                fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 6,
                letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 16,
              }}>{p.badge}</div>
              <h3 style={{ fontSize: 19, fontWeight: 700, color: C.text, marginBottom: 12, letterSpacing: "-0.02em" }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.75 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   FOR PROVIDERS
══════════════════════════════════════════════ */
function ForProviders() {
  const perks = [
    "Browse hundreds of new tasks every day in your area",
    "Set your own rates — you control what you earn",
    "Build a verified profile with reviews and ratings",
    "Get paid fast via Stripe Connect — direct to your bank",
    "Manage bids, conversations, and jobs from one app",
    "Grow your business with zero upfront cost to join",
  ];

  return (
    <section id="for-providers" style={{ padding: "120px 24px", background: "#ffffff" }}>
      <div className="hh-for-providers-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        {/* Left */}
        <div>
          <SectionLabel color={C.green} align="left">For Service Providers</SectionLabel>
          <h2 style={{ ...h2Style, textAlign: "left" }}>
            Grow Your Business.<br />
            <span style={{ color: C.greenDim }}>On Your Terms.</span>
          </h2>
          <p style={{ fontSize: 17, color: "#475569", lineHeight: 1.75, marginBottom: 36 }}>
            Join thousands of skilled Australians earning on HelpingHandsAU. Browse tasks, place bids, and build a client base — all without the overhead of running your own marketing.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px", display: "flex", flexDirection: "column", gap: 14 }}>
            {perks.map(p => (
              <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <div style={{
                  width: 20, height: 20, borderRadius: "50%", background: `${C.green}20`,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1,
                }}>
                  <Icon d={Icons.check} size={12} color={C.green} strokeWidth={2.5} />
                </div>
                <span style={{ fontSize: 15, color: "#374151" }}>{p}</span>
              </li>
            ))}
          </ul>
          <a href="#how-it-works"
            onClick={e => { e.preventDefault(); document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" }); }}
            title="Coming soon"
            style={{
              display: "inline-block",
              background: `linear-gradient(135deg, ${C.green}, ${C.teal})`,
              color: "#000", fontWeight: 800, fontSize: 15,
              padding: "14px 32px", borderRadius: 12, textDecoration: "none",
            }}>
            Become a Provider — Free
          </a>
        </div>

        {/* Right — earnings card (keep dark as product mockup) */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{
            background: "#0D1117", borderRadius: 24, padding: 40, width: "100%", maxWidth: 400,
            border: `1px solid ${C.border}`, boxShadow: "0 40px 100px rgba(0,0,0,0.3)",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <span style={{ fontSize: 14, color: C.muted, fontWeight: 600 }}>Monthly Earnings</span>
              <span style={{ fontSize: 12, background: "rgba(34,197,94,0.15)", color: C.green, padding: "4px 10px", borderRadius: 6, fontWeight: 700 }}>+24% this month</span>
            </div>
            <div style={{ fontSize: 52, fontWeight: 800, color: "#F0F6FC", fontFamily: "var(--font-jakarta)", letterSpacing: "-0.04em", marginBottom: 8 }}>
              $4,280
            </div>
            <div style={{ fontSize: 14, color: "#8B949E", marginBottom: 32 }}>18 tasks completed · 5.0★</div>

            {[
              { task: "Bathroom renovation", amt: "$480", date: "Today" },
              { task: "Office furniture assembly", amt: "$120", date: "Yesterday" },
              { task: "Garden landscaping", amt: "$650", date: "3 days ago" },
              { task: "Appliance installation", amt: "$95", date: "5 days ago" },
            ].map(t => (
              <div key={t.task} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "14px 0", borderBottom: `1px solid #21262D`,
              }}>
                <div>
                  <div style={{ fontSize: 14, color: "#F0F6FC", fontWeight: 600 }}>{t.task}</div>
                  <div style={{ fontSize: 12, color: "#8B949E", marginTop: 2 }}>{t.date}</div>
                </div>
                <div style={{ fontSize: 15, color: C.green, fontWeight: 700 }}>{t.amt}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   TESTIMONIALS
══════════════════════════════════════════════ */
function Testimonials() {
  const reviews = [
    { name: "Sarah M.", role: "Task Poster · Sydney", rating: 5, text: "I needed my pergola built in 3 days. Posted the task, had 7 bids within an hour, hired Jake — incredible work. Escrow made me feel totally safe.", avatar: "SM" },
    { name: "David K.", role: "Service Provider · Melbourne", rating: 5, text: "Been on HelpingHandsAU for 8 months. Replaced my entire client base with better-paying, more reliable work. My rating speaks for itself — 4.98 from 163 reviews.", avatar: "DK" },
    { name: "Priya R.", role: "Task Poster · Brisbane", rating: 5, text: "Fixed my leaking roof, deep cleaned the house, and got my garden sorted — all through HelpingHandsAU. The chat and payment system is better than anything I've used.", avatar: "PR" },
    { name: "Tom W.", role: "Service Provider · Perth", rating: 5, text: "The Stripe Connect payout is seamless. I finish a job, taker approves, and money's in my account same day. This is how it should work.", avatar: "TW" },
    { name: "Angela C.", role: "Task Poster · Adelaide", rating: 5, text: "Raised a dispute once when a provider didn't show. HelpingHandsAU resolved it in 24 hours and I got a full refund. Trust is everything and they deliver.", avatar: "AC" },
    { name: "Marcus B.", role: "Service Provider · Gold Coast", rating: 5, text: "The Action Centre notifications are amazing — I never miss a new task in my area. Earned $12K in my first 3 months just on weekends.", avatar: "MB" },
  ];

  return (
    <section id="testimonials" style={{ padding: "120px 24px", background: "#F7F7F5" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel color={C.green}>Real Stories</SectionLabel>
        <h2 style={{ ...h2Style, color: C.text }}>What Australians Are Saying</h2>
        <p style={{ ...subStyle, color: C.muted }}>From first task to loyal platform members — real results, real people.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 20, marginTop: 64 }}>
          {reviews.map(r => (
            <div key={r.name} className="hh-review-card" style={{
              background: "#ffffff", border: `1px solid ${C.border}`,
              borderRadius: 20, padding: 28,
            }}>
              {/* Star rating */}
              <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
                {Array.from({ length: r.rating }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.75, marginBottom: 20, fontStyle: "italic" }}>
                &ldquo;{r.text}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${C.green}, ${C.teal})`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 800, color: "#000", flexShrink: 0,
                }}>{r.avatar}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: C.text }}>{r.name}</div>
                  <div style={{ fontSize: 12, color: C.muted }}>{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   APP DOWNLOAD
══════════════════════════════════════════════ */
function AppDownload() {
  return (
    <section id="download" style={{
      padding: "120px 24px",
      background: "linear-gradient(135deg, #F0FDF4 0%, #ECFDF5 50%, #F0FDFA 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse 50% 80% at 50% 50%, rgba(34,197,94,0.06) 0%, transparent 70%)`,
      }} />
      <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative" }}>
        {/* App icon */}
        <div style={{ margin: "0 auto 32px", width: 80, height: 80 }}>
          <Image
            src="/icon-helpinghandsau.png"
            alt="HelpingHandsAU"
            width={80}
            height={80}
            style={{ borderRadius: 22, display: "block", boxShadow: `0 0 60px rgba(34,197,94,0.3)` }}
          />
        </div>

        <h2 style={{ fontFamily: "var(--font-jakarta)", fontWeight: 800, fontSize: "clamp(32px, 5vw, 54px)", color: C.text, letterSpacing: "-0.04em", marginBottom: 20 }}>
          Download HelpingHandsAU
        </h2>
        <p style={{ fontSize: 18, color: C.muted, lineHeight: 1.7, marginBottom: 56 }}>
          Available on iOS and Android. Post tasks, place bids, chat, pay — everything in your pocket.
        </p>

        {/* Store badges + QR codes */}
        <div style={{ display: "flex", gap: 40, justifyContent: "center", flexWrap: "wrap", alignItems: "flex-start" }}>
          {/* App Store */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            <div style={{ display: "block" }}>
              <AppleStoreBadge width={160} />
            </div>
            {/* QR Code */}
            <div style={{
              background: "#fff", borderRadius: 16, padding: 12,
              boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
              border: `2px solid ${C.green}40`,
            }}>
              <Image src="/qr-apple.png" alt="Scan to download HelpingHandsAU on the App Store" width={120} height={120} style={{ display: "block", borderRadius: 8 }} />
            </div>
            <span style={{ fontSize: 11, color: C.muted, fontWeight: 500 }}>Scan for iOS</span>
          </div>

          {/* Divider */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: 12 }}>
            <div style={{ width: 1, height: 180, background: `linear-gradient(to bottom, transparent, ${C.border}, transparent)` }} />
          </div>

          {/* Google Play */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            <div style={{ display: "block" }}>
              <GooglePlayBadge width={180} />
            </div>
            {/* QR Code */}
            <div style={{
              background: "#fff", borderRadius: 16, padding: 12,
              boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
              border: `2px solid ${C.green}40`,
            }}>
              <Image src="/qr-android.png" alt="Scan to download HelpingHandsAU on Google Play" width={120} height={120} style={{ display: "block", borderRadius: 8 }} />
            </div>
            <span style={{ fontSize: 11, color: C.muted, fontWeight: 500 }}>Scan for Android</span>
          </div>
        </div>

        {/* Trust line */}
        <div style={{ marginTop: 48, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.green} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          <span style={{ fontSize: 13, color: C.muted }}>Free to download · Australian servers · Privacy Act 1988 compliant</span>
        </div>
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
    <footer style={{ background: "#090D13", borderTop: `1px solid ${C.border}`, padding: "64px 24px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="hh-footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 64 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <Image src="/icon-helpinghandsau.png" alt="HelpingHandsAU" width={32} height={32} style={{ borderRadius: 8, display: "block", flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-jakarta)", fontWeight: 700, fontSize: 16, color: "#F0F6FC" }}>HelpingHands<span style={{ color: C.green }}>AU</span></span>
            </div>
            <p style={{ fontSize: 14, color: "#8B949E", lineHeight: 1.75, maxWidth: 280 }}>
              Australia&rsquo;s trusted marketplace connecting people who need tasks done with skilled local providers. Safe, fast, and affordable.
            </p>
          </div>
          {[
            { title: "Platform", links: [
              { label: "Post a Task", href: "#how-it-works" },
              { label: "Browse Tasks", href: "#categories" },
              { label: "How It Works", href: "#how-it-works" },
              { label: "For Providers", href: "#for-providers" },
            ]},
            { title: "For Providers", links: [
              { label: "Join as Provider", href: "#for-providers" },
              { label: "How It Works", href: "#how-it-works" },
              { label: "Earnings", href: "#for-providers" },
              { label: "Trust & Safety", href: "#trust-safety" },
            ]},
            { title: "Legal", links: legalLinks },
          ].map(col => (
            <div key={col.title}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: "#F0F6FC", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 20 }}>{col.title}</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {col.links.map(l => (
                  <li key={l.label}>
                    <a href={l.href}
                      onClick={l.href.startsWith("#") ? e => { e.preventDefault(); document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" }); } : undefined}
                      className="hh-footer-link"
                      style={{ fontSize: 14, color: "#8B949E", textDecoration: "none" }}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: `1px solid #21262D`, paddingTop: 32, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <p style={{ fontSize: 13, color: "#8B949E" }}>© 2026 HelpingHandsAU Pty Ltd. All rights reserved. ABN 94 693 919 185</p>
          <p style={{ fontSize: 13, color: "#8B949E" }}>Made with care in Australia 🇦🇺</p>
        </div>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════════════
   SHARED ATOMS
══════════════════════════════════════════════ */
function SectionLabel({ color, children, align = "center" }: { color: string; children: React.ReactNode; align?: "center" | "left" }) {
  return (
    <div style={{ textAlign: align, marginBottom: 16 }}>
      <span style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
        color, background: `${color}18`, padding: "6px 14px", borderRadius: 100,
        border: `1px solid ${color}30`,
      }}>{children}</span>
    </div>
  );
}

const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-jakarta)", fontWeight: 800, letterSpacing: "-0.04em",
  fontSize: "clamp(32px, 4vw, 52px)", color: "#0F172A", lineHeight: 1.1,
  marginBottom: 16, textAlign: "center",
};
const subStyle: React.CSSProperties = {
  fontSize: 18, color: "#475569", textAlign: "center", maxWidth: 560, margin: "0 auto", lineHeight: 1.7,
};

/* ══════════════════════════════════════════════
   PAGE EXPORT
══════════════════════════════════════════════ */
export function HelpingHandsAUMarketingPage({ logoHref }: { logoHref: string }) {
  return (
    <>
      <style>{`
        .hh-hidden-mobile { display: flex; }
        @media(max-width:768px){ .hh-hidden-mobile { display: none !important; } }
        *, *::before, *::after { box-sizing: border-box; }
        html { overflow-x: hidden; }
        body { overflow-x: hidden; max-width: 100vw; }
        section, nav, footer { overflow: hidden; }
        @media(max-width:900px){ .hh-for-providers-grid { grid-template-columns: 1fr !important; } }
        @media(max-width:900px){ .hh-footer-grid { grid-template-columns: 1fr 1fr !important; } }

        .hh-step-card { transition: transform 0.3s, box-shadow 0.3s; }
        .hh-step-card:hover { transform: translateY(-6px); box-shadow: 0 20px 60px rgba(0,0,0,0.1); }
        .hh-feat-card { transition: transform 0.3s; }
        .hh-feat-card:hover { transform: translateY(-4px); }
        .hh-cat-card { transition: transform 0.2s, box-shadow 0.2s; }
        .hh-cat-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.1); }
        .hh-trust-card { transition: border-color 0.3s, background 0.3s; }
        .hh-trust-card:hover { border-color: rgba(167,139,250,0.4) !important; background: rgba(167,139,250,0.04) !important; }
        .hh-review-card { transition: border-color 0.3s, transform 0.3s; }
        .hh-review-card:hover { transform: translateY(-4px); border-color: rgba(34,197,94,0.25) !important; }
        .hh-nav-link { transition: color 0.2s; }
        .hh-nav-link:hover { color: #0F172A !important; }
        .hh-cta-btn { transition: opacity 0.2s; }
        .hh-cta-btn:hover { opacity: 0.85; }
        .hh-hero-btn-primary { transition: transform 0.2s, box-shadow 0.2s; }
        .hh-hero-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 50px rgba(34,197,94,0.4) !important; }
        .hh-hero-btn-secondary { transition: border-color 0.2s, background 0.2s; }
        .hh-hero-btn-secondary:hover { border-color: #22C55E !important; background: rgba(34,197,94,0.05) !important; }
        .hh-footer-link { transition: color 0.2s; }
        .hh-footer-link:hover { color: #ffffff !important; }
      `}</style>
      <Nav logoHref={logoHref} />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Categories />
        <TrustSafety />
        <ForProviders />
        <Testimonials />
        <AppDownload />
      </main>
      <Footer />
      <CookieBannerHH />
    </>
  );
}
