import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { HH_LEGAL_ACCENT } from "@/legal/helpinghandsau/accent";
import HelpingHandsLegalSafetyBody from "@/legal/helpinghandsau/safety";

export const metadata: Metadata = {
  title: "Safety Standards — HelpingHandsAU",
  description: "HelpingHandsAU's safety framework covering identity verification, escrow protection, and incident response.",
};

export default function SafetyStandards() {
  return (
    <LegalLayout
      title="Safety Standards"
      badge="Safety"
      lastUpdated="1 January 2025"
      backHref="/"
      backLabel="Back to HelpingHandsAU"
      accentColor={HH_LEGAL_ACCENT}
    >
      <HelpingHandsLegalSafetyBody />
    </LegalLayout>
  );
}
