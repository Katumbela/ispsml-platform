/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useEffect, useState } from 'react';
import InputDefault from '@/components/input-default/input';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '@/config/firebaseConfig';
import { generateSlug } from '@/utils/slugfy';
import DateSelect from '@/components/date-select/date-select';
import eventsService from '@/services/events.service';

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
        const storageRef = ref(storage, `events/${imageUrl.name}`);
        await uploadBytes(storageRef, imageUrl);
        imageUrlString = await getDownloadURL(storageRef);
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

  return (
    <div className="max-w-3xl p-6 mx-auto text-white bg-gray-900 rounded-lg shadow-lg">
      <h1 className="mb-6 text-3xl font-bold text-center">Adicionar Evento</h1>
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

        <InputDefault label='Slug' placeholder='Slug' value={slug} onChange={(e) => setSlug(e.target.value)} required={true} />
        <InputDefault label='Local' placeholder='Local' value={place} onChange={(e) => setPlace(e.target.value)} required={true} />

        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-5 h-5 text-blue-500 border-gray-600 rounded" checked={isFeatured} onChange={(e) => setIsFeatured(e.target.checked)} />
          <label className="text-sm">Evento em Destaque</label>
        </div>

        <div className="flex justify-center">
          <button type="submit" className="flex items-center gap-2 px-6 py-3 text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50" disabled={loading}>
            {loading ? <FaSpinner className="animate-spin" /> : "Adicionar Evento"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventsDashboard;
