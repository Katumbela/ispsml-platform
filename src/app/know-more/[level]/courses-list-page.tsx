/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import GlobalHero from '@/components/global-hero/global-hero';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';
import { ICourse } from '@/infra/interfaces/course.interface';
// import ConferenceComponent from '@/app/organic-unit/components/conference-component';
import { routes } from '@/infra/routes.vars';
import { getAllCourses } from '@/services/course.service';
import { FaExclamationCircle } from 'react-icons/fa';
import { useQuery } from 'react-query';
import { env } from '@/infra/env';

const CourseList = ({ courses, loading }: { courses: { course: ICourse }[], loading: boolean }) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
    {loading ? (
      Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="relative card h-[19rem] bg-gray-200 animate-pulse"></div>
      ))
    ) : courses.length > 0 ? (
      courses.map(({ course }, index) => (
        <div key={index} className="relative cursor-pointer card h-[19rem] group">
          <Image
            alt=""
            src={course.course_cover}
            layout="fill"
            blurDataURL={env.BLUR_IMAGE}
            placeholder="blur"
            objectFit="cover"
            className="inset-0 transition-opacity duration-300 group-hover:opacity-75"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white transition-opacity duration-300 bg-black bg-opacity-30 group-hover:bg-opacity-60">
            <h3 className="text-2xl font-semibold">{course.course}</h3>
            <a
              href={`${routes.ORGANIC_UNIT_ROUTE}/${course.department?.slug}/${course.slug}`}
              className="p-1.5 mt-3 -mb-4 transition-opacity duration-300 border-2 opacity-0 group-hover:opacity-100"
            >
              <FaArrowRight className="text-3xl" />
            </a>
          </div>
        </div>
      ))
    ) : (
      <div className='mx-auto text-center w-full col-span-full my-10'>
        <FaExclamationCircle className='text-4xl mx-auto mb-6 text-primary' />
        <p className="col-span-full text-center text-gray-500">Nenhum curso encontrado.</p>
      </div>
    )}
  </div>
);

export default function CustomKnowMore({ level }: { level: string }) {
  // const { level } = useParams() as { level: string };
  // const [departments, setDepartments] = useState<IDepartment[]>([]);
  const { data: courses, isLoading: loading } = useQuery(['courses', level], async () => {
    const allCourses = await getAllCourses();
    return allCourses.filter(course => course.level === level).map(course => ({ course, department: course.department?.slug || '' }));
  });

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
          <CourseList courses={courses || []} loading={loading} />
        </section>
      </section>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
