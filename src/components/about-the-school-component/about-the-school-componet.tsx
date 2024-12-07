import Image from 'next/image';
import { BiLink, BiPhotoAlbum, BiSolidBuildings } from 'react-icons/bi';
import { FaVideo } from 'react-icons/fa6';
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
			<div className="containers">
				<h2 className="mb-0 text-3xl font-bold">{t('aboutTheSchool.title')}</h2>
				<p className="text-gray-500">{t('aboutTheSchool.description')}</p>
			</div>
			<br />
			<div className="h-[450px] containers 2xl:h-[700px] relative bg-primary-footer">
				<div className="relative w-3/4 2xl:w-3/4 pt-[2.5rem]  ]">
					<Slider {...settings}>
						{imageList.map((item, index) => (
							<div className=" h-[75vh] 2xl:h-[75vh] " key={index}>
								{/* <h3 className="mb-2 text-xl font-medium text-center text-white">{item.title}</h3> */}
								{/* <div className="relative w-20 h-20"> */}
								<Image
									alt={`Imagem ${index + 1}`}
									src={item.src}
									className="mx-auto w-[100%] h-[100%]"
									// width={100}
									// height={100}
									layout="fit"
									objectFit="100%"
								/>
								{/* </div> */}
							</div>
						))}
					</Slider>
				</div>

				<div className="h-[550px] relative w-full" />

				<div className="absolute right-[3.5vw] bottom-[8vh]">
					<ul className="space-y-2 text-white text-end">
						<li>
							<p className="flex flex-col gap-1 text-white text-end">
								<span className="text-sm"> Campus</span>
								<span className="text-xl font-bold"> ISPSML YZ</span>
								<span className="text-sm"> Luanda</span>
							</p>
						</li>
						<li className="flex justify-end gap-2 pt-4 text-xs font-semibold uppercase cursor-pointer hover:underline ">
							<span className="my-auto">Galeria</span>
							<BiPhotoAlbum className="my-auto text-xl" />
						</li>
						<li className="flex justify-end gap-2 text-xs font-semibold uppercase cursor-pointer hover:underline ">
							<span className="my-auto">Apresentação</span>
							<FaVideo className="my-auto text-xl" />
						</li>
						<li className="flex justify-end gap-2 text-xs font-semibold uppercase cursor-pointer hover:underline ">
							<span className="my-auto">Link</span>
							<BiLink className="my-auto text-xl" />
						</li>
						<li className="flex justify-end gap-2 text-xs font-semibold uppercase cursor-pointer hover:underline ">
							<span className="my-auto">Street View</span>
							<BiSolidBuildings className="my-auto text-xl" />
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
