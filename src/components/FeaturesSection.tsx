"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Bot, Shield, Zap, Lock, CheckCircle, Radio,
  Cpu, Globe, Layers, ArrowRight
} from "lucide-react";

const features = [
  {
    id: "ai-operations",
    icon: Bot,
    title: "AI-Assisted Operations",
    subtitle: "Intelligent by design",
    description:
      "Proprietary AI models monitor every transaction, trip, and interaction in realtime — detecting anomalies, flagging risk, and accelerating review queues before issues arise.",
    color: "#1AABF0",
    details: [
      "Fraud pattern recognition",
      "Behavioural anomaly detection",
      "Smart provider scoring",
      "Automated risk flagging",
    ],
  },
  {
    id: "secure-payments",
    icon: Lock,
    title: "Secure Payment Infrastructure",
    subtitle: "Stripe-powered, escrow-protected",
    description:
      "Every dollar is protected. Stripe-secured escrow holds payments until work is verified. Stripe Connect enables instant, compliant driver payouts. PCI-DSS compliant end-to-end.",
    color: "#0A8FCC",
    details: [
      "Escrow payment protection",
      "Stripe Connect driver payouts",
      "PCI-DSS compliance",
      "Refund dispute management",
    ],
  },
  {
    id: "realtime",
    icon: Radio,
    title: "Realtime Infrastructure",
    subtitle: "Sub-second, always-on",
    description:
      "Live messaging, GPS tracking, trip orchestration, and bidding flows run on a distributed realtime backbone — engineered for zero-downtime at scale.",
    color: "#4A4F4A",
    details: [
      "Realtime GPS trip tracking",
      "Live in-app messaging",
      "Instant bid notifications",
      "Websocket-powered dispatch",
    ],
  },
  {
    id: "compliance",
    icon: CheckCircle,
    title: "Compliance Architecture",
    subtitle: "Australian-first regulatory design",
    description:
      "Built around the Privacy Act 1988, Australian Privacy Principles, and transport regulations. Every data flow is auditable, every consent is documented.",
    color: "#1AABF0",
    details: [
      "Privacy Act 1988 alignment",
      "Australian Privacy Principles",
      "Consent and data management",
      "Regulatory audit trails",
    ],
  },
  {
    id: "safety",
    icon: Shield,
    title: "Safety Architecture",
    subtitle: "Protecting everyone, always",
    description:
      "Multi-layer safety systems protect riders, drivers, customers, and providers alike — from identity verification at onboarding through to post-trip safety check-ins.",
    color: "#0A8FCC",
    details: [
      "Identity verification (IDV)",
      "In-trip safety monitoring",
      "Emergency contact systems",
      "Incident reporting workflows",
    ],
  },
  {
    id: "intelligence",
    icon: Cpu,
    title: "Operational Intelligence",
    subtitle: "Data-driven, real-world outcomes",
    description:
      "Enterprise dashboards give operators full visibility into platform health, provider performance, trip completion rates, and payment velocity — in realtime.",
    color: "#4A4F4A",
    details: [
      "Operator analytics dashboards",
      "Provider performance metrics",
      "Payment velocity reporting",
      "Platform health monitoring",
    ],
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-white rounded-[24px] p-7 border border-[rgba(0,0,0,0.05)] card-hover overflow-hidden cursor-default"
      style={{ boxShadow: "var(--shadow-card)" }}
      role="article"
      aria-label={feature.title}
    >
      {/* Hover background glow */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-[24px] pointer-events-none"
        style={{ background: `radial-gradient(circle at 20% 20%, ${feature.color}06 0%, transparent 60%)` }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${feature.color}12` }}
        >
          <feature.icon size={20} style={{ color: feature.color }} aria-hidden="true" />
        </div>

        {/* Label */}
        <span className="text-[10px] font-semibold uppercase tracking-widest mb-2 block" style={{ color: feature.color }}>
          {feature.subtitle}
        </span>

        {/* Title */}
        <h3 className="text-xl font-semibold text-[#111111] tracking-tight mb-3">{feature.title}</h3>

        {/* Description */}
        <p className="text-sm text-[#6B7280] leading-relaxed mb-5">{feature.description}</p>

        {/* Details */}
        <ul className="space-y-2">
          {feature.details.map((detail) => (
            <li key={detail} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: feature.color }} />
              <span className="text-xs text-[#4A4F4A] font-medium">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="section-padding bg-[#ECECE8]" aria-labelledby="features-heading">
      <div className="container-tight">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0A8FCC] mb-4 block">
            Platform Capabilities
          </span>
          <h2
            id="features-heading"
            className="text-[clamp(28px,4vw,52px)] font-semibold tracking-tight text-[#111111] max-w-3xl mx-auto text-balance"
          >
            Enterprise capabilities.
            <br />
            Thoughtfully integrated.
          </h2>
          <p className="mt-6 text-lg text-[#4A4F4A] max-w-xl mx-auto leading-relaxed font-light">
            Every feature is intentional. No bloat, no complexity for complexity's sake —
            just powerful systems that work reliably at scale.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <FeatureCard key={feature.id} feature={feature} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-4 border border-[rgba(0,0,0,0.06)] shadow-[var(--shadow-subtle)]">
            <Globe size={16} className="text-[#1AABF0]" />
            <span className="text-sm text-[#4A4F4A]">
              Fully operational across <strong className="text-[#111111]">Australia</strong> — compliant, secure, and scalable
            </span>
            <ArrowRight size={14} className="text-[#6B7280]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
