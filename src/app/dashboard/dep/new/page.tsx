"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useRouter } from "next/navigation";
import { fileToBase64 } from "@/utils/file-to-b64";
import { createDepartment } from "@/services/dep.service";
import { IDepartment } from "@/infra/interfaces/course.interface";
import Image from "next/image";

const NewDepartmentPage = () => {
    const [name, setName] = useState("");
    const [catalogLink, setCatalogLink] = useState("");
    const [departmentCover, setDepartmentCover] = useState<string>("");
    const [departmentDirectorCover, setDepartmentDirectorCover] = useState<string>("");
    const [directorName, setDirectorName] = useState("");
    const [preview, setPreview] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const base64 = await fileToBase64(file);
            setDepartmentCover(base64);
            setPreview(URL.createObjectURL(file));
        }
    };
    const handlePhotoDirectorChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const base64 = await fileToBase64(file);
            setDepartmentDirectorCover(base64);
            // setPreview(URL.createObjectURL(file));
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

            }
            const response = await createDepartment(data);

            if (!response.ok) {
                throw new Error("Erro ao criar departamento.");
            }

            router.push("/departments");
        } catch (err: any) {
            console.log(err.message)
            setError("Erro ao enviar os dados. Tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="h-20 mb-10 bg-gray-800" />
            <div className="p-4">
                <h1 className="mb-4 text-2xl font-bold">Adicionar Departamento</h1>

                {error && <p className="mb-4 text-red-500">{error}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nome *</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Link do Catálogo</label>
                        <input
                            type="link"
                            value={catalogLink}
                            onChange={(e) => setCatalogLink(e.target.value)}
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Capa do Departamento *</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
                        />
                        {preview && <Image src={preview} width={100} height={100} alt="Prévia" className="w-32 h-32 mt-2 rounded-md shadow" />}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nome do Diretor *</label>
                        <input
                            type="text"
                            value={directorName}
                            onChange={(e) => setDirectorName(e.target.value)}
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Foto do Diretor *</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoDirectorChange}
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className={`px-4 py-2 text-white rounded ${loading ? "bg-gray-500" : "bg-primary"}`}
                        disabled={loading}
                    >
                        {loading ? "Salvando..." : "Salvar"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewDepartmentPage;