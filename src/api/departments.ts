/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/infra/database/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'POST') {
    const { name, description } = req.body;

    try {
      await prisma.department.create({
        data: {
          name,
          description,
        },
      });
      res.status(201).json({ message: 'Departamento adicionado com sucesso!' });
    } catch (error: any) {
      res.status(500).json({ message: 'Erro ao adicionar departamento! ' + error.message });
    }
  } else if (req.method === 'GET') {
    try {
      const departments = await prisma.department.findMany();
      res.status(200).json(departments);
    } catch (error: any) {
      res.status(500).json({ message: 'Erro ao buscar departamentos! ' + error.message });
    }
  } else if (req.method === 'PUT') {
    const { name, description } = req.body;

    try {
      await prisma.department.update({
        where: { id: String(id) },
        data: {
          name,
          description,
        },
      });
      res.status(200).json({ message: 'Departamento atualizado com sucesso!' });
    } catch (error: any) {
      res.status(500).json({ message: 'Erro ao atualizar departamento! ' + error.message });
    }
  } else if (req.method === 'DELETE') {
    try {
      await prisma.department.delete({
        where: { id: String(id) },
      });
      res.status(200).json({ message: 'Departamento deletado com sucesso!' });
    } catch (error: any) {
      res.status(500).json({ message: 'Erro ao deletar departamento! ' + error.message });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido!' });
  }
}
