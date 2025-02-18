/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { IDepartment } from '@/infra/interfaces/course.interface';
import { deleteCourse, getDepartmentById } from '@/services/dep.service';
import Image from 'next/image';
import { FaTrash } from 'react-icons/fa6';
import { AlertUtils } from '@/utils';

const DepartmentCoursesPage = () => {
    const [department, setDepartments] = useState<IDepartment | null>(null);
    const [loading, setLoading] = useState(true);

    const router = useRouter();
    const { id: departmentId } = useParams()

    useEffect(() => {
        const fetchDep = async () => {
            const dep = await getDepartmentById(Number(departmentId) || 0);
            setDepartments(dep);
            setLoading(false);
        };

        fetchDep();
    }, [departmentId]);

    const handleAddCourse = () => {
        router.push(`${departmentId}/${departmentId}`);
    };
    const deleteCourseDep = async (id: number) => {
        await deleteCourse(Number(id));
        AlertUtils.success('Curso deletado com sucesso');
    };

    return (
        <div>
            <div className="h-20 mb-10 bg-gray-800" />
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
                        <button className=' my-3 hover:underline' onClick={() => router.back()}>Voltar</button>
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
                                    <div className='flex justify-between w-full'>
                                        <div>
                                            <h2 className="text-xl font-semibold">{course.course}</h2>
                                            <p>{course.short_detail}</p>
                                        </div>
                                        <FaTrash className='my-auto cursor-pointer' onClick={() => deleteCourseDep(Number(course?.id))} />
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
        </div>
    );
};

export default DepartmentCoursesPage;