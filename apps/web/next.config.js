const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // NOTE: インターナルパッケージは、transpilePackages に設定する
  transpilePackages: ['@repo/ui', '@repo/data-access-graphql'],
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
};

module.exports = withContentlayer(nextConfig);
