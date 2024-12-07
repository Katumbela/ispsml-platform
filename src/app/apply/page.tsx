/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import cn from 'classnames';

import HeroOrganicUnit from '../organic-unit/components/HeroOrganicUnit';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { images } from '@/assets'; 
import InputDefault from '@/components/input-default/input';
import SelectDefault from '@/components/select-default/select-default';
import { useState } from 'react';
import DateSelect from '@/components/date-select/date-select';
import { FaAngleRight, FaSpinner } from 'react-icons/fa6';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import AnimatedAccordion from '@/components/animated-accordion/animated-accordion';
import AnimatedAccordionBellowHeader from '@/components/animated-accordion/animated-accordion-below-header';

export default function OrganicUnitPage() {
  const [hour, setHour] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [course, setCourse] = useState('');
  const [interest, setInterest] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    // Simulação de envio de dados
    setTimeout(() => {
      setLoading(false);
      toast.success('Inscrição enviada com sucesso!');
    }, 2000);
  };

	const buttons = [
		{
			link: '#form',
			title: 'Formulário de Inscrição'
		},
		{
			link: '#steps',
			title: 'Passos A Seguir'
		},
		{
			link: '#dates',
			title: 'Datas Importantes'
		}
	];
 
  const hourOptions = [
    {
      value: '10:00',
      label: '10-12h'
    },
    {
      value: '14-18',
      label: '14-18h'
    }
  ]
	return (
		<>
    <head>
      <title>Processo de Inscrição | Instituto Superior Politécnico São Martinho de Lima</title>
    </head>
			<HeroOrganicUnit />
			<div className="flex justify-between -mt-1.5 text-center border-b">
				{buttons.map((item, index) => (
					<a href={item.link} key={index} className={cn("justify-center w-full py-5 font-bold text-center transition-colors cursor-pointer hover:text-white uppercase text-sm hover:bg-primary-footer", {"border-x": index===1})}>
						<span className="mx-auto my-auto">{item.title}</span>
					</a>
				))}
			</div>
			<br />
      <div className="containers py-15">
        <h2 className="capitalize title">Comece o seu processo de inscrição</h2>
    <p className="text-gray-400">
      <i className='italic'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, beatae vel animi vitae obcaecati nesciunt, voluptatem architecto atque veritatis officia dicta. </i>
    </p>
    <br />
    <br />

 
      </div>
      <section className='py-10 bg-primary-footer' id="form">
      <motion.div
      	initial={{ x: 1000, opacity: 0 }}
				viewport={{ once: true }}
				whileInView={{ x: 0, opacity: 1, transition: { duration: 0.3, delay: 0.1 } }}
      className="flex gap-8 containers">
        <div className="relative w-1/3 py-">
        <div className="relative w-full h-[20rem] py-10 bg-primary">
          <Image src={images.backgrounds.bg_student_22.src} objectFit='cover' layout='fill' alt="" />
        </div>
        </div>
        <form onSubmit={handleSubmit} className="grid items-start w-4/5 py-6 text-white containers 2xl:py-14">
      <div>
      <h2 className='text-xl font-medium'>INFORMAÇÕES PESSOAIS</h2>
          <div className="grid grid-cols-2 gap-7">
            <InputDefault label='Nome Completo' placeholder='Nome completo' value={name} onChange={(e) => setName(e.target.value)} required={true} />
            <InputDefault label='Email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required={true} />
            <InputDefault label='Telefone' placeholder='Telefone' value={phone} onChange={(e) => setPhone(e.target.value)} required={true} />
            <DateSelect name='birth-date' value={birthDate} onChange={(date) => setBirthDate(date)} placeholder='Data de Nascimento' required={true} />
            <InputDefault label='Curso Pretendido' placeholder='Curso Pretendido' value={course} onChange={(e) => setCourse(e.target.value)} required={true} />
            <SelectDefault name='select-hour' value={hour} onChange={(e) => setHour(e.target.value)} options={hourOptions} placeholder='Selecione o horário' required={true} />
            <DateSelect name='select-date' value={date} onChange={(date) => setDate(date)} placeholder='Selecione a data' required={true} />
            <InputDefault label='Mensagem' placeholder='Escreva uma mensagem' value={interest} onChange={(e) => setInterest(e.target.value)} required={false} />
        <div className="flex justify-center">
        <button type="submit" className="flex gap-2 px-3 py-3 mt-5 text-black uppercase transition-all bg-white border-2 border-white hover:bg-transparent hover:text-white">
          {loading ? <FaSpinner className="my-auto animate-spin" /> : (
            <>
              <span className="my-auto">Enviar Inscrição</span>
              <FaAngleRight className="my-auto" />
            </>
          )}
        </button>
        </div>
          </div>
      </div>
        </form>
      </motion.div>
      </section>
      <ToastContainer />
      <br />
      <br /> 
      <div className="containers">
        <b>Lorem ipsum dolor sit amet consectetur,</b> adipisicing elit. Ratione, nam voluptatem? Voluptates, nulla? Distinctio, inventore impedit. Eos adipisci aliquam facilis quas natus ducimus distinctio commodi at quod, reprehenderit harum ipsam?
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus velit quasi doloremque praesentium laborum. Beatae laborum sint odio. Ad porro sequi quo ullam aliquam ratione itaque nobis, non esse amet!        </p>
        <br /> 
        <p>
          Lorem ipsum dolor sit amet, <b>consectetur adipisicing elit.</b> Voluptatibus velit quasi doloremque praesentium laborum. Beatae laborum sint odio. Ad porro sequi quo ullam aliquam ratione itaque nobis, non esse amet!
        </p> 
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus velit quasi doloremque praesentium laborum. Beatae laborum sint odio. Ad porro sequi quo ullam aliquam ratione itaque nobis, non esse amet!
        </p>
        <br />
        <br />
        <br />
        <br />
      </div>

<div className="containers">
<h1 className="py-8 text-4xl font-bold text-start">Passos a Seguir</h1>

</div>
      <section id="steps" className="">
        <div className="py-10 text-white bg-gray-900 ">
    
    
      
        <AnimatedAccordionBellowHeader
        items={[
          {
            title: <h1 className="py-8 font-bold text-center text-9xl">1</h1> ,
            children: (
              <p>
                Complete o formulário de inscrição com suas informações pessoais e escolha o curso desejado. Certifique-se de que todos os campos obrigatórios estão preenchidos corretamente.
              </p>
            ),
          },
          {
            title: <h1 className="py-8 font-bold text-center text-9xl">2</h1> ,

            children: (
              <p>
                Envie os documentos necessários, como cópias do RG, CPF, comprovante de residência e histórico escolar. Verifique se todos os documentos estão legíveis e atualizados.
              </p>
            ),
          },
          {
            title: <h1 className="py-8 font-bold text-center text-9xl">3</h1> ,

            children: (
              <p>
                Aguarde a confirmação do recebimento dos documentos e a validação das informações fornecidas. Você será notificado por e-mail sobre o status da sua inscrição.
              </p>
            ),
          }
        ]}
        columns={3}
      />
    </div>

        </section>

        <br />
        <br /> 

        <section id="dates" className="hidden">

        <div className="containers">
        <h1 className="py-8 text-4xl font-bold text-start">Datas Importantes</h1> 
        </div>
        <div className="flex w-full grid-cols-2">
				<div
					style={{
						background: `url(${images.backgrounds.bg_student_2.src}) center center`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover'
					}}
					className="relative w-full "
				>
					{/* <Image alt="" objectFit='cover' layout='fill' src={images.teachers.katumbela} /> */}
				</div>
				<div className="grid w-full ">
					<div className="w-full my-auto 2xl:mx-24 containers">
					 <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className='text-sm'>
              <th className="px-2 py-2 border border-gray-300">Limite para completar expediente</th>
              <th className="px-2 py-2 border border-gray-300">Entrega de resultado a partir do</th>
            </tr>
          </thead>
          <tbody className='text-xs'>
            <tr>
              <td className="px-2 py-1 border border-gray-300">23 de novembro</td>
              <td className="px-2 py-1 border border-gray-300">05 de dezembro</td>
            </tr>
            <tr>
              <td className="px-2 py-1 border border-gray-300">07 de dezembro</td>
              <td className="px-2 py-1 border border-gray-300">12 de dezembro</td>
            </tr>
            <tr>
              <td className="px-2 py-1 border border-gray-300">04 de janeiro</td>
              <td className="px-2 py-1 border border-gray-300">16 de janeiro</td>
            </tr>
            <tr>
              <td className="px-2 py-1 border border-gray-300">11 de janeiro</td>
              <td className="px-2 py-1 border border-gray-300">23 de janeiro</td>
            </tr>
            <tr>
              <td className="px-2 py-1 border border-gray-300">18 de janeiro</td>
              <td className="px-2 py-1 border border-gray-300">30 de janeiro</td>
            </tr>
            <tr>
              <td className="px-2 py-1 border border-gray-300">25 de janeiro</td>
              <td className="px-2 py-1 border border-gray-300">06 de fevereiro</td>
            </tr>
            <tr>
              <td className="px-2 py-1 border border-gray-300">01 de fevereiro</td>
              <td className="px-2 py-1 border border-gray-300">13 de fevereiro</td>
            </tr>
            <tr>
              <td className="px-2 py-1 border border-gray-300">08 de fevereiro</td>
              <td className="px-2 py-1 border border-gray-300">20 de fevereiro</td>
            </tr>
            <tr>
              <td className="px-2 py-1 border border-gray-300">15 de fevereiro</td>
              <td className="px-2 py-1 border border-gray-300">27 de fevereiro</td>
            </tr>
            <tr>
              <td className="px-2 py-1 border border-gray-300">22 de fevereiro</td>
              <td className="px-2 py-1 border border-gray-300">06 de março</td>
            </tr>
            <tr>
              <td className="px-2 py-1 border border-gray-300">01 de março</td>
              <td className="px-2 py-1 border border-gray-300">13 de março</td>
            </tr>
            <tr>
              <td className="px-2 py-1 border border-gray-300">08 de março</td>
              <td className="px-2 py-1 border border-gray-300">20 de março</td>
            </tr>
            <tr>
              <td className="px-2 py-1 border border-gray-300">15 de março</td>
              <td className="px-2 py-1 border border-gray-300">27 de março</td>
            </tr>
            <tr>
              <td className="px-2 py-1 border border-gray-300">22 de março</td>
              <td className="px-2 py-1 border border-gray-300">03 de abril</td>
            </tr>
            <tr>
              <td className="px-2 py-1 border border-gray-300">29 de março</td>
              <td className="px-2 py-1 border border-gray-300">10 de abril</td>
            </tr>
            <tr>
              <td className="px-2 py-1 border border-gray-300">05 de abril</td>
              <td className="px-2 py-1 border border-gray-300">17 de abril</td>
            </tr> 
          </tbody>
        </table>
					</div>
				</div>
 
			</div> 
			</section> 
 
 		</>
	);
}
