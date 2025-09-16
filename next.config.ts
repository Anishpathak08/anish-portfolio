import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, //  ignore ESLint errors
  },
  typescript: {
    ignoreBuildErrors: true, //  ignore TS errors like Variants typing
  },
};

export default nextConfig;
