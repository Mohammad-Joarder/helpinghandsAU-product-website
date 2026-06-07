"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

// Apple & Google store SVG wordmarks (self-contained, no external deps)
function AppleStoreBadge() {
  return (
    <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
      <rect width="120" height="40" rx="7" fill="#111111"/>
      {/* Apple logo — correct bite shape and leaf */}
      <path
        d="M13.28 20.38c.02-2.18 1.78-3.23 1.86-3.28-1.01-1.48-2.59-1.68-3.15-1.7-1.34-.14-2.62.79-3.3.79-.68 0-1.72-.77-2.83-.75-1.45.02-2.79.84-3.54 2.13-1.51 2.62-.39 6.49 1.09 8.61.72 1.04 1.58 2.21 2.71 2.17 1.09-.04 1.5-.7 2.82-.7 1.31 0 1.68.7 2.82.68 1.17-.02 1.91-1.06 2.62-2.1.83-1.2 1.17-2.37 1.19-2.43-.03-.01-2.28-.87-2.29-3.42z"
        fill="white"
      />
      <path
        d="M11.17 14.05c.6-.73.99-1.74.88-2.75-.85.04-1.88.57-2.49 1.28-.55.63-.99 1.65-.82 2.62.93.07 1.84-.47 2.43-1.15z"
        fill="white"
      />
      <text x="22" y="16.5" fontFamily="-apple-system,BlinkMacSystemFont,sans-serif" fontSize="5.5" fill="#AAAAAA" letterSpacing="0.6">Download on the</text>
      <text x="22" y="28" fontFamily="-apple-system,BlinkMacSystemFont,sans-serif" fontSize="13" fontWeight="600" fill="white" letterSpacing="-0.3">App Store</text>
    </svg>
  );
}

function GooglePlayBadge() {
  return (
    <svg viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
      <rect width="135" height="40" rx="7" fill="#111111"/>
      {/* Google Play icon — flat colours, no gradient IDs to avoid duplicate-ID hydration issues */}
      <path d="M7.5 13.2C7 13.5 7 14.1 7 14.1L7 25.9C7 25.9 7 26.5 7.5 26.8L7.6 26.9L14.3 20.2V20L7.6 13.1Z" fill="#00B8D4"/>
      <path d="M16.5 18L14.3 20.2L7.5 13.2L7.6 13.1C7.9 12.9 8.3 12.9 8.6 13.1L16.5 18Z" fill="#43E97B"/>
      <path d="M16.5 22L8.6 26.9C8.3 27.1 7.9 27.1 7.6 26.9L7.5 26.8L14.3 19.8Z" fill="#F5425D"/>
      <path d="M16.5 18L8.6 13.1C8.3 12.9 7.9 12.9 7.6 13.1L14.3 20L16.5 22L19 20.7C19.6 20.4 19.6 19.6 19 19.3Z" fill="#FFB300"/>
      <text x="26" y="16.5" fontFamily="-apple-system,BlinkMacSystemFont,sans-serif" fontSize="5.5" fill="#AAAAAA" letterSpacing="0.8">GET IT ON</text>
      <text x="26" y="28" fontFamily="-apple-system,BlinkMacSystemFont,sans-serif" fontSize="13" fontWeight="600" fill="white" letterSpacing="-0.3">Google Play</text>
    </svg>
  );
}

const platforms = [
  {
    id: "helpinghands",
    name: "HelpingHandsAu",
    tagline: "Hire trusted professionals",
    description: "Book verified local service providers for any task — cleanly, safely, and with full payment protection.",
    logoSrc: "/icon-helpinghandsau.png",
    brandColor: "#1AABF0",
    lightBg: "rgba(26,171,240,0.05)",
    borderColor: "rgba(26,171,240,0.15)",
    qrApple: "/qr-apple.png",
    qrAndroid: "/qr-android.png",
    appStoreLabel: "Download for iOS",
    playStoreLabel: "Download for Android",
    features: ["Browse verified providers", "Secure escrow payments", "Realtime job tracking", "Dispute protection"],
    comingSoon: false,
  },
  {
    id: "letsgo",
    name: "LetsGO",
    tagline: "Ride Smart. Pay Less.",
    description: "Australia's intelligent rideshare platform — book a driver in seconds, track your trip live, and pay securely.",
    logoSrc: "/icon_letsgo.png",
    brandColor: "#E8511A",
    lightBg: "rgba(232,81,26,0.05)",
    borderColor: "rgba(232,81,26,0.15)",
    qrApple: "/qr-apple.png",
    qrAndroid: "/qr-android.png",
    appStoreLabel: "Download for iOS",
    playStoreLabel: "Download for Android",
    features: ["Instant ride booking", "Live driver tracking", "Transparent pricing", "In-trip safety tools"],
    comingSoon: true,
  },
];

function QRCard({
  label,
  sublabel,
  qrSrc,
  qrAlt,
  icon,
  brandColor,
  delay,
}: {
  label: string;
  sublabel: string;
  qrSrc: string;
  qrAlt: string;
  icon: React.ReactNode;
  brandColor: string;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center"
    >
      {/* QR frame */}
      <motion.div
        animate={{ y: hovered ? -4 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
        className="relative bg-white rounded-[24px] p-4 shadow-[0_8px_40px_rgba(0,0,0,0.1),0_2px_8px_rgba(0,0,0,0.06)] border border-[rgba(0,0,0,0.06)]"
        style={{ width: 180, height: 180 }}
      >
        {/* Corner accents */}
        <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 rounded-tl-lg" style={{ borderColor: brandColor }} />
        <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 rounded-tr-lg" style={{ borderColor: brandColor }} />
        <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 rounded-bl-lg" style={{ borderColor: brandColor }} />
        <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 rounded-br-lg" style={{ borderColor: brandColor }} />

        <Image
          src={qrSrc}
          alt={qrAlt}
          fill
          sizes="180px"
          className="object-contain p-3.5"
        />
      </motion.div>

      {/* Store badge below QR */}
      <div className="mt-4 flex items-center gap-2">
        <div className="text-[#4A4F4A]">{icon}</div>
        <div>
          <div className="text-[11px] font-bold text-[#111111] leading-tight">{label}</div>
          <div className="text-[10px] text-[#6B7280]">{sublabel}</div>
        </div>
      </div>
    </motion.div>
  );
}

function ComingSoonPanel({ brandColor, delay }: { brandColor: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
      className="flex flex-col items-center justify-center gap-5 w-full max-w-[320px]"
    >
      {/* Glowing phone illustration placeholder */}
      <div
        className="relative flex items-center justify-center rounded-[28px] border-2"
        style={{
          width: 160,
          height: 160,
          borderColor: `${brandColor}40`,
          background: `radial-gradient(circle at 50% 40%, ${brandColor}18 0%, ${brandColor}06 70%, transparent 100%)`,
          boxShadow: `0 0 40px ${brandColor}25, 0 0 80px ${brandColor}10`,
        }}
      >
        {/* Animated rings */}
        <motion.div
          className="absolute inset-0 rounded-[28px] border"
          style={{ borderColor: `${brandColor}30` }}
          animate={{ scale: [1, 1.06, 1], opacity: [0.6, 0.2, 0.6] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-[36px] border"
          style={{ inset: -12, borderColor: `${brandColor}18` }}
          animate={{ scale: [1, 1.04, 1], opacity: [0.4, 0.1, 0.4] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        {/* Phone icon */}
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" aria-hidden="true">
          <rect x="12" y="4" width="24" height="40" rx="5" stroke={brandColor} strokeWidth="2" fill={`${brandColor}12`}/>
          <circle cx="24" cy="38" r="2" fill={brandColor} opacity="0.7"/>
          <rect x="19" y="8" width="10" height="2" rx="1" fill={brandColor} opacity="0.4"/>
          <rect x="16" y="14" width="16" height="10" rx="2" fill={brandColor} opacity="0.15"/>
          <path d="M20 19h8M20 22h5" stroke={brandColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
        </svg>
      </div>

      {/* Text */}
      <div className="text-center">
        <motion.div
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-2"
          style={{ background: `${brandColor}15`, color: brandColor }}
          animate={{ opacity: [1, 0.7, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: brandColor }} />
          Launching June 2026
        </motion.div>
        <p className="text-sm font-semibold text-[#111111] leading-snug mb-1">QR code available at launch</p>
        <p className="text-[11px] text-[#6B7280] leading-relaxed max-w-[220px]">
          Be among the first to ride — the app goes live on iOS &amp; Android in June 2026.
        </p>
      </div>
    </motion.div>
  );
}

function PlatformDownloadBlock({
  platform,
  reverse,
  index,
}: {
  platform: typeof platforms[0];
  reverse: boolean;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
      className="relative bg-white rounded-[32px] overflow-hidden border border-[rgba(0,0,0,0.05)] shadow-[var(--shadow-card)]"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at ${reverse ? "right" : "left"} top, ${platform.lightBg} 0%, transparent 60%)` }}
      />

      <div className={`relative z-10 flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-0`}>

        {/* Left/Right: info panel */}
        <div className="flex-1 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
          {/* Logo + name */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-14 h-14 flex-shrink-0 rounded-2xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.1)] border border-[rgba(0,0,0,0.06)] p-1.5">
              <Image src={platform.logoSrc} alt={platform.name} fill sizes="56px" className="object-contain p-1" />
            </div>
            <div>
              <div
                className="text-[9px] font-black uppercase tracking-[0.2em] mb-1"
                style={{ color: platform.brandColor }}
              >
                {platform.comingSoon ? "Launching June 2026" : "Now Available"}
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-[#111111]">{platform.name}</h3>
            </div>
          </div>

          <p className="text-[clamp(22px,2.5vw,30px)] font-semibold text-[#111111] tracking-tight leading-snug mb-3">
            {platform.tagline}
          </p>
          <p className="text-sm text-[#6B7280] leading-relaxed mb-7 max-w-sm">
            {platform.description}
          </p>

          {/* Feature list */}
          <ul className="space-y-2.5 mb-8">
            {platform.features.map((f) => (
              <li key={f} className="flex items-center gap-2.5">
                <div
                  className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: `${platform.brandColor}15` }}
                >
                  <svg viewBox="0 0 10 10" className="w-2.5 h-2.5" fill="none">
                    <path d="M2 5l2 2 4-4" stroke={platform.brandColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-sm text-[#4A4F4A] font-medium">{f}</span>
              </li>
            ))}
          </ul>

          {/* Store badges (click targets) */}
          {platform.comingSoon ? (
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-3">
                <div className="h-11 w-[150px] rounded-lg opacity-40 cursor-not-allowed" aria-hidden="true">
                  <AppleStoreBadge />
                </div>
                <div className="h-11 w-[150px] rounded-lg opacity-40 cursor-not-allowed" aria-hidden="true">
                  <GooglePlayBadge />
                </div>
              </div>
              <p className="text-[11px] text-[#6B7280] font-medium">
                Available on iOS &amp; Android — June 2026
              </p>
            </div>
          ) : (
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="h-11 w-[150px] block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-lg hover:opacity-90 transition-opacity"
                style={{ ["--tw-ring-color" as string]: platform.brandColor }}
                aria-label={`${platform.appStoreLabel} — ${platform.name}`}
              >
                <AppleStoreBadge />
              </a>
              <a
                href="#"
                className="h-11 w-[150px] block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-lg hover:opacity-90 transition-opacity"
                style={{ ["--tw-ring-color" as string]: platform.brandColor }}
                aria-label={`${platform.playStoreLabel} — ${platform.name}`}
              >
                <GooglePlayBadge />
              </a>
            </div>
          )}
        </div>

        {/* Right/Left: QR codes panel — or Coming Soon for LetsGO */}
        <div
          className="lg:w-[380px] flex-shrink-0 flex items-center justify-center gap-6 p-8 md:p-10 lg:p-12 border-t lg:border-t-0 border-[rgba(0,0,0,0.05)]"
          style={{ borderLeft: reverse ? undefined : "1px solid rgba(0,0,0,0.04)", borderRight: reverse ? "1px solid rgba(0,0,0,0.04)" : undefined }}
        >
          {platform.comingSoon ? (
            <ComingSoonPanel brandColor={platform.brandColor} delay={0.15 + index * 0.1} />
          ) : (
            <>
              <QRCard
                label="App Store"
                sublabel="Scan to download iOS"
                qrSrc={platform.qrApple}
                qrAlt={`Scan QR code to download ${platform.name} on the App Store`}
                brandColor={platform.brandColor}
                delay={0.15 + index * 0.1}
                icon={
                  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" aria-hidden="true">
                    <path d="M13.28 10.69c.02-2.18 1.78-3.23 1.86-3.28-1.01-1.48-2.59-1.68-3.15-1.7-1.34-.14-2.62.79-3.3.79-.68 0-1.72-.77-2.83-.75-1.45.02-2.79.84-3.54 2.13-1.51 2.62-.39 6.49 1.09 8.61.72 1.04 1.58 2.21 2.71 2.17 1.09-.04 1.5-.7 2.82-.7 1.31 0 1.68.7 2.82.68 1.17-.02 1.91-1.06 2.62-2.1.83-1.2 1.17-2.37 1.19-2.43-.03-.01-2.28-.87-2.29-3.42z" fill="currentColor"/>
                    <path d="M11.17 6.36c.6-.73.99-1.74.88-2.75-.85.04-1.88.57-2.49 1.28-.55.63-.99 1.65-.82 2.62.93.07 1.84-.47 2.43-1.15z" fill="currentColor"/>
                  </svg>
                }
              />
              <QRCard
                label="Google Play"
                sublabel="Scan to download Android"
                qrSrc={platform.qrAndroid}
                qrAlt={`Scan QR code to download ${platform.name} on Google Play`}
                brandColor={platform.brandColor}
                delay={0.25 + index * 0.1}
                icon={
                  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" aria-hidden="true">
                    <path d="M2.5 4.6C2 4.9 2 5.5 2 5.5L2 14.5C2 14.5 2 15.1 2.5 15.4L2.6 15.5L9.8 10.15V10L2.6 4.5Z" fill="#00B8D4"/>
                    <path d="M12.2 7.9L9.8 10.15L2.5 4.6L2.6 4.5C2.9 4.3 3.3 4.3 3.6 4.5L12.2 7.9Z" fill="#43E97B"/>
                    <path d="M12.2 12.1L3.6 15.5C3.3 15.7 2.9 15.7 2.6 15.5L2.5 15.4L9.8 9.85Z" fill="#F5425D"/>
                    <path d="M12.2 7.9L3.6 4.5C3.3 4.3 2.9 4.3 2.6 4.5L9.8 10L12.2 12.1L15.2 10.55C15.8 10.25 15.8 9.75 15.2 9.45Z" fill="#FFB300"/>
                  </svg>
                }
              />
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function AppDownloadSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="download" className="section-padding bg-[#F4F8FB]" aria-labelledby="download-heading">
      <div className="container-tight">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          className="text-center mb-16"
        >
          {/* Dual logo centrepiece above heading */}
          <div className="flex items-center justify-center gap-5 mb-8">
            <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-3 shadow-[var(--shadow-card)] border border-[rgba(0,0,0,0.05)]">
              <div className="relative w-9 h-9">
                <Image src="/icon-helpinghandsau.png" alt="HelpingHandsAu" fill sizes="36px" className="object-contain" />
              </div>
              <span className="text-sm font-semibold text-[#111111] tracking-tight">
                HelpingHands<span className="text-[#1AABF0]">Au</span>
              </span>
            </div>

            <div className="text-[#BEBEBE] text-xs font-medium" aria-hidden="true">+</div>

            <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-3 shadow-[var(--shadow-card)] border border-[rgba(0,0,0,0.05)]">
              <div className="relative w-9 h-9">
                <Image src="/icon_letsgo.png" alt="LetsGO" fill sizes="36px" className="object-contain" />
              </div>
              <span className="text-sm font-semibold text-[#111111] tracking-tight">
                Let&rsquo;s<span className="text-[#E8511A]">GO</span>
              </span>
            </div>
          </div>

          <span className="text-xs font-semibold uppercase tracking-widest text-[#4A4F4A] mb-4 block">
            Mobile Apps
          </span>
          <h2
            id="download-heading"
            className="text-[clamp(28px,4vw,52px)] font-semibold tracking-tight text-[#111111] max-w-2xl mx-auto text-balance"
          >
            Your community.
            <br />
            In your pocket.
          </h2>
          <p className="mt-5 text-base text-[#4A4F4A] max-w-lg mx-auto font-light leading-relaxed">
            Scan either QR code with your phone camera to download instantly —
            no App Store search needed.
          </p>
        </motion.div>

        {/* Platform download blocks */}
        <div className="flex flex-col gap-6">
          {platforms.map((platform, i) => (
            <PlatformDownloadBlock
              key={platform.id}
              platform={platform}
              reverse={i % 2 === 1}
              index={i}
            />
          ))}
        </div>

        {/* Bottom trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <div className="text-xs text-[#6B7280] flex items-center justify-center gap-2">
            <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-[#1AABF0] flex-shrink-0" aria-hidden="true">
              <path d="M8 1L2 4v4c0 3.55 2.56 6.88 6 7.93C11.44 14.88 14 11.55 14 8V4L8 1z"/>
            </svg>
            <span>Available on iOS &amp; Android · Free to download · Australian servers · Privacy Act 1988 compliant</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
