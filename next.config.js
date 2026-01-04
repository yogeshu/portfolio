/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Optimize images - Next.js Image component optimization
  images: {
    // Add domains for external images if needed
    // domains: ['example.com'],
  },
  
  // TypeScript configuration
  typescript: {
    // Enable type checking during build
    ignoreBuildErrors: false,
  },
  
  // ESLint configuration
  eslint: {
    // Fail build on ESLint errors
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;
