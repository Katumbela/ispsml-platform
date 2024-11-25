'use client';

import Navbar from '@/components/Navbar';
import { useParams } from 'next/navigation';
import { getNewsBySlug, newsData } from '@/infra/data/newsData';
import { FaArrowRight, FaFacebookF, FaLinkedin, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import { routes } from '@/infra/routes.vars';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { FaCalendarAlt } from 'react-icons/fa';
import NewsCard from '@/components/news-card/news-card';

export default function ViewNewsPage() {
	const { slug } = useParams();
	const news = getNewsBySlug(slug);

	if (!news) {
		return <div>Notícia não encontrada</div>;
	}

	return (
		<div>
			<Navbar />
			<div className="pt-24 pb-6 bg-primary">
				<div className="containers">
					<h1 className="text-3xl font-bold text-white">{news.title}</h1>
					<p className="flex gap-2 mt-4 text-sm text-white">
						{' '}
						<FaCalendarAlt className="my-auto" />
						<span className="my-auto"> Publicado em: {news.postDate}</span>
					</p>
				</div>
			</div>
			<section className="containers">
				<div className="flex gap-4 my-3 sharing-buttons ">
					<a
						href={`https://www.facebook.com/sharer/sharer.php?u=https://ispsml.ao${routes.VIEW_NEWS_ROUTE}/${slug}&src=ispml-university`}
						target="__blank"
						className="flex gap-2 px-3 py-2 text-sm transition-all border-2 hover:bg-primary hover:text-white border-primary text-primary"
					>
						<FaFacebookF className="my-auto" /> <span className="my-auto">Facebook</span>
					</a>
					<a
						href={`https://wa.me/?text=https://ispsml.ao${routes.VIEW_NEWS_ROUTE}/${slug}`}
						target="__blank"
						className="flex gap-2 px-3 py-2 text-sm transition-all border-2 hover:bg-primary hover:text-white border-primary text-primary"
					>
						<FaWhatsapp className="my-auto" /> <span className="my-auto">Whatsapp</span>
					</a>
					<a
						href={`https://x.com/intent/tweet?url=https://ispsml.ao${routes.VIEW_NEWS_ROUTE}/${slug}&via=ispml-university`}
						target="__blank"
						className="flex gap-2 px-3 py-2 text-sm transition-all border-2 hover:bg-primary hover:text-white border-primary text-primary"
					>
						<FaXTwitter className="my-auto" /> <span className="my-auto">Tweeter</span>
					</a>
					<a
						href={`https://www.linkedin.com/sharing/share-offsite/?url=https://ispsml.ao${routes.VIEW_NEWS_ROUTE}/${slug}`}
						target="__blank"
						className="flex gap-2 px-3 py-2 text-sm transition-all border-2 hover:bg-primary hover:text-white border-primary text-primary"
					>
						<FaLinkedin className="my-auto" /> <span className="my-auto">Linkedin</span>
					</a>
				</div>
				<br />
				<div className="flex">
					<div className="w-full">
						<div className="h-[400px] 2xl:h-[600px] relative w-full">
							<Image alt="" src={news.image} objectFit="cover" layout="fill" />
						</div>
					</div>
					<div className="w-full containers">
						<h2>
							<b>Assunto</b>: {news.title}
						</h2>
						<br />
						<div dangerouslySetInnerHTML={{ __html: news.content }} />
					</div>
				</div>
			</section>

			<br />
			<br />
			<br />
			<section className="py-10 view-more bg-slate-100">
				<div className="containers">
					<div>
						<h2 className="text-2xl font-bold">Veja também </h2>
					</div>
                    <br />
                <br />
					<div className="grid grid-cols-4 gap-4 2xl:grid-cols-6">
						{newsData
							.slice(0, 6)
							.map((news, index) => (
								<NewsCard
									key={index}
									title={news.title}
									shortDescription={news.shortDescription}
									postDate={news.postDate}
									poster={news.poster}
									content={news.content}
									link={news.link}
									slug={news.slug}
									image={news.image}
								/>
							))}
					</div>
					<br />
					<br />
					<button className="flex gap-2 px-3 py-2 text-sm transition-all border-2 hover:bg-primary hover:text-white border-primary text-primary">
						<span className="my-auto">Todas as Notícias</span> <FaArrowRight className="my-auto" />
					</button>
				</div>
			</section>

			<Footer />
		</div>
	);
}
