/** @type {import('next').NextConfig} */

const repo = '/Rootscleaningservices';

const nextConfig = {
  // Permanently set for GitHub Pages Static HTML Export
  output: 'export',
  trailingSlash: true,
  basePath: repo,
  assetPrefix: repo,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
