const HOME_ROUTE = "/home",
  LOGIN_ROUTE = "/login",
  REGISTER_ROUTE = "/register",
  KNOW_MORE_ROUTE = "/know-more",
  ORGANIC_UNIT_ROUTE = "/organic-unit",
  DASHBOARD_ROUTE = "/dashboard",
  VIEW_COURSE_ROUTE = "/course/",
  CSA_ROUTE = "/csa-unit",
  GEOSCIENCE_ROUTE = "/geoscience-department",
  DET_ROUTER = "/ispsml-det",
  VIEW_DEP = "/dashboard/manage-departments/view",
  ABOUT_ROUTE = "/about",
  SOCIAL_REPONSABILITY_ROUTE = "/social-responsability",
  ACADEMIC_SERVICES_ROUTE = "/academic-services",
  TEACHING_ROUTE = "/teaching",
  RESEARCH_ROUTE = "/research",
  EXTENSION_ROUTE = "/extension",
  ACADEMIC_CALENDAR_ROUTE = "/calendario-academico",
  STUDENT_MOBILITY_ROUTE = "/mobilidadeestudantil",
  ALUMNI_ROUTE = "/alumni",
  RULES_MODAL_ROUTE = "#rules-modal",
  EDITAL_MODAL_ROUTE = "#edital-modal",
  EXAM_RESULTS_ROUTE = "#lista-modal",
  DET_DEPARTMENT_ROUTE = "/departamento/departamento-de-engenharias-e-tecnologias",
  DGC_DEPARTMENT_ROUTE = "/departamento/departamento-de-geociencias",
  DCSA_DEPARTMENT_ROUTE = "/departamento/departamento-de-ciencias-sociais-aplicadas",
  FACULTY_ROUTE = "/docentes",
  LIBRARY_ROUTE = "/biblioteca",
  STUDENT_REGULATIONS_ROUTE = "/regulamentoestudantil",
  RESEARCH_POLICY_ROUTE = "/politicai",
  RESEARCH_GUIDE_ROUTE = "/guiaelaboracao",
  SCIENTIFIC_JOURNEYS_ROUTE = "/jornadas",
  INNOVATION_AWARD_ROUTE = "/premio-inovacao",
  LECTURE_SERIES_ROUTE = "/ciclo-de-palestras",
  IMPACT_PUBLICATIONS_ROUTE = "/publicacao-com-impacto",
  NON_IMPACT_PUBLICATIONS_ROUTE = "/publicacao-sem-impacto",
  CICSA_ROUTE = "/centro-investigacoes-dsa",
  AMITY_PROGRAM_PT_ROUTE = "/public/assets/uploads/docs/ISPSML_Proposal_2021_PT.pdf",
  AMITY_PROGRAM_EN_ROUTE = "/public/assets/uploads/docs/ISPSML_Proposal_EN.pdf",
  EXTENSION_POLICY_ROUTE = "/politica-de-extensao",
  KNOWLEDGE_TRANSFER_ROUTE = "/projecto-transferencia-de-conhecimento",
  NON_SUPERVISED_INTERNSHIPS_ROUTE = "/estagio-nao-supervisionado",
  ENTREPRENEURSHIP_PROMOTION_ROUTE = "/promocao-ao-empreendedorismo",
  SCIENTIFIC_OLYMPIADS_ROUTE = "/olimpiadas-cientificas",
  CAREER_SERVICES_ROUTE = "/servico-carreira-empregabilidade",
  SHORT_COURSES_ROUTE = "/programa-proaccao",
  LANGUAGE_CENTER_ROUTE = "/cel",
  UNIVERSITY_BUSINESS_PROGRAM_ROUTE = "/program-empresa",
  PRESIDENT_MESSAGE_ROUTE = "/mensagem-direcao",
  INSTITUTIONAL_PRESENTATION_ROUTE = "/apresentacao-institucional",
  ORGANOGRAM_ROUTE = "/organigrama",
  MISSION_VISION_VALUES_ROUTE = "/missao",
  HISTORY_ROUTE = "/historico",
  INFRASTRUCTURES_ROUTE = "/infraestruturas",
  LEGISLATION_ROUTE = "/legislacao",
  AGREEMENTS_ROUTE = "/convenios",
  SOCIAL_ACTION_ROUTE = "/accao-social",
  CODE_OF_CONDUCT_ROUTE = "/public/assets/uploads/docs/CCE_ISPSML.pdf",
  STUDENT_PORTAL_ROUTE = "/student-portal",
  ASSOCIATIONS_ROUTE = "/associations",
  CONTACT_ROUTE = "/contact",
  NEWS_ROUTE = "/news",
  APPLY_ROUTE = "/apply",
  VIEW_NEWS_ROUTE = NEWS_ROUTE,
  POSTGRADUATE_PROGRAMS_ROUTE = "/postgraduate-programs",
  PRESIDENCY_OFFICE_ROUTE = ABOUT_ROUTE + "/presidency-office",
  PROMOTOR_OFFICE_ROUTE = ABOUT_ROUTE + "/promotor-office",
  ADMISSIONS_AND_SCHOLARSHIPS_ROUTE = "/admissions-and-scholarships",
  NEW_DEP = "/dashboard/manage-departments/new",
  ADMISSIONS_FORM_ROUTE = ADMISSIONS_AND_SCHOLARSHIPS_ROUTE + "/admissions-form",
  DEPARTMENTS = {
    ENGINEERING: "engineering",
    GEOSCIENCE: "geoscience",
    CSA: "csa",
    MASTERS: "masters",
    PROFESSIONAL: "professional",
    PREPARATORY: "preparatory"
  },
  MANAGE_DEPARTMENTS = "/dashboard/manage-departments",
  MANAGE_ROLES = "/dashboard/manage-roles",
  EDIT_DEP = "/dashboard/manage-departments/edit",
  MANAGE_EVENT = "dashboard/events",
  ALL_EVENT = "/events",
  EDIT_EVENT = "/dashboard/events/edit";


export const routes = {
  HOME_ROUTE,
  ALL_EVENT,
  MANAGE_EVENT,
  MANAGE_ROLES,
  GEOSCIENCE_ROUTE,
  EDIT_EVENT,
  EDIT_DEP,
  NEW_DEP,
  MANAGE_DEPARTMENTS,
  VIEW_NEWS_ROUTE,
  VIEW_DEP,
  PRESIDENCY_OFFICE_ROUTE,
  PROMOTOR_OFFICE_ROUTE,
  LOGIN_ROUTE,
  ADMISSIONS_FORM_ROUTE,
  ORGANIC_UNIT_ROUTE,
  CSA_ROUTE,
  VIEW_COURSE_ROUTE,
  REGISTER_ROUTE,
  DASHBOARD_ROUTE,
  DET_ROUTER,
  ABOUT_ROUTE,
  ACADEMIC_SERVICES_ROUTE,
  ADMISSIONS_AND_SCHOLARSHIPS_ROUTE,
  TEACHING_ROUTE,
  RESEARCH_ROUTE,
  EXTENSION_ROUTE,
  ACADEMIC_CALENDAR_ROUTE,
  STUDENT_MOBILITY_ROUTE,
  SOCIAL_REPONSABILITY_ROUTE,
  ALUMNI_ROUTE,
  RULES_MODAL_ROUTE,
  EDITAL_MODAL_ROUTE,
  EXAM_RESULTS_ROUTE,
  DET_DEPARTMENT_ROUTE,
  DGC_DEPARTMENT_ROUTE,
  DCSA_DEPARTMENT_ROUTE,
  FACULTY_ROUTE,
  LIBRARY_ROUTE,
  STUDENT_REGULATIONS_ROUTE,
  RESEARCH_POLICY_ROUTE,
  RESEARCH_GUIDE_ROUTE,
  SCIENTIFIC_JOURNEYS_ROUTE,
  INNOVATION_AWARD_ROUTE,
  LECTURE_SERIES_ROUTE,
  IMPACT_PUBLICATIONS_ROUTE,
  NON_IMPACT_PUBLICATIONS_ROUTE,
  CICSA_ROUTE,
  AMITY_PROGRAM_PT_ROUTE,
  KNOW_MORE_ROUTE,
  AMITY_PROGRAM_EN_ROUTE,
  EXTENSION_POLICY_ROUTE,
  KNOWLEDGE_TRANSFER_ROUTE,
  NON_SUPERVISED_INTERNSHIPS_ROUTE,
  ENTREPRENEURSHIP_PROMOTION_ROUTE,
  SCIENTIFIC_OLYMPIADS_ROUTE,
  CAREER_SERVICES_ROUTE,
  SHORT_COURSES_ROUTE,
  LANGUAGE_CENTER_ROUTE,
  UNIVERSITY_BUSINESS_PROGRAM_ROUTE,
  PRESIDENT_MESSAGE_ROUTE,
  INSTITUTIONAL_PRESENTATION_ROUTE,
  ORGANOGRAM_ROUTE,
  MISSION_VISION_VALUES_ROUTE,
  HISTORY_ROUTE,
  INFRASTRUCTURES_ROUTE,
  LEGISLATION_ROUTE,
  AGREEMENTS_ROUTE,
  SOCIAL_ACTION_ROUTE,
  CODE_OF_CONDUCT_ROUTE,
  STUDENT_PORTAL_ROUTE,
  ASSOCIATIONS_ROUTE,
  CONTACT_ROUTE,
  APPLY_ROUTE,
  NEWS_ROUTE,
  POSTGRADUATE_PROGRAMS_ROUTE,
  DEPARTMENTS
};