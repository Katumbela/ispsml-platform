'use client';

import { useParams, useRouter } from 'next/navigation';
import GlobalHero from '@/components/global-hero/global-hero';
import { content, ourInst } from '@/data/aboutContent'; // Import the content
import Link from 'next/link';
import { routes } from '@/infra/routes.vars';

const AboutDetail = () => {
	const { key } = useParams() as { key: string };
	const pageContent = content[key as keyof typeof content];

	const router = useRouter();

	const handleNavigation = (link: string) => {
		router.push(link);
	};

	if (!pageContent) {
		return <p>Conteúdo não encontrado</p>;
	}

	return (
		<>
			<head>
				<title>{pageContent.title} | ISPSML</title>
			</head>
			<GlobalHero
				bgImage={pageContent.bg}
				bottomBG="dark"
				title={pageContent.title}
				className="h-[400px] 2xl:h-[550px]"
			/>
			<div className="containers py-8">
				{/* Breadcrumb navigation */}
				<nav className="text-sm text-blue-700 mb-4">
					<Link href={routes.ABOUT_ROUTE} className="hover:underline">Sobre</Link> / <span>{pageContent.title}</span>
				</nav>
				<br />
				{/* <h2 className="text-2xl font-bold lg:text-3xl">{pageContent.title}</h2> */}
				<p className="text-sm text-gray-600 lg:text-base">{pageContent.text}</p>
			</div>

			<br /><br />
			<br /><br />
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
							onClick={() => handleNavigation(`/about/institution/${info.link}`)}
						>
							{info.title}
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default AboutDetail;
