"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  ShieldCheck, CreditCard, MessageCircle, Bot, UserCheck, Gavel,
  Car, Users, MapPin, Banknote, FileCheck, Eye
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }
  })
};

const helpingHandsFeatures = [
  { icon: CreditCard,    label: "Escrow Payments",     desc: "Stripe-secured escrow protecting every transaction" },
  { icon: MessageCircle, label: "Realtime Messaging",  desc: "Encrypted in-app chat between providers and customers" },
  { icon: Bot,           label: "AI Fraud Prevention", desc: "Intelligent monitoring to detect and prevent fraud" },
  { icon: UserCheck,     label: "Provider Verification",desc: "Rigorous onboarding and identity verification" },
  { icon: Gavel,         label: "Dispute Resolution",  desc: "Fair, transparent task bidding and dispute processes" },
  { icon: ShieldCheck,   label: "Trust Architecture",  desc: "Multi-layer security protecting all parties" },
];

const letsGoFeatures = [
  { icon: Car,       label: "Intelligent Dispatch",  desc: "AI-optimised routing and realtime driver matching" },
  { icon: Users,     label: "Driver Compliance",     desc: "Automated compliance checks and onboarding workflows" },
  { icon: MapPin,    label: "Live Tracking",         desc: "GPS-powered realtime trip tracking and safety systems" },
  { icon: Banknote,  label: "Stripe Connect",        desc: "Instant driver payouts via Stripe Connect infrastructure" },
  { icon: FileCheck, label: "Regulatory Compliance", desc: "Built to meet Australian transport regulations" },
  { icon: Eye,       label: "Safety Systems",        desc: "Passenger and driver safety monitoring throughout trips" },
];

function PlatformCard({
  platform,
  features,
  logoSrc,
  logoAlt,
  brandColor,
  accentBg,
  index,
}: {
  platform: { name: string; tagline: string; description: string; badge: string };
  features: { icon: React.ElementType; label: string; desc: string }[];
  logoSrc: string;
  logoAlt: string;
  brandColor: string;
  accentBg: string;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
      className="relative bg-white rounded-[32px] p-8 md:p-10 shadow-[var(--shadow-card)] border border-[rgba(0,0,0,0.05)] overflow-hidden"
    >
      {/* Subtle bg accent orb */}
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: accentBg, transform: "translate(35%, -35%)" }}
      />

      {/* Header: logo + text */}
      <div className="relative z-10 flex items-start gap-5 mb-8">
        {/* Real logo */}
        <div className="relative w-14 h-14 flex-shrink-0 rounded-2xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)] border border-[rgba(0,0,0,0.06)] flex items-center justify-center p-2">
          <Image
            src={logoSrc}
            alt={logoAlt}
            fill
            sizes="56px"
            className="object-contain p-1.5"
          />
        </div>

        <div className="flex-1">
          <span
            className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2.5"
            style={{ background: `${brandColor}12`, color: brandColor }}
          >
            {platform.badge}
          </span>
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#111111] mb-2">
            {platform.name}
          </h3>
          <p className="text-sm text-[#4A4F4A] font-medium mb-2">{platform.tagline}</p>
          <p className="text-sm text-[#6B7280] leading-relaxed max-w-lg">{platform.description}</p>
        </div>
      </div>

      {/* Feature tiles */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {features.map((feature, i) => (
          <motion.div
            key={feature.label}
            custom={i}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="flex flex-col gap-2 p-4 rounded-2xl bg-[#F4F8FB] hover:bg-[#E8EEF3] transition-colors duration-200 cursor-default"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${brandColor}12` }}
            >
              <feature.icon size={17} style={{ color: brandColor }} aria-hidden="true" />
            </div>
            <div>
              <div className="text-[13px] font-semibold text-[#111111]">{feature.label}</div>
              <div className="text-[11px] text-[#6B7280] mt-0.5 leading-relaxed">{feature.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function EcosystemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ecosystem" className="section-padding bg-[#F4F8FB]" aria-labelledby="ecosystem-heading">
      <div className="container-tight">

        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#1AABF0] mb-4 block">
            Our Ecosystem
          </span>
          <h2
            id="ecosystem-heading"
            className="text-[clamp(30px,4.5vw,58px)] font-semibold tracking-tight text-[#111111] max-w-3xl mx-auto text-balance"
          >
            Built for trust.
            <br />
            Designed for scale.
          </h2>
          <p className="mt-6 text-lg text-[#4A4F4A] max-w-2xl mx-auto leading-relaxed font-light">
            Two purpose-built platforms, engineered with the same commitment to security, compliance,
            and intelligent operations — connecting real people in real communities.
          </p>
        </motion.div>

        {/* Platform cards */}
        <div className="flex flex-col gap-7">
          <PlatformCard
            platform={{
              name: "HelpingHandsAu",
              tagline: "Local services. Verified providers. Secure payments.",
              description:
                "A marketplace platform that connects customers with verified service providers across Australia. Powered by Stripe escrow payments, AI fraud prevention, and a dispute-resolution framework designed for trust.",
              badge: "Marketplace Platform",
            }}
            features={helpingHandsFeatures}
            logoSrc="/icon-helpinghandsau.png"
            logoAlt="HelpingHandsAu"
            brandColor="#1AABF0"
            accentBg="radial-gradient(circle, rgba(26,171,240,0.06) 0%, transparent 70%)"
            index={0}
          />
          <PlatformCard
            platform={{
              name: "LetsGO",
              tagline: "Intelligent rideshare. Real communities. Every trip, safe.",
              description:
                "A next-generation mobility platform connecting riders and drivers through intelligent dispatch, live GPS tracking, and Stripe Connect payouts — built to meet Australian transport compliance standards.",
              badge: "Mobility Platform",
            }}
            features={letsGoFeatures}
            logoSrc="/icon_letsgo.png"
            logoAlt="LetsGO"
            brandColor="#E8511A"
            accentBg="radial-gradient(circle, rgba(232,81,26,0.06) 0%, transparent 70%)"
            index={1}
          />
        </div>

        {/* Shared infrastructure row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-0"
        >
          {[
            { icon: ShieldCheck, label: "Shared Security Core",  color: "#1AABF0" },
            { icon: Bot,         label: "Unified AI Layer",      color: "#4A4F4A" },
            { icon: CreditCard,  label: "Stripe Infrastructure", color: "#E8511A" },
          ].map((item, i) => (
            <div key={item.label} className="flex items-center">
              <div className="flex flex-col items-center gap-2 px-6 py-4">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center"
                  style={{ background: `${item.color}10` }}
                >
                  <item.icon size={20} style={{ color: item.color }} />
                </div>
                <span className="text-xs text-[#6B7280] font-medium text-center">{item.label}</span>
              </div>
              {i < 2 && (
                <div className="hidden sm:block h-px w-12 bg-gradient-to-r from-[rgba(0,0,0,0.08)] to-[rgba(0,0,0,0.08)]" aria-hidden="true" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
