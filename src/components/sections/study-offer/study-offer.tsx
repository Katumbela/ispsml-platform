import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { images } from '@/assets';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import cn from 'classnames'; // npm install classnames
import { routes } from '@/infra/routes.vars';

interface Card {
	title: string;
	description: string;
	image: string;
	link?: string;
}

export function StudyOffer() {
	const [selectedCard, setSelectedCard] = useState<number | null>(null);
	const [mobileSelected, setMobileSelected] = useState<Record<number, boolean>>({});

	const [isMobile, setIsMobile] = useState<boolean>(false);

	// Detecta se a tela é menor que "sm" (640px)
	useEffect(() => {
		const checkScreenSize = () => {
			setIsMobile(window.innerWidth < 640); // sm = 640px
		};

		checkScreenSize();
		window.addEventListener('resize', checkScreenSize);
		return () => window.removeEventListener('resize', checkScreenSize);
	}, []);


	const cards: Card[] = [
		{
			title: 'Inscrições e Matrículas',
			description: `
			Descubra como garantir sua vaga! Encontre informações detalhadas sobre o processo de
			inscrição, os requisitos necessários, prazos importantes e oportunidades de bolsas de
			estudo para apoiar o seu percurso académico.
			`,
			image: images.departImages.eng_tech.src,
			link: routes.APPLY_ROUTE
		},
		{
			title: 'Unidades Orgânicas',
			description: `
			Conheça as nossas unidades orgânicas e descubra a estrutura que sustenta a excelência
			do nosso ensino. Saiba mais sobre as diferentes áreas de estudo e como cada unidade
			contribui para a formação integral dos estudantes.

			`,
			image: images.departImages.ciencias_sociais.src,
			link: routes.ORGANIC_UNIT_ROUTE
		},
		{
			title: 'Responsabilidade Social',
			description: `
			O nosso compromisso vai além da educação. Acreditamos no impacto positivo da nossa
			instituição na sociedade, promovendo iniciativas que beneficiam a comunidade e
			impulsionam o desenvolvimento social.
			`,
			image: images.departImages.geoscience.src,
			link: routes.SOCIAL_REPONSABILITY_ROUTE
		}
	];

	// const handleCardClick = (index: number) => {

	// };

	const handleMobileCardClick = (index: number) => {

		if (isMobile) {
			setMobileSelected((prev) => ({
				...prev,
				[index]: !prev[index]
			}));

		}
		else {
			setSelectedCard(selectedCard === index ? null : index);
		}

	};

	return (
		<section className="-mt-1 bg-gray-100">
			<div className="mx-auto text-center">
				<div className="grid grid-cols-1 gap-[2.5px] md:grid-cols-3">
					{cards.map((card, index) => (
						<div key={index} className="flex flex-col">
							{/* Card */}
							<div
								className="relative 2xl:h-[22rem] h-[17rem] overflow-hidden cursor-pointer"
								onClick={() => handleMobileCardClick(index)}
							>
								<div
									className="absolute inset-0 card-background"
									style={{ background: `url(${card.image}) center center / cover no-repeat` }}
								/>
								<div className="absolute inset-0 opacity-70 bg-primary" />
								<div className="relative z-10 grid items-center h-full text-white place-content-center">
									<h3 className="my-auto text-2xl font-medium">{card.title}</h3>
									<div className="absolute left-0 right-0 flex justify-center w-full py-4 text-2xl text-center bottom-4">
										<FaAngleDown
											className={cn('transition-all', {
												'rotate-180': mobileSelected[index],
												'-rotate-0': !mobileSelected[index]
											})}
										/>
									</div>
								</div>
							</div>

							{/* Mobile Description - Aparece abaixo do card */}
							<AnimatePresence>
								{mobileSelected[index] && (
									<motion.div
										className="block w-full px-6 py-6 md:hidden text-sky-100 text-start bg-primary"
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: 'auto', opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.5 }}
									>
										<h3 className="text-xl font-semibold">{card.title}</h3>
										<p>{card.description}</p>
										<br />
										<a
											href={card.link}
											className="flex gap-2 mt-6 font-bold text-white uppercase transition-all hover:text-white/70"
										>
											<span className="my-auto">Saber mais</span>
											<FaAngleRight className='my-auto text-xl' />
										</a>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					))}
				</div>

				{/* Desktop Description - Apenas 1 item aparece abaixo da grade */}
				<AnimatePresence>
					{selectedCard !== null && (
						<motion.div
							key={selectedCard}
							className="hidden w-full px-6 py-8 overflow-hidden md:block text-sky-100 text-start bg-primary"
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: 'auto', opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{ duration: 0.5 }}
						>
							<h3 className="text-xl font-semibold">{cards[selectedCard].title}</h3>
							<p>{cards[selectedCard].description}</p>
							<br />
							<a
								href={cards[selectedCard].link}
								className="flex gap-2 mt-6 font-bold text-white uppercase transition-all hover:text-white/70"
							>
								<span className="my-auto">Saber mais</span>
								<FaAngleRight className='my-auto text-xl' />
							</a>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
}
