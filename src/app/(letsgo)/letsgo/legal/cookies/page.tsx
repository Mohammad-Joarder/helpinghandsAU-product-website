import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { LG_LEGAL_ACCENT } from "@/legal/letsgo/accent";
import LetsGoLegalCookiesBody from "@/legal/letsgo/cookies";

export const metadata: Metadata = {
  title: "Cookie Policy — LetsGO",
  description: "Information about cookies and tracking technologies used by LetsGO, including location and AI dispatch cookies.",
};

export default function CookiePolicy() {
  return (
    <LegalLayout
      title="Cookie Policy"
      badge="Legal"
      lastUpdated="1 January 2025"
      backHref="/letsgo"
      backLabel="Back to LetsGO"
      accentColor={LG_LEGAL_ACCENT}
    >
      <LetsGoLegalCookiesBody />
    </LegalLayout>
  );
}
