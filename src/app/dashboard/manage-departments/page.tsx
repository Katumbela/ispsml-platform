"use client"

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { IDepartment } from '@/infra/interfaces/course.interface';
import { getDepartments } from '@/services/dep.service';
import { routes } from '@/infra/routes.vars';
import Image from 'next/image';
import { departmentService } from '../../../services/departments.service';

const DepartmentsPage = () => {
    const router = useRouter();
    const [departments, setDepartments] = useState<IDepartment[] | []>([]);
    const [loading, setLoading] = useState(true);

    const handleAddDepartment = () => {
        router.push(routes.NEW_DEP);
    };

    const handleEditDepartment = (id: string) => {
        router.push(`${routes.EDIT_DEP}/${id}`);
    };

    const handleDeleteDepartment = async (id: string) => {
        await departmentService.deleteDepartment(id);
        setDepartments(departments.filter(department => department.id !== id));
    };

    useEffect(() => {
        async function fetchDepartments() {
            const data = await getDepartments();
            setDepartments(data);
            setLoading(false);
        }
        fetchDepartments();
    }, []);

    return (
        <>
            <head>
                <title>Gerenciar Departamentos | ISPSML</title>
            </head>
            <div className="h-20 mb-20 bg-gray-800" />
            <div className="p-4">
                {loading ? (
                    <div>
                        <div className="h-8 mb-4 bg-gray-300 rounded w-52 animate-pulse"></div>
                        <div className="h-8 mb-4 bg-gray-300 rounded w-52 animate-pulse"></div>
                        <div className="h-12 mb-4 bg-gray-300 rounded w-36 animate-pulse"></div>
                        <div className="flex gap-2 mb-2">
                            <div className="h-24 w-24 bg-gray-300 rounded animate-pulse"></div>
                            <div className="flex-1">
                                <div className="h-6 mb-2 bg-gray-300 rounded animate-pulse"></div>
                                <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                            </div>
                        </div>
                        <div className="flex gap-2 mb-2">
                            <div className="h-24 w-24 bg-gray-300 rounded animate-pulse"></div>
                            <div className="flex-1">
                                <div className="h-6 mb-2 bg-gray-300 rounded animate-pulse"></div>
                                <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                            </div>
                        </div>
                        <div className="flex gap-2 mb-2">
                            <div className="h-24 w-24 bg-gray-300 rounded animate-pulse"></div>
                            <div className="flex-1">
                                <div className="h-6 mb-2 bg-gray-300 rounded animate-pulse"></div>
                                <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <button className=' mb-3 hover:underline text-lg' onClick={() => router.back()}>Voltar</button>
                        <h1 className="mb-4 text-2xl font-bold">Departamentos</h1>
                        <button
                            onClick={handleAddDepartment}
                            className="px-4 py-2 text-white rounded bg-primary"
                        >
                            Adicionar Departamento
                        </button>
                        <div className="mt-4">
                            {departments.map((department) => (
                                <motion.div
                                    key={department.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="p-4 mb-2 border rounded"
                                >
                                    <div className="flex gap-5">
                                        <div>
                                            <Image alt='' src={department?.department_cover || ""} width={50} className='object-contain h-20' height={100} />
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-semibold">{department.name}</h2>
                                            <button
                                                onClick={() => router.push(`${routes.VIEW_DEP}/${department.id}`)}
                                                className="px-4 py-2 text-sm mt-2 text-white bg-green-500 rounded"
                                            >
                                                Ver Cursos
                                            </button>
                                            <button
                                                onClick={() => handleEditDepartment(department?.id || "")}
                                                className="px-4 py-2 text-sm mt-2 text-white bg-blue-500 rounded"
                                            >
                                                Editar {department.id}
                                            </button>
                                            <button
                                                onClick={() => handleDeleteDepartment(department?.id || "")}
                                                className="px-4 py-2 text-sm mt-2 text-white bg-red-500 rounded"
                                            >
                                                Deletar
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </>
                )}
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    );
};

export default DepartmentsPage;