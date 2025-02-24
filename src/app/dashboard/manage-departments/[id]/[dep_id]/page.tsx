
/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateMetadata } from '@/infra/metadata';

import { getDepartments } from '@/services/dep.service';
import NewCoursePage from './client-new-course-page.tsx';

export const metadata = generateMetadata({
    title: 'Adicionar curso num departamento | ISPSML',
    description: '',
});

export async function generateStaticParams() {
    const deps = await getDepartments();
    return deps.map((dep) => ({ id: dep?.id }));
}

export default function Page({ params }: any) {
    return <NewCoursePage departmentId={params.id || ""} />;
}
