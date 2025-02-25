
/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateMetadata } from '@/infra/metadata';

import DepartmentCoursesPage from './client-man-dep';

export const metadata = generateMetadata({
    title: 'Gerenciar departamento | ISPSML',
    description: '',
});

export async function generateStaticParams() {
    return Array.from({ length: 25 }, (_, i) => ({
        id: (i + 1).toString(),
    }));
}

export default function Page({ params }: any) {
    return <DepartmentCoursesPage departmentId={params.id || ""} />;
}
