import { HH_LEGAL_ACCENT as A } from "./accent";

export default function HelpingHandsLegalAccessibilityBody() {
  return (
    <div className="space-y-8 text-sm text-[#4A4F4A] leading-relaxed">
      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Our Commitment</h2>
        <p>
          HelpingHandsAU is committed to ensuring digital accessibility for all people, including
          those with disabilities. We believe that everyone deserves equal access to the tools
          that connect Australians with trusted services. We continually improve our user
          experience and apply relevant accessibility standards across all our platforms.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Conformance Status</h2>
        <p>
          We aim to conform to the{" "}
          <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong>. Current
          conformance measures include:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 mt-3">
          <li>All images include descriptive <code>alt</code> text</li>
          <li>Colour contrast ratios meet or exceed 4.5:1 for normal text</li>
          <li>All interactive elements are fully keyboard navigable</li>
          <li>Focus states are visually distinct and consistent across the platform</li>
          <li>Screen reader support via ARIA labels and landmark roles</li>
          <li>No content relies on colour alone to convey information</li>
          <li>Skip-to-main-content link available on all pages</li>
          <li>All form inputs are labelled with visible, associated labels</li>
          <li>Mobile app (iOS and Android) follows platform accessibility guidelines</li>
          <li>Touch targets meet minimum size requirements on mobile</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Mobile App Accessibility</h2>
        <p>
          The HelpingHandsAU mobile app (iOS and Android) is designed to support system-level
          accessibility features including Dynamic Type, VoiceOver (iOS), TalkBack (Android),
          high contrast mode, and reduced motion preferences.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Known Limitations</h2>
        <p>
          Some older PDF documents and third-party embedded content (including Stripe payment
          flows) may not fully conform to WCAG 2.1 AA. We are actively working to remediate
          these. If you encounter an accessibility barrier, please contact us.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Feedback and Contact</h2>
        <p>
          If you experience any accessibility barriers, or need content provided in an alternative
          format, please contact:{" "}
          <a href="mailto:admin@helpinghandsau.com" style={{ color: A }}>admin@helpinghandsau.com</a>
        </p>
        <p className="mt-3">We aim to respond to all accessibility requests within 5 business days.</p>
      </section>
    </div>
  );
}
