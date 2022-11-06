/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains: ["rb.gy", "cdn.sanity.io", "lh3.googleusercontent.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
