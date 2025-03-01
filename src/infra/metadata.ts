import { Metadata } from "next";

export function generateMetadata({ title, description }: { title: string; description?: string }): Metadata {
    return {
        title,
        description,
        keywords: "University, alugar, comprar, venda, apartamentos, casas, ISPSML University, Angola, Portugal, imobiliária, contact, ISPSML, Instituto Superior São Martinho de Lima, support, inquiries",
        authors: [{ name: "ISPSML University - Joao Afonso Katombela", url: "https://ispsml.ao" }],
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
                    url: "https://github.com/Katumbela/my_images/blob/main/school15.jpg?raw=true",
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
            images: ["https://github.com/Katumbela/my_images/blob/main/school15.jpg?raw=true"],
        },
        icons: {
            icon: "../app/favicon.ico",
            apple: "../app/favicon.ico",
            shortcut: "../app/favicon.ico",
        },
    };
}
