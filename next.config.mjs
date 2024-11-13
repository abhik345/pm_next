/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.pramodmaloo.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
