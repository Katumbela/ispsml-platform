"use client"

import Navbar from '../components/Navbar';
import Card from '@/components/Card';
import Counter from '@/components/Counter';
import Hero from '@/components/Hero';
import { teachers } from '@/assets';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <Hero />
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Conheça a nossa oferta formativa</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card image={teachers.teacher1.src} title="Engenharia Informática" description="Descrição do curso de Engenharia Informática." />
              <Card image={teachers.teacher2.src} title="Medicina" description="Descrição do curso de Medicina." />
              <Card image={teachers.teacher3.src} title="Direito" description="Descrição do curso de Direito." />
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Notícias</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card image={teachers.teacher4.src} title="Notícia 1" description="Descrição da notícia 1." />
              <Card image={teachers.teacher2.src} title="Notícia 2" description="Descrição da notícia 2." />
              <Card image={teachers.teacher3.src} title="Notícia 3" description="Descrição da notícia 3." />
            </div>
          </div>
        </section>
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Escolas em números</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Counter end={5000} duration={2} label="Estudantes" />
              <Counter end={200} duration={2} label="Professores" />
              <Counter end={50} duration={2} label="Cursos" />
              <Counter end={10} duration={2} label="Faculdades" />
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Eventos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card image={teachers.teacher1.src} title="Evento 1" description="Descrição do evento 1." />
              <Card image={teachers.teacher4.src} title="Evento 2" description="Descrição do evento 2." />
              <Card image={teachers.teacher2.src} title="Evento 3" description="Descrição do evento 3." />
            </div>
          </div>
        </section>
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Testemunhos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card image={teachers.teacher3.src} title="Estudante 1" description="Testemunho do estudante 1." />
              <Card image={teachers.teacher1.src} title="Estudante 2" description="Testemunho do estudante 2." />
              <Card image={teachers.teacher4.src} title="Estudante 3" description="Testemunho do estudante 3." />
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Admissões e Oferta Educativa</h2>
            <p className="text-xl mb-8">Informações sobre admissões e a oferta educativa da Universidade Angolana.</p>
            <a href="/admissions" className="bg-secondary text-white py-2 px-4 rounded">Saiba Mais</a>
          </div>
        </section>
      </div>
    </div>
  );
}
