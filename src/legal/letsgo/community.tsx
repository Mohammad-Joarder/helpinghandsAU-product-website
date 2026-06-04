import { LG_LEGAL_ACCENT as A } from "./accent";

export default function LetsGoLegalCommunityBody() {
  return (
    <div className="space-y-8 text-sm text-[#4A4F4A] leading-relaxed">
      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Our Community Standards</h2>
        <p>
          LetsGO is built on a shared commitment to safe, respectful, and professional rideshare
          experiences. Every trip involves real people — riders and drivers — who deserve to feel
          safe, treated fairly, and valued. These guidelines apply to every LetsGO community member.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Respect and Inclusion</h2>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Treat all riders and drivers with dignity and respect regardless of background, identity, or belief</li>
          <li>Zero tolerance for discrimination, harassment, or threatening behaviour during or after trips</li>
          <li>Maintain professional, courteous communication at all times via the in-app chat</li>
          <li>Do not share other users&apos; personal information outside the platform</li>
          <li>Drivers must not solicit riders to book future trips outside LetsGO</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Rider Conduct</h2>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Be ready at your pickup location on time — drivers&apos; time is valuable</li>
          <li>Do not exceed the stated passenger capacity of your booked vehicle</li>
          <li>Eating, drinking (alcohol), or smoking in vehicles is prohibited unless the driver expressly permits it</li>
          <li>Do not request drivers to violate road rules or make unauthorised stops</li>
          <li>Treat the driver&apos;s vehicle with care — you are responsible for any damage caused</li>
          <li>Submit only honest, experience-based ratings after your trip</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Driver Standards</h2>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Maintain a minimum platform rating — drivers below threshold are reviewed and may be suspended</li>
          <li>Keep your vehicle clean, roadworthy, and meeting LetsGO standards at all times</li>
          <li>Never drive under the influence of alcohol, drugs, or while fatigued</li>
          <li>Follow all road rules and applicable transport regulations</li>
          <li>Do not use mobile devices without hands-free equipment while driving</li>
          <li>Keep your licence, insurance, and police check documents current and uploaded</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Safety Standards</h2>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Use the in-app SOS feature immediately for any safety emergency during a trip</li>
          <li>Report any safety concern immediately via in-app support or by calling 000</li>
          <li>Drivers must not accept trips from riders who appear intoxicated or threatening</li>
          <li>Riders must not behave in ways that distract or endanger the driver</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Ratings Requirements</h2>
        <p>
          Drivers and riders are both rated after each trip. Accounts with sustained low ratings
          may be reviewed, warned, or suspended. Ratings cannot be removed or manipulated except
          in cases of documented abuse or verified false reporting.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#111111] mb-3">Enforcement</h2>
        <p>
          Violations of these guidelines may result in warnings, temporary suspension, or permanent
          removal from the platform. Our AI-assisted monitoring system may flag potential violations
          for human review. You have the right to appeal any moderation decision by contacting{" "}
          <a href="mailto:admin@letsgo.com.au" style={{ color: A }}>admin@letsgo.com.au</a>.
        </p>
      </section>
    </div>
  );
}
