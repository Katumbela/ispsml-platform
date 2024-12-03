'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
// import { routes } from '@/infra/routes.vars';
// import { coursesData } from '@/infra/data/courses-data';
import GlobalHero from '@/components/global-hero/global-hero';
import { images } from '@/assets';

// const departments = Object.entries(coursesData).map(([key, value]) => ({
//   link: `${routes.ORGANIC_UNIT_ROUTE}/${key}`,
//   name: `Departamento de ${key.charAt(0).toUpperCase() + key.slice(1)}`,
//   cover: value.department_cover
// }));

export default function OrganicUnitPage() {
  return (
    <div>
      <Navbar />
      <GlobalHero bgImage={images.backgrounds.bg_prepa_tec.src} titleClassName='text-6xl' title='Inscrições e Bolsas' className='h-[600px] 2xl:h-[700px] ' />
      <br />
      
      <Footer />
    </div>
  );
}
