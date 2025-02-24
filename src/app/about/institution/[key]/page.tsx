/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateMetadata } from '@/infra/metadata';
import AboutDetail from './aboute-details-page';
import { content } from '@/data/aboutContent';

export const metadata = generateMetadata({
    title: ' Sobre esta area na nossa instituição | ISPSML',
    description: '',
});

export async function generateStaticParams() {
    const keys = Object.keys(content);
    return keys.map((key) => ({ key }));
}

export default function Page({ params }: any) {
    return <AboutDetail key={params.key} />;
}
