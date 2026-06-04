import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { HH_LEGAL_ACCENT } from "@/legal/helpinghandsau/accent";
import HelpingHandsLegalAccessibilityBody from "@/legal/helpinghandsau/accessibility";

export const metadata: Metadata = {
  title: "Accessibility Statement — HelpingHandsAU",
  description: "HelpingHandsAU's commitment to WCAG 2.1 AA accessibility standards.",
};

export default function AccessibilityStatement() {
  return (
    <LegalLayout
      title="Accessibility Statement"
      badge="Accessibility"
      lastUpdated="1 January 2025"
      backHref="/"
      backLabel="Back to HelpingHandsAU"
      accentColor={HH_LEGAL_ACCENT}
    >
      <HelpingHandsLegalAccessibilityBody />
    </LegalLayout>
  );
}
