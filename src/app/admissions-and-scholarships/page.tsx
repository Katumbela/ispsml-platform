'use client';

// import { routes } from '@/infra/routes.vars';
// import { coursesData } from '@/infra/data/courses-data';
import GlobalHero from '@/components/global-hero/global-hero';
import { images } from '@/assets';
import { motion } from 'framer-motion';
// import { FaAngleRight } from 'react-icons/fa6';
import Image from 'next/image';
// import { BiSolidContact } from 'react-icons/bi';
// import Head from 'next/head';
// import { env } from '@/infra/env';

import React from 'react';
import AdmissionsCard from './components/admissions-card';
import { cardData, scholarShipsData } from '@/infra/data/admission-datas';
import { env } from '@/infra/env';

export default function OrganicUnitPage() {



  return (
    <>
      <head>
        <title>Inscrições e Matrículas | Instituto Superior Politécnico São Martinho de Lima </title>
      </head>
      <GlobalHero bgImage={images.backgrounds.bg_prepa_tec.src} titleClassName='text-6xl' title='Inscrições e Matrículas' className='h-[500px] 2xl:h-[600px] ' />
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
          <div className="w-1/2 py-20 ps-10 2xl:py-32">
            <h2 className="font-bold text-white lg:mb-2 lg:text-4xl 2xl:mb-3 2xl:text-5xl">
              Preparatório & Inscrição
            </h2>
            <p className="text-sm 2xl:text-[14px] text-white">At Tec we connect and collaborate with national and international organizations through valuable corporate relationships, through a bonding model that generates human, economic, social, and environmental value to contribute to a fairer.</p>

          </div>
          <div className="relative w-1/2 h-100 image-container">
            <Image
              objectFit="cover"
              layout="fill"
              alt=""
              placeholder='blur' blurDataURL={env.BLUR_IMAGE}

              src={images.backgrounds.bg_books_pen.src}
              className="image"
            />
          </div>
        </div>
      </motion.div>

      <section className='pt-10'>
        <div className="containers">
          <h2 className="title">Inscrições </h2>
        </div>
        <br />
        <div className="flex gap-1">
          {cardData.map((card, index) => (
            <AdmissionsCard card={card} key={index} />
          ))}
        </div>
      </section>
      <br />
      <br />
      <br />
      <section className=' containers'>
        <div className="">
          <h2 className="text-3xl font-bold 2xl:text-4xl">Bolsas de Estudos </h2>
        </div>
        <br />
        <div className="flex gap-1">
          {/* <Slider {...settings} > */}

          {scholarShipsData.map((card, index) => (
            <AdmissionsCard card={card} key={index} />
          ))}

          {/* </Slider> */}
        </div>
      </section>

      <br />
      <br />
      <motion.div
        initial={{ x: -1000, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ x: 0, opacity: 1, transition: { duration: 0.3, delay: 0.1 } }}
        className=" bg-primary-footer image-container"
      >
        <div className="flex gap-2 ">
          <div className="w-1/2 py-20 ps-10 2xl:py-32">
            <div className="containers">
              <h2 className="font-bold text-white lg:mb-2 lg:text-4xl 2xl:mb-3 2xl:text-5xl">
                Inscrões em Licenciatura
              </h2>
              <p className="text-sm 2xl:text-[14px] text-white">At Tec we connect and collaborate with national and international organizations through valuable corporate relationships, through a bonding model that generates human, economic, social, and environmental value to contribute to a fairer.</p>
            </div>
          </div>
          <div className="relative w-1/2 h-100 image-container">
            <Image
              objectFit="cover"
              layout="fill"
              alt=""
              placeholder='blur' blurDataURL={env.BLUR_IMAGE}

              src={images.backgrounds.bg_student_2.src}
              className="image"
            />
          </div>
        </div>
      </motion.div>
      <br />
      <br />

      <section className='pt-10'>
        <div className="containers">
          <h2 className="title">Inscrições </h2>
        </div>
        <br />
        <div className="flex gap-1">
          {cardData.map((card, index) => (
            <AdmissionsCard card={card} type='undergraduation' key={index} />
          ))}
        </div>
      </section>
      <br />
      <br />   <section className=' containers'>
        <div className="">
          <h2 className="text-3xl font-bold 2xl:text-4xl">Bolsas de Estudos </h2>
        </div>
        <br />
        <div className="flex gap-1">
          {/* <Slider {...settings} > */}

          {scholarShipsData.map((card, index) => (
            <AdmissionsCard type='undergraduation' card={card} key={index} />
          ))}

          {/* </Slider> */}
        </div>
      </section>

      <br />
      <br />
      <br />
    </>
  );
}
