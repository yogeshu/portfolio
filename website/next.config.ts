import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
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
