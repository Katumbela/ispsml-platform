/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"

import { motion } from 'framer-motion';
import Image, { type StaticImageData } from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import { FaLocationCrosshairs, FaRegClock } from 'react-icons/fa6';
import { ICourse, IDepartment } from '@/infra/interfaces/course.interface';
import { FaPencilRuler } from 'react-icons/fa';
import { GetLevelDescription } from '@/utils/return-level-name';
import { routes } from '@/infra/routes.vars';
import { env } from '@/infra/env';


interface HeroCourseDetailProps {
  title?: string
  bg_image?: string | StaticImageData
  height?: string
  course: ICourse
  department?: IDepartment
  departmentName?: string
}


export function HeroCourseDetail({ department, bg_image, title, course }: HeroCourseDetailProps) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState('top');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    beforeChange: (oldIndex: any, newIndex: any) => {
      setSlideIndex(newIndex);
      setAnimationDirection(Math.random() > 0.5 ? 'top' : 'bottom');
    },
  };

  useEffect(() => {
    // Trigger re-render to reset animations
  }, [slideIndex]);

  const getInitialY = () => (animationDirection === 'top' ? -50 : 50);

  return (
    <section className="text-white hero-det">
      <div className="pt-0 mx-auto text-center">
        <Slider {...settings}>

          <motion.div
            className={`relative 2xl:h-[500px] h-[450px]  items-start grid place-content-end overflow-hidden`}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={bg_image ? bg_image : ""}
              alt={""}
              blurDataURL={env.BLUR_IMAGE}
              placeholder='blur'
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 z-[-1]"
            />
            <div className="absolute inset-0 bg-black opacity-50 z-[-1]" />
            <div className="relative z-10 my-auto text-start">
              <div className="py-8 bg-gradient-to-t from-black ">
                <div className="flex flex-col containers">
                  <p className='pb-2 mb-3 border-b'>
                    <a className='hover:underline' href={routes.ORGANIC_UNIT_ROUTE}>Unidades Orgânicas</a> / <a className='hover:underline' href={routes.ORGANIC_UNIT_ROUTE + "/" + department?.slug}>{department?.name}</a> / {course?.course}
                  </p>
                  <span>{GetLevelDescription(course?.level)}</span>
                  <motion.h1
                    className="text-2xl font-semibold mb-[10vh] md:text-4xl"
                    initial={{ opacity: 0, y: getInitialY() }}
                    animate={{ opacity: 1, y: 0, scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5, delay: 0.5, type: 'spring', stiffness: 100 }}
                  >
                    {title}
                  </motion.h1>
                  <br />
                  <br />

                  {/* div onde tem os icones da div */}
                  <div className="grid px-6 gap-6 w-auto text-center grid-cols-3 p-2 max-w-[60vw] mx-auto place-content-center bg-primary">
                    <div className='py-3 my-auto'>
                      <div className="flex justify-center gap-5 text-xl justify">

                        <FaLocationCrosshairs className='my-auto text-3xl' />

                        <div className='flex flex-col my-auto text-start'>
                          <p>Turno</p>
                          <span className="text-sm">
                            <p className='flex gap-2 text-slate'>
                              <span className="text-white ">
                                {course?.shift?.morning ? 'M' : ''}
                              </span>
                              <span className="text-white ">
                                {course?.shift?.afternoon ? 'T' : ''}
                              </span>
                              <span className="text-white">
                                {course?.shift?.evening ? 'N' : ''}
                              </span>
                            </p>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='px-10 py-5 border-x-2'>
                      <div className="flex justify-center gap-5 text-xl justify">

                        <FaRegClock className='my-auto text-3xl' />

                        <div className='flex flex-col text-start'>
                          <p>Duração</p>
                          <span className="text-sm">{course?.duration} anos</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center gap-5 py-3 my-auto text-xl justify">

                      <FaPencilRuler className='my-auto text-3xl' />


                      <div className='flex flex-col my-auto text-start'>
                        <p>Modalidade</p>
                        <span className="text-sm">Presencial</span>
                      </div>
                    </div>
                  </div>
                  <br />
                </div>

              </div>
            </div>
          </motion.div>

        </Slider>
      </div>
    </section>
  );
};
