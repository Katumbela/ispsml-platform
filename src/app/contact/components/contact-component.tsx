"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaUserFriends } from 'react-icons/fa';
import { BiBot } from 'react-icons/bi';
import { FaAngleDown } from 'react-icons/fa6';
import cn from 'classnames';

const ContactComponent = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const contactOptions = [
    {
      icon: <BiBot className='m-auto text-6xl' />,
      label: 'ISPSMLbot',
      content: (
        <>
          <p><strong>Assistência por ISPSMLbot disponível 24/7.</strong></p>
          <p>Nosso bot está disponível 24 horas por dia, 7 dias por semana para ajudar você.</p>
        </>
      )
    },
    {
      icon: <FaWhatsapp className='m-auto text-6xl' />,
      label: 'WhatsApp',
      content: (
        <>
          <p><strong>Contate-nos pelo WhatsApp a qualquer momento.</strong></p>
          <p>Ajudar você de maneira ágil é a facilidade que este canal de atendimento imediato nos proporciona.</p>
          <p>Nosso consultor virtual está disponível 24 horas por dia, 365 dias por ano para ajudar você. Se precisar de assistência personalizada, nossos consultores estão disponíveis de segunda a sexta-feira, das 8h às 18h.</p>
          <p><strong>Iniciar conversa {'>'}</strong></p>
          <p>+244 939 072 374; +244 939 072 373  (somente mensagens de texto)</p>
        </>
      )
    },
    {
      icon: <FaEnvelope className='m-auto text-6xl' />,
      label: 'Email',
      content: (
        <>
          <p><strong>Envie um email para assistência.</strong></p>
          <p>Responderemos o mais rápido possível.</p>
          <br />
          <p>geral@ispsml.com</p>
          <p>secretaria@ispsml.com</p>
        </>
      )
    },
    {
      icon: <FaPhoneAlt className='m-auto text-6xl' />,
      label: 'Ligue para nós',
      content: (
        <>
          <p><strong>Fale com nossos consultores de atendimento.</strong></p>
          <p>Atendimento de segunda a sexta-feira, das 8h às 18h.</p>
          <p>+244 939 072 373</p>
        </>
      ),
    },
    {
      icon: <FaUserFriends className='m-auto text-6xl' />,
      label: 'Atendimento presencial',
      content: (
        <>
          <p><strong>Visite-nos em nossos escritórios para assistência pessoalmente.</strong></p>
          <p>Endereço: Av. 21 de Janeiro - Luanda, 64849, Angola</p>
        </>
      )
    },
  ];

  return (
    <section className="py-8 mx-auto ">
      <div className="grid grid-cols-1 gap-0 md:grid-cols-12">

        {/* Primeira linha de opções */}
        <div className="grid grid-cols-1 col-span-12 gap-4 md:grid-cols-3">
          {contactOptions.slice(0, 3).map((option, index) => (
            <div key={index} className="col-span-1">
              <div
                onClick={() => toggleAccordion(index)}
                className={cn("cursor-pointer transition-all grid hover:bg-primary/80 hover:text-white h-[20rem]", { "bg-primary text-white": activeIndex === index })}
              >
                <div className="flex flex-col items-center justify-center my-auto">
                  <div>
                    {option.icon}
                    <p className="mt-2 font-semibold">{option.label}</p>
                  </div>
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    className="mt-2"
                  >
                    <FaAngleDown />
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Conteúdo expandido para a primeira linha */}
        <AnimatePresence>
          {activeIndex !== null && activeIndex < 3 && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="col-span-12 py-6 text-wshite text-md bg-xsky-500"
            >
              <div className="containers">
                {contactOptions[activeIndex].content}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Segunda linha de opções */}
        <div className="grid grid-cols-1 col-span-12 gap-4 mt-6 md:grid-cols-3">
          {contactOptions.slice(3).map((option, index) => (
            <div key={index + 3} className="col-span-1">
              <div
                onClick={() => toggleAccordion(index + 3)}
                className={cn("cursor-pointer transition-all grid hover:bg-primary hover:text-white h-[20rem]", { "bg-primary text-white": activeIndex === index + 3 })}
              >
                <div className="flex flex-col items-center justify-center my-auto">
                  <div>
                    {option.icon}
                    <p className="mt-2 font-semibold">{option.label}</p>
                  </div>
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: activeIndex === index + 3 ? 180 : 0 }}
                    className="mt-2"
                  >
                    <FaAngleDown />
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Conteúdo expandido para a segunda linha */}
        <AnimatePresence>
          {activeIndex !== null && activeIndex >= 3 && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="col-span-12 py-6 text-lg text-whitee bg-sky-0"
            >
              <div className="containers">
                {contactOptions[activeIndex].content}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>


      <br />
      <br /><div className="containers">


        <p>ISPSML Secretaria é a equipe especializada em oferecer o melhor atendimento e serviços especializados no ISPSML. Nos dedicamos a fazer com que cada processo e serviço funcione de maneira eficiente. Com o apoio de nossos líderes em cada área, estamos prontos para resolver qualquer particularidade que você possa ter.
          <br />
          <br />
          Na o ISPSML, nos esforçamos para oferecer a melhor experiência possível. Nossos pilares são confiança, empatia e compreensão, para que você se sinta ouvido e apoiado o tempo todo. Além disso, garantimos respostas claras, ágeis e oportunas para resolver suas dúvidas ou problemas de forma eficiente. Queremos que o acesso aos nossos serviços seja fácil e rápido, e para isso contamos com uma equipe altamente capacitada e comprometida. Sua satisfação é nossa prioridade!</p>
      </div>
    </section>
  );
};

export default ContactComponent;
