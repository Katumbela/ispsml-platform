'use client';

import { images } from '@/assets';
import GlobalHero from '@/components/global-hero/global-hero';
import { getDepartments } from '@/services/dep.service';
import { useQuery } from 'react-query';
import { routes } from '@/infra/routes.vars';
import { env } from '@/infra/env';

export default function OrganicUnitPage() {
	 
	const { data: departments = [], isLoading } = useQuery('allDepartments', () => getDepartments());

	// Exemplo de uso
	// const teamMembers = getTeamMembers('diretor-unidade-organica');
	// console.log(teamMembers);

	return (
		<div>
			<GlobalHero bgImage={images.backgrounds.bg_woman_bg_flower.src} className='h-[700px]' bottomBG='dark' position='top' title='Unidades Orgânicas' />
			<br />
			<div className="containers">
				<h2 className="title">Conheça as Nossas Unidades Organicas</h2>
				<p className="mt-4 text-gray-500">
					<i>
						Descubra nossas unidades orgânicas diversas e dinâmicas, cada uma dedicada à excelência em educação, pesquisa e serviço comunitário. Junte-se a nós para explorar as oportunidades e recursos únicos disponíveis em nossos departamentos. Nossas unidades orgânicas oferecem uma ampla gama de programas e iniciativas que visam promover o desenvolvimento acadêmico e profissional dos nossos alunos. Com uma equipe de professores altamente qualificados e uma infraestrutura moderna, estamos comprometidos em proporcionar uma experiência educacional enriquecedora e transformadora.
					</i>
				</p>
				<br />
				<br />
			</div>
			<div className="px-1">
				{isLoading ? (
					<div className="grid grid-cols-1 gap-1 mb-1 md:grid-cols-2 lg:grid-cols-3">
						{Array.from({ length: 6 }).map((_, i) => (
							<div key={i} className="p-4 border grid items-center justify-center cursor-pointer px-10 text-white text-center h-[15rem] 2xl:h-[22rem] card-depa animate-pulse bg-gray-300">
								<div className="h-6 bg-gray-400 rounded w-3/4 mx-auto"></div>
							</div>
						))}
					</div>
				) : (
					<div className="grid grid-cols-1 gap-1 mb-1 md:grid-cols-2 lg:grid-cols-3">
						{departments.filter((e) => e.name != 'Masters').map((department, i) => (
							<div
								onClick={() => (window.location.href = routes.ORGANIC_UNIT_ROUTE + '/' + department.slug)}
								key={i}
								className="p-4 border grid items-center justify-center cursor-pointer px-10 text-white text-center h-[15rem] 2xl:h-[22rem] card-depa"
								style={{
									backgroundImage: `linear-gradient(180deg, #011a4de7, #011a4de7), url(${department.department_cover || env.BLUR_IMAGE})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center'
								}}
							>
								<h3 className="text-xl font-bold 2xl:text-2xl">{department.name}</h3>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
