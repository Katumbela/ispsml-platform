import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.role.createMany({
    data: [
      {
        id: "promotor",
        pic: "path/to/image",
        name: "Elon Musk",
        about: "Elon Musk é um renomado professor...",
        cv: "link_para_cv",
        role: "Promotor",
        linkedin: "link_para_linkedin",
        x: "link_para_linkedin",
        team: ["vice-presidente", "diretor-executivo"]
      },
      // ...other roles...
    ]
  });

  await prisma.news.createMany({
    data: [
      {
        title: "Descoberta Científica Revoluciona a Medicina",
        shortDescription: "Uma nova descoberta promete mudar o tratamento de várias doenças.",
        content: "<p>Pesquisadores do Instituto de Tecnologia de Massachusetts (MIT)...",
        postDate: new Date("2023-09-15"),
        poster: "Dr. João Silva",
        link: "#",
        slug: "descoberta-cientifica-revoluciona-a-medicina",
        image: "path/to/image",
      },
      // ...other news...
    ]
  });

  await prisma.department.create({
    data: {
      name: "Departamento de Engenharia",
      description: "Departamento focado em cursos de engenharia.",
      image: "https://wallpapers.com/images/hd/coding-background-9izlympnd0ovmpli.jpg",
      courses: {
        create: [
          {
            title: "Engenharia de Software",
            shortDetail: "Curso focado em desenvolvimento de software e engenharia de sistemas.",
            longDescription: "Curso completo de Engenharia de Software...",
            duration: 8,
            level: "Graduação",
            slug: "engenharia-de-software",
            courseCover: "path/to/image",
            shift: "Presencial",
            benefits: ["Benefício 1", "Benefício 2"],
            years: {
              create: [
                {
                  year: 1,
                  semesters: {
                    create: [
                      {
                        semester: 1,
                        subjects: {
                          create: [
                            { name: "Matemática", workload: 60 },
                            { name: "Programação", workload: 80 }
                          ]
                        }
                      },
                      {
                        semester: 2,
                        subjects: {
                          create: [
                            { name: "Algoritmos", workload: 70 },
                            { name: "Estruturas de Dados", workload: 90 }
                          ]
                        }
                      }
                    ]
                  }
                },
                // ...other years...
              ]
            }
          },
          {
            title: "Mestrado em Inteligência Artificial",
            shortDetail: "Programa de pós-graduação em IA e aprendizado de máquina.",
            longDescription: "Programa completo de Mestrado em Inteligência Artificial...",
            duration: 4,
            level: "Pós-Graduação",
            slug: "mestrado-em-inteligencia-artificial",
            courseCover: "path/to/image",
            shift: "Presencial",
            benefits: ["Benefício 1", "Benefício 2"],
            years: {
              create: [
                {
                  year: 1,
                  semesters: {
                    create: [
                      {
                        semester: 1,
                        subjects: {
                          create: [
                            { name: "Introdução à IA", workload: 60 },
                            { name: "Aprendizado de Máquina", workload: 80 }
                          ]
                        }
                      },
                      {
                        semester: 2,
                        subjects: {
                          create: [
                            { name: "Redes Neurais", workload: 70 },
                            { name: "Processamento de Linguagem Natural", workload: 90 }
                          ]
                        }
                      }
                    ]
                  }
                },
                // ...other years...
              ]
            }
          }
        ]
      }
    }
  });

  await prisma.department.create({
    data: {
      name: "Departamento de Administração",
      description: "Departamento voltado para cursos de administração e gestão.",
      image: "path/to/administration/image", // Adicionado campo image
      courses: {
        create: [
          {
            title: "Administração de Empresas",
            shortDetail: "Curso voltado para a formação de administradores e gestores.",
            longDescription: "Curso completo de Administração de Empresas...",
            duration: 8,
            level: "Graduação",
            slug: "administracao-de-empresas",
            courseCover: "path/to/image",
            shift: "Presencial",
            benefits: ["Benefício 1", "Benefício 2"],
            years: {
              create: [
                {
                  year: 1,
                  semesters: {
                    create: [
                      {
                        semester: 1,
                        subjects: {
                          create: [
                            { name: "Introdução à Administração", workload: 60 },
                            { name: "Contabilidade", workload: 80 }
                          ]
                        }
                      },
                      {
                        semester: 2,
                        subjects: {
                          create: [
                            { name: "Marketing", workload: 70 },
                            { name: "Gestão de Pessoas", workload: 90 }
                          ]
                        }
                      }
                    ]
                  }
                },
                // ...other years...
              ]
            }
          }
        ]
      }
    }
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
