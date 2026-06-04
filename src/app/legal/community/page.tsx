import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { HH_LEGAL_ACCENT } from "@/legal/helpinghandsau/accent";
import HelpingHandsLegalCommunityBody from "@/legal/helpinghandsau/community";

export const metadata: Metadata = {
  title: "Community Guidelines — HelpingHandsAU",
  description: "Standards of behaviour expected from all users of the HelpingHandsAU platform.",
};

export default function CommunityGuidelines() {
  return (
    <LegalLayout
      title="Community Guidelines"
      badge="Community"
      lastUpdated="1 January 2025"
      backHref="/"
      backLabel="Back to HelpingHandsAU"
      accentColor={HH_LEGAL_ACCENT}
    >
      <HelpingHandsLegalCommunityBody />
    </LegalLayout>
  );
}
