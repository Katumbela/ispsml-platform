/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getDepartmentById } from '@/services/dep.service';
import { ICourse, IDepartment, IYear } from '@/infra/interfaces/course.interface';
import { generateSlug } from '@/utils/slugfy';
import { addCourseToDepartment } from '@/services/course.service';
import { routes } from '@/infra/routes.vars';
import { uploadImage } from '@/utils/uploadImage';

const NewCoursePage = () => {
    const [course, setCourse] = useState('');
    const [shortDetail, setShortDetail] = useState('');
    const [longDescription, setLongDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [level, setLevel] = useState<'bacharel' | 'undergraduation' | 'professional' | 'master' | 'pos-graduation' | 'preparatory'>('undergraduation');
    const [slug, setSlug] = useState('');
    const [courseCover, setCourseCover] = useState('');
    const [shift, setShift] = useState({ morning: false, afternoon: false, evening: false });
    const [years, setYears] = useState<IYear[]>([]);
    const [benefits, setBenefits] = useState('');
    const [entryProfile, setEntryProfile] = useState('');
    const [outProfile, setOutProfile] = useState('');
    const router = useRouter();
    const params = useParams<{ dep_id: string }>();
    const departmentId = params?.dep_id;
    const [department, setDepartment] = useState<IDepartment | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setSlug(generateSlug(course || ''));
    }, [course]);

    useEffect(() => {
        const fetchDep = async () => {
            const dep = await getDepartmentById(Number(departmentId) || 0);
            setDepartment(dep);
            setLoading(false);
        };
        fetchDep();
    }, [departmentId]);

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const base64 = await uploadImage(file, "departments");
            setCourseCover(base64);
        }
    };

    const handleAddYear = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); // Evita o comportamento padrão de um formulário
        setYears((prevYears) => [...prevYears, { year: '', semesters: [] }]);
    };


    const handleYearChange = (index: number, value: string) => {
        const updatedYears = [...years];
        updatedYears[index].year = value;
        setYears(updatedYears);
    };

    const handleAddSemester = (yearIndex: number) => {
        const updatedYears = [...years];
        updatedYears[yearIndex].semesters.push({ semester: '', subjects: [] });
        setYears(updatedYears);
    };

    const handleSemesterChange = (yearIndex: number, semesterIndex: number, value: string) => {
        const updatedYears = [...years];
        updatedYears[yearIndex].semesters[semesterIndex].semester = value;
        setYears(updatedYears);
    };

    const handleAddSubject = (yearIndex: number, semesterIndex: number) => {
        const updatedYears = [...years];
        updatedYears[yearIndex].semesters[semesterIndex].subjects.push({ name: '', workload: 0 });
        setYears(updatedYears);
    };

    const handleSubjectChange = (yearIndex: number, semesterIndex: number, subjectIndex: number, field: keyof IYear['semesters'][number]['subjects'][number], value: any) => {
        const updatedYears = [...years];
        (updatedYears[yearIndex].semesters[semesterIndex].subjects[subjectIndex][field] as any) = value;
        setYears(updatedYears);
    };



    const handleSubmit = async () => {
        if (!course || !shortDetail || !longDescription || !duration || !level || !slug || !courseCover || !departmentId) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        const data: ICourse = {
            course,
            short_detail: shortDetail,
            long_description: longDescription,
            duration,
            level,
            slug,
            course_cover: courseCover,
            departmentId: Number(departmentId),
            shift,
            years,
            benefits,
            entryProfile,
            outProfile,
        };

        const response: any = await addCourseToDepartment(Number(departmentId), data);

        if (response.id) {
            router.push(`${routes.MANAGE_DEPARTMENTS}/${departmentId}`);
        }
    };

    return (
        <div>
            <div className="h-20 mb-10 bg-gray-800" />
            <div className="containers">
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
                        <h1 className="mb-4 text-2xl font-bold border-b-2">{department?.name}</h1>
                        <h1 className="mb-4 text-2xl font-bold">Adicionar Curso</h1>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Nome do Curso</label>
                                <input type="text" placeholder="Nome do Curso" value={course} onChange={(e) => setCourse(e.target.value)} className="block w-full p-2 mt-1 border border-gray-300 rounded-md" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Descrição Curta</label>
                                <input type="text" placeholder="Descrição Curta" value={shortDetail} onChange={(e) => setShortDetail(e.target.value)} className="block w-full p-2 mt-1 border border-gray-300 rounded-md" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Descrição Longa</label>
                                <textarea placeholder="Descrição Longa" value={longDescription} onChange={(e) => setLongDescription(e.target.value)} className="block w-full p-2 mt-1 border border-gray-300 rounded-md" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Duração (anos)</label>
                                <input type="number" placeholder="Duração (anos)" value={duration} onChange={(e) => setDuration(parseInt(e.target.value))} className="block w-full p-2 mt-1 border border-gray-300 rounded-md" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Nível</label>
                                <select value={level} onChange={(e) => setLevel(e.target.value as any)} className="block w-full p-2 mt-1 border border-gray-300 rounded-md">
                                    <option value="undergraduation">Graduação</option>
                                    <option value="pos-graduation">Pós-Graduação</option>
                                    <option value="master">Mestrado</option>
                                    <option value="bacharel">Bacharelado</option>
                                    <option value="preparatory">Preparatório</option>
                                    <option value="professional">Curso Profissional</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Turnos:</label>
                                <div className="mt-1 space-x-4">
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" checked={shift.morning} onChange={() => setShift({ ...shift, morning: !shift.morning })} className="form-checkbox" />
                                        <span className="ml-2">Matutino</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" checked={shift.afternoon} onChange={() => setShift({ ...shift, afternoon: !shift.afternoon })} className="form-checkbox" />
                                        <span className="ml-2">Vespertino</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" checked={shift.evening} onChange={() => setShift({ ...shift, evening: !shift.evening })} className="form-checkbox" />
                                        <span className="ml-2">Noturno</span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Capa do Curso</label>
                                <input type="file" onChange={handleFileChange} className="block w-full p-2 mt-1 border border-gray-300 rounded-md" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Benefícios</label>
                                <textarea placeholder="Benefícios" value={benefits} onChange={(e) => setBenefits(e.target.value)} className="block w-full p-2 mt-1 border border-gray-300 rounded-md" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Perfil de Entrada</label>
                                <textarea placeholder="Perfil de Entrada" value={entryProfile} onChange={(e) => setEntryProfile(e.target.value)} className="block w-full p-2 mt-1 border border-gray-300 rounded-md" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Perfil de Saída</label>
                                <textarea placeholder="Perfil de Saída" value={outProfile} onChange={(e) => setOutProfile(e.target.value)} className="block w-full p-2 mt-1 border border-gray-300 rounded-md" />
                            </div>
                            <div>
                                <button onClick={handleAddYear} className="px-4 py-2 text-white bg-blue-500 rounded-md">Adicionar Ano</button>
                            </div>

                            {years.map((year, yearIndex) => (
                                <div key={yearIndex} className="p-4 mt-4 border border-gray-300 rounded-md">
                                    <label className="block text-sm font-medium text-gray-700">Ano</label>
                                    <input
                                        type="text"
                                        value={year.year}
                                        onChange={(e) => handleYearChange(yearIndex, e.target.value)}
                                        className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                                    />

                                    <button onClick={() => handleAddSemester(yearIndex)} className="px-4 py-2 mt-2 text-white bg-indigo-500 rounded-md">
                                        Adicionar Semestre
                                    </button>

                                    {year.semesters.map((semester, semesterIndex) => (
                                        <div key={semesterIndex} className="p-4 mt-2 border border-gray-400 rounded-md">
                                            <label className="block text-sm font-medium text-gray-700">Semestre</label>
                                            <input
                                                type="text"
                                                value={semester.semester}
                                                onChange={(e) => handleSemesterChange(yearIndex, semesterIndex, e.target.value)}
                                                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                                            />

                                            <button onClick={() => handleAddSubject(yearIndex, semesterIndex)} className="px-4 py-2 mt-2 text-white bg-purple-500 rounded-md">
                                                Adicionar Disciplina
                                            </button>

                                            {semester.subjects.map((subject: any, subjectIndex: any) => (
                                                <div key={subjectIndex} className="p-4 mt-2 border border-gray-500 rounded-md">
                                                    <label className="block text-sm font-medium text-gray-700">Nome da Disciplina</label>
                                                    <input
                                                        type="text"
                                                        value={subject.name}
                                                        onChange={(e) => handleSubjectChange(yearIndex, semesterIndex, subjectIndex, 'name', e.target.value)}
                                                        className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                                                    />

                                                    <label className="block text-sm font-medium text-gray-700">Carga Horária</label>
                                                    <input
                                                        type="number"
                                                        value={subject.workload}
                                                        onChange={(e) => handleSubjectChange(yearIndex, semesterIndex, subjectIndex, 'workload', parseInt(e.target.value))}
                                                        className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            ))}

                            <div>
                                <button onClick={handleSubmit} className="px-4 py-2 text-white bg-green-500 rounded-md">Salvar</button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default NewCoursePage;