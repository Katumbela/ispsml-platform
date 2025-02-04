"use client"

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { IDepartment } from '@/infra/interfaces/course.interface';
import { getDepartments } from '@/services/dep.service';
import { routes } from '@/infra/routes.vars';

const DepartmentsPage = () => {
    const [departments, setDepartments] = useState<IDepartment[] | []>([]);
    const router = useRouter();

    const handleAddDepartment = () => {
        router.push(routes.NEW_DEP);
    };


    useEffect(() => {
        async function fetchDepartments() {
            const data = await getDepartments();
            setDepartments(data);
        }
        fetchDepartments();
    }, []);

    return (
        <div>
            <div className="h-20 mb-20 bg-gray-800" />
            <div className="p-4">

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
                            <h2 className="text-xl font-semibold">{department.name}</h2>
                            <button
                                onClick={() => router.push(`${routes.VIEW_DEP}/${department.id}`)}
                                className="px-4 py-2 mt-2 text-white bg-green-500 rounded"
                            >
                                Ver Cursos
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DepartmentsPage;