/* eslint-disable @typescript-eslint/no-explicit-any */
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

export const navigationItems = (t: any): NavigationItem[] => {
  return [
    {
      label: 'navbar.about',
      href: routes.ABOUT_ROUTE,
      // children: [
      //   { label: 'navbar.presidentMessage', href: routes.PRESIDENT_MESSAGE_ROUTE },
      //   { label: 'navbar.institutionalPresentation', href: routes.INSTITUTIONAL_PRESENTATION_ROUTE },
      // ]
    },
    {
      label: 'navbar.studyAtISPSML',
      href: "#",
      children: (
        <div className="grid grid-cols-3 gap-4 px-4 py-4 children-nav">
          <div>
            <h3>{t('navbar.academicServicesSection.academicServices')}</h3>
            <ul>
              <li>
                <a href={routes.ACADEMIC_CALENDAR_ROUTE}>
                  {t('navbar.academicServicesSection.academicCalendar')}
                </a>
              </li>
              <li>
                <a href={routes.STUDENT_MOBILITY_ROUTE}>
                  {t('navbar.academicServicesSection.studentMobility')}
                </a>
              </li>
              <li>
                <a href={routes.RULES_MODAL_ROUTE} data-target="#rules-modal" data-toggle="modal">
                  {t('navbar.academicServicesSection.regulations')}
                </a>
              </li>
              <li>
                <a href={routes.EXAM_RESULTS_ROUTE} data-target="#lista-modal" data-toggle="modal">
                  {t('navbar.academicServicesSection.examResults')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>{t('navbar.allApplicationLinksSection.informationGeneral')}</h3>
            <ul>
              <li>{t('navbar.allApplicationLinksSection.academicProgramsAll')}</li>
              <li>{t('navbar.allApplicationLinksSection.onlineApplication')}</li>
              <li>{t('navbar.allApplicationLinksSection.onlineApplicationGuideReturning')}</li>
              <li>{t('navbar.allApplicationLinksSection.prospects')}</li>
            </ul>
          </div>
          <div>
            <h3>{t('navbar.undergraduateStudentsSection.undergraduateStudents')}</h3>
            <ul>
              <li>{t('navbar.undergraduateStudentsSection.admissionRequirements')}</li>
              <li>{t('navbar.undergraduateStudentsSection.programBrochure')}</li>
              <li>{t('navbar.undergraduateStudentsSection.fees')}</li>
            </ul>
          </div>
          <div>
            <h3>{t('navbar.postgraduateStudentsSection.postgraduateStudents')}</h3>
            <ul>
              <li>{t('navbar.postgraduateStudentsSection.admissionRequirements')}</li>
              <li>{t('navbar.postgraduateStudentsSection.programBrochure')}</li>
              <li>{t('navbar.postgraduateStudentsSection.fees')}</li>
              <li>{t('navbar.postgraduateStudentsSection.onlineApplication')}</li>
              <li>{t('navbar.postgraduateStudentsSection.applicationGuide')}</li>
              <li>{t('navbar.postgraduateStudentsSection.prospects')}</li>
            </ul>
          </div>
          <div>
            <h3>{t('navbar.internationalStudentsSection.internationalStudents')}</h3>
            <ul>
              <li>{t('navbar.internationalStudentsSection.academicPrograms')}</li>
              <li>{t('navbar.internationalStudentsSection.fees')}</li>
              <li>{t('navbar.internationalStudentsSection.onlineApplication')}</li>
              <li>{t('navbar.internationalStudentsSection.onlineRegistration')}</li>
              <li>{t('navbar.internationalStudentsSection.prospects')}</li>
            </ul>
          </div>
          <div>
            <h3>{t('navbar.studentFeesSection.studentFees')}</h3>
            <ul>
              <li>{t('navbar.studentFeesSection.programBrochureFees')}</li>
              <li>{t('navbar.studentFeesSection.onlinePayment')}</li>
              <li>{t('navbar.studentFeesSection.directDebitForm')}</li>
              <li>{t('navbar.studentFeesSection.refundProcess')}</li>
              <li>{t('navbar.studentFeesSection.servicesHealth')}</li>
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
      label: 'navbar.research.label',
      href: routes.RESEARCH_ROUTE,
      // children: [
      //   { label: 'navbar.research.policy', href: routes.RESEARCH_POLICY_ROUTE },
      //   { label: 'navbar.research.guide', href: routes.RESEARCH_GUIDE_ROUTE },
      //   { label: 'navbar.research.scientificJourneys', href: routes.SCIENTIFIC_JOURNEYS_ROUTE },
      //   { label: 'navbar.research.innovationAward', href: routes.INNOVATION_AWARD_ROUTE },
      //   { label: 'navbar.research.lectureSeries', href: routes.LECTURE_SERIES_ROUTE },
      //   { label: 'navbar.research.impactPublications', href: routes.IMPACT_PUBLICATIONS_ROUTE },
      //   { label: 'navbar.research.nonImpactPublications', href: routes.NON_IMPACT_PUBLICATIONS_ROUTE },
      //   { label: 'navbar.research.researchCenters', href: routes.CICSA_ROUTE },
      //   { label: 'navbar.research.postgraduatePrograms', href: routes.POSTGRADUATE_PROGRAMS_ROUTE },
      // ]
    },
    {
      label: 'navbar.extension',
      href: routes.EXTENSION_ROUTE,
      // children: [
      //   { label: 'navbar.extensionSection.policy', href: routes.EXTENSION_POLICY_ROUTE },
      //   { label: 'navbar.extensionSection.knowledgeTransfer', href: routes.KNOWLEDGE_TRANSFER_ROUTE },
      //   { label: 'navbar.extensionSection.nonSupervisedInternships', href: routes.NON_SUPERVISED_INTERNSHIPS_ROUTE },
      //   { label: 'navbar.extensionSection.entrepreneurshipPromotion', href: routes.ENTREPRENEURSHIP_PROMOTION_ROUTE },
      //   { label: 'navbar.extensionSection.scientificOlympiads', href: routes.SCIENTIFIC_OLYMPIADS_ROUTE },
      //   { label: 'navbar.extensionSection.careerServices', href: routes.CAREER_SERVICES_ROUTE },
      //   { label: 'navbar.extensionSection.shortCourses', href: routes.SHORT_COURSES_ROUTE },
      //   { label: 'navbar.extensionSection.languageCenter', href: routes.LANGUAGE_CENTER_ROUTE },
      //   { label: 'navbar.extensionSection.universityBusinessProgram', href: routes.UNIVERSITY_BUSINESS_PROGRAM_ROUTE },
      // ]
    },
    {
      label: 'navbar.more.title',
      href: "#",
      children: [
        { label: 'navbar.more.studentPortal', href: routes.STUDENT_PORTAL_ROUTE },
        { label: 'navbar.more.alumni', href: routes.ALUMNI_ROUTE },
        { label: 'navbar.more.library', href: "#" },
        { label: 'navbar.more.associations', href: routes.ASSOCIATIONS_ROUTE },
        { label: 'navbar.more.contact', href: routes.CONTACT_ROUTE },
        { label: 'navbar.more.news', href: routes.NEWS_ROUTE },
      ]
    },
  // { label: 'Biblioteca', href: routes.LIBRARY_ROUTE },
   
  ];
};

export const carouselItems = [
  {
    background: images.teachers.teacher2,
    title: 'Bem-vindo à ISPSML',
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

export const searchItems = (t: any) => [
  { label: t('navbar.about'), href: routes.ABOUT_ROUTE },
  { label: "Unidade Organica", href: routes.ORGANIC_UNIT_ROUTE },
  { label: t('navbar.research.label'), href: routes.RESEARCH_ROUTE },
  { label: t('navbar.extension'), href: routes.EXTENSION_ROUTE },
  { label: t('navbar.more.news'), href: routes.NEWS_ROUTE },
  { label: t('navbar.more.contact'), href: routes.CONTACT_ROUTE },
  // Adicionar mais itens conforme necessário
];