/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/infra/database/prisma';

// Listar todos os eventos
export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const slug = searchParams.get('slug');

    try {
        if (id) {
            // Buscar por ID
            const event = await prisma.event.findUnique({
                where: { id: Number(id) },
            });
            if (!event) {
                return NextResponse.json({ message: 'Evento não encontrado!' }, { status: 404 });
            }
            return NextResponse.json(event, { status: 200 });
        }

        if (slug) {
            // Buscar por slug
            const event = await prisma.event.findFirst({
                where: { slug: slug },
            });
            if (!event) {
                return NextResponse.json({ message: 'Evento não encontrado!' }, { status: 404 });
            }
            return NextResponse.json(event, { status: 200 });
        }

        // Listar todos os eventos
        const events = await prisma.event.findMany();
        return NextResponse.json(events, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: 'Erro ao buscar eventos! ' + error.message }, { status: 500 });
    }
}

// Criar um novo evento
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { title, description, longDescription, date, category, imageUrl, isFeatured, slug, place } = body;

        const newEvent = await prisma.event.create({
            data: {
                title,
                description,
                longDescription,
                date,
                category,
                imageUrl,
                isFeatured,
                slug,
                place,
            },
        });

        return NextResponse.json(newEvent, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ message: 'Erro ao criar evento! ' + error.message }, { status: 500 });
    }
}

// Atualizar um evento
export async function PUT(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ message: 'ID do evento é obrigatório!' }, { status: 400 });
    }

    try {
        const body = await request.json();
        const { title, description, longDescription, date, category, imageUrl, isFeatured, slug, place } = body;

        const updatedEvent = await prisma.event.update({
            where: { id: Number(id) },
            data: {
                title,
                description,
                longDescription,
                date,
                category,
                imageUrl,
                isFeatured,
                slug,
                place,
            },
        });

        return NextResponse.json(updatedEvent, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: 'Erro ao atualizar evento! ' + error.message }, { status: 500 });
    }
}

// Deletar um evento
export async function DELETE(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ message: 'ID do evento é obrigatório!' }, { status: 400 });
    }

    try {
        await prisma.event.delete({
            where: { id: Number(id) },
        });

        return NextResponse.json({ message: 'Evento deletado com sucesso!' }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: 'Erro ao deletar evento! ' + error.message }, { status: 500 });
    }
}
