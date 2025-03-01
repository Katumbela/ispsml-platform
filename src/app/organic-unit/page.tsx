'use client';

import { RolesData } from '@/infra/data/roles-data';
import { images } from '@/assets';
import GlobalHero from '@/components/global-hero/global-hero';
import { IDepartment } from '@/infra/interfaces/course.interface';
import { getDepartments } from '@/services/dep.service';
import { useState, useEffect } from 'react';
import { routes } from '@/infra/routes.vars';
import { env } from '@/infra/env';

// const departments = Object.entries(coursesData).map(([key, value]) => ({
// 	link: `${routes.ORGANIC_UNIT_ROUTE}/${key}`,
// 	name: `Departamento de ${key.charAt(0).toUpperCase() + key.slice(1)}`,
// 	cover: value.department_cover
// }));

export default function OrganicUnitPage() {
	function getTeamMembers(directorId: string) {
		const director = RolesData.find((role) => role.id === directorId);
		if (director && director.team) {
			return director.team.map((memberId) => RolesData.find((role) => role.id === memberId));
		}
		return [];
	}

	const [departments, setDepartments] = useState<IDepartment[] | []>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchDepartments() {
			const data = await getDepartments();
			setDepartments(data);
			setLoading(false);
		}
		fetchDepartments();
	}, []);

	// Exemplo de uso
	const teamMembers = getTeamMembers('diretor-unidade-organica');
	console.log(teamMembers);

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
				{loading ? (
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
