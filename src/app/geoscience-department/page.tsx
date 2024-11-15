"use client"

import Navbar from '../../components/Navbar';
import Footer from '@/components/Footer';
import QuickLinks from '@/components/QuickLinks';
import { HeroCourseDetail } from '../course/components/hero-course-details';
import { images } from '@/assets'; 
import Head from 'next/head';
import { coursesData } from '@/infra/data/courses-data';
import { CardCourseComponent } from '../ispml-det/components/card-course-component';
import { departments } from '@/infra/global.vars';

const GeoScienceDepartment = () => {
   
  return (
    <>
      <Head>
        <title>GeoCiências | ISPSML</title>
        <meta name="description" content="Saiba mais sobre o departamento de GeoCiências na ISPSML." />
        <meta name="keywords" content="GeoCiências, ISPSML, cursos" />
        <meta name="author" content="ISPSML" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="GeoCiências | ISPSML" />
        <meta property="og:description" content="Saiba mais sobre o departamento de GeoCiências na ISPSML." />
        <meta property="og:image" content={images.departImages.geoscience.src} />
        <meta property="og:url" content="https://www.ispsml.com/geoscience-department" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <HeroCourseDetail bg_image={images.departImages.geoscience} title="GeoCiências" />
      <main className="container my-8">
        <p className="mt-4">
          O Departamento de GeoCiências da nossa instituição é dedicado a promover o conhecimento e a pesquisa nas áreas de ciências da terra. Nossos programas são projetados para equipar os alunos com as habilidades e a expertise necessárias para se destacar em diversas áreas, como geologia, geofísica, geografia, e mais. Oferecemos uma variedade de cursos e oportunidades de pesquisa que cobrem várias disciplinas. Nossos membros do corpo docente são especialistas renomados em suas áreas, comprometidos em fornecer educação de alta qualidade e promover um ambiente de aprendizado colaborativo. Junte-se a nós para fazer parte de uma comunidade que está moldando o futuro das ciências da terra.
        </p>
      </main>
      <div className="container">
        <h2 className='mb-6 text-3xl font-bold'>Cursos</h2>
        <div className="grid gap-1.5 grid-cols-12">
          {coursesData.geoscience.courses.map((course, i) => (
            <CardCourseComponent key={i} course={course} department={departments.GEOSCIENCE_DEPARTMENT} />
          ))}
          
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <QuickLinks />
      <Footer />
    </>
  );
};

export default GeoScienceDepartment;