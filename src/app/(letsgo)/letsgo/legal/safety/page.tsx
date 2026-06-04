import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { LG_LEGAL_ACCENT } from "@/legal/letsgo/accent";
import LetsGoLegalSafetyBody from "@/legal/letsgo/safety";

export const metadata: Metadata = {
  title: "Safety Standards — LetsGO",
  description: "LetsGO's safety framework covering driver background checks, vehicle inspections, in-trip SOS, live tracking, and insurance requirements.",
};

export default function SafetyStandards() {
  return (
    <LegalLayout
      title="Safety Standards"
      badge="Safety"
      lastUpdated="1 January 2025"
      backHref="/letsgo"
      backLabel="Back to LetsGO"
      accentColor={LG_LEGAL_ACCENT}
    >
      <LetsGoLegalSafetyBody />
    </LegalLayout>
  );
}
