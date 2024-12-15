/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { images } from '@/assets';
import 'react-toastify/dist/ReactToastify.css';
import GlobalHero from '@/components/global-hero/global-hero';
import { FaAngleRight } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { routes } from '@/infra/routes.vars';

export default function SocialResp() {
	return (
		<>
			<head>
				<title>Responsabilidade Social | Instituto Superior Politécnico São Martinho de Lima</title>
			</head>
			<GlobalHero position='top' bottomBG='dark' title='Responsalibidade Social' bgImage={images.backgrounds.bg_woman_bg_flower.src} className='h-[500px]' />

			<section className="py-20 containers">
				<h2 className="title">A Nossa Responsabilidade Social</h2>
				<p className="mt-4 text-gray-600">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet unde nam maxime dicta aperiam architecto quam adipisci qui neque, fugit autem. Nobis delectus facere hic tempore perferendis ipsam a deserunt.
				</p>
			</section>

			<motion.div
				initial={{ x: -1000, opacity: 0 }}
				viewport={{ once: true }}
				whileInView={{ x: 0, opacity: 1, transition: { duration: 0.3, delay: 0.1 } }}
				className="flex gap-8 bg-white"
			>
				<div className="relative w-1/3 py-10 bg-primary">
					<Image src={images.backgrounds.bg_pplIMG_2219.src} objectFit='cover' layout='fill' alt="" />
				</div>
				<div className="grid items-center w-4/5 py-6 bg-white containers 2xl:py-14 ">
					<div className="my-auto ">
						<h2 className='title'>Projetos de Extensão</h2>
						<p className="mt-4 text-gray-600">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet unde nam maxime dicta aperiam architecto quam adipisci qui neque, fugit autem. Nobis delectus facere hic tempore perferendis ipsam a deserunt.
						</p>
						<button className="flex gap-2 py-5 mt-6 font-semibold text-black uppercase transition-all bg-white border-2 border-black px-7 hover:bg-black hover:text-white ">
							<span className="my-auto">Saber Mais</span>
							<FaAngleRight className="my-auto" />
						</button>
					</div>
				</div>
			</motion.div>

			<br />
			<br />

			<motion.div
				initial={{ x: 1000, opacity: 0 }}
				viewport={{ once: true }}
				whileInView={{ x: 0, opacity: 1, transition: { duration: 0.3, delay: 0.1 } }}
				className="flex flex-row-reverse gap-8 bg-white"
			>
				<div className="relative w-full py-10 bg-primary">
					<Image objectPosition='top' src={images.backgrounds.fundo_isp_1.src} objectFit='cover' layout='fill' alt="" />
				</div>
				<div className="grid items-center w-4/5 py-24 bg-white containers 2xl:py-40 ">
					<div className="my-auto ">
						<h2 className='title'>Parcerias Acadêmicas</h2>
						<p className="mt-4 text-gray-600">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet unde nam maxime dicta aperiam architecto quam adipisci qui neque, fugit autem. Nobis delectus facere hic tempore perferendis ipsam a deserunt.
						</p>
						<button onClick={() => window.location.href = routes.SOCIAL_REPONSABILITY_ROUTE} className="flex gap-2 py-5 mt-10 text-white uppercase transition-all bg-black border-2 border-black px-7 hover:bg-white hover:text-black ">
							<span className="my-auto">Saber Mais</span>
							<FaAngleRight className="my-auto" />
						</button>
					</div>
				</div>
			</motion.div>

			<br />
			<br />
		</>
	);
}
