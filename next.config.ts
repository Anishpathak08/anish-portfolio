import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,   // ✅ ESLint errors skip during Vercel build
  },
};

export default nextConfig;
