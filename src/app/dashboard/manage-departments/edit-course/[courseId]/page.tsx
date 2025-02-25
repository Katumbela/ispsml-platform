/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateMetadata } from '@/infra/metadata';
import ClientEditCoursePage from './client-edit-course-page';

export async function generateStaticParams() {
    const n = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    return n.map((courseId) => ({
        courseId: courseId.toString()
    }));
}

export const metadata = generateMetadata({
    title: 'Gerenciar departamento | ISPSML',
    description: '',
});


const Page = async ({ params }: any) => {
    return <ClientEditCoursePage courseId={params.courseId} />;
}

export default Page;