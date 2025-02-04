/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",
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
