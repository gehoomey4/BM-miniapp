/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push(
      "@coinbase/onchainkit",
      "wagmi",
      "viem"
    );
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native-async-storage': false,
      'pino-pretty': false,
    };
    return config;
  },
};

export default nextConfig;
