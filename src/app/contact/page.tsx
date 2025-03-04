import GlobalHero from '@/components/global-hero/global-hero';
import { images } from '@/assets';
import ContactComponent from './components/contact-component';
import { generateMetadata } from '@/infra/metadata';


export const metadata = generateMetadata({
	title: 'Contate nos | Instituto Superior São Martinho de Lima | ISPSML',
	description: 'Get in touch with Instituto Superior São Martinho de Lima (ISPSML) for any inquiries or support. We are here to help you.',
});

const Contact = () => {
	return (
		<div>
			<GlobalHero
				title="Como podepmos ajudar ?"
				subtitle="Contante o ISPSML"
				className="d-h"
				bottomBG="dark"
				position='top'
				bgImage={images.extrasImgs.extra_34.src}
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
