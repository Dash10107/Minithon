/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.sonos.com', 'media.istockphoto.com', 'www.betterup.com'], // Add the external domains here
  },
};

export default nextConfig;
