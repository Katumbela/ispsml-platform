/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextResponse } from 'next/server';
import prisma from '@/infra/database/prisma';

// Handler para o método POST (Criar notícia)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, shortDescription, content, postDate, poster, link, slug, image } = body;

    await prisma.news.create({
      data: {
        title,
        shortDescription,
        content,
        postDate: new Date(postDate), // Converta para `Date`
        poster,
        link,
        slug,
        image,
      },
    });

    return NextResponse.json({ message: 'Notícia adicionada com sucesso!' }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Erro ao adicionar notícia! ' + error.message }, { status: 500 });
  }
}

// Handler para o método GET (Listar notícias)
export async function GET() {
  try {
    const news = await prisma.news.findMany();
    return NextResponse.json(news, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Erro ao buscar notícias! ' + error.message }, { status: 500 });
  }
}

// Handler para o método PUT (Atualizar notícia)
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, title, shortDescription, content, postDate, poster, link, slug, image } = body;

    await prisma.news.update({
      where: { id: String(id) },
      data: {
        title,
        shortDescription,
        content,
        postDate: new Date(postDate),
        poster,
        link,
        slug,
        image,
      },
    });

    return NextResponse.json({ message: 'Notícia atualizada com sucesso!' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Erro ao atualizar notícia! ' + error.message }, { status: 500 });
  }
}

// Handler para o método DELETE (Excluir notícia)
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id'); // Pegar o `id` da query string

    if (!id) {
      return NextResponse.json({ message: 'ID da notícia é obrigatório!' }, { status: 400 });
    }

    await prisma.news.delete({
      where: { id: String(id) },
    });

    return NextResponse.json({ message: 'Notícia deletada com sucesso!' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Erro ao deletar notícia! ' + error.message }, { status: 500 });
  }
}
