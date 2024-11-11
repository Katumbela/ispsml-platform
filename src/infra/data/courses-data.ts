import type { ICourse } from "../interfaces/course.interface";

export const coursesData: ICourse[] = [
  {
    course: "Engenharia Informática",
    duration: 4,
    level: "graduation",
    short_detail: "Formação em desenvolvimento e gestão de sistemas computacionais",
    slug: "engenharia-informatica-graduacao",
    long_description: "O curso de Engenharia Informática forma profissionais capacitados para projetar, desenvolver e gerir sistemas computacionais. Com forte ênfase em programação, banco de dados, redes de computadores e inteligência artificial, os graduados estão preparados para atuar em diversos setores tecnológicos, contribuindo para a transformação digital das organizações. Além disso, o curso oferece uma base sólida em matemática e física, preparando os alunos para enfrentar desafios complexos na área de tecnologia.",
    shift: {
      afternoon: true,
      morning: true,
      evening: false
    },
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
              { name: "Introdução à Computação", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Programação II", workload: 60 },
              { name: "Estruturas de Dados", workload: 60 },
              { name: "Arquitetura de Computadores", workload: 45 },
              { name: "Cálculo I", workload: 45 }
            ]
          }
        ]
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
              { name: "Cálculo II", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Engenharia de Software I", workload: 60 },
              { name: "Banco de Dados II", workload: 60 },
              { name: "Redes de Computadores II", workload: 45 },
              { name: "Cálculo III", workload: 45 }
            ]
          }
        ]
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
              { name: "Cálculo IV", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Inteligência Artificial II", workload: 60 },
              { name: "Sistemas Distribuídos", workload: 60 },
              { name: "Segurança da Informação", workload: 45 },
              { name: "Cálculo V", workload: 45 }
            ]
          }
        ]
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
              { name: "Ética e Legislação", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Projeto de TCC II", workload: 60 },
              { name: "Inovação Tecnológica", workload: 60 },
              { name: "Gestão de TI", workload: 45 },
              { name: "Direito Digital", workload: 45 }
            ]
          }
        ]
      }
    ]
  },
  {
    course: "Ciência da Computação",
    duration: 5,
    level: "graduation",
    short_detail: "Formação avançada em computação e suas aplicações",
    slug: "ciencia-computacao-graduacao",
    long_description: "O curso de Ciência da Computação oferece uma formação sólida em fundamentos teóricos e práticos da computação. Os estudantes desenvolvem competências em algoritmos, teoria da computação, desenvolvimento de software, inteligência artificial e computação científica, preparando-se para carreiras em pesquisa, desenvolvimento e inovação tecnológica. O curso também abrange áreas emergentes como computação quântica, aprendizado de máquina e ciência de dados, proporcionando uma visão abrangente e atualizada do campo.",
    shift: {
      afternoon: true,
      morning: true,
      evening: false
    },
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
              { name: "Fundamentos de Computação", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Estruturas de Dados", workload: 60 },
              { name: "Cálculo Diferencial e Integral II", workload: 60 },
              { name: "Álgebra Linear", workload: 45 },
              { name: "Lógica Matemática", workload: 45 }
            ]
          }
        ]
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
              { name: "Cálculo Diferencial e Integral III", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Análise de Algoritmos", workload: 60 },
              { name: "Banco de Dados", workload: 60 },
              { name: "Redes de Computadores", workload: 45 },
              { name: "Cálculo Diferencial e Integral IV", workload: 45 }
            ]
          }
        ]
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
              { name: "Cálculo Diferencial e Integral V", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Aprendizado de Máquina", workload: 60 },
              { name: "Sistemas Distribuídos", workload: 60 },
              { name: "Segurança da Informação", workload: 45 },
              { name: "Cálculo Diferencial e Integral VI", workload: 45 }
            ]
          }
        ]
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
              { name: "Ética e Legislação", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Projeto de TCC II", workload: 60 },
              { name: "Inovação Tecnológica", workload: 60 },
              { name: "Gestão de TI", workload: 45 },
              { name: "Direito Digital", workload: 45 }
            ]
          }
        ]
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
              { name: "Computação em Nuvem", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Tópicos Avançados em Computação", workload: 60 },
              { name: "Computação Gráfica", workload: 60 },
              { name: "Processamento de Imagens", workload: 45 },
              { name: "Realidade Virtual", workload: 45 }
            ]
          }
        ]
      }
    ]
  },
  {
    course: "Engenharia Química",
    duration: 5,
    level: "graduation",
    short_detail: "Formação em processos químicos e industriais",
    slug: "engenharia-quimica-graduacao",
    long_description: "O curso de Engenharia Química oferece uma formação abrangente em processos químicos e industriais. Os alunos aprendem a projetar, otimizar e operar processos de produção de produtos químicos, petroquímicos, farmacêuticos e de alimentos. O curso também aborda questões ambientais e de sustentabilidade, preparando os engenheiros para desenvolver soluções inovadoras e sustentáveis para a indústria. Além disso, os estudantes têm a oportunidade de realizar estágios em empresas do setor, adquirindo experiência prática e ampliando suas perspectivas de carreira.",
    shift: {
      afternoon: true,
      morning: true,
      evening: false
    },
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
              { name: "Introdução à Engenharia Química", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Matemática II", workload: 60 },
              { name: "Química II", workload: 60 },
              { name: "Física II", workload: 45 },
              { name: "Termodinâmica I", workload: 45 }
            ]
          }
        ]
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
              { name: "Termodinâmica II", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Matemática IV", workload: 60 },
              { name: "Química Orgânica II", workload: 60 },
              { name: "Física IV", workload: 45 },
              { name: "Mecânica dos Fluidos", workload: 45 }
            ]
          }
        ]
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
              { name: "Cálculo Numérico", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Operações Unitárias II", workload: 60 },
              { name: "Reatores Químicos II", workload: 60 },
              { name: "Transferência de Massa", workload: 45 },
              { name: "Controle de Processos", workload: 45 }
            ]
          }
        ]
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
              { name: "Ética e Legislação", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Projeto de TCC II", workload: 60 },
              { name: "Inovação Tecnológica", workload: 60 },
              { name: "Gestão de TI", workload: 45 },
              { name: "Direito Digital", workload: 45 }
            ]
          }
        ]
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
              { name: "Sustentabilidade", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Tópicos Avançados em Engenharia Química", workload: 60 },
              { name: "Processos Industriais", workload: 60 },
              { name: "Segurança de Processos", workload: 45 },
              { name: "Gestão Ambiental", workload: 45 }
            ]
          }
        ]
      }
    ]
  },
  {
    course: "Engenharia Eletrotécnica",
    duration: 4,
    level: "graduation",
    short_detail: "Formação em sistemas elétricos e eletrônicos",
    slug: "engenharia-eletrotecnica-graduacao",
    long_description: "O curso de Engenharia Eletrotécnica oferece uma formação completa em sistemas elétricos e eletrônicos. Os alunos aprendem a projetar, implementar e manter sistemas de geração, transmissão e distribuição de energia elétrica, bem como sistemas eletrônicos de controle e automação. O curso também aborda temas como energias renováveis, eficiência energética e sustentabilidade, preparando os engenheiros para enfrentar os desafios do setor elétrico. Além disso, os estudantes têm acesso a laboratórios modernos e oportunidades de estágio em empresas do setor.",
    shift: {
      afternoon: true,
      morning: true,
      evening: true
    },
    years: [
      {
        year: 1,
        semesters: [
          {
            semester: 1,
            subjects: [
              { name: "Física I", workload: 60 },
              { name: "Eletrônica I", workload: 60 },
              { name: "Matemática I", workload: 45 },
              { name: "Introdução à Engenharia Eletrotécnica", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Física II", workload: 60 },
              { name: "Eletrônica II", workload: 60 },
              { name: "Matemática II", workload: 45 },
              { name: "Circuitos Elétricos I", workload: 45 }
            ]
          }
        ]
      },
      {
        year: 2,
        semesters: [
          {
            semester: 1,
            subjects: [
              { name: "Física III", workload: 60 },
              { name: "Eletrônica III", workload: 60 },
              { name: "Matemática III", workload: 45 },
              { name: "Circuitos Elétricos II", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Física IV", workload: 60 },
              { name: "Eletrônica IV", workload: 60 },
              { name: "Matemática IV", workload: 45 },
              { name: "Sistemas de Controle I", workload: 45 }
            ]
          }
        ]
      },
      {
        year: 3,
        semesters: [
          {
            semester: 1,
            subjects: [
              { name: "Sistemas de Controle II", workload: 60 },
              { name: "Máquinas Elétricas I", workload: 60 },
              { name: "Eletromagnetismo", workload: 45 },
              { name: "Cálculo Numérico", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Sistemas de Controle III", workload: 60 },
              { name: "Máquinas Elétricas II", workload: 60 },
              { name: "Eletrônica de Potência", workload: 45 },
              { name: "Sistemas Digitais", workload: 45 }
            ]
          }
        ]
      },
      {
        year: 4,
        semesters: [
          {
            semester: 1,
            subjects: [
              { name: "Projeto de TCC I", workload: 60 },
              { name: "Energias Renováveis", workload: 60 },
              { name: "Gestão de Projetos", workload: 45 },
              { name: "Ética e Legislação", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Projeto de TCC II", workload: 60 },
              { name: "Inovação Tecnológica", workload: 60 },
              { name: "Gestão de TI", workload: 45 },
              { name: "Direito Digital", workload: 45 }
            ]
          }
        ]
      }
    ]
  },
  {
    course: "Engenharia Informática",
    duration: 4,
    level: "graduation",
    short_detail: "Formação em desenvolvimento e gestão de sistemas computacionais",
    slug: "engenharia-informatica-graduacao",
    long_description: "O curso de Engenharia Informática forma profissionais capacitados para projetar, desenvolver e gerir sistemas computacionais. Com forte ênfase em programação, banco de dados, redes de computadores e inteligência artificial, os graduados estão preparados para atuar em diversos setores tecnológicos, contribuindo para a transformação digital das organizações. Além disso, o curso oferece uma base sólida em matemática e física, preparando os alunos para enfrentar desafios complexos na área de tecnologia.",
    shift: {
      afternoon: true,
      morning: true,
      evening: false
    },
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
              { name: "Introdução à Computação", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Programação II", workload: 60 },
              { name: "Estruturas de Dados", workload: 60 },
              { name: "Arquitetura de Computadores", workload: 45 },
              { name: "Cálculo I", workload: 45 }
            ]
          }
        ]
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
              { name: "Cálculo II", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Engenharia de Software I", workload: 60 },
              { name: "Banco de Dados II", workload: 60 },
              { name: "Redes de Computadores II", workload: 45 },
              { name: "Cálculo III", workload: 45 }
            ]
          }
        ]
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
              { name: "Cálculo IV", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Inteligência Artificial II", workload: 60 },
              { name: "Sistemas Distribuídos", workload: 60 },
              { name: "Segurança da Informação", workload: 45 },
              { name: "Cálculo V", workload: 45 }
            ]
          }
        ]
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
              { name: "Ética e Legislação", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Projeto de TCC II", workload: 60 },
              { name: "Inovação Tecnológica", workload: 60 },
              { name: "Gestão de TI", workload: 45 },
              { name: "Direito Digital", workload: 45 }
            ]
          }
        ]
      }
    ]
  },
  {
    course: "Ciência da Computação",
    duration: 5,
    level: "graduation",
    short_detail: "Formação avançada em computação e suas aplicações",
    slug: "ciencia-computacao-graduacao",
    long_description: "O curso de Ciência da Computação oferece uma formação sólida em fundamentos teóricos e práticos da computação. Os estudantes desenvolvem competências em algoritmos, teoria da computação, desenvolvimento de software, inteligência artificial e computação científica, preparando-se para carreiras em pesquisa, desenvolvimento e inovação tecnológica. O curso também abrange áreas emergentes como computação quântica, aprendizado de máquina e ciência de dados, proporcionando uma visão abrangente e atualizada do campo.",
    shift: {
      afternoon: true,
      morning: true,
      evening: false
    },
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
              { name: "Fundamentos de Computação", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Estruturas de Dados", workload: 60 },
              { name: "Cálculo Diferencial e Integral II", workload: 60 },
              { name: "Álgebra Linear", workload: 45 },
              { name: "Lógica Matemática", workload: 45 }
            ]
          }
        ]
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
              { name: "Cálculo Diferencial e Integral III", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Análise de Algoritmos", workload: 60 },
              { name: "Banco de Dados", workload: 60 },
              { name: "Redes de Computadores", workload: 45 },
              { name: "Cálculo Diferencial e Integral IV", workload: 45 }
            ]
          }
        ]
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
              { name: "Cálculo Diferencial e Integral V", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Aprendizado de Máquina", workload: 60 },
              { name: "Sistemas Distribuídos", workload: 60 },
              { name: "Segurança da Informação", workload: 45 },
              { name: "Cálculo Diferencial e Integral VI", workload: 45 }
            ]
          }
        ]
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
              { name: "Ética e Legislação", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Projeto de TCC II", workload: 60 },
              { name: "Inovação Tecnológica", workload: 60 },
              { name: "Gestão de TI", workload: 45 },
              { name: "Direito Digital", workload: 45 }
            ]
          }
        ]
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
              { name: "Computação em Nuvem", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Tópicos Avançados em Computação", workload: 60 },
              { name: "Computação Gráfica", workload: 60 },
              { name: "Processamento de Imagens", workload: 45 },
              { name: "Realidade Virtual", workload: 45 }
            ]
          }
        ]
      }
    ]
  },
  {
    course: "Engenharia Química",
    duration: 5,
    level: "graduation",
    short_detail: "Formação em processos químicos e industriais",
    slug: "engenharia-quimica-graduacao",
    long_description: "O curso de Engenharia Química oferece uma formação abrangente em processos químicos e industriais. Os alunos aprendem a projetar, otimizar e operar processos de produção de produtos químicos, petroquímicos, farmacêuticos e de alimentos. O curso também aborda questões ambientais e de sustentabilidade, preparando os engenheiros para desenvolver soluções inovadoras e sustentáveis para a indústria. Além disso, os estudantes têm a oportunidade de realizar estágios em empresas do setor, adquirindo experiência prática e ampliando suas perspectivas de carreira.",
    shift: {
      afternoon: true,
      morning: true,
      evening: false
    },
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
              { name: "Introdução à Engenharia Química", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Matemática II", workload: 60 },
              { name: "Química II", workload: 60 },
              { name: "Física II", workload: 45 },
              { name: "Termodinâmica I", workload: 45 }
            ]
          }
        ]
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
              { name: "Termodinâmica II", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Matemática IV", workload: 60 },
              { name: "Química Orgânica II", workload: 60 },
              { name: "Física IV", workload: 45 },
              { name: "Mecânica dos Fluidos", workload: 45 }
            ]
          }
        ]
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
              { name: "Cálculo Numérico", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Operações Unitárias II", workload: 60 },
              { name: "Reatores Químicos II", workload: 60 },
              { name: "Transferência de Massa", workload: 45 },
              { name: "Controle de Processos", workload: 45 }
            ]
          }
        ]
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
              { name: "Ética e Legislação", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Projeto de TCC II", workload: 60 },
              { name: "Inovação Tecnológica", workload: 60 },
              { name: "Gestão de TI", workload: 45 },
              { name: "Direito Digital", workload: 45 }
            ]
          }
        ]
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
              { name: "Sustentabilidade", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Tópicos Avançados em Engenharia Química", workload: 60 },
              { name: "Processos Industriais", workload: 60 },
              { name: "Segurança de Processos", workload: 45 },
              { name: "Gestão Ambiental", workload: 45 }
            ]
          }
        ]
      }
    ]
  },
  {
    course: "Engenharia Eletrotécnica",
    duration: 4,
    level: "graduation",
    short_detail: "Formação em sistemas elétricos e eletrônicos",
    slug: "engenharia-eletrotecnica-graduacao",
    long_description: "O curso de Engenharia Eletrotécnica oferece uma formação completa em sistemas elétricos e eletrônicos. Os alunos aprendem a projetar, implementar e manter sistemas de geração, transmissão e distribuição de energia elétrica, bem como sistemas eletrônicos de controle e automação. O curso também aborda temas como energias renováveis, eficiência energética e sustentabilidade, preparando os engenheiros para enfrentar os desafios do setor elétrico. Além disso, os estudantes têm acesso a laboratórios modernos e oportunidades de estágio em empresas do setor.",
    shift: {
      afternoon: true,
      morning: true,
      evening: true
    },
    years: [
      {
        year: 1,
        semesters: [
          {
            semester: 1,
            subjects: [
              { name: "Física I", workload: 60 },
              { name: "Eletrônica I", workload: 60 },
              { name: "Matemática I", workload: 45 },
              { name: "Introdução à Engenharia Eletrotécnica", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Física II", workload: 60 },
              { name: "Eletrônica II", workload: 60 },
              { name: "Matemática II", workload: 45 },
              { name: "Circuitos Elétricos I", workload: 45 }
            ]
          }
        ]
      },
      {
        year: 2,
        semesters: [
          {
            semester: 1,
            subjects: [
              { name: "Física III", workload: 60 },
              { name: "Eletrônica III", workload: 60 },
              { name: "Matemática III", workload: 45 },
              { name: "Circuitos Elétricos II", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Física IV", workload: 60 },
              { name: "Eletrônica IV", workload: 60 },
              { name: "Matemática IV", workload: 45 },
              { name: "Sistemas de Controle I", workload: 45 }
            ]
          }
        ]
      },
      {
        year: 3,
        semesters: [
          {
            semester: 1,
            subjects: [
              { name: "Sistemas de Controle II", workload: 60 },
              { name: "Máquinas Elétricas I", workload: 60 },
              { name: "Eletromagnetismo", workload: 45 },
              { name: "Cálculo Numérico", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Sistemas de Controle III", workload: 60 },
              { name: "Máquinas Elétricas II", workload: 60 },
              { name: "Eletrônica de Potência", workload: 45 },
              { name: "Sistemas Digitais", workload: 45 }
            ]
          }
        ]
      },
      {
        year: 4,
        semesters: [
          {
            semester: 1,
            subjects: [
              { name: "Projeto de TCC I", workload: 60 },
              { name: "Energias Renováveis", workload: 60 },
              { name: "Gestão de Projetos", workload: 45 },
              { name: "Ética e Legislação", workload: 45 }
            ]
          },
          {
            semester: 2,
            subjects: [
              { name: "Projeto de TCC II", workload: 60 },
              { name: "Inovação Tecnológica", workload: 60 },
              { name: "Gestão de TI", workload: 45 },
              { name: "Direito Digital", workload: 45 }
            ]
          }
        ]
      }
    ]
  }
];