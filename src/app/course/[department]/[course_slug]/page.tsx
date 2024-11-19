"use client"

import { useParams } from 'next/navigation';
import { coursesData } from '@/infra/data/courses-data';
import { useState } from 'react';
import YearAccordion from '../../components/YearAccordion';
import Navbar from '@/components/Navbar';
import { HeroCourseDetail } from '../../components/hero-course-details';
import { images } from '@/assets';
import { ShortDescCourse } from '../../components/short_description_course';
import Footer from '@/components/Footer';
import { FaDownload } from 'react-icons/fa6';
import QuickLinks from '@/components/QuickLinks';
import Head from 'next/head';

export default function CourseDetailsPage() {
  const { department, course_slug } = useParams();
  const course = typeof department === 'string' ? coursesData[department]?.courses.find(c => c.slug === course_slug) : null;
  const [openYear, setOpenYear] = useState<number | null>(null);

  if (!course) {
    return <div>Curso não encontrado</div>;
  }

  const toggleYear = (year: number) => {
    setOpenYear(openYear === year ? null : year);
  };

  return (
    <>
      <Head>
        <title>{course.course} | ISPSML</title>
        <meta name="description" content={`Saiba mais sobre o curso de ${course.course} na ISPSML.`} />
        <meta name="keywords" content={`${course.course}, ISPSML, cursos`} />
      </Head>
      <Navbar />
      <HeroCourseDetail course={course} bg_image={images.departImages.ciencias_sociais} title={course.course} />
      <ShortDescCourse course={course} />
      <br />
      <br />
      <br />
      <div className="containers">
        <h2 className='mb-6 text-3xl font-bold'>Benefícios do Programa</h2>
        <div className="grid grid-cols-2 gap-4">
            {course.benefits?.map((benefit: string, index: number) => (
            <div key={index} className="benefit-item">
              <p>{benefit}</p>
            </div>
            ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="containers">
        <h2 className='mb-6 text-3xl font-bold'>Plano Curricular</h2>
        <div className="relative grid grid-cols-2 gap-4">
          {course.years.map(year => (
            <YearAccordion
              key={year.year}
              year={year}
              isOpen={openYear === year.year}
              toggleYear={toggleYear}
            />
          ))}
        </div>
      </div>

      <br />
      <br />

      <a href='#' className="containers flex justify-between">
        <div className="w-full my-auto">
          <h2 className="text-2xl font-bold">
            Baixar Plano Curricular de {course.course}
          </h2>
        </div>
        <div className="w-full my-auto">
          <FaDownload className='my-auto text-xl' />
        </div>
      </a>
      <br />
      <br />
      <br />
      <QuickLinks />
      <Footer />
    </>
  );
};