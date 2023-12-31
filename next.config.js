/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "127.0.0.1"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.majoringlearn.com",
        port: "",
      },
    ],
  },
  output:"standalone"
};

module.exports = nextConfig;