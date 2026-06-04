import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { LG_LEGAL_ACCENT } from "@/legal/letsgo/accent";
import LetsGoLegalPrivacyBody from "@/legal/letsgo/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy — LetsGO",
  description: "How LetsGO collects, uses and protects your personal information, including GPS location data and driver compliance records.",
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      badge="Legal"
      lastUpdated="1 January 2025"
      backHref="/letsgo"
      backLabel="Back to LetsGO"
      accentColor={LG_LEGAL_ACCENT}
    >
      <LetsGoLegalPrivacyBody />
    </LegalLayout>
  );
}
