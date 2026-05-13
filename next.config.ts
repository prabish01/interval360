import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/solution/talent-decision", destination: "/solutions/talent-decisions", permanent: false },
      { source: "/solutions/talent-decision", destination: "/solutions/talent-decisions", permanent: false },
    ];
  },
};

export default nextConfig;
