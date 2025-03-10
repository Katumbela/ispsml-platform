'use client';

import GlobalHero from '@/components/global-hero/global-hero';
import { images } from '@/assets';
import Image from 'next/image';
import { FaGraduationCap, FaUsers, FaLaptopCode, FaHandshake, FaGlobe } from 'react-icons/fa';

const AboutISPSML = () => {
    // Timeline data for institution history
    const timelineEvents = [
        {
            year: "2007",
            title: "Fundação da MNR Investimentos",
            description: "Publicação no Diário da República, III Série – 156/07 de 28 de Dezembro de 2007"
        },
        {
            year: "2019",
            title: "Aprovação do ISPSML",
            description: "Decreto Presidencial nº 233/19 de 22 de Julho, estabelecendo oficialmente o Instituto"
        },
        {
            year: "2020",
            title: "Enquadramento Legal",
            description: "Decreto Presidencial nº 310/20 de 7 de Dezembro define o Regime jurídico do Subsistema"
        },
        {
            year: "2021",
            title: "Início das Atividades Acadêmicas",
            description: "Primeiras turmas de estudantes começam suas jornadas acadêmicas"
        },
        {
            year: "2023",
            title: "Expansão Acadêmica",
            description: "Ampliação da oferta de cursos e aumento significativo do corpo discente"
        }
    ];

    // Stats data
    const stats = [
        { label: "Estudantes", value: "867+" },
        { label: "Docentes", value: "67+" },
        { label: "Administrativos", value: "85+" },
        { label: "Anos de Experiência", value: "5+" }
    ];

    return (
        <>
            <head>
                <title>Mais Sobre o ISPSML</title>
            </head>

            <GlobalHero
                bgImage={images.backgrounds.bg_woman_bg_flower.src}
                bottomBG="dark"
                title={'Mais Sobre o ISPSML'}
                position='top'
                className="d-h"
            />

            <div className="py-8 -mt-2 2xl:py-14 bg-primary">
                <div className="containers">
                    <p className="text-white text-md max-w-[83vw]">
                        Conheça em profundidade a história, estrutura e impacto do Instituto Superior Politécnico São Martinho de Lima.
                    </p>
                </div>
            </div>

            {/* Introduction Section */}
            <section className="py-16 bg-white">
                <div className="containers">
                    <div className="grid gap-12 md:grid-cols-2">
                        <div>
                            <h2 className="mb-6 text-3xl font-bold text-primary lg:text-4xl">Quem Somos</h2>
                            <p className="mb-6 text-lg text-gray-700">
                                O Instituto Superior Politécnico São Martinho de Lima (ISPSML) é uma instituição de ensino superior privada comprometida com a excelência acadêmica e o desenvolvimento sustentável de Angola.
                            </p>
                            <p className="text-lg text-gray-700">
                                Situado junto à Via Expresso, Bairro Benfica, Município de Belas, Província Luanda, nosso campus moderno proporciona um ambiente ideal para o aprendizado, pesquisa e crescimento pessoal. Com uma equipe de docentes altamente qualificados e uma infraestrutura de ponta, estamos preparados para oferecer uma educação superior de qualidade que contribua para o progresso do nosso país.
                            </p>
                        </div>
                        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src={images.bgPplImages.bg_ppl22.src}
                                alt="Campus ISPSML"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our History Timeline */}
            <section className="py-16 bg-slate-50">
                <div className="containers">
                    <h2 className="mb-10 text-3xl font-bold text-center text-primary lg:text-4xl">Nossa História</h2>
                    <div className="relative max-w-4xl container">
                        <div className="absolute left-1/2 -ml-0.5 w-0.5 h-full bg-primary"></div>
                        <div className="space-y-8">
                            {timelineEvents.map((event, index) => (
                                <div key={index} className={`relative ${index % 2 === 0 ? 'pl-14 md:pl-0 md:pr-14 md:text-right md:ml-auto md:mr-1/2' : 'pl-14 md:ml-1/2'}`}>
                                    <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white"></div>
                                    <div className="p-6 bg-white rounded-lg shadow-md">
                                        <span className="inline-block px-4 py-2 mb-3 text-sm font-semibold text-white bg-primary rounded-full">
                                            {event.year}
                                        </span>
                                        <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
                                        <p className="text-gray-600">{event.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Counter */}
            <section className="py-12 text-white bg-primary">
                <div className="containers">
                    <div className="grid max-w-6xl container grid-cols-2 gap-6 md:grid-cols-4">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl font-bold md:text-5xl">{stat.value}</div>
                                <div className="mt-2 text-lg">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Academic Offerings */}
            <section className="py-16 bg-white">
                <div className="containers">
                    <h2 className="mb-10 text-3xl font-bold text-center text-primary lg:text-4xl">Ofertas Acadêmicas</h2>
                    <div className="grid max-w-7xl container gap-8 md:grid-cols-2">
                        <div className="p-6 transition-all bg-white rounded-lg shadow-md hover:shadow-xl">
                            <div className="flex items-center mb-4">
                                <div className="p-3 mr-4 text-white bg-primary rounded-full">
                                    <FaGraduationCap size={24} />
                                </div>
                                <h3 className="text-2xl font-semibold">Ciências Sociais e Humanas</h3>
                            </div>
                            <ul className="pl-5 mt-4 space-y-2 list-disc text-gray-700">
                                <li>Licenciatura em Direito</li>
                                <li>Licenciatura em Gestão de Recursos Humanos</li>
                                <li>Licenciatura em Psicologia</li>
                                <li>Licenciatura em Sociologia</li>
                                <li>Licenciatura em Administração e Gestão de Empresas</li>
                            </ul>
                        </div>

                        <div className="p-6 transition-all bg-white rounded-lg shadow-md hover:shadow-xl">
                            <div className="flex items-center mb-4">
                                <div className="p-3 mr-4 text-white bg-primary rounded-full">
                                    <FaLaptopCode size={24} />
                                </div>
                                <h3 className="text-2xl font-semibold">Engenharia e Tecnologia</h3>
                            </div>
                            <ul className="pl-5 mt-4 space-y-2 list-disc text-gray-700">
                                <li>Licenciatura em Engenharia Informática</li>
                                <li>Licenciatura em Engenharia Civil</li>
                                <li>Licenciatura em Engenharia Elétrica</li>
                                <li>Licenciatura em Ciências da Computação</li>
                                <li>Licenciatura em Sistemas de Informação</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Facilities */}
            <section className="py-16 bg-slate-50">
                <div className="containers">
                    <h2 className="mb-10 text-3xl font-bold text-center text-primary lg:text-4xl">Nossas Instalações</h2>
                    <div className="grid max-w-7xl container gap-6 md:grid-cols-3">
                        <div className="overflow-hiddenshadow-lg">
                            <div className="relative h-48">
                                <Image
                                    src={images.bgsSchool.bg_school_22.src}
                                    alt="Biblioteca ISPSML"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="mb-2 text-xl font-semibold">Biblioteca Moderna</h3>
                                <p className="text-gray-600">
                                    Amplo acervo físico e digital, espaços de estudo individual e em grupo, e acesso a bases de dados internacionais.
                                </p>
                            </div>
                        </div>

                        <div className="overflow-hiddenshadow-lg">
                            <div className="relative h-48">
                                <Image
                                    src={images.bgsSchool.bg_school_24.src}
                                    alt="Laboratórios ISPSML"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="mb-2 text-xl font-semibold">Laboratórios Equipados</h3>
                                <p className="text-gray-600">
                                    Laboratórios de informática, engenharia e ciências, com equipamentos de última geração para atividades práticas.
                                </p>
                            </div>
                        </div>

                        <div className="overflow-hiddenshadow-lg">
                            <div className="relative h-48">
                                <Image
                                    src={images.bgsSchool.bg_school_26.src}
                                    alt="Auditório ISPSML"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="mb-2 text-xl font-semibold">Auditório e Salas Multimídia</h3>
                                <p className="text-gray-600">
                                    Espaços modernos para palestras, eventos acadêmicos e atividades culturais, com recursos audiovisuais completos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Pillars */}
            <section className="py-16 bg-white">
                <div className="containers">
                    <h2 className="mb-10 text-3xl font-bold text-center text-primary lg:text-4xl">Nossos Pilares</h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="text-center">
                            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 text-white bg-primary rounded-full">
                                <FaUsers size={32} />
                            </div>
                            <h3 className="mb-4 text-2xl font-semibold">Ensino</h3>
                            <p className="text-gray-600">
                                Comprometimento com a excelência acadêmica, utilizando metodologias inovadoras e formando profissionais altamente qualificados para o mercado de trabalho.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 text-white bg-primary rounded-full">
                                <FaGlobe size={32} />
                            </div>
                            <h3 className="mb-4 text-2xl font-semibold">Pesquisa</h3>
                            <p className="text-gray-600">
                                Incentivo à investigação científica para produção de conhecimento relevante, contribuindo para o desenvolvimento tecnológico e social de Angola.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 text-white bg-primary rounded-full">
                                <FaHandshake size={32} />
                            </div>
                            <h3 className="mb-4 text-2xl font-semibold">Extensão</h3>
                            <p className="text-gray-600">
                                Promoção da interação transformadora entre a instituição e a sociedade, aplicando conhecimentos acadêmicos para beneficiar as comunidades locais.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-slate-900 text-white">
                <div className="containers text-center">
                    <h2 className="mb-6 text-3xl font-bold lg:text-4xl">Faça Parte da Nossa Comunidade</h2>
                    <p className="max-w-3xl mx-auto mb-8 text-lg">
                        O Instituto Superior Politécnico São Martinho de Lima está de portas abertas para todos que buscam uma educação superior de qualidade. Venha construir o seu futuro conosco!
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="px-8 py-4 font-semibold text-slate-900 transition-all bg-white rounded-md hover:bg-gray-100">
                            Processo Seletivo
                        </button>
                        <button className="px-8 py-4 font-semibold transition-all border-2 border-white rounded-md hover:bg-white hover:text-slate-900">
                            Agendar Visita
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutISPSML;
