import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { images } from '@/assets';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function EducationComponents() {
	const { t } = useTranslation();
	return (
		<section className="py-0 ">
			<div className="containers">
				<h2 className="mb-8 text-3xl font-extrabold">{t('global.educationTitle')}</h2>
			</div>
			<div className="relative px-24">
				<div className="flex gap-10">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1, originX: 0, transition: { duration: 0.5, delay: 0.5 } }}
						// viewport={{ once: true }}
						className=" w-full h-[400px] relative bg-primary"
					>
						<Image alt="" src={images.backgrounds.bg_student_1} objectFit="cover" layout="fill" />
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 100 }}
						whileInView={{ opacity: 1, originX: 0, x: 0, transition: { duration: 0.5, delay: 0.5 } }}
						// viewport={{ once: true }}
						className=" w-full grid h-[400px] relative "
					>
						<div className="my-auto">
							<h1 className="text-5xl font-extrabold">{t('educationComponents.admissionsAndEducationalOffersTitle')}</h1>
							<p className="mt-5">
								{t('educationComponents.admissionsAndEducationalOffersDescription')}
							</p>
							<ul className="mt-2 font-bold text-blue-700 cursor-pointer">
								<li className="flex gap-3 transition-all hover:underline">
									<a href="#">{t('educationComponents.yearRange')}</a>
								</li>
								<li className="flex gap-3 transition-all hover:underline">
									<a href="#">{t('educationComponents.academicCalendar')}</a>
								</li>
								<li className="flex gap-3 transition-all hover:underline">
									<a href="#">{t('educationComponents.admissions')}</a>
								</li>
							</ul>
						</div>
					</motion.div>
				</div>
				<br />
				<br />
				<br />
				<div className="flex gap-10">
					<motion.div
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, originX: 0, x: 0, transition: { duration: 0.5, delay: 0.2 } }}
						// // viewport={{ once: true }}
						className=" w-full grid h-[400px] relative "
					>
						<div className="my-auto">
							<h1 className="text-5xl font-extrabold">{t('educationComponents.postgraduateAndMastersTitle')}</h1>
							<p className="mt-5">
								{t('educationComponents.postgraduateAndMastersDescription')}
							</p>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1, originX: 0, transition: { duration: 0.5, delay: 0.3 } }}
						// // viewport={{ once: true }}
						className=" w-full h-[400px] relative bg-primary"
					>
						<Image alt="" src={images.backgrounds.bg_graduated_student_2} objectFit="cover" layout="fill" />
					</motion.div>
				</div>
			</div>
		</section>
	);
}