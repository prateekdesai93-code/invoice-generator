import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/invoice-generator",
  distDir: "docs",
};

export default nextConfig;
