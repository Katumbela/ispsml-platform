/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useState } from 'react';
import InputDefault from '../../../components/input-default/input';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../config/firebaseConfig'; 
import rolesService from '@/services/roles.service';
 
const RolesDashboard = () => {
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [role, setRole] = useState('');
  const [cv, setCv] = useState<File | null>(null);
  const [linkedin, setLinkedin] = useState('');
  const [x, setX] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      let cvUrl = '';
      if (cv) {
        const storageRef = ref(storage, `cvs/${cv.name}`);
        await uploadBytes(storageRef, cv);
        cvUrl = await getDownloadURL(storageRef);
      }

      await rolesService.createRole({
        id: '', // Add appropriate value for id
        name,
        about,
        role,
        cv: cvUrl,
        linkedin,
        x,
        pic: '', // Add appropriate value for pic
        phrases: [], // Add appropriate value for phrases
        team: [''] // Add appropriate value for team
      });
      setLoading(false);
      toast.success('Role adicionada com sucesso!');
    } catch (error: any) {
      setLoading(false);
      toast.error('Erro ao adicionar role! ' + error.message);
    }
  };

  return (
    <div className="container px-6 py-32 mx-auto text-white bg-primary-footer">
      <h1 className="mb-4 text-2xl font-bold">Adicionar Role</h1>
      <form onSubmit={handleSubmit}>
        <InputDefault label='Nome' placeholder='Nome' value={name} onChange={(e) => setName(e.target.value)} required={true} />
        <InputDefault label='Sobre' placeholder='Sobre' value={about} onChange={(e) => setAbout(e.target.value)} required={true} />
        <InputDefault label='Role' placeholder='Role' value={role} onChange={(e) => setRole(e.target.value)} required={true} />
        <input type="file" onChange={(e) => setCv(e.target.files ? e.target.files[0] : null)} required={true} />
        <InputDefault label='LinkedIn' placeholder='LinkedIn' value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
        <InputDefault label='X' placeholder='X' value={x} onChange={(e) => setX(e.target.value)} />
        <div className="flex justify-center">
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
  );
};

export default RolesDashboard;
