/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useEffect, useState } from 'react';
import InputDefault from '@/components/input-default/input';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { generateSlug } from '@/utils/slugfy';
import DateSelect from '@/components/date-select/date-select';
import eventsService from '@/services/events.service';
import { fileToBase64 } from '@/utils/file-to-b64';
import { useRouter } from 'next/navigation';

const EventsDashboard = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState<File | null>(null);
  const [isFeatured, setIsFeatured] = useState(false);
  const [slug, setSlug] = useState('');
  const [place, setPlace] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setSlug(generateSlug(title));
  }, [title]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      let imageUrlString = '';
      if (imageUrl) {
        imageUrlString = await fileToBase64(imageUrl);
      }

      await eventsService.createEvent({
        id: '',
        title,
        description,
        longDescription,
        date: date || new Date(),
        category,
        imageUrl: imageUrlString,
        isFeatured,
        slug,
        place,
      });

      setLoading(false);
      toast.success('Evento adicionado com sucesso!');
    } catch (error: any) {
      setLoading(false);
      toast.error('Erro ao adicionar evento! ' + error.message);
    }
  };

  const router = useRouter()

  return (
    <div className='bg-primary-footer'>
      <div className="h-20 mb-10 bg-gray-800" />

      <div className="max-w-3xl p-14 mx-auto text-white bg-gray-800 rounded-lg shadow-lg">
        <button className=' my-3 hover:underline' onClick={() => router.back()}>Voltar</button>
        <h1 className="mb-6 text-3xl font-bold text-start">Adicionar Evento</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputDefault label='Título' placeholder='Título' value={title} onChange={(e) => setTitle(e.target.value)} required={true} />
          <InputDefault label='Descrição' placeholder='Descrição' value={description} onChange={(e) => setDescription(e.target.value)} required={true} />
          <InputDefault label='Descrição Longa' placeholder='Descrição Longa' value={longDescription} onChange={(e) => setLongDescription(e.target.value)} required={true} />
          <DateSelect name='date' value={date} onChange={(date: any) => setDate(date)} placeholder='Data do evento' required={true} />
          <InputDefault label='Categoria' placeholder='Categoria' value={category} onChange={(e) => setCategory(e.target.value)} />

          <div>
            <label className="block mb-1 text-sm font-medium">Imagem do Evento</label>
            <input type="file" className="block w-full p-2 text-sm text-gray-400 bg-gray-800 border border-gray-600 rounded" onChange={(e) => setImageUrl(e.target.files ? e.target.files[0] : null)} required />
          </div>

          <InputDefault label='Local' placeholder='Local' value={place} onChange={(e) => setPlace(e.target.value)} required={true} />

          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-5 h-5 text-blue-500 border-gray-600 rounded" checked={isFeatured} onChange={(e) => setIsFeatured(e.target.checked)} />
            <label className="text-sm">Evento em Destaque</label>
          </div>

          <div className="flex justify-center">
            <button type="submit" className="flex items-center gap-2 px-6 py-3 text-white transition-all rounded-lg bg-primary hover:bg-blue-700 disabled:opacity-50" disabled={loading}>
              {loading ? <FaSpinner className="animate-spin" /> : "Adicionar Evento"}
            </button>
          </div>
        </form>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default EventsDashboard;
