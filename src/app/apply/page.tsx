/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import cn from 'classnames';

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
import { useSearchParams } from 'next/navigation';
import GlobalHero from '@/components/global-hero/global-hero';
import AnimatedAccordion from '@/components/animated-accordion/animated-accordion';
import { createApplication } from '@/services/applications.service';
import { Application } from '@/infra/data/interfaces';

export default function ApplyForm() {
  const [hour, setHour] = useState('');
  const q = useSearchParams()
  const pretendedCoursr = q?.get('course')
  // const [date, setDate] = useState<Date | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  // const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [course, setCourse] = useState(pretendedCoursr || "");
  const [interest, setInterest] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {

      const data: Application = {
        name, 
        email,
        phone,
        // birthDate: birthDate?.toISOString(),
        birthDate: "2025-02-28T14:28:40.297Z",
        course,
        interest,
      }

      const response: any = await createApplication(data)

      if (response.id) {
        toast.success('Inscrição enviada com sucesso!', { position: 'bottom-right' });
      } else {
        toast.error('Erro ao enviar inscrição! ', { position: 'bottom-right' })
      }
    } catch (error: any) {
      toast.error('Erro ao enviar inscrição! ', { position: 'bottom-right' });
    } finally {
      setLoading(false);
    }
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
    // {
    // 	link: '#dates',
    // 	title: 'Datas Importantes'
    // }
  ];

  const hourOptions = [
    {
      value: 'manha',
      label: 'Manhã'
    },
    {
      value: 'tarde',
      label: 'Tarde'
    },
    {
      value: 'noite',
      label: 'Noite'
    }
  ]
  return (
    <>
      <head>
        <title>Processo de Inscrição | Instituto Superior Politécnico São Martinho de Lima</title>
      </head>
      <GlobalHero bgImage={images.backgrounds.bg_woman_bg_flower.src} className='d-h' bottomBG='dark' position='top' title='Formulário de Inscrição' />
      <div className="flex justify-between -mt-1.5 text-center border-b">
        {buttons.map((item, index) => (
          <a href={item.link} key={index} className={cn("justify-center w-full py-5 font-bold text-center transition-colors cursor-pointer hover:text-white uppercase text-sm hover:bg-primary-footer", { "border-x": index === 1 })}>
            <span className="mx-auto my-auto">{item.title}</span>
          </a>
        ))}
      </div>
      <br />
      <div className="containers py-15">
        <h2 className="capitalize title">Comece o seu processo de inscrição</h2>
        <p className="text-gray-400">
          <i className='italic'>Descubra como garantir sua vaga! Encontre informações detalhadas sobre o processo de
            inscrição, os requisitos necessários, prazos importantes e oportunidades de bolsas de
            estudo para apoiar o seu percurso académico.
          </i>
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
            <div className="relative w-full h-full py-10 bg-primary">
              <Image src={images.backgrounds.bg_form_inscription.src} objectFit='cover' layout='fill' alt="" />
            </div>
          </div>
          <form onSubmit={handleSubmit} className="grid items-start w-4/5 py-6 text-white containers 2xl:py-14">
            <div>
              <h2 className='text-xl font-medium mb-7'>INFORMAÇÕES PESSOAIS</h2>
              <div className="grid grid-cols-2 gap-7">
                <InputDefault label='Nome Completo' placeholder='Nome completo' value={name} onChange={(e) => setName(e.target.value)} required={true} />
                <InputDefault label='Email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required={true} />
                <InputDefault label='Telefone' placeholder='Telefone' value={phone} onChange={(e) => setPhone(e.target.value)} required={true} />
                {/* <DateSelect name='birth-date' value={birthDate} onChange={(date) => setBirthDate(date)} placeholder='Data de Nascimento' required={true} /> */}
                <InputDefault label='Curso Pretendido' placeholder='Curso Pretendido' value={course} onChange={(e) => setCourse(e.target.value)} required={true} />
                <SelectDefault name='select-hour' value={hour} onChange={(e) => setHour(e.target.value)} options={hourOptions} placeholder='Selecione o turno' required={true} />
                {/* <DateSelect name='select-date' value={date} onChange={(date) => setDate(date)} placeholder='Selecione a data' required={true} /> */}
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
        <h1 className="py-8 text-4xl font-bold text-start">Processo de Inscrição</h1>
        <p>1. O processo de inscrição para o exame de acesso deve ser constituído pelos seguintes documentos:</p>
        <ul>
          <li>a) Fotocópia do original do Bilhete de Identidade ou passaporte para os estrangeiros</li>
          <li>b) Fotocópia autenticada do Certificado de Habilitações ou Declarações do PUNIV, com o visto do Director Provincial de Educação;</li>
          <li>c) Ficha de inscrição devidamente preenchida</li>
          <li>d) Pagamento de emolumentos</li>
        </ul>
        <p>2. No acto da inscrição, é emitido um recibo com a indicação da quantia paga em nome do Candidato que lhe dará acesso à sala do exame.</p>

        <h1 className="py-8 text-4xl font-bold text-start">Matrícula</h1>
        <p>1. A matrícula é o acto pela qual o estudante se vincula ao ISPSML, adquire a qualidade de estudante e o direito à inscrição num dos seus cursos;</p>
        <p>2. A matrícula faz-se uma só vez, dentro dos prazos previstos no respectivo calendário elaborado pelos Serviços Académicos;</p>
        <p>3. No acto da matrícula, é atribuído um número ao estudante, que estará em vigor até ao final do curso;</p>
        <p>4. O pagamento da matrícula é único, sendo efectuado no ano em que o estudante entra pela primeira vez na Instituição;</p>
        <p>5. Podem efectuar a sua matrícula, confirmação de matrícula e inscrição no ISPSML os estudantes que se candidatem e sejam admitidos pelas seguintes vias:</p>
        <ul>
          <li>a) Regulamento geral de exames de acesso aos cursos do ISPSML;</li>
          <li>b) Regulamento de reingresso, mudança de curso ou transferência.</li>
        </ul>
        <p>6. A inscrição é o acto efectuado anualmente que faculta ao estudante a frequência das unidades curriculares de um curso, sendo a primeira simultânea com a matrícula, folhas de provas e o cartão de estudante; É efectuada no início de cada ano lectivo, que visa confirmar que o estudante pretende continuar a frequentar o ISPSML;</p>
        <p>7. Nenhum estudante pode, a qualquer título, frequentar ou ser avaliado em unidades curriculares de um curso superior, sem se encontrar regularmente matriculado e inscrito.</p>

        <h1 className="py-8 text-4xl font-bold text-start">Documentos para Matrícula</h1>
        <ul>
          <li>a) Cópia do Bilhete de Identidade colorida;</li>
          <li>b) Certificado Original do Ensino Médio ou Cópia colorida e autenticada;</li>
          <li>c) 2 fotografias tipo-passe;</li>
          <li>d) Atestado Médico;</li>
          <li>e) Situação militar regularizada (género masculino)</li>
        </ul>
        <p>No acto da matrícula:</p>
        <ul>
          <li>a) Valor correspondente a primeira mensalidade de acordo ao curso;</li>
          <li>b) Valor correspondente ao cartão de estudante;</li>
        </ul>

        <h1 className="py-8 text-4xl font-bold text-start">Transferência Externa</h1>
        <p>1. A transferência externa tem como principal objectivo permitir que um estudante se inscreva e se matricule como estudante do ISPSML. A candidatura deverá ser apresentada na Secretaria de Estudantes antes do início de cada ano lectivo, nos prazos estabelecidos no calendário escolar;</p>
        <p>2. As solicitações de transferência externa deverão ser feitas junto da Secretaria de Estudantes, por requerimento, dirigido a Direcção dos Departamentos que no prazo de 5 (cinco) dias úteis emitam as respectivas equivalências;</p>
        <p>3. A direcção do Departamento fará chegar o processo a Secretaria de Estudantes de forma a garantir que o processo esteja concluído, contados a partir das datas previstas;</p>
        <p>4. A Secretaria de Estudantes, no prazo máximo de 2 (dois) dias úteis, após recepção da informação da Direcção do Departamento, notificará o requerente, informando-o da decisão e dos eventuais actos necessários que dela decorram.</p>

        <h1 className="py-8 text-4xl font-bold text-start">Pedidos de Transferência</h1>
        <p>1. Os pedidos de transferência deverão ser feitos quando se verifique uma das seguintes situações:</p>
        <ul>
          <li>a) Mudança interna de curso;</li>
          <li>b) Transferência de uma outra Instituição de Ensino Superior, nacional ou estrangeira, legalmente reconhecida pelos órgãos competentes.</li>
        </ul>
        <p>2. Os processos de pedidos de transferência deverão dar entrada na Secretaria de Estudantes e serem compostos por:</p>
        <ul>
          <li>a) Requerimento dirigido ao Chefe do Departamento do curso que pretende, a solicitar a autorização de transferência e a concepção de equivalência;</li>
          <li>b) Declaração original com notas discriminadas;</li>
          <li>c) Original dos planos de estudos e conteúdos programáticos;</li>
          <li>d) Fotocópia do Bilhete de Identidade.</li>
        </ul>
        <p>3. A Direcção do Departamento do curso a que disser respeito deverá no prazo de 5 (cinco) dias úteis, a contar da data da recepção do processo, dar a devida resposta ao pedido de transferência e à solicitação de equivalências, reencaminhando de imediato o processo para a Secretaria de Estudantes.</p>

        <h1 className="py-8 text-4xl font-bold text-start">Pedido de Equivalência</h1>
        <p>O requerimento para pedido de equivalência, será instruído com os seguintes elementos:</p>
        <ul>
          <li>a) Certificado e/ou documentos comprovativos da aprovação nas unidades curriculares de que requer equivalência, com a indicação da respectiva classificação;</li>
          <li>b) Plano de estudo e conteúdos programáticos das unidades curriculares;</li>
          <li>c) Carga horária de cada unidade curricular.</li>
        </ul>

        <h1 className="py-8 text-4xl font-bold text-start">Pagamento de Propinas</h1>
        <p>Pela prestação dos serviços educacionais e conforme o previsto pelos demais regulamentos institucionais, o valor a ser pago será o correspondente a 10 (dez) meses de serviços – Outubro ao Julho, mais o valor da matrícula.</p>
        <p>O valor da anuidade depende do curso e será indicado sempre no princípio do ano lectivo e será sempre em Moeda Nacional (Kz) que será pago em 10 (dez) parcelas mensais e iguais. O valor pago em moeda nacional será feita sempre no TPA do ISPSML e nunca em mãos ou Cash.</p>
        <ul>
          <li>a) A primeira parcela deverá ser paga no acto da matrícula, e as demais parcelas deverão ser pagas até o 10º (décimo) dia útil de cada mês;</li>
          <li>b) Ao Valor da matrícula para o primeiro ano será acrescentado o valor das folhas dos exames e das provas parcelares, o valor da internet e o valor do cartão de estudante.</li>
          <li>c) Não deverá ser assinado o contrato sem que o estudante não tenha efectivada o pagamento da matrícula junto com a primeira mensalidade.</li>
          <li>d) Em caso de atraso ao pagamento das mensalidades seguintes ao primeiro mês, serão acrescidos, ao valor normal da mensalidade, uma multa corresponde a 20%.</li>
          <li>e) Não serão efectuadas matrículas nos anos subsequentes de estudantes que não tenham cumprido com os seus deveres de pagamentos no ano anterior;</li>
          <li>f) Em hipótese alguma haverá compensação ou restituição de valores pagos, relativos à matrícula e/ou mensalidades em que o estudante, tenha frequentado à Instituição.</li>
        </ul>
      </div>

      <div className="containers">
        <h1 className="py-8 text-4xl font-bold text-start">Passos a Seguir</h1>

      </div>
      <section id="steps" className="">
        <div className="py-10 text-white ">



          <AnimatedAccordion
            items={[
              {
                title: <h1 className="py-32 font-bold text-center text-9xl">1</h1>,
                children: (
                  <div>
                    <p>Complete o formulário de inscrição com suas informações pessoais e escolha o curso desejado. Certifique-se de que todos os campos obrigatórios estão preenchidos corretamente.</p>
                    <ul>
                      <li>Nome Completo</li>
                      <li>Email</li>
                      <li>Telefone</li>
                      <li>Data de Nascimento</li>
                      <li>Curso Pretendido</li>
                      <li>Turno</li>
                      <li>Mensagem (opcional)</li>
                    </ul>
                  </div>
                ),
              },
              {
                title: <h1 className="py-32 font-bold text-center text-9xl">2</h1>,
                children: (
                  <div>
                    <p>Envie os documentos necessários, como cópias do Bilhete de Identidade, comprovante de residência e histórico escolar. Verifique se todos os documentos estão legíveis e atualizados.</p>
                    <ul>
                      <li>Fotocópia do Bilhete de Identidade ou passaporte</li>
                      <li>Fotocópia autenticada do Certificado de Habilitações</li>
                      <li>Ficha de inscrição devidamente preenchida</li>
                      <li>Pagamento de emolumentos</li>
                    </ul>
                  </div>
                ),
              },
              {
                title: <h1 className="py-32 font-bold text-center text-9xl">3</h1>,
                children: (
                  <div>
                    <p>Aguarde a confirmação do recebimento dos documentos e a validação das informações fornecidas. Você será notificado por e-mail sobre o status da sua inscrição.</p>
                    <p>No acto da inscrição, é emitido um recibo com a indicação da quantia paga em nome do Candidato que lhe dará acesso à sala do exame.</p>
                  </div>
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
