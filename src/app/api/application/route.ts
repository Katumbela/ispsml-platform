/* eslint-disable @typescript-eslint/no-explicit-any */


import prisma from '@/infra/database/prisma';
import { NextResponse } from 'next/server'; 

// Handler para o método POST (Criar inscrição)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, birthDate, course, interest } = body;

    await prisma.application.create({
      data: {
        name,
        email,
        phone,
        birthDate: new Date(birthDate), // Converta `birthDate` para `Date`
        course,
        interest,
        date: new Date(), // Data da inscrição gerada automaticamente
      },
    });

    return NextResponse.json({ message: 'Inscrição enviada com sucesso!' }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Erro ao enviar inscrição! ' + error.message }, { status: 500 });
  }
}

// Handler para métodos não permitidos
export async function GET() {
  return NextResponse.json({ message: 'Método não permitido!' }, { status: 405 });
}

export async function PUT() {
  return NextResponse.json({ message: 'Método não permitido!' }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ message: 'Método não permitido!' }, { status: 405 });
}
