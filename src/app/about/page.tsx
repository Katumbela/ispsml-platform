'use client';

import GlobalHero from '@/components/global-hero/global-hero';
import { images } from '@/assets';
import { FaAngleRight } from 'react-icons/fa6';
import { HoverCard } from '@/components/hover-card/hover-card';
import { routes } from '@/infra/routes.vars';
import ButtonLink from '@/components/buttonLink/button-link';
// import { title } from 'process';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

interface IOurInst {
	title: string;
	link: string;
	bg: string;
}
const ourInst: IOurInst[] = [
	{
		bg: images.backgrounds.bg_student_11.src,
		link: '#',
		title: 'Apresentação Institucional'
	},
	{
		bg: images.backgrounds.bg_graduated_student_1.src,
		link: '#',
		title: 'Infraestuturas'
	},
	{
		bg: images.backgrounds.bg_graduated_student_2.src,
		link: '#',
		title: 'Convênios e Protocolos'
	},
	{
		bg: images.backgrounds.bg_school_4.src,
		link: '#',
		title: 'Organigrama'
	},
	{
		bg: images.backgrounds.bg_school_2.src,
		link: '#',
		title: 'Código de Conduta e Ética'
	},
	{
		bg: images.backgrounds.bg_vertical_education_1.src,
		link: '#',
		title: 'Ação Social'
	},
	{
		bg: images.backgrounds.bg_student_11.src,
		link: '#',
		title: 'Mensagem de Direção'
	},
	{
		bg: images.backgrounds.bg_graduated_student_1.src,
		link: '#',
		title: 'Legislação'
	}
];
const About = () => {
	return (
		<>
			<head>
				<title>Sobre Nossa Instituição </title>
			</head>

			<GlobalHero
				bgImage={images.backgrounds.bg_woman_bg_flower.src}
				bottomBG="dark"
				title={'Sobre Nós'}
				className="h-[500px] 2xl:h-[750px]"
			/>

			<div className="py-8 -mt-2 2xl:py-14 bg-primary">
				<div className="containers">
					{' '}
					<p className="text-white text-md max-w-[83vw]">
						At ISPSML you will develop your professional and human potential through the high academic
						level, resources and programs of excellence we offer.
					</p>
				</div>
			</div>
			<div className="flex flex-col w-full sm:grid sm:grid-cols-2">
				<div
					style={{
						background: `url(${images.bgPplImages.bg_ppl22.src}) center center`,
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'top',
						backgroundSize: 'cover'
					}}
					className="lg:h-[20rem]  h-[18rem]  2xl:h-[23rem] relative w-full"
				>
					{/* <Image alt="" objectFit='cover' layout='fill' src={images.teachers.katumbela} /> */}
				</div>
				<div className="lg:h-[20rem]  sm:h-[18rem] py-8 sm:py-0 2xl:h-[23rem] grid  w-full">
					<div className="w-full my-auto 2xl:mx-24 containers">
						<h2 className="text-3xl font-bold lg:text-4xl 2xl:text-5xl">Promotoria</h2>
						<ButtonLink className='mt-10' href={routes.ABOUT_ROUTE + "/promotor"} rightIcon={<FaAngleRight className="my-auto" />} >
							<span className="my-auto">Saber Mais</span>
						</ButtonLink>
					</div>
				</div>
				<div
					style={{
						background: `url(${images.teachers.president_photo.src}) center center`,
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'top',
						backgroundSize: 'cover'
					}}
					className="lg:h-[20rem] sm:hidden h-[18rem] 2xl:h-[23rem] relative w-full"
				>
					{/* <Image alt="" objectFit='cover' layout='fill' src={images.teachers.katumbela} /> */}
				</div>
				<div className="lg:h-[20rem] sm:h-[18rem] py-8 sm:py-0 2xl:h-[23rem] grid items-start  w-full">
					<div className="w-full my-auto 2xl:mx-24 containers">
						<h2 className="text-3xl font-bold lg:text-4xl 2xl:text-5xl">Presidência</h2>
						<ButtonLink className='mt-10' href={routes.ABOUT_ROUTE + "/president"} rightIcon={<FaAngleRight className="my-auto" />} >
							<span className="my-auto">Saber Mais</span>
						</ButtonLink>
					</div>
				</div>
				<div
					style={{
						background: `url(${images.teachers.president_photo.src}) center center`,
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'top',
						backgroundSize: 'cover'
					}}
					className="lg:h-[20rem] hidden sm:flex h-[18rem] 2xl:h-[23rem] relative w-full"
				>
					{/* <Image alt="" objectFit='cover' layout='fill' src={images.teachers.katumbela} /> */}
				</div>
			</div>

			{/* <motion.div
				initial={{ x: -1000, opacity: 0 }}
				viewport={{ once: true }}
				whileInView={{ x: 0, opacity: 1, transition: { duration: 0.3, delay: 0.1 } }}
				className=" bg-primary-footer image-container"
			>
				<div className="flex gap-2 ">
					<div className="w-full ps-10 py-14 2xl:py-24">
						<h2 className="font-bold text-white lg:mb-2 lg:text-4xl 2xl:mb-3 2xl:text-5xl">
							 Organigrama
						</h2>
						<p className="text-white 2xl:text-xl">ISPSML é uma instituição da sociedade para a Sociedade</p>
						<button className="flex gap-2 py-5 mt-6 font-semibold text-black uppercase transition-all bg-white border-2 border-white px-7 hover:bg-transparent hover:text-white ">
							<span className="my-auto">Saber Mais</span>
							<FaAngleRight className="my-auto" />
						</button>
					</div>
					<div className="relative w-2/3 h-100 image-container">
						<Image
							objectFit="cover"
							layout="fill"
							alt=""
							src={images.backgrounds.bg_writing}
							className="image"
						/>
					</div>
				</div>
			</motion.div> */}
			<br />
			<br />
			<div className="containers">
				<h2 className="text-2xl font-bold lg:text-3xl">Nossa Instituição</h2>
				<p className="text-sm text-gray-600 lg:text-base">
					The ISPSML, founded in 1943, is a private, non-profit institution committed to the quality of higher
					education in the country.
				</p>
			</div>
			<br />
			<br />
			<section className="py-1">
				<div className="grid gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{ourInst.map((info, i) => (
						<div
							title={`Clique para abrir mais sobre ${info.title}`}
							style={{
								background: `linear-gradient(90deg, #014DA9A5, #014DA9A5), url(${info.bg}) center center`,
								backgroundSize: 'cover'
							}}
							key={i}
							className="grid px-5 text-xl text-center cursor-pointer items-center justify-center 2xl:text-xl font-medium text-white h-[15rem] 2xl:h-[35vh]"
						>
							{info.title}
						</div>
					))}
				</div>
			</section>
			<div className="mb-1 cards-sections-about">
				<div className="flex flex-col gap-1 sm:flex-row">
					<HoverCard
						bgColor="bg-primary"
						hoverBgColor="bg-sky-700"
						title="Missão, Visão e Valores"
						className="sm:h-[400px] h-[250px] 2xl:h-[600px]"
						bgImage={images.bgsSchool.bg_school_28.src}
					>
						<div className="px-6 text-xl font-semibold text-white containers">
							NOSSOS PRINCIPIOS, VALORES E VISÃO
							<p className="text-sm font-light">
								Conheça a nova abordagem de pesquisa no ISPSML. Descubra os três institutos e os
								diferentes Core Labs que mudarão a forma de realizar pesquisa no México.
							</p>
							<br />
							<a href="#" className="font-semibold uppercase">
								Saber mais
							</a>
						</div>
					</HoverCard>
					<HoverCard
						bgImage={images.bgsSchool.bg_school_23.src}
						className="sm:h-[400px] h-[250px] 2xl:h-[600px]"
						hoverBgColor="bg-green-600"
						title="Mais sobre o ISPSML"
					>
						<div className="text-xl font-semibold text-white">
							SAIBA MAIS SOBRE O ISPSML
							<p className="text-sm font-light">
								Conheça a nova abordagem de pesquisa no ISPSML. Descubra os três institutos e os
								diferentes Core Labs que mudarão a forma de realizar pesquisa no México.
							</p>
							<br />
							<a href="#" className="font-semibold underline">
								Saber mais
							</a>
						</div>
					</HoverCard>
				</div>
			</div>

		</>
	);
};

export default About;
