
/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateMetadata } from '@/infra/metadata';
import EditEventPage from './edit-event-page.tsx';

export const metadata = generateMetadata({
    title: 'Editar evento | ISPSML',
    description: '',
});

export async function generateStaticParams() {
    return Array.from({ length: 25 }, (_, i) => ({
        id: (i + 1).toString(),
    }));
}

export default function Page({ params }: any) {
    return <EditEventPage id={Number(params.id) || 0} />;
}
