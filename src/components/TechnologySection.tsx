"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Cloud, Cpu, Globe, Zap, Database, Shield,
  Activity, Layers, ArrowUpRight
} from "lucide-react";

const techPillars = [
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description: "Distributed across multiple availability zones with automatic failover and zero-downtime deployments.",
    metric: "99.9%",
    metricLabel: "Uptime SLA",
    color: "#1AABF0",
  },
  {
    icon: Zap,
    title: "Realtime at Scale",
    description: "WebSocket-powered infrastructure handles thousands of concurrent connections with sub-100ms latency.",
    metric: "<100ms",
    metricLabel: "Response Time",
    color: "#0A8FCC",
  },
  {
    icon: Cpu,
    title: "AI-Assisted Intelligence",
    description: "Purpose-trained models for fraud detection, driver matching, provider scoring, and demand forecasting.",
    metric: "ML-Powered",
    metricLabel: "Fraud Detection",
    color: "#4A4F4A",
  },
  {
    icon: Database,
    title: "Data Sovereignty",
    description: "All data stored and processed within Australia. Full compliance with Australian Privacy Principles.",
    metric: "AU-Only",
    metricLabel: "Data Residency",
    color: "#1AABF0",
  },
  {
    icon: Shield,
    title: "Security-First Design",
    description: "Penetration-tested, SOC 2 aligned, with continuous vulnerability scanning and a coordinated disclosure program.",
    metric: "SOC 2",
    metricLabel: "Aligned",
    color: "#0A8FCC",
  },
  {
    icon: Activity,
    title: "Observability Platform",
    description: "Full-stack distributed tracing, real-user monitoring, and automated alerting across all services.",
    metric: "24/7",
    metricLabel: "Monitoring",
    color: "#4A4F4A",
  },
];

const techStack = [
  { layer: "Frontend", items: ["Next.js", "React Native", "TypeScript"] },
  { layer: "Backend", items: ["Node.js", "PostgreSQL", "Redis"] },
  { layer: "Payments", items: ["Stripe Connect", "Escrow Engine", "PCI-DSS"] },
  { layer: "Infrastructure", items: ["Cloud-Native", "CDN Edge", "Auto-scale"] },
  { layer: "AI / ML", items: ["Fraud Detection", "Smart Dispatch", "Risk Scoring"] },
  { layer: "Compliance", items: ["Privacy Act", "APP", "WCAG 2.1"] },
];

export default function TechnologySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const stackRef = useRef(null);
  const stackInView = useInView(stackRef, { once: true, margin: "-60px" });

  return (
    <section id="technology" className="section-padding bg-[#111111] text-white overflow-hidden relative" aria-labelledby="tech-heading">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #1AABF0 0%, transparent 70%)" }} />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-dark" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-dark)" />
        </svg>
      </div>

      <div className="container-tight relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#1AABF0] mb-4 block">
            AI Infrastructure
          </span>
          <h2
            id="tech-heading"
            className="text-[clamp(28px,4vw,52px)] font-semibold tracking-tight text-white max-w-3xl mx-auto text-balance"
          >
            Enterprise-grade infrastructure.
            <br />
            <span className="text-gray-400">Built to scale without limits.</span>
          </h2>
          <p className="mt-6 text-base text-gray-400 max-w-xl mx-auto font-light">
            The same reliability and intelligence that powers global platforms — designed
            and operated natively for Australia's regulatory and infrastructure environment.
          </p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {techPillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group bg-white/[0.04] border border-white/[0.08] rounded-[24px] p-6 hover:bg-white/[0.07] hover:border-white/[0.14] transition-all duration-300"
              role="article"
              aria-label={pillar.title}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${pillar.color}20` }}
                >
                  <pillar.icon size={18} style={{ color: pillar.color }} aria-hidden="true" />
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-white">{pillar.metric}</div>
                  <div className="text-[9px] text-gray-500 uppercase tracking-widest font-medium">{pillar.metricLabel}</div>
                </div>
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{pillar.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech stack */}
        <motion.div
          ref={stackRef}
          initial={{ opacity: 0, y: 30 }}
          animate={stackInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-white/[0.03] border border-white/[0.08] rounded-[32px] p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-xl bg-[#1AABF0]/20 flex items-center justify-center">
              <Layers size={16} className="text-[#1AABF0]" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">Technology Stack</h3>
              <p className="text-xs text-gray-500">Full-stack, production-grade architecture</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack.map((layer, i) => (
              <motion.div
                key={layer.layer}
                initial={{ opacity: 0, y: 15 }}
                animate={stackInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex flex-col"
              >
                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500 mb-2">
                  {layer.layer}
                </span>
                <div className="flex flex-col gap-1.5">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-gray-300 bg-white/5 border border-white/8 px-2.5 py-1.5 rounded-lg font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div className="flex items-center gap-2">
              <Globe size={14} className="text-[#1AABF0]" />
              <span className="text-xs text-gray-400">
                Designed, built, and operated in <span className="text-white font-medium">Australia</span>
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Activity size={12} className="text-[#1AABF0] animate-pulse" />
              <span>All systems operational</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
