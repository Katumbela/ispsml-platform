"use client"

import GlobalHero from '@/components/global-hero/global-hero';
import Navbar from '../../components/Navbar';
import { images } from '@/assets';
import ContactComponent from './components/contact-component';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <GlobalHero title='Como podemos ajudar ?' subtitle='Contante o ISPML' className='h-[500px] 2xl:h-[650px]' bottomBG='dark' bgImage={images.backgrounds.bg_support.src}/>
      <main className="container">
      
      <ContactComponent />

<br />
<br />
      
      </main>
<Footer />
    </div>
  );
};

export default Contact;
