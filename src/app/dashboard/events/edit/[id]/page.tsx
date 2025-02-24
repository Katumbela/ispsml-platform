
/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateMetadata } from '@/infra/metadata';
import EditEventPage from './edit-event-page.tsx';
import { eventsService } from '@/services/events.service';

export const metadata = generateMetadata({
    title: 'Editar evento | ISPSML',
    description: '',
});

export async function generateStaticParams() {
    const events = await eventsService.getAllEvents();
    return events.map((event) => ({ id: event?.id }));
}

export default function Page({ params }: any) {
    return <EditEventPage id={Number(params.id) || 0} />;
}
