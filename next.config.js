/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ["localhost"],
      remotePatterns: [
        {
          protocol: "http",
          hostname: "13.233.106.110",
          port: "",
        },
      ],
    },
  };
  
  module.exports = nextConfig;