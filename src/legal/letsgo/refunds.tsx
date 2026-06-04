import { LG_LEGAL_ACCENT as A } from "./accent";

export default function LetsGoLegalRefundsBody() {
  return (
    <div className="space-y-8 text-sm text-[#4A4F4A] leading-relaxed">
      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Our Refund Commitment</h2>
        <p>
          LetsGO is committed to fair outcomes for riders and drivers. Our refund and dispute
          resolution processes comply with the <strong>Australian Consumer Law</strong> and the
          consumer guarantee provisions of the Competition and Consumer Act 2010.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">How Fares Work</h2>
        <p>
          Fares are charged automatically at the end of each completed trip via Stripe. An
          upfront fare estimate is provided before booking. Final fares may vary if the route
          changes at the rider&apos;s request. All fare receipts are sent via the app and email
          immediately after trip completion.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Cancellations</h2>
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>Before driver acceptance:</strong> Rider may cancel at no charge at any time</li>
          <li><strong>Within 2 minutes of driver acceptance:</strong> Rider may cancel at no charge</li>
          <li><strong>After 2 minutes of driver acceptance:</strong> Cancellation fee applies — the fee amount is shown in-app before confirming cancellation</li>
          <li><strong>Driver cancellation after acceptance:</strong> No charge to rider; driver&apos;s cancellation rate is reviewed</li>
          <li><strong>Rider no-show:</strong> If rider is not at pickup location within the grace period, a no-show fee may be charged and the driver may depart</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Fare Disputes</h2>
        <p>
          If you believe you were charged an incorrect fare, you may submit a fare dispute within
          24 hours of trip completion via the in-app support feature. Include the trip date, time,
          and the reason for your dispute. Our team will review the trip data including GPS route,
          time, and distance records and respond within 3 business days.
        </p>
        <p className="mt-3">
          Common grounds for fare refund or adjustment include: significant route deviations by
          the driver, app or GPS errors affecting fare calculation, and fare charges for trips
          that were not completed.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Dispute Resolution Process</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Submit a dispute via the in-app support feature within 24 hours of the trip</li>
          <li>Provide details of your concern and any supporting evidence</li>
          <li>Our Trust & Safety team reviews GPS data, fare records, and any messages</li>
          <li>A determination is issued within <strong>3 business days</strong></li>
          <li>Approved refunds are processed to your original payment method within 5 business days</li>
          <li>You may appeal the determination within 7 days by contacting our support team</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Service Fee Refunds</h2>
        <p>
          LetsGO&apos;s platform service fee is generally non-refundable once a trip is completed, as
          it covers dispatch, safety monitoring, and payment processing. Exceptions apply where
          the driver was at fault for the trip failure or where a serious safety incident is
          confirmed.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">How to Request a Refund</h2>
        <p>
          Use the in-app dispute feature, or contact our support team at{" "}
          <a href="mailto:admin@letsgo.com.au" style={{ color: A }}>admin@letsgo.com.au</a>.
          Please include your trip ID (found in your trip history), the date and time of the trip,
          and the nature of your concern.
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
