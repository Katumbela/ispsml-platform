'use client';

import { images } from '@/assets';
import Footer from '@/components/Footer';
import GlobalHero from '@/components/global-hero/global-hero';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaAngleRight } from 'react-icons/fa6';
import { env } from '@/infra/env';

export default function ResearchPage() {
	const imageList = [
		{ link: '#', title: 'Campus Principal', src: images.backgrounds.bg_school_3 },
		{ link: '#', title: 'Biblioteca Moderna', src: images.backgrounds.bg_school_2 },
		{ link: '#', title: 'Laboratórios Avançados', src: images.backgrounds.bg_school_4 }
	];

	return (
		<>
		<head>
			<title>Investigação Científica | {env.PT_SCHOOL_TITLE}</title>
		</head>
			<Navbar />
			<GlobalHero
				bgImage={images.backgrounds.bg_research_1.src}
				className="h-[500px]"
				title="Investigação Cientifica"
			/>
			<div className="py-10 -mt-2 bg-primary-footer">
				<div className="containers">
					<p className="text-white">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem ut magnam suscipit aperiam,
						corporis hic libero quibusdam harum sint quia, dolorum sit praesentium voluptatem eveniet sunt
					</p>
				</div>
			</div>
			<br />

			<section className="containers">
				<h2 className="text-3xl font-bold">
					Somos um ecossistema de investigação cientifica solida, integrado e conectado
				</h2>
				<br />

				<br />
				<div className="relative">
					<Image alt="" src={images.backgrounds.bg_sci_method_2} className="w-8/12 mx-auto" />
				</div>
				<br />
				<br />
				<h2 className="text-3xl font-bold">
					Nossas instituições interdisciplinar são o veiculo para executar nossa missão investigadora em
					campos criticos
				</h2>

				<p className="my-4 text-gray-500">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eius quam iusto itaque deleniti. Optio
					deleniti nulla magnam numquam amet inventore nihil libero repellat non, distinctio repellendus,
					impedit corporis architecto!
				</p>
			</section>
			<br />
			<motion.div
				initial={{ x: -1000, opacity: 0 }}
				viewport={{ once: true }}
				whileInView={{ x: 0, opacity: 1, transition: { duration: 0.3, delay: 0.1 } }}
				className="grid grid-cols-3 gap-1"
			>
				{imageList.map((item, i) => (
					<div
						style={{ background: `linear-gradient(90deg, #0000008D, #0000008D), url('${item.src.src}')` }}
						key={i}
						className="h-[15rem] p-3 text-md text-white font-semibold cursor-pointer grid items-end"
					>
						<a href="#" className="flex gap-2">
							<span className="my-auto">{item.title}</span>
							<FaAngleRight className="my-auto" />
						</a>
					</div>
				))}
			</motion.div>

			<motion.div
				initial={{ x: 1000, opacity: 0 }}
				viewport={{ once: true }}
				whileInView={{ x: 0, opacity: 1, transition: { duration: 0.3, delay: 0.1 } }}
				className="mt-1 bg-primary-footer image-container"
			>
				<div className="flex gap-2 ">
					<div className="w-1/2 ps-10 py-14 2xl:py-24">
						<h2 className="font-bold text-white lg:mb-2 lg:text-4xl 2xl:mb-3 2xl:text-5xl">
							Projecto ISPSML Platform
						</h2>
						<p className="text-white 2xl:text-xl">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum doloremque nihil molestias
							alias. Vitae, distinctio ullam vero earum exercitationem maxime necessitatibus est{' '}
						</p>
						<button className="flex gap-2 py-5 mt-6 font-semibold text-black uppercase transition-all bg-white border-2 border-white px-7 hover:bg-transparent hover:text-white ">
							<span className="my-auto">Saber Mais</span>
							<FaAngleRight className="my-auto" />
						</button>
					</div>
					<div className="relative w-1/2 h-100 image-container">
						<Image
							objectFit="cover"
							layout="fill"
							alt=""
							src={images.backgrounds.bg_writing}
							className="image"
						/>
					</div>
				</div>
			</motion.div>
			<br />
			<br />
			<div className="containers">
				<h2 className="text-3xl font-bold">Grupos de investigação Por Escolas</h2>
				<br />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ad quam sequi deserunt incidunt
					adipisci optio accusamus et quaerat doloremque illum hic modi, nisi reprehenderit aliquid odio culpa
					rerum in!
				</p>
				<br />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ad quam sequi deserunt incidunt
					adipisci optio accusamus et quaerat doloremque illum hic modi, nisi reprehenderit aliquid odio culpa
					rerum in!
				</p>
				<br />
			</div>

			<br />
			<br />
			<br />
			<br />
			<Footer />
		</>
	);
}
