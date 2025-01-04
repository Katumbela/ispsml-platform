import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { images } from '@/assets';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import cn from 'classnames'; // npm install classnames
import { routes } from '@/infra/routes.vars';
// import { routes } from '@/infra/routes.vars';

interface Card {
	title: string;
	description: string;
	image: string;
	link?: string;
}

export function StudyOffer() {
	const [ selectedCard, setSelectedCard ] = useState<number | null>(null);

	const cards: Card[] = [
		{
			title: 'Inscrições e Matrículas',
			description: 'Informações detalhadas sobre como se inscrever, os requisitos necessários, prazos importantes e como obter bolsas de estudo para ajudar a financiar sua educação.',
			image: images.departImages.eng_tech.src,
			link: routes.APPLY_ROUTE

		},
		{
			title: 'Unidades Orgânicas',
			description: 'Detalhes abrangentes sobre as diferentes unidades orgânicas da instituição, incluindo suas funções, departamentos, cursos oferecidos e oportunidades de pesquisa.',
			image: images.departImages.ciencias_sociais.src,
			link: routes.ORGANIC_UNIT_ROUTE
		},
		{
			title: 'Responsabilidade Social',
			description: 'Iniciativas e projetos de responsabilidade social que a instituição está envolvida, destacando o impacto positivo na comunidade e as oportunidades de participação para os alunos.',
			image: images.departImages.geoscience.src,
			link: routes.SOCIAL_REPONSABILITY_ROUTE
		}
	];

	const handleCardClick = (index: number) => {
		setSelectedCard(selectedCard === index ? null : index);
	};
  
	return (
		<section className="-mt-1 bg-gray-100 ">
			<div className="mx-auto text-center ">
				<div className="grid grid-cols-1 gap-[2.5px] md:grid-cols-3">
					{cards.map((card, index) => (
						<div
							key={index}
							className="relative 2xl:h-[22rem] h-[17rem] overflow-hidden cursor-pointer cc"
							onClick={() => handleCardClick(index)}
						>
							<div
								className="absolute inset-0 card-background"
								style={{ background: `url(${card.image}) center center / cover no-repeat` }}
							/>
							<div className="absolute inset-0 opacity-70 bg-primary" />
							<div className="relative z-10 grid items-center h-full text-white place-content-center">
								<h3 className="my-auto text-2xl font-medium">{card.title}</h3>
								<div 
									className={cn(
										'absolute left-0 right-0 flex justify-center w-full text-2xl text-center bottom-4 py-4',
										{ 'bg-primary-dark/70z': index === 0 }
									)}
								>
									<FaAngleDown
										className={cn({
											'rotate-180 transition-all': selectedCard === index,
											'-rotate-0': selectedCard !== index
										})}
									/>
								</div>
							</div>
						</div>
					))}
				</div>
				<AnimatePresence>
					{selectedCard !== null && (
						<motion.div
							key={selectedCard}
							className={cn('w-full px-6 py-8 overflow-hidden text-sky-100 text-start bg-primary')}
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
								<FaAngleRight className='my-auto text-xl'/>
							</a>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
}

