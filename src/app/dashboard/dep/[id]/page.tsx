"use client"

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { IDepartment } from '@/infra/interfaces/course.interface';
import { getDepartmentById } from '@/services/dep.service';
import Image from 'next/image';

const DepartmentCoursesPage = () => {
    const [department, setDepartments] = useState<IDepartment | null>(null);

    const router = useRouter();
    const { id: departmentId } = useParams()

    useEffect(() => {
        const fetchDep = async () => {
            const dep = await getDepartmentById(Number(departmentId) || 0);

            setDepartments(dep);
        };

        fetchDep();
    }, [departmentId]);

    const handleAddCourse = () => {
        router.push(`${departmentId}/${departmentId}`);
    };

    return (

        <div>
            <div className="h-20 mb-10 bg-gray-800" />

            <div className="p-4">
                <h1 className="mb-4 text-2xl font-bold">{department?.name}</h1>
                <h1 className="mb-4 text-2xl font-bold">Cursos</h1>
                <button
                    onClick={handleAddCourse}
                    className="px-4 py-2 text-white rounded bg-primary"
                >
                    Adicionar Curso
                </button>
                <div className="mt-4">
                    {department?.courses?.map((course) => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="flex gap-2 p-4 mb-2 border rounded"
                        >
                            <Image alt='' src={course.course_cover} height={100} width={100} />
                            <div>
                                <h2 className="text-xl font-semibold">{course.course}</h2>
                                <p>{course.short_detail}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default DepartmentCoursesPage;