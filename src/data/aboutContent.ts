import { images } from "@/assets";

export const content = {
    'apresentacao-institucional': {
        title: 'Apresentação Institucional',
        text: 'O ISPSML destaca-se como uma instituição de ensino superior que valoriza a formação integral dos seus estudantes, preparando-os para enfrentar os desafios do mercado de trabalho e contribuir para o progresso social e econômico de Angola. Com base em princípios de excelência acadêmica, ética e responsabilidade social, a instituição busca constantemente aprimorar suas práticas pedagógicas e ampliar suas áreas de atuação.',
        bg: images.backgrounds.bg_student_11.src
    },
    'infraestruturas': {
        title: 'Infraestruturas',
        text: 'O ISPSML dispõe de uma infraestrutura moderna e adequada para o ensino superior, incluindo salas de aula equipadas, laboratórios de pesquisa e informática, bibliotecas com acervos atualizados, auditórios para eventos acadêmicos e espaços de convivência para os estudantes. A instituição busca constantemente a ampliação e modernização de suas instalações para garantir um ambiente propício ao aprendizado e à inovação.',
        bg: images.backgrounds.bg_graduated_student_1.src
    },
    'convenios-e-protocolos': {
        title: 'Convênios e Protocolos',
        text: 'Com o objetivo de expandir suas oportunidades acadêmicas e científicas, o ISPSML estabelece convênios e parcerias com diversas instituições nacionais e internacionais. Esses acordos possibilitam intercâmbios, programas de mobilidade acadêmica, pesquisas conjuntas e o fortalecimento das relações institucionais, beneficiando alunos e docentes na construção de uma educação de qualidade.',
        bg: images.backgrounds.bg_graduated_student_2.src
    },
    'organigrama': {
        title: 'Organigrama',
        text: 'A estrutura organizacional do ISPSML é composta por órgãos executivos e colegiados de gestão que garantem o bom funcionamento da instituição. O Órgão Executivo de Gestão é liderado pelo Presidente, apoiado por Vice-Presidentes nas áreas Acadêmica e Vida Estudantil, Científica e Pós-graduação, além do Secretário-Geral. Já os Órgãos Colegiais de Gestão incluem os Conselhos de Administração, Acadêmico e Científico, que definem as diretrizes estratégicas da instituição.',
        bg: images.backgrounds.bg_school_4.src
    },
    'codigo-de-conduta-e-etica': {
        title: 'Código de Conduta e Ética',
        text: 'O ISPSML adota um rigoroso Código de Conduta e Ética, baseado em princípios de integridade, respeito, transparência e responsabilidade social. A instituição promove um ambiente acadêmico pautado na moralidade, garantindo que docentes, estudantes e colaboradores atuem de forma ética e comprometida com os valores institucionais.',
        bg: images.backgrounds.bg_school_2.src
    },
    'acao-social': {
        title: 'Ação Social',
        text: 'Como parte do seu compromisso com a responsabilidade social, o ISPSML desenvolve diversas iniciativas voltadas para a comunidade. São promovidos projetos de extensão, assistência social, programas de inclusão e parcerias com organizações sociais para contribuir com o desenvolvimento sustentável e a melhoria da qualidade de vida da população.',
        bg: images.backgrounds.bg_vertical_education_1.src
    },
    'mensagem-de-direcao': {
        title: 'Mensagem de Direção',
        text: 'A Direção do ISPSML reforça o compromisso da instituição em oferecer um ensino de excelência, alinhado às demandas do mundo moderno e às necessidades do país. Com uma equipe de profissionais qualificados e uma estrutura organizacional eficiente, a instituição busca continuamente inovar e fortalecer sua contribuição para o desenvolvimento acadêmico, científico e social de Angola.',
        bg: images.backgrounds.bg_student_11.src
    },
    'legislacao': {
        title: 'Legislação',
        text: 'O ISPSML opera em conformidade com as normas estabelecidas pelo Ministério do Ensino Superior, Ciência, Tecnologia e Inovação de Angola. A instituição segue todas as diretrizes legais relacionadas à educação superior, garantindo a qualidade dos cursos, a regulamentação acadêmica e a certificação dos seus estudantes.',
        bg: images.backgrounds.bg_graduated_student_1.src
    }
};

export const ourInst = Object.keys(content).map(key => ({
    bg: content[key as keyof typeof content].bg,
    link: key,
    title: content[key as keyof typeof content].title
}));
