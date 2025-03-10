/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { IDepartment } from '@/infra/interfaces/course.interface';
import { getDepartmentById, getDepartments } from '@/services/dep.service';
import Image from 'next/image';
import { FaTrash, FaPen, FaPlus, FaArrowLeft } from 'react-icons/fa6';
import { AlertUtils } from '@/utils';
import { deleteCourse } from '@/services/course.service';
import { routes } from '@/infra/routes.vars';
import { useQuery, useQueryClient } from 'react-query';

const DepartmentCoursesPage = ({ departmentId }: { departmentId: string }) => {
    const [deleteConfirm, setDeleteConfirm] = useState<{ show: boolean; courseId: number | null }>({
        show: false,
        courseId: null
    });

    const router = useRouter();
    const queryClient = useQueryClient();

    // Using react-query instead of @tanstack/react-query
    const {
        data: department,
        isLoading: loading,
        error
    } = useQuery(
        ['department', departmentId],
        () => getDepartmentById(Number(departmentId) || 0),
        {
            staleTime: 5 * 60 * 1000, // 5 minutes
        }
    );
 

    const confirmDelete = (courseId: number) => {
        setDeleteConfirm({ show: true, courseId });
    };

    const cancelDelete = () => {
        setDeleteConfirm({ show: false, courseId: null });
    };

    const deleteCourseDep = async () => {
        if (!deleteConfirm.courseId) return;

        try {
            await deleteCourse(deleteConfirm.courseId);
            AlertUtils.success('Curso deletado com sucesso');

            // Also update this invalidation to use react-query format
            queryClient.invalidateQueries(['department', departmentId]);
        } catch (error) {
            AlertUtils.error('Erro ao deletar curso');
        } finally {
            setDeleteConfirm({ show: false, courseId: null });
        }
    };

    const handleEditCourse = (courseId: number) => {
        router.push(`${routes.MANAGE_DEPARTMENTS}/edit-course/${courseId}`);
    };

    // Skeleton loader component for better organization
    const CoursesSkeleton = () => (
        <div className="space-y-6">
            <div>
                <div className="h-8 mb-2 bg-gray-300 rounded-md w-52 animate-pulse"></div>
                <div className="h-8 mb-6 bg-gray-300 rounded-md w-72 animate-pulse"></div>
                <div className="h-12 mb-8 bg-gray-300 rounded-md w-36 animate-pulse"></div>
            </div>

            {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-4 p-5 mb-4 border border-gray-200 rounded-lg shadow-sm">
                    <div className="h-24 w-24 bg-gray-300 rounded-md animate-pulse"></div>
                    <div className="flex-1 space-y-2">
                        <div className="h-6 bg-gray-300 rounded-md w-3/4 animate-pulse"></div>
                        <div className="h-4 bg-gray-300 rounded-md w-1/2 animate-pulse"></div>
                        <div className="h-4 bg-gray-300 rounded-md w-2/3 animate-pulse"></div>
                    </div>
                    <div className="flex gap-2">
                        <div className="h-8 w-8 bg-gray-300 rounded-full animate-pulse"></div>
                        <div className="h-8 w-8 bg-gray-300 rounded-full animate-pulse"></div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="bg-white min-h-screen">
            <div className="h-20 mb-10 bg-gradient-to-r from-blue-800 to-blue-600 shadow-md" />
            <div className="max-w-6xl px-4 mx-auto">
                {loading ? (
                    <CoursesSkeleton />
                ) : (
                    <>
                        <button
                            onClick={() => router.back()}
                            className="flex items-center gap-2 px-4 py-2 mb-6 text-blue-700 transition-colors hover:text-blue-900"
                        >
                            <FaArrowLeft size={14} />
                            <span>Voltar</span>
                        </button>

                        <div className="mb-8">
                            <h1 className="text-3xl font-bold text-gray-800">{department?.name}</h1>
                            <h2 className="mt-2 text-xl font-medium text-gray-600">Cursos</h2>
                        </div>

                        <button
                            onClick={() => window.location.href = `/dashboard/manage-departments/new-course/${departmentId}`}
                            className="flex items-center gap-2 px-6 py-3 text-white transition-all bg-blue-600 rounded-md shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            <FaPlus size={14} />
                            <span>Adicionar Curso</span>
                        </button>

                        <div className="mt-8 space-y-4">
                            <AnimatePresence>
                                {department?.courses?.map((course) => (
                                    <motion.div
                                        key={course.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex max-w-4xl gap-4 p-5 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all"
                                    >
                                        <div className="relative w-32 h-32 overflow-hidden rounded-md">
                                            <Image
                                                alt={course.course || 'Course image'}
                                                src={course.course_cover}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 128px) 100vw, 128px"
                                            />
                                        </div>
                                        <div className='flex justify-between w-full'>
                                            <div>
                                                <h2 className="mb-2 text-xl font-semibold text-gray-800">{course.course}</h2>
                                                <p className="text-gray-600">{course.short_detail}</p>
                                            </div>
                                            <div className='flex items-center gap-3'>
                                                <button
                                                    onClick={() => handleEditCourse(Number(course.id))}
                                                    className="flex items-center justify-center w-10 h-10 text-blue-600 transition-colors bg-blue-100 rounded-full hover:bg-blue-200"
                                                    title="Editar curso"
                                                >
                                                    <FaPen size={14} />
                                                </button>
                                                <button
                                                    onClick={() => confirmDelete(Number(course.id))}
                                                    className="flex items-center justify-center w-10 h-10 text-red-600 transition-colors bg-red-100 rounded-full hover:bg-red-200"
                                                    title="Deletar curso"
                                                >
                                                    <FaTrash size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>

                            {department?.courses?.length === 0 && (
                                <div className="p-8 mt-4 text-center bg-gray-50 rounded-lg">
                                    <p className="text-gray-500">Nenhum curso encontrado neste departamento.</p>
                                    <p className="mt-2 text-gray-400">Clique em Adicionar Curso para começar.</p>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>

            {/* Confirmation Modal */}
            {deleteConfirm.show && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-full max-w-md p-6 mx-4 bg-white rounded-lg shadow-xl"
                    >
                        <h3 className="mb-4 text-xl font-semibold text-gray-800">Confirmar exclusão</h3>
                        <p className="text-gray-600">Tem certeza que deseja excluir este curso? Esta ação não pode ser desfeita.</p>

                        <div className="flex justify-end gap-3 mt-6">
                            <button
                                onClick={cancelDelete}
                                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={deleteCourseDep}
                                className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                            >
                                Excluir
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}

            <div className="py-12"></div>
        </div>
    );
};

export default DepartmentCoursesPage;

