import type { NextConfig } from "next";

const nextConfig: NextConfig = {

};
  module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-inventorymanagement.s3.us-east-2.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig;
