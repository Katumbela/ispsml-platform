'use client';

import GlobalHero from '@/components/global-hero/global-hero';
import { images } from '@/assets';
import ContactComponent from './components/contact-component';

const Contact = () => {
	return (
		<div>
			<GlobalHero
				title="Como podemos ajudar ?"
				subtitle="Contante o ISPSML"
				className="h-[500px] 2xl:h-[650px]"
				bottomBG="dark"
				bgImage={images.backgrounds.bg_support.src}
			/>
			<main className="containers">
				<ContactComponent />

				<br />
				<br />
			</main>
		</div>
	);
};

export default Contact;
