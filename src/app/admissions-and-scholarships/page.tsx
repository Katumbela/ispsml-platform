'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
// import { routes } from '@/infra/routes.vars';
// import { coursesData } from '@/infra/data/courses-data';
import GlobalHero from '@/components/global-hero/global-hero';
import { images } from '@/assets';
import { motion } from 'framer-motion';
import { FaAngleRight } from 'react-icons/fa6';
import Image from 'next/image';
// import Head from 'next/head';
// import { env } from '@/infra/env';

// const departments = Object.entries(coursesData).map(([key, value]) => ({
//   link: `${routes.ORGANIC_UNIT_ROUTE}/${key}`,
//   name: `Departamento de ${key.charAt(0).toUpperCase() + key.slice(1)}`,
//   cover: value.department_cover
// }));

export default function OrganicUnitPage() {
  return (
    <>
    <head>
			<title>Inscrições e Bolsas de Estudos | Instituto Superior Politécnico São Martinho de Lima </title>
		</head>
      <Navbar />
      <GlobalHero bgImage={images.backgrounds.bg_prepa_tec.src} titleClassName='text-6xl' title='Inscrições e Bolsas' className='h-[500px] 2xl:h-[600px] ' />
      <br />
      <div className="containers">
        <p className="text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima sapiente facere impedit est voluptatum quidem quam iste similique eum repellendus, mollitia alias dolor reiciendis atque exercitationem ut deleniti velit quisquam?
        </p>
        </div>
        <br />
        <br />
        <motion.div
				initial={{ x: -1000, opacity: 0 }}
				viewport={{ once: true }}
				whileInView={{ x: 0, opacity: 1, transition: { duration: 0.3, delay: 0.1 } }}
				className=" bg-primary image-container"
			>
				<div className="flex gap-2 ">
					<div className="w-1/2 ps-10 py-14 2xl:py-24">
						<h2 className="font-bold text-white lg:mb-2 lg:text-3xl 2xl:mb-3 2xl:text-4xl">
							 Relações Empresariais
						</h2>
						<p className="text-sm 2xl:text-[14px] text-white">At Tec we connect and collaborate with national and international organizations through valuable corporate relationships, through a bonding model that generates human, economic, social, and environmental value to contribute to a fairer, more prosperous, and more sustainable society with higher levels of wellness.</p>
						<button className="flex gap-2 py-5 mt-6 font-semibold text-black uppercase transition-all bg-white border-2 border-white px-7 hover:bg-transparent hover:text-white ">
							<span className="my-auto">Saber Mais</span>
							<FaAngleRight className="my-auto" />
						</button>
					</div>
					<div className="relative w-1/2 h-100 image-container">
						<Image
							objectFit="cover"
							layout="fill"
							alt=""
							src={images.backgrounds.bg_books_pen.src}
							className="image"
						/>
					</div>
				</div>
			</motion.div>

      <section className='py-10'>
        <div className="containers">
          <h2 className="title">Inscrições </h2>
        </div>
        <br />
        <div className="flex gap-2">
            <div className="grid items-center p-5 w-[13rem] h-[15rem] bg-primary">
              <div>
              <h3 className="text-white">Inscrições</h3> 
              </div>
            </div>
          </div>
      </section>

      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}
