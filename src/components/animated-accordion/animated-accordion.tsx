import React, { useState } from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';

interface AccordionItemProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItemProps[];
  gap?: number;
  childrenMt?: string;
  columns?: number; // Permite definir o número de colunas manualmente
}

const AnimatedAccordion: React.FC<AccordionProps> = ({childrenMt, gap, items, columns }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full ">
      {/* Grid para os cabeçalhos */}
      <div
        className={`grid ${
          columns ? `md:grid-cols-${columns}` : ''
        } gap-${gap} ${columns === 6 && 'grid-cols-6'}`}
      >
        {items.map((item, index) => (
          <div key={index} className={`w-full ${activeIndex === index && "mb-[45vh]"}`}>
            {/* Cabeçalho do Accordion */}
            <div
              className={cn('text-xl text-white cursor-pointer', {
                'bg-green-500': activeIndex === index,
                'bg-gray-900': activeIndex !== index,
              })}
              onClick={() => handleToggle(index)}
            >
              {item.title}
            </div>

            {/* Conteúdo Animado */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: activeIndex === index ? 'auto' : 0,
                opacity: activeIndex === index ? 1 : 0,
              }}
            //   exit={{ height: 0, opacity: 0 }}
              transition={{
                // height: { duration: 0.4, ease: 'easeInOut' },
                // opacity: { duration: 0.2, delay: activeIndex === index ? 0 : 0.2 },
              }}
              className="overflow-hidden text-white bg-gray-900"
              style={{
                position: activeIndex === index ? 'absolute' : 'absolute',
                bottom: activeIndex === index ? `-${childrenMt}` ? childrenMt : "10rem" : 'unset',
                left: 0,
                right: 0,
                width: '100',
                zIndex: activeIndex === index ? 10 : 1,
              }}
            >
              <div className="px-4 py-10">{item.children}</div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedAccordion;
