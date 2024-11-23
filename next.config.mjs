/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "coin-images.coingecko.com",
            },
        ],
    },
};

export default nextConfig;
