/* eslint-disable @typescript-eslint/no-explicit-any */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  if (req.method === 'GET') {
    const news = await prisma.news.findMany();
    res.status(200).json(news);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}