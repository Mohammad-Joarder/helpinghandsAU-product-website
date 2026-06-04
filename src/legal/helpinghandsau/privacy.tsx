import Link from "next/link";
import { HH_LEGAL_ACCENT as A } from "./accent";

export default function HelpingHandsLegalPrivacyBody() {
  return (
    <div className="space-y-8 text-sm text-[#4A4F4A] leading-relaxed">
      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">1. Introduction</h2>
        <p>
          HelpingHandsAU Pty Ltd (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates the HelpingHandsAU marketplace
          platform and is committed to protecting your personal information and your right to
          privacy. This Privacy Policy describes how we collect, use, disclose, and safeguard
          your information when you use our platform, website, and mobile application.
        </p>
        <p className="mt-3">
          This policy is governed by the <strong>Privacy Act 1988 (Cth)</strong> and the{" "}
          <strong>Australian Privacy Principles (APPs)</strong> contained in Schedule 1 of the Act.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">2. Information We Collect</h2>
        <h3 className="text-base font-semibold text-[#2A2D2A] mb-2">2.1 Information You Provide</h3>
        <ul className="list-disc pl-5 space-y-1.5 mb-4">
          <li>Name, email address, phone number, and residential address</li>
          <li>Government-issued identity documents (for provider verification)</li>
          <li>Payment information — processed securely via Stripe; we do not store card details</li>
          <li>Profile photographs and biographical information</li>
          <li>Professional qualifications, licences, and trade certifications (providers)</li>
          <li>Task descriptions, bids, and related communications</li>
        </ul>
        <h3 className="text-base font-semibold text-[#2A2D2A] mb-2">2.2 Information Collected Automatically</h3>
        <ul className="list-disc pl-5 space-y-1.5 mb-4">
          <li>Device information (type, operating system, unique identifiers)</li>
          <li>Usage data (pages visited, features used, time spent)</li>
          <li>Approximate location data to match customers with nearby providers (with consent)</li>
          <li>IP address and network information</li>
          <li>
            Cookies and similar tracking technologies (
            <Link href="/legal/cookies" className="underline font-medium" style={{ color: A }}>
              Cookie Policy
            </Link>
            )
          </li>
        </ul>
        <h3 className="text-base font-semibold text-[#2A2D2A] mb-2">2.3 AI-Assisted Monitoring Disclosure</h3>
        <p>
          We use artificial intelligence and machine learning systems to monitor platform activity
          for fraud detection, safety monitoring, and service quality assurance. These systems
          analyse patterns in transactions, messaging, and behaviour to identify potential risks.
          You have the right to request human review of any automated decision that significantly
          affects you.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">3. How We Use Your Information</h2>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>To provide, operate, and improve the HelpingHandsAU platform</li>
          <li>To verify provider identity and eligibility (ABN, licences, background checks)</li>
          <li>To process payments and manage escrow funds via Stripe</li>
          <li>To facilitate messaging between task posters and providers</li>
          <li>To provide customer support and resolve disputes</li>
          <li>To send service notifications, bid alerts, and task updates</li>
          <li>To comply with legal obligations and regulatory requirements</li>
          <li>To conduct safety monitoring and investigate incidents</li>
          <li>To improve AI and machine learning models (using anonymised data only)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">4. Escrow & Payment Data</h2>
        <p>
          All payments are processed by Stripe, Inc., a PCI-DSS Level 1 certified payment
          processor. Escrow funds are held until task completion is confirmed by the customer.
          We retain records of transaction amounts, dates, and parties for 7 years as required
          by Australian tax law, but do not store full card details.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">5. Disclosure of Your Information</h2>
        <p>We may disclose your personal information to:</p>
        <ul className="list-disc pl-5 space-y-1.5 mt-3">
          <li>Other platform users as necessary to facilitate services (e.g., name and rating shared with matched providers)</li>
          <li>Stripe Inc. for payment processing (subject to Stripe&apos;s Privacy Policy)</li>
          <li>Identity verification service providers</li>
          <li>Law enforcement agencies where required by law or court order</li>
          <li>Regulatory authorities in connection with our legal obligations</li>
          <li>Cloud infrastructure providers (data stored in Australia where possible)</li>
        </ul>
        <p className="mt-3 font-medium">We do not sell your personal information to third parties.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">6. Data Security</h2>
        <p>
          We implement industry-standard security measures including AES-256 encryption at rest,
          TLS 1.3 encryption in transit, multi-factor authentication for administrative access,
          regular security audits, and a coordinated vulnerability disclosure program. Despite
          these measures, no method of transmission over the internet is 100% secure.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">7. Your Rights Under Australian Privacy Law</h2>
        <p>Under the Privacy Act 1988, you have the right to:</p>
        <ul className="list-disc pl-5 space-y-1.5 mt-3">
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate or out-of-date information</li>
          <li>Request deletion of your data (subject to legal retention requirements)</li>
          <li>Opt out of direct marketing communications</li>
          <li>Complain about a breach of your privacy rights</li>
          <li>Request human review of automated decisions that affect you</li>
        </ul>
        <p className="mt-3">
          To exercise these rights, contact our Privacy Officer at{" "}
          <a href="mailto:admin@helpinghandsau.com" style={{ color: A }}>admin@helpinghandsau.com</a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">8. Data Retention</h2>
        <p>
          We retain personal information for as long as necessary to provide services and comply
          with legal obligations. Transaction records are retained for 7 years as required by
          Australian tax law. Identity verification records are retained for 3 years following
          account closure. You may request deletion of other data at any time.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">9. Complaints</h2>
        <p>
          If you believe we have breached the Australian Privacy Principles, contact us first at{" "}
          <a href="mailto:admin@helpinghandsau.com" style={{ color: A }}>admin@helpinghandsau.com</a>.
          If unsatisfied with our response, you may complain to the{" "}
          <strong>Office of the Australian Information Commissioner (OAIC)</strong> under the Privacy Act 1988 (Cth).
          Current OAIC complaint procedures and contact details are published in Commonwealth regulatory materials.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">10. Contact</h2>
        <p>
          Privacy Officer, HelpingHandsAU Pty Ltd<br />
          Email: <a href="mailto:admin@helpinghandsau.com" style={{ color: A }}>admin@helpinghandsau.com</a><br />
          Queensland, Australia
        </p>
      </section>
    </div>
  );
}
