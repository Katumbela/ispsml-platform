/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/infra/database/prisma';


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
                include: { department: true, years: { include: { semesters: { include: { subjects: true } } } }, shift: true },
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
                include: { department: true, years: { include: { semesters: { include: { subjects: true } } } }, shift: true },
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

// Criar um novo curso com base no modelo Prisma
export async function POST(request: NextRequest) {
    try {
        const formData = await request.json();

        const newCourse = await prisma.course.create({
            data: {
                course: formData.course,
                short_detail: formData.short_detail || null,
                long_description: formData.long_description || null,
                duration: Number(formData.duration),
                level: formData.level,
                slug: formData.slug,
                shift: formData.shift ? { create: { ...formData.shift } } : undefined,
                benefits: formData.benefits || null,
                entryProfile: formData.entryProfile || null,
                outProfile: formData.outProfile || null,
                course_cover: formData.course_cover,
                department: { connect: { id: formData.departmentId } },
                years: {
                    create: formData.years?.map((year: any) => ({
                        year: Number(year.year),
                        semesters: {
                            create: year.semesters.map((semester: any) => ({
                                semester: Number(semester.semester),
                                subjects: {
                                    create: semester.subjects.map((subject: any) => ({
                                        name: subject.name,
                                        workload: Number(subject.workload),
                                    })),
                                },
                            })),
                        },
                    })) || [],
                },
            },
        });

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
        const { course, long_description, slug, duration, level } = body;

        const updatedCourse = await prisma.course.update({
            where: { id: Number(id) },
            data: {
                course,
                long_description,
                slug,
                duration,
                level,
            },
            include: { department: true, years: { include: { semesters: { include: { subjects: true } } } }, shift: true },
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
            include: { department: true, years: { include: { semesters: { include: { subjects: true } } } }, shift: true },
        });

        return NextResponse.json({ message: 'Curso deletado com sucesso!' }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: 'Erro ao deletar curso! ' + error.message }, { status: 500 });
    }
}
