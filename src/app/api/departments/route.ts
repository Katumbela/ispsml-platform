/* eslint-disable @typescript-eslint/no-explicit-any */


import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/infra/database/prisma';

// Listar departamentos ou buscar por ID
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  try {
    if (id) {
      // Buscar por ID
      const department = await prisma.department.findUnique({
        where: { id },
      });

      if (!department) {
        return NextResponse.json({ message: 'Departamento não encontrado!' }, { status: 404 });
      }

      return NextResponse.json(department, { status: 200 });
    }

    // Listar todos os departamentos
    const departments = await prisma.department.findMany();
    return NextResponse.json(departments, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Erro ao buscar departamentos! ' + error.message }, { status: 500 });
  }
}

// Criar um novo departamento
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, description } = body;

    const newDepartment = await prisma.department.create({
      data: {
        name,
        description,
      },
    });

    return NextResponse.json(newDepartment, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Erro ao adicionar departamento! ' + error.message }, { status: 500 });
  }
}

// Atualizar um departamento
export async function PUT(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ message: 'ID do departamento é obrigatório!' }, { status: 400 });
  }

  try {
    const body = await request.json();
    const { name, description } = body;

    const updatedDepartment = await prisma.department.update({
      where: { id },
      data: {
        name,
        description,
      },
    });

    return NextResponse.json(updatedDepartment, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Erro ao atualizar departamento! ' + error.message }, { status: 500 });
  }
}

// Deletar um departamento
export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ message: 'ID do departamento é obrigatório!' }, { status: 400 });
  }

  try {
    await prisma.department.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Departamento deletado com sucesso!' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Erro ao deletar departamento! ' + error.message }, { status: 500 });
  }
}
