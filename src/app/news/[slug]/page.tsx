/* eslint-disable @typescript-eslint/no-explicit-any */
import ViewNewsPage from './view-news-detailws-page';
import { newsService } from '@/services/news.service';

export async function generateMetadata({ params }: any) {
    const news = await newsService.getNewsBySlug(params.slug);
    return {
        title: `${news?.title} | ISPSML`,
        description: news?.shortDescription,
        keywords: "University, alugar, comprar, venda, apartamentos, casas, ISPSML University, Angola, Portugal, imobiliária, contact, ISPSML, Instituto Superior São Martinho de Lima, support, inquiries",
        authors: [{ name: "ISPSML University, João Afonso Katombela", url: "https://ispsml.ao" }],
        robots: "index, follow",
        metadataBase: new URL("https://ispsml.ao"),
        alternates: {
            canonical: "https://ispsml.ao",
        },
        openGraph: {
            title: news?.title,
            description: news?.shortDescription,
            url: "https://ispsml.ao",
            siteName: "ISPSML University",
            images: [
                {
                    url: "https://github.com/Katumbela/my_images/blob/main/school15.jpg?raw=true",
                    width: 1200,
                    height: 630,
                    alt: news?.title,
                },
            ],
            type: "website",
            locale: "pt_PT",
        },
        twitter: {
            card: "summary_large_image",
            title: news?.title,
            description: news?.shortDescription,
            images: ["https://github.com/Katumbela/my_images/blob/main/school15.jpg?raw=true"],
        },
        icons: {
            icon: "../app/favicon.ico",
            apple: "../app/favicon.ico",
            shortcut: "../app/favicon.ico",
        },
    };
}

export async function generateStaticParams() {
    const news = await newsService.getAllNews();
    // console.log(news);
    return news.map((n) => ({ slug: n?.slug }));
}

export default function Page({ params }: any) {
    return <ViewNewsPage slug={params.slug || ""} />;
}
