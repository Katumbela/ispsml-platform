/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { images } from '@/assets';
import { routes } from '@/infra/routes.vars';
import { env } from '@/infra/env';

const Hero = () => {
	const { t } = useTranslation();
	const [slideIndex, setSlideIndex] = useState(0);
	const [animationDirection, setAnimationDirection] = useState('top');

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		fade: true,
		cssEase: 'linear',
		beforeChange: (oldIndex: any, newIndex: any) => {
			setSlideIndex(newIndex);
			setAnimationDirection(Math.random() > 0.5 ? 'top' : 'bottom');
		}
	};

	useEffect(
		() => {
			// Trigger re-render to reset animations
		},
		[slideIndex]
	);

	const getInitialY = () => (animationDirection === 'top' ? -50 : 50);

	const translatedCarouselItems = [

		{
			background: images.backgrounds.bg_hero_3,
			// background: images.backgrounds.bg_woman_lib,
			title: t('navbar.carouselItems.welcomeTitle'),
			description: t('navbar.carouselItems.welcomeDescription'),
			cta: t('navbar.carouselItems.welcomeCta'),
			link: routes.ABOUT_ROUTE
		},
		{
			background: images.backgrounds.bg_inscricao_e_matricula,
			// background: images.backgrounds.bg_applyings,
			title: t('navbar.carouselItems.researchInnovationTitle'),
			description: t('navbar.carouselItems.researchInnovationDescription'),
			cta: t('navbar.carouselItems.researchInnovationCta'),
			link: '/apply'
		},

		// {
		// 	background: images.backgrounds.bg1,
		// 	title: t('navbar.carouselItems.academicExcellenceTitle'),
		// 	description: t('navbar.carouselItems.academicExcellenceDescription'),
		// 	cta: t('navbar.carouselItems.academicExcellenceCta'),
		// 	link: '/courses'
		// },

		{
			background: images.backgrounds.bg_qualidade_e_inovacao,
			// background: images.backgrounds.bg_director_right_left,
			title: t('navbar.carouselItems.universityLifeTitle'),
			description: t('navbar.carouselItems.universityLifeDescription'),
			cta: t('navbar.carouselItems.universityLifeCta'),
			link: '#'
		}
	];

	return (
		<section className="text-white ">
			<div className="pt-0 mx-auto text-center">
				<Slider {...settings}>
					{translatedCarouselItems.map((item, index) => (
						<motion.div
							key={index}
							className="relative h-[600px] 2xl:h-[800px] items-start grid place-content-end pb-10 overflow-hidden"
							initial={{ scale: 0.9 }}
							animate={{ scale: 1 }}
							// style={{ background: `url(${item.background.src})` }}
							transition={{ duration: 0.5 }}
						>
							<Image
								src={item.background.src}
								alt={item.title}
								layout="fill"
								placeholder='blur' blurDataURL={env.BLUR_IMAGE}

								objectFit="cover"
								// objectPosition={index === 1 ? 'top' : 'center'}
								objectPosition={'top'}
								className="absolute inset-0 z-[-1] scale-100"
							/>
							<div className="absolute inset-0 bg-black opacity-50 z-[-1]" />
							<div className="relative z-10 my-auto text-start">
								<div className="px-6 containers">
									<motion.h1
										className="mb-4 text-3xl font-semibold lg:text-5xl sm:text-4xl"
										initial={{ opacity: 0, y: getInitialY() }}
										animate={{ opacity: 1, y: 0, scale: [1, 1.2, 1] }}
										transition={{ duration: 0.5, delay: 0.5, type: 'spring', stiffness: 100 }}
									>
										{item.title}
									</motion.h1>
									{/* <motion.p
										className="mb-4 text-lg md:text-xl"
										initial={{ opacity: 0, y: getInitialY() }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, delay: 1 }}
									>
										{item.description}
									</motion.p> */}
									<motion.a
										href={item.link}
										className="flex gap-1 mb-4 text-sm font-semibold tracking-wider transition-all ls:text-md hover:text-white/80"
										initial={{ opacity: 0, y: getInitialY() }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, delay: 1.5 }}
									>
										<span className="my-auto uppercase"> SABER MAIS</span>
										{/* <span className="my-auto uppercase"> {item.cta}</span> */}
										<FaAngleRight className="my-auto text-xl" />
									</motion.a>
								</div>
							</div>
						</motion.div>
					))}
				</Slider>
			</div>
		</section>
	);
};

export default Hero;
