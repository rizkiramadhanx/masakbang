/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.masakapahariini.com',
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
