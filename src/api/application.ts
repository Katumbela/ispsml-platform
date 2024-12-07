/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/infra/database/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, phone, birthDate, course, interest } = req.body;

    try {
      await prisma.application.create({
        data: {
          name,
          email,
          phone,
          birthDate: new Date(birthDate),
          course,
          interest,
          date: new Date(),
        },
      });
      res.status(201).json({ message: 'Inscrição enviada com sucesso!' });
    } catch (error: any) {
      res.status(500).json({ message: 'Erro ao enviar inscrição! ' + error.message });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido!' });
  }
}