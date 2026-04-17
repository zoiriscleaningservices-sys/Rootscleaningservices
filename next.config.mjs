/** @type {import('next').NextConfig} */

const nextConfig = {
  // Permanently set for GitHub Pages Static HTML Export
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
