import { newsData } from '@/infra/data/newsData';
import NewsCard from '../news-card/news-card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';
import { AbreviateString } from '@/utils';

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
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
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
				<h2 className="mb-8 text-3xl font-extrabold">{t('global.newsTitle')}</h2>
			</div>
			<div className="flex gap-2 containers">
				<div className="w-1/2">
					{newsData.filter((news) => news.sponsor).map((news, index) => (
						<div
							key={index}
							style={{
								background: `linear-gradient(180deg, #00000027, #0000008A), url(${news.image}) center center`,
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'cover'
							}}
							className="relative h-full bg-primary"
						>
							<div className="absolute bottom-0 left-0 right-0 px-4 py-5 text-white">
								<h2 className="text-2xl font-extrabold">{news.title}</h2>
								<p className="text-md">{AbreviateString.abbreviate(news.longDescription, 170)}</p>

								<br />
								<div className="flex justify-between w-full right-2 left-2 bottom-3">
									<a
										href={news.link}
										className="px-3 py-1 mt-auto text-xs font-bold text-white uppercase transition-all border hover:underline hover:bg-white hover:text-primary"
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
						<Slider {...settings} >
							{newsData.map((news, index) => (
								<NewsCard
									key={index}
									title={news.title}
									shortDescription={news.shortDescription}
									postDate={news.postDate}
									poster={news.poster}
									link={news.link}
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
