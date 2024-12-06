'use client';

import GlobalHero from '@/components/global-hero/global-hero'; 
import { images } from '@/assets'; 
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IRole, RolesData } from '@/infra/data/roles-data';
import { BiFile } from 'react-icons/bi';
import { FaDownload } from 'react-icons/fa';
import Image from 'next/image';
import Slider from 'react-slick';
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import AnimatedAccordionBellowHeader from '@/components/animated-accordion/animated-accordion-below-header';
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



const RoleProfile = () => {
	const { who } = useParams() as { who: string };
	const [user, setUser ] = useState<IRole | null>(null)
	const [teamMembers, setTeamMembers] = useState<IRole[]>([]);

	useEffect(() =>{
		const data = RolesData.find((e) => e.id === who);
		setUser(data || null);
		if (data?.team) {
			const members = RolesData.filter((e) => data.team?.includes(e.id));
			setTeamMembers(members);
		}
	}, [who])

	const accordionItems = teamMembers.map((member) => ({
		title:  <div key={member.id} className="w-full relative p-4 text-black h-[20rem] group">
			<Image alt={member.name} src={member.pic} layout='fill' objectFit='cover' className='inset-0' />
			<div className="absolute bottom-0 left-0 right-0 z-10 p-4 text-white bg-opacity-50 from-black bg-gradient-to-t group-hover:bg-opacity-75">
				<h3>{member.name}</h3>
				<p className='text-xs'>{member.role}</p>
			</div>
			<div className="absolute top-0 bottom-0 left-0 right-0 z-10 bg-black opacity-[0] group-hover:opacity-[.6] transition-all"></div>

		</div>,
		children: <p className='text-black' dangerouslySetInnerHTML={{
			__html:  member.about || ""
		}} />, // O conteúdo do accordion será a descrição do membro
	  }));



	return (
		<>
		<head>
			<title>Promotoria & Presidencia | Instituto Superior Politécnico São Martinho de Lima</title>
		</head>
			<GlobalHero
				bgImage={images.backgrounds.bg_school_4.src}
				titleClassName='text-5xl'
				title={who === "promotor" ? "Promotor do ISPSML" : "Presidente do ISPSML" }
				className="h-[500px] 2xl:h-[750px]"
			/>
			<div className="py-8 -mt-2 bg-white 2xl:py-14">
				<div className="containers">
					<div className="flex gap-5">
					<div className="w-3/5 2xl:w-4/5">
					
					{' '}
					<div className="flex justify-between">
					<h2 className="mb-4 title">Perfil</h2>
					<div className="flex gap-3">
						<BiFile className='my-auto text-2xl'/>
						<div className="flex gap-4"><span className='my-auto border-l-2 border-black ps-8 pe-3'>Curriculo {user?.name} </span> <FaDownload className='my-auto cursor-pointer'/></div>
					</div>
					</div>
					<p
						dangerouslySetInnerHTML={{
							__html:  user?.about || ""
						}}
					className="text-black 2xl:pe-[20vw] pe-[10vw] mt-4 text-md max-w-[83vw]"/>
						 
					</div>
					</div>
				</div>
				<div className="absolute border-[.4rem] flex flex-col border-white right-2 top-[55vh]">
					<div className='relative'>
					<div className="img relative w-[19rem] h-[20rem]">
						<Image alt='' src={user?.pic || ""} objectFit='cover' layout='fill'/>
					</div>
					<div className="absolute bottom-0 left-0 right-0 py-2 from-black bg-gradient-to-t">
						<div className="flex flex-col px-4 text-white">
						<b>{user?.name}</b>
						<i>{user?.role}</i>
						<div className="flex gap-2 my-2">
							{
								user?.linkedin && <div>
								<FaLinkedinIn className='text-2xl '/>
								</div>
							}
							{
								user?.x && <div>
								<FaXTwitter className='text-2xl '/>
								</div>
							}
						</div>
						</div>
					</div>
					</div>
					<div className="bg-primary-footer w-[19rem] h-[10rem]  mt-1 p-3">
						<i  className="font-bold text-white">Frases</i>
						<br />
						<Slider className='h-[10rem] ' {...settings}>
							{
								user?.phrases?.map((p, i)=> (
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
				</div>
			</div>
			 

	 <br /> 

	 <section className="organigram mt-[18vh]">
		<div className="containers">
			<h1 className="title">Organização</h1>
			<br />
			<br />
			<div className="flex flex-wrap gap-4">
           {/* Componente Accordion aqui */}
            <AnimatedAccordionBellowHeader gap={5} items={accordionItems} columns={3} />
        
      </div>
		</div>
	 </section>
	  
	 <br />
	 <br />
	 <br />
	 <br />
	 <br />
	 <br />
		 
	 <br />

		</>
	);
};

export default RoleProfile;
