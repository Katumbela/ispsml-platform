import Navbar from '../../components/Navbar';

const About = () => {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-2xl font-bold">Sobre Nós</h1>
        <p className="mt-4">Informações sobre a universidade...</p>
      </main>
    </div>
  );
};

export default About;
