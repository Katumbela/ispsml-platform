import { motion } from 'framer-motion';

function ContentSections() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <div className="pl-5 border-l-2 border-black">
        <section className="mb-10">
          <h2 className="mb-2 text-2xl">Admissões e Oferta Educativa</h2>
          <p className="text-lg">No Tec de Monterrey inovamos continuamente nossa oferta acadêmica...</p>
        </section>
        <section className="mb-8">
          <h3 className="mb-2 text-xl">PrepaTec</h3>
          <p className="text-lg">Aprofunde-se no conhecimento e fortaleça sua visão de mundo...</p>
        </section>
        <section className="mb-8">
          <h3 className="mb-2 text-xl">Profissional</h3>
          <p className="text-lg">Desafios contínuos em ambientes diversos para moldar seu futuro...</p>
        </section>
        <section className="mb-8">
          <h3 className="mb-2 text-xl">Mestrados e Diplomados</h3>
          <p className="text-lg">Especialize-se com o mais alto nível acadêmico...</p>
        </section>
        <section className="mb-8">
          <h3 className="mb-2 text-xl">Modelo Educativo Tec</h3>
          <p className="text-lg">O Modelo Educativo Tec permite a formação de competências...</p>
        </section>
        <section className="mb-8">
          <h3 className="mb-2 text-xl">Inovação e Tecnologia</h3>
          <p className="text-lg">Descubra como a tecnologia impulsiona o aprendizado...</p>
        </section>
        <section className="mb-8">
          <h3 className="mb-2 text-xl">Vida Universitária</h3>
          <p className="text-lg">Participe de atividades que enriquecem sua experiência...</p>
        </section>
        <section className="mb-8">
          <h3 className="mb-2 text-xl">Compromisso Social</h3>
          <p className="text-lg">Faça um impacto positivo em sua comunidade...</p>
        </section>
        <section className="mb-8">
          <h3 className="mb-2 text-xl">Pesquisa e Desenvolvimento</h3>
          <p className="text-lg">Explore novas fronteiras do conhecimento através da pesquisa...</p>
        </section>
        <section className="mb-8">
          <h3 className="mb-2 text-xl">Internacionalização</h3>
          <p className="text-lg">Amplie seus horizontes com oportunidades internacionais...</p>
        </section>
        <section className="mb-8">
          <h3 className="mb-2 text-xl">Empreendedorismo</h3>
          <p className="text-lg">Desenvolva suas habilidades empreendedoras e crie soluções inovadoras...</p>
        </section>
        <section className="mb-8">
          <h3 className="mb-2 text-xl">Novas Seções</h3>
          <p className="text-lg">Adicione mais conteúdo aqui...</p>
        </section>
      </div>
    </motion.div>
  );
}

export default ContentSections;
