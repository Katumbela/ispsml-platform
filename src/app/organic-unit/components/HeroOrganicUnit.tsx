/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
// import { FaAngleRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { images } from '@/assets';

const HeroOrganicUnit = () => {
	const { t } = useTranslation();
	const [ slideIndex, setSlideIndex ] = useState(0);
	// const [ animationDirection, setAnimationDirection ] = useState('top');

	const settings = {
		dots: true,
		infinite: true,
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2800,
		fade: true,
		cssEase: 'linear',
		beforeChange: (oldIndex: any, newIndex: any) => {
			setSlideIndex(newIndex);
			// setAnimationDirection(Math.random() > 0.5 ? 'top' : 'bottom');
		}
	};

	useEffect(
		() => {
			// Trigger re-render to reset animations
		},
		[ slideIndex ]
	);

	// const getInitialY = () => (animationDirection === 'top' ? -50 : 50);

	const translatedCarouselItems = [
		{
			background: images.backgrounds.bg_research_2,
			title: t('navbar.carouselItems.welcomeTitle'),
			description: t('navbar.carouselItems.welcomeDescription'),
			cta: t('navbar.carouselItems.welcomeCta'),
			link: '/apply'
		},
		{
			background: images.backgrounds.bg_vertical_education_1,
			title: t('navbar.carouselItems.academicExcellenceTitle'),
			description: t('navbar.carouselItems.academicExcellenceDescription'),
			cta: t('navbar.carouselItems.academicExcellenceCta'),
			link: '/courses'
		},
		{
			background: images.backgrounds.bg_investigator_1,
			title: t('navbar.carouselItems.researchInnovationTitle'),
			description: t('navbar.carouselItems.researchInnovationDescription'),
			cta: t('navbar.carouselItems.researchInnovationCta'),
			link: '/research'
		},
		{
			background: images.teachers.teacher3,
			title: t('navbar.carouselItems.universityLifeTitle'),
			description: t('navbar.carouselItems.universityLifeDescription'),
			cta: t('navbar.carouselItems.universityLifeCta'),
			link: '/campus-life'
		}
	];

	return (
		<section className="text-white ">
			<div className="pt-0 mx-auto text-center">
				<Slider {...settings}>
					{translatedCarouselItems.map((item, index) => (
						<motion.div
							key={index}
							className="relative 2xl:h-[770px] h-[500px] items-start grid place-content-end pb-10 overflow-hidden"
							initial={{ scale: 0.9 }}
							animate={{ scale: 1 }}
							transition={{ duration: 0.5 }}
						>
							<Image
								src={item.background.src}
								alt={item.title}
								layout="fill"
								objectFit="cover"
								className="absolute inset-0 z-[-1]"
							/>
							<div className="absolute inset-0 bg-black opacity-50 z-[-1]" />
						</motion.div>
					))}
				</Slider>
			</div>
		</section>
	);
};

export default HeroOrganicUnit;
