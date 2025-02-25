/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",
    env: {
        LOCAL_URL: "http://localhost:8000",
        API_URL: "https://dev.ispsml.ao/api",
    },
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // Aceita qualquer domínio
            },
        ],
    },
    output: "export",
    // trailingSlash: true,
};

module.exports = nextConfig;
