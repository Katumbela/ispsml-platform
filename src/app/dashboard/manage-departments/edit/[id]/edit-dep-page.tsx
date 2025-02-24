"use client"

/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { departmentService } from '@/services/departments.service';
import { Department } from '@/infra/data/interfaces';
import { routes } from '@/infra/routes.vars';
import { uploadImage } from '@/utils/uploadImage';
import Image from 'next/image';
import { TextEditor } from '@/components/text-editor/text-editor';

const EditDepartmentPage = ({ id }: { id: number }) => {
    // const { id } = useParams() as { id: string };
    const [department, setDepartment] = useState<Department | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [newImage, setNewImage] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const router = useRouter();

    useEffect(() => {
        if (id) {
            departmentService.getDepartmentById(id)
                .then(department => {
                    setDepartment(department);
                    setPreviewImage(typeof department?.image === 'string' ? department.image : null);
                })
                .catch(setError)
                .finally(() => setLoading(false));
        }
    }, [id]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;
        if (name === 'image' && files && files[0]) {
            setNewImage(files[0]);
            setPreviewImage(URL.createObjectURL(files[0]));
        } else {
            setDepartment(prev => prev ? { ...prev, [name]: value } : null);
        }
    };

    const handleEditorChange = (content: string) => {
        setDepartment(prev => prev ? { ...prev, description: content } : null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        if (department && id) {
            try {
                const updatedDepartment = { ...department };
                if (newImage) {
                    const upimage = await uploadImage(newImage, "departments");
                    updatedDepartment.image = upimage;
                }
                const res = await departmentService.updateDepartment(id, updatedDepartment);

                if (res.id) {
                    router.push(routes.MANAGE_DEPARTMENTS);
                }
            } catch (error) {
                setError('Failed to update department');
            }
        }
        setIsSubmitting(false);
    };

    if (loading) {
        return (
            <div className="container mx-auto p-4">
                <div className="animate-pulse space-y-4">
                    <div className="h-8 bg-gray-300 rounded w-1/4"></div>
                    <div className="h-8 bg-gray-300 rounded w-1/2"></div>
                    <div className="h-8 bg-gray-300 rounded w-1/3"></div>
                    <div className="h-40 bg-gray-300 rounded"></div>
                </div>
            </div>
        );
    }

    return (
        <>
            <head>
                <title>Gerenciar Departamentos | ISPSML</title>
            </head>
            <div className="h-20 mb-20 bg-gray-800" />
            <div className="container mx-auto p-4">
                <button className=' mb-3 hover:underline text-lg' onClick={() => router.back()}>Voltar</button>

                {
                    error && (
                        <div className="bg-red-500/10 text-xs mb-5 border border-red-400  text-red-700 px-4 py-3 rounded relative" role="alert">

                            <span className="block sm:inline">{error}</span>
                        </div>
                    )
                }
                <h1 className="text-2xl font-bold mb-4">Editar Departmento</h1>
                {department && (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold">Nome</label>
                            <input
                                type="text"
                                name="name"
                                value={department.name}
                                onChange={handleInputChange}
                                className="p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold">Descrição</label>
                            <TextEditor
                                editorContent={department.description}
                                setEditorContent={handleEditorChange}
                                className="p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 font-semibold">Capa</label>
                            <input
                                type="file"
                                name="image"
                                onChange={handleInputChange}
                                className="p-2 border border-gray-300 rounded"
                            />
                            {previewImage && (
                                <Image height={50} width={100} src={previewImage} alt="Preview" className="mt-4 h-40 w-40 object-cover" />
                            )}
                        </div>
                        <button type="submit" className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-600" disabled={isSubmitting}>
                            {isSubmitting ? 'Salvando...' : 'Salvar'}
                        </button>
                    </form>
                )}
            </div>
        </>
    );
};

export default EditDepartmentPage;
