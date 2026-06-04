import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { HH_LEGAL_ACCENT } from "@/legal/helpinghandsau/accent";
import HelpingHandsLegalTermsBody from "@/legal/helpinghandsau/terms";

export const metadata: Metadata = {
  title: "Terms of Service — HelpingHandsAU",
  description: "Terms and conditions governing your use of the HelpingHandsAU platform.",
};

export default function TermsOfService() {
  return (
    <LegalLayout
      title="Terms of Service"
      badge="Legal"
      lastUpdated="1 January 2025"
      backHref="/"
      backLabel="Back to HelpingHandsAU"
      accentColor={HH_LEGAL_ACCENT}
    >
      <HelpingHandsLegalTermsBody />
    </LegalLayout>
  );
}
