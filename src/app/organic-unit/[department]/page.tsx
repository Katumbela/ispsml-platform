'use client';

// import QuickLinks from '@/components/QuickLinks'; 
import { coursesData } from '@/infra/data/courses-data';
import { StringUtils } from '@/utils';
import { useParams } from 'next/navigation';
import { routes } from '@/infra/routes.vars';
import Image from 'next/image';
import { FaAngleRight } from 'react-icons/fa';
import { CardCourseComponent } from '../components/card-course-component';

const CSADepartment = () => {

	const { department } = useParams();
	const departmentData = coursesData[department as string];

	if (!departmentData) {
		return (
			<div className="flex items-center justify-center h-screen bg-gray-100">
				<div className="p-8 text-center bg-white rounded-lg shadow-lg">
					<h1 className="mb-4 text-4xl font-semibold">Departamento não encontrado</h1>
					<p className="text-lg text-gray-700">
						Desculpe, não conseguimos encontrar o departamento que você está procurando.
					</p>
					<div className="flex">
					</div>
					<button
						onClick={() => window.location.href = routes.ORGANIC_UNIT_ROUTE}
						className="px-4 py-2 mt-6 text-white bg-blue-500 rounded hover:bg-blue-700"
					>
						Voltar para Unidades Orgânicas
					</button>
				</div>
			</div>
		);
	}


	return (
		<>
			<head>
				<title>Ciências Sociais Aplicadas | ISPSML</title>
				<meta
					name="description"
					content="Saiba mais sobre o departamento de Ciências Sociais Aplicadas na ISPSML."
				/>
				<meta name="keywords" content="Ciências Sociais Aplicadas, ISPSML, cursos" />
			</head>
			<div className="pt-24 pb-10 bg-primary-footer">
				<div className="containers">
					<p className="pb-1 mb-5 text-white border-b">
						<a href={routes.ORGANIC_UNIT_ROUTE}>Unidades Orgânicas</a> / {departmentData.name}{' '}
					</p>
					<div className="sticky top-0 w-full bg-primary-footer">

						<h1 className="text-4xl font-bold text-white">
							{StringUtils.getFirstLetterOfEachWord(`Unidade ${departmentData.name}`)}
						</h1>
						<span className="text-white text-md">Unidade de {departmentData.name}</span>
					</div>
				</div>
			</div>
			{/* <GlobalHero
				className="h-[400px] 2xl:h-[50px]"
				bottomBG="dark"
				bgImage={images.departImages.ciencias_sociais.src}
				title="Ciências Sociais Aplicadas"
			/> */}
			<main className="flex gap-1 ">
				<div className="relative w-full">
					<Image alt="" src={departmentData.department_cover} layout="fill" objectFit="cover" />
				</div>
				<div className="w-full 2xl:p-16 p-14">
					<p className="mt-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae tenetur aliquid porro asperiores error ipsam aperiam voluptates vitae pariatur dolores saepe tempora nihil eius placeat maiores, eaque repellendus sint illum.
						<br />
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ab expedita dolorum reiciendis esse saepe perferendis quos, incidunt eaque, nam vero provident unde debitis optio enim hic minima rem porro?
						<br />
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ab expedita dolorum reiciendis esse saepe perferendis quos, incidunt eaque, nam vero provident unde debitis optio enim hic minima rem porro?
					</p>
					<br />
					<div className="flex">
						<p className="flex w-full gap-4">
							<Image alt='' width={100} height={100} className='w-[2em] my-auto border border-black rounded-full h-[2em]' src={departmentData.departmentDirector.picture} />
							<span className="flex flex-col my-auto">
								{departmentData.departmentDirector.name}
								<span className="text-xs">
									<strong className='text-gray-500'>Chefe do Dep. </strong>
								</span>
							</span>
						</p>

					</div>
					<br />
					<div>
						<button onClick={() => window.location.href = departmentData.catalog_link} className="flex w-auto gap-2 py-5 text-white uppercase transition-all bg-black border-2 border-black mt- px-7 hover:bg-white hover:text-black ">
							<span className="my-auto">Baixar Catalogo</span>
							<FaAngleRight className="my-auto" />
						</button>
					</div>
				</div>
			</main>
			<div className="containers">
				<br />
				<br />
				<h2 className="mb-6 title">Cursos Destacados de {departmentData.name}</h2>
				<p className="text-slate-500">
					<i>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio unde harum eveniet autem?
						Aspernatur sit quis cum, ullam fugit provident delectus hic, mollitia expedita magni sapiente
						ad, voluptatum perferendis nisi.
					</i>
				</p>
				<br />
			</div>
			<div className="px-1 mb-1">
				<div className="grid gap-1.5 grid-cols-4">
					{departmentData?.courses.map((course, i) => (
						<CardCourseComponent key={i} course={course} department={department as string} />
					))}
				</div>
			</div>

			{/* <QuickLinks />  */}
		</>
	);
};

export default CSADepartment;
