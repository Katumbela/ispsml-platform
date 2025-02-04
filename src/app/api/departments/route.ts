/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import prisma from '@/infra/database/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, catalog_link, department_cover, departmentDirector } = body;

    // Cria o departamento com o diretor e cursos
    const department = await prisma.department.create({
      data: {
        name,
        catalog_link,
        department_cover,
        departmentDirector: {
          create: {
            name: departmentDirector.name,
            picture: departmentDirector.picture,
          },
        },
        // courses: {
        //   create: courses.map((course: any) => ({
        //     course: course.course,
        //     duration: course.duration,
        //     level: course.level,
        //     slug: course.slug,
        //     short_detail: course.short_detail,
        //     long_description: course.long_description,
        //     benefits: course.benefits,
        //     entryProfile: course.entryProfile,
        //     outProfile: course.outProfile,
        //     course_cover: course.course_cover,
        //     shift: {
        //       create: {
        //         morning: course.shift.morning,
        //         afternoon: course.shift.afternoon,
        //         evening: course.shift.evening,
        //       },
        //     },
        //     years: {
        //       create: course.years.map((year: any) => ({
        //         year: year.year,
        //         semesters: {
        //           create: year.semesters.map((semester: any) => ({
        //             semester: semester.semester,
        //             subjects: {
        //               create: semester.subjects.map((subject: any) => ({
        //                 name: subject.name,
        //                 workload: subject.workload,
        //               })),
        //             },
        //           })),
        //         },
        //       })),
        //     },
        //   })),
        // },
      },
    });

    return NextResponse.json(department, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const courseId = searchParams.get('course_id');

  try {
    if (id) {
      const department = await prisma.department.findUnique({
        where: { id: Number(id) },
        include: {
          departmentDirector: true,
          courses: {
            include: {
              shift: true,
              years: {
                include: {
                  semesters: {
                    include: { subjects: true },
                  },
                },
              },
            },
          },
        },
      });

      if (!department) {
        return NextResponse.json({ message: 'Departamento não encontrado!' }, { status: 404 });
      }
      return NextResponse.json(department, { status: 200 });
    }

    if (courseId) {
      const course = await prisma.course.findUnique({
        where: { id: Number(courseId) },
        include: {
          shift: true,
          years: {
            include: {
              semesters: {
                include: { subjects: true },
              },
            },
          },
        },
      });

      if (!course) {
        return NextResponse.json({ message: 'Curso não encontrado!' }, { status: 404 });
      }
      return NextResponse.json(course, { status: 200 });
    }

    const departments = await prisma.department.findMany({
      include: {
        departmentDirector: true,
        courses: {
          include: {
            shift: true,
            years: {
              include: {
                semesters: {
                  include: { subjects: true },
                },
              },
            },
          },
        },
      },
    });
    return NextResponse.json(departments, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Erro ao buscar departamentos! ' + error.message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  try {
    if (!id) {
      return NextResponse.json({ message: 'ID é obrigatório!' }, { status: 400 });
    }

    const body = await request.json();
    const { name, catalog_link, department_cover, departmentDirector, courses } = body;

    const updatedDepartment = await prisma.department.update({
      where: { id: Number(id) },
      data: {
        name,
        catalog_link,
        department_cover,
        departmentDirector: {
          update: {
            name: departmentDirector.name,
            picture: departmentDirector.picture,
          },
        },
        courses: {
          deleteMany: {},
          create: courses.map((course: any) => ({
            course: course.course,
            duration: course.duration,
            level: course.level,
            slug: course.slug,
            short_detail: course.short_detail,
            long_description: course.long_description,
            benefits: course.benefits,
            entryProfile: course.entryProfile,
            outProfile: course.outProfile,
            course_cover: course.course_cover,
            shift: {
              create: {
                morning: course.shift.morning,
                afternoon: course.shift.afternoon,
                evening: course.shift.evening,
              },
            },
            years: {
              create: course.years.map((year: any) => ({
                year: year.year,
                semesters: {
                  create: year.semesters.map((semester: any) => ({
                    semester: semester.semester,
                    subjects: {
                      create: semester.subjects.map((subject: any) => ({
                        name: subject.name,
                        workload: subject.workload,
                      })),
                    },
                  })),
                },
              })),
            },
          })),
        },
      },
    });

    return NextResponse.json({ message: 'Departamento atualizado com sucesso!', department: updatedDepartment }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Erro ao atualizar departamento! ' + error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  try {
    if (!id) {
      return NextResponse.json({ message: 'ID é obrigatório!' }, { status: 400 });
    }

    await prisma.department.delete({ where: { id: Number(id) } });
    return NextResponse.json({ message: 'Departamento excluído com sucesso!' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Erro ao excluir departamento! ' + error.message }, { status: 500 });
  }
}
