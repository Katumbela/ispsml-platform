import NewsCard from '../news-card/news-card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';
import { AbreviateString, DateUtils } from '@/utils';
import { routes } from '@/infra/routes.vars';
import { useQuery } from 'react-query';
import { newsService } from '@/services/news.service';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function NewsComponents() {
	const { t } = useTranslation();

	const { data: newses, isLoading: loading } = useQuery('allNews', () => newsService.getAllNews(), {
		refetchOnWindowFocus: false
	});

	const randomNews = newses && newses?.length > 0 ? newses[Math.floor(Math.random() * newses.length)] : null;
	const filteredNewses = randomNews ? newses && newses.filter(n => n !== randomNews) : newses;

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
		<section className="pt-10 md:pt-20 pb-11">
			<div className="containers">
				<h2 className="mb-8 text-xl font-bold sm:text-3xl">{t('global.newsTitle')}</h2>
			</div>
			<div className="flex flex-col gap-2 px-1 mx-auto sm:flex-row ">
				<div className="sm:w-1/2">
					{loading ? (
						<Skeleton height={400} />
					) : (
						randomNews && (
							<div
								style={{
									background: `linear-gradient(180deg, #0000006F, #000000C6), url(${randomNews.image}) center center`,
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'cover'
								}}
								title="Clique para ler mais"
								className="relative h-[20rem] w-full transition-all cursor-pointer sm:h-full hover:shadow-xl shadow-primary bg-primary"
							>
								<div className="absolute px-3 text-xs text-white rounded-full py-1.5 sm:text-base-1 bg-primary left-4 top-4">
									Em Destaque
								</div>
								<div className="absolute bottom-0 left-0 right-0 px-4 py-5 text-white">
									<h2 className="text-base font-bold sm:text-2xl">{randomNews.title}</h2>
									<div className="text-xs sm:text-md" dangerouslySetInnerHTML={{
										__html: AbreviateString.abbreviate(`${randomNews.content}`, 170)
									}} />
									<br />
									<div className="flex justify-between w-full right-2 left-2 bottom-3">
										<a
											href={routes.VIEW_NEWS_ROUTE + '/' + randomNews.slug}
											className="px-3 py-1 mt-auto text-xs font-semibold text-white uppercase transition-all border hover:bg-white hover:text-primary"
										>
											Leia mais
										</a>
										<span className="text-xs">{DateUtils.getDateTime(randomNews.postDate)}</span>
									</div>
								</div>
							</div>
						)
					)}
				</div>
				<div className="sm:w-3/5">
					<div className="relative">
						{loading ? (

							<div className='flex gap-3'>
								<div className="w-full h-[22rem] mb-2 bg-gray-300 rounded"></div>
								<div className="w-full h-[22rem] mb-2 bg-gray-300 rounded "></div>
								<div className="w-full h-[22rem] mb-2 bg-gray-300 rounded"></div>
							</div>
						) : (
							<Slider {...settings}>
								{filteredNewses?.map((news, index) => (
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
						)}
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
