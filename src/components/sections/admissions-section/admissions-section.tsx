import React, { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { images } from '@/assets';
import { FaAngleRight } from 'react-icons/fa'; // Importar ícones
import { routes } from '@/infra/routes.vars';
import Image from 'next/image';
import { env } from '@/infra/env';

interface IParagraphProps {
	children: ReactNode;
	index: number;
	title: string;
	onVisible: (index: number) => void;
	isActive: boolean;
}

const Paragraph = ({ children, index, title, onVisible, isActive }: IParagraphProps) => {
	const { ref, inView } = useInView({
		threshold: 0.8, // 50% do elemento visível
		triggerOnce: false // Permitir que o gatilho ocorra múltiplas vezes
	});

	React.useEffect(
		() => {
			if (inView) {
				onVisible(index); // Notifica o pai sobre o índice atual visível
			}
		},
		[inView, index, onVisible]
	);

	const variants = {
		hidden: { opacity: 0.5, y: 50 },
		visible: { opacity: 1, y: 0 },
		advance: { opacity: 1, y: -20 }
	};

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={isActive ? 'advance' : 'visible'}
			variants={variants}
			transition={{
				type: 'tween',
				duration: 0.3,
				ease: 'easeOut'
			}}
			className={`relative sm:containers flex items-start ${index !== 0 ? " mt-[10vh] 2xl:mb-[0vh]" : ""}`}
		>
			{/* Ponto à esquerda */}
			<div
				className={`absolute hidden sm:grid -left-8 w-5 h-5  items-center place-content-center rounded-full  border-2 border-primary`}
				style={{
					// transform: isActive ? 'translateY(calc(50vh - 50%))' : 'none',
					transition: 'transform 0.3s ease, background-color 0.3s ease'
				}}
			>
				<div className='w-[10px] h-[10px] rounded-full bg-primary '></div>

			</div>
			{/* Título e Parágrafo */}
			<div>
				<h3 className="mb-2 text-lg font-semibold sm:text-3xl 2xl:text-4xl">{title}</h3>
				<div className='text-xs sm:text-base'>{children}</div>
			</div>
		</motion.div>
	);
};

const FixedImageScrollWithBrutalEffect = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const handleVisible = (index: number) => {
		setActiveIndex(index);
	};

	React.useEffect(() => {
		if (activeIndex !== null && activeIndex >= paragraphs.length) {
			setActiveIndex(paragraphs.length - 1);
		}
	}, [activeIndex]);

	const paragraphs = [

		{
			title: 'Preparatórios',
			content: (
				<>
					Os nossos cursos preparatórios foram concebidos para ajudar os estudantes a aceder ao
					ensino superior com uma base sólida de conhecimentos. Estes programas reforçam
					competências essenciais e preparam os alunos para os desafios académicos das
					licenciaturas, aumentando as suas chances de sucesso.
					<div className="mt-6">
						<a href={routes.KNOW_MORE_ROUTE + "/preparatory"} className="flex items-center text-sm font-semibold uppercase transition-all text-slate-600 hover:text-slate-700"> Saber mais <FaAngleRight className="ml-1" /></a>
					</div>
				</>
			)
		},
		{
			title: 'Licenciatura',
			content: (
				<>
					Se pretende aprofundar os seus conhecimentos e ampliar a sua visão do mundo, os
					nossos cursos de licenciatura são a escolha certa. Com uma base sólida em várias áreas
					do saber, garantimos uma formação que lhe permitirá construir uma carreira de sucesso
					e expandir as suas oportunidades profissionais.

					<div className="mt-6">
						<a href={routes.KNOW_MORE_ROUTE + "/undergraduation"} className="flex items-center text-sm font-semibold uppercase transition-all text-slate-600 hover:text-slate-700"> Saber mais <FaAngleRight className="ml-1" /></a>
					</div>
				</>
			)
		},
		{
			title: 'Técnico Profissional',
			content: (
				<>
					Ganhe as competências e conhecimentos essenciais para se destacar no mercado de
					trabalho com os nossos cursos técnicos. Oferecemos formações ajustadas às exigências
					da indústria moderna, garantindo certificações que impulsionam a sua empregabilidade
					e o seu crescimento profissional.
					<div className="mt-6">
						<a href={routes.KNOW_MORE_ROUTE + "/professional"} className="flex items-center text-sm font-semibold uppercase transition-all text-slate-600 hover:text-slate-700"> Saber mais <FaAngleRight className="ml-1" /></a>
					</div>
				</>
			)
		},

	];

	return (
		<div className="pb-20 containers ">
			<h2 className="text-xl font-bold sm:text-3xl">Conheça a Nossa Oferta Formativa </h2>

			<p className="text-sm text-gray-500 sm:text-base">Desde Cursos Profissionais até Pós-Graduações</p>
			<br />
			<div className="min-h-[120vh] sm:mt-6  2xl:min-h-[00vh]  2xl:pe-[6vw] sm:pe-[5vw] sm:flex-row flex-col flex gap-24 2xl:gap-28">
				{/* Imagem fixa */}
				<div className=" w-full rounded-lg sm:rounded-none h-[40vh] sm:h-[89vh] bg-primary sticky top-[90px] ">
					<Image
						src={images.backgrounds.bg_oferta_formativa_main.src}
						alt="Imagem fixa"
						objectFit='cover'
						placeholder='blur' blurDataURL={env.BLUR_IMAGE}

						layout='fill'
						className="md:h-[89vh] w-full sm:me-auto"
					/>
				</div>

				{/* Conteúdo */}
				<div className="relative w-full ">
					<div
						className="absolute top-[0rem] bottom-0 left-0 w-[1px] bg-gray-300"
						style={{ marginLeft: '-1.5rem' }}
					/>
					{/* <div className='mb-20'>
						<h2 className="text-4xl font-bold 2xl:text-5xl">Ofertas Educativas</h2>
						<p className="mt-6">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui dolor excepturi eveniet
							perspiciatis consequatur sequi nulla. Facere vitae maiores culpa quod consequuntur, sint eum
							delectus excepturi.
						</p>
						<br />
						<br />
					</div> */}

					{/* Parágrafos */}
					{paragraphs.map((paragraph, index) => (
						<Paragraph
							key={index}
							index={index}
							title={paragraph.title}
							onVisible={handleVisible}
							isActive={activeIndex === index}
						>
							{paragraph.content}
						</Paragraph>
					))}
				</div>
			</div>
		</div>
	);
};

export default FixedImageScrollWithBrutalEffect;
