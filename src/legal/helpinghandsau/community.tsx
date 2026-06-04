import { HH_LEGAL_ACCENT as A } from "./accent";

export default function HelpingHandsLegalCommunityBody() {
  return (
    <div className="space-y-8 text-sm text-[#4A4F4A] leading-relaxed">
      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Our Community Standards</h2>
        <p>
          HelpingHandsAU is built on trust between people. Every task posted, every bid placed,
          and every job completed represents a real relationship between Australians. We expect
          every member of our community — Task Posters and Providers alike — to uphold the
          standards that make this marketplace work.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Respect and Inclusion</h2>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Treat all users with dignity and respect regardless of background, identity, or belief</li>
          <li>Zero tolerance for discrimination, harassment, or threatening behaviour</li>
          <li>Maintain professional conduct in all platform communications</li>
          <li>Respect the privacy of other users — do not share personal contact details publicly</li>
          <li>Do not contact other users outside the platform for platform-related matters</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Honesty and Integrity</h2>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Provide accurate descriptions of tasks, services, and qualifications</li>
          <li>Submit only genuine, honest reviews based on your direct experience</li>
          <li>Do not engage in off-platform transactions to avoid platform fees or escrow protections</li>
          <li>Report suspected fraud, fake reviews, or account misuse to our team immediately</li>
          <li>Providers must hold all required licences and insurances before accepting work</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Safety First</h2>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Prioritise safety in every interaction and on every job</li>
          <li>Do not request or perform work that is unsafe, unlicensed, or poses a hazard</li>
          <li>Report any safety concern immediately through the platform or by contacting us</li>
          <li>Comply with all applicable work health and safety laws</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Fair Bidding</h2>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Bids must reflect genuine willingness and ability to complete the described task</li>
          <li>Do not submit unrealistically low bids with intention to renegotiate after acceptance</li>
          <li>Price gouging, collusion, or bid manipulation is a serious violation</li>
          <li>Task Posters must not artificially inflate or misrepresent task budgets</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Enforcement</h2>
        <p>
          Violations of these guidelines may result in warnings, temporary suspension, or permanent
          removal from the platform. Our AI-assisted monitoring system may flag potential violations
          for human review. You have the right to appeal any moderation decision by contacting{" "}
          <a href="mailto:admin@helpinghandsau.com" style={{ color: A }}>admin@helpinghandsau.com</a>.
        </p>
      </section>
    </div>
  );
}
