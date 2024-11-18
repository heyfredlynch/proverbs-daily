/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Don't run ESLint during builds - we'll handle linting separately
    ignoreDuringBuilds: true
  },
  reactStrictMode: true,
}

module.exports = nextConfig