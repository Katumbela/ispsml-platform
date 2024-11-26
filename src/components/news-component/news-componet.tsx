import { newsData } from '@/infra/data/newsData';
import NewsCard from '../news-card/news-card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';
import { AbreviateString } from '@/utils';
import { routes } from '@/infra/routes.vars';

export function NewsComponents() {
	const { t } = useTranslation();

	const settings = {
		dots: false,
		infinite: false,
		controlls: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	return (
		<section className="pt-20 pb-10">
			<div className="containers">
				<h2 className="mb-8 text-3xl font-bold">{t('global.newsTitle')}</h2>
			</div>
			<div className="flex gap-2 px-1 mx-auto ">
				<div className="w-1/2">
					{newsData.filter((news) => news.sponsor).map((news, index) => (
						<div
							key={index}
							style={{
								background: `linear-gradient(180deg, #0000006F, #000000C6), url(${news.image}) center center`,
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'cover'
							}}
							title="Clique para ler mais"
							className="relative h-full transition-all cursor-pointer hover:shadow-xl shadow-primary bg-primary"
						>
							<div className="absolute px-3 py-1 text-white bg-yellow-500 rounded-full left-4 top-4">
								Em Destaque
							</div>
							<div className="absolute bottom-0 left-0 right-0 px-4 py-5 text-white">
								<h2 className="text-2xl font-bold">{news.title}</h2>
								<p className="text-md" dangerouslySetInnerHTML={{
							__html: AbreviateString.abbreviate(`${news.content}`, 170)
						}} />

								<br />
								<div className="flex justify-between w-full right-2 left-2 bottom-3">
									<a
										href={routes.VIEW_NEWS_ROUTE + '/' + news.slug}
										className="px-3 py-1 mt-auto text-xs font-semibold text-white uppercase transition-all border hover:underline hover:bg-white hover:text-primary"
									>
										Leia mais
									</a>
									<span className="text-xs">{news.postDate}</span>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="w-3/5">
					<div className="relative">
						<Slider {...settings}>
							{newsData.map((news, index) => (
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
						</Slider>
						<div className="absolute top-0 right-0 flex gap-2">
							<button className="slick-prev">Prev</button>
							<button className="slick-next">Next</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
