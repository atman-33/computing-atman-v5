const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // NOTE: インターナルパッケージは、transpilePackages に設定する
  transpilePackages: ['@repo/ui'],
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
};

module.exports = withContentlayer(nextConfig);
