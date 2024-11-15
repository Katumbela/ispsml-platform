"use client"

import Navbar from '../../components/Navbar';
import Footer from '@/components/Footer';
import QuickLinks from '@/components/QuickLinks';
import { HeroCourseDetail } from '../course/components/hero-course-details';
import { images } from '@/assets';
import { ShortDescCourse } from '../course/components/short_description_course';
import YearAccordion from '../course/components/YearAccordion';
import { useState } from 'react';
import Head from 'next/head';
import { coursesData } from '@/infra/data/courses-data';
import { CardCourseComponent } from '../ispml-det/components/card-course-component';

const CSADepartment = () => {
  const [openYear, setOpenYear] = useState<number | null>(null);

  const toggleYear = (year: number) => {
    setOpenYear(openYear === year ? null : year);
  };

  return (
    <div>
      <Head>
        <title>Ciências Sociais Aplicadas | ISPSML</title>
        <meta name="description" content="Saiba mais sobre o departamento de Ciências Sociais Aplicadas na ISPSML." />
        <meta name="keywords" content="Ciências Sociais Aplicadas, ISPSML, cursos" />
      </Head>
      <Navbar />
      <HeroCourseDetail bg_image={images.departImages.ciencias_sociais} title="Ciências Sociais Aplicadas" />
      <main className="container my-8">
        <p className="mt-4">
          O Departamento de Ciências Sociais Aplicadas da nossa instituição é dedicado a promover o conhecimento e a pesquisa nas áreas de ciências sociais. Nossos programas são projetados para equipar os alunos com as habilidades e a expertise necessárias para se destacar em diversas áreas, como administração, economia, direito, e mais. Oferecemos uma variedade de cursos e oportunidades de pesquisa que cobrem várias disciplinas. Nossos membros do corpo docente são especialistas renomados em suas áreas, comprometidos em fornecer educação de alta qualidade e promover um ambiente de aprendizado colaborativo. Junte-se a nós para fazer parte de uma comunidade que está moldando o futuro das ciências sociais aplicadas.
        </p>
      </main>
      <div className="container">
        <h2 className='mb-6 text-3xl font-bold'>Cursos</h2>
        <div className="grid gap-1.5 grid-cols-12">
          {coursesData.csa.courses.map((course, i ) => (
            <CardCourseComponent key={i} course={course} department="csa" />
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <QuickLinks />
      <Footer />
    </div>
  );
};

export default CSADepartment;
