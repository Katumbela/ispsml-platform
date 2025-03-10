
/* eslint-disable @typescript-eslint/no-explicit-any */
import { eventsService } from '@/services/events.service';
import EventDetailPage from './event-details-page';

export async function generateMetadata({ params }: any) {
    const event = await eventsService.getEventBySlug(params.slug);
    return {
        title: `${event?.title} | ISPSML`,
        description: event?.description,
        keywords: "University, alugar, comprar, venda, apartamentos, casas, ISPSML University, Angola, Portugal, imobiliária, contact, ISPSML, Instituto Superior São Martinho de Lima, support, inquiries",
        authors: [{ name: "ISPSML University, João Afonso Katombela", url: "https://ispsml.ao" }],
        robots: "index, follow",
        metadataBase: new URL("https://ispsml.ao"),
        alternates: {
            canonical: "https://ispsml.ao",
        },
        openGraph: {
            title: event?.title,
            description: event?.description,
            url: "https://ispsml.ao",
            siteName: "ISPSML University",
            images: [
                {
                    url: event?.imageUrl || "https://github.com/Katumbela/my_images/blob/main/school15.jpg?raw=true",
                    width: 1200,
                    height: 630,
                    alt: event?.title,
                },
            ],
            type: "website",
            locale: "pt_PT",
        },
        twitter: {
            card: "summary_large_image",
            title: event?.title,
            description: event?.description,
            images: [event?.imageUrl || "https://github.com/Katumbela/my_images/blob/main/school15.jpg?raw=true"],
        },
        icons: {
            icon: "../app/favicon.ico",
            apple: "../app/favicon.ico",
            shortcut: "../app/favicon.ico",
        },
    };
}

export async function generateStaticParams() {
    const events = await eventsService.getAllEvents();
    return events.map((event) => ({ slug: event?.slug }));
}

export default function Page({ params }: any) {
    return <EventDetailPage slug={params.slug || ""} />;
}
