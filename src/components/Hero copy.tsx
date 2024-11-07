import Image from 'next/image';
import { logos } from '@/utils/image-exporter';

const Hero: React.FC = () => {
  return (
    <section className="bg-hero-pattern bg-cover bg-center text-white py-20">
      <div className="container mx-auto text-center">
        <Image src={logos.logo.src} alt="Logo" className="mx-auto mb-4" />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Bem-vindo à Universidade Angolana</h1>
        <p className="text-xl md:text-2xl mb-8">As inscrições estão abertas! Junte-se a nós e transforme o seu futuro.</p>
        <a href="/apply" className="bg-secondary text-white py-2 px-4 rounded">Inscreva-se Agora</a>
      </div>
    </section>
  );
};

export default Hero;
