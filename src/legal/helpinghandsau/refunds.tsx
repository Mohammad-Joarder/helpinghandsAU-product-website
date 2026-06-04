import { HH_LEGAL_ACCENT as A } from "./accent";

export default function HelpingHandsLegalRefundsBody() {
  return (
    <div className="space-y-8 text-sm text-[#4A4F4A] leading-relaxed">
      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Our Refund Commitment</h2>
        <p>
          HelpingHandsAU is committed to fair outcomes for all parties. Our refund and dispute
          resolution processes comply with the <strong>Australian Consumer Law</strong> and the
          consumer guarantee provisions of the Competition and Consumer Act 2010. Our escrow
          model is specifically designed to protect both Task Posters and Providers.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">How Escrow Works</h2>
        <p>
          When a Task Poster accepts a bid, the agreed task amount is held in escrow by Stripe —
          not by the Provider and not directly by HelpingHandsAU. This means:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 mt-3">
          <li>Funds are only released to the Provider after the Task Poster confirms completion</li>
          <li>If the task is not completed, funds are never released to the Provider</li>
          <li>A dispute can be raised at any point during or within 48 hours after service delivery</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Cancellations</h2>
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>Before acceptance:</strong> Task Posters may cancel with no charge at any time before accepting a bid</li>
          <li><strong>After acceptance, before commencement:</strong> Full refund issued; cancellation fee may apply depending on Provider costs incurred</li>
          <li><strong>After commencement:</strong> Partial refund based on work completed; determined by our Trust & Safety team following dispute review</li>
          <li><strong>Provider no-show:</strong> Full refund issued within 2 business days</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Dispute Resolution Process</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Either party submits a dispute via the in-app feature within 48 hours of completion</li>
          <li>Both parties are invited to submit evidence (photos, messages, descriptions)</li>
          <li>Our Trust & Safety team reviews all evidence and may contact parties for clarification</li>
          <li>A determination is issued within <strong>5 business days</strong></li>
          <li>Determinations result in full refund, partial refund, or full release of escrow funds</li>
          <li>Either party may appeal within 7 days of the determination</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Platform Fee Refunds</h2>
        <p>
          HelpingHandsAU&apos;s platform service fee is generally non-refundable once a task has been
          accepted, as it covers the costs of matching, verification, and escrow management.
          Exceptions apply where a Provider cancels or where a serious safety incident is confirmed.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">How to Request a Refund</h2>
        <p>
          Use the in-app dispute feature, or contact our support team at{" "}
          <a href="mailto:admin@helpinghandsau.com" style={{ color: A }}>admin@helpinghandsau.com</a>.
          Please include your task ID, the nature of your concern, and any supporting evidence.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Australian Consumer Law</h2>
        <p>
          Nothing in this policy limits or excludes your rights under the Australian Consumer Law.
          If a refund remedy applies under Australian Consumer Law, we will honour it regardless
          of the terms of this policy. Your statutory rights under the <strong>Competition and Consumer Act 2010 (Cth)</strong> are not limited by this page.
        </p>
      </section>
    </div>
  );
}
