import { LG_LEGAL_ACCENT as A } from "./accent";

export default function LetsGoLegalTermsBody() {
  return (
    <div className="space-y-8 text-sm text-[#4A4F4A] leading-relaxed">
      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">1. Acceptance of Terms</h2>
        <p>
          By accessing or using the LetsGO platform (including website and mobile application),
          you agree to be bound by these Terms of Service and all applicable Australian laws and
          regulations. If you do not agree, please do not use our platform.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">2. Platform Description</h2>
        <p>
          <strong>LetsGO</strong> is a rideshare platform that connects riders seeking passenger
          transport with verified, licensed drivers. We facilitate trip bookings, fare calculation,
          and payments via our mobile application, but are not a transport operator ourselves.
        </p>
        <p className="mt-3">
          Drivers are independent contractors, not employees of LetsGO Pty Ltd. LetsGO does not
          guarantee the availability of rides at all times or in all locations, though we maintain
          rigorous driver verification standards as a condition of platform participation.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">3. User Eligibility</h2>
        <p>You must be at least 18 years of age to use LetsGO. By creating an account, you represent that:</p>
        <ul className="list-disc pl-5 space-y-1.5 mt-3">
          <li>You are 18 years of age or older</li>
          <li>You have the legal capacity to enter into binding contracts in Australia</li>
          <li>All information you provide during registration is accurate and complete</li>
          <li>You will maintain the security of your account credentials</li>
          <li>You are not a person barred from using services under Australian law</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">4. Rider Terms</h2>
        <p>Riders agree to:</p>
        <ul className="list-disc pl-5 space-y-1.5 mt-3">
          <li>Provide accurate pickup and drop-off locations when booking a ride</li>
          <li>Be ready at the pickup location within the grace period after driver arrival</li>
          <li>Treat drivers with respect and comply with all safety instructions</li>
          <li>Not engage in conduct that endangers the driver or other passengers</li>
          <li>Not exceed the passenger capacity of the booked vehicle</li>
          <li>Pay all applicable fares and any applicable cancellation fees</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">5. Driver Requirements & Obligations</h2>
        <p>All drivers must meet and maintain the following requirements:</p>
        <ul className="list-disc pl-5 space-y-1.5 mt-3">
          <li><strong>Driver&apos;s Licence:</strong> Current, valid Australian driver&apos;s licence for the class of vehicle operated</li>
          <li><strong>Vehicle Insurance:</strong> Comprehensive motor vehicle insurance with rideshare endorsement or commercial passenger vehicle insurance</li>
          <li><strong>Police Check:</strong> Current (within 3 years) National Police Check with no disqualifying offences</li>
          <li><strong>Vehicle Standards:</strong> Vehicle must meet LetsGO minimum age, condition, and maintenance requirements</li>
          <li><strong>Authorisation:</strong> Must hold any required rideshare authority or accreditation under applicable state law</li>
          <li>Complete trips as accepted without cancelling without reasonable cause</li>
          <li>Maintain a minimum platform rating as required by LetsGO standards</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">6. Fare Calculation & Payments</h2>
        <p>
          Fares are calculated based on base rate, distance, time, and applicable surge pricing.
          The estimated fare is displayed to riders before booking. Actual fares may vary due to
          route changes, traffic, or rider-requested stops. All payments are processed via Stripe.
          Drivers receive their earnings minus the LetsGO service fee, paid weekly to their
          nominated bank account via Stripe Connect.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">7. Cancellation Policy</h2>
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>Rider cancellation before driver acceptance:</strong> No charge</li>
          <li><strong>Rider cancellation after driver acceptance (within 2 minutes):</strong> No charge</li>
          <li><strong>Rider cancellation after 2 minutes of driver acceptance:</strong> Cancellation fee applies (displayed at time of cancellation)</li>
          <li><strong>Driver cancellation:</strong> Driver may be subject to account review if cancellation rate is excessive</li>
          <li><strong>No-show:</strong> Riders who are not at the pickup location within the grace period may be charged a no-show fee</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">8. Disputes</h2>
        <p>
          Trip-related disputes (including fare disputes and conduct complaints) may be raised
          via the in-app support feature within 24 hours of trip completion. Our Trust & Safety
          team will review evidence and issue a determination within 5 business days. For serious
          safety incidents, contact us immediately via the in-app SOS or by calling emergency
          services on 000.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">9. Prohibited Conduct</h2>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Providing false information during registration or driver verification</li>
          <li>Using the platform while not licensed or insured as required</li>
          <li>Harassing, threatening, or discriminating against any platform user</li>
          <li>Accepting cash payments outside the platform payment system</li>
          <li>Soliciting riders to book directly outside the platform</li>
          <li>Driving under the influence of alcohol or drugs</li>
          <li>Engaging in fraudulent activity, including submitting false trip reports</li>
          <li>Creating multiple accounts to circumvent bans or restrictions</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">10. AI-Assisted Dispatch & Monitoring</h2>
        <p>
          You acknowledge that LetsGO uses AI and automated systems for trip dispatch, fare
          calculation, safety monitoring, and fraud prevention. Automated decisions may affect
          your trip availability or account standing. You have the right to request human review
          of any automated decision by contacting{" "}
          <a href="mailto:admin@letsgo.com.au" style={{ color: A }}>admin@letsgo.com.au</a>.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">11. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by Australian law, LetsGO Pty Ltd shall not be liable
          for indirect, incidental, or consequential damages arising from your use of our platform.
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
          Legal Team, LetsGO Pty Ltd<br />
          Email: <a href="mailto:admin@letsgo.com.au" style={{ color: A }}>admin@letsgo.com.au</a><br />
          Queensland, Australia
        </p>
      </section>
    </div>
  );
}
