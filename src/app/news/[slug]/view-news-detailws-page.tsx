'use client';

import { FaArrowRight, FaFacebookF, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import { routes } from '@/infra/routes.vars';
import Image from 'next/image';
import { FaCalendarAlt } from 'react-icons/fa';
import NewsCard from '@/components/news-card/news-card';
import { newsService } from '@/services/news.service';
import { useQuery } from 'react-query';
import { DateUtils } from '@/utils';
import Head from 'next/head';

export default function ViewNewsPage({ slug }: { slug: string }) {
	const { data: news, isLoading: newsLoading } = useQuery(['news', slug], () => newsService.getNewsBySlug(slug), {
		refetchOnWindowFocus: false
	});

	const { data: allNews, isLoading: allNewsLoading } = useQuery('allNews', () => newsService.getAllNews(), {
		refetchOnWindowFocus: false
	});

	if (newsLoading || allNewsLoading && !news) {
		return (
			<div>
				<Head>
					<title>Carregando...</title>
				</Head>
				<div className="pt-24 pb-6 bg-primary">
					<div className="containers">
						<div className="w-3/4 h-8 bg-gray-200 rounded animate-pulse"></div>
						<div className="flex gap-2 mt-4">
							<div className="w-1/4 h-4 bg-gray-200 rounded animate-pulse"></div>
						</div>
					</div>
				</div>
				<section className="containers">
					<div className="flex gap-4 my-3">
						<div className="w-1/4 h-8 bg-gray-200 rounded animate-pulse"></div>
						<div className="w-1/4 h-8 bg-gray-200 rounded animate-pulse"></div>
						<div className="w-1/4 h-8 bg-gray-200 rounded animate-pulse"></div>
						<div className="w-1/4 h-8 bg-gray-200 rounded animate-pulse"></div>
					</div>
					<br />
					<div className="flex">
						<div className="w-full">
							<div className="h-[400px] 2xl:h-[600px] bg-gray-300 animate-pulse"></div>
						</div>
						<div className="w-full containers">
							<div className="w-1/2 h-6 bg-gray-200 rounded animate-pulse"></div>
							<br />
							<div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
							<div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
							<div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
						</div>
					</div>
				</section>
				<br />
				<br />
				<br />
				<section className="py-10 view-more bg-slate-100">
					<div className="containers">
						<div className="w-1/4 h-6 bg-gray-200 rounded animate-pulse"></div>
						<br />
						<br />
						<div className="grid grid-cols-4 gap-4 2xl:grid-cols-6">
							{[...Array(3)].map((_, index) => (
								<div key={index} className="h-48 bg-gray-200 rounded animate-pulse"></div>
							))}
						</div>
						<br />
						<br />
						<div className="w-1/4 h-8 bg-gray-200 rounded animate-pulse"></div>
					</div>
				</section>
			</div>
		);
	}


	// if (newsError || allNewsError) {
	// 	return (
	// 		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
	// 			<Head>
	// 				<title>Erro ao carregar notícias</title>
	// 			</Head>
	// 			<div className="p-6 bg-white rounded shadow-md">
	// 				<h1 className="text-2xl font-semibold text-gray-800">Erro ao carregar notícias</h1>
	// 				<p className="mt-4 text-gray-600">Ocorreu um erro ao carregar as notícias. Por favor, tente novamente mais tarde.</p>
	// 				<button onClick={() => window.location.reload()} className="mt-6 px-4 py-2 text-white bg-primary rounded hover:bg-primary-dark">
	// 					Tentar novamente
	// 				</button>
	// 			</div>
	// 		</div>
	// 	);
	// }

	if (!news) {
		return (
			<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
				<Head>
					<title>Notícia não encontrada</title>
				</Head>
				<div className="p-6 bg-white rounded shadow-md">
					<h1 className="text-2xl font-semibold text-gray-800">Notícia não encontrada</h1>
					<p className="mt-4 text-gray-600">A notícia que você está procurando não foi encontrada. Por favor, verifique o link ou volte para a página inicial.</p>
					<button onClick={() => window.location.href = routes.NEWS_ROUTE} className="mt-6 px-4 py-2 text-white bg-primary rounded hover:bg-primary-dark">
						Voltar para Notícias
					</button>
				</div>
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
			{
				allNews && allNews?.length > 0 && (
					<section className="py-10 view-more bg-slate-100">
						<div className="containers">
							<div>
								<h2 className="text-2xl font-semibold">Veja também </h2>
							</div>
							<br />
							<br />
							<div className="grid grid-cols-4 gap-4 2xl:grid-cols-6">
								{allNews?.filter((n) => n.slug !== slug)
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
				)
			}

		</div >
	);
}
