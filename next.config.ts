import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["tuna-darling-overly.ngrok-free.app"],
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
