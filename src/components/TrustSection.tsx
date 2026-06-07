"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  ShieldCheck, Lock, Eye, UserCheck, AlertTriangle, FileCheck,
  Server, KeyRound
} from "lucide-react";

const trustPillars = [
  {
    icon: Lock,
    title: "Stripe-Secured Payments",
    description:
      "All transactions processed via Stripe's PCI-DSS Level 1 infrastructure. Escrow protection ensures funds are only released upon verified completion.",
    badge: "PCI-DSS Level 1",
    color: "#1AABF0",
  },
  {
    icon: UserCheck,
    title: "Identity Verification",
    description:
      "Every provider and driver undergoes rigorous identity verification during onboarding — ID checks, document validation, and background screening.",
    badge: "KYC Compliant",
    color: "#0A8FCC",
  },
  {
    icon: Server,
    title: "Encrypted Infrastructure",
    description:
      "All data encrypted in transit (TLS 1.3) and at rest (AES-256). Database encryption, secure key management, and regular security audits.",
    badge: "AES-256 + TLS 1.3",
    color: "#4A4F4A",
  },
  {
    icon: FileCheck,
    title: "Compliance-First Operations",
    description:
      "Built around Australian Privacy Principles, Privacy Act 1988, and transport regulations. Every data collection is disclosed and consented.",
    badge: "Privacy Act 1988",
    color: "#1AABF0",
  },
  {
    icon: AlertTriangle,
    title: "AI Fraud Prevention",
    description:
      "Machine learning models continuously analyse patterns across both platforms — identifying suspicious activity and flagging accounts in realtime.",
    badge: "Realtime AI",
    color: "#0A8FCC",
  },
  {
    icon: Eye,
    title: "Safety Monitoring",
    description:
      "Continuous monitoring throughout every trip and transaction — with in-app emergency access, live tracking, and automated incident escalation.",
    badge: "24/7 Active",
    color: "#4A4F4A",
  },
];

const complianceBadges = [
  "Australian Privacy Principles",
  "Privacy Act 1988",
  "Cookie Disclosure",
  "Stripe Payment Disclosure",
  "WCAG 2.1 AA",
  "Data Collection Transparency",
  "AI Monitoring Disclosure",
  "Location Tracking Disclosure",
  "User Rights Support",
];

export default function TrustSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const badgesRef = useRef(null);
  const badgesInView = useInView(badgesRef, { once: true, margin: "-60px" });

  return (
    <section id="trust" className="section-padding bg-[#F4F8FB]" aria-labelledby="trust-heading">
      <div className="container-tight">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#1AABF0] mb-4 block">
            Trust & Safety
          </span>
          <h2
            id="trust-heading"
            className="text-[clamp(28px,4vw,52px)] font-semibold tracking-tight text-[#111111] max-w-3xl mx-auto text-balance"
          >
            Safety is not a feature.
            <br />
            It's the foundation.
          </h2>
          <p className="mt-6 text-lg text-[#4A4F4A] max-w-2xl mx-auto leading-relaxed font-light">
            Every architectural decision — from payment processing to data storage — is made
            with the safety of our users as the non-negotiable constraint.
          </p>
        </motion.div>

        {/* Trust pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {trustPillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 25 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-[24px] p-6 border border-[rgba(0,0,0,0.05)] shadow-[var(--shadow-card)] group hover:border-[rgba(0,0,0,0.1)] transition-all duration-300"
              role="article"
              aria-label={pillar.title}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: `${pillar.color}12` }}
                >
                  <pillar.icon size={18} style={{ color: pillar.color }} aria-hidden="true" />
                </div>
                <div>
                  <span
                    className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2 inline-block"
                    style={{ background: `${pillar.color}10`, color: pillar.color }}
                  >
                    {pillar.badge}
                  </span>
                  <h3 className="text-base font-semibold text-[#111111] mb-2">{pillar.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Australian Compliance section */}
        <motion.div
          ref={badgesRef}
          initial={{ opacity: 0, y: 30 }}
          animate={badgesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#111111] rounded-[32px] p-8 md:p-12 text-white overflow-hidden relative"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.04]"
              style={{ background: "radial-gradient(circle, #1AABF0 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-[0.04]"
              style={{ background: "radial-gradient(circle, #0A8FCC 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#1AABF0]/20 flex items-center justify-center">
                <ShieldCheck size={20} className="text-[#1AABF0]" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Australian Compliance Standards</h3>
                <p className="text-sm text-gray-400">Meeting every regulatory requirement for operation in Australia</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {complianceBadges.map((badge, i) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={badgesInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-center gap-1.5 bg-white/8 border border-white/10 text-xs text-gray-300 px-3.5 py-1.5 rounded-full font-medium hover:bg-white/12 transition-colors"
                >
                  <KeyRound size={10} className="text-[#1AABF0]" aria-hidden="true" />
                  {badge}
                </motion.span>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/8 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "APP", label: "Privacy Principles" },
                { value: "WCAG 2.1", label: "Accessibility" },
                { value: "PCI-DSS", label: "Payment Security" },
                { value: "AES-256", label: "Data Encryption" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
                  <div className="text-xs text-gray-500 font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
