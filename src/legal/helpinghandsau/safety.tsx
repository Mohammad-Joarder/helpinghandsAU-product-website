import { HH_LEGAL_ACCENT as A } from "./accent";

export default function HelpingHandsLegalSafetyBody() {
  return (
    <div className="space-y-8 text-sm text-[#4A4F4A] leading-relaxed">
      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Our Safety Commitment</h2>
        <p>
          Safety is the foundational principle behind every feature we build on HelpingHandsAU.
          Whether you are posting a task, placing a bid, or completing a job, our multi-layer
          safety architecture is working in the background to protect every party.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Provider Verification</h2>
        <p>All service providers must complete the following before accepting tasks:</p>
        <ul className="list-disc pl-5 space-y-1.5 mt-3">
          <li>Government-issued photo ID verification</li>
          <li>ABN verification and tax compliance check</li>
          <li>Relevant trade licence or qualification verification (where applicable)</li>
          <li>Background and police check (for categories involving access to homes or care of people)</li>
          <li>Profile photograph matched against ID documents</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Escrow Payment Protection</h2>
        <p>
          Funds are held in escrow by Stripe and only released to the Provider after the Task
          Poster confirms satisfactory completion. This ensures:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 mt-3">
          <li>Task Posters are never charged before work begins</li>
          <li>Providers have confidence that funds are secured before commencing work</li>
          <li>Either party can raise a dispute within 48 hours of completion</li>
          <li>Our Trust & Safety team reviews all disputes with evidence from both sides</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">AI-Assisted Platform Monitoring</h2>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Machine learning models monitor all transactions and messaging for fraud indicators</li>
          <li>Automated systems flag unusual bidding patterns, impersonation attempts, and off-platform solicitation</li>
          <li>Review queues are monitored by human Trust & Safety staff 24/7</li>
          <li>Anomalous activity triggers immediate account review and potential suspension</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Ratings & Accountability</h2>
        <p>
          Every completed task generates ratings from both parties. Providers with sustained low
          ratings or multiple complaints are removed from the platform. Task Posters who repeatedly
          breach community guidelines face similar consequences. Ratings cannot be removed or
          manipulated except in cases of documented abuse.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Incident Response</h2>
        <p>
          All safety incidents are reviewed by our Trust & Safety team within 24 hours. Serious
          incidents — including reported physical harm, theft, or fraud — are escalated immediately
          to law enforcement as required by Australian law. We cooperate fully with all regulatory
          and law enforcement investigations.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Report a Safety Concern</h2>
        <p>
          Use the in-app report feature or contact our Trust & Safety team directly:<br />
          Email: <a href="mailto:admin@helpinghandsau.com" style={{ color: A }}>admin@helpinghandsau.com</a>
        </p>
      </section>
    </div>
  );
}
