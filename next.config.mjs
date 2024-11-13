/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir : "_next",
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
