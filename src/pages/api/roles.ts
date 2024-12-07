/* eslint-disable @typescript-eslint/no-explicit-any */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  if (req.method === 'GET') {
    const roles = await prisma.role.findMany({
      include: {
        phrases: true,
      },
    });
    res.status(200).json(roles);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}