import { images } from '@/assets';
import Image from 'next/image';

export default function Custom404() {
	return (
		<div className="grid h-screen" style={{ textAlign: 'center', padding: '50px' }}>
			<div className="my-auto">
				<center>
					<Image alt="" src={images.logos.logo1} className="h-[6em] w-[7em]" />
				</center>
				<br />
				<h1 className="text-4xl font-bold text-primary">404 - Página Não Encontrada</h1>
				<p className="mt-4 font-light">Desculpe, a página que você está procurando não existe.</p>
				<br />
				<br />
				<a className="px-5 py-4 text-white transition-opacity hover:bg-primary/90 bg-primary" href="/">
					Página inicial
				</a>
				<br />
				<br />
				{/* <center>
					<Image alt="" src={images.svgs.not_found_2} className="h-[10em] w-[11em]" />
				</center> */}
			</div>
		</div>
	);
}

