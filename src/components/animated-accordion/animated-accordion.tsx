import React, { useState } from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';

interface AccordionItemProps {
	title: React.ReactNode;
	children: React.ReactNode;
}

interface AccordionProps {
	items: AccordionItemProps[];
	columns?: number; // Permite definir o número de colunas manualmente
}

const AnimatedAccordion: React.FC<AccordionProps> = ({ items, columns }) => {
	const [ activeIndex, setActiveIndex ] = useState<number | null>(null);

	const handleToggle = (index: number) => {
		setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	// Define o número de colunas baseado nos itens ou na propriedade `columns`
	const gridColumns = columns || items.length;

	return (
		<div className="w-full">
			{/* Grid para os cabeçalhos */}
			<div
				className={`grid md:grid-cols-${gridColumns} grid-cols-1`} // Responsivo: 1 coluna no mobile
			>
				{items.map((item, index) => (
					<div key={index} className="w-full">
						{/* Cabeçalho do Accordion */}
						<div
							className={cn("p-4 text-xl text-white  cursor-pointer", {"bg-green-500": activeIndex === index})}
							onClick={() => handleToggle(index)}
						>
							{item.title}
						</div>

						{/* Conteúdo Animado - Deve ocupar 100vw */}
						<motion.div
							initial={{ height: 0 }}
							animate={{
								height: activeIndex === index ? 'auto' : 0,
								opacity: activeIndex === index ? 1 : 0
							}}
							transition={{
								duration: 0.3,
								ease: 'easeInOut'
							}}
							className={`overflow-hidden bg-black`}
							style={{
								position: activeIndex === index ? 'absolute' : 'relative',
								left: activeIndex === index ? 0 : 'unset',
								width: activeIndex === index ? '100vw' : 'auto',
								zIndex: activeIndex === index ? 10 : 1
							}}
						>
							<div className="p-4">{item.children}</div>
						</motion.div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AnimatedAccordion;
