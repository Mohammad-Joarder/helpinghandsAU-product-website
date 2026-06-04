import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { LG_LEGAL_ACCENT } from "@/legal/letsgo/accent";
import LetsGoLegalAccessibilityBody from "@/legal/letsgo/accessibility";

export const metadata: Metadata = {
  title: "Accessibility Statement — LetsGO",
  description: "LetsGO's commitment to WCAG 2.1 AA standards and mobile app accessibility via VoiceOver and TalkBack.",
};

export default function AccessibilityStatement() {
  return (
    <LegalLayout
      title="Accessibility Statement"
      badge="Accessibility"
      lastUpdated="1 January 2025"
      backHref="/letsgo"
      backLabel="Back to LetsGO"
      accentColor={LG_LEGAL_ACCENT}
    >
      <LetsGoLegalAccessibilityBody />
    </LegalLayout>
  );
}
