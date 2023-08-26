/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //swcMinify: true,
  images: { // Next otimizar imagens de qualquer api
    domains: [
      'files.stripe.com',
    ],
  },
}

module.exports = nextConfig
