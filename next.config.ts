/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: ['api.placeholder.com'],
  },
  // Add basePath if you're not deploying to the root
  // basePath: '',
  // Add any needed rewrites or redirects
  async rewrites() {
    return [];
  }
}

module.exports = nextConfig