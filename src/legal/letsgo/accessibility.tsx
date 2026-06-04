import { LG_LEGAL_ACCENT as A } from "./accent";

export default function LetsGoLegalAccessibilityBody() {
  return (
    <div className="space-y-8 text-sm text-[#4A4F4A] leading-relaxed">
      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Our Commitment</h2>
        <p>
          LetsGO is committed to ensuring that our rideshare platform is accessible to all
          Australians, including people with disabilities. We believe that access to safe,
          affordable transport is a right — not a privilege — and that every feature of our
          platform should be usable by everyone. We continually review and improve accessibility
          across our website and mobile applications.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Web Accessibility — WCAG 2.1 AA</h2>
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
          <li>Map content includes text-based alternatives for users who cannot use interactive maps</li>
          <li>Touch targets meet minimum 44×44px size requirements on mobile</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Mobile App Accessibility</h2>
        <p>
          The LetsGO mobile app (iOS and Android) is designed to fully support system-level
          accessibility features including:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 mt-3">
          <li><strong>VoiceOver (iOS):</strong> All app screens, buttons, trip status updates, and fare information are fully labelled for VoiceOver screen reader users</li>
          <li><strong>TalkBack (Android):</strong> Full TalkBack compatibility with logical navigation order and descriptive element labels</li>
          <li><strong>Dynamic Type / Font scaling:</strong> All text responds correctly to system font size preferences</li>
          <li><strong>High contrast mode:</strong> Platform UI adapts to system high contrast settings</li>
          <li><strong>Reduce Motion:</strong> Animations are reduced or removed when the reduce motion accessibility preference is enabled</li>
          <li><strong>Voice input:</strong> Key functions including booking and SOS can be triggered via voice commands where the platform supports them</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Map Accessibility</h2>
        <p>
          Our live trip tracking map includes accessible alternatives for users who cannot
          navigate interactive maps. Trip status, ETA, and driver information are available as
          plain text alongside the map view.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Known Limitations</h2>
        <p>
          Some third-party embedded content (including Stripe payment flows and mapping tile
          providers) may not fully conform to WCAG 2.1 AA. We are actively working with our
          vendors to address these gaps. If you encounter an accessibility barrier, please
          contact us and we will provide an alternative solution.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Feedback and Contact</h2>
        <p>
          If you experience any accessibility barriers, or need content or assistance provided
          in an alternative format, please contact:{" "}
          <a href="mailto:admin@letsgo.com.au" style={{ color: A }}>admin@letsgo.com.au</a>
        </p>
        <p className="mt-3">We aim to respond to all accessibility requests within 5 business days.</p>
      </section>
    </div>
  );
}
