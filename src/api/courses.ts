/* eslint-disable @typescript-eslint/no-explicit-any */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
    if (req.method === 'GET') {
        const courses = await prisma.course.findMany();
        res.status(200).json(courses);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}