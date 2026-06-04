import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { LG_LEGAL_ACCENT } from "@/legal/letsgo/accent";
import LetsGoLegalCommunityBody from "@/legal/letsgo/community";

export const metadata: Metadata = {
  title: "Community Guidelines — LetsGO",
  description: "Rider and driver conduct standards for the LetsGO rideshare platform.",
};

export default function CommunityGuidelines() {
  return (
    <LegalLayout
      title="Community Guidelines"
      badge="Community"
      lastUpdated="1 January 2025"
      backHref="/letsgo"
      backLabel="Back to LetsGO"
      accentColor={LG_LEGAL_ACCENT}
    >
      <LetsGoLegalCommunityBody />
    </LegalLayout>
  );
}
