import type { ICourse } from "../interfaces/course.interface";

export const coursesData: { [key: string]: { department_cover: string, courses: ICourse[] } } = {
  engineering: {
    department_cover: "https://www.example.com/engineering-department-cover.jpg",
    courses: [
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
        course_cover: "https://www.realimage.com/engenharia-informatica-cover.jpg",
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
        course_cover: "https://www.realimage.com/engenharia-informatica-cover.jpg",
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
      }
    ]
  },
  geoscience: {
    department_cover: "https://www.example.com/geoscience-department-cover.jpg",
    courses: [
      {
        course: "Geologia",
        duration: 4,
        level: "graduation",
        short_detail: "Formação em estudo da Terra e seus processos",
        slug: "geologia-graduacao",
        long_description: "O curso de Geologia oferece uma formação completa em estudo da Terra, seus materiais, processos e história. Os alunos aprendem sobre minerais, rochas, fósseis, recursos naturais e riscos geológicos. O curso também aborda técnicas de mapeamento geológico, geofísica e geoquímica, preparando os geólogos para atuar em exploração mineral, petróleo, meio ambiente e pesquisa científica.",
        shift: {
          afternoon: true,
          morning: true,
          evening: false
        },
        course_cover: "https://www.realimage.com/geologia-cover.jpg",
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
                  { name: "Paleontologia", workload: 45 }
                ]
              },
              {
                semester: 2,
                subjects: [
                  { name: "Petrologia", workload: 60 },
                  { name: "Geofísica", workload: 60 },
                  { name: "Geoquímica", workload: 45 },
                  { name: "Cartografia Geológica", workload: 45 }
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
                  { name: "Geologia Sedimentar", workload: 60 },
                  { name: "Geologia Econômica", workload: 60 },
                  { name: "Hidrogeologia", workload: 45 },
                  { name: "Geologia Ambiental", workload: 45 }
                ]
              },
              {
                semester: 2,
                subjects: [
                  { name: "Geologia Regional", workload: 60 },
                  { name: "Geologia de Engenharia", workload: 60 },
                  { name: "Geologia Marinha", workload: 45 },
                  { name: "Geologia do Petróleo", workload: 45 }
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
                  { name: "Geotectônica", workload: 60 },
                  { name: "Geologia de Campo", workload: 60 },
                  { name: "Geologia Aplicada", workload: 45 },
                  { name: "Geoprocessamento", workload: 45 }
                ]
              },
              {
                semester: 2,
                subjects: [
                  { name: "Geologia de Recursos Minerais", workload: 60 },
                  { name: "Geologia de Reservatórios", workload: 60 },
                  { name: "Geologia de Bacias Sedimentares", workload: 45 },
                  { name: "Geologia de Terrenos Metamórficos", workload: 45 }
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
                  { name: "Geologia de Exploração", workload: 60 },
                  { name: "Geologia de Recursos Hídricos", workload: 45 },
                  { name: "Geologia de Riscos Naturais", workload: 45 }
                ]
              },
              {
                semester: 2,
                subjects: [
                  { name: "Projeto de TCC II", workload: 60 },
                  { name: "Geologia de Reservas Minerais", workload: 60 },
                  { name: "Geologia de Impactos Ambientais", workload: 45 },
                  { name: "Geologia de Áreas Urbanas", workload: 45 }
                ]
              }
            ]
          }
        ],
        additional_courses: [
          {
            course: "Geologia Ambiental",
            duration: 4,
            level: "graduation",
            short_detail: "Formação em estudo dos impactos ambientais",
            slug: "geologia-ambiental-graduacao",
            long_description: "O curso de Geologia Ambiental oferece uma formação completa em estudo dos impactos ambientais e suas soluções. Os alunos aprendem sobre a interação entre os processos geológicos e o meio ambiente, incluindo a gestão de recursos naturais e a mitigação de riscos ambientais.",
            shift: {
              afternoon: true,
              morning: true,
              evening: false
            },
            course_cover: "https://www.realimage.com/geologia-ambiental-cover.jpg",
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
                      { name: "Paleontologia", workload: 45 }
                    ]
                  },
                  {
                    semester: 2,
                    subjects: [
                      { name: "Petrologia Ambiental", workload: 60 },
                      { name: "Geofísica Ambiental", workload: 60 },
                      { name: "Geoquímica Ambiental", workload: 45 },
                      { name: "Cartografia Geológica", workload: 45 }
                    ]
                  }
                ]
              },
              // ...additional years and semesters...
            ]
          }
        ]
      },
      {
        course: "Geofísica",
        duration: 4,
        level: "graduation",
        short_detail: "Formação em métodos geofísicos para estudo da Terra",
        slug: "geofisica-graduacao",
        long_description: "O curso de Geofísica oferece uma formação sólida em métodos geofísicos para estudo da Terra. Os alunos aprendem sobre técnicas de prospecção geofísica, sismologia, gravimetria, magnetometria e eletromagnetismo. O curso prepara os geofísicos para atuar em exploração de recursos naturais, monitoramento ambiental, engenharia geotécnica e pesquisa científica.",
        shift: {
          afternoon: true,
          morning: true,
          evening: false
        },
        course_cover: "https://www.realimage.com/geofisica-cover.jpg",
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
                  { name: "Geologia Geral", workload: 45 }
                ]
              },
              {
                semester: 2,
                subjects: [
                  { name: "Sismologia", workload: 60 },
                  { name: "Gravimetria", workload: 60 },
                  { name: "Magnetometria", workload: 45 },
                  { name: "Eletromagnetismo", workload: 45 }
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
                  { name: "Métodos Sísmicos", workload: 60 },
                  { name: "Métodos Potenciais", workload: 60 },
                  { name: "Métodos Eletromagnéticos", workload: 45 },
                  { name: "Geofísica de Poço", workload: 45 }
                ]
              },
              {
                semester: 2,
                subjects: [
                  { name: "Geofísica Aplicada", workload: 60 },
                  { name: "Geofísica Ambiental", workload: 60 },
                  { name: "Geofísica de Reservatórios", workload: 45 },
                  { name: "Geofísica de Exploração", workload: 45 }
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
                  { name: "Geofísica Marinha", workload: 60 },
                  { name: "Geofísica de Engenharia", workload: 60 },
                  { name: "Geofísica de Recursos Minerais", workload: 45 },
                  { name: "Geofísica de Hidrocarbonetos", workload: 45 }
                ]
              },
              {
                semester: 2,
                subjects: [
                  { name: "Geofísica de Reservas Hídricas", workload: 60 },
                  { name: "Geofísica de Riscos Naturais", workload: 60 },
                  { name: "Geofísica de Bacias Sedimentares", workload: 45 },
                  { name: "Geofísica de Terrenos Metamórficos", workload: 45 }
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
                  { name: "Geofísica de Exploração", workload: 60 },
                  { name: "Geofísica de Reservas Minerais", workload: 45 },
                  { name: "Geofísica de Impactos Ambientais", workload: 45 }
                ]
              },
              {
                semester: 2,
                subjects: [
                  { name: "Projeto de TCC II", workload: 60 },
                  { name: "Geofísica de Reservas Hídricas", workload: 60 },
                  { name: "Geofísica de Áreas Urbanas", workload: 45 },
                  { name: "Geofísica de Riscos Naturais", workload: 45 }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  csa: {
    department_cover: "https://www.realimage.com/csa-department-cover.jpg",
    courses: [
      {
        course: "Administração",
        duration: 4,
        level: "graduation",
        short_detail: "Formação em gestão de empresas e negócios",
        slug: "administracao-graduacao",
        long_description: "O curso de Administração oferece uma formação abrangente em gestão de empresas e negócios. Os alunos desenvolvem competências em planejamento, organização, direção e controle, preparando-se para atuar em diversas áreas da administração, como recursos humanos, marketing, finanças e produção. O curso também aborda temas como empreendedorismo, inovação e sustentabilidade, capacitando os futuros administradores a enfrentar os desafios do mercado globalizado.",
        shift: {
          afternoon: true,
          morning: true,
          evening: true
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
                  { name: "Contabilidade", workload: 45 }
                ]
              },
              {
                semester: 2,
                subjects: [
                  { name: "Direito Empresarial", workload: 60 },
                  { name: "Estatística", workload: 60 },
                  { name: "Marketing", workload: 45 },
                  { name: "Gestão de Pessoas", workload: 45 }
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
                  { name: "Administração Financeira", workload: 60 },
                  { name: "Administração de Produção", workload: 60 },
                  { name: "Comportamento Organizacional", workload: 45 },
                  { name: "Gestão de Projetos", workload: 45 }
                ]
              },
              {
                semester: 2,
                subjects: [
                  { name: "Administração de Recursos Humanos", workload: 60 },
                  { name: "Administração de Marketing", workload: 60 },
                  { name: "Logística", workload: 45 },
                  { name: "Empreendedorismo", workload: 45 }
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
                  { name: "Administração Estratégica", workload: 60 },
                  { name: "Gestão da Qualidade", workload: 60 },
                  { name: "Negócios Internacionais", workload: 45 },
                  { name: "Sistemas de Informação", workload: 45 }
                ]
              },
              {
                semester: 2,
                subjects: [
                  { name: "Administração Pública", workload: 60 },
                  { name: "Gestão de Operações", workload: 60 },
                  { name: "Planejamento Estratégico", workload: 45 },
                  { name: "Inovação e Sustentabilidade", workload: 45 }
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
                  { name: "Consultoria Empresarial", workload: 60 },
                  { name: "Gestão de Negócios", workload: 45 },
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
        course: "Economia",
        duration: 4,
        level: "graduation",
        short_detail: "Formação em análise econômica e políticas públicas",
        slug: "economia-graduacao",
        long_description: "O curso de Economia oferece uma formação sólida em análise econômica e políticas públicas. Os alunos desenvolvem competências em microeconomia, macroeconomia, econometria e finanças, preparando-se para atuar em diversas áreas, como consultoria econômica, planejamento estratégico, análise de investimentos e formulação de políticas públicas. O curso também aborda temas como desenvolvimento econômico, economia internacional e sustentabilidade, capacitando os futuros economistas a enfrentar os desafios do mercado globalizado.",
        shift: {
          afternoon: true,
          morning: true,
          evening: true
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
                  { name: "Contabilidade", workload: 45 }
                ]
              },
              {
                semester: 2,
                subjects: [
                  { name: "Microeconomia", workload: 60 },
                  { name: "Macroeconomia", workload: 60 },
                  { name: "Econometria", workload: 45 },
                  { name: "Finanças", workload: 45 }
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
                  { name: "Teoria Econômica", workload: 60 },
                  { name: "Política Econômica", workload: 60 },
                  { name: "Desenvolvimento Econômico", workload: 45 },
                  { name: "Economia Internacional", workload: 45 }
                ]
              },
              {
                semester: 2,
                subjects: [
                  { name: "Economia do Setor Público", workload: 60 },
                  { name: "Economia Monetária", workload: 60 },
                  { name: "Economia do Trabalho", workload: 45 },
                  { name: "Economia Ambiental", workload: 45 }
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
                  { name: "Economia Agrícola", workload: 60 },
                  { name: "Economia Industrial", workload: 60 },
                  { name: "Economia Regional", workload: 45 },
                  { name: "Economia Urbana", workload: 45 }
                ]
              },
              {
                semester: 2,
                subjects: [
                  { name: "Economia da Saúde", workload: 60 },
                  { name: "Economia da Educação", workload: 60 },
                  { name: "Economia da Inovação", workload: 45 },
                  { name: "Economia do Conhecimento", workload: 45 }
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
                  { name: "Consultoria Econômica", workload: 60 },
                  { name: "Gestão de Políticas Públicas", workload: 45 },
                  { name: "Ética e Legislação", workload: 45 }
                ]
              },
              {
                semester: 2,
                subjects: [
                  { name: "Projeto de TCC II", workload: 60 }, { name: "Inovação Tecnológica", workload: 60 }, { name: "Gestão de TI", workload: 45 }, { name: "Direito Digital", workload: 45 } ]
              } ]
          } ]
      } ]
  }
};