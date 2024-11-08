import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { images } from '@/assets';
import { FaAngleDown } from 'react-icons/fa';
import cn from 'classnames';

interface Card {
  title: string;
  description: string;
  image: string;
}

export function StudyOffer() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const cards: Card[] = [
    {
      title: "Engenharia e Tecnologia",
      description: "Descrição detalhada sobre Engenharia e Tecnologia.",
      image: images.departImages.eng_tech.src
    },
    {
      title: "Ciências Sociais Aplicadas",
      description: "Descrição detalhada sobre Ciências Sociais Aplicadas.",
      image: images.departImages.ciencias_sociais.src
    },
    {
      title: "Geociências",
      description: "Descrição detalhada sobre Geociências.",
      image: images.departImages.geoscience.src
    }
  ];

  const handleCardClick = (index: number) => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  return (
    <section className="bg-gray-100 ">
      <div className="mx-auto text-center ">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative 2xl:h-[22rem] h-[17rem] overflow-hidden cursor-pointer cc"
              onClick={() => handleCardClick(index)}
            >
              <div
                className="absolute inset-0 card-background"
                style={{ background: `url(${card.image}) center center / cover no-repeat` }}
              />
              <div className="absolute inset-0 opacity-70 bg-primary"></div>
              <div className="relative z-10 grid items-center h-full text-white place-content-center">
                <h3 className="my-auto text-2xl font-medium">{card.title}</h3>
                <div className={cn("absolute left-0 right-0 flex justify-center w-full text-2xl text-center bottom-4 py-4", { "bg-primary-dark/70": index === 0 })}>
                  <FaAngleDown className={cn({ "rotate-180 transition-all": selectedCard === index, "-rotate-0": selectedCard !== index })} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <AnimatePresence>
          {selectedCard !== null && (
            <motion.div
              key={selectedCard}
              className="w-full px-6 py-8 overflow-hidden text-sky-100 text-start bg-primary"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold">{cards[selectedCard].title}</h3>
              <p>{cards[selectedCard].description}</p>
              <a href="#" className="mt-2 text-white underline transition-all hover:text-white/70">Saber mais</a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}