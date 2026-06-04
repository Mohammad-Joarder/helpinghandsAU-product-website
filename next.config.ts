import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** One canonical HelpingHandsAU legal path (`/legal/*`); old URLs stay valid via redirect. */
  async redirects() {
    return [
      {
        source: "/helpinghandsau/legal/:slug",
        destination: "/legal/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
