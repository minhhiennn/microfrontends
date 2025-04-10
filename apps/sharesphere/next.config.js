/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: '/sharesphere-static',
  async rewrites() {
    return {
      beforeFiles: [
        // This rewrite is necessary to support assetPrefix only in Next 14 and below.
        // It is not necessary in Next 15.
        {
          source: '/sharesphere-static/_next/:path*',
          destination: '/_next/:path*',
        },
      ],
    }
  },
}

module.exports = nextConfig 