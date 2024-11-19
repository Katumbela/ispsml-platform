"use client"

import Navbar from '../components/Navbar'; 
import Hero from '@/components/Hero'; 
import QuickLinks from '@/components/QuickLinks';
import Footer from '@/components/Footer';
import { StudyOffer } from '@/components/sections/study-offer/study-offer';
import { AdmissionsSection } from '@/components/sections/admissions-section/admissions-section';
import HoverCard from '@/components/hover-card/hover-card';
import { images } from '@/assets';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <Hero />
        <StudyOffer />
        <br />
        <AdmissionsSection />
        <section className="py-20 ">
         <div className="flex gap-2">
         <HoverCard
            bgColor="bg-primary"
            hoverBgColor="bg-primary"
            title="Profesores Investigadores"
            className='h-[400px] 2xl:h-[600px]'
            bgImage={images.backgrounds.bg_investigator_1.src}
          >
            <div className="containers px-6 text-lg text-white">
              LA CIENCIA CON SOLUCIONES ACCIONABLES
              <p className="text-sm">
                Conoce el nuevo enfoque de investigación en el Tecnológico de Monterrey. Descubre los tres institutos y los diferentes Core Labs que cambiarán la forma de realizar investigación en México.
              </p>
              <br />
              <a href="#" className="font-bold underline">Saber mais</a>
            </div>
          </HoverCard>
         <HoverCard
            bgImage={images.backgrounds.bg_ciencia_estudo_2.src}
            className='h-[400px] 2xl:h-[600px]'
            hoverBgColor="bg-red-500"
            title="Laboratórios de ciencias e Medicina"
          >
            <div className="text-lg text-white">
              LA CIENCIA CON SOLUCIONES ACCIONABLES
              <p className="text-sm">
                Conoce el nuevo enfoque de investigación en el Tecnológico de Monterrey. Descubre los tres institutos y los diferentes Core Labs que cambiarán la forma de realizar investigación en México.
              </p>
            </div>
          </HoverCard>
         </div>

        </section>
        <QuickLinks />
        <Footer />
      </div>
    </div>
  );
}
