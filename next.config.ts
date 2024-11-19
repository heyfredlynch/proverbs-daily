/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Change this from 'standalone' to 'export'
  images: {
    unoptimized: true
  },
  trailingSlash: true,
}

module.exports = nextConfig