/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ICourse } from '@/infra/interfaces/course.interface';
import { getCourseById, updateCourse } from '@/services/course.service';
import { AlertUtils } from '@/utils';
import Loader from '@/components/common/Loader';
import Image from 'next/image';
import { useQuery } from 'react-query';

const ClientEditCoursePage = ({ courseId }: { courseId: string }) => {
    // const [course, setCourse] = useState<ICourse | null>(null);
    // const [loading, setLoading] = useState(true);
    const router = useRouter();
    // const { courseId } = useParams() as { courseId: string };


    const [course, setCourse] = useState<ICourse | null>(null);
    const { data: courseState, isLoading: loading } = useQuery('getCourse', () => getCourseById(Number(courseId)), {
        refetchOnWindowFocus: false,
        onSuccess: (data) => setCourse(data)
    });


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setCourse((prevCourse) => prevCourse ? { ...prevCourse, [name]: value } : null);
    };

    const handleShiftChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, checked } = e.target;

        setCourse((prevCourse) => prevCourse ? {
            ...prevCourse,
            shift: {
                ...prevCourse.shift,
                morning: name === 'morning' ? checked : prevCourse.shift?.morning ?? false,
                afternoon: name === 'afternoon' ? checked : prevCourse.shift?.afternoon ?? false,
                evening: name === 'evening' ? checked : prevCourse.shift?.evening ?? false
            }
        } : null);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCourse((prevCourse) => prevCourse ? { ...prevCourse, course_cover: reader.result as string } : null);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSaveCourse = async () => {
        if (course) {
            await updateCourse(Number(course.id), course);
            AlertUtils.success('Curso atualizado com sucesso');
            // console.log(res)
            // router.back();
        }
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <head>
                <title>Editar Curso | ISPSML</title>
            </head>
            <div className="h-20 mb-20 bg-gray-800" />

            <div className="bg-gradient-to-r ">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold text-primary">Gerencir Curso de {courseState?.course}</h2>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                <div className="mb-6 flex items-center">
                    <button
                        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
                        onClick={() => router.back()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        Voltar
                    </button>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="px-6 py-8 border-b border-gray-200">
                        <h1 className="text-3xl font-bold text-gray-800">Editar Curso </h1>
                        <p className="mt-2 text-gray-600">Atualize as informações do curso conforme necessário</p>
                    </div>

                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Nome do Curso</label>
                                <input
                                    type="text"
                                    name="course"
                                    value={course?.course}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Detalhe Curto</label>
                                <textarea
                                    name="short_detail"
                                    value={course?.short_detail}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                    rows={3}
                                />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700">Descrição Longa</label>
                                <textarea
                                    name="long_description"
                                    value={course?.long_description}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                    rows={4}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Duração (em horas)</label>
                                <input
                                    type="number"
                                    name="duration"
                                    value={course?.duration}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Nível</label>
                                <select
                                    name="level"
                                    value={course?.level}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 bg-white"
                                >
                                    <option value="bacharel">Bacharel</option>
                                    <option value="undergraduation">Graduação</option>
                                    <option value="professional">Profissional</option>
                                    <option value="master">Mestrado</option>
                                    <option value="pos-graduation">Pós-Graduação</option>
                                    <option value="preparatory">Preparatório</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Turnos</label>
                                <div className="flex flex-wrap gap-4">
                                    <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="morning"
                                            checked={course?.shift?.morning}
                                            onChange={handleShiftChange}
                                            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 mr-2"
                                        />
                                        <span>Manhã</span>
                                    </label>
                                    <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="afternoon"
                                            checked={course?.shift?.afternoon}
                                            onChange={handleShiftChange}
                                            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 mr-2"
                                        />
                                        <span>Tarde</span>
                                    </label>
                                    <label className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="evening"
                                            checked={course?.shift?.evening}
                                            onChange={handleShiftChange}
                                            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 mr-2"
                                        />
                                        <span>Noite</span>
                                    </label>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Benefícios</label>
                                <input
                                    type="text"
                                    name="benefits"
                                    value={course?.benefits}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Perfil de Entrada</label>
                                <input
                                    type="text"
                                    name="entryProfile"
                                    value={course?.entryProfile}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Perfil de Saída</label>
                                <input
                                    type="text"
                                    name="outProfile"
                                    value={course?.outProfile}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                                />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700">Capa do Curso</label>
                                <div className="mt-1 flex flex-col md:flex-row items-start md:items-center gap-4">
                                    {course?.course_cover && (
                                        <div className="relative h-40 w-56 rounded-lg overflow-hidden border border-gray-200">
                                            <Image
                                                src={course.course_cover}
                                                fill
                                                style={{ objectFit: 'cover' }}
                                                alt="Capa do Curso"
                                                className="rounded-lg"
                                            />
                                        </div>
                                    )}
                                    <label className="flex flex-col items-center px-4 py-6 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                        </svg>
                                        <span className="mt-2 text-sm text-gray-600">Selecionar imagem</span>
                                        <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 pt-6 border-t border-gray-200">
                            <div className="flex justify-end">
                                <button
                                    onClick={() => router.back()}
                                    className="px-6 py-3 mr-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition duration-200"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={handleSaveCourse}
                                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition duration-200 shadow-md"
                                >
                                    Salvar Alterações
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClientEditCoursePage;