import React, { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { images } from '@/assets';
import { FaLink, FaAngleRight } from 'react-icons/fa'; // Importar ícones
import { routes } from '@/infra/routes.vars';

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
		[ inView, index, onVisible ]
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
			className={`relative flex items-start ${index !== 0 ? " mt-[25vh] 2xl:mb-[0vh]" : ""}`}
		>
			{/* Ponto à esquerda */}
			<div
				className={`absolute -left-8 w-4 h-4 rounded-full  bg-gray-400`}
				style={{
					// transform: isActive ? 'translateY(calc(50vh - 50%))' : 'none',
					transition: 'transform 0.3s ease, background-color 0.3s ease'
				}}
			/>

			{/* Título e Parágrafo */}
			<div>
				<h3 className="mb-2 text-3xl font-semibold 2xl:text-4xl">{title}</h3>
				<p>{children}</p>
			</div>
		</motion.div>
	);
};

const FixedImageScrollWithBrutalEffect = () => {
	const [ activeIndex, setActiveIndex ] = useState<number | null>(null);

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
			title: 'Licenciatura',
			content: (
				<>
					Se o seu interesse é aprofundar seus conhecimentos, fortalecer sua visão de mundo, se você deseja adquirir ou fortalecer o inglês como segunda língua, a PrepaTec é a sua melhor opção.
					<div className="flex flex-col gap-1 mt-4 text-sm">
						<a href="#" className="flex items-center "><FaLink className="mr-1" /> Currículo <FaAngleRight className="ml-1" /></a>
						<a href="#" className="flex items-center "><FaLink className="mr-1" /> Inscrição <FaAngleRight className="ml-1" /></a>
						<a href="#" className="flex items-center "><FaLink className="mr-1" /> Bolsas de Estudo <FaAngleRight className="ml-1" /></a>
					</div>
					<div className="mt-2">
						<a href={routes.KNOW_MORE_ROUTE+"/undergraduate"} className="flex items-center text-sm underline"> Saber mais <FaAngleRight className="ml-1" /></a>
					</div>
				</>
			)
		},
		{
			title: 'Formação Profissional',
			content: (
				<>
					Admissões, Bolsas de Estudo, Programas Acadêmicos, Saiba mais
					<div className="flex flex-col gap-1 mt-4 text-sm">
						<a href="#" className="flex items-center "><FaLink className="mr-1" /> Cursos Disponíveis <FaAngleRight className="ml-1" /></a>
						<a href="#" className="flex items-center "><FaLink className="mr-1" /> Inscrição <FaAngleRight className="ml-1" /></a>
						<a href="#" className="flex items-center "><FaLink className="mr-1" /> Certificações <FaAngleRight className="ml-1" /></a>
					</div>
					<div className="mt-2">
						<a href={routes.KNOW_MORE_ROUTE+"/professional"} className="flex items-center text-sm underline"> Saber mais <FaAngleRight className="ml-1" /></a>
					</div>
				</>
			)
		},
		{
			title: 'Mestrados',
			content: (
				<>
					Seus professores irão continuamente e deliberadamente desafiá-lo a formular e resolver problemas. Não mais disciplinas como você as conhecia, com conhecimentos não necessariamente conectados entre si.
					<div className="flex flex-col gap-1 mt-4 text-sm">
						<a href="#" className="flex items-center "><FaLink className="mr-1" /> Programas de Mestrado <FaAngleRight className="ml-1" /></a>
						<a href="#" className="flex items-center "><FaLink className="mr-1" /> Inscrição <FaAngleRight className="ml-1" /></a>
						<a href="#" className="flex items-center "><FaLink className="mr-1" /> Bolsas de Estudo <FaAngleRight className="ml-1" /></a>
					</div>
					<div className="mt-2">
						<a href={routes.KNOW_MORE_ROUTE+"/master"} className="flex items-center text-sm underline"> Saber mais <FaAngleRight className="ml-1" /></a>
					</div>
				</>
			)
		},
		{
			title: 'Preparatórios',
			content: (
				<>
					Mestres e Educação Continuada, Programas de Pós-Graduação, Nossos programas de educação continuada são projetados para prepará-lo para os desafios do mercado atual.
					<div className="flex flex-col gap-1 mt-4 text-sm">
						<a href="#" className="flex items-center "><FaLink className="mr-1" /> Cursos Preparatórios <FaAngleRight className="ml-1" /></a>
						<a href="#" className="flex items-center "><FaLink className="mr-1" /> Inscrição <FaAngleRight className="ml-1" /></a>
						<a href="#" className="flex items-center "><FaLink className="mr-1" /> Certificações <FaAngleRight className="ml-1" /></a>
					</div>
					<div className="mt-2">
						<a href={routes.KNOW_MORE_ROUTE+"/prepa-tec"} className="flex items-center text-sm underline"> Saber mais <FaAngleRight className="ml-1" /></a>
					</div>
				</>
			)
		}
	];

	return (
		<div className="containers 2xl:mb-[30vh]">
			<h2 className="text-3xl font-bold">Educação</h2>
			<br />
			<br />
			<div className="min-h-[120vh]  2xl:min-h-[00vh]     flex gap-20">
				{/* Imagem Fixa */}
				<div className="w-1/2" style={{ position: 'sticky', top: '100px', height: '500px' }}>
					<img
						src={images.backgrounds.bg_vertical_education_2.src}
						alt="Imagem fixa"
						className="h-[80vh] w-[28rem] 2xl:w-[35vw] ms-auto"
					/>
				</div>

				{/* Conteúdo */}
				<div className="relative w-1/2">
					<div
						className="absolute top-[12rem] bottom-0 left-0 w-[1px] bg-gray-300"
						style={{ marginLeft: '-1.5rem' }}
					/>
					<div>
						<h2 className="text-4xl font-bold 2xl:text-5xl">Ofertas Educativas</h2>
						<p className="mt-6">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui dolor excepturi eveniet
							perspiciatis consequatur sequi nulla. Facere vitae maiores culpa quod consequuntur, sint eum
							delectus excepturi.
						</p>
						<br />
						<br />
					</div>
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
