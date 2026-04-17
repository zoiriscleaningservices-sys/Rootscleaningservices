/** @type {import('next').NextConfig} */

// Detect if we are building inside GitHub Actions
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let repo = '';
if (isGithubActions) {
  repo = '/Rootscleaningservices';
}

const nextConfig = {
  // Automatically serve as a static export only on GitHub Actions
  output: isGithubActions ? 'export' : undefined,
  
  // Natively prefix Next.js assets with the repo name on Github Pages
  basePath: repo,
  assetPrefix: repo,
  trailingSlash: isGithubActions ? true : false,
  
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
