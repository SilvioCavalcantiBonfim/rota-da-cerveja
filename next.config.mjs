/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    if (!isServer) {
      // Desabilita a minificação de CSS no Next.js
      config.optimization.minimize = false;
    }
    return config;
  },
};

export default nextConfig;
