/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/infra/database/prisma';
import { ISemester, ISubject, IYear } from '@/infra/interfaces/course.interface';


// Listar todos os cursos
export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const slug = searchParams.get('slug');

    try {
        if (id) {
            // Buscar por ID
            const course = await prisma.course.findUnique({
                where: { id: Number(id) },
                include: { department: true, yearDetails: true },
            });
            if (!course) {
                return NextResponse.json({ message: 'Curso não encontrado!' }, { status: 404 });
            }
            return NextResponse.json(course, { status: 200 });
        }

        if (slug) {
            // Buscar por slug
            const course = await prisma.course.findFirst({
                where: { slug: slug },
            });
            if (!course) {
                return NextResponse.json({ message: 'Curso não encontrado!' }, { status: 404 });
            }
            return NextResponse.json(course, { status: 200 });
        }

        // Listar todos os cursos
        const courses = await prisma.course.findMany();
        return NextResponse.json(courses, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: 'Erro ao buscar cursos! ' + error.message }, { status: 500 });
    }
}


// Função para criar um novo curso com upload de imagens
export async function POST(request: NextRequest) {
    try {
        const formData = await request.json();
        console.log(formData);
        const data = {
            course: formData.course,
            short_detail: formData.short_detail,
            long_description: formData.long_description,
            duration: formData.duration,
            level: formData.level,
            slug: formData.slug,
            shift: formData.shift,
            benefits: formData.benefits,
            entryProfile: formData.entryProfile,
            outProfile: formData.outProfile,
            course_cover: formData.course_cover,
            departmentId: formData.departmentId,
            years: formData.years,
            semesters: formData.semesters,
            subjects: formData.subjects,
        };

        // Verificar se os arquivos são instâncias de File
        // if (!(data.course_cover instanceof File)) {
        //     throw new Error("Invalid file upload");
        // }

        // Criar o curso no banco de dados usando Prisma
        const newCourse = await prisma.course.create({
            data: {
                name: data.course,
                short_detail: data.short_detail,
                long_description: data.long_description,
                duration: data.duration,
                level: data.level,
                slug: data.slug,
                // shift: data.shift ? { create: { ...data.shift } } : undefined,
                benefits: data.benefits,
                entryProfile: data.entryProfile,
                outProfile: data.outProfile,
                course_cover: String(data.course_cover),
                department: { connect: { id: data.departmentId } },
                // shiftId: data.shiftId,
                yearDetails: {
                    create: data.years.map((year: IYear) => ({
                        year: year.year,
                        semesters: {
                            create: year.semesters.map((semester: ISemester) => ({
                                semester: semester.semester,
                                subjects: {
                                    create: semester.subjects.map((subject: ISubject) => ({
                                        name: subject.name,
                                        workload: subject.workload,
                                    })),
                                },
                            })),
                        },
                    })),
                },
            },
        });

        // Retornar o curso criado com status 201
        return NextResponse.json(newCourse, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ message: 'Erro ao criar curso! ' + error.message }, { status: 500 });
    }
}

// Atualizar um curso
export async function PUT(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ message: 'ID do curso é obrigatório!' }, { status: 400 });
    }

    try {
        const body = await request.json();
        const { name, long_description, slug, duration, level } = body;

        const updatedCourse = await prisma.course.update({
            where: { id: Number(id) },
            data: {
                name,
                long_description,
                slug,
                duration,
                level,
            },
        });

        return NextResponse.json(updatedCourse, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: 'Erro ao atualizar curso! ' + error.message }, { status: 500 });
    }
}

// Deletar um curso
export async function DELETE(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ message: 'ID do curso é obrigatório!' }, { status: 400 });
    }

    try {
        await prisma.course.delete({
            where: { id: Number(id) },
        });

        return NextResponse.json({ message: 'Curso deletado com sucesso!' }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: 'Erro ao deletar curso! ' + error.message }, { status: 500 });
    }
}
