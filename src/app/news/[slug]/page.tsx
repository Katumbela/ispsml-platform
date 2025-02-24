
/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateMetadata } from '@/infra/metadata';
import ViewNewsPage from './view-news-detailws-page';
import { newsService } from '@/services/news.service';

export const metadata = generateMetadata({
    title: 'Visualizar  evento | ISPSML',
    description: '',
});

export async function generateStaticParams() {
    const news = await newsService.getAllNews();
    return news.map((n) => ({ slug: n?.slug }));
}

export default function Page({ params }: any) {
    return <ViewNewsPage slug={params.slug || ""} />;
}
