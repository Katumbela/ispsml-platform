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
                where: { id },
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

// Criar um novo curso
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, description, benefits, shift, departmentId, courseCover, shortDescription, slug, duration, level } = body;

        const newCourse = await prisma.course.create({
            data: {
                courseCover,
                benefits,
                department: { connect: { id: departmentId } },
                shift,
                title: name,
                longDescription: description,
                shortDetail: shortDescription,
                slug,
                duration,
                level,
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
        const { title, longDescription, slug, duration, level } = body;

        const updatedCourse = await prisma.course.update({
            where: { id },
            data: {
                title,
                longDescription,
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
            where: { id },
        });

        return NextResponse.json({ message: 'Curso deletado com sucesso!' }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: 'Erro ao deletar curso! ' + error.message }, { status: 500 });
    }
}
