/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useEffect, useState } from 'react';
import InputDefault from '../../../components/input-default/input';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify'; 
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../config/firebaseConfig';
import { generateSlug } from '@/utils/slugfy';
import DateSelect from '@/components/date-select/date-select';
import eventsService from '@/services/events.service';
// import { Event } from '@/infra/interfaces/events.interface';
 

const EventsDashboard = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [date, setDate] =  useState<Date | null>(null); 
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState<File | null>(null);
  const [isFeatured, setIsFeatured] = useState(false);
  const [slug, setSlug] = useState('');
  const [place, setPlace] = useState('');
  const [loading, setLoading] = useState(false);
 
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

  
    useEffect(() => {
      setSlug(generateSlug(title));
  }, [title]);
  
  

  return (
    <div className="container px-6 py-32 mx-auto text-white bg-primary-footer">
     {/* {events.length}
     {
      events.map((event: Event) => (
        <div key={event.id} className="flex gap-4">
          <Image src={event.imageUrl} alt={event.title} className="w-32 h-32" />
          <div>
            <h2 className="text-xl font-bold">{event.title}</h2>
            <p>{event.description}</p>
            <p>{event.longDescription}</p>
            <p>{DateUtils.getDateTimePt(event.date)}</p>
            <p>{event.category}</p>
            <p>{event.slug}</p>
            <p>{event.place}</p>
          </div>
        </div>
      ))
     } */}
      <h1 className="mb-4 text-2xl font-bold">Adicionar Evento</h1>
      <form onSubmit={handleSubmit}>
        <InputDefault label='Título' placeholder='Título' value={title} onChange={(e) => setTitle(e.target.value)} required={true} />
        <InputDefault label='Descrição' placeholder='Descrição' value={description} onChange={(e) => setDescription(e.target.value)} required={true} />
        <InputDefault label='Descrição Longa' placeholder='Descrição Longa' value={longDescription} onChange={(e) => setLongDescription(e.target.value)} required={true} />
        <DateSelect name='birth-date' value={date} onChange={(date: any) => setDate(date)} placeholder='Data do evento' required={true} />
        <InputDefault label='Categoria' placeholder='Categoria' value={category} onChange={(e) => setCategory(e.target.value)} />
        <input type="file" onChange={(e) => setImageUrl(e.target.files ? e.target.files[0] : null)} required={true} />
        <InputDefault label='Slug' placeholder='Slug' value={slug} onChange={(e) => setSlug(e.target.value)} required={true} />
        <InputDefault label='Local' placeholder='Local' value={place} onChange={(e) => setPlace(e.target.value)} required={true} />
        <div className="flex items-center mb-4">
          <input type="checkbox" checked={isFeatured} onChange={(e) => setIsFeatured(e.target.checked)} />
          <label className="ml-2">Evento em Destaque</label>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="flex gap-2 px-3 py-3 mt-5 text-black uppercase transition-all bg-white border-2 border-white hover:bg-transparent hover:text-white">
            {loading ? <FaSpinner className="my-auto animate-spin" /> : (
              <>
                <span className="my-auto">Adicionar Evento</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventsDashboard;
