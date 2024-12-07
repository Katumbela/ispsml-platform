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

  await prisma.course.createMany({
    data: [
      {
        title: "Engenharia de Software",
        description: "Curso focado em desenvolvimento de software e engenharia de sistemas.",
        duration: 8,
        level: "Graduação",
        image: "path/to/image"
      },
      {
        title: "Administração de Empresas",
        description: "Curso voltado para a formação de administradores e gestores.",
        duration: 8,
        level: "Graduação",
        image: "path/to/image"
      },
      {
        title: "Mestrado em Inteligência Artificial",
        description: "Programa de pós-graduação em IA e aprendizado de máquina.",
        duration: 4,
        level: "Pós-Graduação",
        image: "path/to/image"
      },
      // ...other courses...
    ]
  });

  const department1 = await prisma.department.create({
    data: {
      name: "Departamento de Engenharia",
      description: "Departamento focado em cursos de engenharia.",
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
            shift: {
              create: {
                morning: true,
                afternoon: false,
                evening: true
              }
            },
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
            },
            additionalCourses: {
              create: [
                {
                  title: "Curso Adicional 1",
                  shortDetail: "Detalhe curto do curso adicional 1",
                  longDescription: "Descrição longa do curso adicional 1",
                  duration: 2,
                  level: "Curso Adicional",
                  slug: "curso-adicional-1",
                  courseCover: "path/to/image",
                  shift: {
                    create: {
                      morning: false,
                      afternoon: true,
                      evening: false
                    }
                  },
                  benefits: ["Benefício A", "Benefício B"],
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
                                  { name: "Introdução", workload: 30 },
                                  { name: "Avançado", workload: 50 }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          // ...other courses...
        ]
      }
    }
  });

  const department2 = await prisma.department.create({
    data: {
      name: "Departamento de Administração",
      description: "Departamento voltado para cursos de administração e gestão.",
      courses: {
        create: [
          {
            title: "Administração de Empresas",
            description: "Curso voltado para a formação de administradores e gestores.",
            duration: 8,
            level: "Graduação",
            image: "path/to/image"
          }
        ]
      }
    }
  });

  await prisma.departments.createMany({
    data: [department1, department2]
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
