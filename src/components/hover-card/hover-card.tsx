import { motion } from 'framer-motion';

interface HoverCardProps {
	bgColor?: string;
	bgImage?: string;
	hoverBgColor: string;
	title: string;
	children: React.ReactNode;
	className?: string;
}

const HoverCard: React.FC<HoverCardProps> = ({ bgColor, bgImage, className, hoverBgColor, title, children }) => {
	return (
		<motion.div
			className={`relative w-full grid h-64 ${bgColor} ${className} overflow-hidden cursor-pointer`}
			initial={{ opacity: 1 }}
			style={
				bgImage ? (
					{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center center' }
				) : (
					undefined
				)
			}
			whileHover={{ opacity: 1 }}
			transition={{ duration: 0.3 }}
		>
			{/* Gradiente de baixo para cima cobrindo apenas 50% */}
			<div className="absolute inset-x-0 bottom-0 flex items-end justify-start py-4 mt-auto h-1/2 bg-gradient-to-t from-black">
				<div className="container px-5">
					<h2 className="text-xl font-semibold text-white">{title}</h2>
				</div>
			</div>

			{/* Hover Content */}
			<motion.div
				className={`absolute inset-0 flex items-center justify-center ${hoverBgColor} transition duration-300 ease-in-out opacity-0 hover:opacity-100`}
			>
				<div className="containers">{children}</div>
			</motion.div>
		</motion.div>
	);
};

export default HoverCard;

// <HoverCard
//   bgColor="bg-blue-500"
//   hoverBgColor="bg-red-500"
//   title="Profesores Investigadores"
// >
//   <div className="text-lg text-white">
//     LA CIENCIA CON SOLUCIONES ACCIONABLES
//     <p className="text-sm">
//       Conoce el nuevo enfoque de investigación en el Tecnológico de Monterrey. Descubre los tres institutos y los diferentes Core Labs que cambiarán la forma de realizar investigación en México.
//     </p>
//   </div>
// </HoverCard>
