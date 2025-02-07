import { images } from '@/assets';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { routes } from '@/infra/routes.vars';
import ButtonBlueComponent from '../button-blue/button-blue-component';

export function ScienceStudyCard() {
	return (
		<section className="px-4 pb-1 mt-8 md:px-10">
			<motion.div
				initial={{ x: -1000, opacity: 0 }}
				viewport={{ once: false, amount: 0.2 }}
				whileInView={{ x: 0, opacity: 1, transition: { duration: 0.3, delay: 0.1 } }}
				className="flex flex-col bg-white md:flex-row-reverse">
				<div className="relative w-full h-[50vh] md:h-[75vh] 2xl:h-[85vh]">
					<Image src={images.bgsSchool.bg_school_27.src} layout='fill' objectFit='cover' alt="" />
				</div>
				<div className="grid items-center w-full px-4 py-6 text-center bg-white md:py-10 md:px-10 md:text-left">
					<div>
						<h2 className='text-2xl font-bold'>Laboratórios de Informática</h2>
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

			<motion.div
				initial={{ x: 1000, opacity: 0 }}
				viewport={{ once: false, amount: 0.2 }}
				whileInView={{ x: 0, opacity: 1, transition: { duration: 0.3, delay: 0.1 } }}
				className="flex flex-col bg-white md:flex-row">
				<div className="relative w-full h-[50vh] md:h-[75vh] 2xl:h-[85vh]">
					<Image src={images.bgsSchool.bg_school_16.src} layout='fill' objectFit='cover' alt="" />
				</div>
				<div className="grid items-center w-full px-4 py-6 text-center bg-white md:py-10 md:px-10 md:text-left">
					<div>
						<h2 className='text-2xl font-bold'>Biblioteca Moderna</h2>
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
		</section>
	);
}
