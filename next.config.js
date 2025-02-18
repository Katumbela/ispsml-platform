/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",
    env: {
        DATABASE_URL: "postgresql://ispsmlao_katumbela:Katumbela2025@65.108.218.149:5432/ispsmlao_db",
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
