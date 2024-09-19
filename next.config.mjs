/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.sonos.com', 'media.istockphoto.com', 'www.betterup.com', 'upload.wikimedia.org', 'debugcodes.vercel.app', 'www.dash10107.me'], // Add the external domains here
  },
};

export default nextConfig;
