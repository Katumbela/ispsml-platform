import { images } from '@/assets';
import Image from 'next/image';
import { FaBook, FaChalkboardTeacher, FaGraduationCap, FaUniversity, FaInfoCircle, FaPhoneAlt } from 'react-icons/fa';

export default function QuickLinks() {
  return (
    <section className="relative py-20 overflow-hidden bg-center bg-cover">
      <div className="container mx-auto text-center text-white">

        <Image
          src={images.backgrounds.bg_night_1.src}
          alt={"Quick Links"}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-[-1]"
        />
        <div className="absolute inset-0 bg-black opacity-70 z-[-1]" />

        <h2 className="mb-8 text-3xl font-bold">Links Rápidos</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <a href="/courses" className="quick-link">
            <div className='icon'>
              <FaBook className="mr-2" />
            </div>
            <span>Cursos</span>
          </a>
          <a href="/teachers" className="quick-link">
            <div className='icon'>
              <FaChalkboardTeacher className="mr-2" />
            </div>
            <span>Professores</span>
          </a>
          <a href="/admissions" className="quick-link">
            <div className='icon'>
              <FaGraduationCap className="mr-2" />
            </div>
            <span>Admissões</span>
          </a>
          <a href="/faculties" className="quick-link">
            <div className='icon'>
              <FaUniversity className="mr-2" />
            </div>
            <span>Faculdades</span>
          </a>
          <a href="/about" className="quick-link">
            <div className='icon'>
              <FaInfoCircle className="mr-2" />
            </div>
            <span>Sobre Nós</span>
          </a>
          <a href="/contact" className="quick-link">
            <div className='icon'>
              <FaPhoneAlt className="mr-2" />
            </div>
            <span>Contato</span>
          </a>
        </div>
      </div>
    </section>
  );
}