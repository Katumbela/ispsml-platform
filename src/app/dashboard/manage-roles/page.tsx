/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import React, { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { routes } from '@/infra/routes.vars';
import { IRole } from '@/infra/data/roles-data';
import InputDefault from '@/components/input-default/input';
import { createRole, deleteRole, getAllRoles } from '@/services/role.service';
import { uploadImage } from '@/utils/uploadImage';
interface Phrase {
    content: string;
}

const ManageRoles = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [loadingR, setLoadingR] = useState(false);
    const [roles, setRoles] = useState<IRole[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [pic, setPic] = useState<File | null>(null);
    const [role, setRole] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [x, setX] = useState('');
    const [team, setTeam] = useState<string[]>([]);

    useEffect(() => {
        setLoadingR(true);
        getAllRoles().then((roles) => {
            setRoles(roles as IRole[]);
            setLoadingR(false);
        });
    }, []);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        try {
            let imageUrl = '';
            if (pic) {
                const imageFile = pic;
                if (imageFile) {
                    imageUrl = await uploadImage(imageFile, 'roles');
                }
            }
            await createRole({
                name: name,
                about: description,
                pic: imageUrl,
                role: role,
                linkedin: linkedin,
                x: x,
                // phrases: "",
                team: team
            });
            setLoading(false);
            toast.success('Role adicionada com sucesso!');
        } catch (error: any) {
            setLoading(false);
            toast.error('Erro ao adicionar role! ' + error.message);
        }
    };

    const handleDelete = async (id: number) => {
        setLoadingR(true);
        try {
            await deleteRole(Number(id) || 0);
            setRoles(roles.filter(role => Number(role.id) !== id));
            setLoadingR(false);
            toast.success('Role deletada com sucesso!');
        } catch (error: any) {
            setLoadingR(false);
            toast.error('Erro ao deletar role! ' + error.message);
        }
    };

    // const handleEdit = (id: number) => {
    //     router.push(`/dashboard/edit-role?id=${id}`);
    // };

    const router = useRouter();
    return (
        <div className="grid grid-cols-2 gap-10 px-6 py-32 mx-auto text-white bg-primary-footer">
            <div className="col-span-2 px-10">
                <div className="flex gap-4 mb-4">
                    <button onClick={() => setShowForm(!showForm)} className="px-3 py-2 text-black bg-white border-2 border-white hover:bg-transparent hover:text-white">
                        {showForm ? 'Esconder Formulário' : 'Adicionar Role'}
                    </button>
                </div>
            </div>
            {showForm && (
                <div className="px-10">
                    <h1 className="mb-4 text-2xl font-bold">Adicionar Role</h1>
                    <form onSubmit={handleSubmit}>
                        <InputDefault label='Nome da Role' placeholder='Nome' value={name} onChange={(e) => setName(e.target.value)} required={true} />
                        <br />
                        <InputDefault label='Descrição' placeholder='Descrição' value={description} onChange={(e) => setDescription(e.target.value)} required={true} />
                        <br />
                        <br />
                        <input
                            placeholder='Foto'
                            onChange={(e) => setPic(e.target.files ? e.target.files[0] : null)}
                            required={true}
                            type='file'
                            id='pic'
                        />
                        <br />
                        <br />
                        <InputDefault label='Role' placeholder='Role' value={role} onChange={(e) => setRole(e.target.value)} required={true} />
                        <br />
                        <InputDefault label='LinkedIn' placeholder='LinkedIn' value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
                        <br />
                        <InputDefault label='X' placeholder='X' value={x} onChange={(e) => setX(e.target.value)} />
                        <br />
                        <InputDefault label='Equipe' placeholder='Equipe' value={team.join(',')} onChange={(e) => setTeam(e.target.value.split(','))} />
                        <br />
                        <div className="flex justify-start">
                            <button type="submit" className="flex gap-2 px-3 py-3 mt-5 text-black uppercase transition-all bg-white border-2 border-white hover:bg-transparent hover:text-white">
                                {loading ? <FaSpinner className="my-auto animate-spin" /> : (
                                    <>
                                        <span className="my-auto">Adicionar Role</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            )}
            <div className="px-10">
                <h2 className="mt-10 mb-4 text-2xl font-bold">Organização</h2>
                <ul>
                    {loadingR ? <FaSpinner className="my-auto animate-spin" /> : (
                        <>
                            {roles.map(role => (
                                <li key={role.id} className="mb-4">
                                    <div className="flex flex-col border border-white/30 p-3 rounded justify-start">
                                        <div className="flex mb-2 gap-4">
                                            <span>{role.name}</span>
                                        </div>
                                        <div className="flex gap-2">
                                            {/* <button
                                                onClick={() => handleEdit(Number(role.id) || 0)}
                                                className="px-3 py-1 text-white bg-blue-600 rounded hover:bg-blue-700"
                                            >
                                                Editar
                                            </button> */}
                                            <button
                                                onClick={() => handleDelete(Number(role.id))}
                                                className="px-3 py-1 text-white bg-red-600 rounded hover:bg-red-700"
                                            >
                                                Deletar
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ManageRoles;
