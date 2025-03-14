/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from 'react';
import { useQuery } from 'react-query';
import YearAccordion from '../../components/YearAccordion';
import { HeroCourseDetail } from '../../components/hero-course-details';
import { ShortDescCourse } from '../../components/short_description_course';
import { FaAngleRight, FaCircleCheck } from 'react-icons/fa6';
// import QuickLinks from '@/components/QuickLinks';
import { routes } from '@/infra/routes.vars';
import { getDepartmentBySlug } from '@/services/dep.service';
import { getCourseBySlug } from '@/services/course.service';
// import { RolesData } from '@/infra/data/roles-data';

export default function CourseDetailsPage({ course_slug, department: dep_slug }: { department: string, course_slug: string }) {
  const [openYear, setOpenYear] = useState<number | null>(null);

  const { data: department, isLoading: isLoadingDep } = useQuery(['departmentSlug', dep_slug], () => getDepartmentBySlug(dep_slug));
  const { data: course, isLoading: isLoadingCourse } = useQuery(['courseSlug', course_slug], () => getCourseBySlug(course_slug));

  if (isLoadingDep || isLoadingCourse) {
    return (
      <>
        <div className="h-24 bg-gray-800" />
        <div className="p-4">
          <div className="h-[25vh] bg-gray-200 animate-pulse mb-4"></div>
          <div className="space-y-4">
            <div className="flex my-10 gap-10">
              <div className="h-[20vh] w-full bg-gray-200 animate-pulse"></div>
              <div className="h-[20vh] w-full bg-gray-200 animate-pulse"></div>
            </div>
            <div className="flex gap-5">
              <div className="w-full space-y-5">
                <div className="h-6 bg-gray-200 animate-pulse"></div>
                <div className="h-6 bg-gray-200 animate-pulse"></div>
              </div>
              <div className="w-full space-y-5">
                <div className="h-6 bg-gray-200 animate-pulse"></div>
                <div className="h-6 bg-gray-200 animate-pulse"></div>
              </div>
            </div>
          </div>
          <br /><br />
          <br /><br />
        </div>
      </>
    );
  }

  if (!course) {
    return <div>Curso não encontrado</div>;
  }

  const toggleYear = (year: number) => {
    setOpenYear(openYear === year ? null : year);
  };

  return (
    <>
      {/* <head>
        <title>{course.course} | ISPSML</title>
        <meta name="description" content={`Saiba mais sobre o curso de ${course.course} na ISPSML.`} />
        <meta name="keywords" content={`${course.course}, ISPSML, cursos`} />
      </head> */}
      <HeroCourseDetail departmentName={department?.name as string} department={department ?? undefined} course={course} bg_image={course.course_cover} title={course.course} />
      <ShortDescCourse course={course} />
      <br />
      <br />
      <br />
      <div className="containers">
        <div className="grid grid-cols-2 gap-4">
          <div className="p">
            <h2 className="title-course">Perfil de Entrada</h2>
            {course.entryProfile
              ?.split('*')
              .filter(Boolean)
              .map((item: string, index: number) => (
                <div key={index} className="flex gap-2 benefit-item">
                  <div className="p-1"><FaCircleCheck className='text-xs text-primary' /></div>
                  <p>{item.trim()}</p>
                </div>
              ))}
          </div>
          <div className="p flex flex-col">
            <h2 className="title-course">Perfil de Saída</h2>
            {course.outProfile
              ?.split('*')
              .filter(Boolean)
              .map((item: string, index: number) => (
                <div key={index} className="flex gap-2 benefit-item">
                  <div className="p-1"><FaCircleCheck className='text-xs text-primary' /></div>
                  <p>{item.trim()}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      {
        course.years &&
        <div className="containers">
          <h2 className='mb-6 text-3xl font-semibold'>Plano Curricular</h2>
          <div className="relative grid grid-cols-2 gap-4">
            {course.years?.map(year => (
              <YearAccordion
                key={year.year}
                year={year}
                isOpen={openYear === Number(year.year)}
                toggleYear={toggleYear}
              />
            ))}
          </div>
        </div>
      }

      <br />
      <br />

      <div className="flex justify-between containers">
        <div className="flex justify-between w-full ">
          {/* <div className="w-full my-auto">
            <h2 className="text-2xl font-semibold">
              Baixar Plano Curricular de {course.course}
            </h2>
          </div>
          <div className="w-full my-auto">
            <FaDownload className='my-auto text-xl' />
          </div> */}
        </div>
        <div className="flex justify-end w-full text-end ">
          <button onClick={() => window.location.href = routes.APPLY_ROUTE + "?course=" + course.course} className="flex gap-2 py-5 mt-10 text-white uppercase transition-all bg-black border-2 border-black px-7 hover:bg-white hover:text-black ">
            <span className="my-auto">Inscrever-se</span>
            <FaAngleRight className="my-auto" />
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
      {/* <QuickLinks />  */}
    </>
  );
};