import { Metadata } from "next";

export function generateMetadata({ title, description }: { title: string; description?: string }): Metadata {
    return {
        title,
        description,
        keywords: "University, alugar, comprar, venda, apartamentos, casas, ISPSML University, Angola, Portugal, imobiliária",
        authors: [{ name: "ISPSML University", url: "https://ispsml.ao" }],
        robots: "index, follow",
        metadataBase: new URL("https://ispsml.ao"),
        alternates: {
            canonical: "https://ispsml.ao",
        },
        openGraph: {
            title,
            description,
            url: "https://ispsml.ao",
            siteName: "ISPSML University",
            images: [
                {
                    url: "https://ISPSML.vercel.app/_next/static/media/Group%2039643.4cc8f4e4.svg",
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            type: "website",
            locale: "pt_PT",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["https://ISPSML.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.4ba2548e.png"],
        },
        icons: {
            icon: "../app/favicon.ico",
            apple: "../app/favicon.ico",
            shortcut: "../app/favicon.ico",
        },
    };
}
