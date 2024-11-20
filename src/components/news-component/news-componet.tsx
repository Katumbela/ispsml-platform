import { newsData } from '@/infra/data/newsData';
import NewsCard from '../news-card/news-card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';

export function NewsComponents() {

	const { t } = useTranslation();
	
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		nextArrow: <button className="slick-next">Next</button>,
		prevArrow: <button className="slick-prev">Prev</button>,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
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
			<div className="relative">
				<Slider {...settings}>
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
		</section>
	);
}
