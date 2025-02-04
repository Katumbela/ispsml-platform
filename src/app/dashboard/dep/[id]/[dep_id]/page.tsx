"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { addCourseToDepartment, getDepartmentById } from '@/services/dep.service';
import { ICourse, IDepartment } from '@/infra/interfaces/course.interface';
import { generateSlug } from '@/utils/slugfy';
import { fileToBase64 } from '@/utils/file-to-b64';

const NewCoursePage = () => {
    const [course, setCourse] = useState('');
    const [shortDetail, setShortDetail] = useState('');
    const [longDescription, setLongDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [level, setLevel] = useState<"bacharel"
        | "graduation"
        | "professional"
        | "master"
        | "pos-graduation"
        | "preparatory">('graduation');
    const [slug, setSlug] = useState('');
    const [courseCover, setCourseCover] = useState('');
    const router = useRouter();
    const { dep_id: departmentId } = useParams()
    const [department, setDepartment] = useState<IDepartment | null>(null);


    const handleSubmit = async () => {
        // e.preventDefault();

        const data: ICourse = {
            course,
            course_cover: courseCover,
            departmentId: Number(departmentId),
            duration,
            level,
            slug,
            years: [],
            benefits: ["Test 1 Test", "Test 2 tets", "Test3 Test"].join("\n"),
            additional_courses: [],
            entryProfile: ["Test 1 Test", "Test 2 tets", "Test3 Test"].join("\n"),
            outProfile: ["Test 1 Test", "Test 2 tets", "Test3 Test"].join("\n"),
            shiftId: 0,
            long_description: longDescription,
            short_detail: shortDetail,

        }
        const response = await addCourseToDepartment(Number(departmentId), data);

        if (response.ok) {
            router.push(`/departments/${departmentId}/courses`);
        }
    };


    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const base64 = await fileToBase64(file);
            setCourseCover(base64);
            // setPreview(URL.createObjectURL(file));
        }
    };

    useEffect(() => {

        const fetchDep = async () => {
            const dep = await getDepartmentById(Number(departmentId) || 0);

            setDepartment(dep);
        };
        fetchDep();
        fetchDep();
    }, [departmentId]);

    useEffect(() => {
        setSlug(generateSlug(course || ""));
    }, [course]);

    return (
        <div>
            <div className="h-20 mb-20 bg-gray-800" />
            <div className="p-4">
                <h1 className="mb-4 text-2xl font-bold">{department?.name}</h1>
                <h1 className="mb-4 text-2xl font-bold">Adicionar Curso</h1>
                <div className="space-y-4">
                    {/* <form onSubmit={handleSubmit} className="space-y-4"> */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nome do Curso</label>
                        <input
                            type="text"
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Descrição Curta</label>
                        <input
                            type="text"
                            value={shortDetail}
                            onChange={(e) => setShortDetail(e.target.value)}
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Descrição Longa</label>
                        <textarea
                            value={longDescription}
                            onChange={(e) => setLongDescription(e.target.value)}
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Duração (em anos)</label>
                        <input
                            type="number"
                            value={duration}
                            onChange={(e) => setDuration(parseInt(e.target.value))}
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nível</label>
                        <select
                            value={level}
                            onChange={(e) => setLevel(e.target.value as any)}
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
                        >
                            <option value="graduation">Graduação</option>
                            <option value="master">Mestrado</option>
                            <option value="pos-graduation">Pós-Graduação</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Capa do Curso</label>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <button
                        // type="submit"

                        onClick={handleSubmit} className="px-4 py-2 text-white bg-blue-500 rounded"
                    >
                        Salvar
                    </button>
                </div>
            </div>
            <br />
            <br />
        </div>
    );
};

export default NewCoursePage;