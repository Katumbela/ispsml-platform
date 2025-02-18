import { images } from '@/assets';
// import { HoverCard } from '../hover-card/hover-card';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { routes } from '@/infra/routes.vars';
import ButtonBlueComponent from '../button-blue/button-blue-component';


export function ScienceStudyCard() {
	return (
		<section className="mt-[2rem] containers pb-1 ">

			{/* <div className="flex my-1 containers bg-primary-footer">
				<div className="">
					<div className="">
						<iframe
							src="https://player.vimeo.com/video/235209416"
							className="h-[350px] w-[650px] 2xl:w-[800px]"
						/>
					</div>
				</div>
				<div className="grid text-white containers">
					<div className="px-10 my-auto">
						<h1 className="mb-2 text-2xl font-bold">A ciência busca criar impacto</h1>
						Buscamos as soluções para as grandes problemáticas do mundo. Assim nasce Science in Action.
						Conheça a área de pesquisa e seu novo enfoque.
					</div>
				</div>
			</div> */}

			<motion.div
				initial={{ x: -1000, opacity: 0 }}
				viewport={{ once: false }}
				whileInView={{ x: 0, opacity: 1, transition: { duration: 0.3, delay: 0.1 } }}
				className="flex flex-row-reverse bg-white">
				<div className="relative w-full py-10 bg-primary">
					<Image objectPosition='top' src={images.bgsSchool.bg_school_27.src} objectFit='cover' layout='fill' alt="" />
				</div>
				<div className="grid items-center w-full py-10 bg-white 2xl:py-20 ">
					<div className="my-auto ">
						<h2 className='title'>Laboratórios de Informática</h2>
						<p className="mt-4 text-gray-600">
							Conheça a nova abordagem de pesquisa no Tecnológico de Monterrey. Descubra os três
							institutos e os diferentes Core Labs que mudarão a forma de realizar pesquisa no México.
						</p>
						<ButtonBlueComponent
							onclick={() => window.location.href = routes.SOCIAL_REPONSABILITY_ROUTE}
							text="Saber mais" />
						{/* <button className="flex gap-2 py-5 mt-10 text-white uppercase transition-all bg-black border-2 border-black px-7 hover:bg-white hover:text-black ">
							<span className="my-auto">Saber Mais</span>
							<FaAngleRight className="my-auto" />
						</button> */}
					</div>
				</div>
			</motion.div>

			<motion.div
				initial={{ x: 1000, opacity: 0 }}
				viewport={{ once: false }}
				whileInView={{ x: 0, opacity: 1, transition: { duration: 0.3, delay: 0.1 } }}
				className="flex flex-col bg-white sm:flex-row">
				<div className="relative w-full py-10 bg-primary">
					<Image objectPosition='top' src={images.bgsSchool.bg_school_16.src} objectFit='cover' layout='fill' alt="" />
				</div>
				<div className="grid items-center w-full py-4 bg-white sm:py-10 2xl:py-20 ">
					<div className="my-auto containers ">
						<h2 className='title'>Biblioteca Moderna</h2>
						<p className="mt-4 text-gray-600">
							Conheça a nova abordagem de pesquisa no Tecnológico de Monterrey. Descubra os três
							institutos e os diferentes Core Labs que mudarão a forma de realizar pesquisa no México.
						</p>
						<ButtonBlueComponent
							onclick={() => window.location.href = routes.SOCIAL_REPONSABILITY_ROUTE}
							text="Saber mais" />
					</div>
				</div>
			</motion.div>

			<div className="flex gap-1">
				{/* <HoverCard
					bgColor="bg-primary"
					hoverBgColor="bg-primary"
					title="Laboratório de Informática"
					className="h-[400px] 2xl:h-[600px]"
					bgImage={images.bgsSchool.bg_school_27.src}
				>
					<div className="px-6 text-lg text-white containers">
						A CIÊNCIA COM SOLUÇÕES EM AÇÃO
						<p className="text-sm">
							Conheça a nova abordagem de pesquisa no Tecnológico de Monterrey. Descubra os três
							institutos e os diferentes Core Labs que mudarão a forma de realizar pesquisa no México.
						</p>
						<br />
						<a href="#" className="font-semibold underline uppercase">
							Saber mais
						</a>
					</div>
				</HoverCard> */}
				{/* <HoverCard
					bgImage={images.bgsSchool.bg_school_16.src}
					className="h-[400px] 2xl:h-[600px]"
					hoverBgColor="bg-red-500"
					title="Biblioteca Moderna"
				>
					<div className="text-lg text-white">
						A CIÊNCIA COM SOLUÇÕES AÇÃOIS
						<p className="text-sm">
							Conheça a nova abordagem de pesquisa no Tecnológico de Monterrey. Descubra os três
							institutos e os diferentes Core Labs que mudarão a forma de realizar pesquisa no México.
						</p>
						<br />
						<a href="#" className="font-semibold underline uppercase">
							Saber mais
						</a>
					</div>
				</HoverCard> */}
			</div>
		</section>
	);
}
