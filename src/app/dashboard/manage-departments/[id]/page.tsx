
/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateMetadata } from '@/infra/metadata';

import { getDepartments } from '@/services/dep.service';
import DepartmentCoursesPage from './client-man-dep';

export const metadata = generateMetadata({
    title: 'Gerenciar departamento | ISPSML',
    description: '',
});

export async function generateStaticParams() {
    const deps = await getDepartments();
    return deps.map((dep) => ({ id: dep?.id }));
}

export default function Page({ params }: any) {
    return <DepartmentCoursesPage departmentId={params.id || ""} />;
}
