'use client';

import GlobalHero from '@/components/global-hero/global-hero';
import { images } from '@/assets';
import { FaCheck } from 'react-icons/fa6';
import Image from 'next/image';

const MissionVisionValues = () => {
  return (
    <>
      <head>
        <title>Missão, Visão e Valores - ISPSML</title>
      </head>

      <GlobalHero
        bgImage={images.extrasImgs.extra_16.src}
        bottomBG="dark"
        title={'Missão, Visão e Valores'}
        position='top'
        className="d-h"
      />

      <div className="py-8 -mt-2 2xl:py-14 bg-primary">
        <div className="containers">
          <p className="text-white text-md max-w-[83vw]">
            Conheça os princípios fundamentais que norteiam a nossa instituição e definem quem somos.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="containers">
          <div className="grid gap-12 md:grid-cols-2">
            <div className='my-auto'>
              <h2 className="mb-6 text-3xl font-bold text-primary lg:text-4xl">Nossa Missão</h2>
              <p className="mb-6 text-lg text-gray-700">
                Formar profissionais altamente qualificados através de um ensino de excelência, promovendo a inovação, a pesquisa e a extensão, contribuindo para o desenvolvimento sustentável de Angola e do continente africano.
              </p>
              <p className="text-lg text-gray-700">
                Comprometemo-nos a oferecer uma educação superior de qualidade que valorize a ética, a cidadania e a responsabilidade social, formando líderes capazes de transformar positivamente suas comunidades e o mundo.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] overflow-hidden shadow-xl">
              <Image 
                src={images.bgsSchool.bg_school_28.src} 
                alt="Estudantes do ISPSML" 
                layout="fill" 
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="containers">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1 relative h-[300px] md:h-[400px] overflow-hidden shadow-xl">
              <Image 
                src={images.bgsSchool.bg_school_23.src} 
                alt="Campus ISPSML" 
                layout="fill" 
                objectFit="cover"
              />
            </div>
            <div className="order-1 md:order-2 my-auto">
              <h2 className="mb-6 text-3xl font-bold text-primary lg:text-4xl">Nossa Visão</h2>
              <p className="mb-6 text-lg text-gray-700">
                Ser uma instituição de referência em Angola e na região subsaariana, reconhecida pela excelência no ensino, pela inovação na pesquisa e pelo impacto transformador na sociedade.
              </p>
              <p className="text-lg text-gray-700">
                Almejamos ser uma comunidade acadêmica inclusiva e diversificada, comprometida com a produção e disseminação do conhecimento, formando profissionais que contribuam para o desenvolvimento sustentável e para a construção de uma sociedade mais justa e equitativa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="containers">
          <h2 className="mb-10 text-3xl font-bold text-center text-primary lg:text-4xl">Nossos Valores</h2>
          <div className="grid container max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 transition-all bg-white rounded-lg shadow-md hover:shadow-xl">
              <div className="flex items-center mb-4">
                <div className="p-3 mr-4 text-white bg-primary rounded-full">
                  <FaCheck />
                </div>
                <h3 className="text-xl font-semibold">Excelência Acadêmica</h3>
              </div>
              <p className="text-gray-600">
                Comprometimento com os mais altos padrões de qualidade no ensino, na pesquisa e na extensão, buscando constantemente a melhoria e a inovação.
              </p>
            </div>
            
            <div className="p-6 transition-all bg-white rounded-lg shadow-md hover:shadow-xl">
              <div className="flex items-center mb-4">
                <div className="p-3 mr-4 text-white bg-primary rounded-full">
                  <FaCheck />
                </div>
                <h3 className="text-xl font-semibold">Ética e Integridade</h3>
              </div>
              <p className="text-gray-600">
                Conduta baseada em princípios éticos e morais, promovendo a honestidade, a transparência e o respeito em todas as relações e atividades institucionais.
              </p>
            </div>
            
            <div className="p-6 transition-all bg-white rounded-lg shadow-md hover:shadow-xl">
              <div className="flex items-center mb-4">
                <div className="p-3 mr-4 text-white bg-primary rounded-full">
                  <FaCheck />
                </div>
                <h3 className="text-xl font-semibold">Responsabilidade Social</h3>
              </div>
              <p className="text-gray-600">
                Compromisso com o desenvolvimento sustentável e o bem-estar da sociedade, atuando de forma responsável e solidária para a construção de um mundo melhor.
              </p>
            </div>
            
            <div className="p-6 transition-all bg-white rounded-lg shadow-md hover:shadow-xl">
              <div className="flex items-center mb-4">
                <div className="p-3 mr-4 text-white bg-primary rounded-full">
                  <FaCheck />
                </div>
                <h3 className="text-xl font-semibold">Inovação</h3>
              </div>
              <p className="text-gray-600">
                Estímulo à criatividade, ao pensamento crítico e à busca por soluções inovadoras para os desafios contemporâneos.
              </p>
            </div>
            
            <div className="p-6 transition-all bg-white rounded-lg shadow-md hover:shadow-xl">
              <div className="flex items-center mb-4">
                <div className="p-3 mr-4 text-white bg-primary rounded-full">
                  <FaCheck />
                </div>
                <h3 className="text-xl font-semibold">Inclusão e Diversidade</h3>
              </div>
              <p className="text-gray-600">
                Valorização da pluralidade de ideias, culturas e experiências, promovendo um ambiente acadêmico inclusivo, diversificado e respeitoso.
              </p>
            </div>
            
            <div className="p-6 transition-all bg-white rounded-lg shadow-md hover:shadow-xl">
              <div className="flex items-center mb-4">
                <div className="p-3 mr-4 text-white bg-primary rounded-full">
                  <FaCheck />
                </div>
                <h3 className="text-xl font-semibold">Colaboração</h3>
              </div>
              <p className="text-gray-600">
                Fomento ao trabalho em equipe, à cooperação e ao intercâmbio de conhecimentos e experiências, tanto internamente quanto com parceiros externos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 text-white bg-primary">
        <div className="containers text-center">
          <h2 className="mb-6 text-3xl font-bold lg:text-4xl">Nosso Compromisso</h2>
          <p className="max-w-3xl mx-auto mb-8 text-lg">
            No ISPSML, nossa missão, visão e valores não são apenas palavras, mas princípios que guiam nossas ações diárias. Estamos comprometidos com a formação integral de nossos estudantes e com a construção de um futuro melhor para Angola e para o mundo.
          </p>
          <button className="px-8 py-4 font-semibold text-primary transition-all bg-white rounded-md hover:bg-gray-100">
            Junte-se a Nós
          </button>
        </div>
      </section>
    </>
  );
};

export default MissionVisionValues;
