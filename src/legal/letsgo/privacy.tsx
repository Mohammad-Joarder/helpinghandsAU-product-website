import Link from "next/link";
import { LG_LEGAL_ACCENT as A } from "./accent";

export default function LetsGoLegalPrivacyBody() {
  return (
    <div className="space-y-8 text-sm text-[#4A4F4A] leading-relaxed">
      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">1. Introduction</h2>
        <p>
          LetsGO Pty Ltd (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates the LetsGO rideshare platform and is
          committed to protecting your personal information and your right to privacy. This Privacy
          Policy describes how we collect, use, disclose, and safeguard your information when you
          use our platform, website, and mobile application — whether you are a rider or a driver.
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
          <li>Government-issued driver&apos;s licence (drivers) and identity documents</li>
          <li>Vehicle registration, make, model, and year (drivers)</li>
          <li>Comprehensive insurance documents and expiry dates (drivers)</li>
          <li>Police check certificate and results (drivers)</li>
          <li>Payment information — processed securely via Stripe; we do not store card details</li>
          <li>Profile photographs and biographical information</li>
        </ul>
        <h3 className="text-base font-semibold text-[#2A2D2A] mb-2">2.2 Location Data</h3>
        <p className="mb-4">
          <strong>GPS Location Disclosure:</strong> LetsGO collects precise GPS location data
          throughout the duration of active trips. This data is used to match riders with nearby
          drivers, provide live tracking to riders, calculate fares, and ensure safety. Location
          collection begins when a driver accepts a trip and ends when the trip is completed.
          Background location access is required for drivers during active shifts. Riders&apos; location
          is collected when the app is in use for booking purposes.
        </p>
        <h3 className="text-base font-semibold text-[#2A2D2A] mb-2">2.3 Information Collected Automatically</h3>
        <ul className="list-disc pl-5 space-y-1.5 mb-4">
          <li>Trip history, routes, pickup and drop-off locations</li>
          <li>Device information (type, operating system, unique identifiers)</li>
          <li>Usage data (app features used, time spent, session data)</li>
          <li>IP address and network information</li>
          <li>
            Cookies and similar tracking technologies (
            <Link href="/letsgo/legal/cookies" className="underline font-medium" style={{ color: A }}>
              Cookie Policy
            </Link>
            )
          </li>
        </ul>
        <h3 className="text-base font-semibold text-[#2A2D2A] mb-2">2.4 AI Dispatch Data</h3>
        <p>
          Our AI-assisted dispatch system collects and processes driver location, trip history,
          availability status, and performance metrics to optimise trip matching. This data is
          used to improve dispatch efficiency and driver earnings. You have the right to request
          human review of any automated decision that materially affects your account.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">3. How We Use Your Information</h2>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>To provide, operate, and improve the LetsGO rideshare platform</li>
          <li>To verify driver identity, licence, insurance, and police check compliance</li>
          <li>To match riders with nearby available drivers via AI dispatch</li>
          <li>To process payments and fares via Stripe</li>
          <li>To provide live GPS tracking to riders during active trips</li>
          <li>To provide customer support and resolve trip disputes</li>
          <li>To send trip notifications, fare receipts, and safety alerts</li>
          <li>To comply with legal obligations and regulatory requirements</li>
          <li>To conduct safety monitoring and investigate incidents</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">4. Payment Data</h2>
        <p>
          All fare payments are processed by Stripe, Inc., a PCI-DSS Level 1 certified payment
          processor. Fares are charged automatically at trip completion. We retain records of
          transaction amounts, dates, routes, and parties for 7 years as required by Australian
          tax law, but do not store full card or bank details.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">5. Disclosure of Your Information</h2>
        <p>We may disclose your personal information to:</p>
        <ul className="list-disc pl-5 space-y-1.5 mt-3">
          <li>Riders — driver name, photo, rating, and vehicle details shared upon trip acceptance</li>
          <li>Drivers — rider name, pickup location, and trip destination shared upon match</li>
          <li>Stripe Inc. for payment processing (subject to Stripe&apos;s Privacy Policy)</li>
          <li>Identity and licence verification service providers</li>
          <li>Police check agencies (for driver compliance)</li>
          <li>Law enforcement agencies where required by law or court order</li>
          <li>Regulatory authorities (including transport regulators) in connection with our legal obligations</li>
          <li>Cloud infrastructure providers (data stored in Australia)</li>
        </ul>
        <p className="mt-3 font-medium">We do not sell your personal information to third parties.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">6. Data Security</h2>
        <p>
          We implement industry-standard security measures including AES-256 encryption at rest,
          TLS 1.3 encryption in transit, multi-factor authentication for administrative access,
          and regular security audits. GPS data is encrypted in transit and at rest. Despite
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
          <li>Request human review of automated dispatch or account decisions</li>
        </ul>
        <p className="mt-3">
          To exercise these rights, contact our Privacy Officer at{" "}
          <a href="mailto:admin@letsgo.com.au" style={{ color: A }}>admin@letsgo.com.au</a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">8. Data Retention</h2>
        <p>
          Trip records and payment data are retained for 7 years as required by Australian tax law.
          Driver compliance records (licence, insurance, police check) are retained for the
          duration of driver registration plus 3 years. GPS location data from completed trips is
          retained for 2 years for safety and dispute purposes. You may request deletion of other
          data at any time.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">9. Complaints</h2>
        <p>
          If you believe we have breached the Australian Privacy Principles, contact us first at{" "}
          <a href="mailto:admin@letsgo.com.au" style={{ color: A }}>admin@letsgo.com.au</a>.
          If unsatisfied with our response, you may complain to the{" "}
          <strong>Office of the Australian Information Commissioner (OAIC)</strong> under the Privacy Act 1988 (Cth).
          Current OAIC complaint procedures and contact details are published in Commonwealth regulatory materials.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">10. Contact</h2>
        <p>
          Privacy Officer, LetsGO Pty Ltd<br />
          Email: <a href="mailto:admin@letsgo.com.au" style={{ color: A }}>admin@letsgo.com.au</a><br />
          Queensland, Australia
        </p>
      </section>
    </div>
  );
}
