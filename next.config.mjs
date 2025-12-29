/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        pathname: '**',
      },
      // Add AWS S3 or Cloudinary domains here later for production assets
    ],
  },
  experimental: {
    // Optimizes imports for Lucide and Framer Motion to reduce bundle size
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
