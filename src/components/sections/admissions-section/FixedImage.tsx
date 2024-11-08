import Image from 'next/image';
import { motion } from 'framer-motion';
import { images } from '@/assets';

function FixedImage({ isFixed }: { isFixed: boolean }) {
  return (
    <motion.div
      className={`flex-1 ${isFixed ? 'fixed' : 'sticky'} top-0 h-screen w-1/3`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isFixed ? 1 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <Image src={images.backgrounds.bg_vertical} alt="Admissões" className="w-full h-full" />
    </motion.div>
  );
}

export default FixedImage;
