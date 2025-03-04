import Image from 'next/image';
import { motion } from 'framer-motion';
import { images } from '@/assets';
import { env } from '@/infra/env';

function FixedImage({ isFixed }: { isFixed: boolean }) {
  return (
    <motion.div
      className={`col-span-6 grid items-center  ${isFixed ? 'fixed' : 'sticky'} top-0 h-screen `}
      // className={`w-full grid items-center place-content-center ${isFixed ? 'fixed' : 'sticky'} top-0 h-screen w-1/3`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isFixed ? 1 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        placeholder='blur' blurDataURL={env.BLUR_IMAGE}
        src={images.backgrounds.bg_vertical} alt="Admissões" className="w-[50vh] h-[50vh]" />
    </motion.div>
  );
}

export default FixedImage;
