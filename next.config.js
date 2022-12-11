/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: ["github.com", "img.freepik.com"],
  },
  nextConfig,
};
