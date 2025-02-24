/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import GlobalHero from '@/components/global-hero/global-hero';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';
import { ICourse } from '@/infra/interfaces/course.interface';
// import ConferenceComponent from '@/app/organic-unit/components/conference-component';
import { routes } from '@/infra/routes.vars';
import { useEffect, useState } from 'react';
import { getDepartments } from '@/services/dep.service';

const CourseList = ({ courses }: { courses: { course: ICourse, department: string }[] }) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
    {courses.map(({ course, department }, index) => (
      <div key={index} className="relative cursor-pointer card h-[19rem] group">
        <Image
          alt=""
          src={course.course_cover}
          layout="fill"
          objectFit="cover"
          className="inset-0 transition-opacity duration-300 group-hover:opacity-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white transition-opacity duration-300 bg-black bg-opacity-30 group-hover:bg-opacity-60">
          <h3 className="text-2xl font-semibold">{course.course}</h3>
          <a
            href={`${routes.ORGANIC_UNIT_ROUTE}/${department}/${course.slug}`}
            className="p-1.5 mt-3 -mb-4 transition-opacity duration-300 border-2 opacity-0 group-hover:opacity-100"
          >
            <FaArrowRight className="text-3xl" />
          </a>
        </div>
      </div>
    ))}
  </div>
);

export default function CustomKnowMore({ level }: { level: string }) {
  // const { level } = useParams() as { level: string };
  // const [departments, setDepartments] = useState<IDepartment[]>([]);
  const [courses, setCourses] = useState<{ course: ICourse, department: string }[]>([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      const deps = await getDepartments();

      // Extraindo cursos dos departamentos e filtrando pelo nível
      const filteredCourses = deps.flatMap(dep =>
        dep.courses
          ?.filter(course => course.level == level)
          .map(course => ({ course, department: dep.slug })) || []
      );
      console.log(filteredCourses)
      setCourses(filteredCourses);
    };

    fetchDepartments();
  }, []);

  const getTitleByLevel = (level: string) => {
    switch (level) {
      case "undergraduation":
        return "Cursos de Licenciatura";
      case "professional":
        return "Cursos Profissionais";
      case "masters":
        return "Cursos de Mestrado";
      case "preparatory":
        return "Cursos Preparatórios";
      default:
        return "";
    }
  };

  const title = getTitleByLevel(level as string);
  // const courses = departments
  //   .flatMap((dep) =>
  //     dep.courses
  //       ?.filter((course) => course.level === level) // Filtra cursos pelo nível
  //       .map((course) => ({ course, department: dep.slug })) || []
  //   );

  return (
    <div>
      <GlobalHero titleClassName="text-5xl mb-5" bottomBG="none" className="h-[500px]" title={title || ""}>
        <p className="max-w-3xl text-lg">
          Explore nossos cursos disponíveis e encontre a formação ideal para você.
        </p>
      </GlobalHero>
      <br />

      <section className="containers">
        <h2 className="text-4xl font-semibold">
          {level === "undergraduation"
            ? "Comece a Transformar o Seu Futuro"
            : level === "professional"
              ? "Eleve sua Carreira com Cursos Profissionais"
              : level === "masters"
                ? "Aprofunde o Seu Conhecimento com Nossos Mestrados"
                : level === "preparatory"
                  ? "Prepare-se para o Sucesso com Nossos Cursos Preparatórios"
                  : ""}
        </h2>
        <p className="my-4 text-gray-600 uppercase">
          Descubra a Nossa Oferta Educativa para <b> {title}</b>
        </p>
        <p className="text-gray-500 my-7">
          No ISPSML construímos um futuro mais humano, inovador e centrado no bem-estar
          de nossa comunidade, tendo como meta formar líderes capazes de enfrentar com sucesso e valores os
          desafios a que se enfrentam dia a dia, gerando assim um impacto positivo que ultrapassa ao resto da
          comunidade.
        </p>

        <section id="courses">
          <CourseList courses={courses} />
        </section>
      </section>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
