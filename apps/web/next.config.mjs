/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  experimental: {
    optimizePackageImports: [
      "@heroicons/react/24/outline",
      "@heroicons/react/24/solid",
      "chart.js",
      "framer-motion"
    ]
  }
};

export default nextConfig;

