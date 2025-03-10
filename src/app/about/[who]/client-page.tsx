/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import GlobalHero from '@/components/global-hero/global-hero';
import { images } from '@/assets';
// import { useParams } from 'next/navigation';
import { useState } from 'react';
import { IRole } from '@/infra/data/roles-data';
import { BiFile } from 'react-icons/bi';
import { FaDownload } from 'react-icons/fa';
import Image from 'next/image';
import Slider from 'react-slick';
import { FaAngleDown, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import AnimatedAccordion from '@/components/animated-accordion/animated-accordion';
import { env } from '@/infra/env';
import { useQuery } from 'react-query';
import { getAllRoles } from '@/services/role.service';
import toast from 'react-hot-toast';
// import { title } from 'process';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
};

// Skeleton loaders components
const SkeletonProfile = () => (
    <div className="animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
    </div>
);

const SkeletonSlider = () => (
    <div className="animate-pulse">
        <div className="h-16 bg-gray-300 rounded mb-2"></div>
    </div>
);

const SkeletonAccordion = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-pulse">
        {[...Array(4)].map((_, i) => (
            <div key={i} className="h-[20rem] bg-gray-200 rounded"></div>
        ))}
    </div>
);

const RoleProfileClient = ({ who }: { who: string }) => {
    // const { who } = useParams() as { who: string };
    const [user, setUser] = useState<IRole | null>(null)

    // Fetch roles with React Query
    const { data: roles = [], isLoading: loadingR } = useQuery(
        'roles',
        getAllRoles,
        {
            onError: (error: any) => {
                toast.error('Erro ao carregar roles! ' + error.message);
            },
            onSuccess: (data) => {
                const role = data.find((e) => e.role.toLocaleLowerCase() === who.toLocaleLowerCase());
                setUser(role || null);
            }
        },
    );
    const phrases = [
        {
            title: "Sabedoria e Conhecimento",
            description: "A verdadeira educação não é apenas o aprendizado de fatos, mas o treinamento da mente para pensar. — Diretor"
        },
        {
            title: "Excelência Acadêmica",
            description: "O conhecimento abre portas, mas é a sabedoria que nos guia pelo caminho certo. — Diretor"
        },
        {
            title: "Futuro e Liderança",
            description: "A educação é a arma mais poderosa que podemos usar para mudar o mundo. — Diretor"
        },
        {
            title: "Compromisso com a Educação",
            description: "O sucesso não é um destino, mas o resultado do esforço contínuo e da dedicação. — Diretor"
        }
    ]


    const accordionItems = roles.filter(member => member.role.toLocaleLowerCase() !== who.toLocaleLowerCase()).map((member) => ({
        title: <div key={member.id} className="w-full relative p-4 text-black h-[20rem] 2xl:h-[24rem] group">
            <Image alt={member.name} src={member.pic} layout='fill' objectFit='cover' objectPosition='top' className='inset-0 object-top' />
            <div className="absolute bottom-0 left-0 right-0 z-10 p-4 text-white bg-opacity-50 from-black bg-gradient-to-t group-hover:bg-opacity-75">
                <h3>{member.name}</h3>
                <p className='text-xs'>{member.role}</p>
                <center>
                    <FaAngleDown className='mt-4 text-2xl' />
                </center>
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 z-10 bg-black opacity-[0] group-hover:opacity-[.6] transition-all"></div>

        </div>,
        children: <div>
            <p className='' dangerouslySetInnerHTML={{
                __html: member.about || ""
            }} />
            <br />
            <div className="flex gap-2 my-2">
                {
                    member?.linkedin && <div>
                        <FaLinkedinIn className='text-2xl ' />
                    </div>
                }
                {
                    member?.x && <div>
                        <FaXTwitter className='text-2xl ' />
                    </div>
                }
            </div>
        </div>
    }));



    return (
        <>
            <head>
                <title>Promotoria & Presidencia | Instituto Superior Politécnico São Martinho de Lima</title>
            </head>
            <GlobalHero
                bgImage={images.backgrounds.president_banner.src}
                titleClassName='text-4xl 2xl:text-5xl'
                position='top'
                title={who === "promotor" ? "Promotor do ISPSML" : "Presidência do ISPSML"}
                className="d-h"
            />
            <br />
            <div className="py-8 -mt-2 bg-white 2xl:py-14">
                <div className="containers">
                    <div className="flex gap-5">
                        <div className="w-3/5 2xl:w-4/5">
                            {loadingR ? (
                                <SkeletonProfile />
                            ) : (
                                <>
                                    <div className="hidden justify-between">
                                        <div className="flex gap-3">
                                            <BiFile className='my-auto text-2xl' />
                                            <div className="flex gap-4"><span className='my-auto border-l-2 border-black ps-8 pe-3'>Curriculo {user?.name} </span> <FaDownload className='my-auto cursor-pointer' /></div>
                                        </div>
                                    </div>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: user?.about || ""
                                        }}
                                        className="text-black 2xl:pe-[20vw] pe-[10vw] mt-4 text-md max-w-[83vw]" />
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="absolute border-[.4rem] flex flex-col border-white right-2 top-[55vh]">
                    {loadingR ? (
                        <>
                            <div className="animate-pulse w-[19rem] h-[20rem] bg-gray-300"></div>
                            <div className="bg-primary-footer w-[19rem] h-[10rem] mt-1 p-3">
                                <i className="font-bold text-white">Frases</i>
                                <br />
                                <SkeletonSlider />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='relative'>
                                <div className="img relative w-[19rem] h-[20rem]">
                                    <Image
                                        alt='' src={user?.pic || ""} objectFit='cover'
                                        placeholder='blur' blurDataURL={env.BLUR_IMAGE}
                                        layout='fill' />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 py-2 from-black bg-gradient-to-t">
                                    <div className="flex flex-col px-4 text-white">
                                        <b>{user?.name}</b>
                                        <i>Presidente</i>
                                        <div className="flex gap-2 my-2">
                                            {
                                                user?.linkedin && <div>
                                                    <FaLinkedinIn className='text-2xl ' />
                                                </div>
                                            }
                                            {
                                                user?.x && <div>
                                                    <FaXTwitter className='text-2xl ' />
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-primary-footer w-[19rem] h-[10rem]  mt-1 p-3">
                                <i className="font-bold text-white">Frases</i>
                                <br />
                                <Slider className='h-[10rem] ' {...settings}>
                                    {
                                        phrases?.map((p, i) => (
                                            <div key={i} className='flex flex-col text-white '>
                                                <b className='text-sm'>{p.title}</b>
                                                <p className='text-sm'>
                                                    <i>
                                                        {p.description}
                                                    </i>
                                                </p>
                                            </div>
                                        ))
                                    }
                                </Slider>
                            </div>
                        </>
                    )}
                </div>
            </div>


            <br />

            <section className="organigram mt-[18vh]">
                <div className="containers">
                    <h1 className="title">Organização</h1>
                    <br />
                    <br />
                    {loadingR ? (
                        <SkeletonAccordion />
                    ) : (
                        <div className="flex flex-wrap gap-4">
                            <AnimatedAccordion gap={5} items={accordionItems} columns={4} />
                        </div>
                    )}
                </div>
            </section>

            <br />
            <br />
            <br />
            <br />
            <br />

            <br />

        </>
    );
};

export default RoleProfileClient;

