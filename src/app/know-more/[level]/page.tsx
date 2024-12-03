/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { images } from '@/assets';
import GlobalHero from '@/components/global-hero/global-hero';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { FaAngleRight, FaArrowRight, FaCheck, FaChessBoard, FaMedal, FaUserGraduate } from 'react-icons/fa6';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { coursesData } from '@/infra/data/courses-data';
import { ICourse } from '@/infra/interfaces/course.interface';
import ConferenceComponent from '@/app/organic-unit/components/conference-component';
import { routes } from '@/infra/routes.vars';

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

export default function CustomKnowMore() {
  const { level } = useParams();
  console.log(level);

  const getTitleByLevel = (level: string) => {
    switch (level) {
      case 'undergraduate':
        return 'Cursos de Licenciatura';
      case 'professional':
        return 'Cursos Profissionais';
      case 'masters':
        return 'Cursos de Mestrado';
      case 'preparatory':
        return 'Cursos Preparatórios';
      default:
        return '';
    }
  };

  const getBackgroundByLevel = (level: string) => {
    switch (level) {
      case 'undergraduate':
        return images.backgrounds.bg_school_3.src;
      case 'professional':
        return images.backgrounds.bg_students_hands_up.src;
      case 'masters':
        return images.backgrounds.bg_master_2.src;
      case 'preparatory':
        return images.backgrounds.bg_prepa_tec.src;
      default:
        return images.backgrounds.bg_research_2.src;
    }
  };

  const getContentByLevel = (level: string) => {
    switch (level) {
      case 'undergraduate':
        return (
          <div>
          <p className="max-w-3xl text-lg">
            Os cursos de graduação oferecem uma base sólida em diversas áreas do conhecimento, preparando os
            alunos para o mercado de trabalho e para a vida acadêmica.
          </p>
          <button onClick={() => window.location.href = "#courses"} className="px-4 py-2 text-white bg-red-500 cta-button">
              <span className="my-auto">Ver cursos</span>
              <FaAngleRight className="my-auto" />
            </button>
          </div>
        );
      case 'professional':
        return (
          <div>
            <p className="max-w-3xl text-lg">
              Os cursos profissionais são projetados para fornecer habilidades práticas e conhecimentos
              específicos que ajudam a avançar na carreira escolhida.
            </p>
            <button className="px-4 py-2 text-white bg-red-500 cta-button">
              <span className="my-auto">Inscreva-se Agora</span>
              <FaAngleRight className="my-auto" />
            </button>
          </div>
        );
      case 'masters':
        return (
          <p className="max-w-3xl text-lg">
            Os cursos de mestrado são destinados a aprofundar o conhecimento em uma área específica,
            proporcionando uma formação avançada e especializada.
          </p>
        );
      case 'preparatory':
        return (
          <div>
            <p className="max-w-3xl text-lg">
              Os cursos preparatórios são ideais para quem deseja se preparar para exames importantes ou
              adquirir conhecimentos básicos em uma nova área.
            </p>
            <button className="px-4 py-2 text-white bg-green-500 cta-button">Inscreva-se Agora</button>
          </div>
        );
      default:
        return (
          <p>
            Explore nossos diversos cursos e encontre o que melhor se adapta às suas necessidades e
            objetivos.
          </p>
        );
    }
  };

  const title = getTitleByLevel(level as string);
  const bgImage = getBackgroundByLevel(level as string);
  const content = getContentByLevel(level as string);

  const courses = level === 'undergraduate'
    ? Object.entries(coursesData)
        .filter(([key]) => !['masters', 'preparatory', 'professional'].includes(key))
        .flatMap(([department, data]) => data.courses.map(course => ({ course, department: department as string })))
    : coursesData[level as string]?.courses.map(course => ({ course, department: level as string })) || [];

  return (
    <div> 

      <GlobalHero
        titleClassName="text-5xl mb-5"
        bottomBG="none"
        className="h-[500px]"
        bgImage={bgImage}
        title={title || ''}
      >
        {content}
      </GlobalHero>
      <br />
      <section className="containers">
        <h2 className="text-4xl font-semibold">Conheça os grandes benefícios de estudar no ISPSML</h2>
      </section>
      <br />
      <br />
      <br />
      <section>
        <div className="flex text-white bg-primary">
          <div className="relative w-2/4 ">
            <Image
              alt=""
              layout="fill"
              objectFit="cover"
              src={images.backgrounds.bg_vertical_education_2.src}
            />
          </div>
          <div className="w-full p-16">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start justify-start gap-2">
                <FaCheck className="mt-0 text-7xl" />
                <p className="text-xs font-light">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae porro quis asperiores
                  enim, reiciendis repudiandae sapiente quaerat harum quia ducimus laborum accusamus
                  quod
                </p>
              </div>
              <div className="flex items-start justify-start gap-2">
                <FaChessBoard className="mt-0 text-7xl" />
                <p className="text-xs font-light">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae porro quis asperiores
                  enim, reiciendis repudiandae sapiente quaerat harum quia ducimus laborum accusamus
                  quod
                </p>
              </div>
              <div className="flex items-start justify-start gap-2">
                <FaMedal className="mt-0 text-7xl" />
                <p className="text-xs font-light">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae porro quis asperiores
                  enim, reiciendis repudiandae sapiente quaerat harum quia ducimus laborum accusamus
                  quod
                </p>
              </div>
              <div className="flex items-start justify-start gap-2">
                <FaUserGraduate className="mt-0 text-7xl" />
                <p className="text-xs font-light">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae porro quis asperiores
                  enim, reiciendis repudiandae sapiente quaerat harum quia ducimus laborum accusamus
                  quod
                </p>
              </div>
              <div className="flex items-start justify-start gap-2">
                <FaChalkboardTeacher className="mt-0 text-7xl" />
                <p className="text-xs font-light">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae porro quis asperiores
                  enim, reiciendis repudiandae sapiente quaerat harum quia ducimus laborum accusamus
                  quod
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <section className="containers">
        <h2 className="text-4xl font-semibold">
           {
            level === 'undergraduate' ?
        " Comece a Transformar o Seu Futuro" :
        level === 'professional' ? "Eleve sua Carreira com Cursos Profissionais" :
        level === 'masters' ? "Aprofunde o Seu Conhecimento com Nossos Mestrados" :
        level === 'preparatory' ? "Prepare-se para o Sucesso com Nossos Cursos Preparatórios" : ""
           }
            </h2>
        <p className="my-4 text-gray-600 uppercase">Descubra a Nossa Oferta Educativa para {title}</p>
        <p className="text-gray-500 my-7">
          No ISPSML construímos um futuro mais humano, inovador e centrado no bem-estar
          de nossa comunidade, tendo como meta formar líderes capazes de enfrentar com sucesso e valores os
          desafios a que se enfrentam dia a dia, gerando assim um impacto positivo que ultrapassa ao resto da
          comunidade.
        </p>
        <br />
        <br />
        <br />
<section id="courses">
  
        {/* Lista de cursos */}
        <CourseList courses={courses} />
</section>
      </section>
      <br />
      <br />
      <br />
      <br />
      <ConferenceComponent />
      <br />
      <br />
    </div>
  );
}
