import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { images } from '@/assets';
import { useTranslation } from 'react-i18next';

export function AboutTheSchoolComponents() {
	const { t } = useTranslation();

	const settings = {
		dots: true,
		speed: 500,
		slidesToShow: 1,
		arrows: true
	};

	const imageList = [
		{ title: 'Campus Principal', src: images.backgrounds.bg_ispsml_air },
		{ title: 'Biblioteca Moderna', src: images.backgrounds.bg_school_2 },
		{ title: 'Laboratórios Avançados', src: images.backgrounds.bg_school_4 }
	];

	return (
		<section className="py-0 z-500">
			<div className="text-center containers">
				<h2 className="mb-10 text-2xl font-bold md:text-5xl text-primary">{t('aboutTheSchool.title')}</h2>
			</div>
			<br />
			<div className="relative h-auto px-4 overflow-hidden containers bg-primary-footer md:px-0">
				<div className="relative w-full pt-10 mx-auto md:w-3/4">
					<Slider {...settings}>
						{imageList.map((item, index) => (
							<div className="h-[50vh] md:h-[75vh] 2xl:h-[85vh]" key={index}>
								<Image
									alt={`Imagem ${index + 1}`}
									src={item.src}
									className="object-cover w-full h-full mx-auto"
									layout="responsive"
								/>
							</div>
						))}
					</Slider>
				</div>

				<div className="absolute right-4 md:right-[3.5vw] bottom-4 md:bottom-[8vh] text-white text-end">
					<ul className="space-y-2">
						<li>
							<p className="flex flex-col gap-1">
								<span className="text-xl font-bold"> ISPSML</span>
								<span className="text-sm"> Luanda, Benfica</span>
							</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
