
/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateMetadata } from '@/infra/metadata'; 
import { eventsService } from '@/services/events.service';
import EventDetailPage from './event-details-page';

export const metadata = generateMetadata({
    title: 'Visualizar  evento | ISPSML',
    description: '',
});

export async function generateStaticParams() {
    const events = await eventsService.getAllEvents();
    return events.map((event) => ({ slug: event?.slug }));
}

export default function Page({ params }: any) {
    return <EventDetailPage slug={params.slug || ""} />;
}
