import { images } from "@/assets";
import type { ICourse } from "../interfaces/course.interface";

export const coursesData: {
  [key: string]: { name: string, catalog_link: string, department_cover: string; courses: ICourse[], departmentDirector: { name: string, picture: string } };
} = {
  engineering: {
    catalog_link: "https://docs.google.com/document/d/1zlmEIrShckNeRXmscaReMwYFMpAKJRlgRZUV2Ft9GnI/edit?usp=sharing",
    name: "Engenharias Aplicadas",
    department_cover:
      images.departImages.eng_tech.src,
    departmentDirector: {
      name: "João A. Katombela",
      picture: images.teachers.katumbela.src
    },
    courses: [
      {
        course: "Engenharia Informática",
        duration: 4,
        level: "graduation",
        short_detail:
          "Formação em desenvolvimento e gestão de sistemas computacionais",
        slug: "engenharia-informatica-graduacao",
        long_description:
          "O curso de Engenharia Informática forma profissionais capacitados para projetar, desenvolver e gerir sistemas computacionais. Com forte ênfase em programação, banco de dados, redes de computadores e inteligência artificial, os graduados estão preparados para atuar em diversos setores tecnológicos, contribuindo para a transformação digital das organizações. Além disso, o curso oferece uma base sólida em matemática e física, preparando os alunos para enfrentar desafios complexos na área de tecnologia. O curso também inclui disciplinas de ética e responsabilidade social, garantindo que os profissionais formados estejam cientes do impacto de suas ações na sociedade.",
        benefits: [
          "Este diplomado está orientado a proporcionar os conhecimentos, modelos, métodos e  ",
          "Permitirá criar seu próprio caso de aplicação de um projeto aplicável ao seu ambiente de trabalho, ",
          "Durante o diplomado será utilizado o software Microsoft Project Online, Plano 3. E, portanto, como parte  ",
          "O diplomado fornecerá os fundamentos para que o participante posteriormente possa continuar na ",
          "O participante será um agente de mudança na organização para produzir projetos de valor para a organização. ",
          "Compreenderá e aplicará a Abordagem de Desenvolvimento Preditivo e a Abordagem Híbrida, permitindo uma maior."
        ],
        shift: {
          afternoon: true,
          morning: true,
          evening: false,
        },
        course_cover:
          "https://png.pngtree.com/thumb_back/fh260/background/20220312/pngtree-notebook-computer-electronic-equipment-science-and-technology-particles-image_1062240.jpg",
        years: [
          {
            year: 1,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Programação I", workload: 60 },
                  { name: "Matemática Discreta", workload: 60 },
                  { name: "Álgebra Linear", workload: 45 },
                  { name: "Introdução à Computação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Programação II", workload: 60 },
                  { name: "Estruturas de Dados", workload: 60 },
                  { name: "Arquitetura de Computadores", workload: 45 },
                  { name: "Cálculo I", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 2,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Programação III", workload: 60 },
                  { name: "Banco de Dados I", workload: 60 },
                  { name: "Redes de Computadores I", workload: 45 },
                  { name: "Cálculo II", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Engenharia de Software I", workload: 60 },
                  { name: "Banco de Dados II", workload: 60 },
                  { name: "Redes de Computadores II", workload: 45 },
                  { name: "Cálculo III", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 3,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Inteligência Artificial I", workload: 60 },
                  { name: "Sistemas Operacionais", workload: 60 },
                  { name: "Compiladores", workload: 45 },
                  { name: "Cálculo IV", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Inteligência Artificial II", workload: 60 },
                  { name: "Sistemas Distribuídos", workload: 60 },
                  { name: "Segurança da Informação", workload: 45 },
                  { name: "Cálculo V", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 4,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Projeto de TCC I", workload: 60 },
                  { name: "Empreendedorismo", workload: 60 },
                  { name: "Gestão de Projetos", workload: 45 },
                  { name: "Ética e Legislação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Projeto de TCC II", workload: 60 },
                  { name: "Inovação Tecnológica", workload: 60 },
                  { name: "Gestão de TI", workload: 45 },
                  { name: "Direito Digital", workload: 45 },
                ],
              },
            ],
          },
        ],
      },
      {
        course: "Ciência da Computação",
        duration: 5,
        level: "graduation",
        short_detail: "Formação avançada em computação e suas aplicações",
        slug: "ciencia-computacao-graduacao",
        long_description:
          "O curso de Ciência da Computação oferece uma formação sólida em fundamentos teóricos e práticos da computação. Os estudantes desenvolvem competências em algoritmos, teoria da computação, desenvolvimento de software, inteligência artificial e computação científica, preparando-se para carreiras em pesquisa, desenvolvimento e inovação tecnológica. O curso também abrange áreas emergentes como computação quântica, aprendizado de máquina e ciência de dados, proporcionando uma visão abrangente e atualizada do campo.",
        benefits: [
          "Desenvolver habilidades em algoritmos e programação.",
          "Preparação para carreiras em pesquisa e desenvolvimento.",
          "Visão abrangente das áreas emergentes da computação.",
          "Oportunidades de estágio em empresas de tecnologia.",
          "Base sólida em teoria da computação e desenvolvimento de software.",
        ],
        shift: {
          afternoon: true,
          morning: true,
          evening: false,
        },
        course_cover: "https://img.lovepik.com/photo/50036/0163.jpg_wh860.jpg",
        years: [
          {
            year: 1,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Algoritmos e Lógica de Programação", workload: 60 },
                  { name: "Cálculo Diferencial e Integral I", workload: 60 },
                  { name: "Geometria Analítica", workload: 45 },
                  { name: "Fundamentos de Computação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Estruturas de Dados", workload: 60 },
                  { name: "Cálculo Diferencial e Integral II", workload: 60 },
                  { name: "Álgebra Linear", workload: 45 },
                  { name: "Lógica Matemática", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 2,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Teoria da Computação", workload: 60 },
                  { name: "Probabilidade e Estatística", workload: 60 },
                  { name: "Programação Orientada a Objetos", workload: 45 },
                  { name: "Cálculo Diferencial e Integral III", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Análise de Algoritmos", workload: 60 },
                  { name: "Banco de Dados", workload: 60 },
                  { name: "Redes de Computadores", workload: 45 },
                  { name: "Cálculo Diferencial e Integral IV", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 3,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Inteligência Artificial", workload: 60 },
                  { name: "Sistemas Operacionais", workload: 60 },
                  { name: "Compiladores", workload: 45 },
                  { name: "Cálculo Diferencial e Integral V", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Aprendizado de Máquina", workload: 60 },
                  { name: "Sistemas Distribuídos", workload: 60 },
                  { name: "Segurança da Informação", workload: 45 },
                  { name: "Cálculo Diferencial e Integral VI", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 4,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Projeto de TCC I", workload: 60 },
                  { name: "Empreendedorismo", workload: 60 },
                  { name: "Gestão de Projetos", workload: 45 },
                  { name: "Ética e Legislação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Projeto de TCC II", workload: 60 },
                  { name: "Inovação Tecnológica", workload: 60 },
                  { name: "Gestão de TI", workload: 45 },
                  { name: "Direito Digital", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 5,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Computação Quântica", workload: 60 },
                  { name: "Ciência de Dados", workload: 60 },
                  { name: "Big Data", workload: 45 },
                  { name: "Computação em Nuvem", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Tópicos Avançados em Computação", workload: 60 },
                  { name: "Computação Gráfica", workload: 60 },
                  { name: "Processamento de Imagens", workload: 45 },
                  { name: "Realidade Virtual", workload: 45 },
                ],
              },
            ],
          },
        ],
      },
      {
        course: "Engenharia Química",
        duration: 5,
        level: "graduation",
        short_detail: "Formação em processos químicos e industriais",
        slug: "engenharia-quimica-graduacao",
        long_description:
          "O curso de Engenharia Química oferece uma formação abrangente em processos químicos e industriais. Os alunos aprendem a projetar, otimizar e operar processos de produção de produtos químicos, petroquímicos, farmacêuticos e de alimentos. O curso também aborda questões ambientais e de sustentabilidade, preparando os engenheiros para desenvolver soluções inovadoras e sustentáveis para a indústria. Além disso, os estudantes têm a oportunidade de realizar estágios em empresas do setor, adquirindo experiência prática e ampliando suas perspectivas de carreira.",
        benefits: [
          "Formação abrangente em processos químicos e industriais.",
          "Preparação para atuar em setores como petroquímica e farmacêutica.",
          "Ênfase em sustentabilidade e soluções inovadoras.",
          "Oportunidades de estágio em empresas do setor.",
          "Desenvolvimento de competências em otimização de processos.",
        ],
        shift: {
          afternoon: true,
          morning: true,
          evening: false,
        },
        course_cover: "https://media.licdn.com/dms/image/C4E12AQH-nHcc3zIBkw/article-cover_image-shrink_600_2000/0/1626620547094?e=2147483647&v=beta&t=PEk7a2ABf8U3jrQTuvr1R6AIHsXDqJI4TQFlN-H7IJw",
        years: [
          {
            year: 1,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Matemática I", workload: 60 },
                  { name: "Química I", workload: 60 },
                  { name: "Física I", workload: 45 },
                  { name: "Introdução à Engenharia Química", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Matemática II", workload: 60 },
                  { name: "Química II", workload: 60 },
                  { name: "Física II", workload: 45 },
                  { name: "Termodinâmica I", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 2,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Matemática III", workload: 60 },
                  { name: "Química Orgânica I", workload: 60 },
                  { name: "Física III", workload: 45 },
                  { name: "Termodinâmica II", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Matemática IV", workload: 60 },
                  { name: "Química Orgânica II", workload: 60 },
                  { name: "Física IV", workload: 45 },
                  { name: "Mecânica dos Fluidos", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 3,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Operações Unitárias I", workload: 60 },
                  { name: "Reatores Químicos I", workload: 60 },
                  { name: "Transferência de Calor", workload: 45 },
                  { name: "Cálculo Numérico", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Operações Unitárias II", workload: 60 },
                  { name: "Reatores Químicos II", workload: 60 },
                  { name: "Transferência de Massa", workload: 45 },
                  { name: "Controle de Processos", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 4,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Projeto de TCC I", workload: 60 },
                  { name: "Engenharia Ambiental", workload: 60 },
                  { name: "Gestão de Projetos", workload: 45 },
                  { name: "Ética e Legislação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Projeto de TCC II", workload: 60 },
                  { name: "Inovação Tecnológica", workload: 60 },
                  { name: "Gestão de TI", workload: 45 },
                  { name: "Direito Digital", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 5,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Engenharia de Processos", workload: 60 },
                  { name: "Biotecnologia", workload: 60 },
                  { name: "Nanotecnologia", workload: 45 },
                  { name: "Sustentabilidade", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  {
                    name: "Tópicos Avançados em Engenharia Química",
                    workload: 60,
                  },
                  { name: "Processos Industriais", workload: 60 },
                  { name: "Segurança de Processos", workload: 45 },
                  { name: "Gestão Ambiental", workload: 45 },
                ],
              },
            ],
          },
        ],
      },
      {
        course: "Engenharia Informática",
        duration: 4,
        level: "graduation",
        short_detail:
          "Formação em desenvolvimento e gestão de sistemas computacionais",
        slug: "engenharia-informatica-graduacao",
        long_description:
          "O curso de Engenharia Informática forma profissionais capacitados para projetar, desenvolver e gerir sistemas computacionais. Com forte ênfase em programação, banco de dados, redes de computadores e inteligência artificial, os graduados estão preparados para atuar em diversos setores tecnológicos, contribuindo para a transformação digital das organizações. Além disso, o curso oferece uma base sólida em matemática e física, preparando os alunos para enfrentar desafios complexos na área de tecnologia. O curso também inclui disciplinas de ética e responsabilidade social, garantindo que os profissionais formados estejam cientes do impacto de suas ações na sociedade.",
        benefits: [
          "Este diplomado está orientado a proporcionar os conhecimentos, modelos, métodos e artefatos práticos para aplicar e gerir efetivamente projetos, mediante o desenvolvimento de um projeto real durante todo o diplomado. Os alunos terão a oportunidade de trabalhar em projetos colaborativos, desenvolvendo habilidades de trabalho em equipe e comunicação.",
          "Permitirá criar seu próprio caso de aplicação de um projeto aplicável ao seu ambiente de trabalho, proporcionando uma experiência prática e relevante que pode ser diretamente aplicada em sua carreira profissional.",
          "Durante o diplomado será utilizado o software Microsoft Project Online, Plano 3. E, portanto, como parte do diplomado será fornecida a cada participante esta ferramenta computacional para utilização durante o diplomado e aplicação no projeto a ser desenvolvido. Além disso, os alunos receberão treinamento especializado no uso desta ferramenta, garantindo que possam utilizá-la de forma eficaz em seus projetos futuros.",
          "O diplomado fornecerá os fundamentos para que o participante posteriormente possa continuar na especialização de áreas de administração de projetos ou continuar uma preparação formal para a obtenção de certificações profissionais do PMI, tais como: CAPM®, PMP® ou abordagens ágeis de projetos. Este conhecimento adicional pode abrir novas oportunidades de carreira e aumentar a empregabilidade dos graduados.",
          "O participante será um agente de mudança na organização para produzir projetos de valor para a organização. Eles serão capacitados a identificar oportunidades de melhoria e implementar soluções inovadoras que agreguem valor significativo.",
          "Compreenderá e aplicará a Abordagem de Desenvolvimento Preditivo e a Abordagem Híbrida, permitindo uma maior flexibilidade e adaptabilidade na gestão de projetos. Esta compreensão permitirá que os profissionais escolham a abordagem mais adequada para cada projeto, aumentando as chances de sucesso."
        ],
        shift: {
          afternoon: true,
          morning: true,
          evening: false,
        },
        course_cover:
          "https://www.realimage.com/engenharia-informatica-cover.jpg",
        years: [
          {
            year: 1,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Programação I", workload: 60 },
                  { name: "Matemática Discreta", workload: 60 },
                  { name: "Álgebra Linear", workload: 45 },
                  { name: "Introdução à Computação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Programação II", workload: 60 },
                  { name: "Estruturas de Dados", workload: 60 },
                  { name: "Arquitetura de Computadores", workload: 45 },
                  { name: "Cálculo I", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 2,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Programação III", workload: 60 },
                  { name: "Banco de Dados I", workload: 60 },
                  { name: "Redes de Computadores I", workload: 45 },
                  { name: "Cálculo II", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Engenharia de Software I", workload: 60 },
                  { name: "Banco de Dados II", workload: 60 },
                  { name: "Redes de Computadores II", workload: 45 },
                  { name: "Cálculo III", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 3,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Inteligência Artificial I", workload: 60 },
                  { name: "Sistemas Operacionais", workload: 60 },
                  { name: "Compiladores", workload: 45 },
                  { name: "Cálculo IV", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Inteligência Artificial II", workload: 60 },
                  { name: "Sistemas Distribuídos", workload: 60 },
                  { name: "Segurança da Informação", workload: 45 },
                  { name: "Cálculo V", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 4,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Projeto de TCC I", workload: 60 },
                  { name: "Empreendedorismo", workload: 60 },
                  { name: "Gestão de Projetos", workload: 45 },
                  { name: "Ética e Legislação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Projeto de TCC II", workload: 60 },
                  { name: "Inovação Tecnológica", workload: 60 },
                  { name: "Gestão de TI", workload: 45 },
                  { name: "Direito Digital", workload: 45 },
                ],
              },
            ],
          },
        ],
      },
      {
        course: "Ciência da Computação",
        duration: 5,
        level: "graduation",
        short_detail: "Formação avançada em computação e suas aplicações",
        slug: "ciencia-computacao-graduacao",
        long_description:
          "O curso de Ciência da Computação oferece uma formação sólida em fundamentos teóricos e práticos da computação. Os estudantes desenvolvem competências em algoritmos, teoria da computação, desenvolvimento de software, inteligência artificial e computação científica, preparando-se para carreiras em pesquisa, desenvolvimento e inovação tecnológica. O curso também abrange áreas emergentes como computação quântica, aprendizado de máquina e ciência de dados, proporcionando uma visão abrangente e atualizada do campo.",
        benefits: [
          "Desenvolver habilidades em algoritmos e programação.",
          "Preparação para carreiras em pesquisa e desenvolvimento.",
          "Visão abrangente das áreas emergentes da computação.",
          "Oportunidades de estágio em empresas de tecnologia.",
          "Base sólida em teoria da computação e desenvolvimento de software.",
        ],
        shift: {
          afternoon: true,
          morning: true,
          evening: false,
        },
        course_cover: "https://www.realimage.com/ciencia-computacao-cover.jpg",
        years: [
          {
            year: 1,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Algoritmos e Lógica de Programação", workload: 60 },
                  { name: "Cálculo Diferencial e Integral I", workload: 60 },
                  { name: "Geometria Analítica", workload: 45 },
                  { name: "Fundamentos de Computação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Estruturas de Dados", workload: 60 },
                  { name: "Cálculo Diferencial e Integral II", workload: 60 },
                  { name: "Álgebra Linear", workload: 45 },
                  { name: "Lógica Matemática", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 2,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Teoria da Computação", workload: 60 },
                  { name: "Probabilidade e Estatística", workload: 60 },
                  { name: "Programação Orientada a Objetos", workload: 45 },
                  { name: "Cálculo Diferencial e Integral III", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Análise de Algoritmos", workload: 60 },
                  { name: "Banco de Dados", workload: 60 },
                  { name: "Redes de Computadores", workload: 45 },
                  { name: "Cálculo Diferencial e Integral IV", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 3,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Inteligência Artificial", workload: 60 },
                  { name: "Sistemas Operacionais", workload: 60 },
                  { name: "Compiladores", workload: 45 },
                  { name: "Cálculo Diferencial e Integral V", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Aprendizado de Máquina", workload: 60 },
                  { name: "Sistemas Distribuídos", workload: 60 },
                  { name: "Segurança da Informação", workload: 45 },
                  { name: "Cálculo Diferencial e Integral VI", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 4,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Projeto de TCC I", workload: 60 },
                  { name: "Empreendedorismo", workload: 60 },
                  { name: "Gestão de Projetos", workload: 45 },
                  { name: "Ética e Legislação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Projeto de TCC II", workload: 60 },
                  { name: "Inovação Tecnológica", workload: 60 },
                  { name: "Gestão de TI", workload: 45 },
                  { name: "Direito Digital", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 5,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Computação Quântica", workload: 60 },
                  { name: "Ciência de Dados", workload: 60 },
                  { name: "Big Data", workload: 45 },
                  { name: "Computação em Nuvem", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Tópicos Avançados em Computação", workload: 60 },
                  { name: "Computação Gráfica", workload: 60 },
                  { name: "Processamento de Imagens", workload: 45 },
                  { name: "Realidade Virtual", workload: 45 },
                ],
              },
            ],
          },
        ],
      },
      {
        course: "Engenharia Química",
        duration: 5,
        level: "graduation",
        short_detail: "Formação em processos químicos e industriais",
        slug: "engenharia-quimica-graduacao",
        long_description:
          "O curso de Engenharia Química oferece uma formação abrangente em processos químicos e industriais. Os alunos aprendem a projetar, otimizar e operar processos de produção de produtos químicos, petroquímicos, farmacêuticos e de alimentos. O curso também aborda questões ambientais e de sustentabilidade, preparando os engenheiros para desenvolver soluções inovadoras e sustentáveis para a indústria. Além disso, os estudantes têm a oportunidade de realizar estágios em empresas do setor, adquirindo experiência prática e ampliando suas perspectivas de carreira.",
        benefits: [
          "Formação abrangente em processos químicos e industriais.",
          "Preparação para atuar em setores como petroquímica e farmacêutica.",
          "Ênfase em sustentabilidade e soluções inovadoras.",
          "Oportunidades de estágio em empresas do setor.",
          "Desenvolvimento de competências em otimização de processos.",
        ],
        shift: {
          afternoon: true,
          morning: true,
          evening: false,
        },
        course_cover: "https://example.com/engenharia-quimica-cover.jpg",
        years: [
          {
            year: 1,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Matemática I", workload: 60 },
                  { name: "Química I", workload: 60 },
                  { name: "Física I", workload: 45 },
                  { name: "Introdução à Engenharia Química", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Matemática II", workload: 60 },
                  { name: "Química II", workload: 60 },
                  { name: "Física II", workload: 45 },
                  { name: "Termodinâmica I", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 2,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Matemática III", workload: 60 },
                  { name: "Química Orgânica I", workload: 60 },
                  { name: "Física III", workload: 45 },
                  { name: "Termodinâmica II", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Matemática IV", workload: 60 },
                  { name: "Química Orgânica II", workload: 60 },
                  { name: "Física IV", workload: 45 },
                  { name: "Mecânica dos Fluidos", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 3,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Operações Unitárias I", workload: 60 },
                  { name: "Reatores Químicos I", workload: 60 },
                  { name: "Transferência de Calor", workload: 45 },
                  { name: "Cálculo Numérico", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Operações Unitárias II", workload: 60 },
                  { name: "Reatores Químicos II", workload: 60 },
                  { name: "Transferência de Massa", workload: 45 },
                  { name: "Controle de Processos", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 4,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Projeto de TCC I", workload: 60 },
                  { name: "Engenharia Ambiental", workload: 60 },
                  { name: "Gestão de Projetos", workload: 45 },
                  { name: "Ética e Legislação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Projeto de TCC II", workload: 60 },
                  { name: "Inovação Tecnológica", workload: 60 },
                  { name: "Gestão de TI", workload: 45 },
                  { name: "Direito Digital", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 5,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Engenharia de Processos", workload: 60 },
                  { name: "Biotecnologia", workload: 60 },
                  { name: "Nanotecnologia", workload: 45 },
                  { name: "Sustentabilidade", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  {
                    name: "Tópicos Avançados em Engenharia Química",
                    workload: 60,
                  },
                  { name: "Processos Industriais", workload: 60 },
                  { name: "Segurança de Processos", workload: 45 },
                  { name: "Gestão Ambiental", workload: 45 },
                ],
              },
            ],
          },
        ],
      },
      {
        course: "Ciência da Computação",
        duration: 5,
        level: "graduation",
        short_detail: "Formação avançada em computação e suas aplicações",
        slug: "ciencia-computacao-graduacao",
        long_description:
          "O curso de Ciência da Computação oferece uma formação sólida em fundamentos teóricos e práticos da computação. Os estudantes desenvolvem competências em algoritmos, teoria da computação, desenvolvimento de software, inteligência artificial e computação científica, preparando-se para carreiras em pesquisa, desenvolvimento e inovação tecnológica. O curso também abrange áreas emergentes como computação quântica, aprendizado de máquina e ciência de dados, proporcionando uma visão abrangente e atualizada do campo.",
        benefits: [
          "Desenvolver habilidades em algoritmos e programação.",
          "Preparação para carreiras em pesquisa e desenvolvimento.",
          "Visão abrangente das áreas emergentes da computação.",
          "Oportunidades de estágio em empresas de tecnologia.",
          "Base sólida em teoria da computação e desenvolvimento de software.",
        ],
        shift: {
          afternoon: true,
          morning: true,
          evening: false,
        },
        course_cover: "https://www.realimage.com/ciencia-computacao-cover.jpg",
        years: [
          {
            year: 1,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Algoritmos e Lógica de Programação", workload: 60 },
                  { name: "Cálculo Diferencial e Integral I", workload: 60 },
                  { name: "Geometria Analítica", workload: 45 },
                  { name: "Fundamentos de Computação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Estruturas de Dados", workload: 60 },
                  { name: "Cálculo Diferencial e Integral II", workload: 60 },
                  { name: "Álgebra Linear", workload: 45 },
                  { name: "Lógica Matemática", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 2,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Teoria da Computação", workload: 60 },
                  { name: "Probabilidade e Estatística", workload: 60 },
                  { name: "Programação Orientada a Objetos", workload: 45 },
                  { name: "Cálculo Diferencial e Integral III", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Análise de Algoritmos", workload: 60 },
                  { name: "Banco de Dados", workload: 60 },
                  { name: "Redes de Computadores", workload: 45 },
                  { name: "Cálculo Diferencial e Integral IV", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 3,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Inteligência Artificial", workload: 60 },
                  { name: "Sistemas Operacionais", workload: 60 },
                  { name: "Compiladores", workload: 45 },
                  { name: "Cálculo Diferencial e Integral V", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Aprendizado de Máquina", workload: 60 },
                  { name: "Sistemas Distribuídos", workload: 60 },
                  { name: "Segurança da Informação", workload: 45 },
                  { name: "Cálculo Diferencial e Integral VI", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 4,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Projeto de TCC I", workload: 60 },
                  { name: "Empreendedorismo", workload: 60 },
                  { name: "Gestão de Projetos", workload: 45 },
                  { name: "Ética e Legislação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Projeto de TCC II", workload: 60 },
                  { name: "Inovação Tecnológica", workload: 60 },
                  { name: "Gestão de TI", workload: 45 },
                  { name: "Direito Digital", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 5,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Computação Quântica", workload: 60 },
                  { name: "Ciência de Dados", workload: 60 },
                  { name: "Big Data", workload: 45 },
                  { name: "Computação em Nuvem", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Tópicos Avançados em Computação", workload: 60 },
                  { name: "Computação Gráfica", workload: 60 },
                  { name: "Processamento de Imagens", workload: 45 },
                  { name: "Realidade Virtual", workload: 45 },
                ],
              },
            ],
          },
        ],
      },
      {
        course: "Engenharia Química",
        duration: 5,
        level: "graduation",
        short_detail: "Formação em processos químicos e industriais",
        slug: "engenharia-quimica-graduacao",
        long_description:
          "O curso de Engenharia Química oferece uma formação abrangente em processos químicos e industriais. Os alunos aprendem a projetar, otimizar e operar processos de produção de produtos químicos, petroquímicos, farmacêuticos e de alimentos. O curso também aborda questões ambientais e de sustentabilidade, preparando os engenheiros para desenvolver soluções inovadoras e sustentáveis para a indústria. Além disso, os estudantes têm a oportunidade de realizar estágios em empresas do setor, adquirindo experiência prática e ampliando suas perspectivas de carreira.",
        benefits: [
          "Formação abrangente em processos químicos e industriais.",
          "Preparação para atuar em setores como petroquímica e farmacêutica.",
          "Ênfase em sustentabilidade e soluções inovadoras.",
          "Oportunidades de estágio em empresas do setor.",
          "Desenvolvimento de competências em otimização de processos.",
        ],
        shift: {
          afternoon: true,
          morning: true,
          evening: false,
        },
        course_cover: "https://example.com/engenharia-quimica-cover.jpg",
        years: [
          {
            year: 1,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Matemática I", workload: 60 },
                  { name: "Química I", workload: 60 },
                  { name: "Física I", workload: 45 },
                  { name: "Introdução à Engenharia Química", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Matemática II", workload: 60 },
                  { name: "Química II", workload: 60 },
                  { name: "Física II", workload: 45 },
                  { name: "Termodinâmica I", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 2,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Matemática III", workload: 60 },
                  { name: "Química Orgânica I", workload: 60 },
                  { name: "Física III", workload: 45 },
                  { name: "Termodinâmica II", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Matemática IV", workload: 60 },
                  { name: "Química Orgânica II", workload: 60 },
                  { name: "Física IV", workload: 45 },
                  { name: "Mecânica dos Fluidos", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 3,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Operações Unitárias I", workload: 60 },
                  { name: "Reatores Químicos I", workload: 60 },
                  { name: "Transferência de Calor", workload: 45 },
                  { name: "Cálculo Numérico", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Operações Unitárias II", workload: 60 },
                  { name: "Reatores Químicos II", workload: 60 },
                  { name: "Transferência de Massa", workload: 45 },
                  { name: "Controle de Processos", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 4,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Projeto de TCC I", workload: 60 },
                  { name: "Engenharia Ambiental", workload: 60 },
                  { name: "Gestão de Projetos", workload: 45 },
                  { name: "Ética e Legislação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Projeto de TCC II", workload: 60 },
                  { name: "Inovação Tecnológica", workload: 60 },
                  { name: "Gestão de TI", workload: 45 },
                  { name: "Direito Digital", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 5,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Engenharia de Processos", workload: 60 },
                  { name: "Biotecnologia", workload: 60 },
                  { name: "Nanotecnologia", workload: 45 },
                  { name: "Sustentabilidade", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  {
                    name: "Tópicos Avançados em Engenharia Química",
                    workload: 60,
                  },
                  { name: "Processos Industriais", workload: 60 },
                  { name: "Segurança de Processos", workload: 45 },
                  { name: "Gestão Ambiental", workload: 45 },
                ],
              },
            ],
          },
        ],
      },
      {
        course: "Engenharia Informática",
        duration: 4,
        level: "graduation",
        short_detail:
          "Formação em desenvolvimento e gestão de sistemas computacionais",
        slug: "engenharia-informatica-graduacao",
        long_description:
          "O curso de Engenharia Informática forma profissionais capacitados para projetar, desenvolver e gerir sistemas computacionais. Com forte ênfase em programação, banco de dados, redes de computadores e inteligência artificial, os graduados estão preparados para atuar em diversos setores tecnológicos, contribuindo para a transformação digital das organizações. Além disso, o curso oferece uma base sólida em matemática e física, preparando os alunos para enfrentar desafios complexos na área de tecnologia. O curso também inclui disciplinas de ética e responsabilidade social, garantindo que os profissionais formados estejam cientes do impacto de suas ações na sociedade.",
        benefits: [
          "Este diplomado está orientado a proporcionar os conhecimentos, modelos, métodos e artefatos práticos para aplicar e gerir efetivamente projetos, mediante o desenvolvimento de um projeto real durante todo o diplomado. Os alunos terão a oportunidade de trabalhar em projetos colaborativos, desenvolvendo habilidades de trabalho em equipe e comunicação.",
          "Permitirá criar seu próprio caso de aplicação de um projeto aplicável ao seu ambiente de trabalho, proporcionando uma experiência prática e relevante que pode ser diretamente aplicada em sua carreira profissional.",
          "Durante o diplomado será utilizado o software Microsoft Project Online, Plano 3. E, portanto, como parte do diplomado será fornecida a cada participante esta ferramenta computacional para utilização durante o diplomado e aplicação no projeto a ser desenvolvido. Além disso, os alunos receberão treinamento especializado no uso desta ferramenta, garantindo que possam utilizá-la de forma eficaz em seus projetos futuros.",
          "O diplomado fornecerá os fundamentos para que o participante posteriormente possa continuar na especialização de áreas de administração de projetos ou continuar uma preparação formal para a obtenção de certificações profissionais do PMI, tais como: CAPM®, PMP® ou abordagens ágeis de projetos. Este conhecimento adicional pode abrir novas oportunidades de carreira e aumentar a empregabilidade dos graduados.",
          "O participante será um agente de mudança na organização para produzir projetos de valor para a organização. Eles serão capacitados a identificar oportunidades de melhoria e implementar soluções inovadoras que agreguem valor significativo.",
          "Compreenderá e aplicará a Abordagem de Desenvolvimento Preditivo e a Abordagem Híbrida, permitindo uma maior flexibilidade e adaptabilidade na gestão de projetos. Esta compreensão permitirá que os profissionais escolham a abordagem mais adequada para cada projeto, aumentando as chances de sucesso."
        ],
        shift: {
          afternoon: true,
          morning: true,
          evening: false,
        },
        course_cover:
          "https://www.realimage.com/engenharia-informatica-cover.jpg",
        years: [
          {
            year: 1,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Programação I", workload: 60 },
                  { name: "Matemática Discreta", workload: 60 },
                  { name: "Álgebra Linear", workload: 45 },
                  { name: "Introdução à Computação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Programação II", workload: 60 },
                  { name: "Estruturas de Dados", workload: 60 },
                  { name: "Arquitetura de Computadores", workload: 45 },
                  { name: "Cálculo I", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 2,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Programação III", workload: 60 },
                  { name: "Banco de Dados I", workload: 60 },
                  { name: "Redes de Computadores I", workload: 45 },
                  { name: "Cálculo II", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Engenharia de Software I", workload: 60 },
                  { name: "Banco de Dados II", workload: 60 },
                  { name: "Redes de Computadores II", workload: 45 },
                  { name: "Cálculo III", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 3,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Inteligência Artificial I", workload: 60 },
                  { name: "Sistemas Operacionais", workload: 60 },
                  { name: "Compiladores", workload: 45 },
                  { name: "Cálculo IV", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Inteligência Artificial II", workload: 60 },
                  { name: "Sistemas Distribuídos", workload: 60 },
                  { name: "Segurança da Informação", workload: 45 },
                  { name: "Cálculo V", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 4,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Projeto de TCC I", workload: 60 },
                  { name: "Empreendedorismo", workload: 60 },
                  { name: "Gestão de Projetos", workload: 45 },
                  { name: "Ética e Legislação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Projeto de TCC II", workload: 60 },
                  { name: "Inovação Tecnológica", workload: 60 },
                  { name: "Gestão de TI", workload: 45 },
                  { name: "Direito Digital", workload: 45 },
                ],
              },
            ],
          },
        ],
      },
      {
        course: "Ciência da Computação",
        duration: 5,
        level: "graduation",
        short_detail: "Formação avançada em computação e suas aplicações",
        slug: "ciencia-computacao-graduacao",
        long_description:
          "O curso de Ciência da Computação oferece uma formação sólida em fundamentos teóricos e práticos da computação. Os estudantes desenvolvem competências em algoritmos, teoria da computação, desenvolvimento de software, inteligência artificial e computação científica, preparando-se para carreiras em pesquisa, desenvolvimento e inovação tecnológica. O curso também abrange áreas emergentes como computação quântica, aprendizado de máquina e ciência de dados, proporcionando uma visão abrangente e atualizada do campo.",
        benefits: [
          "Desenvolver habilidades em algoritmos e programação.",
          "Preparação para carreiras em pesquisa e desenvolvimento.",
          "Visão abrangente das áreas emergentes da computação.",
          "Oportunidades de estágio em empresas de tecnologia.",
          "Base sólida em teoria da computação e desenvolvimento de software.",
        ],
        shift: {
          afternoon: true,
          morning: true,
          evening: false,
        },
        course_cover: "https://www.realimage.com/ciencia-computacao-cover.jpg",
        years: [
          {
            year: 1,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Algoritmos e Lógica de Programação", workload: 60 },
                  { name: "Cálculo Diferencial e Integral I", workload: 60 },
                  { name: "Geometria Analítica", workload: 45 },
                  { name: "Fundamentos de Computação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Estruturas de Dados", workload: 60 },
                  { name: "Cálculo Diferencial e Integral II", workload: 60 },
                  { name: "Álgebra Linear", workload: 45 },
                  { name: "Lógica Matemática", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 2,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Teoria da Computação", workload: 60 },
                  { name: "Probabilidade e Estatística", workload: 60 },
                  { name: "Programação Orientada a Objetos", workload: 45 },
                  { name: "Cálculo Diferencial e Integral III", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Análise de Algoritmos", workload: 60 },
                  { name: "Banco de Dados", workload: 60 },
                  { name: "Redes de Computadores", workload: 45 },
                  { name: "Cálculo Diferencial e Integral IV", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 3,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Inteligência Artificial", workload: 60 },
                  { name: "Sistemas Operacionais", workload: 60 },
                  { name: "Compiladores", workload: 45 },
                  { name: "Cálculo Diferencial e Integral V", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Aprendizado de Máquina", workload: 60 },
                  { name: "Sistemas Distribuídos", workload: 60 },
                  { name: "Segurança da Informação", workload: 45 },
                  { name: "Cálculo Diferencial e Integral VI", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 4,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Projeto de TCC I", workload: 60 },
                  { name: "Empreendedorismo", workload: 60 },
                  { name: "Gestão de Projetos", workload: 45 },
                  { name: "Ética e Legislação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Projeto de TCC II", workload: 60 },
                  { name: "Inovação Tecnológica", workload: 60 },
                  { name: "Gestão de TI", workload: 45 },
                  { name: "Direito Digital", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 5,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Computação Quântica", workload: 60 },
                  { name: "Ciência de Dados", workload: 60 },
                  { name: "Big Data", workload: 45 },
                  { name: "Computação em Nuvem", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Tópicos Avançados em Computação", workload: 60 },
                  { name: "Computação Gráfica", workload: 60 },
                  { name: "Processamento de Imagens", workload: 45 },
                  { name: "Realidade Virtual", workload: 45 },
                ],
              },
            ],
          },
        ],
      },
      {
        course: "Engenharia Química",
        duration: 5,
        level: "graduation",
        short_detail: "Formação em processos químicos e industriais",
        slug: "engenharia-quimica-graduacao",
        long_description:
          "O curso de Engenharia Química oferece uma formação abrangente em processos químicos e industriais. Os alunos aprendem a projetar, otimizar e operar processos de produção de produtos químicos, petroquímicos, farmacêuticos e de alimentos. O curso também aborda questões ambientais e de sustentabilidade, preparando os engenheiros para desenvolver soluções inovadoras e sustentáveis para a indústria. Além disso, os estudantes têm a oportunidade de realizar estágios em empresas do setor, adquirindo experiência prática e ampliando suas perspectivas de carreira.",
        benefits: [
          "Formação abrangente em processos químicos e industriais.",
          "Preparação para atuar em setores como petroquímica e farmacêutica.",
          "Ênfase em sustentabilidade e soluções inovadoras.",
          "Oportunidades de estágio em empresas do setor.",
          "Desenvolvimento de competências em otimização de processos.",
        ],
        shift: {
          afternoon: true,
          morning: true,
          evening: false,
        },
        course_cover: "https://example.com/engenharia-quimica-cover.jpg",
        years: [
          {
            year: 1,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Matemática I", workload: 60 },
                  { name: "Química I", workload: 60 },
                  { name: "Física I", workload: 45 },
                  { name: "Introdução à Engenharia Química", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Matemática II", workload: 60 },
                  { name: "Química II", workload: 60 },
                  { name: "Física II", workload: 45 },
                  { name: "Termodinâmica I", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 2,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Matemática III", workload: 60 },
                  { name: "Química Orgânica I", workload: 60 },
                  { name: "Física III", workload: 45 },
                  { name: "Termodinâmica II", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Matemática IV", workload: 60 },
                  { name: "Química Orgânica II", workload: 60 },
                  { name: "Física IV", workload: 45 },
                  { name: "Mecânica dos Fluidos", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 3,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Operações Unitárias I", workload: 60 },
                  { name: "Reatores Químicos I", workload: 60 },
                  { name: "Transferência de Calor", workload: 45 },
                  { name: "Cálculo Numérico", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Operações Unitárias II", workload: 60 },
                  { name: "Reatores Químicos II", workload: 60 },
                  { name: "Transferência de Massa", workload: 45 },
                  { name: "Controle de Processos", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 4,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Projeto de TCC I", workload: 60 },
                  { name: "Engenharia Ambiental", workload: 60 },
                  { name: "Gestão de Projetos", workload: 45 },
                  { name: "Ética e Legislação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Projeto de TCC II", workload: 60 },
                  { name: "Inovação Tecnológica", workload: 60 },
                  { name: "Gestão de TI", workload: 45 },
                  { name: "Direito Digital", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 5,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Engenharia de Processos", workload: 60 },
                  { name: "Biotecnologia", workload: 60 },
                  { name: "Nanotecnologia", workload: 45 },
                  { name: "Sustentabilidade", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  {
                    name: "Tópicos Avançados em Engenharia Química",
                    workload: 60,
                  },
                  { name: "Processos Industriais", workload: 60 },
                  { name: "Segurança de Processos", workload: 45 },
                  { name: "Gestão Ambiental", workload: 45 },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  geoscience: {
    catalog_link: "https://docs.google.com/document/d/1zlmEIrShckNeRXmscaReMwYFMpAKJRlgRZUV2Ft9GnI/edit?usp=sharing",
    name: "Geociências",
    department_cover: images.departImages.geoscience.src,
    departmentDirector: {
      name: "Jaime Mavungo",
      picture: images.teachers.katumbela.src
    },
    courses: [
      {
        course: "Geologia",
        duration: 4,
        level: "graduation",
        short_detail: "Formação em estudo da Terra e seus processos",
        slug: "geologia-graduacao",
        long_description:
          "O curso de Geologia oferece uma formação completa em estudo da Terra, seus materiais, processos e história. Os alunos aprendem sobre minerais, rochas, fósseis, recursos naturais e riscos geológicos. O curso também aborda técnicas de mapeamento geológico, geofísica e geoquímica, preparando os geólogos para atuar em exploração mineral, petróleo, meio ambiente e pesquisa científica.",
        benefits: [
          "Formação completa em estudo da Terra e seus processos.",
          "Preparação para atuar em exploração mineral e petróleo.",
          "Desenvolvimento de competências em mapeamento geológico.",
          "Oportunidades de estágio em empresas do setor.",
          "Base sólida em técnicas de geofísica e geoquímica.",
        ],
        shift: {
          afternoon: true,
          morning: true,
          evening: false,
        },
        course_cover: "https://t4.ftcdn.net/jpg/08/63/93/09/360_F_863930972_zbbg101WJ0tpwWDzrD7ab45GZ0zEip2L.jpg",
        years: [
          {
            year: 1,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Introdução à Geologia", workload: 60 },
                  { name: "Mineralogia", workload: 60 },
                  { name: "Geologia Estrutural", workload: 45 },
                  { name: "Paleontologia", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Petrologia", workload: 60 },
                  { name: "Geofísica", workload: 60 },
                  { name: "Geoquímica", workload: 45 },
                  { name: "Cartografia Geológica", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 2,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Geologia Sedimentar", workload: 60 },
                  { name: "Geologia Econômica", workload: 60 },
                  { name: "Hidrogeologia", workload: 45 },
                  { name: "Geologia Ambiental", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Geologia Regional", workload: 60 },
                  { name: "Geologia de Engenharia", workload: 60 },
                  { name: "Geologia Marinha", workload: 45 },
                  { name: "Geologia do Petróleo", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 3,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Geotectônica", workload: 60 },
                  { name: "Geologia de Campo", workload: 60 },
                  { name: "Geologia Aplicada", workload: 45 },
                  { name: "Geoprocessamento", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Geologia de Recursos Minerais", workload: 60 },
                  { name: "Geologia de Reservatórios", workload: 60 },
                  { name: "Geologia de Bacias Sedimentares", workload: 45 },
                  { name: "Geologia de Terrenos Metamórficos", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 4,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Projeto de TCC I", workload: 60 },
                  { name: "Geologia de Exploração", workload: 60 },
                  { name: "Geologia de Recursos Hídricos", workload: 45 },
                  { name: "Geologia de Riscos Naturais", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Projeto de TCC II", workload: 60 },
                  { name: "Geologia de Reservas Minerais", workload: 60 },
                  { name: "Geologia de Impactos Ambientais", workload: 45 },
                  { name: "Geologia de Áreas Urbanas", workload: 45 },
                ],
              },
            ],
          },
        ],
        additional_courses: [
          {
            course: "Geologia Ambiental",
            duration: 4,
            level: "graduation",
            short_detail: "Formação em estudo dos impactos ambientais",
            slug: "geologia-ambiental-graduacao",
            long_description:
              "O curso de Geologia Ambiental oferece uma formação completa em estudo dos impactos ambientais e suas soluções. Os alunos aprendem sobre a interação entre os processos geológicos e o meio ambiente, incluindo a gestão de recursos naturais e a mitigação de riscos ambientais.",
            shift: {
              afternoon: true,
              morning: true,
              evening: false,
            },
            course_cover:
              "https://www.realimage.com/geologia-ambiental-cover.jpg",
            years: [
              {
                year: 1,
                semesters: [
                  {
                    semester: 1,
                    subjects: [
                      { name: "Introdução à Geologia Ambiental", workload: 60 },
                      { name: "Mineralogia Ambiental", workload: 60 },
                      { name: "Geologia Estrutural", workload: 45 },
                      { name: "Paleontologia", workload: 45 },
                    ],
                  },
                  {
                    semester: 2,
                    subjects: [
                      { name: "Petrologia Ambiental", workload: 60 },
                      { name: "Geofísica Ambiental", workload: 60 },
                      { name: "Geoquímica Ambiental", workload: 45 },
                      { name: "Cartografia Geológica", workload: 45 },
                    ],
                  },
                ],
              },
              // ...additional years and semesters...
            ],
          },
        ],
      },
      {
        course: "Geofísica",
        duration: 4,
        level: "graduation",
        short_detail: "Formação em métodos geofísicos para estudo da Terra",
        slug: "geofisica-graduacao",
        long_description:
          "O curso de Geofísica oferece uma formação sólida em métodos geofísicos para estudo da Terra. Os alunos aprendem sobre técnicas de prospecção geofísica, sismologia, gravimetria, magnetometria e eletromagnetismo. O curso prepara os geofísicos para atuar em exploração de recursos naturais, monitoramento ambiental, engenharia geotécnica e pesquisa científica.",
        benefits: [
          "Formação sólida em métodos geofísicos para estudo da Terra.",
          "Preparação para atuar em exploração de recursos naturais.",
          "Desenvolvimento de competências em sismologia e gravimetria.",
          "Oportunidades de estágio em empresas do setor.",
          "Base sólida em técnicas de prospecção geofísica.",
        ],
        shift: {
          afternoon: true,
          morning: true,
          evening: false,
        },
        course_cover: "https://img.freepik.com/premium-photo/geophysics-scene-presentation-slide-generative-ai_804788-85643.jpg",
        years: [
          {
            year: 1,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Introdução à Geofísica", workload: 60 },
                  { name: "Física Geral", workload: 60 },
                  { name: "Matemática Aplicada", workload: 45 },
                  { name: "Geologia Geral", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Sismologia", workload: 60 },
                  { name: "Gravimetria", workload: 60 },
                  { name: "Magnetometria", workload: 45 },
                  { name: "Eletromagnetismo", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 2,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Métodos Sísmicos", workload: 60 },
                  { name: "Métodos Potenciais", workload: 60 },
                  { name: "Métodos Eletromagnéticos", workload: 45 },
                  { name: "Geofísica de Poço", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Geofísica Aplicada", workload: 60 },
                  { name: "Geofísica Ambiental", workload: 60 },
                  { name: "Geofísica de Reservatórios", workload: 45 },
                  { name: "Geofísica de Exploração", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 3,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Geofísica Marinha", workload: 60 },
                  { name: "Geofísica de Engenharia", workload: 60 },
                  { name: "Geofísica de Recursos Minerais", workload: 45 },
                  { name: "Geofísica de Hidrocarbonetos", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Geofísica de Reservas Hídricas", workload: 60 },
                  { name: "Geofísica de Riscos Naturais", workload: 60 },
                  { name: "Geofísica de Bacias Sedimentares", workload: 45 },
                  { name: "Geofísica de Terrenos Metamórficos", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 4,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Projeto de TCC I", workload: 60 },
                  { name: "Geofísica de Exploração", workload: 60 },
                  { name: "Geofísica de Reservas Minerais", workload: 45 },
                  { name: "Geofísica de Impactos Ambientais", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Projeto de TCC II", workload: 60 },
                  { name: "Geofísica de Reservas Hídricas", workload: 60 },
                  { name: "Geofísica de Áreas Urbanas", workload: 45 },
                  { name: "Geofísica de Riscos Naturais", workload: 45 },
                ],
              },
            ],
          },
        ],
      },
      {
        course: "Geologia",
        duration: 4,
        level: "graduation",
        short_detail: "Formação em estudo da Terra e seus processos",
        slug: "geologia-graduacao",
        long_description:
          "O curso de Geologia oferece uma formação completa em estudo da Terra, seus materiais, processos e história. Os alunos aprendem sobre minerais, rochas, fósseis, recursos naturais e riscos geológicos. O curso também aborda técnicas de mapeamento geológico, geofísica e geoquímica, preparando os geólogos para atuar em exploração mineral, petróleo, meio ambiente e pesquisa científica.",
        benefits: [
          "Formação completa em estudo da Terra e seus processos.",
          "Preparação para atuar em exploração mineral e petróleo.",
          "Desenvolvimento de competências em mapeamento geológico.",
          "Oportunidades de estágio em empresas do setor.",
          "Base sólida em técnicas de geofísica e geoquímica.",
        ],
        shift: {
          afternoon: true,
          morning: true,
          evening: false,
        },
        course_cover: "https://t4.ftcdn.net/jpg/08/63/93/09/360_F_863930972_zbbg101WJ0tpwWDzrD7ab45GZ0zEip2L.jpg",
        years: [
          {
            year: 1,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Introdução à Geologia", workload: 60 },
                  { name: "Mineralogia", workload: 60 },
                  { name: "Geologia Estrutural", workload: 45 },
                  { name: "Paleontologia", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Petrologia", workload: 60 },
                  { name: "Geofísica", workload: 60 },
                  { name: "Geoquímica", workload: 45 },
                  { name: "Cartografia Geológica", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 2,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Geologia Sedimentar", workload: 60 },
                  { name: "Geologia Econômica", workload: 60 },
                  { name: "Hidrogeologia", workload: 45 },
                  { name: "Geologia Ambiental", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Geologia Regional", workload: 60 },
                  { name: "Geologia de Engenharia", workload: 60 },
                  { name: "Geologia Marinha", workload: 45 },
                  { name: "Geologia do Petróleo", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 3,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Geotectônica", workload: 60 },
                  { name: "Geologia de Campo", workload: 60 },
                  { name: "Geologia Aplicada", workload: 45 },
                  { name: "Geoprocessamento", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Geologia de Recursos Minerais", workload: 60 },
                  { name: "Geologia de Reservatórios", workload: 60 },
                  { name: "Geologia de Bacias Sedimentares", workload: 45 },
                  { name: "Geologia de Terrenos Metamórficos", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 4,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Projeto de TCC I", workload: 60 },
                  { name: "Geologia de Exploração", workload: 60 },
                  { name: "Geologia de Recursos Hídricos", workload: 45 },
                  { name: "Geologia de Riscos Naturais", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Projeto de TCC II", workload: 60 },
                  { name: "Geologia de Reservas Minerais", workload: 60 },
                  { name: "Geologia de Impactos Ambientais", workload: 45 },
                  { name: "Geologia de Áreas Urbanas", workload: 45 },
                ],
              },
            ],
          },
        ],
        additional_courses: [
          {
            course: "Geologia Ambiental",
            duration: 4,
            level: "graduation",
            short_detail: "Formação em estudo dos impactos ambientais",
            slug: "geologia-ambiental-graduacao",
            long_description:
              "O curso de Geologia Ambiental oferece uma formação completa em estudo dos impactos ambientais e suas soluções. Os alunos aprendem sobre a interação entre os processos geológicos e o meio ambiente, incluindo a gestão de recursos naturais e a mitigação de riscos ambientais.",
            shift: {
              afternoon: true,
              morning: true,
              evening: false,
            },
            course_cover:
              "https://www.realimage.com/geologia-ambiental-cover.jpg",
            years: [
              {
                year: 1,
                semesters: [
                  {
                    semester: 1,
                    subjects: [
                      { name: "Introdução à Geologia Ambiental", workload: 60 },
                      { name: "Mineralogia Ambiental", workload: 60 },
                      { name: "Geologia Estrutural", workload: 45 },
                      { name: "Paleontologia", workload: 45 },
                    ],
                  },
                  {
                    semester: 2,
                    subjects: [
                      { name: "Petrologia Ambiental", workload: 60 },
                      { name: "Geofísica Ambiental", workload: 60 },
                      { name: "Geoquímica Ambiental", workload: 45 },
                      { name: "Cartografia Geológica", workload: 45 },
                    ],
                  },
                ],
              },
              // ...additional years and semesters...
            ],
          },
        ],
      },
      {
        course: "Geofísica",
        duration: 4,
        level: "graduation",
        short_detail: "Formação em métodos geofísicos para estudo da Terra",
        slug: "geofisica-graduacao",
        long_description:
          "O curso de Geofísica oferece uma formação sólida em métodos geofísicos para estudo da Terra. Os alunos aprendem sobre técnicas de prospecção geofísica, sismologia, gravimetria, magnetometria e eletromagnetismo. O curso prepara os geofísicos para atuar em exploração de recursos naturais, monitoramento ambiental, engenharia geotécnica e pesquisa científica.",
        benefits: [
          "Formação sólida em métodos geofísicos para estudo da Terra.",
          "Preparação para atuar em exploração de recursos naturais.",
          "Desenvolvimento de competências em sismologia e gravimetria.",
          "Oportunidades de estágio em empresas do setor.",
          "Base sólida em técnicas de prospecção geofísica.",
        ],
        shift: {
          afternoon: true,
          morning: true,
          evening: false,
        },
        course_cover: "https://img.freepik.com/premium-photo/geophysics-scene-presentation-slide-generative-ai_804788-85643.jpg",
        years: [
          {
            year: 1,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Introdução à Geofísica", workload: 60 },
                  { name: "Física Geral", workload: 60 },
                  { name: "Matemática Aplicada", workload: 45 },
                  { name: "Geologia Geral", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Sismologia", workload: 60 },
                  { name: "Gravimetria", workload: 60 },
                  { name: "Magnetometria", workload: 45 },
                  { name: "Eletromagnetismo", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 2,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Métodos Sísmicos", workload: 60 },
                  { name: "Métodos Potenciais", workload: 60 },
                  { name: "Métodos Eletromagnéticos", workload: 45 },
                  { name: "Geofísica de Poço", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Geofísica Aplicada", workload: 60 },
                  { name: "Geofísica Ambiental", workload: 60 },
                  { name: "Geofísica de Reservatórios", workload: 45 },
                  { name: "Geofísica de Exploração", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 3,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Geofísica Marinha", workload: 60 },
                  { name: "Geofísica de Engenharia", workload: 60 },
                  { name: "Geofísica de Recursos Minerais", workload: 45 },
                  { name: "Geofísica de Hidrocarbonetos", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Geofísica de Reservas Hídricas", workload: 60 },
                  { name: "Geofísica de Riscos Naturais", workload: 60 },
                  { name: "Geofísica de Bacias Sedimentares", workload: 45 },
                  { name: "Geofísica de Terrenos Metamórficos", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 4,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Projeto de TCC I", workload: 60 },
                  { name: "Geofísica de Exploração", workload: 60 },
                  { name: "Geofísica de Reservas Minerais", workload: 45 },
                  { name: "Geofísica de Impactos Ambientais", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Projeto de TCC II", workload: 60 },
                  { name: "Geofísica de Reservas Hídricas", workload: 60 },
                  { name: "Geofísica de Áreas Urbanas", workload: 45 },
                  { name: "Geofísica de Riscos Naturais", workload: 45 },
                ],
              },
            ],
          },
        ],
      },
      
    ],
  },
  csa: {
    catalog_link: "https://docs.google.com/document/d/1zlmEIrShckNeRXmscaReMwYFMpAKJRlgRZUV2Ft9GnI/edit?usp=sharing",
    name: "Ciências Sociais e Aplicadas",
    department_cover: images.departImages.ciencias_sociais.src,
    departmentDirector: {
      name: "João A. Katombela",
      picture: images.teachers.katumbela.src
    },
    courses: [
      {
        course: "Administração",
        duration: 4,
        level: "graduation",
        short_detail: "Formação em gestão de empresas e negócios",
        slug: "administracao-graduacao",
        long_description:
          "O curso de Administração oferece uma formação abrangente em gestão de empresas e negócios. Os alunos desenvolvem competências em planejamento, organização, direção e controle, preparando-se para atuar em diversas áreas da administração, como recursos humanos, marketing, finanças e produção. O curso também aborda temas como empreendedorismo, inovação e sustentabilidade, capacitando os futuros administradores a enfrentar os desafios do mercado globalizado.",
        benefits: [
          "Formação abrangente em gestão de empresas e negócios.",
          "Desenvolvimento de competências em planejamento e organização.",
          "Preparação para atuar em diversas áreas da administração.",
          "Ênfase em empreendedorismo e inovação.",
          "Oportunidades de estágio em empresas de diversos setores.",
        ],
        shift: {
          afternoon: true,
          morning: true,
          evening: true,
        },
        course_cover: "https://www.realimage.com/administracao-cover.jpg",
        years: [
          {
            year: 1,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Introdução à Administração", workload: 60 },
                  { name: "Economia", workload: 60 },
                  { name: "Matemática", workload: 45 },
                  { name: "Contabilidade", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Direito Empresarial", workload: 60 },
                  { name: "Estatística", workload: 60 },
                  { name: "Marketing", workload: 45 },
                  { name: "Gestão de Pessoas", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 2,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Administração Financeira", workload: 60 },
                  { name: "Administração de Produção", workload: 60 },
                  { name: "Comportamento Organizacional", workload: 45 },
                  { name: "Gestão de Projetos", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Administração de Recursos Humanos", workload: 60 },
                  { name: "Administração de Marketing", workload: 60 },
                  { name: "Logística", workload: 45 },
                  { name: "Empreendedorismo", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 3,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Administração Estratégica", workload: 60 },
                  { name: "Gestão da Qualidade", workload: 60 },
                  { name: "Negócios Internacionais", workload: 45 },
                  { name: "Sistemas de Informação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Administração Pública", workload: 60 },
                  { name: "Gestão de Operações", workload: 60 },
                  { name: "Planejamento Estratégico", workload: 45 },
                  { name: "Inovação e Sustentabilidade", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 4,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Projeto de TCC I", workload: 60 },
                  { name: "Consultoria Empresarial", workload: 60 },
                  { name: "Gestão de Negócios", workload: 45 },
                  { name: "Ética e Legislação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Projeto de TCC II", workload: 60 },
                  { name: "Inovação Tecnológica", workload: 60 },
                  { name: "Gestão de TI", workload: 45 },
                  { name: "Direito Digital", workload: 45 },
                ],
              },
            ],
          },
        ],
      },
      {
        course: "Economia",
        duration: 4,
        level: "graduation",
        short_detail: "Formação em análise econômica e políticas públicas",
        slug: "economia-graduacao",
        long_description:
          "O curso de Economia oferece uma formação sólida em análise econômica e políticas públicas. Os alunos desenvolvem competências em microeconomia, macroeconomia, econometria e finanças, preparando-se para atuar em diversas áreas, como consultoria econômica, planejamento estratégico, análise de investimentos e formulação de políticas públicas. O curso também aborda temas como desenvolvimento econômico, economia internacional e sustentabilidade, capacitando os futuros economistas a enfrentar os desafios do mercado globalizado.",
        benefits: [
          "Formação sólida em análise econômica e políticas públicas.",
          "Desenvolvimento de competências em microeconomia e macroeconomia.",
          "Preparação para atuar em consultoria econômica e planejamento estratégico.",
          "Ênfase em desenvolvimento econômico e sustentabilidade.",
          "Oportunidades de estágio em empresas e órgãos públicos.",
        ],
        shift: {
          afternoon: true,
          morning: true,
          evening: true,
        },
        course_cover: "https://www.augie.edu/sites/default/files/styles/16_9_large_2x/public/images/2022/08/02/Economics%20Stock%20Photo%202.jpeg?itok=Un7MYB4X",
        years: [
          {
            year: 1,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Introdução à Economia", workload: 60 },
                  { name: "Matemática", workload: 60 },
                  { name: "Estatística", workload: 45 },
                  { name: "Contabilidade", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Microeconomia", workload: 60 },
                  { name: "Macroeconomia", workload: 60 },
                  { name: "Econometria", workload: 45 },
                  { name: "Finanças", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 2,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Teoria Econômica", workload: 60 },
                  { name: "Política Econômica", workload: 60 },
                  { name: "Desenvolvimento Econômico", workload: 45 },
                  { name: "Economia Internacional", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Economia do Setor Público", workload: 60 },
                  { name: "Economia Monetária", workload: 60 },
                  { name: "Economia do Trabalho", workload: 45 },
                  { name: "Economia Ambiental", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 3,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Economia Agrícola", workload: 60 },
                  { name: "Economia Industrial", workload: 60 },
                  { name: "Economia Regional", workload: 45 },
                  { name: "Economia Urbana", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Economia da Saúde", workload: 60 },
                  { name: "Economia da Educação", workload: 60 },
                  { name: "Economia da Inovação", workload: 45 },
                  { name: "Economia do Conhecimento", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 4,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Projeto de TCC I", workload: 60 },
                  { name: "Consultoria Econômica", workload: 60 },
                  { name: "Gestão de Políticas Públicas", workload: 45 },
                  { name: "Ética e Legislação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Projeto de TCC II", workload: 60 },
                  { name: "Inovação Tecnológica", workload: 60 },
                  { name: "Gestão de TI", workload: 45 },
                  { name: "Direito Digital", workload: 45 },
                ],
              },
            ],
          },
        ],
      },
      {
        course: "Administração",
        duration: 4,
        level: "graduation",
        short_detail: "Formação em gestão de empresas e negócios",
        slug: "administracao-graduacao",
        long_description:
          "O curso de Administração oferece uma formação abrangente em gestão de empresas e negócios. Os alunos desenvolvem competências em planejamento, organização, direção e controle, preparando-se para atuar em diversas áreas da administração, como recursos humanos, marketing, finanças e produção. O curso também aborda temas como empreendedorismo, inovação e sustentabilidade, capacitando os futuros administradores a enfrentar os desafios do mercado globalizado.",
        benefits: [
          "Formação abrangente em gestão de empresas e negócios.",
          "Desenvolvimento de competências em planejamento e organização.",
          "Preparação para atuar em diversas áreas da administração.",
          "Ênfase em empreendedorismo e inovação.",
          "Oportunidades de estágio em empresas de diversos setores.",
        ],
        shift: {
          afternoon: true,
          morning: true,
          evening: true,
        },
        course_cover: "https://www.realimage.com/administracao-cover.jpg",
        years: [
          {
            year: 1,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Introdução à Administração", workload: 60 },
                  { name: "Economia", workload: 60 },
                  { name: "Matemática", workload: 45 },
                  { name: "Contabilidade", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Direito Empresarial", workload: 60 },
                  { name: "Estatística", workload: 60 },
                  { name: "Marketing", workload: 45 },
                  { name: "Gestão de Pessoas", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 2,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Administração Financeira", workload: 60 },
                  { name: "Administração de Produção", workload: 60 },
                  { name: "Comportamento Organizacional", workload: 45 },
                  { name: "Gestão de Projetos", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Administração de Recursos Humanos", workload: 60 },
                  { name: "Administração de Marketing", workload: 60 },
                  { name: "Logística", workload: 45 },
                  { name: "Empreendedorismo", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 3,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Administração Estratégica", workload: 60 },
                  { name: "Gestão da Qualidade", workload: 60 },
                  { name: "Negócios Internacionais", workload: 45 },
                  { name: "Sistemas de Informação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Administração Pública", workload: 60 },
                  { name: "Gestão de Operações", workload: 60 },
                  { name: "Planejamento Estratégico", workload: 45 },
                  { name: "Inovação e Sustentabilidade", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 4,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Projeto de TCC I", workload: 60 },
                  { name: "Consultoria Empresarial", workload: 60 },
                  { name: "Gestão de Negócios", workload: 45 },
                  { name: "Ética e Legislação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Projeto de TCC II", workload: 60 },
                  { name: "Inovação Tecnológica", workload: 60 },
                  { name: "Gestão de TI", workload: 45 },
                  { name: "Direito Digital", workload: 45 },
                ],
              },
            ],
          },
        ],
      },
      {
        course: "Economia",
        duration: 4,
        level: "graduation",
        short_detail: "Formação em análise econômica e políticas públicas",
        slug: "economia-graduacao",
        long_description:
          "O curso de Economia oferece uma formação sólida em análise econômica e políticas públicas. Os alunos desenvolvem competências em microeconomia, macroeconomia, econometria e finanças, preparando-se para atuar em diversas áreas, como consultoria econômica, planejamento estratégico, análise de investimentos e formulação de políticas públicas. O curso também aborda temas como desenvolvimento econômico, economia internacional e sustentabilidade, capacitando os futuros economistas a enfrentar os desafios do mercado globalizado.",
        benefits: [
          "Formação sólida em análise econômica e políticas públicas.",
          "Desenvolvimento de competências em microeconomia e macroeconomia.",
          "Preparação para atuar em consultoria econômica e planejamento estratégico.",
          "Ênfase em desenvolvimento econômico e sustentabilidade.",
          "Oportunidades de estágio em empresas e órgãos públicos.",
        ],
        shift: {
          afternoon: true,
          morning: true,
          evening: true,
        },
        course_cover: "https://www.realimage.com/economia-cover.jpg",
        years: [
          {
            year: 1,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Introdução à Economia", workload: 60 },
                  { name: "Matemática", workload: 60 },
                  { name: "Estatística", workload: 45 },
                  { name: "Contabilidade", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Microeconomia", workload: 60 },
                  { name: "Macroeconomia", workload: 60 },
                  { name: "Econometria", workload: 45 },
                  { name: "Finanças", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 2,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Teoria Econômica", workload: 60 },
                  { name: "Política Econômica", workload: 60 },
                  { name: "Desenvolvimento Econômico", workload: 45 },
                  { name: "Economia Internacional", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Economia do Setor Público", workload: 60 },
                  { name: "Economia Monetária", workload: 60 },
                  { name: "Economia do Trabalho", workload: 45 },
                  { name: "Economia Ambiental", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 3,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Economia Agrícola", workload: 60 },
                  { name: "Economia Industrial", workload: 60 },
                  { name: "Economia Regional", workload: 45 },
                  { name: "Economia Urbana", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Economia da Saúde", workload: 60 },
                  { name: "Economia da Educação", workload: 60 },
                  { name: "Economia da Inovação", workload: 45 },
                  { name: "Economia do Conhecimento", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 4,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Projeto de TCC I", workload: 60 },
                  { name: "Consultoria Econômica", workload: 60 },
                  { name: "Gestão de Políticas Públicas", workload: 45 },
                  { name: "Ética e Legislação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Projeto de TCC II", workload: 60 },
                  { name: "Inovação Tecnológica", workload: 60 },
                  { name: "Gestão de TI", workload: 45 },
                  { name: "Direito Digital", workload: 45 },
                ],
              },
            ],
          },
        ],
      },
      {
        course: "Administração",
        duration: 4,
        level: "graduation",
        short_detail: "Formação em gestão de empresas e negócios",
        slug: "administracao-graduacao",
        long_description:
          "O curso de Administração oferece uma formação abrangente em gestão de empresas e negócios. Os alunos desenvolvem competências em planejamento, organização, direção e controle, preparando-se para atuar em diversas áreas da administração, como recursos humanos, marketing, finanças e produção. O curso também aborda temas como empreendedorismo, inovação e sustentabilidade, capacitando os futuros administradores a enfrentar os desafios do mercado globalizado.",
        benefits: [
          "Formação abrangente em gestão de empresas e negócios.",
          "Desenvolvimento de competências em planejamento e organização.",
          "Preparação para atuar em diversas áreas da administração.",
          "Ênfase em empreendedorismo e inovação.",
          "Oportunidades de estágio em empresas de diversos setores.",
        ],
        shift: {
          afternoon: true,
          morning: true,
          evening: true,
        },
        course_cover: "https://www.realimage.com/administracao-cover.jpg",
        years: [
          {
            year: 1,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Introdução à Administração", workload: 60 },
                  { name: "Economia", workload: 60 },
                  { name: "Matemática", workload: 45 },
                  { name: "Contabilidade", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Direito Empresarial", workload: 60 },
                  { name: "Estatística", workload: 60 },
                  { name: "Marketing", workload: 45 },
                  { name: "Gestão de Pessoas", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 2,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Administração Financeira", workload: 60 },
                  { name: "Administração de Produção", workload: 60 },
                  { name: "Comportamento Organizacional", workload: 45 },
                  { name: "Gestão de Projetos", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Administração de Recursos Humanos", workload: 60 },
                  { name: "Administração de Marketing", workload: 60 },
                  { name: "Logística", workload: 45 },
                  { name: "Empreendedorismo", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 3,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Administração Estratégica", workload: 60 },
                  { name: "Gestão da Qualidade", workload: 60 },
                  { name: "Negócios Internacionais", workload: 45 },
                  { name: "Sistemas de Informação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Administração Pública", workload: 60 },
                  { name: "Gestão de Operações", workload: 60 },
                  { name: "Planejamento Estratégico", workload: 45 },
                  { name: "Inovação e Sustentabilidade", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 4,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Projeto de TCC I", workload: 60 },
                  { name: "Consultoria Empresarial", workload: 60 },
                  { name: "Gestão de Negócios", workload: 45 },
                  { name: "Ética e Legislação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Projeto de TCC II", workload: 60 },
                  { name: "Inovação Tecnológica", workload: 60 },
                  { name: "Gestão de TI", workload: 45 },
                  { name: "Direito Digital", workload: 45 },
                ],
              },
            ],
          },
        ],
      },
      {
        course: "Economia",
        duration: 4,
        level: "graduation",
        short_detail: "Formação em análise econômica e políticas públicas",
        slug: "economia-graduacao",
        long_description:
          "O curso de Economia oferece uma formação sólida em análise econômica e políticas públicas. Os alunos desenvolvem competências em microeconomia, macroeconomia, econometria e finanças, preparando-se para atuar em diversas áreas, como consultoria econômica, planejamento estratégico, análise de investimentos e formulação de políticas públicas. O curso também aborda temas como desenvolvimento econômico, economia internacional e sustentabilidade, capacitando os futuros economistas a enfrentar os desafios do mercado globalizado.",
        benefits: [
          "Formação sólida em análise econômica e políticas públicas.",
          "Desenvolvimento de competências em microeconomia e macroeconomia.",
          "Preparação para atuar em consultoria econômica e planejamento estratégico.",
          "Ênfase em desenvolvimento econômico e sustentabilidade.",
          "Oportunidades de estágio em empresas e órgãos públicos.",
        ],
        shift: {
          afternoon: true,
          morning: true,
          evening: true,
        },
        course_cover: "https://www.realimage.com/economia-cover.jpg",
        years: [
          {
            year: 1,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Introdução à Economia", workload: 60 },
                  { name: "Matemática", workload: 60 },
                  { name: "Estatística", workload: 45 },
                  { name: "Contabilidade", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Microeconomia", workload: 60 },
                  { name: "Macroeconomia", workload: 60 },
                  { name: "Econometria", workload: 45 },
                  { name: "Finanças", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 2,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Teoria Econômica", workload: 60 },
                  { name: "Política Econômica", workload: 60 },
                  { name: "Desenvolvimento Econômico", workload: 45 },
                  { name: "Economia Internacional", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Economia do Setor Público", workload: 60 },
                  { name: "Economia Monetária", workload: 60 },
                  { name: "Economia do Trabalho", workload: 45 },
                  { name: "Economia Ambiental", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 3,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Economia Agrícola", workload: 60 },
                  { name: "Economia Industrial", workload: 60 },
                  { name: "Economia Regional", workload: 45 },
                  { name: "Economia Urbana", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Economia da Saúde", workload: 60 },
                  { name: "Economia da Educação", workload: 60 },
                  { name: "Economia da Inovação", workload: 45 },
                  { name: "Economia do Conhecimento", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 4,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Projeto de TCC I", workload: 60 },
                  { name: "Consultoria Econômica", workload: 60 },
                  { name: "Gestão de Políticas Públicas", workload: 45 },
                  { name: "Ética e Legislação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Projeto de TCC II", workload: 60 },
                  { name: "Inovação Tecnológica", workload: 60 },
                  { name: "Gestão de TI", workload: 45 },
                  { name: "Direito Digital", workload: 45 },
                ],
              },
            ],
          },
        ],
      },
      {
        course: "Administração",
        duration: 4,
        level: "graduation",
        short_detail: "Formação em gestão de empresas e negócios",
        slug: "administracao-graduacao",
        long_description:
          "O curso de Administração oferece uma formação abrangente em gestão de empresas e negócios. Os alunos desenvolvem competências em planejamento, organização, direção e controle, preparando-se para atuar em diversas áreas da administração, como recursos humanos, marketing, finanças e produção. O curso também aborda temas como empreendedorismo, inovação e sustentabilidade, capacitando os futuros administradores a enfrentar os desafios do mercado globalizado.",
        benefits: [
          "Formação abrangente em gestão de empresas e negócios.",
          "Desenvolvimento de competências em planejamento e organização.",
          "Preparação para atuar em diversas áreas da administração.",
          "Ênfase em empreendedorismo e inovação.",
          "Oportunidades de estágio em empresas de diversos setores.",
        ],
        shift: {
          afternoon: true,
          morning: true,
          evening: true,
        },
        course_cover: "https://www.realimage.com/administracao-cover.jpg",
        years: [
          {
            year: 1,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Introdução à Administração", workload: 60 },
                  { name: "Economia", workload: 60 },
                  { name: "Matemática", workload: 45 },
                  { name: "Contabilidade", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Direito Empresarial", workload: 60 },
                  { name: "Estatística", workload: 60 },
                  { name: "Marketing", workload: 45 },
                  { name: "Gestão de Pessoas", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 2,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Administração Financeira", workload: 60 },
                  { name: "Administração de Produção", workload: 60 },
                  { name: "Comportamento Organizacional", workload: 45 },
                  { name: "Gestão de Projetos", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Administração de Recursos Humanos", workload: 60 },
                  { name: "Administração de Marketing", workload: 60 },
                  { name: "Logística", workload: 45 },
                  { name: "Empreendedorismo", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 3,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Administração Estratégica", workload: 60 },
                  { name: "Gestão da Qualidade", workload: 60 },
                  { name: "Negócios Internacionais", workload: 45 },
                  { name: "Sistemas de Informação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Administração Pública", workload: 60 },
                  { name: "Gestão de Operações", workload: 60 },
                  { name: "Planejamento Estratégico", workload: 45 },
                  { name: "Inovação e Sustentabilidade", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 4,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Projeto de TCC I", workload: 60 },
                  { name: "Consultoria Empresarial", workload: 60 },
                  { name: "Gestão de Negócios", workload: 45 },
                  { name: "Ética e Legislação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Projeto de TCC II", workload: 60 },
                  { name: "Inovação Tecnológica", workload: 60 },
                  { name: "Gestão de TI", workload: 45 },
                  { name: "Direito Digital", workload: 45 },
                ],
              },
            ],
          },
        ],
      },
      {
        course: "Economia",
        duration: 4,
        level: "graduation",
        short_detail: "Formação em análise econômica e políticas públicas",
        slug: "economia-graduacao",
        long_description:
          "O curso de Economia oferece uma formação sólida em análise econômica e políticas públicas. Os alunos desenvolvem competências em microeconomia, macroeconomia, econometria e finanças, preparando-se para atuar em diversas áreas, como consultoria econômica, planejamento estratégico, análise de investimentos e formulação de políticas públicas. O curso também aborda temas como desenvolvimento econômico, economia internacional e sustentabilidade, capacitando os futuros economistas a enfrentar os desafios do mercado globalizado.",
        benefits: [
          "Formação sólida em análise econômica e políticas públicas.",
          "Desenvolvimento de competências em microeconomia e macroeconomia.",
          "Preparação para atuar em consultoria econômica e planejamento estratégico.",
          "Ênfase em desenvolvimento econômico e sustentabilidade.",
          "Oportunidades de estágio em empresas e órgãos públicos.",
        ],
        shift: {
          afternoon: true,
          morning: true,
          evening: true,
        },
        course_cover: "https://www.realimage.com/economia-cover.jpg",
        years: [
          {
            year: 1,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Introdução à Economia", workload: 60 },
                  { name: "Matemática", workload: 60 },
                  { name: "Estatística", workload: 45 },
                  { name: "Contabilidade", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Microeconomia", workload: 60 },
                  { name: "Macroeconomia", workload: 60 },
                  { name: "Econometria", workload: 45 },
                  { name: "Finanças", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 2,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Teoria Econômica", workload: 60 },
                  { name: "Política Econômica", workload: 60 },
                  { name: "Desenvolvimento Econômico", workload: 45 },
                  { name: "Economia Internacional", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Economia do Setor Público", workload: 60 },
                  { name: "Economia Monetária", workload: 60 },
                  { name: "Economia do Trabalho", workload: 45 },
                  { name: "Economia Ambiental", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 3,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Economia Agrícola", workload: 60 },
                  { name: "Economia Industrial", workload: 60 },
                  { name: "Economia Regional", workload: 45 },
                  { name: "Economia Urbana", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Economia da Saúde", workload: 60 },
                  { name: "Economia da Educação", workload: 60 },
                  { name: "Economia da Inovação", workload: 45 },
                  { name: "Economia do Conhecimento", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 4,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Projeto de TCC I", workload: 60 },
                  { name: "Consultoria Econômica", workload: 60 },
                  { name: "Gestão de Políticas Públicas", workload: 45 },
                  { name: "Ética e Legislação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Projeto de TCC II", workload: 60 },
                  { name: "Inovação Tecnológica", workload: 60 },
                  { name: "Gestão de TI", workload: 45 },
                  { name: "Direito Digital", workload: 45 },
                ],
              },
            ],
          },
        ],
      },
      {
        course: "Administração",
        duration: 4,
        level: "graduation",
        short_detail: "Formação em gestão de empresas e negócios",
        slug: "administracao-graduacao",
        long_description:
          "O curso de Administração oferece uma formação abrangente em gestão de empresas e negócios. Os alunos desenvolvem competências em planejamento, organização, direção e controle, preparando-se para atuar em diversas áreas da administração, como recursos humanos, marketing, finanças e produção. O curso também aborda temas como empreendedorismo, inovação e sustentabilidade, capacitando os futuros administradores a enfrentar os desafios do mercado globalizado.",
        benefits: [
          "Formação abrangente em gestão de empresas e negócios.",
          "Desenvolvimento de competências em planejamento e organização.",
          "Preparação para atuar em diversas áreas da administração.",
          "Ênfase em empreendedorismo e inovação.",
          "Oportunidades de estágio em empresas de diversos setores.",
        ],
        shift: {
          afternoon: true,
          morning: true,
          evening: true,
        },
        course_cover: "https://www.realimage.com/administracao-cover.jpg",
        years: [
          {
            year: 1,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Introdução à Administração", workload: 60 },
                  { name: "Economia", workload: 60 },
                  { name: "Matemática", workload: 45 },
                  { name: "Contabilidade", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Direito Empresarial", workload: 60 },
                  { name: "Estatística", workload: 60 },
                  { name: "Marketing", workload: 45 },
                  { name: "Gestão de Pessoas", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 2,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Administração Financeira", workload: 60 },
                  { name: "Administração de Produção", workload: 60 },
                  { name: "Comportamento Organizacional", workload: 45 },
                  { name: "Gestão de Projetos", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Administração de Recursos Humanos", workload: 60 },
                  { name: "Administração de Marketing", workload: 60 },
                  { name: "Logística", workload: 45 },
                  { name: "Empreendedorismo", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 3,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Administração Estratégica", workload: 60 },
                  { name: "Gestão da Qualidade", workload: 60 },
                  { name: "Negócios Internacionais", workload: 45 },
                  { name: "Sistemas de Informação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Administração Pública", workload: 60 },
                  { name: "Gestão de Operações", workload: 60 },
                  { name: "Planejamento Estratégico", workload: 45 },
                  { name: "Inovação e Sustentabilidade", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 4,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Projeto de TCC I", workload: 60 },
                  { name: "Consultoria Empresarial", workload: 60 },
                  { name: "Gestão de Negócios", workload: 45 },
                  { name: "Ética e Legislação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Projeto de TCC II", workload: 60 },
                  { name: "Inovação Tecnológica", workload: 60 },
                  { name: "Gestão de TI", workload: 45 },
                  { name: "Direito Digital", workload: 45 },
                ],
              },
            ],
          },
        ],
      },
      {
        course: "Economia",
        duration: 4,
        level: "graduation",
        short_detail: "Formação em análise econômica e políticas públicas",
        slug: "economia-graduacao",
        long_description:
          "O curso de Economia oferece uma formação sólida em análise econômica e políticas públicas. Os alunos desenvolvem competências em microeconomia, macroeconomia, econometria e finanças, preparando-se para atuar em diversas áreas, como consultoria econômica, planejamento estratégico, análise de investimentos e formulação de políticas públicas. O curso também aborda temas como desenvolvimento econômico, economia internacional e sustentabilidade, capacitando os futuros economistas a enfrentar os desafios do mercado globalizado.",
        benefits: [
          "Formação sólida em análise econômica e políticas públicas.",
          "Desenvolvimento de competências em microeconomia e macroeconomia.",
          "Preparação para atuar em consultoria econômica e planejamento estratégico.",
          "Ênfase em desenvolvimento econômico e sustentabilidade.",
          "Oportunidades de estágio em empresas e órgãos públicos.",
        ],
        shift: {
          afternoon: true,
          morning: true,
          evening: true,
        },
        course_cover: "https://www.realimage.com/economia-cover.jpg",
        years: [
          {
            year: 1,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Introdução à Economia", workload: 60 },
                  { name: "Matemática", workload: 60 },
                  { name: "Estatística", workload: 45 },
                  { name: "Contabilidade", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Microeconomia", workload: 60 },
                  { name: "Macroeconomia", workload: 60 },
                  { name: "Econometria", workload: 45 },
                  { name: "Finanças", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 2,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Teoria Econômica", workload: 60 },
                  { name: "Política Econômica", workload: 60 },
                  { name: "Desenvolvimento Econômico", workload: 45 },
                  { name: "Economia Internacional", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Economia do Setor Público", workload: 60 },
                  { name: "Economia Monetária", workload: 60 },
                  { name: "Economia do Trabalho", workload: 45 },
                  { name: "Economia Ambiental", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 3,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Economia Agrícola", workload: 60 },
                  { name: "Economia Industrial", workload: 60 },
                  { name: "Economia Regional", workload: 45 },
                  { name: "Economia Urbana", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Economia da Saúde", workload: 60 },
                  { name: "Economia da Educação", workload: 60 },
                  { name: "Economia da Inovação", workload: 45 },
                  { name: "Economia do Conhecimento", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 4,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Projeto de TCC I", workload: 60 },
                  { name: "Consultoria Econômica", workload: 60 },
                  { name: "Gestão de Políticas Públicas", workload: 45 },
                  { name: "Ética e Legislação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Projeto de TCC II", workload: 60 },
                  { name: "Inovação Tecnológica", workload: 60 },
                  { name: "Gestão de TI", workload: 45 },
                  { name: "Direito Digital", workload: 45 },
                ],
              },
            ],
          },
        ],
      },
      {
        course: "Administração",
        duration: 4,
        level: "graduation",
        short_detail: "Formação em gestão de empresas e negócios",
        slug: "administracao-graduacao",
        long_description:
          "O curso de Administração oferece uma formação abrangente em gestão de empresas e negócios. Os alunos desenvolvem competências em planejamento, organização, direção e controle, preparando-se para atuar em diversas áreas da administração, como recursos humanos, marketing, finanças e produção. O curso também aborda temas como empreendedorismo, inovação e sustentabilidade, capacitando os futuros administradores a enfrentar os desafios do mercado globalizado.",
        benefits: [
          "Formação abrangente em gestão de empresas e negócios.",
          "Desenvolvimento de competências em planejamento e organização.",
          "Preparação para atuar em diversas áreas da administração.",
          "Ênfase em empreendedorismo e inovação.",
          "Oportunidades de estágio em empresas de diversos setores.",
        ],
        shift: {
          afternoon: true,
          morning: true,
          evening: true,
        },
        course_cover: "https://www.realimage.com/administracao-cover.jpg",
        years: [
          {
            year: 1,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Introdução à Administração", workload: 60 },
                  { name: "Economia", workload: 60 },
                  { name: "Matemática", workload: 45 },
                  { name: "Contabilidade", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Direito Empresarial", workload: 60 },
                  { name: "Estatística", workload: 60 },
                  { name: "Marketing", workload: 45 },
                  { name: "Gestão de Pessoas", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 2,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Administração Financeira", workload: 60 },
                  { name: "Administração de Produção", workload: 60 },
                  { name: "Comportamento Organizacional", workload: 45 },
                  { name: "Gestão de Projetos", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Administração de Recursos Humanos", workload: 60 },
                  { name: "Administração de Marketing", workload: 60 },
                  { name: "Logística", workload: 45 },
                  { name: "Empreendedorismo", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 3,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Administração Estratégica", workload: 60 },
                  { name: "Gestão da Qualidade", workload: 60 },
                  { name: "Negócios Internacionais", workload: 45 },
                  { name: "Sistemas de Informação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Administração Pública", workload: 60 },
                  { name: "Gestão de Operações", workload: 60 },
                  { name: "Planejamento Estratégico", workload: 45 },
                  { name: "Inovação e Sustentabilidade", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 4,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Projeto de TCC I", workload: 60 },
                  { name: "Consultoria Empresarial", workload: 60 },
                  { name: "Gestão de Negócios", workload: 45 },
                  { name: "Ética e Legislação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Projeto de TCC II", workload: 60 },
                  { name: "Inovação Tecnológica", workload: 60 },
                  { name: "Gestão de TI", workload: 45 },
                  { name: "Direito Digital", workload: 45 },
                ],
              },
            ],
          },
        ],
      },
      {
        course: "Economia",
        duration: 4,
        level: "graduation",
        short_detail: "Formação em análise econômica e políticas públicas",
        slug: "economia-graduacao",
        long_description:
          "O curso de Economia oferece uma formação sólida em análise econômica e políticas públicas. Os alunos desenvolvem competências em microeconomia, macroeconomia, econometria e finanças, preparando-se para atuar em diversas áreas, como consultoria econômica, planejamento estratégico, análise de investimentos e formulação de políticas públicas. O curso também aborda temas como desenvolvimento econômico, economia internacional e sustentabilidade, capacitando os futuros economistas a enfrentar os desafios do mercado globalizado.",
        benefits: [
          "Formação sólida em análise econômica e políticas públicas.",
          "Desenvolvimento de competências em microeconomia e macroeconomia.",
          "Preparação para atuar em consultoria econômica e planejamento estratégico.",
          "Ênfase em desenvolvimento econômico e sustentabilidade.",
          "Oportunidades de estágio em empresas e órgãos públicos.",
        ],
        shift: {
          afternoon: true,
          morning: true,
          evening: true,
        },
        course_cover: "https://www.realimage.com/economia-cover.jpg",
        years: [
          {
            year: 1,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Introdução à Economia", workload: 60 },
                  { name: "Matemática", workload: 60 },
                  { name: "Estatística", workload: 45 },
                  { name: "Contabilidade", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Microeconomia", workload: 60 },
                  { name: "Macroeconomia", workload: 60 },
                  { name: "Econometria", workload: 45 },
                  { name: "Finanças", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 2,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Teoria Econômica", workload: 60 },
                  { name: "Política Econômica", workload: 60 },
                  { name: "Desenvolvimento Econômico", workload: 45 },
                  { name: "Economia Internacional", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Economia do Setor Público", workload: 60 },
                  { name: "Economia Monetária", workload: 60 },
                  { name: "Economia do Trabalho", workload: 45 },
                  { name: "Economia Ambiental", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 3,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Economia Agrícola", workload: 60 },
                  { name: "Economia Industrial", workload: 60 },
                  { name: "Economia Regional", workload: 45 },
                  { name: "Economia Urbana", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Economia da Saúde", workload: 60 },
                  { name: "Economia da Educação", workload: 60 },
                  { name: "Economia da Inovação", workload: 45 },
                  { name: "Economia do Conhecimento", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 4,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Projeto de TCC I", workload: 60 },
                  { name: "Consultoria Econômica", workload: 60 },
                  { name: "Gestão de Políticas Públicas", workload: 45 },
                  { name: "Ética e Legislação", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Projeto de TCC II", workload: 60 },
                  { name: "Inovação Tecnológica", workload: 60 },
                  { name: "Gestão de TI", workload: 45 },
                  { name: "Direito Digital", workload: 45 },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  masters: {
    catalog_link: "https://docs.google.com/document/d/1zlmEIrShckNeRXmscaReMwYFMpAKJRlgRZUV2Ft9GnI/edit?usp=sharing",
    name: "Mestrados",
    department_cover: images.backgrounds.bg_master.src,
    departmentDirector: {
      name: "M2J Technologias",
      picture: images.teachers.katumbela.src
    },
    courses: [
      {
        course: "Mestrado em Engenharia de Software",
        duration: 2,
        level: "master",
        short_detail: "Formação avançada em engenharia de software",
        slug: "mestrado-engenharia-software",
        long_description:
          "O curso de Mestrado em Engenharia de Software oferece uma formação avançada e especializada em desenvolvimento de software, abordando técnicas modernas e práticas de engenharia.",
        benefits: [
          "Desenvolvimento de habilidades avançadas em engenharia de software.",
          "Preparação para cargos de liderança em projetos de software.",
          "Oportunidades de pesquisa e inovação tecnológica.",
        ],
        shift: {
          afternoon: true,
          morning: true,
          evening: true,
        },
        course_cover: "https://miro.medium.com/v2/resize:fit:1400/0*aTDfdlZWl2eiL58-",
        years: [
          {
            year: 1,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Arquitetura de Software", workload: 60 },
                  { name: "Engenharia de Requisitos", workload: 60 },
                  { name: "Gerenciamento de Projetos de Software", workload: 45 },
                  { name: "Qualidade de Software", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Desenvolvimento Ágil", workload: 60 },
                  { name: "Teste de Software", workload: 60 },
                  { name: "Segurança de Software", workload: 45 },
                  { name: "Manutenção de Software", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 2,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Tópicos Avançados em Engenharia de Software", workload: 60 },
                  { name: "Pesquisa em Engenharia de Software", workload: 60 },
                  { name: "Inovação em Software", workload: 45 },
                  { name: "Empreendedorismo em TI", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Dissertação de Mestrado I", workload: 60 },
                  { name: "Dissertação de Mestrado II", workload: 60 },
                ],
              },
            ],
          },
        ],
      },
      {
        course: "Mestrado em Inteligência Artificial",
        duration: 2,
        level: "master",
        short_detail: "Formação avançada em inteligência artificial",
        slug: "mestrado-inteligencia-artificial",
        long_description:
          "O curso de Mestrado em Inteligência Artificial oferece uma formação especializada em técnicas e aplica��ões de IA, preparando os alunos para atuar em pesquisa e desenvolvimento de soluções inovadoras.",
        benefits: [
          "Desenvolvimento de habilidades avançadas em IA.",
          "Preparação para pesquisa e desenvolvimento em IA.",
          "Oportunidades de inovação tecnológica.",
        ],
        shift: {
          afternoon: true,
          morning: true,
          evening: true,
        },
        course_cover: "https://img-c.udemycdn.com/course/480x270/950390_270f_3.jpg",
        years: [
          {
            year: 1,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Fundamentos de IA", workload: 60 },
                  { name: "Aprendizado de Máquina", workload: 60 },
                  { name: "Processamento de Linguagem Natural", workload: 45 },
                  { name: "Visão Computacional", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Redes Neurais", workload: 60 },
                  { name: "Robótica", workload: 60 },
                  { name: "Sistemas Inteligentes", workload: 45 },
                  { name: "Ética em IA", workload: 45 },
                ],
              },
            ],
          },
          {
            year: 2,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Tópicos Avançados em IA", workload: 60 },
                  { name: "Pesquisa em IA", workload: 60 },
                  { name: "Inovação em IA", workload: 45 },
                  { name: "Empreendedorismo em IA", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Dissertação de Mestrado I", workload: 60 },
                  { name: "Dissertação de Mestrado II", workload: 60 },
                ],
              },
            ],
          },
        ],
      },
      // ...additional master courses...
    ],
  },
  professional: {
    catalog_link: "https://docs.google.com/document/d/1zlmEIrShckNeRXmscaReMwYFMpAKJRlgRZUV2Ft9GnI/edit?usp=sharing",
    name: "Cursos Profissionais",
    department_cover: "https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
    departmentDirector: {
      name: "João A. Katombela",
      picture: images.teachers.katumbela.src
    },
    courses: [
      {
        course: "Curso Profissional de Desenvolvimento Web",
        duration: 1,
        level: "professional",
        short_detail: "Formação prática em desenvolvimento web",
        slug: "curso-profissional-desenvolvimento-web",
        long_description:
          "O curso profissional de Desenvolvimento Web oferece uma formação prática e intensiva em tecnologias e ferramentas modernas para criação de websites e aplicações web.",
        benefits: [
          "Desenvolvimento de habilidades práticas em desenvolvimento web.",
          "Preparação para o mercado de trabalho em tecnologia.",
          "Oportunidades de estágio em empresas de tecnologia.",
        ],
        shift: {
          afternoon: true,
          morning: true,
          evening: true,
        },
        course_cover: "https://t3.ftcdn.net/jpg/03/48/39/74/360_F_348397404_wXuf22GUPNAh67htBZZnaDSx3Bj92yep.jpg",
        years: [
          {
            year: 1,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "HTML e CSS", workload: 60 },
                  { name: "JavaScript", workload: 60 },
                  { name: "Frameworks Front-end", workload: 45 },
                  { name: "Desenvolvimento Back-end", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Banco de Dados", workload: 60 },
                  { name: "DevOps", workload: 60 },
                  { name: "Segurança Web", workload: 45 },
                  { name: "Projeto Final", workload: 45 },
                ],
              },
            ],
          },
        ],
      },
      {
        course: "Curso Profissional de Marketing Digital",
        duration: 1,
        level: "professional",
        short_detail: "Formação prática em marketing digital",
        slug: "curso-profissional-marketing-digital",
        long_description:
          "O curso profissional de Marketing Digital oferece uma formação prática e intensiva em estratégias e ferramentas de marketing digital, preparando os alunos para atuar em campanhas online.",
        benefits: [
          "Desenvolvimento de habilidades práticas em marketing digital.",
          "Preparação para o mercado de trabalho em marketing.",
          "Oportunidades de estágio em empresas de marketing.",
        ],
        shift: {
          afternoon: true,
          morning: true,
          evening: true,
        },
        course_cover: "https://ultimatum.com.br/wp-content/uploads/2024/03/marketing-digital.jpeg",
        years: [
          {
            year: 1,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Fundamentos de Marketing Digital", workload: 60 },
                  { name: "SEO e SEM", workload: 60 },
                  { name: "Redes Sociais", workload: 45 },
                  { name: "Análise de Dados", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Publicidade Online", workload: 60 },
                  { name: "E-mail Marketing", workload: 60 },
                  { name: "Marketing de Conteúdo", workload: 45 },
                  { name: "Projeto Final", workload: 45 },
                ],
              },
            ],
          },
        ],
      },
      // ...additional professional courses...
    ],
  },
  preparatory: {
    catalog_link: "https://docs.google.com/document/d/1zlmEIrShckNeRXmscaReMwYFMpAKJRlgRZUV2Ft9GnI/edit?usp=sharing",
    name: "Cursos Preparatórios",
    department_cover: images.backgrounds.bg_prepa_tec.src,
    departmentDirector: {
      name: "João A. Katombela",
      picture: images.teachers.katumbela.src
    },
    courses: [
      {
        course: " Preparatório para Engenharias",
        duration: 1,
        level: "preparatory",
        short_detail: "Preparação intensiva para o ENEM",
        slug: "curso-preparatorio-enem",
        long_description:
          "O curso preparatório para o ENEM oferece uma formação intensiva e focada nas disciplinas cobradas no exame, preparando os alunos para obterem um bom desempenho.",
        benefits: [
          "Preparação completa para o ENEM.",
          "Aulas com professores experientes.",
          "Material didático atualizado.",
        ],
        shift: {
          afternoon: true,
          morning: true,
          evening: true,
        },
        course_cover: "https://mynice.org/wp-content/uploads/2021/05/board-4727472_1920.jpg",
        years: [
          {
            year: 1,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Matemática", workload: 60 },
                  { name: "Língua Portuguesa", workload: 60 },
                  { name: "Ciências Humanas", workload: 45 },
                  { name: "Ciências da Natureza", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Redação", workload: 60 },
                  { name: "Simulados", workload: 60 },
                ],
              },
            ],
          },
        ],
      },
      {
        course: "Curso Preparatório para Vestibulares",
        duration: 1,
        level: "preparatory",
        short_detail: "Preparação intensiva para vestibulares",
        slug: "curso-preparatorio-vestibulares",
        long_description:
          "O curso preparatório para vestibulares oferece uma formação intensiva e focada nas disciplinas cobradas nos principais vestibulares do país, preparando os alunos para obterem um bom desempenho.",
        benefits: [
          "Preparação completa para vestibulares.",
          "Aulas com professores experientes.",
          "Material didático atualizado.",
        ],
        shift: {
          afternoon: true,
          morning: true,
          evening: true,
        },
        course_cover: "https://ambitio.club/blog/wp-content/uploads/2024/06/gmat-for-non-maths-background-3-1024x536.jpg",
        years: [
          {
            year: 1,
            semesters: [
              {
                semester: 1,
                subjects: [
                  { name: "Matemática", workload: 60 },
                  { name: "Língua Portuguesa", workload: 60 },
                  { name: "Ciências Humanas", workload: 45 },
                  { name: "Ciências da Natureza", workload: 45 },
                ],
              },
              {
                semester: 2,
                subjects: [
                  { name: "Redação", workload: 60 },
                  { name: "Simulados", workload: 60 },
                ],
              },
            ],
          },
        ],
      },
      // ...additional preparatory courses...
    ],
  },
};
