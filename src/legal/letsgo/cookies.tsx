import { LG_LEGAL_ACCENT as A } from "./accent";

export default function LetsGoLegalCookiesBody() {
  return (
    <div className="space-y-8 text-sm text-[#4A4F4A] leading-relaxed">
      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">1. What Are Cookies</h2>
        <p>
          Cookies are small text files placed on your device when you visit our website or use
          our mobile application. We also use similar technologies including local storage,
          session storage, and device identifiers to support platform functionality, security,
          and trip operations.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">2. Types of Cookies We Use</h2>

        <h3 className="text-base font-semibold text-[#2A2D2A] mb-2">2.1 Essential Cookies</h3>
        <p className="mb-4">
          Required for the platform to function. These cannot be disabled. They include
          authentication tokens, secure session identifiers, CSRF protection tokens,
          and user preference settings necessary for core functionality including trip booking
          and driver availability status.
        </p>

        <h3 className="text-base font-semibold text-[#2A2D2A] mb-2">2.2 Location Session Cookies</h3>
        <p className="mb-4">
          <strong>Location data disclosure:</strong> During active trips, LetsGO stores temporary
          location session data to power real-time GPS tracking, live rider ETAs, and route
          calculation. These session records are created when a trip begins and expire when a
          trip ends. This data is essential to the rideshare service and cannot be disabled during
          an active trip.
        </p>

        <h3 className="text-base font-semibold text-[#2A2D2A] mb-2">2.3 AI Dispatch Cookies</h3>
        <p className="mb-4">
          Our AI-powered dispatch system uses cookies and device identifiers to track driver
          availability, location, and trip acceptance patterns. These are used to optimise
          matching speed and driver earnings. Dispatch data is processed on Australian servers
          and is not shared with third-party advertising platforms.
        </p>

        <h3 className="text-base font-semibold text-[#2A2D2A] mb-2">2.4 Analytics Cookies</h3>
        <p className="mb-4">
          Used to understand how users interact with LetsGO — which features are used, booking
          flow drop-offs, and how we can improve the experience. All analytics data is anonymised
          and aggregated. You may opt out via the cookie consent banner.
        </p>

        <h3 className="text-base font-semibold text-[#2A2D2A] mb-2">2.5 Payment Processing Cookies (Stripe)</h3>
        <p>
          Stripe sets cookies to support secure fare processing and fraud detection. These are
          governed by Stripe&apos;s own cookie and privacy policy. We do not control Stripe&apos;s cookies.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">3. Managing Cookies</h2>
        <p>
          You can manage non-essential cookie preferences through our cookie consent banner or
          your browser settings. Note that disabling location session cookies will prevent
          live trip tracking and may impact your ability to use the rideshare service.
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
          Privacy Officer: <a href="mailto:admin@letsgo.com.au" style={{ color: A }}>admin@letsgo.com.au</a>
        </p>
      </section>
    </div>
  );
}
