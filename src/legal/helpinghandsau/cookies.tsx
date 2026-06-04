import { HH_LEGAL_ACCENT as A } from "./accent";

export default function HelpingHandsLegalCookiesBody() {
  return (
    <div className="space-y-8 text-sm text-[#4A4F4A] leading-relaxed">
      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">1. What Are Cookies</h2>
        <p>
          Cookies are small text files placed on your device when you visit our website or use our
          platform. We also use similar technologies including local storage, session storage, and
          device fingerprinting to support platform functionality, security, and fraud prevention.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">2. Types of Cookies We Use</h2>

        <h3 className="text-base font-semibold text-[#2A2D2A] mb-2">2.1 Essential Cookies</h3>
        <p className="mb-4">
          Required for the platform to function. These cannot be disabled. They include
          authentication tokens, secure session identifiers, CSRF protection tokens, and
          user preference settings necessary for core functionality.
        </p>

        <h3 className="text-base font-semibold text-[#2A2D2A] mb-2">2.2 Analytics Cookies</h3>
        <p className="mb-4">
          Used to understand how users interact with HelpingHandsAU — which features are used,
          where users drop off, and how we can improve the experience. All data is anonymised and
          aggregated. You may opt out via the cookie consent banner.
        </p>

        <h3 className="text-base font-semibold text-[#2A2D2A] mb-2">2.3 Fraud Prevention Cookies</h3>
        <p className="mb-4">
          Our AI-assisted fraud prevention system uses cookies to identify anomalous behaviour,
          protect escrow transactions, and detect account misuse. These cookies support platform
          safety and cannot be fully disabled for security reasons.
        </p>

        <h3 className="text-base font-semibold text-[#2A2D2A] mb-2">2.4 Payment Processing Cookies</h3>
        <p>
          Stripe sets cookies to support secure payment processing and fraud detection. These are
          governed by Stripe&apos;s own cookie and privacy policy. We do not control Stripe&apos;s cookies.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">3. Managing Cookies</h2>
        <p>
          You can manage cookie preferences through our cookie consent banner, through your
          browser settings, or by contacting us. Disabling non-essential cookies may affect
          certain platform features such as personalisation and analytics.
        </p>
        <p className="mt-3">
          Most modern browsers allow you to view, manage, delete, and block cookies. Consult
          your browser&apos;s help documentation for specific instructions.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">4. Third-Party Cookies</h2>
        <p>
          We use Stripe for payment processing, which may set its own cookies. We do not use
          advertising networks or sell data to ad platforms. We do not place third-party
          tracking pixels on our platform.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">5. Contact</h2>
        <p>
          Privacy Officer: <a href="mailto:admin@helpinghandsau.com" style={{ color: A }}>admin@helpinghandsau.com</a>
        </p>
      </section>
    </div>
  );
}
