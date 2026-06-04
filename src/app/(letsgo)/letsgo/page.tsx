"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import CookieBannerLG from "@/components/CookieBannerLG";

/* ─── colour tokens ─── */
const C = {
  violet: "#7C3AED",
  violetDim: "#6D28D9",
  violetLight: "#8B5CF6",
  orange: "#E8511A",
  orangeLight: "#F97316",
  bg: "#F8F7FF",
  bgAlt: "#ffffff",
  bgCard: "#F5F3FF",
  bgCardHover: "#EDE9FE",
  border: "#E2E8F0",
  borderLight: "#EEF2F7",
  muted: "#64748B",
  text: "#0F172A",
  textSub: "#475569",
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

const Icons = {
  mapPin: ["M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z", "M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"],
  carFront: ["M14 16H9m10 0h3v-3.15a2 2 0 0 0-1.588-1.962l-3.5-.857A2 2 0 0 0 15.485 10H8.515a2 2 0 0 0-1.427.59l-3.5.857A2 2 0 0 0 2 13.85V16h3", "M5 16a2 2 0 1 0 4 0 2 2 0 0 0-4 0z", "M15 16a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"],
  navigation: "M3 11l19-9-9 19-2-8-8-2z",
  shieldCheck: ["M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", "M9 12l2 2 4-4"],
  star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  zap: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
  smartphone: ["M17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z", "M12 18h.01"],
  creditCard: ["M1 4h22v16H1z", "M1 10h22"],
  users: ["M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2", "M23 21v-2a4 4 0 0 0-3-3.87", "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", "M16 3.13a4 4 0 0 1 0 7.75"],
  share2: ["M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", "M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", "M18 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", "M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"],
  globe: ["M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z", "M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"],
  bell: ["M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9", "M13.73 21a2 2 0 0 1-3.46 0"],
  trendingUp: "M23 6l-9.5 9.5-5-5L1 18M17 6h6v6",
  check: "M20 6 9 17l-5-5",
  clock: ["M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z", "M12 6v6l4 2"],
  award: ["M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z", "M8.21 13.89L7 23l5-3 5 3-1.21-9.12"],
  userCheck: ["M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", "M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8", "M16 11l2 2 4-4"],
  dollarSign: ["M12 1v22", "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"],
  mapPinOff: ["M12.75 3.03v.28c0 .134.095.246.224.274l3.472.694a.5.5 0 0 1 .253.822l-3.35 3.358", "M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 7.5 5.247", "M2 2l20 20"],
};

/* ─── App Store Badges ─── */
function AppleStoreBadge({ width = 160 }: { width?: number }) {
  return (
    <svg viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg" width={width} aria-label="Download on the App Store">
      <rect width="160" height="50" rx="9" fill="#000000"/>
      <rect x="0.5" y="0.5" width="159" height="49" rx="8.5" stroke="rgba(255,255,255,0.15)"/>
      <path d="M22.5 22.8c.03-2.74 2.24-4.06 2.34-4.13-1.27-1.86-3.25-2.11-3.96-2.14-1.69-.17-3.29.99-4.15.99-.86 0-2.16-.97-3.56-.94-1.83.03-3.51 1.06-4.46 2.68-1.9 3.29-.49 8.17 1.37 10.84.91 1.3 1.99 2.77 3.41 2.72 1.37-.05 1.89-.88 3.55-.88 1.65 0 2.11.88 3.55.86 1.47-.02 2.41-1.34 3.3-2.65 1.05-1.51 1.48-2.97 1.5-3.05-.03-.02-2.87-1.1-2.89-4.3z" fill="white"/>
      <path d="M19.77 14.88c.75-.92 1.26-2.19 1.11-3.47-1.07.04-2.37.72-3.14 1.62-.69.79-1.25 2.08-1.03 3.3 1.17.09 2.31-.59 3.06-1.45z" fill="white"/>
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
      <path d="M12 16.5C11.5 16.8 11.5 17.6 11.5 17.6L11.5 33.4C11.5 33.4 11.5 34.2 12 34.5L12.1 34.6L21 25.15V25L12.1 16.4Z" fill="#00D2FF"/>
      <path d="M24 22.4L21 25.15L12 16.5L12.1 16.4C12.5 16.1 13 16.1 13.4 16.4L24 22.4Z" fill="#5FE06A"/>
      <path d="M24 27.6L13.4 33.6C13 33.9 12.5 33.9 12.1 33.6L12 33.5L21 24.85Z" fill="#FF3D51"/>
      <path d="M24 22.4L13.4 16.4C13 16.1 12.5 16.1 12.1 16.4L21 25L24 27.6L27.5 25.78C28.2 25.42 28.2 24.58 27.5 24.22Z" fill="#FFBC00"/>
      <text x="38" y="20" fontFamily="-apple-system, Helvetica Neue, sans-serif" fontSize="8" fill="rgba(255,255,255,0.75)" letterSpacing="0.8">GET IT ON</text>
      <text x="38" y="35" fontFamily="-apple-system, Helvetica Neue, sans-serif" fontSize="17" fontWeight="600" fill="white" letterSpacing="-0.4">Google Play</text>
    </svg>
  );
}

/* ══════════════════════════════════════════════
   NAV
══════════════════════════════════════════════ */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Ride Types", href: "#ride-types" },
    { label: "For Drivers", href: "#for-drivers" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(255,255,255,0.96)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? `1px solid ${C.border}` : "none",
      transition: "all 0.3s ease",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/letsgo" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <Image src="/icon_letsgo.png" alt="LetsGO" width={36} height={36} style={{ borderRadius: 10, display: "block", flexShrink: 0 }} />
          <span style={{ fontFamily: "var(--font-jakarta)", fontWeight: 700, fontSize: 18, color: C.text, letterSpacing: "-0.03em" }}>
            Lets<span style={{ color: C.violet }}>GO</span>
          </span>
        </a>

        <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="lg-hidden-mobile">
          {links.map(l => (
            <a key={l.label} href={l.href}
              onClick={e => { e.preventDefault(); document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" }); }}
              className="lg-nav-link"
              style={{ color: C.muted, textDecoration: "none", fontSize: 14, fontWeight: 500 }}>
              {l.label}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <a href="#how-it-works"
            onClick={e => { e.preventDefault(); document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" }); }}
            title="Coming soon"
            className="lg-cta-btn"
            style={{
              background: `linear-gradient(135deg, ${C.violet}, ${C.violetLight})`,
              color: "#fff", fontWeight: 700, fontSize: 14, padding: "10px 20px",
              borderRadius: 10, textDecoration: "none", letterSpacing: "-0.01em",
            }}>
            Book a Ride
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
      background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.12) 0%, transparent 70%),
                   radial-gradient(ellipse 60% 40% at 80% 50%, rgba(232,81,26,0.06) 0%, transparent 60%),
                   #F8F7FF`,
      position: "relative", overflow: "hidden", maxWidth: "100vw",
    }}>
      <div style={{
        position: "absolute", inset: 0, opacity: 0.025,
        backgroundImage: `linear-gradient(${C.text} 1px, transparent 1px), linear-gradient(90deg, ${C.text} 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }} />
      <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: `radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)`, top: -200, left: "50%", transform: "translateX(-50%)", pointerEvents: "none" }} />

      <div style={{ position: "relative", maxWidth: 900, zIndex: 1 }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(124,58,237,0.1)", border: `1px solid rgba(124,58,237,0.2)`,
          borderRadius: 100, padding: "6px 16px", marginBottom: 32,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.violet, display: "inline-block", boxShadow: `0 0 8px ${C.violet}` }} />
          <span style={{ fontSize: 13, fontWeight: 600, color: C.violet, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Australia&rsquo;s Smart Rideshare
          </span>
        </div>

        <h1 style={{
          fontFamily: "var(--font-jakarta)", fontWeight: 800, letterSpacing: "-0.04em",
          lineHeight: 1.05, color: C.text, marginBottom: 24,
          fontSize: "clamp(44px, 7vw, 88px)",
        }}>
          Ride Smart.<br />
          <span style={{ background: `linear-gradient(135deg, ${C.violet} 0%, ${C.orange} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Pay Less.
          </span>
        </h1>

        <p style={{ fontSize: "clamp(17px, 2vw, 22px)", color: C.muted, maxWidth: 620, margin: "0 auto 48px", lineHeight: 1.65, fontWeight: 400 }}>
          Book a ride in seconds. Track your driver live. Arrive safely every time.
          LetsGO connects Australian riders with verified, professional drivers — at transparent, fair prices.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#how-it-works"
            onClick={e => { e.preventDefault(); document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" }); }}
            title="Coming soon"
            className="lg-hero-btn-primary"
            style={{
              background: `linear-gradient(135deg, ${C.violet}, ${C.violetLight})`,
              color: "#fff", fontWeight: 800, fontSize: 16,
              padding: "16px 36px", borderRadius: 14, textDecoration: "none",
              letterSpacing: "-0.02em", boxShadow: `0 0 40px rgba(124,58,237,0.3)`,
            }}>
            Book a Ride — It&rsquo;s Free
          </a>
          <a href="#for-drivers"
            onClick={e => { e.preventDefault(); document.querySelector("#for-drivers")?.scrollIntoView({ behavior: "smooth" }); }}
            className="lg-hero-btn-secondary"
            style={{
              background: "transparent", color: C.text, fontWeight: 700, fontSize: 16,
              padding: "16px 36px", borderRadius: 14, textDecoration: "none",
              border: `1px solid ${C.border}`, letterSpacing: "-0.02em",
            }}>
            Become a Driver →
          </a>
        </div>

        <div style={{ display: "flex", gap: 32, justifyContent: "center", marginTop: 64, flexWrap: "wrap" }}>
          {[
            { stat: "200K+", label: "Trips Completed" },
            { stat: "8K+", label: "Verified Drivers" },
            { stat: "4.8★", label: "Rider Rating" },
            { stat: "100%", label: "Licensed Drivers" },
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
      icon: <Icon d={Icons.mapPin} size={28} color={C.violet} />,
      title: "Request a Ride",
      desc: "Open the app, enter your destination, and choose your ride type. Takes under 30 seconds.",
      color: C.violet,
    },
    {
      n: "02",
      icon: <Icon d={Icons.userCheck} size={28} color={C.orange} />,
      title: "Match with a Driver",
      desc: "Our AI dispatch matches you with the nearest verified driver. See their rating and vehicle before they arrive.",
      color: C.orange,
    },
    {
      n: "03",
      icon: <Icon d={Icons.navigation} size={28} color="#A78BFA" />,
      title: "Track Live",
      desc: "Watch your driver arrive in real-time on the map. Share your trip with a friend for peace of mind.",
      color: "#A78BFA",
    },
    {
      n: "04",
      icon: <Icon d={Icons.shieldCheck} size={28} color="#10B981" />,
      title: "Arrive Safely",
      desc: "Your fare is charged automatically — no cash, no surprises. Rate your driver and you're done.",
      color: "#10B981",
    },
  ];

  return (
    <section id="how-it-works" style={{ padding: "120px 24px", background: "#ffffff", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel color={C.violet}>Simple Process</SectionLabel>
        <h2 style={h2Style}>How LetsGO Works</h2>
        <p style={subStyle}>From booking to destination in four seamless steps.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24, marginTop: 64 }}>
          {steps.map((s) => (
            <div key={s.n} className="lg-step-card" style={{
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
    { icon: <Icon d={Icons.zap} size={24} color={C.violet} />, iconColor: C.violet, title: "Instant Booking", desc: "Request a ride and be matched with a driver in under 60 seconds. No waiting, no guessing." },
    { icon: <Icon d={Icons.navigation} size={24} color={C.orange} />, iconColor: C.orange, title: "Live Tracking", desc: "Real-time GPS tracking of your driver's route. Know exactly when they'll arrive." },
    { icon: <Icon d={Icons.creditCard} size={24} color="#10B981" />, iconColor: "#10B981", title: "Transparent Pricing", desc: "Upfront fare shown before you book. No surge surprises — price what you see is what you pay." },
    { icon: <Icon d={Icons.userCheck} size={24} color="#F59E0B" />, iconColor: "#F59E0B", title: "Driver Compliance", desc: "Every driver holds a current licence, comprehensive insurance, and a police check." },
    { icon: <Icon d={Icons.shieldCheck} size={24} color="#A78BFA" />, iconColor: "#A78BFA", title: "In-Trip SOS", desc: "One-tap emergency SOS sends your live location to emergency contacts and authorities." },
    { icon: <Icon d={Icons.creditCard} size={24} color="#06B6D4" />, iconColor: "#06B6D4", title: "Cashless Payments", desc: "Secure card payments via Stripe. Split fare with friends directly in the app." },
    { icon: <Icon d={Icons.share2} size={24} color="#EC4899" />, iconColor: "#EC4899", title: "Trip Sharing", desc: "Share your live trip with family or friends so they always know you arrived safely." },
    { icon: <Icon d={Icons.globe} size={24} color={C.violet} />, iconColor: C.violet, title: "Australian Servers", desc: "All data processed and stored in Australia. Privacy Act 1988 compliant." },
  ];

  return (
    <section id="features" style={{ padding: "120px 24px", background: C.bg, position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel color={C.orange}>Platform Features</SectionLabel>
        <h2 style={{ ...h2Style, color: C.text }}>Built for Riders. Loved by Drivers.</h2>
        <p style={{ ...subStyle, color: C.muted }}>Every feature designed to make Australian rideshare safer, smarter, and fairer.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, marginTop: 64 }}>
          {feats.map(f => (
            <div key={f.title} className="lg-feat-card" style={{
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
   RIDE TYPES
══════════════════════════════════════════════ */
function RideTypes() {
  const rides = [
    {
      name: "Economy",
      tagline: "Everyday rides, great value",
      desc: "Comfortable sedans for solo or duo trips. Most affordable option with fast pickup times.",
      image: "/ride-economy.jpg",
      color: C.violet,
      badge: "Most Popular",
    },
    {
      name: "Comfort",
      tagline: "A step up in style",
      desc: "Newer vehicles with extra legroom, climate control, and a quiet, smooth ride.",
      image: "/ride-comfort.jpg",
      color: C.orange,
      badge: "Best Value",
    },
    {
      name: "Premium",
      tagline: "Arrive in style",
      desc: "Luxury sedans and SUVs for business trips, airport transfers, or special occasions.",
      image: "/ride-premium.jpg",
      color: "#F59E0B",
      badge: "Top Rated",
    },
    {
      name: "XL",
      tagline: "More space for everyone",
      desc: "7-seat SUVs for groups and families. Book one ride and everyone travels together.",
      image: "/ride-xl.jpg",
      color: "#10B981",
      badge: "Groups",
    },
  ];

  return (
    <section id="ride-types" style={{ padding: "120px 24px", background: "#ffffff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel color={C.violet}>Ride Options</SectionLabel>
        <h2 style={h2Style}>Choose Your Ride</h2>
        <p style={subStyle}>Four ride types to match every need and budget — all with verified, professional drivers.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 24, marginTop: 64 }}>
          {rides.map(r => (
            <div key={r.name} className="lg-ride-card" style={{
              background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 20,
              overflow: "hidden",
              cursor: "default",
            }}>
              <div style={{ position: "relative", height: 180, overflow: "hidden" }}>
                <Image
                  src={r.image}
                  alt={`LetsGO ${r.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                  style={{ objectFit: "cover" }}
                />
                <div style={{
                  position: "absolute", top: 12, right: 12,
                  background: r.color, color: "#fff",
                  fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 6,
                  letterSpacing: "0.05em", textTransform: "uppercase",
                }}>{r.badge}</div>
              </div>
              <div style={{ padding: "24px 24px 28px" }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: C.text, marginBottom: 4, letterSpacing: "-0.02em" }}>{r.name}</h3>
                <p style={{ fontSize: 13, color: r.color, fontWeight: 600, marginBottom: 12 }}>{r.tagline}</p>
                <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.7 }}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   FOR DRIVERS
══════════════════════════════════════════════ */
function ForDrivers() {
  const perks = [
    "Drive when you want — full schedule flexibility",
    "Transparent earnings — see your fare before accepting",
    "AI-powered dispatch sends trips to you automatically",
    "Get paid weekly via Stripe direct to your bank",
    "Dedicated driver support line — real humans, fast responses",
    "Free background check and onboarding assistance",
  ];

  return (
    <section id="for-drivers" style={{ padding: "120px 24px", background: C.bg }}>
      <div className="lg-for-drivers-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div>
          <SectionLabel color={C.orange} align="left">For Drivers</SectionLabel>
          <h2 style={{ ...h2Style, textAlign: "left" }}>
            Earn on Your Schedule.<br />
            <span style={{ color: C.orange }}>Your Car. Your Rules.</span>
          </h2>
          <p style={{ fontSize: 17, color: "#475569", lineHeight: 1.75, marginBottom: 36 }}>
            Join thousands of Australian drivers earning with LetsGO. Set your own hours, accept the trips you want, and get paid transparently — no hidden deductions, no surprises.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px", display: "flex", flexDirection: "column", gap: 14 }}>
            {perks.map(p => (
              <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <div style={{
                  width: 20, height: 20, borderRadius: "50%", background: `${C.orange}20`,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1,
                }}>
                  <Icon d={Icons.check} size={12} color={C.orange} strokeWidth={2.5} />
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
              background: `linear-gradient(135deg, ${C.orange}, ${C.orangeLight})`,
              color: "#fff", fontWeight: 800, fontSize: 15,
              padding: "14px 32px", borderRadius: 12, textDecoration: "none",
            }}>
            Start Driving — Apply Free
          </a>
        </div>

        {/* Earnings card */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{
            background: "#0D1117", borderRadius: 24, padding: 40, width: "100%", maxWidth: 400,
            border: `1px solid ${C.border}`, boxShadow: "0 40px 100px rgba(0,0,0,0.3)",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <span style={{ fontSize: 14, color: C.muted, fontWeight: 600 }}>Weekly Earnings</span>
              <span style={{ fontSize: 12, background: "rgba(232,81,26,0.15)", color: C.orange, padding: "4px 10px", borderRadius: 6, fontWeight: 700 }}>+18% this week</span>
            </div>
            <div style={{ fontSize: 52, fontWeight: 800, color: "#F0F6FC", fontFamily: "var(--font-jakarta)", letterSpacing: "-0.04em", marginBottom: 8 }}>
              $1,240
            </div>
            <div style={{ fontSize: 14, color: "#8B949E", marginBottom: 32 }}>34 trips · 4.97★ · 6 hrs driven</div>

            {[
              { trip: "CBD → Airport", amt: "$48", time: "8:14 AM" },
              { trip: "Surry Hills → Bondi", amt: "$24", time: "10:32 AM" },
              { trip: "Parramatta → City", amt: "$39", time: "12:05 PM" },
              { trip: "Airport → North Sydney", amt: "$52", time: "3:40 PM" },
            ].map(t => (
              <div key={t.trip} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "14px 0", borderBottom: `1px solid #21262D`,
              }}>
                <div>
                  <div style={{ fontSize: 14, color: "#F0F6FC", fontWeight: 600 }}>{t.trip}</div>
                  <div style={{ fontSize: 12, color: "#8B949E", marginTop: 2 }}>{t.time}</div>
                </div>
                <div style={{ fontSize: 15, color: C.orange, fontWeight: 700 }}>{t.amt}</div>
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
    { name: "Jessica T.", role: "Rider · Sydney", rating: 5, text: "I use LetsGO every day for work. The upfront pricing is the best feature — I know exactly what I'm paying before I even get in the car. No more fare shock!", avatar: "JT" },
    { name: "Ahmed K.", role: "Driver · Melbourne", rating: 5, text: "Been driving with LetsGO for 6 months. The AI dispatch is incredible — trips just come to me while I'm already moving. My earnings are up 30% vs my old platform.", avatar: "AK" },
    { name: "Rachel P.", role: "Rider · Brisbane", rating: 5, text: "The live tracking and trip sharing gives me total peace of mind riding home late. My partner can see exactly where I am. This should be standard on every rideshare app.", avatar: "RP" },
    { name: "Darren H.", role: "Driver · Perth", rating: 5, text: "Stripe weekly payout is fast and transparent. I can see every fare breakdown, every deduction. LetsGO treats drivers like professionals, not just contractors.", avatar: "DH" },
    { name: "Sophie L.", role: "Rider · Adelaide", rating: 5, text: "Booked an XL for my family of 6 to the airport. One price, one booking, everyone in one car. The driver was fantastic — 5 stars every time.", avatar: "SL" },
    { name: "Marcus T.", role: "Driver · Gold Coast", rating: 5, text: "The in-app support actually responds in minutes. Had a rider dispute once — resolved fairly and quickly. LetsGO has real humans behind the tech.", avatar: "MT" },
  ];

  return (
    <section id="testimonials" style={{ padding: "120px 24px", background: "#F8F7FF" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionLabel color={C.violet}>Real Stories</SectionLabel>
        <h2 style={{ ...h2Style, color: C.text }}>What Riders & Drivers Are Saying</h2>
        <p style={{ ...subStyle, color: C.muted }}>Real Australians. Real trips. Real results.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 20, marginTop: 64 }}>
          {reviews.map(r => (
            <div key={r.name} className="lg-review-card" style={{
              background: "#ffffff", border: `1px solid ${C.border}`,
              borderRadius: 20, padding: 28,
            }}>
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
                  background: `linear-gradient(135deg, ${C.violet}, ${C.orange})`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 800, color: "#fff", flexShrink: 0,
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
      background: "linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 50%, #FFF7ED 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse 50% 80% at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)`,
      }} />
      <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <div style={{ margin: "0 auto 32px", width: 80, height: 80 }}>
          <Image
            src="/icon_letsgo.png"
            alt="LetsGO"
            width={80}
            height={80}
            style={{ borderRadius: 22, display: "block", boxShadow: `0 0 60px rgba(124,58,237,0.3)` }}
          />
        </div>

        <h2 style={{ fontFamily: "var(--font-jakarta)", fontWeight: 800, fontSize: "clamp(32px, 5vw, 54px)", color: C.text, letterSpacing: "-0.04em", marginBottom: 20 }}>
          Download LetsGO
        </h2>
        <p style={{ fontSize: 18, color: C.muted, lineHeight: 1.7, marginBottom: 56 }}>
          Available on iOS and Android. Book rides, track drivers, split fares — everything in your pocket.
        </p>

        <div style={{ display: "flex", gap: 40, justifyContent: "center", flexWrap: "wrap", alignItems: "flex-start" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            <div style={{ display: "block" }}>
              <AppleStoreBadge width={160} />
            </div>
            <div style={{
              background: "#fff", borderRadius: 16, padding: 12,
              boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
              border: `2px solid ${C.violet}40`,
            }}>
              <Image src="/qr-letsgo-apple.png" alt="Scan to download LetsGO on the App Store" width={120} height={120} style={{ display: "block", borderRadius: 8 }} />
            </div>
            <span style={{ fontSize: 11, color: C.muted, fontWeight: 500 }}>Scan for iOS</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: 12 }}>
            <div style={{ width: 1, height: 180, background: `linear-gradient(to bottom, transparent, ${C.border}, transparent)` }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            <div style={{ display: "block" }}>
              <GooglePlayBadge width={180} />
            </div>
            <div style={{
              background: "#fff", borderRadius: 16, padding: 12,
              boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
              border: `2px solid ${C.violet}40`,
            }}>
              <Image src="/qr-letsgo-android.png" alt="Scan to download LetsGO on Google Play" width={120} height={120} style={{ display: "block", borderRadius: 8 }} />
            </div>
            <span style={{ fontSize: 11, color: C.muted, fontWeight: 500 }}>Scan for Android</span>
          </div>
        </div>

        <div style={{ marginTop: 48, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.violet} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
    { label: "Privacy Policy", href: "/letsgo/legal/privacy" },
    { label: "Terms of Service", href: "/letsgo/legal/terms" },
    { label: "Cookie Policy", href: "/letsgo/legal/cookies" },
    { label: "Community Guidelines", href: "/letsgo/legal/community" },
    { label: "Safety Policy", href: "/letsgo/legal/safety" },
    { label: "Refunds & Disputes", href: "/letsgo/legal/refunds" },
    { label: "Accessibility", href: "/letsgo/legal/accessibility" },
  ];

  return (
    <footer style={{ background: "#090D13", borderTop: `1px solid ${C.border}`, padding: "64px 24px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="lg-footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 64 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <Image src="/icon_letsgo.png" alt="LetsGO" width={32} height={32} style={{ borderRadius: 8, display: "block", flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-jakarta)", fontWeight: 700, fontSize: 16, color: "#F0F6FC" }}>Lets<span style={{ color: C.violet }}>GO</span></span>
            </div>
            <p style={{ fontSize: 14, color: "#8B949E", lineHeight: 1.75, maxWidth: 280 }}>
              Australia&rsquo;s smart rideshare platform — connecting riders with verified, professional drivers. Safe, transparent, affordable.
            </p>
          </div>
          {[
            { title: "Riders", links: [
              { label: "Book a Ride", href: "#how-it-works" },
              { label: "Ride Types", href: "#ride-types" },
              { label: "How It Works", href: "#how-it-works" },
              { label: "Safety", href: "#features" },
            ]},
            { title: "Drivers", links: [
              { label: "Drive with LetsGO", href: "#for-drivers" },
              { label: "How It Works", href: "#how-it-works" },
              { label: "Earnings", href: "#for-drivers" },
              { label: "Requirements", href: "#for-drivers" },
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
                      className="lg-footer-link"
                      style={{ fontSize: 14, color: "#8B949E", textDecoration: "none" }}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: `1px solid #21262D`, paddingTop: 32, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <p style={{ fontSize: 13, color: "#8B949E" }}>© 2026 LetsGO Pty Ltd. All rights reserved. ABN 00 000 000 000</p>
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
export default function LetsGoPage() {
  return (
    <>
      <style>{`
        .lg-hidden-mobile { display: flex; }
        @media(max-width:768px){ .lg-hidden-mobile { display: none !important; } }
        *, *::before, *::after { box-sizing: border-box; }
        html { overflow-x: hidden; }
        body { overflow-x: hidden; max-width: 100vw; }
        section, nav, footer { overflow: hidden; }
        @media(max-width:900px){ .lg-for-drivers-grid { grid-template-columns: 1fr !important; } }
        @media(max-width:900px){ .lg-footer-grid { grid-template-columns: 1fr 1fr !important; } }

        .lg-step-card { transition: transform 0.3s, box-shadow 0.3s; }
        .lg-step-card:hover { transform: translateY(-6px); box-shadow: 0 20px 60px rgba(0,0,0,0.1); }
        .lg-feat-card { transition: transform 0.3s; }
        .lg-feat-card:hover { transform: translateY(-4px); }
        .lg-ride-card { transition: transform 0.3s, box-shadow 0.3s; }
        .lg-ride-card:hover { transform: translateY(-6px); box-shadow: 0 20px 60px rgba(0,0,0,0.1); }
        .lg-review-card { transition: border-color 0.3s, transform 0.3s; }
        .lg-review-card:hover { transform: translateY(-4px); border-color: rgba(124,58,237,0.25) !important; }
        .lg-nav-link { transition: color 0.2s; }
        .lg-nav-link:hover { color: #0F172A !important; }
        .lg-cta-btn { transition: opacity 0.2s; }
        .lg-cta-btn:hover { opacity: 0.85; }
        .lg-hero-btn-primary { transition: transform 0.2s, box-shadow 0.2s; }
        .lg-hero-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 50px rgba(124,58,237,0.4) !important; }
        .lg-hero-btn-secondary { transition: border-color 0.2s, background 0.2s; }
        .lg-hero-btn-secondary:hover { border-color: #E8511A !important; background: rgba(232,81,26,0.05) !important; }
        .lg-footer-link { transition: color 0.2s; }
        .lg-footer-link:hover { color: #ffffff !important; }
      `}</style>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <RideTypes />
        <ForDrivers />
        <Testimonials />
        <AppDownload />
      </main>
      <Footer />
      <CookieBannerLG />
    </>
  );
}
