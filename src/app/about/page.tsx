'use client';

import GlobalHero from '@/components/global-hero/global-hero';
import { images } from '@/assets';
import { FaAngleRight } from 'react-icons/fa6';
import { HoverCard } from '@/components/hover-card/hover-card';
import { routes } from '@/infra/routes.vars';
import ButtonLink from '@/components/buttonLink/button-link';
import { useRouter } from 'next/navigation';
import { ourInst } from '@/data/aboutContent';

const About = () => {
	const router = useRouter();

	const handleNavigation = (link: string) => {
		router.push(link);
	};

	return (
		<>
			<head>
				<title>Sobre Nossa Instituição </title>
			</head>

			<GlobalHero
				bgImage={images.backgrounds.bg_woman_bg_flower.src}
				bottomBG="dark"
				title={'Sobre Nós'}
				position='top'
				className="d-h"
			/>

			<div className="py-8 -mt-2 2xl:py-14 bg-primary">
				<div className="containers">
					{' '}
					<p className="text-white text-md max-w-[83vw]">
						Na ISPSML você desenvolverá seu potencial profissional e humano através do alto nível acadêmico, recursos e programas de excelência que oferecemos.
					</p>
				</div>
			</div>
			<div className="flex flex-col w-full sm:grid sm:grid-cols-2">
				{/* <div
					style={{
						background: `url(${images.bgPplImages.bg_ppl22.src}) center center`,
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'top',
						backgroundSize: 'cover'
					}}
					className="lg:h-[20rem]  h-[18rem]  2xl:h-[23rem] relative w-full"
				>
				</div> */}
				{/* <div className="lg:h-[20rem]  sm:h-[18rem] py-8 sm:py-0 2xl:h-[23rem] grid  w-full">
					<div className="w-full my-auto 2xl:mx-24 containers">
						<h2 className="text-3xl font-bold lg:text-4xl 2xl:text-5xl">Promotoria</h2>
						<ButtonLink className='mt-10' href={routes.ABOUT_ROUTE + "/promotor"} rightIcon={<FaAngleRight className="my-auto" />} >
							<span className="my-auto">Saber Mais</span>
						</ButtonLink>
					</div>
				</div> */}
				<div
					style={{
						background: `url(${images.backgrounds.president_banner.src}) center center`,
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
						background: `url(${images.backgrounds.president_banner.src}) center center`,
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
			{/* <div className="containers">
				<h2 className="text-2xl font-bold lg:text-3xl">Nossa Instituição</h2>
				<p className="text-sm text-gray-600 lg:text-base">
					O Instituto Superior Politécnico São Martinho de Lima (ISPSML), fundado em 1943, é uma instituição privada e sem fins lucrativos, comprometida com a qualidade do ensino superior em Angola. Tem como missão formar profissionais altamente qualificados, promovendo a inovação, a ética e o desenvolvimento sustentável.
				</p>
			</div> */}
			<br />
			<div className="containers">
				<h2 className="text-2xl font-bold lg:text-3xl">APRESENTAÇÃO INSTITUCIONAL</h2>
				<h3 className="text-xl mt-6 mb-4 font-bold lg:text-2xl">1. Breve Histórico</h3>
				<p className="text-sm text-gray-600 lg:text-base">
					O Instituto Superior Politécnico São Martinho de Lima (ISPSML), MNR – Investimentos, Lda., Entidade Promotora, publicada no Diário da República, III Série – 156/07 de 28 de Dezembro de 2007 ao abrigo do decreto Presidencial nº 310/20 de 7 de Dezembro Regime jurídico do Subsistema do Ensino Superior que regula e organiza, a MNR criou o ISPSML, que foi aprovado pelo Decreto Presidencial nº 233/19 de 22 de Julho.
					O referido Instituto, está localizado junto à Via Expresso, Bairro Benfica, Município de Belas, Província Luanda.
					É uma Instituição dotada de autonomia estatutária pedagógica, científica, cultural, administrativa, financeira, patrimonial e disciplinar. É um Estabelecimento Privado de Ensino Superior, integrado no Subsistema do Ensino Superior em Angola.
					A actual estrutura estabelece a constituição de 3 áreas do conhecimento, no ensino presencial. O Instituto oferece cursos de graduação, nas áreas de:
					<ul>
						<li>Área de Ciências Sociais e Humanas</li>
						<li>Área de Engenharia e Tecnologia</li>
					</ul>
					<br />
					Quanto aos pessoal docente e discente o ISPSML conta actualmente com:
					<ul className="list-disc ml-5">
						<li>867 Estudantes</li>
						<li>67 Docentes</li>
						<li>85 Administrativos</li>
					</ul>
				</p>
				<h3 className="text-xl mt-10 mb-4 font-bold lg:text-2xl">2. Finalidade institucional</h3>
				<p className="text-sm text-gray-600 lg:text-base">
					O Instituto Superior Politécnico São Martinho de Lima (ISPSML), nos termos do seu Estatuto Orgânico, tem por finalidades o desenvolvimento, a transmissão e a aplicação de conhecimentos por meio do ensino, da pesquisa e da extensão, compreendidos de forma não dissociada e, integrados na educação e na formação científica e técnico-profissional de cidadãos imbuídos de responsabilidades sociais, bem como na difusão da cultura e na criação filosófica, artística e tecnológica.
					No cumprimento dos seus objectivos, o ISPSML mantém cooperação académica, científica, tecnológica e cultural com instituições nacionais, e internacionais e constitui-se no âmbito de desenvolvimento local e nacional, almejando consolidar-se como universidades da classe mundial.
					No âmbito de assegurar o seu estatuto associa á finalidade institucional, as seguintes:
					<br />
					<br />
					<ol className="list-decimal ml-5">
						<li>Promover de forma indissociável, o ensino, a pesquisa e a extensão;</li>
						<li>Fomentar o desenvolvimento tecnológico, científico, filosófico, literário e artístico.</li>
						<li>Formar profissionais e especialistas de nível superior;</li>
						<li>Formar profissionais em modalidades vinculadas ao desenvolvimento nacional Nacional.</li>
						<li>Preparar recursos humanos qualificados.</li>
					</ol>
					<br />
					A directriz estratégica do ISPSML tem de promover a sinergia entre os actores institucionais, estimulando a integração, o trabalho colectivo e também a ampliação da participação da comunidade universitária na tomada de decisão.
					A dimensão institucional expressa a filosofia da universidade, marcando a sua posição como uma instituição pautada pelo seu compromisso social de construir o conhecimento e promover a formação de pessoas que respeitam valores essenciais para a construção de uma sociedade mais justa e comprometida com as grandes questões planetárias.
					A dimensão relação com a sociedade, reforça o seu compromisso social e seus objectivos fundamentais e especiais, assegurados no estatuto, especialmente na promoção de transformação social que tenha como alicerces o conhecimento, a inovação e a sustentabilidade, acesso e acessibilidade e inserção social decorrentes das mais diversas áreas de actuação do ISPSML.
					A dimensão de excelência académica que explicita o compromisso assumido na missão e na visão de ser uma Instituição, voltada para o constante desenvolvimento e qualificação de suas actividades de ensino, pesquisa e extensão.
					A dimensão do aprendizado organizacional demonstra a preocupação permanente da instituição em promover o desenvolvimento das pessoas em todas as suas potencialidades. Além disso, fica explicitada nessa dimensão a necessidade de criar mecanismos para a retenção do conhecimento e também a reestruturação académica, física e administrativa, o processo de comunicação interna e externa da instituição.
				</p>
				<h3 className="text-xl mt-10 mb-3 font-bold lg:text-2xl">3. Objectivo Geral</h3>
				<p className="text-sm text-gray-600 lg:text-base">
					O ISPSML tem como objectivo geral aprimorar a dimensão de excelência académica que explicita no ensino, pesquisa e extensão.
				</p>
				<h3 className="text-xl mt-6 mb-4 font-bold lg:text-2xl">4. Objectivos específicos:</h3>
				<p className="text-sm text-gray-600 lg:text-base">
					<ol>
						<li>Preparar quadros com formação científica- técnica e cultural em ramos ou especialidades correspondentes a áreas diferenciadas do conhecimento;</li>
						<li>Realizar a formação em estreita ligação com a investigação científica orientada para a solução dos problemas postos em cada momento pelo desenvolvimento científico- tecnológico da instituição e do país.</li>
						<li>Realizar cursos de graduação e pós – graduação ou especialização para a superação científica e tecnológica de quadros superiores e docentes.</li>
						<li>Desenvolver actividades de investigação científica e tecnológica, visando uma produção científica que contribua para o desenvolvimento económico e social de Angola.</li>
						<li>Divulgar os resultados da investigação científica realizada, de forma a partilhar esse novo conhecimento produtivo com a restante comunidade científica;</li>
						<li>Contribuir para o desenvolvimento do espírito crítico e de reflexão no domínio da produção material, respeitando os valores históricos, culturais, sociais e humanos do povo angolano;</li>
						<li>Contribuir para a elevação do padrão do ensino ministrado, visando uma formação sólida e altamente qualificada dos quadros nos domínios técnico, científico, cultural e humanístico.</li>
						<li>Cooperar com empresas, instituições e associações, interligando o estudo e o trabalho, a educação e o ensino, a ciência e a tecnologia, visando a garantia de uma correcta e imediata inserção social e profissional dos formandos;</li>
						<li>Promover acções que contribuam para o desenvolvimento das comunidades em que a instituição está inserida;</li>
						<li>Estabelecer parcerias com Instituições internacionais para promover cursos de pós-graduação em todas as áreas.</li>
					</ol>
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
							onClick={() => handleNavigation(`/about/institution/${info.link}`)}
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
