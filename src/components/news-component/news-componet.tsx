import NewsCard from '../news-card/news-card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';
import { AbreviateString, DateUtils } from '@/utils';
import { routes } from '@/infra/routes.vars';
import { useEffect, useState } from 'react';
import newsService from '@/services/news.service';
import { News } from '@/infra/interfaces/news';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function NewsComponents() {
	const { t } = useTranslation();

  const [loading, setLoading] = useState(false);
	
  const [newses, setNewses] = useState<News[] | []>([]);
  const [randomNews, setRandomNews] = useState<News | null>(null);
  
    useEffect(() => {
		setLoading(true);
      newsService.getAllNews().then((news) => {
        setNewses(news);
        setLoading(false);
        if (news.length > 0) {
          const randomIndex = Math.floor(Math.random() * news.length);
          setRandomNews(news[randomIndex]);
        }
      });
    }, []);


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
								className="relative h-full transition-all cursor-pointer hover:shadow-xl shadow-primary bg-primary"
							>
								<div className="absolute px-3 py-1 text-white bg-yellow-500 rounded-full left-4 top-4">
									Em Destaque
								</div>
								<div className="absolute bottom-0 left-0 right-0 px-4 py-5 text-white">
									<h2 className="text-2xl font-bold">{randomNews.title}</h2>
									<div className="text-md" dangerouslySetInnerHTML={{
										__html: AbreviateString.abbreviate(`${randomNews.content}`, 170)
									}} />
									<br />
									<div className="flex justify-between w-full right-2 left-2 bottom-3">
										<a
											href={routes.VIEW_NEWS_ROUTE + '/' + randomNews.slug}
											className="px-3 py-1 mt-auto text-xs font-semibold text-white uppercase transition-all border hover:underline hover:bg-white hover:text-primary"
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
				<div className="w-3/5">
					<div className="relative">
						{loading ? (
							<Skeleton count={3} height={200} />
						) : (
							<Slider {...settings}>
								{newses.map((news, index) => (
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
