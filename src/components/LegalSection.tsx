"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Shield, Cookie, Users, Star, RefreshCw, Accessibility, ChevronRight } from "lucide-react";

const legalDocuments = [
  {
    icon: Shield,
    title: "Privacy Policy",
    description: "How we collect, use, store and protect your personal information in accordance with the Privacy Act 1988 and Australian Privacy Principles.",
    href: "/legal/privacy",
    badge: "Privacy Act 1988",
    color: "#1AABF0",
  },
  {
    icon: FileText,
    title: "Terms of Service",
    description: "The legal agreement governing your use of HelpingHandsAu and LetsGO platforms, including user rights and obligations.",
    href: "/legal/terms",
    badge: "Updated 2025",
    color: "#0A8FCC",
  },
  {
    icon: Cookie,
    title: "Cookie Policy",
    description: "Information about the cookies and tracking technologies we use, what data they collect, and how to manage your preferences.",
    href: "/legal/cookies",
    badge: "GDPR Aligned",
    color: "#4A4F4A",
  },
  {
    icon: Users,
    title: "Community Guidelines",
    description: "The standards of behaviour expected from all users, providers, drivers, and riders on our platforms.",
    href: "/legal/community",
    badge: "Community",
    color: "#1AABF0",
  },
  {
    icon: Star,
    title: "Safety Standards",
    description: "Our comprehensive safety framework covering identity verification, trip monitoring, and incident response.",
    href: "/legal/safety",
    badge: "Safety",
    color: "#0A8FCC",
  },
  {
    icon: RefreshCw,
    title: "Refund Policy",
    description: "Clear, fair refund and dispute resolution procedures for both customers and service providers.",
    href: "/legal/refunds",
    badge: "Consumer Law",
    color: "#4A4F4A",
  },
  {
    icon: Accessibility,
    title: "Accessibility Statement",
    description: "Our commitment to WCAG 2.1 AA compliance and the specific measures we've taken to ensure equal access.",
    href: "/legal/accessibility",
    badge: "WCAG 2.1 AA",
    color: "#1AABF0",
  },
];

export default function LegalSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="legal" className="section-padding bg-[#F4F8FB]" aria-labelledby="legal-heading">
      <div className="container-tight">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#4A4F4A] mb-4 block">
            Legal & Compliance
          </span>
          <h2
            id="legal-heading"
            className="text-[clamp(28px,4vw,52px)] font-semibold tracking-tight text-[#111111] max-w-2xl mx-auto text-balance"
          >
            Transparent by principle.
            <br />
            Compliant by design.
          </h2>
          <p className="mt-5 text-base text-[#4A4F4A] max-w-xl mx-auto font-light">
            We believe trust is built through transparency. Every policy is written in plain language,
            regularly updated, and fully compliant with Australian law.
          </p>
        </motion.div>

        {/* Legal document cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {legalDocuments.map((doc, i) => (
            <motion.a
              key={doc.title}
              href={doc.href}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group bg-white rounded-[20px] p-5 border border-[rgba(0,0,0,0.05)] shadow-[var(--shadow-subtle)] hover:shadow-[var(--shadow-card)] hover:border-[rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A8FCC] focus-visible:ring-offset-2"
              aria-label={`Read our ${doc.title}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${doc.color}10` }}
                >
                  <doc.icon size={16} style={{ color: doc.color }} aria-hidden="true" />
                </div>
                <ChevronRight
                  size={14}
                  className="text-[#BEBEBE] group-hover:text-[#6B7280] group-hover:translate-x-0.5 transition-all duration-200"
                  aria-hidden="true"
                />
              </div>
              <span
                className="text-[9px] font-bold uppercase tracking-widest mb-2 inline-block"
                style={{ color: doc.color }}
              >
                {doc.badge}
              </span>
              <h3 className="text-sm font-semibold text-[#111111] mb-2 group-hover:text-[#2A2D2A] transition-colors">
                {doc.title}
              </h3>
              <p className="text-xs text-[#6B7280] leading-relaxed flex-1">{doc.description}</p>
            </motion.a>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 bg-[#ECECE8] rounded-2xl p-6 text-center"
        >
          <p className="text-xs text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            HelpingHandsAu and LetsGO are operated by Australian entities and comply with all applicable
            Australian laws including the Privacy Act 1988, Competition and Consumer Act 2010, and
            relevant state transport regulations. For legal enquiries, contact{" "}
            <a href="mailto:admin@helpinghandsau.com" className="text-[#1AABF0] hover:underline font-medium">
              admin@helpinghandsau.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
