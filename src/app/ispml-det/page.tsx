import Footer from '@/components/Footer';
import Navbar from '../../components/Navbar';
import HeroDet from './components/hero-det';
import QuickLinks from '@/components/QuickLinks';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroDet />
      <main className="container">
        <p className="mt-4">
          O Departamento de Engenharia e Tecnologia da nossa instituição é dedicado a avançar as fronteiras do conhecimento e da inovação. Nossos programas são projetados para equipar os alunos com as habilidades e a expertise necessárias para se destacar em um cenário tecnológico em rápida evolução. Oferecemos uma variedade de cursos e oportunidades de pesquisa que cobrem várias áreas, como ciência da computação, engenharia elétrica, engenharia mecânica e mais. Nossos membros do corpo docente são especialistas renomados em suas áreas, comprometidos em fornecer educação de alta qualidade e promover um ambiente de aprendizado colaborativo. Junte-se a nós para fazer parte de uma comunidade que está moldando o futuro da engenharia e da tecnologia.
        </p>
      </main>

      <div className="about-section">

      </div>

      <br />
      <br />

      <QuickLinks />
      <Footer />
    </div>
  );
};

export default About;