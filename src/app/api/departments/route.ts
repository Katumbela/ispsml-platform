/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import prisma from '@/infra/database/prisma';
import { uploadImage } from '@/utils/uploadImage';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const data = JSON.parse(formData.get("data") as string);

    const departmentCoverFile = formData.get("department_cover");
    const directorPictureFile = formData.get("departmentDirector_picture");

    if (!(departmentCoverFile instanceof File) || !(directorPictureFile instanceof File)) {
      throw new Error("Invalid file upload");
    }

    // Faz o upload das imagens
    const departmentCover = await uploadImage(departmentCoverFile, "departments");
    const directorPicture = await uploadImage(directorPictureFile, "directors");

    // Adiciona as URLs das imagens no objeto de dados
    data.department_cover = departmentCover;
    data.departmentDirector.picture = directorPicture;

    // Cria o departamento com o diretor e cursos
    const response = await prisma.$transaction(async (prisma) => {
      const department = await prisma.department.create({
        data: {
          name: data.name,
          catalog_link: data.catalogLink,
          department_cover: data.department_cover,
          departmentDirector: {
            create: {
              name: data.departmentDirector.name,
              picture: data.departmentDirector.picture,
            },
          },
          courses: {
            create: data.courses.map((course: any) => ({
              name: course.course,
              duration: course.duration,
              level: course.level,
              short_detail: course.short_detail,
              slug: course.slug,
              long_description: course.long_description,
              benefits: course.benefits,
              shift_afternoon: course.shift.afternoon,
              shift_morning: course.shift.morning,
              shift_evening: course.shift.evening,
              course_cover: course.course_cover,
              yearDetails: {
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

      return department;
    });


    return NextResponse.json(response, { status: 201 });
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
        where: { id },
        include: {
          departmentDirector: true,
          courses: {
            include: {
              yearDetails: {
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
        where: { id: courseId },
        include: {
          yearDetails: {
            include: {
              semesters: {
                include: { subjects: true },
              },
            },
          },
        },
      });

      if (!course) {
        return NextResponse.json({ message: 'Curso nao encontrado!' }, { status: 404 });
      }
      return NextResponse.json(course, { status: 200 });
    }

    const departments = await prisma.department.findMany({
      include: {
        departmentDirector: true,
        courses: {
          include: {
            yearDetails: {
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

// Atualizar departamento
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, name, catalog_link, department_cover, departmentDirector, courses } = body;

    const updatedDepartment = await prisma.department.update({
      where: { id },
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
            name: course.course,
            duration: course.duration,
            level: course.level,
            short_detail: course.short_detail,
            slug: course.slug,
            long_description: course.long_description,
            benefits: course.benefits,
            shift_afternoon: course.shift.afternoon,
            shift_morning: course.shift.morning,
            shift_evening: course.shift.evening,
            course_cover: course.course_cover,
            yearDetails: {
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

// Excluir departamento
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  try {
    if (!id) {
      return NextResponse.json({ message: 'ID é obrigatório!' }, { status: 400 });
    }

    await prisma.department.delete({ where: { id } });
    return NextResponse.json({ message: 'Departamento excluído com sucesso!' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Erro ao excluir departamento! ' + error.message }, { status: 500 });
  }
}
