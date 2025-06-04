import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  images: {
  remotePatterns: [
    {
      protocol: 'http',
      hostname: 'localhost',
      port: '',
      pathname: '/headlesswp/wp-content/uploads/**',
    },
    {
      protocol: 'https',
      hostname: 'your-live-site.com',
      pathname: '/wp-content/uploads/**',
    },
  ],
}
};

export default nextConfig;
