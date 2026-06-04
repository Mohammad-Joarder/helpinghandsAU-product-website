import { LG_LEGAL_ACCENT as A } from "./accent";

export default function LetsGoLegalSafetyBody() {
  return (
    <div className="space-y-8 text-sm text-[#4A4F4A] leading-relaxed">
      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Our Safety Commitment</h2>
        <p>
          Safety is the foundation of everything we build at LetsGO. From driver onboarding to
          trip completion, every feature is designed to protect riders, drivers, and the community.
          We maintain Australia&apos;s most rigorous rideshare safety standards.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Driver Background Checks</h2>
        <p>All LetsGO drivers must complete and maintain the following before their first trip:</p>
        <ul className="list-disc pl-5 space-y-1.5 mt-3">
          <li><strong>National Police Check:</strong> Comprehensive police check with no disqualifying offences. Renewed every 3 years.</li>
          <li><strong>Driver&apos;s Licence Verification:</strong> Current, valid Australian licence verified against issuing authority records</li>
          <li><strong>Identity Verification:</strong> Government-issued photo ID matched against in-person or digital verification</li>
          <li><strong>Driving History Check:</strong> Review of infringement history and licence disqualification records</li>
          <li>Profile photograph verified against ID documents</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Vehicle Requirements & Inspections</h2>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Maximum vehicle age requirements as specified by state transport authority</li>
          <li>Current vehicle registration required (verified at onboarding and annually)</li>
          <li>Comprehensive motor vehicle insurance with rideshare or commercial passenger vehicle endorsement</li>
          <li>Vehicles must pass LetsGO minimum condition standards — no visible damage, clean interior</li>
          <li>Seat belts functional in all passenger positions</li>
          <li>Air conditioning required in vehicles operating in regions with ambient temperature above 25°C</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">In-Trip SOS & Emergency Features</h2>
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>One-tap SOS:</strong> Immediately shares your live GPS location with emergency services and your designated emergency contact</li>
          <li><strong>Trip sharing:</strong> Share your live trip progress with any contact — they can track your journey in real time</li>
          <li><strong>Trusted contacts:</strong> Designate up to 5 emergency contacts who receive automatic alerts for SOS activation</li>
          <li><strong>Masked phone numbers:</strong> Calls and texts between riders and drivers use masked numbers to protect privacy</li>
          <li><strong>24/7 Safety line:</strong> Dedicated safety support available around the clock via the app</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Live Tracking</h2>
        <p>
          Every LetsGO trip is tracked in real-time on our Australian-hosted servers. Live GPS
          data is encrypted in transit and at rest. Trip routes are retained for safety and dispute
          review for a period of 2 years. Location tracking is limited to active trips — LetsGO
          does not track driver or rider location between trips.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Insurance Requirements</h2>
        <p>
          All drivers must hold comprehensive motor vehicle insurance that expressly covers
          rideshare or commercial passenger transport. This insurance must be current and uploaded
          to the LetsGO platform. Expired or non-rideshare insurance policies will result in
          immediate account suspension until corrected.
        </p>
        <p className="mt-3">
          LetsGO maintains contingent liability coverage for verified trips to supplement driver
          insurance in the event of gaps. This does not replace the driver&apos;s obligation to hold
          primary rideshare insurance.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">AI-Assisted Safety Monitoring</h2>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Machine learning models monitor trip data for anomalous route deviations, sudden stops, and speed violations</li>
          <li>Automated alerts triggered when trip deviates significantly from planned route</li>
          <li>Human safety team reviews all triggered alerts and rider/driver reports 24/7</li>
          <li>Accounts with multiple safety incidents are suspended pending investigation</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Incident Response</h2>
        <p>
          All safety incidents are reviewed by our Trust & Safety team within 24 hours. Serious
          incidents — including reported physical harm, threatening behaviour, or vehicle accidents —
          are escalated immediately to law enforcement as required by Australian law. LetsGO
          cooperates fully with all regulatory, transport authority, and law enforcement investigations.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Report a Safety Concern</h2>
        <p>
          Use the in-app report feature, the in-app SOS button, or contact our Trust & Safety team:<br />
          Email: <a href="mailto:admin@letsgo.com.au" style={{ color: A }}>admin@letsgo.com.au</a><br />
          In an emergency, always call <strong>000</strong> first.
        </p>
      </section>
    </div>
  );
}
