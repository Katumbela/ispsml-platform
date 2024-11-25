"use client"


import Navbar from '@/components/Navbar';
import { useParams } from 'next/navigation';
import { getNewsBySlug } from '@/infra/data/newsData';

export default function ViewNewsPage() {
	const { slug } = useParams();
	const news = getNewsBySlug(slug);

	if (!news) {
		return <div>Notícia não encontrada</div>;
	}

	return (
		<div>
			<Navbar />
			<div className="pt-24 pb-10 bg-primary">
				<div className="containers">
					<h1 className='text-2xl font-bold text-white'>{news.title}</h1>
				
				</div>
			</div>
		</div>
	);
}
