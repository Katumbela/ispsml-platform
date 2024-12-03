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

	useEffect(() =>{
		const data = RolesData.find((e) => e.id === who);
		setUser(data || null);
	}, [who])
 
	
	
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
			<div className="py-8 -mt-2 2xl:py-14 bg-white">
				<div className="containers">
					<div className="flex gap-5">
					<div className="2xl:w-4/5 w-3/5">
					
					{' '}
					<div className="flex justify-between">
					<h2 className="title mb-4">Perfil</h2>
					<div className="flex gap-3">
						<BiFile className='my-auto text-2xl'/>
						<div className="flex gap-4"><span className='my-auto border-l-2 ps-8 pe-3 border-black'>Curriculo {user?.name} </span> <FaDownload className='my-auto cursor-pointer'/></div>
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
				<div className="absolute border-4 flex flex-col border-white right-2 top-[65vh]">
					<div className="img relative w-[19rem] h-[20rem]">
						<Image alt='' src={user?.pic || ""} objectFit='cover' layout='fill'/>
					</div>
					<div className="bg-primary-footer w-[19rem] h-[10rem]  mt-1 p-3">
						<i  className="text-white font-bold">Frases</i>
						<br />
						<Slider className='h-[10rem] ' {...settings}>
							{
								user?.phrases?.map((p, i)=> (
									<div key={i} className='text-white flex flex-col '>
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
	 <br />

	 <section className="organigram mt-[18vh]">
		<div className="containers">
			<h1 className="title">Organisação</h1>
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
