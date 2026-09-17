import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://images.unsplash.com/**"),
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "novaorganizasyon7.com.tr" }],
        destination: "https://www.novaorganizasyon7.com.tr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
