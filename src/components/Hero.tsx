/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import { carouselItems } from '@/infra/data/navbar-data'; 
import { FaAngleRight } from 'react-icons/fa';



const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
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
      setCurrentSlide(newIndex);
      setAnimationDirection(Math.random() > 0.5 ? 'top' : 'bottom');
    },
  };

  useEffect(() => {
    // Trigger re-render to reset animations
  }, [currentSlide]);

  const getInitialY = () => (animationDirection === 'top' ? -50 : 50);

  return (
    <section className="text-white ">
      <div className="pt-0 mx-auto text-center">
        <Slider {...settings}>
          {carouselItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative h-[700px] items-start grid place-content-end pb-10 overflow-hidden"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={item.background.src}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-[-1]"
              />
              <div className="absolute inset-0 bg-black opacity-50 z-[-1]" />
              <div className="relative z-10 my-auto text-start">
                <div className="container">
                  <motion.h1
                    className="mb-4 text-3xl font-bold md:text-5xl"
                    initial={{ opacity: 0, y: getInitialY() }}
                    animate={{ opacity: 1, y: 0, scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5, delay: 0.5, type: 'spring', stiffness: 100 }}
                    key={`title-${currentSlide}`}
                  >
                    {item.title}
                  </motion.h1>
                  <motion.p
                    className="mb-4 text-lg md:text-xl"
                    initial={{ opacity: 0, y: getInitialY() }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    key={`description-${currentSlide}`}
                  >
                    {item.description}
                  </motion.p>
                  <motion.a
                    href={item.link}
                    className="flex gap-1 mb-4 font-bold tracking-wider text-md hover:underline"
                    // className="px-6 py-3 text-lg font-bold transition-all transform bg-white hover:rounded-md hover:bg-primary hover:text-white hover:shadow hover:-translate-y-10 text-primary"
                    initial={{ opacity: 0, y: getInitialY() }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    key={`cta-${currentSlide}`}
                  >
                    <span className="my-auto"> {item.cta}</span>
                    <FaAngleRight className='my-auto' />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;