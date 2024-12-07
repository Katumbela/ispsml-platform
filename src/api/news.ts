/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/infra/database/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'POST') {
    const { title, shortDescription, content, postDate, poster, link, slug, image } = req.body;

    try {
      await prisma.news.create({
        data: {
          title,
          shortDescription,
          content,
          postDate: new Date(postDate), // Converta para `Date` se necessário
          poster,
          link,
          slug,
          image,
        },
      });
      res.status(201).json({ message: 'Notícia adicionada com sucesso!' });
    } catch (error: any) {
      res.status(500).json({ message: 'Erro ao adicionar notícia! ' + error.message });
    }
  } else if (req.method === 'GET') {
    try {
      const news = await prisma.news.findMany();
      res.status(200).json(news);
    } catch (error: any) {
      res.status(500).json({ message: 'Erro ao buscar notícias! ' + error.message });
    }
  } else if (req.method === 'PUT') {
    const { title, shortDescription, content, postDate, poster, link, slug, image } = req.body;

    try {
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
      res.status(200).json({ message: 'Notícia atualizada com sucesso!' });
    } catch (error: any) {
      res.status(500).json({ message: 'Erro ao atualizar notícia! ' + error.message });
    }
  } else if (req.method === 'DELETE') {
    try {
      await prisma.news.delete({
        where: { id: String(id) },
      });
      res.status(200).json({ message: 'Notícia deletada com sucesso!' });
    } catch (error: any) {
      res.status(500).json({ message: 'Erro ao deletar notícia! ' + error.message });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido!' });
  }
}