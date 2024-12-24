/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import { images } from '@/assets';
import cn from 'classnames';

interface GlobalHeroProps {
	children?: React.ReactNode;
	title?: string;
	paragraph?: string;
	linkMore?: string;
	className?: string;
	titleClassName?: string;
	subtitle?: string;
	bottomBG?: 'primary' | 'none' | 'dark';
	heightLg?: string;
	bgImage?: string;
	heightXxl?: string;
	position?: string;
}

const GlobalHero = ({
	className,
	titleClassName,
	heightXxl,
	children,
	heightLg,
	title,
	bgImage,
	bottomBG,
	position
}: GlobalHeroProps) => {
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

	return (
		<section className="text-white hero-det">
			<div className="pt-0 mx-auto text-center">
				<Slider {...settings}>
					<motion.div
						className={`relative ${className} 2xl:h-[${heightXxl}px] h-[${heightLg}px]  items-start grid place-content-end overflow-hidden`}
						initial={{ scale: 0.9 }}
						animate={{ scale: 1 }}
						transition={{ duration: 0.5 }}
					>
						<Image
							src={bgImage ? bgImage : images.backgrounds.bg_night_1.src}
							alt={''}
							layout="fill"
							objectPosition={position || ""}
							objectFit="cover"
							className="absolute inset-0 z-[-1]"
						/>
						<div className="absolute inset-0 bg-black opacity-50 z-[-1]" />
						<div className="relative z-10 my-auto text-start">
							<div
								className={cn('py-14', {
									' bg-primary-dark/50': bottomBG === 'primary',
									'bg-gradient-to-t from-black': bottomBG === 'dark'
								})}
							>
								<div className="containers">
									<motion.h1
										className={cn(' font-bold ', titleClassName, { "text-4xl": !titleClassName })}
										initial={{ opacity: 0, y: getInitialY() }}
										animate={{ opacity: 1, y: 0, scale: [1, 1.2, 1] }}
										transition={{ duration: 0.5, delay: 0.5, type: 'spring', stiffness: 100 }}
									>
										{title}
									</motion.h1>
									<div className="text-white">{children}</div>
								</div>
							</div>
						</div>
					</motion.div>
				</Slider>
			</div>
		</section>
	);
};

export default GlobalHero;
