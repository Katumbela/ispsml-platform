/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",
    env: {
        LOCAL_URL: "http://localhost:8000",
        API_URL: "https://dev.ispsmlao.ao/api",
        DATABASE_URL: "mysql://ispsmlao_katumbela:Joao2025@65.108.218.149:3306/ispsmlao_dev",
        SHADOW_DATABASE_URL: "mysql://ispsmlao_m2j_technnology:ispsml2025@65.108.218.149:3306/ispsmlao_ispsml_db"
    },
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
