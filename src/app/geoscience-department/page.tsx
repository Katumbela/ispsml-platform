"use client"

import Navbar from '../../components/Navbar';
import Footer from '@/components/Footer';
import QuickLinks from '@/components/QuickLinks';
import { HeroCourseDetail } from '../course/components/hero-course-details';
import { images } from '@/assets';
import { useState } from 'react';
import Head from 'next/head';
import { coursesData } from '@/infra/data/courses-data';
import { CardCourseComponent } from '../ispml-det/components/card-course-component';

const GeoScienceDepartment = () => {
  const [openYear, setOpenYear] = useState<number | null>(null);

  const toggleYear = (year: number) => {
    setOpenYear(openYear === year ? null : year);
  };

  return (
    <div>
      <Head>
        <title>GeoCiências | ISPSML</title>
        <meta name="description" content="Saiba mais sobre o departamento de GeoCiências na ISPSML." />
        <meta name="keywords" content="GeoCiências, ISPSML, cursos" />
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
            <CardCourseComponent key={i} course={course} department="geoscience" />
          ))}
          {coursesData.geoscience.courses.map((course, i) => (
            course.additional_courses?.map((additionalCourse, j) => (
              <CardCourseComponent key={`${i}-${j}`} course={additionalCourse} department="geoscience" />
            ))
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

export default GeoScienceDepartment;