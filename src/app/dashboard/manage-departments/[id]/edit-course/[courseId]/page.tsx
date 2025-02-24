/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateMetadata } from '@/infra/metadata';
import ClientEditCoursePage from './client-edit-course-page'; 

export const metadata = generateMetadata({
    title: 'Gerenciar departamento | ISPSML',
    description: '',
});

export async function generateStaticParams() {
    return Array.from({ length: 25 }, (_, i) => ({
        courseId: (i + 1).toString(),
    }));
}
export default function Page({ params }: any) {
    return <ClientEditCoursePage courseId={params.courseId || '1'} />;
}
