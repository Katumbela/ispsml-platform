/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { IRole } from '@/infra/data/roles-data';
import InputDefault from '@/components/input-default/input';
import { createRole, deleteRole, getAllRoles, updateRole } from '@/services/role.service';
import { uploadImage } from '@/utils/uploadImage';
import { useQuery, useQueryClient } from 'react-query';


const ManageRoles = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [pic, setPic] = useState<File | null>(null);
    const [role, setRole] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [x, setX] = useState('');
    const [team, setTeam] = useState<string>();
    const queryClient = useQueryClient();
    
    // States for edit modal
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editingRole, setEditingRole] = useState<IRole | null>(null);
    const [editLoading, setEditLoading] = useState(false);

    // Fetch roles with React Query
    const { data: roles = [], isLoading: loadingR } = useQuery(
        'roles',
        getAllRoles,
        {
            onError: (error: any) => {
                toast.error('Erro ao carregar roles! ' + error.message);
            }
        }
    );

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
                team: team
            });

            // Manually invalidate the query
            queryClient.invalidateQueries('roles');

            // Reset form
            setName('');
            setDescription('');
            setPic(null);
            setRole('');
            setLinkedin('');
            setX('');
            setTeam('');

            toast.success('Role adicionada com sucesso!');
            setLoading(false);
        } catch (error: any) {
            setLoading(false);
            toast.error('Erro ao adicionar role! ' + error.message);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await deleteRole(id);
            // Manually invalidate the query after deletion
            queryClient.invalidateQueries('roles');
            toast.success('Role deletada com sucesso!');
        } catch (error: any) {
            toast.error('Erro ao deletar role! ' + error.message);
        }
    };

    const openEditModal = (role: IRole) => {
        setEditingRole(role);
        setIsEditModalOpen(true);
    };

    const closeEditModal = () => {
        setEditingRole(null);
        setIsEditModalOpen(false);
    };

    const handleEditSubmit = async (e: any) => {
        e.preventDefault();
        if (!editingRole || !editingRole.id) return;
        
        setEditLoading(true);
        try {
            await updateRole(Number(editingRole.id), editingRole);
            
            // Invalidate the query to refresh the data
            queryClient.invalidateQueries('roles');
            
            toast.success('Role atualizada com sucesso!');
            closeEditModal();
        } catch (error: any) {
            toast.error('Erro ao atualizar role! ' + error.message);
        } finally {
            setEditLoading(false);
        }
    };

    return (
        <>
            <head>
                <title>Gerenciar Roles</title>
                <meta name="description" content="Manage roles" />
                <link rel="icon" href="/favicon.ico" />
            </head>
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
                            <InputDefault label='Nome completo' placeholder='Digite o nome completo' value={name} onChange={(e) => setName(e.target.value)} required={true} />
                            <br />
                            <InputDefault label='Descrição' placeholder='Sobre esta pessoa ' value={description} onChange={(e) => setDescription(e.target.value)} required={true} />
                            <br />
                            <br />
                            <div className='flex flex-col'>
                                <span className="text-white">Foto de perfil</span>
                                <input
                                    placeholder='Foto'
                                    onChange={(e) => setPic(e.target.files ? e.target.files[0] : null)}
                                    required={true}
                                    type='file'
                                    // value={pic?.name}
                                    id='pic'
                                />
                            </div>
                            <br />
                            <br />
                            <InputDefault label='Role' placeholder='Role' value={role} onChange={(e) => setRole(e.target.value)} required={true} />
                            <br />
                            <InputDefault label='LinkedIn' placeholder='LinkedIn ( opcional )' value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
                            <br />
                            <InputDefault label='X' placeholder='X ( opcional )' value={x} onChange={(e) => setX(e.target.value)} />
                            <br />
                            <InputDefault label='Equipe' placeholder='Ex: director, secretary, etc...' value={team} onChange={(e) => setTeam(e.target.value)} />
                            <br />
                            <div className="flex justify-start">
                                <button
                                    type="submit"
                                    className="flex gap-2 px-3 py-3 mt-5 text-black uppercase transition-all bg-white border-2 border-white hover:bg-transparent hover:text-white"
                                    disabled={loading}
                                >
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
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="px-10">
                    <h2 className="mt-10 mb-4 text-2xl font-bold">Organização</h2>
                    <ul>
                        {loadingR ? <FaSpinner className="my-auto animate-spin" /> : (
                            <>
                                {roles.map((role: IRole) => (
                                    <li key={role.id} className="mb-4">
                                        <div className="flex flex-col border border-white/30 p-3 rounded justify-start">
                                            <div className="flex flex-col mb-2 gap-0">
                                                <span>{role.name}</span>
                                                <span className='text-gray-400 text-sm'>{role.role}</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => openEditModal(role)}
                                                    className="px-3 py-1 text-white bg-blue-600 rounded hover:bg-blue-700"
                                                >
                                                    Editar
                                                </button>
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

            {/* Edit Modal */}
            {isEditModalOpen && editingRole && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
                    <div className="w-1/2 p-6 bg-gray-900 rounded-lg">
                        <h2 className="mb-4 text-xl font-bold text-white">Editar Role</h2>
                        <form onSubmit={handleEditSubmit}>
                            <InputDefault 
                                label='Nome completo' 
                                placeholder='Digite o nome completo' 
                                value={editingRole.name} 
                                onChange={(e) => setEditingRole({...editingRole, name: e.target.value})} 
                                required={true} 
                            />
                            <br />
                            <InputDefault 
                                label='Descrição' 
                                placeholder='Sobre esta pessoa' 
                                value={editingRole.about} 
                                onChange={(e) => setEditingRole({...editingRole, about: e.target.value})} 
                                required={true} 
                            />
                            <br />
                            <InputDefault 
                                label='Role' 
                                placeholder='Role' 
                                value={editingRole.role} 
                                onChange={(e) => setEditingRole({...editingRole, role: e.target.value})} 
                                required={true} 
                            />
                            <br />
                            <InputDefault 
                                label='LinkedIn' 
                                placeholder='LinkedIn ( opcional )' 
                                value={editingRole.linkedin || ''} 
                                onChange={(e) => setEditingRole({...editingRole, linkedin: e.target.value})} 
                            />
                            <br />
                            <InputDefault 
                                label='X' 
                                placeholder='X ( opcional )' 
                                value={editingRole.x || ''} 
                                onChange={(e) => setEditingRole({...editingRole, x: e.target.value})} 
                            />
                            <br />
                            <InputDefault 
                                label='Equipe' 
                                placeholder='Ex: director, secretary, etc...' 
                                value={editingRole.team || ''} 
                                onChange={(e) => setEditingRole({...editingRole, team: e.target.value})} 
                            />
                            <br />
                            <div className="flex justify-between mt-6">
                                <button
                                    type="button"
                                    className="px-3 py-2 text-white bg-gray-600 rounded hover:bg-gray-700"
                                    onClick={closeEditModal}
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="flex gap-2 px-3 py-2 text-black bg-white rounded hover:bg-gray-200"
                                    disabled={editLoading}
                                >
                                    {editLoading ? <FaSpinner className="my-auto animate-spin" /> : 'Salvar Alterações'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default ManageRoles;
