'use client';

import { useParams } from 'next/navigation';
// import { newsData } from '@/infra/data/newsData';
import { FaArrowRight, FaFacebookF, FaLinkedin, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import { routes } from '@/infra/routes.vars';
import Image from 'next/image';
import { FaCalendarAlt } from 'react-icons/fa';
import NewsCard from '@/components/news-card/news-card';
import newsService from '@/services/news.service';
import { useEffect, useState } from 'react';
import { News } from '@/infra/interfaces/news';
import { DateUtils } from '@/utils';
import Head from 'next/head';

export default function ViewNewsPage() {
	const { slug } = useParams();
	const [news, setNews] = useState<News | null>(null);
	const [allNews, setAllNews] = useState<News[] | []>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		newsService.getNewsBySlug(slug ? String(slug) : "").then((news) => {
			setNews(news);
			setLoading(false);
		});
		newsService.getAllNews().then((news) => {
			setAllNews(news);
			setLoading(false);
		});
	}, [slug]);

	if (loading) {
		return (
			<div>
				<Head>
					<title>Carregando...</title>
				</Head>
				<div className="pt-24 pb-6 bg-primary">
					<div className="containers">
						<div className="w-3/4 h-8 bg-gray-200 rounded"></div>
						<div className="flex gap-2 mt-4">
							<div className="w-1/4 h-4 bg-gray-200 rounded"></div>
						</div>
					</div>
				</div>
				<section className="containers">
					<div className="flex gap-4 my-3">
						<div className="w-1/4 h-8 bg-gray-200 rounded"></div>
						<div className="w-1/4 h-8 bg-gray-200 rounded"></div>
						<div className="w-1/4 h-8 bg-gray-200 rounded"></div>
						<div className="w-1/4 h-8 bg-gray-200 rounded"></div>
					</div>
					<br />
					<div className="flex">
						<div className="w-full">
							<div className="h-[400px] 2xl:h-[600px] bg-gray-300"></div>
						</div>
						<div className="w-full containers">
							<div className="w-1/2 h-6 bg-gray-200 rounded"></div>
							<br />
							<div className="w-full h-4 bg-gray-200 rounded"></div>
							<div className="w-full h-4 bg-gray-200 rounded"></div>
							<div className="w-full h-4 bg-gray-200 rounded"></div>
						</div>
					</div>
				</section>
				<br />
				<br />
				<br />
				<section className="py-10 view-more bg-slate-100">
					<div className="containers">
						<div className="w-1/4 h-6 bg-gray-200 rounded"></div>
						<br />
						<br />
						<div className="grid grid-cols-4 gap-4 2xl:grid-cols-6">
							{[...Array(3)].map((_, index) => (
								<div key={index} className="h-48 bg-gray-200 rounded"></div>
							))}
						</div>
						<br />
						<br />
						<div className="w-1/4 h-8 bg-gray-200 rounded"></div>
					</div>
				</section>
			</div>
		);
	}

	if (!news) {
		return (
			<div>
				<Head>
					<title>Notícia não encontrada</title>
				</Head>
				Notícia não encontrada
			</div>
		);
	}

	return (
		<div>
			<Head>
				<title>{news.title}</title>
				<meta name="description" content={news.shortDescription} />
				<meta property="og:title" content={news.title} />
				<meta property="og:description" content={news.shortDescription} />
				<meta property="og:image" content={news.image} />
				<meta property="og:url" content={`https://ispsml.ao${routes.VIEW_NEWS_ROUTE}/${slug}`} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={news.title} />
				<meta name="twitter:description" content={news.shortDescription} />
				<meta name="twitter:image" content={news.image} />
			</Head>
			<div className="pt-24 pb-6 bg-primary">
				<div className="containers">
					<h1 className="text-3xl font-semibold text-white">{news.title}</h1>
					<p className="flex gap-2 mt-4 text-sm text-white">
						{' '}
						<FaCalendarAlt className="my-auto" />
						<span className="my-auto"> Publicado em: {DateUtils.getDatePt(news.postDate)}</span>
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
						<h2 className="text-2xl font-semibold">Veja também </h2>
					</div>
					<br />
					<br />
					<div className="grid grid-cols-4 gap-4 2xl:grid-cols-6">
						{allNews.filter((n) => n.slug !== slug)
							.slice(0, 3)
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
					<button onClick={() => window.location.href = routes.NEWS_ROUTE} className="flex gap-2 px-3 py-2 text-sm transition-all border-2 hover:bg-primary hover:text-white border-primary text-primary">
						<span className="my-auto">Todas as Notícias</span> <FaArrowRight className="my-auto" />
					</button>
				</div>
			</section>

		</div>
	);
}
