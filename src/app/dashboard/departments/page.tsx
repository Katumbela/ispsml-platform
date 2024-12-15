/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useState } from 'react';
import InputDefault from '../../../components/input-default/input';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { uploadImage } from '@/utils/uploadImage'; 
import departmentsService from '@/services/departments.service';


const DepartmentsDashboard = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
        let imageUrl = '';
    if (image) {
      imageUrl = await uploadImage(image, 'departments');
    } 

      await departmentsService.createDepartment({
        name,
        description,
        image: imageUrl,
      });
      setLoading(false);
      toast.success('Departamento adicionado com sucesso!');
    } catch (error: any) {
      setLoading(false);
      toast.error('Erro ao adicionar departamento! ' + error.message);
    }
  };

  return (
    <div className="container px-6 py-32 mx-auto text-white bg-primary-footer">
      <h1 className="mb-4 text-2xl font-bold">Adicionar Departamento</h1>
      <form onSubmit={handleSubmit}>
        <InputDefault label='Nome' placeholder='Nome' value={name} onChange={(e) => setName(e.target.value)} required={true} />
        <InputDefault label='Descrição' placeholder='Descrição' value={description} onChange={(e) => setDescription(e.target.value)} required={true} />
        <input type="file" onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)} required={true} />
        <div className="flex justify-center">
          <button type="submit" className="flex gap-2 px-3 py-3 mt-5 text-black uppercase transition-all bg-white border-2 border-white hover:bg-transparent hover:text-white">
            {loading ? <FaSpinner className="my-auto animate-spin" /> : (
              <>
                <span className="my-auto">Adicionar Departamento</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DepartmentsDashboard;
