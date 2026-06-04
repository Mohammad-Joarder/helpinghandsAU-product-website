import Link from "next/link";

interface LegalLayoutProps {
  title: string;
  badge: string;
  lastUpdated: string;
  children: React.ReactNode;
  backHref?: string;
  backLabel?: string;
  accentColor?: string;
}

/** Server-only shell for legal pages — no client JS, no motion libs (keeps compile + runtime light). */
export default function LegalLayout({
  title,
  badge,
  lastUpdated,
  children,
  backHref = "/",
  backLabel = "Back to Home",
  accentColor = "#4A7C6B",
}: LegalLayoutProps) {
  return (
    <div className="min-h-full bg-[#F7F7F5]">
      <div className="bg-white border-b border-[rgba(0,0,0,0.06)]">
        <div className="container-tight py-6">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#111111] transition-colors mb-6 focus-visible:outline-none focus-visible:ring-2 rounded"
            style={{ ["--tw-ring-color" as string]: accentColor }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            {backLabel}
          </Link>
          <div>
            <span
              className="text-xs font-bold uppercase tracking-widest mb-3 block"
              style={{ color: accentColor }}
            >
              {badge}
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-[#111111] mb-3">{title}</h1>
            <p className="text-sm text-[#6B7280]">Last updated: {lastUpdated}</p>
          </div>
        </div>
      </div>

      <div className="container-tight py-12">
        <div
          className="max-w-3xl prose prose-sm prose-neutral"
          style={
            {
              "--tw-prose-body": "#4A4F4A",
              "--tw-prose-headings": "#111111",
              "--tw-prose-links": accentColor,
            } as React.CSSProperties
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
}
