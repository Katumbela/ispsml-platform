import { images } from '@/assets';
import { generateMetadata } from '@/infra/metadata';
import Image from 'next/image';


export const metadata = generateMetadata({
	title: ' Instituto Superior São Martinho de Lima | ISPSML',
	description: 'Estamos a criar um website que vai proporcionar uma experiência ainda melhor para todos.',
});

export default function Home() {

	return (
		<div className="fixed top-0 bottom-0 left-0 right-0 min-h-screen z-[10000000000000000] flex items-center justify-center bg-gradient-to-b from-blue-700 to-blue-900 text-white">
			{/* Background Animation */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute w-3 h-3 bg-yellow-400 rounded-full top-10 left-20 animate-pulse"></div>
				<div className="absolute w-2 h-2 bg-white rounded-full top-40 left-1/3 animate-ping"></div>
				<div className="absolute w-3 h-3 bg-white rounded-full bottom-20 right-40 animate-pulse"></div>
			</div>

			<div className="flex flex-col md:flex-row max-w-5xl justify-center gap-6 px-4 md:px-0">
				{/* Main Content */}
				<div className="relative z-10 text-start w-full md:w-1/2">
					<h1 className="text-4xl md:text-6xl font-bold mb-4">Novo website a caminho !</h1>
					<p className="text-base md:text-lg mb-6">Estamos a criar um website que vai proporcionar uma <strong>experiência ainda melhor</strong> para todos. Para qualquer dúvida ou mais informações, entre em contacto conosco:</p>

					<div className="space-y-3">
						<p className="flex items-start justify-start space-x-2">
							📞 <span>+244 939 072 374; +244 939 072 373 </span>
						</p>
						<p className="flex items-center justify-start space-x-2">
							📧 <span>secretaria@ispsml.ao</span>
						</p>
						<p className="flex items-center justify-start space-x-2">
							📍 <span>Via expressa, Pedonal do cemitério do Benfica</span>
						</p>
						<p className="flex items-center justify-start space-x-2">
							🌐 <span>Siga-nos no Facebook, Instagram e LinkedIn!</span>
						</p>
					</div>
				</div>

				{/* Logo */}
				<div className="relative w-full md:w-1/2 h-64 md:h-auto">
					<Image
						src={images.logos.logo1}
						alt="Logo ISPSML"
						layout='fill'
						objectFit='contain'
						className="rounded-full"
					/>
				</div>
			</div>
		</div>
	);
}
