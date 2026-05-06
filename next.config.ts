import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // output: "export",
  images: {
    unoptimized: true, // ✅ ADD THIS
  },
};

export default nextConfig;