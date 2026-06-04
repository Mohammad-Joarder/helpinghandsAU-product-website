import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { HH_LEGAL_ACCENT } from "@/legal/helpinghandsau/accent";
import HelpingHandsLegalRefundsBody from "@/legal/helpinghandsau/refunds";

export const metadata: Metadata = {
  title: "Refund Policy — HelpingHandsAU",
  description: "HelpingHandsAU's refund and dispute resolution procedures, compliant with Australian Consumer Law.",
};

export default function RefundPolicy() {
  return (
    <LegalLayout
      title="Refund Policy"
      badge="Consumer Rights"
      lastUpdated="1 January 2025"
      backHref="/"
      backLabel="Back to HelpingHandsAU"
      accentColor={HH_LEGAL_ACCENT}
    >
      <HelpingHandsLegalRefundsBody />
    </LegalLayout>
  );
}
