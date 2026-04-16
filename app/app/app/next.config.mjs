/** @type {import('next').NextConfig} */
const nextConfig = {
  // This tells Vercel to ignore errors that usually stop a build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
