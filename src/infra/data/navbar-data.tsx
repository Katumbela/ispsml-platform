import { images } from "@/assets";
import type { ReactNode } from "react";
import { routes } from "@/infra/routes.vars";

type NavigationItem = {
  label: string;
  href: string;
  children?: NavigationItem[] | ReactNode;
  dataTarget?: string;
  dataToggle?: string;
  target?: string;
};

export const navigationItems: NavigationItem[] = [
  {
    label: 'Sobre',
    href: routes.ABOUT_ROUTE,
    children: [
      { label: 'Mensagem da Presidência', href: routes.PRESIDENT_MESSAGE_ROUTE },
      { label: 'Apresentação Institucional', href: routes.INSTITUTIONAL_PRESENTATION_ROUTE },
      { label: 'Organigrama', href: routes.ORGANOGRAM_ROUTE },
      { label: 'Missão, Visão e Valores', href: routes.MISSION_VISION_VALUES_ROUTE },
      { label: 'Histórico', href: routes.HISTORY_ROUTE },
      { label: 'Infraestruturas', href: routes.INFRASTRUCTURES_ROUTE },
      { label: 'Legislação', href: routes.LEGISLATION_ROUTE },
      { label: 'Convénios e Protocolos', href: routes.AGREEMENTS_ROUTE },
      { label: 'Acção Social', href: routes.SOCIAL_ACTION_ROUTE },
      { label: 'Código de Conduta e Ética', href: routes.CODE_OF_CONDUCT_ROUTE, target: '_blank' },
    ]
  },
  {
    label: 'Estude no ISPTML',
    href: routes.ACADEMIC_SERVICES_ROUTE,
    children: (
      <div className="grid grid-cols-2 gap-4 px-4 py-12 children-nav">
        <div>
       
          <ul>
            <li><a href={routes.ACADEMIC_CALENDAR_ROUTE}>Calendário Académico</a></li>
            <li><a href={routes.STUDENT_MOBILITY_ROUTE}>Mobilidade Estudantil</a></li>
            <li><a href={routes.ALUMNI_ROUTE}>Alumni</a></li> 
          </ul>
        </div>
        <div>
       
       <ul>
         <li><a href={routes.RULES_MODAL_ROUTE} data-target="#rules-modal" data-toggle="modal">Regulamentos</a></li>
         <li><a href={routes.EDITAL_MODAL_ROUTE} data-target="#edital-modal" data-toggle="modal">Editais</a></li>
         <li><a href={routes.EXAM_RESULTS_ROUTE} data-target="#lista-modal" data-toggle="modal">Listas de Resultados dos Exames de Acesso</a></li>
       </ul>
     </div>
      </div>
    )
  },
  // {
  //   label: 'Ensino',
  //   href: routes.TEACHING_ROUTE,
  //   children: [
  //     { label: 'Departamentos/Cursos', href: '#', children: [
  //       { label: 'Departamento de Engenharias e Tecnologias (DET)', href: routes.DET_DEPARTMENT_ROUTE },
  //       { label: 'Departamento de Geociências (DGC)', href: routes.DGC_DEPARTMENT_ROUTE },
  //       { label: 'Departamento de Ciências Sociais Aplicadas (DCSA)', href: routes.DCSA_DEPARTMENT_ROUTE },
  //       { label: 'Corpo Docente', href: routes.FACULTY_ROUTE },
  //     ]},
  //     { label: 'Biblioteca', href: '#', children: [
  //       { label: 'Apresentação', href: routes.LIBRARY_ROUTE },
  //       { label: 'Regulamentos e Normas', href: routes.STUDENT_REGULATIONS_ROUTE },
  //     ]}
  //   ]
  // },
  {
    label: 'Investigação',
    href: routes.RESEARCH_ROUTE,
    children: [
      { label: 'Politica para a Investigação e Desenvolvimento (I&D)', href: routes.RESEARCH_POLICY_ROUTE },
      { label: 'Guia para a Elaboração de Projectos de Investigação Científica', href: routes.RESEARCH_GUIDE_ROUTE },
      { label: 'Jornadas Científicas e Tecnológicas', href: routes.SCIENTIFIC_JOURNEYS_ROUTE },
      { label: 'Prémio Inovação do ISPML', href: routes.INNOVATION_AWARD_ROUTE },
      { label: 'Ciclo de Palestras do ISPML', href: routes.LECTURE_SERIES_ROUTE },
      { label: 'Publicações em Revista com Impacto', href: routes.IMPACT_PUBLICATIONS_ROUTE },
      { label: 'Publicações em Revista sem Impacto', href: routes.NON_IMPACT_PUBLICATIONS_ROUTE },
      { label: 'Centros de Investigação', href: '#', children: [
        { label: 'Centro de Investigação das Ciências Sociais Aplicadas (CICSA)', href: routes.CICSA_ROUTE },
      ]},
      { label: 'Pós-Graduações', href: '#', children: [
        { label: 'Programas Académicos (AMITY-ISPML)', href: routes.AMITY_PROGRAM_PT_ROUTE, target: '_blank' },
        { label: 'Academic Programmes (AMITY-ISPML)', href: routes.AMITY_PROGRAM_EN_ROUTE, target: '_blank' },
      ]}
    ]
  },
  {
    label: 'Extensão',
    href: routes.EXTENSION_ROUTE,
    children: [
      { label: 'Política de Extensão', href: routes.EXTENSION_POLICY_ROUTE },
      { label: 'Projectos de Transferência de Conhecimento para a Sociedade', href: routes.KNOWLEDGE_TRANSFER_ROUTE },
      { label: 'Estágios não Obrigatório', href: routes.NON_SUPERVISED_INTERNSHIPS_ROUTE },
      { label: 'Programa de Promoção ao Empreendedorismo', href: routes.ENTREPRENEURSHIP_PROMOTION_ROUTE },
      { label: 'Olimpíadas Científicas', href: routes.SCIENTIFIC_OLYMPIADS_ROUTE },
      { label: 'Serviços de Carreira e Empregabilidade', href: routes.CAREER_SERVICES_ROUTE },
      { label: 'Cursos de Curta Duração', href: routes.SHORT_COURSES_ROUTE },
      { label: 'Centro de Ensino de Línguas- CEL', href: routes.LANGUAGE_CENTER_ROUTE },
      { label: 'Programa "A Empresa na Universidade"', href: routes.UNIVERSITY_BUSINESS_PROGRAM_ROUTE },
    ]
  },
  // {
  //   label: 'Acadêmico',
  //   href: '#',
  //   children: [
  //     { label: 'Cursos', href: '/courses' },
  //     { label: 'Biblioteca', href: '/library' },
  //     { label: 'Horários', href: '/schedules' },
  //     { label: 'Calendário', href: '/calendar' },
  //   ]
  // },
  // {
  //   label: 'Campus',
  //   href: '#',
  //   children: [
  //     { label: 'Mapa', href: '/map' },
  //     { label: 'Acomodações', href: '/accommodations' },
  //     { label: 'Refeitório', href: '/cafeteria' },
  //     { label: 'Estacionamento', href: '/parking' },
  //     { label: 'Segurança', href: '/security' },
  //     { label: 'Eventos', href: '/events' },
  //   ]
  // },
  // {
  //   label: 'Estudantes',
  //   href: '#',
  //   children: [
  //     { label: 'Portal do Estudante', href: '/student-portal' },
  //     { label: 'Alumni', href: '/alumni' },
  //     { label: 'Associações', href: '/associations' },
  //   ]
  // },
// { label: 'Biblioteca', href: '/library' },
  { label: 'Contato', href: '/contact' },
  { label: 'Notícias', href: '/news' }, 
];

export const carouselItems = [
  {
    background: images.teachers.teacher2,
    title: 'Bem-vindo à ISPML',
    description: 'As inscrições estão abertas! Junte-se a nós e transforme o seu futuro.',
    cta: 'Inscreva-se Agora',
    link: '/apply'
  },
  {
    background: images.backgrounds.bg1,
    title: 'Excelência Acadêmica',
    description: 'Oferecemos cursos de alta qualidade para preparar você para o mercado de trabalho.',
    cta: 'Saiba Mais',
    link: '/courses'
  },
  {
    background: images.teachers.teacher1,
    title: 'Pesquisa e Inovação',
    description: 'Participe de projetos inovadores e contribua para o avanço do conhecimento.',
    cta: 'Descubra',
    link: '/research'
  },
  {
    background: images.teachers.teacher3,
    title: 'Vida Universitária',
    description: 'Experimente uma vida universitária vibrante e cheia de atividades.',
    cta: 'Explore',
    link: '/campus-life'
  }
];