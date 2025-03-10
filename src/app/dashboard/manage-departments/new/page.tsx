/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createDepartment } from "@/services/dep.service";
import { IDepartment } from "@/infra/interfaces/course.interface";
import Image from "next/image";
import { AlertUtils } from "@/utils";
import { routes } from "@/infra/routes.vars";
import { uploadImage } from "@/utils/uploadImage";
import { FaArrowLeft, FaUpload } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FaRegSave } from "react-icons/fa";

const NewDepartmentPage = () => {
    const [name, setName] = useState("");
    const [catalogLink, setCatalogLink] = useState("");
    const [departmentCover, setDepartmentCover] = useState<string>("");
    const [departmentDirectorCover, setDepartmentDirectorCover] = useState<string>("");
    const [directorName, setDirectorName] = useState("");
    const [departmentPreview, setDepartmentPreview] = useState<string | null>(null);
    const [directorPreview, setDirectorPreview] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            try {
                const base64 = await uploadImage(file, "department_cover");
                setDepartmentCover(base64);
                setDepartmentPreview(URL.createObjectURL(file));
            } catch (err) {
                AlertUtils.error("Erro ao carregar a imagem do departamento");
            }
        }
    };
    
    const handlePhotoDirectorChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            try {
                const base64 = await uploadImage(file, "department_director_cover");
                setDepartmentDirectorCover(base64);
                setDirectorPreview(URL.createObjectURL(file));
            } catch (err) {
                AlertUtils.error("Erro ao carregar a foto do diretor");
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);

        if (!name || !departmentCover || !directorName || !departmentDirectorCover) {
            setError("Todos os campos obrigatórios devem ser preenchidos.");
            return;
        }

        setLoading(true);
        try {
            const data: IDepartment = {
                name,
                catalog_link: catalogLink,
                department_cover: departmentCover,
                departmentDirector: {
                    name: directorName,
                    picture: departmentDirectorCover,
                },
                slug: name.toLowerCase().replace(/\s/g, "-"),
            }
            const response = await createDepartment(data);

            if (response) {
                AlertUtils.success("Departamento criado com sucesso!");
                router.push(routes.MANAGE_DEPARTMENTS);
            }
        } catch (err: any) {
            console.log(err.message);
            setError("Erro ao enviar os dados. Tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white min-h-screen">
            <div className="h-20 mb-10 bg-gradient-to-r from-blue-800 to-blue-600 shadow-md" />
            <div className="max-w-4xl px-4 mx-auto">
                <button 
                    onClick={() => router.back()} 
                    className="flex items-center gap-2 px-4 py-2 mb-6 text-blue-700 transition-colors hover:text-blue-900"
                >
                    <FaArrowLeft size={14} />
                    <span>Voltar</span>
                </button>
                
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Adicionar Departamento</h1>
                    <p className="mt-2 text-gray-600">Preencha os detalhes para criar um novo departamento</p>
                </div>

                {error && (
                    <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 mb-6 text-red-700 bg-red-100 border-l-4 border-red-500 rounded-md"
                    >
                        {error}
                    </motion.div>
                )}

                <form onSubmit={handleSubmit} className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-700">Nome do Departamento *</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Ex: Departamento de Engenharia Civil"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-colors"
                            />
                        </div>
                        
                        <div className="col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-700">Link do Catálogo</label>
                            <input
                                type="url"
                                value={catalogLink}
                                onChange={(e) => setCatalogLink(e.target.value)}
                                placeholder="https://example.com/catalogo"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-colors"
                            />
                        </div>
                        
                        <div className="col-span-2 md:col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-700">Capa do Departamento *</label>
                            <div className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                                <input
                                    type="file"
                                    id="departmentCover"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                                {!departmentPreview ? (
                                    <label htmlFor="departmentCover" className="flex flex-col items-center justify-center w-full h-32 cursor-pointer">
                                        <FaUpload className="mb-2 text-gray-400" size={24} />
                                        <span className="text-sm text-gray-500">Clique para selecionar uma imagem</span>
                                    </label>
                                ) : (
                                    <div className="relative w-full h-48">
                                        <Image 
                                            src={departmentPreview} 
                                            alt="Prévia da capa" 
                                            fill
                                            className="object-cover rounded-md"
                                        />
                                        <button 
                                            type="button"
                                            onClick={() => {
                                                setDepartmentPreview(null);
                                                setDepartmentCover('');
                                            }}
                                            className="absolute p-1 text-white bg-red-500 rounded-full top-2 right-2 hover:bg-red-600"
                                        >
                                            <span className="text-xs">✕</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        <div className="col-span-2 md:col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-700">Nome do Diretor *</label>
                            <input
                                type="text"
                                value={directorName}
                                onChange={(e) => setDirectorName(e.target.value)}
                                placeholder="Nome completo do diretor"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-colors"
                            />
                        </div>
                        
                        <div className="col-span-2 md:col-span-1">
                            <label className="block mb-2 text-sm font-medium text-gray-700">Foto do Diretor *</label>
                            <div className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                                <input
                                    type="file"
                                    id="directorPhoto"
                                    accept="image/*"
                                    onChange={handlePhotoDirectorChange}
                                    className="hidden"
                                />
                                {!directorPreview ? (
                                    <label htmlFor="directorPhoto" className="flex flex-col items-center justify-center w-full h-32 cursor-pointer">
                                        <FaUpload className="mb-2 text-gray-400" size={24} />
                                        <span className="text-sm text-gray-500">Clique para selecionar uma foto</span>
                                    </label>
                                ) : (
                                    <div className="relative w-full h-48">
                                        <Image 
                                            src={directorPreview} 
                                            alt="Prévia da foto do diretor" 
                                            fill
                                            className="object-cover rounded-md"
                                        />
                                        <button 
                                            type="button"
                                            onClick={() => {
                                                setDirectorPreview(null);
                                                setDepartmentDirectorCover('');
                                            }}
                                            className="absolute p-1 text-white bg-red-500 rounded-full top-2 right-2 hover:bg-red-600"
                                        >
                                            <span className="text-xs">✕</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-end gap-4 mt-8">
                        <button
                            type="button"
                            onClick={() => router.back()}
                            className="px-6 py-3 text-gray-700 transition-colors bg-gray-100 rounded-md hover:bg-gray-200"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`px-6 py-3 flex items-center gap-2 text-white rounded-md transition-all ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"}`}
                        >
                            <FaRegSave size={14} />
                            {loading ? "Salvando..." : "Salvar Departamento"}
                        </button>
                    </div>
                </form>
            </div>
            
            <div className="py-12"></div>
        </div>
    );
};

export default NewDepartmentPage;