/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateMetadata } from '@/infra/metadata';
import { Level } from '@/types/level';
import CustomKnowMore from './courses-list-page';

export const metadata = generateMetadata({
    title: 'Visualizar  Cursos deste departamento | ISPSML',
    description: '',
});

export async function generateStaticParams() {
    const levels: Level[] = ["bacharel", "undergraduation", "professional", "master", "pos-graduation", "preparatory"];
    return levels.map((level) => ({ level }));
}

export default function Page({ params }: any) {
    return <CustomKnowMore level={params.level} />;
}
