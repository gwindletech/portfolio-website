// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "www.standup.com.au",
        },
      ],
    },
    experimental: {
      serverActions: true,
    },
  };
  
  module.exports = nextConfig;
