import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { HH_LEGAL_ACCENT } from "@/legal/helpinghandsau/accent";
import HelpingHandsLegalCookiesBody from "@/legal/helpinghandsau/cookies";

export const metadata: Metadata = {
  title: "Cookie Policy — HelpingHandsAU",
  description: "Information about cookies and tracking technologies used by HelpingHandsAU.",
};

export default function CookiePolicy() {
  return (
    <LegalLayout
      title="Cookie Policy"
      badge="Legal"
      lastUpdated="1 January 2025"
      backHref="/"
      backLabel="Back to HelpingHandsAU"
      accentColor={HH_LEGAL_ACCENT}
    >
      <HelpingHandsLegalCookiesBody />
    </LegalLayout>
  );
}
