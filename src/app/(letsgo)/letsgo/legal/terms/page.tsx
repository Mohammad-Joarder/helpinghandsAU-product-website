import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { LG_LEGAL_ACCENT } from "@/legal/letsgo/accent";
import LetsGoLegalTermsBody from "@/legal/letsgo/terms";

export const metadata: Metadata = {
  title: "Terms of Service — LetsGO",
  description: "Terms and conditions governing your use of the LetsGO rideshare platform for riders and drivers.",
};

export default function TermsOfService() {
  return (
    <LegalLayout
      title="Terms of Service"
      badge="Legal"
      lastUpdated="1 January 2025"
      backHref="/letsgo"
      backLabel="Back to LetsGO"
      accentColor={LG_LEGAL_ACCENT}
    >
      <LetsGoLegalTermsBody />
    </LegalLayout>
  );
}
