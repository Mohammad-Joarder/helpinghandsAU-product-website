import { HH_LEGAL_ACCENT as A } from "./accent";

export default function HelpingHandsLegalTermsBody() {
  return (
    <div className="space-y-8 text-sm text-[#4A4F4A] leading-relaxed">
      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">1. Acceptance of Terms</h2>
        <p>
          By accessing or using the HelpingHandsAU platform (including website and mobile
          application), you agree to be bound by these Terms of Service and all applicable
          Australian laws and regulations. If you do not agree, please do not use our platform.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">2. Platform Description</h2>
        <p>
          <strong>HelpingHandsAU</strong> is a marketplace platform that connects customers
          (&quot;Task Posters&quot;) seeking local services with verified service providers (&quot;Providers&quot;).
          We facilitate transactions through an escrow payment system powered by Stripe, but are
          not a party to the service agreements formed between Task Posters and Providers.
        </p>
        <p className="mt-3">
          Providers are independent contractors, not employees of HelpingHandsAU Pty Ltd. We make
          no guarantee regarding the quality, safety, or legality of services offered by Providers,
          though we maintain rigorous verification standards as a condition of platform participation.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">3. User Eligibility</h2>
        <p>You must be at least 18 years of age to use HelpingHandsAU. By creating an account, you represent that:</p>
        <ul className="list-disc pl-5 space-y-1.5 mt-3">
          <li>You are 18 years of age or older</li>
          <li>You have the legal capacity to enter into binding contracts in Australia</li>
          <li>All information you provide during registration is accurate and complete</li>
          <li>You will maintain the security of your account credentials</li>
          <li>You are not a person barred from using services under Australian law</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">4. Posting Tasks</h2>
        <p>Task Posters agree to:</p>
        <ul className="list-disc pl-5 space-y-1.5 mt-3">
          <li>Accurately describe the scope, requirements, and location of all tasks</li>
          <li>Set a fair and reasonable budget in Australian dollars (AUD)</li>
          <li>Respond promptly to provider bids and communications</li>
          <li>Only post tasks that are legal under applicable Australian law</li>
          <li>Not request services that are unsafe, hazardous, or require unlicensed work</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">5. Provider Obligations</h2>
        <p>Service Providers agree to:</p>
        <ul className="list-disc pl-5 space-y-1.5 mt-3">
          <li>Hold all licences, insurances, and qualifications required by law to perform offered services</li>
          <li>Provide accurate profile information, qualifications, and availability</li>
          <li>Complete accepted tasks to a professional standard</li>
          <li>Comply with all applicable workplace health and safety obligations</li>
          <li>Maintain an ABN and comply with Australian tax obligations on earnings</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">6. Payments, Escrow & Fees</h2>
        <p>
          All payments are processed through Stripe, a PCI-DSS Level 1 certified payment processor.
          Funds are held in escrow upon task acceptance and released to the Provider only after the
          Task Poster confirms satisfactory completion. Platform service fees are disclosed at the
          point of transaction and deducted from the agreed task amount. We comply with the
          Australian Consumer Law regarding pricing transparency and refund rights.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">7. Disputes</h2>
        <p>
          If a dispute arises between a Task Poster and Provider, either party may raise a formal
          dispute within 48 hours of service completion via the in-app dispute feature. Our Trust
          & Safety team will review evidence from both parties and issue a determination within
          5 business days. Determinations may result in full refund, partial refund, or full
          release of escrow funds.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">8. Prohibited Conduct</h2>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Providing false information during registration, verification, or task posting</li>
          <li>Using the platform for any illegal purpose</li>
          <li>Harassing, threatening, or discriminating against other users</li>
          <li>Circumventing platform payment systems by transacting off-platform</li>
          <li>Creating multiple accounts to evade bans or platform restrictions</li>
          <li>Attempting to reverse-engineer or compromise platform security</li>
          <li>Engaging in fraudulent activity, including submitting false reviews</li>
          <li>Soliciting personal contact information to conduct transactions outside the platform</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">9. AI-Assisted Monitoring</h2>
        <p>
          You acknowledge that our platform uses AI and automated systems to monitor activity for
          safety, fraud prevention, and compliance purposes. Automated decisions may affect your
          account access or standing. You have the right to request human review of any automated
          decision by contacting{" "}
          <a href="mailto:admin@helpinghandsau.com" style={{ color: A }}>admin@helpinghandsau.com</a>.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">10. Intellectual Property</h2>
        <p>
          All platform content, trademarks, software, and technology are the property of
          HelpingHandsAU Pty Ltd or its licensors. You may not reproduce, distribute, or create
          derivative works without our prior written consent.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">11. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by Australian law, HelpingHandsAU Pty Ltd shall not be
          liable for indirect, incidental, or consequential damages arising from your use of our
          platform. Our liability for direct damages shall not exceed the amount paid by you in
          the 12 months preceding the claim.
        </p>
        <p className="mt-3">
          Nothing in these terms excludes rights under the Australian Consumer Law that cannot
          be lawfully excluded, including consumer guarantees.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">12. Governing Law</h2>
        <p>
          These Terms of Service are governed by the laws of Queensland, Australia. Any disputes
          shall be subject to the exclusive jurisdiction of the courts of Queensland.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">13. Contact</h2>
        <p>
          Legal Team, HelpingHandsAU Pty Ltd<br />
          Email: <a href="mailto:admin@helpinghandsau.com" style={{ color: A }}>admin@helpinghandsau.com</a><br />
          Queensland, Australia
        </p>
      </section>
    </div>
  );
}
