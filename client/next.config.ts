import type { NextConfig } from "next";

const nextConfig: NextConfig = {

};
  module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://s3-inventoryshop.s3.us-east-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig;
