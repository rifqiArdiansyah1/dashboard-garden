/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },

  basePath: '/dashboard-garden',
}

module.exports = nextConfig
