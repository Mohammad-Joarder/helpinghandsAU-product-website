import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HelpingHandsAU — Australia's Trusted Services Marketplace",
  description:
    "Post a task, receive bids, and get it done. HelpingHandsAU connects Australians with skilled local service providers — safely, securely, and affordably.",
  keywords: [
    "HelpingHandsAU", "Australian marketplace", "local services", "task platform",
    "hire local", "service providers", "post a task", "Stripe escrow",
  ],
  authors: [{ name: "HelpingHandsAU" }],
  icons: {
    icon: "/icon-helpinghandsau.png",
    apple: "/icon-helpinghandsau.png",
  },
  openGraph: {
    title: "HelpingHandsAU — Australia's Trusted Services Marketplace",
    description: "Post a task. Get bids. Hire confidently. Funds held in escrow until the job is done.",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "HelpingHandsAU — Australia's Trusted Services Marketplace",
    description: "Post a task. Get bids. Hire confidently. Funds held in escrow until the job is done.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${jakarta.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#F7F7F5] text-[#111111]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
