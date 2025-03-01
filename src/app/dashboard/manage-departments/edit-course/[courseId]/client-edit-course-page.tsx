/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ICourse } from '@/infra/interfaces/course.interface';
import { getCourseById, updateCourse } from '@/services/course.service';
import { AlertUtils } from '@/utils';
import Loader from '@/components/common/Loader';
import Image from 'next/image';

const ClientEditCoursePage = ({ courseId }: { courseId: string }) => {
    const [course, setCourse] = useState<ICourse | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    // const { courseId } = useParams() as { courseId: string };

    useEffect(() => {
        const fetchCourse = async () => {
            const fetchedCourse = await getCourseById(Number(courseId));
            setCourse(fetchedCourse);
            setLoading(false);
        };

        fetchCourse();
    }, [courseId]);

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
            <div className="h-20  bg-gray-800" />

            <div className=" max-w-4xl py-20 bg-gray-100 px-10 min-h-screen">
                <button className="mb-4 text-blue-600 hover:underline" onClick={() => router.back()}>Voltar</button>
                <h1 className="mb-6 text-3xl font-bold">Editar Curso</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nome do Curso</label>
                        <input
                            type="text"
                            name="course"
                            value={course?.course}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Detalhe Curto</label>
                        <textarea
                            name="short_detail"
                            value={course?.short_detail}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Descrição Longa</label>
                        <textarea
                            name="long_description"
                            value={course?.long_description}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Duração (em horas)</label>
                        <input
                            type="number"
                            name="duration"
                            value={course?.duration}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nível</label>
                        <select
                            name="level"
                            value={course?.level}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        >
                            <option value="bacharel">Bacharel</option>
                            <option value="undergraduation">Graduação</option>
                            <option value="professional">Profissional</option>
                            <option value="master">Mestrado</option>
                            <option value="pos-graduation">Pós-Graduação</option>
                            <option value="preparatory">Preparatório</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Turnos</label>
                        <div className="mt-2 flex gap-5 ">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="morning"
                                    checked={course?.shift?.morning}
                                    onChange={handleShiftChange}
                                    className="mr-2"
                                />
                                Manhã
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="afternoon"
                                    checked={course?.shift?.afternoon}
                                    onChange={handleShiftChange}
                                    className="mr-2"
                                />
                                Tarde
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="evening"
                                    checked={course?.shift?.evening}
                                    onChange={handleShiftChange}
                                    className="mr-2"
                                />
                                Noite
                            </label>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Benefícios</label>
                        <input
                            type="text"
                            name="benefits"
                            value={course?.benefits}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Perfil de Entrada</label>
                        <input
                            type="text"
                            name="entryProfile"
                            value={course?.entryProfile}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Perfil de Saída</label>
                        <input
                            type="text"
                            name="outProfile"
                            value={course?.outProfile}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Capa do Curso</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                        {course?.course_cover && (
                            <Image src={course.course_cover} width={100} height={100} alt="Capa do Curso" className="mt-2 w-32 h-32 object-cover rounded-md" />
                        )}
                    </div>

                </div>
                <button
                    onClick={handleSaveCourse}
                    className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                    Salvar
                </button>
            </div>

        </>
    );
};

export default ClientEditCoursePage;