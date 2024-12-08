'use client';
 
// import { routes } from '@/infra/routes.vars';
// import { coursesData } from '@/infra/data/courses-data';
import GlobalHero from '@/components/global-hero/global-hero';
import { images } from '@/assets';
import Image from 'next/image';
import { FaAngleRight } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { routes } from '@/infra/routes.vars';

// const departments = Object.entries(coursesData).map(([key, value]) => ({
//   link: `${routes.ORGANIC_UNIT_ROUTE}/${key}`,
//   name: `Departamento de ${key.charAt(0).toUpperCase() + key.slice(1)}`,
//   cover: value.department_cover
// }));

export default function OrganicUnitPage() {
  return (
    <>
    <head>
      <title>Extensão | Instituto Superior São Martinho de Lima</title>
    </head> 
      <GlobalHero bgImage={images.backgrounds.bg_students_hands_up.src} titleClassName='text-5xl' title='Extensão' className='h-[500px] 2xl:h-[600px] ' />
     
      <div className="-mt-1.5">
      <div className="flex gap-8 bg-white">
        <div className="relative w-full py-10 bg-primary">
          <Image src={images.backgrounds.bg_student_22.src} objectFit='cover' layout='fill' alt="" />
        </div>
        <div className="grid items-center w-4/5 py-24 bg-white containers 2xl:py-40 ">
          <div className="my-auto ">
          <h2 className='title'>Impacto Social</h2>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet unde nam maxime dicta aperiam architecto quam adipisci qui neque, fugit autem. Nobis delectus facere hic tempore perferendis ipsam a deserunt.
            </p>
          </div>
        </div>
      </div>
      </div>
        <br /><br />
      <div className="grid grid-cols-3 gap-10 containers">
        <div>
         <div className="py-2 border-b border-gray-800">
            <a href='#' className="flex items-center gap-3 font-medium text-gray-500 transition-all cursor-pointer hover:text-gray-800">
              <span className="my-auto text-xl">Projecto um </span><FaAngleRight className='mt-1 text-xs'/>
            </a>
         </div>
         <p className="mt-4 text-gray-500">
          <i>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat enim eaque nisi eos quisquam temporibus similique non? Fuga ipsum obcaecati nemo nam ab earum animi soluta exercitationem, eligendi consequuntur rerum.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat enim eaque nisi eos quisquam temporibus similique non? Fuga ipsum obcaecati nemo nam ab earum animi soluta exercitationem, eligendi consequuntur rerum.
          </i>
         </p>
        </div>
        <div>
         <div className="py-2 border-b border-gray-800">
            <a href='#' className="flex items-center gap-3 font-medium text-gray-500 transition-all cursor-pointer hover:text-gray-800">
              <span className="my-auto text-xl">Projecto Dois </span><FaAngleRight className='mt-1 text-xs'/>
            </a>
         </div>
         <p className="mt-4 text-gray-500">
          <i>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat enim eaque nisi eos quisquam temporibus similique non? Fuga ipsum obcaecati nemo nam ab earum animi soluta exercitationem, eligendi consequuntur rerum.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat enim eaque nisi eos quisquam temporibus similique non? Fuga ipsum obcaecati nemo nam ab earum animi soluta exercitationem, eligendi consequuntur rerum.
          </i>
         </p>
        </div>
        <div>
         <div className="py-2 border-b border-gray-800">
            <a href='#' className="flex items-center gap-3 font-medium text-gray-500 transition-all cursor-pointer hover:text-gray-800">
              <span className="my-auto text-xl">Projecto Três </span><FaAngleRight className='mt-1 text-xs'/>
            </a>
         </div>
         <p className="mt-4 text-gray-500">
          <i>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat enim eaque nisi eos quisquam temporibus similique non? Fuga ipsum obcaecati nemo nam ab earum animi soluta exercitationem, eligendi consequuntur rerum.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat enim eaque nisi eos quisquam temporibus similique non? Fuga ipsum obcaecati nemo nam ab earum animi soluta exercitationem, eligendi consequuntur rerum.
          </i>
         </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      
			<motion.div
				initial={{ x: -1000, opacity: 0 }}
				viewport={{ once: true }}
				whileInView={{ x: 0, opacity: 1, transition: { duration: 0.3, delay: 0.1 } }}
				className=" bg-primary-footer image-container"
			>
				<div className="flex gap-2 ">
					<div className="w-full ps-10 py-14 2xl:py-24">
						<h2 className="font-bold text-white lg:mb-2 lg:text-3xl 2xl:mb-3 2xl:text-4xl">
							 Relações Empresariais
						</h2>
						<p className="text-sm 2xl:text-[14px] text-white">At Tec we connect and collaborate with national and international organizations through valuable corporate relationships, through a bonding model that generates human, economic, social, and environmental value to contribute to a fairer, more prosperous, and more sustainable society with higher levels of wellness.</p>
						<button className="flex gap-2 py-5 mt-6 font-semibold text-black uppercase transition-all bg-white border-2 border-white px-7 hover:bg-transparent hover:text-white ">
							<span className="my-auto">Saber Mais</span>
							<FaAngleRight className="my-auto" />
						</button>
					</div>
					<div className="relative w-2/3 h-100 image-container">
						<Image
							objectFit="cover"
							layout="fill"
							alt=""
							src={images.backgrounds.bg_writing}
							className="image"
						/>
					</div>
				</div>
			</motion.div>


      <motion.div
      	initial={{ x: 1000, opacity: 0 }}
				viewport={{ once: true }}
				whileInView={{ x: 0, opacity: 1, transition: { duration: 0.3, delay: 0.1 } }}
      className="flex gap-8 bg-white">
        <div className="relative w-1/3 py-10 bg-primary">
          <Image src={images.backgrounds.bg_student_22.src} objectFit='cover' layout='fill' alt="" />
        </div>
        <div className="grid items-center w-4/5 py-6 bg-white containers 2xl:py-14 ">
          <div className="my-auto ">
          <h2 className='title'>Relações Governamentais</h2>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet unde nam maxime dicta aperiam architecto quam adipisci qui neque, fugit autem. Nobis delectus facere hic tempore perferendis ipsam a deserunt.
            </p>
            <button className="flex gap-2 py-5 mt-6 font-semibold text-black uppercase transition-all bg-white border-2 border-black px-7 hover:bg-black hover:text-white ">
							<span className="my-auto">Saber Mais</span>
							<FaAngleRight className="my-auto" />
						</button>
          </div>
        </div>
      </motion.div>
      <br />
      <br />
      <motion.div
      	initial={{ x: -1000, opacity: 0 }}
				viewport={{ once: true }}
				whileInView={{ x: 0, opacity: 1, transition: { duration: 0.3, delay: 0.1 } }}
      className="flex flex-row-reverse gap-8 bg-white">
        <div className="relative w-full py-10 bg-primary">
          <Image src={images.backgrounds.bg_student_22.src} objectFit='cover' layout='fill' alt="" />
        </div>
        <div className="grid items-center w-4/5 py-24 bg-white containers 2xl:py-40 ">
          <div className="my-auto ">
          <h2 className='title'>Responsabilidade Social</h2>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet unde nam maxime dicta aperiam architecto quam adipisci qui neque, fugit autem. Nobis delectus facere hic tempore perferendis ipsam a deserunt.
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ex iure ipsa nihil ea modi libero minus necessitatibus! Consequatur ipsum doloribus nam molestiae, repellat ipsam natus sequi maxime similique alias.
            </p>
            <button  onClick={()=> window.location.href = routes.SOCIAL_REPONSABILITY_ROUTE}  className="flex gap-2 py-5 mt-10 text-white uppercase transition-all bg-black border-2 border-black px-7 hover:bg-white hover:text-black ">
							<span className="my-auto">Saber Mais</span>
							<FaAngleRight className="my-auto" />
						</button>
          </div>
        </div>
      </motion.div>
      <br />
      <br />
    </>
  );
}
