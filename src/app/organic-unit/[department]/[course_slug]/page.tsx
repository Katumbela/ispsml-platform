/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import YearAccordion from '../../components/YearAccordion';
import { HeroCourseDetail } from '../../components/hero-course-details';
import { ShortDescCourse } from '../../components/short_description_course';
import { FaAngleRight, FaDownload } from 'react-icons/fa6';
// import QuickLinks from '@/components/QuickLinks';
import { routes } from '@/infra/routes.vars';
import { ICourse, IDepartment } from '@/infra/interfaces/course.interface';
import { getCourseBySlug, getDepartmentBySlug } from '@/services/dep.service';
// import { RolesData } from '@/infra/data/roles-data';

export default function CourseDetailsPage() {
  const { department: dep_slug, course_slug } = useParams();
  // const departmentData = coursesData[department as string];

  // const course = typeof department === 'string' ? coursesData[department]?.courses.find(c => c.slug === course_slug) : null;
  const [openYear, setOpenYear] = useState<number | null>(null);

  const [department, setDepartment] = useState<IDepartment | null>(null);

  const [course, setCourse] = useState<ICourse | null>(null);

  useEffect(() => {
    const fetchDep = async () => {
      const cour = await getCourseBySlug(course_slug as string || "");
      const dep = await getDepartmentBySlug(dep_slug as string || "");
      setDepartment(dep);
      setCourse(cour);

    };
    fetchDep();
  }, [course_slug, dep_slug]);


  if (!course) {
    return <div>Curso não encontrado</div>;
  }

  const toggleYear = (year: number) => {
    setOpenYear(openYear === year ? null : year);
  };


  // function getCourseTeachers(courseId: string) {
  //   const course = coursesData.find((course: any) => course.id === courseId)
  //   if (course) {
  //       return course.teachers.map((teacherId: any) => RolesData.find(role => role.id === teacherId))
  //   }
  //   return []
  // }

  // // Exemplo de uso
  // const courseTeachers = getCourseTeachers("curso-biologia")
  // console.log(courseTeachers)

  return (
    <>
      <head>
        <title>{course.course} | ISPSML</title>
        <meta name="description" content={`Saiba mais sobre o curso de ${course.course} na ISPSML.`} />
        <meta name="keywords" content={`${course.course}, ISPSML, cursos`} />
      </head>
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
                  <div className="w-3 h-3 my-auto border-2 rounded-full border-primary/70"></div>
                  <p>{item.trim()}</p>
                </div>
              ))}
          </div>
          <div className="p">
            <h2 className="title-course">Perfil de Saída</h2>
            {/* {course.outProfile?.map((item: string, index: number) => ( */}
            {course.outProfile
              ?.split('*')
              .filter(Boolean)
              .map((item: string, index: number) => (
                <div key={index} className="flex gap-2 benefit-item">
                  <div className="w-3 h-3 my-auto border-2 rounded-full border-primary/70"></div>
                  <p>{item.trim()}</p>
                </div>
              ))}
            {/* ))} */}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
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

      <br />
      <br />

      <div className="flex justify-between containers">
        <div className="flex justify-between w-full ">
          <div className="w-full my-auto">
            <h2 className="text-2xl font-semibold">
              Baixar Plano Curricular de {course.course}
            </h2>
          </div>
          <div className="w-full my-auto">
            <FaDownload className='my-auto text-xl' />
          </div>
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