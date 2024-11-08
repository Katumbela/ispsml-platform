/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"

import { images } from '@/assets';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';

const carouselItems = [
  {
    background: images.teachers.teacher2,
    title: 'Bem-vindo à ISPML',
    description: 'As inscrições estão abertas! Junte-se a nós e transforme o seu futuro.',
    cta: 'Inscreva-se Agora',
    link: '/apply'
  },
  {
    background: images.backgrounds.bg1,
    title: 'Excelência Acadêmica',
    description: 'Oferecemos cursos de alta qualidade para preparar você para o mercado de trabalho.',
    cta: 'Saiba Mais',
    link: '/courses'
  },
  {
    background: images.teachers.teacher1,
    title: 'Pesquisa e Inovação',
    description: 'Participe de projetos inovadores e contribua para o avanço do conhecimento.',
    cta: 'Descubra',
    link: '/research'
  },
  {
    background: images.teachers.teacher3,
    title: 'Vida Universitária',
    description: 'Experimente uma vida universitária vibrante e cheia de atividades.',
    cta: 'Explore',
    link: '/campus-life'
  }
];

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
      <div className="pt-20 mx-auto text-center">
        <Slider {...settings}>
          {carouselItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative h-[600px] items-start grid place-content-center overflow-hidden"
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
                    className="mb-8 text-lg md:text-xl"
                    initial={{ opacity: 0, y: getInitialY() }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    key={`description-${currentSlide}`}
                  >
                    {item.description}
                  </motion.p>
                  <motion.a
                    href={item.link}
                    className="px-6 py-3 text-lg font-bold transition-all transform bg-white hover:rounded-md hover:bg-primary hover:text-white hover:shadow hover:-translate-y-10 text-primary"
                    initial={{ opacity: 0, y: getInitialY() }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    key={`cta-${currentSlide}`}
                  >
                    {item.cta}
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