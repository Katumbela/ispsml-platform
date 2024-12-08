/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';


import { images } from '@/assets'; 
import 'react-toastify/dist/ReactToastify.css';
// import AnimatedAccordion from '@/components/animated-accordion/animated-accordion';
import GlobalHero from '@/components/global-hero/global-hero';

export default function SocialResp() {
   
	return (
		<>
    <head>
      <title>Responsabilidade Social | Instituto Superior Politécnico São Martinho de Lima</title>
    </head>
			<GlobalHero bottomBG='dark' title='Responsalibidade Social' bgImage={images.backgrounds.bg_woman_bg_flower.src} className='h-[600px]' />


<section className="py-20 containers">
<h2 className="title">A Nossa Responsabilidade Social</h2>


</section>
 		</>
	);
}
