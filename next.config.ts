import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/solution/talent-decision", destination: "/solutions/talent-decisions", permanent: false },
      { source: "/solutions/talent-decision", destination: "/solutions/talent-decisions", permanent: false },
      { source: "/solution/team-launches", destination: "/solutions/team-launches", permanent: false },
      { source: "/solution/team-launch", destination: "/solutions/team-launches", permanent: false },
    ];
  },
};

export default nextConfig;
