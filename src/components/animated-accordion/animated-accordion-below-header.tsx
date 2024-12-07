import React, { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames'; 

interface AccordionItemProps {
  title: ReactNode;
  children: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItemProps[];
  gap?: number;
  columns?: number; // Permite definir o número de colunas manualmente
}

const AnimatedAccordionBellowHeader: React.FC<AccordionProps> = ({ items, columns, gap }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // Alterna entre abrir e fechar
  };

  // Define o número de colunas baseado nos itens ou na propriedade `columns`
  // const gridColumns = columns;

  return (
    <div className="w-full">
      {/* Grid para os cabeçalhos */}
      <div className={`grid md:grid-cols-${columns?.toString()} ${columns ? "grid-cols-"+columns : ""} gap-${gap} grid-cols-1`}>
        {items.map((item, index) => (
          <div key={index}>
            {/* Cabeçalho do Accordion */}
            <div
              className={cn("p-0 text-xl text-white cursor-pointer", {
                "bg-green-500": activeIndex === index // Destaque o item ativo
              })}
              onClick={() => handleToggle(index)}
            >
              {item.title}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    s
            </div>

            {/* Conteúdo Animado */}
            <motion.div
              initial={{ height: 0, opacity: 0 }} // Inicia com altura 0 e opacidade 0
              animate={{
                height: activeIndex === index ? 'auto' : 0,  // Abre ou fecha com transição de altura
                opacity: activeIndex === index ? 1 : 0, // Altera a opacidade suavemente
              }}
              transition={{
                duration: 0.4, // Duração da animação
                ease: 'easeInOut', // Tipo de transição suave
              }}
              className="col-span-5 col-start-3 overflow-hidden text-white "
            >
              <div className="p-3 text-sm">{item.children}</div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedAccordionBellowHeader;
