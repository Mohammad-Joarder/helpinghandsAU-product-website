import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { HH_LEGAL_ACCENT } from "@/legal/helpinghandsau/accent";
import HelpingHandsLegalPrivacyBody from "@/legal/helpinghandsau/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy — HelpingHandsAU",
  description: "How HelpingHandsAU collects, uses and protects your personal information under the Privacy Act 1988.",
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      badge="Legal"
      lastUpdated="1 January 2025"
      backHref="/"
      backLabel="Back to HelpingHandsAU"
      accentColor={HH_LEGAL_ACCENT}
    >
      <HelpingHandsLegalPrivacyBody />
    </LegalLayout>
  );
}
