import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  outputFileTracingRoot: path.resolve(__dirname),
  async redirects() {
    return [
      {
        source: "/projects",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/experience",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/skills",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/writing",
        permanent: true,
      },
      {
        source: "/blog/:slug*",
        destination: "/writing",
        permanent: true,
      },
      {
        source: "/testimonials",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
