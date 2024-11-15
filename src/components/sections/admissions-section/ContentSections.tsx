import { motion } from 'framer-motion';

function ContentSections() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <div className="pl-5 border-l-2 border-black">
        <section className="mb-10">
          <h2 className="mb-2 text-2xl">Admissões e Oferta Educativa</h2>
          <p className="text-lg">No Tec de Monterrey inovamos continuamente nossa oferta acadêmica...</p>
        </section>
      
      </div>
    </motion.div>
  );
}

export default ContentSections;
