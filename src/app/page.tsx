"use client"

import Navbar from '../components/Navbar';
import Card from '@/components/Card';
import Counter from '@/components/Counter';
import Hero from '@/components/Hero';
import { teachers } from '@/assets';
import QuickLinks from '@/components/QuickLinks';
import Footer from '@/components/Footer';
import { StudyOffer } from '@/components/sections/study-offer/study-offer';
import { AdmissionsSection } from '@/components/sections/admissions-section/admissions-section';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <Hero />
        <StudyOffer />
        <br />
        <AdmissionsSection />
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="mb-8 text-3xl font-bold">Escolas em números</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              <Counter end={5000} duration={2} label="Estudantes" />
              <Counter end={200} duration={2} label="Professores" />
              <Counter end={50} duration={2} label="Cursos" />
              <Counter end={10} duration={2} label="Faculdades" />
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="mb-8 text-3xl font-bold">Eventos</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <Card image={teachers.teacher1.src} title="Evento 1" description="Descrição do evento 1." />
              <Card image={teachers.teacher4.src} title="Evento 2" description="Descrição do evento 2." />
              <Card image={teachers.teacher2.src} title="Evento 3" description="Descrição do evento 3." />
            </div>
          </div>
        </section>
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="mb-8 text-3xl font-bold">Testemunhos</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <Card image={teachers.teacher3.src} title="Estudante 1" description="Testemunho do estudante 1." />
              <Card image={teachers.teacher1.src} title="Estudante 2" description="Testemunho do estudante 2." />
              <Card image={teachers.teacher4.src} title="Estudante 3" description="Testemunho do estudante 3." />
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="mb-8 text-3xl font-bold">Admissões e Oferta Educativa</h2>
            <p className="mb-8 text-xl">Informações sobre admissões e a oferta educativa da Universidade Angolana.</p>
            <a href="/admissions" className="px-4 py-2 text-white rounded bg-secondary">Saiba Mais</a>
          </div>
        </section>
        <QuickLinks />
        <Footer />
      </div>
    </div>
  );
}
