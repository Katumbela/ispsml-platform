/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/infra/database/prisma';



export async function POST(request: NextRequest) {
    const body = await request.json();
    const { name, about, role, cv, linkedin, x, image } = body;

    try {
        await prisma.role.create({
            data: {
                pic: image,
                phrases: {
                    create: [
                        {
                            title: "teste",
                            description: "teste",
                        },
                    ],
                },
                name,
                about,
                role,
                cv,
                linkedin,
                x,
            },
        });

        return NextResponse.json({ message: 'Role adicionada com sucesso!' }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ message: 'Erro ao adicionar role! ' + error.message }, { status: 500 });
    }
}

export async function GET(request: NextRequest) {
    try {
        const roles = await prisma.role.findMany({ include: { phrases: true } });
        return NextResponse.json(roles, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: 'Erro ao buscar roles! ' + error.message }, { status: 500 });
    }
}

export async function PUT(request: NextRequest) {
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id'); 
    const body = await request.json();
    const { name, about, role, cv, linkedin, x, image } = body;

    try {
      
        await prisma.role.update({
            where: { id },
            data: {
                name,
                about,
                role,
                cv,
                linkedin,
                x,
                pic: image, 
            },
        });

        return NextResponse.json({ message: 'Role atualizada com sucesso!' }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: 'Erro ao atualizar role! ' + error.message }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id'); 

    try {
        await prisma.role.delete({
            where: { id },
        });

        return NextResponse.json({ message: 'Role deletada com sucesso!' }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: 'Erro ao deletar role! ' + error.message }, { status: 500 });
    }
}
