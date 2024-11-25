import { images } from '@/assets';
import React from 'react';

const ConferenceComponent = () => {
  return (
    <section className="containers px-4 py-8 mx-auto">
      <h2 className="mb-4 text-2xl font-semibold text md:text-3xl">
        Dê o primeiro passo e participe de nossas conferências para todo o público
      </h2>
      <p className="mb-8 text-gray-600 text">
        NOSSO CORPO DOCENTE COMPARTILHARÁ INFORMAÇÕES VALIOSAS E TEMAS ATUAIS
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Featured Conference */}
        <div className="relative grid items-center p-10 overflow-hidden text-white place-content-center md:col-span-1" style={{background: `linear-gradient(90deg, #00000093, #000000AF), url(${images.departImages.ciencias_sociais.src}) center center`, backgroundSize: "cover"}}>
          <div>
          <div className="top-0 left-0 flex gap-6 text-2xl ">
            <p className="flex flex-col font-semibold ">21 <span className='text-xl'>NOV</span></p>
            <p className="flex flex-col ">19:00 <span className='text-xl'>HRS</span></p>
          </div>
          <span className="px-3 py-1 text-xs font-semibold text-gray-500 bg-white top-16 left-4">
            Setor Público
          </span>
          <div className="mt-12">
            <h3 className="mb-4 text-2xl font-semibold">
              CONFERÊNCIA: O FUTURO DA MOBILIDADE E A ELETRIFICAÇÃO DO TRANSPORTE
            </h3>
            <p className="mb-6">
              Junte-se a esta conferência! Descubra como a eletrificação e a descarbonização estão transformando o futuro da mobilidade.
            </p>
            <button className="px-4 py-2 font-medium text-white transition-all bg-primary hover:bg-primary-dark">
              QUERO ME REGISTRAR
            </button>
          </div>
          </div>
        </div>
        
        {/* Previous Events */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">EVENTOS ANTERIORES</h3>
          {['OUT', 'AGO', 'JUL'].map((month, index) => (
            <div key={index} className="flex items-start p-4 bg-gray-100 shadow-sm">
              <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 text-lg font-semibold text-gray-700 bg-gray-300">
                {month}
              </div>
              <div className="flex-1 ml-4">
                <h4 className="text-sm font-semibold text-gray-700">
                  {index === 0
                    ? 'CONFERÊNCIA: DESAFIOS DAS VENDAS EM CONTEXTOS DINÂMICOS'
                    : index === 1
                    ? 'VIAGENS A TERRAS INIMAGINÁVEIS: A CONVIVÊNCIA COM OS TRANSTORNOS NEUROCOGNITIVOS'
                    : 'CONFERÊNCIA SUCESSO SEM MEDOS: VENCENDO A SÍNDROME DO IMPOSTOR'}
                </h4>
                <p className="text-xs text-gray-600">19:00 HRS.</p>
                <button className="mt-1 text-xs text-blue-500 hover:underline">Conferência online</button>
              </div>
              <button className="ml-4 text-sm text-pink-500 hover:underline">Ver evento</button>
            </div>
          ))}
          <button className="w-full px-4 py-2 mt-4 font-medium text-gray-700 border border-gray-500 hover:bg-gray-200">
            Ver mais eventos
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConferenceComponent;
