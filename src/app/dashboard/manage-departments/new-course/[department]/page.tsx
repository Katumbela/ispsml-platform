/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateMetadata } from '@/infra/metadata';

import NewCoursePage from './client-new-course-page.tsx';

export const metadata = generateMetadata({
    title: 'Adicionar curso num departamento | ISPSML',
    description: 'Página para adicionar um novo curso a um departamento específico.',
});

export async function generateStaticParams() {
    return Array.from({ length: 25 }, (_, i) => ({
        department: (i + 1).toString(),
    }));
}

export default function Page({ params }: any) {
    return <NewCoursePage departmentId={params?.department || ""} />;
}
