/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useEffect, useState } from 'react';
import InputDefault from '@/components/input-default/input';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import DateSelect from '@/components/date-select/date-select';
import { eventsService } from '@/services/events.service';
import { useRouter, useParams } from 'next/navigation';
import { Event } from '@/infra/interfaces/events.interface';
import Image from 'next/image';
import { uploadImage } from '@/utils/uploadImage';

const EditEventPage = ({ id }: { id: number }) => {
    const [event, setEvent] = useState<Event | null>(null);
    const [loading, setLoading] = useState(false);
    // const { id } = useParams() as { id: string };
    const router = useRouter();

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const eventData = await eventsService.getEventById(id);
                if (eventData) {
                    const parsedDate = eventData.date ? new Date(eventData.date) : new Date();
                    setEvent({
                        id: eventData.id || '',
                        title: eventData.title || '',
                        description: eventData.description || '',
                        longDescription: eventData.longDescription || '',
                        category: eventData.category || '',
                        imageUrl: eventData.imageUrl || '',
                        isFeatured: eventData.isFeatured || false,
                        slug: eventData.slug || '',
                        place: eventData.place || '',
                        date: parsedDate
                    });
                }
            } catch (error) {
                toast.error('Erro ao carregar evento!');
            }
        };
        fetchEvent();
    }, [id]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        try {
            let imageUrlString = event?.imageUrl || '';
            if (event?.imageUrl instanceof File) {
                imageUrlString = await uploadImage(event.imageUrl, 'events');
            }

            await eventsService.updateEvent(id, {
                title: event?.title,
                description: event?.description,
                longDescription: event?.longDescription,
                date: event?.date,
                category: event?.category,
                imageUrl: imageUrlString,
                isFeatured: event?.isFeatured,
                slug: event?.slug,
                place: event?.place,
            });

            setLoading(false);
            toast.success('Evento atualizado com sucesso!');
            router.push('/dashboard/events');
        } catch (error: any) {
            setLoading(false);
            toast.error('Erro ao atualizar evento! ' + error.message);
        }
    };

    if (!event) {
        return (
            <div className="p-4">
                <div className="w-full h-6 mb-4 bg-gray-300 rounded animate-pulse"></div>
                <div className="w-full h-6 mb-4 bg-gray-300 rounded animate-pulse"></div>
                <div className="w-full h-6 mb-4 bg-gray-300 rounded animate-pulse"></div>
                <div className="w-full h-6 mb-4 bg-gray-300 rounded animate-pulse"></div>
                <div className="w-full h-6 mb-4 bg-gray-300 rounded animate-pulse"></div>
                <div className="w-full h-6 mb-4 bg-gray-300 rounded animate-pulse"></div>
                <div className="w-full h-6 mb-4 bg-gray-300 rounded animate-pulse"></div>
            </div>
        );
    }



    return (
        <>
            <head>
                <title>Editar Evento | ISPSML</title>
            </head>

            <div className='bg-primary-footer'>
                <div className="h-20 mb-10 bg-gray-800" />

                <div className="max-w-3xl p-14 mx-auto text-white bg-gray-800 rounded-lg shadow-lg">
                    <button className=' my-3 hover:underline' onClick={() => router.back()}>Voltar</button>
                    <h1 className="mb-6 text-3xl font-bold text-start">Editar Evento</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <InputDefault label='Título' placeholder='Título' value={event.title} onChange={(e) => setEvent({ ...event, title: e.target.value })} required={true} />
                        <InputDefault label='Descrição' placeholder='Descrição' value={event.description} onChange={(e) => setEvent({ ...event, description: e.target.value })} required={true} />
                        <InputDefault label='Descrição Longa' placeholder='Descrição Longa' value={event.longDescription} onChange={(e) => setEvent({ ...event, longDescription: e.target.value })} required={true} />
                        <DateSelect name='date' value={event.date} onChange={(date: Date | null) => setEvent({ ...event, date: date as Date })} placeholder='Data do evento' required={true} />
                        <InputDefault label='Categoria' placeholder='Categoria' value={event.category} onChange={(e) => setEvent({ ...event, category: e.target.value })} />

                        <div>
                            <label className="block mb-1 text-sm font-medium">Imagem do Evento</label>
                            <div className="flex gap-4">
                                <input type="file" className="block my-auto w-full p-2 text-sm text-gray-400 bg-gray-800 border border-gray-600 rounded" onChange={(e) => setEvent({ ...event, imageUrl: e.target.files?.[0] || event.imageUrl })} />
                                {event.imageUrl && typeof event.imageUrl === 'string' && (
                                    <Image src={event.imageUrl} width={100} height={100} alt="Event Preview" className="mt-2 h-20 object-contain rounded" />
                                )}
                            </div>
                        </div>

                        <InputDefault label='Local' placeholder='Local' value={event.place} onChange={(e) => setEvent({ ...event, place: e.target.value })} required={true} />

                        <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-5 h-5 text-blue-500 border-gray-600 rounded" checked={event.isFeatured} onChange={(e) => setEvent({ ...event, isFeatured: e.target.checked })} />
                            <label className="text-sm">Evento em Destaque</label>
                        </div>

                        <div className="flex justify-center">
                            <button type="submit" className="flex items-center gap-2 px-6 py-3 text-white transition-all rounded-lg bg-primary hover:bg-blue-700 disabled:opacity-50" disabled={loading}>
                                {loading ? <FaSpinner className="animate-spin" /> : "Atualizar Evento"}
                            </button>
                        </div>
                    </form>
                </div>
                <br />
                <br />
                <br />
            </div>
        </>
    );
};

export default EditEventPage;
