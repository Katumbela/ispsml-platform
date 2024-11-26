/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // Aceita qualquer domínio
            },
        ],
    },
};

module.exports = nextConfig;
