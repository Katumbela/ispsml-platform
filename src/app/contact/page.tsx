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
				className="d-h"
				bottomBG="dark"
				position='top'
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
