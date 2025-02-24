/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useEffect, useState } from 'react';
import InputDefault from '@/components/input-default/input';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { generateSlug } from '@/utils/slugfy';
import DateSelect from '@/components/date-select/date-select';
import { eventsService } from '@/services/events.service';
import { fileToBase64 } from '@/utils/file-to-b64';
import { useRouter } from 'next/navigation';
import { Event } from '@/infra/interfaces/events.interface';
import { routes } from '@/infra/routes.vars';
import { AbreviateString } from '@/utils';

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
  const [events, setEvents] = useState<Event[]>([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setSlug(generateSlug(title));
  }, [title]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsData = await eventsService.getAllEvents();
        setEvents(eventsData);
      } catch (error) {
        toast.error('Erro ao carregar eventos!');
      }
    };
    fetchEvents();
  }, []);

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
    <>
      <head>
        <title>Gerenciar Eventos | ISPSML</title>
      </head>

      <div className='bg-primary-footer'>
        <div className="h-20 mb-10 bg-gray-800" />

        <div className="flex gap-10 lg:flex-nowrap flex-wrap-reverse containers">
          <div className="w-full p-14 mx-auto text-white bg-gray-800 rounded-lg shadow-lg">
            <button className='my-3 hover:underline btn' onClick={() => router.back()}>Voltar</button>
            <br />
            <button className='my-3 hover:underline btn' onClick={() => setShowForm(!showForm)}>
              {showForm ? 'Esconder Formulário' : 'Adicionar Evento'}
            </button>
            {showForm && (
              <>
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
                    <button type="submit" className="flex items-center gap-2 px-6 py-3 text-white transition-all rounded-lg bg-primary hover:bg-blue-700 disabled:opacity-50 btn" disabled={loading}>
                      {loading ? <FaSpinner className="animate-spin" /> : "Adicionar Evento"}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>

          <div className="w-full p-14 mx-auto text-white bg-gray-800 rounded-lg shadow-lg mt-10">
            <h2 className="mb-6 text-2xl font-bold text-start">Eventos</h2>
            <ul>
              {events.map(event => (
                <li key={event.id} className="mb-4">
                  <div className="flex justify-between items-center">
                    <span>{AbreviateString.abbreviate(event.title, 55)}</span>
                    <div>
                      <button className="mr-2 text-blue-500 hover:underline btn" onClick={() => router.push(`${routes.EDIT_EVENT}/${event.id}`)}>Editar</button>
                      <button className="text-red-500 hover:underline btn" onClick={async () => {
                        try {
                          await eventsService.deleteEvent(event.id);
                          setEvents(events.filter(e => e.id !== event.id));
                          toast.success('Evento deletado com sucesso!');
                        } catch (error) {
                          toast.error('Erro ao deletar evento!');
                        }
                      }}>Deletar</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default EventsDashboard;
