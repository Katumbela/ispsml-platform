/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextResponse } from 'next/server';
import prisma from '@/infra/database/prisma';


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


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const slug = searchParams.get('slug');

  try {
    if (id) {
      // Buscar por ID
      const news = await prisma.news.findUnique({
        where: {
          id: Number(id)
        }
      });
      if (!news) {
        return NextResponse.json({ message: 'Notícia não encontrada!' }, { status: 404 });
      }
      return NextResponse.json(news, { status: 200 });
    }

    if (slug) {
      // Buscar por slug
      const news = await prisma.news.findFirst({
        where: { slug: slug },
      });
      if (!news) {
        return NextResponse.json({ message: 'Notícia não encontrada!' }, { status: 404 });
      }
      return NextResponse.json(news, { status: 200 });
    }

    // Listar todas as notícias
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
      where: { id },
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
      where: {
        id: Number(id)
      }
    });

    return NextResponse.json({ message: 'Notícia deletada com sucesso!' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Erro ao deletar notícia! ' + error.message }, { status: 500 });
  }
}
