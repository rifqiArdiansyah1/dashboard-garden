/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/mantap-garden',
  trailingSlash: true,
}

module.exports = nextConfig
