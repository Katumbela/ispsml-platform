/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useState } from 'react';
import InputDefault from '../../../components/input-default/input';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import axios from 'axios';

const RolesDashboard = () => {
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [role, setRole] = useState('');
  const [cv, setCv] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [x, setX] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('/api/roles', {
        name,
        about,
        role,
        cv,
        linkedin,
        x,
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
        <InputDefault label='CV' placeholder='CV' value={cv} onChange={(e) => setCv(e.target.value)} required={true} />
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
