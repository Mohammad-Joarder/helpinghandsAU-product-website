import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { LG_LEGAL_ACCENT } from "@/legal/letsgo/accent";
import LetsGoLegalRefundsBody from "@/legal/letsgo/refunds";

export const metadata: Metadata = {
  title: "Refund Policy — LetsGO",
  description: "LetsGO's trip cancellation, refund, and dispute resolution procedures compliant with Australian Consumer Law.",
};

export default function RefundPolicy() {
  return (
    <LegalLayout
      title="Refund Policy"
      badge="Consumer Rights"
      lastUpdated="1 January 2025"
      backHref="/letsgo"
      backLabel="Back to LetsGO"
      accentColor={LG_LEGAL_ACCENT}
    >
      <LetsGoLegalRefundsBody />
    </LegalLayout>
  );
}
