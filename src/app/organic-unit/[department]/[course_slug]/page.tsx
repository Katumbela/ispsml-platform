"use client"

import { useParams } from 'next/navigation';
import { coursesData } from '@/infra/data/courses-data';
import { useState } from 'react';
import YearAccordion from '../../components/YearAccordion';
import Navbar from '@/components/Navbar';
import { HeroCourseDetail } from '../../components/hero-course-details';
import { ShortDescCourse } from '../../components/short_description_course';
import Footer from '@/components/Footer';
import { FaDownload } from 'react-icons/fa6';
import QuickLinks from '@/components/QuickLinks';

export default function CourseDetailsPage() {
  const { department, course_slug } = useParams();
	const departmentData = coursesData[department as string];
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
      <head>
        <title>{course.course} | ISPSML</title>
        <meta name="description" content={`Saiba mais sobre o curso de ${course.course} na ISPSML.`} />
        <meta name="keywords" content={`${course.course}, ISPSML, cursos`} />
      </head>
      <Navbar />
      <HeroCourseDetail departmentName={departmentData.name as string} department={department as string} course={course} bg_image={course.course_cover} title={course.course} />
      <ShortDescCourse course={course} />
      <br />
      <br />
      <br />
      <div className="containers">
        <h2 className='mb-6 text-3xl font-semibold'>Benefícios do Programa</h2>
        <div className="grid grid-cols-2 gap-4">
            {course.benefits?.map((benefit: string, index: number) => (
            <div key={index} className="flex gap-2 benefit-item">
             <div className="w-3 h-3 my-auto border-2 rounded-full border-primary/70"></div>  <p>{benefit}</p>
            </div>
            ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="containers">
        <h2 className='mb-6 text-3xl font-semibold'>Plano Curricular</h2>
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

      <a href='#' className="flex justify-between containers">
        <div className="w-full my-auto">
          <h2 className="text-2xl font-semibold">
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