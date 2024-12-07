/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/infra/database/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    if (req.method === 'POST') {
        const { name, about, role, cv, linkedin, x } = req.body;

        try {
            await prisma.role.create({
                data: {
                    pic: "",
                    phrases: {
                        create: [
                            {
                                title: "teste", 
                                description: "teste",   
                            },  
                        ],
                    },
                    name,
                    about,
                    role,
                    cv,
                    linkedin,
                    x,
                },
            });
            res.status(201).json({ message: 'Role adicionada com sucesso!' });
        } catch (error: any) {
            res.status(500).json({ message: 'Erro ao adicionar role! ' + error.message });
        }
    } else if (req.method === 'GET') {
        try {
            const roles = await prisma.role.findMany({ include: { phrases: true } });
            res.status(200).json(roles);
        } catch (error: any) {
            res.status(500).json({ message: 'Erro ao buscar roles! ' + error.message });
        }
    } else if (req.method === 'PUT') {
        const { name, about, role, cv, linkedin, x } = req.body;

        try {
            await prisma.role.update({
                where: { id: String(id) },
                data: {
                    name,
                    about,
                    role,
                    cv,
                    linkedin,
                    x,
                },
            });
            res.status(200).json({ message: 'Role atualizada com sucesso!' });
        } catch (error: any) {
            res.status(500).json({ message: 'Erro ao atualizar role! ' + error.message });
        }

    } else if (req.method === 'DELETE') {
        try {
            await prisma.role.delete({
                where: { id: String(id) },
            });
            res.status(200).json({ message: 'Role deletada com sucesso!' });
        } catch (error: any) {
            res.status(500).json({ message: 'Erro ao deletar role! ' + error.message });
        }
    } else {
        res.status(405).json({ message: 'Método não permitido!' });
    }
}
