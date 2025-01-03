import { images } from '@/assets';
import { HoverCard } from '../hover-card/hover-card';

export function ScienceStudyCard() {
	return (
		<section className="pt-[6vh] pb-1 ">
		
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

			<div className="flex gap-1">
				<HoverCard
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
				</HoverCard>
				<HoverCard
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
				</HoverCard>
			</div>
		</section>
	);
}
