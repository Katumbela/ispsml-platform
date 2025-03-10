/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import InputDefault from "@/components/input-default/input";
import { FaSpinner, FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { generateSlug } from "@/utils/slugfy";
import DateSelect from "@/components/date-select/date-select";
import { eventsService } from "@/services/events.service";
import { fileToBase64 } from "@/utils/file-to-b64";
import { useRouter } from "next/navigation";
import { routes } from "@/infra/routes.vars";
import { AbreviateString } from "@/utils";
import { useQuery, useQueryClient } from "react-query";
import { uploadImage } from "@/utils/uploadImage";

const EventsDashboard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState<File | null>(null);
  const [isFeatured, setIsFeatured] = useState(false);
  const [slug, setSlug] = useState("");
  const [place, setPlace] = useState("");
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const queryClient = useQueryClient();
  const router = useRouter();

  const { data: events = [], isLoading } = useQuery("allEvents", () => eventsService.getAllEvents(), {
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    setSlug(generateSlug(title));
  }, [title]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      let imageUrlString = "";
      if (imageUrl) {
        imageUrlString = await uploadImage(imageUrl, 'events');
      }

      await eventsService.createEvent({
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

      toast.success("Evento adicionado com sucesso!");
      queryClient.invalidateQueries("allEvents");
      setShowForm(false);
    } catch (error: any) {
      toast.error("Erro ao adicionar evento! " + error.message);
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    try {
      setDeletingId(id);
      await eventsService.deleteEvent(id);
      toast.success("Evento deletado com sucesso!");
      queryClient.invalidateQueries("allEvents");
    } catch (error) {
      toast.error("Erro ao deletar evento!");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <div className="max-w-5xl pt-20 mx-auto">
        <div className="flex justify-between items-center mb-6">
          <button className="btn btn-secondary" onClick={() => router.back()}>
            Voltar
          </button>
          <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
            {showForm ? "Esconder Formulário" : "Adicionar Evento"}
          </button>
        </div>

        {showForm && (
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <h1 className="text-2xl font-bold mb-4">Adicionar Evento</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <InputDefault label="Título" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} required />
              <InputDefault label="Descrição" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} required />
              <InputDefault label="Descrição Longa" placeholder="Descrição Longa" value={longDescription} onChange={(e) => setLongDescription(e.target.value)} required />
              <DateSelect name="date" value={date} onChange={(date: any) => setDate(date)} placeholder="Data do evento" required />
              <InputDefault label="Tipo de Evento" placeholder="Ex: Palestra, Bootcamp..." value={category} onChange={(e) => setCategory(e.target.value)} />
              <InputDefault label="Local" placeholder="Local" value={place} onChange={(e) => setPlace(e.target.value)} required />

              <div>
                <label className="block mb-2">Imagem do Evento</label>
                <input type="file" className="w-full p-2 border border-gray-700 rounded bg-gray-900" onChange={(e) => setImageUrl(e.target.files ? e.target.files[0] : null)} required />
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" checked={isFeatured} onChange={(e) => setIsFeatured(e.target.checked)} />
                <label>Evento em Destaque</label>
              </div>

              <button type="submit" className="btn btn-primary w-full flex items-center justify-center" disabled={loading}>
                {loading ? <FaSpinner className="animate-spin" /> : "Adicionar Evento"}
              </button>
            </form>
          </div>
        )}

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Eventos</h2>
          {isLoading ? (
            <p>Carregando eventos...</p>
          ) : (
            <ul className="space-y-4">
              {events.map((event) => (
                <li key={event.id} className="flex justify-between items-center p-4 bg-gray-700 rounded-lg">
                  <div className="flex gap-1">
                    {
                      event.isFeatured && (
                        <span className="text-xs bg-primary text-white px-2 py-1 rounded-full">Destaque</span>
                      )
                    }
                    <span>{AbreviateString.abbreviate(event.title, 55)}</span>

                  </div>
                  <div className="flex gap-2">
                    <button className="btn btn-secondary" onClick={() => router.push(`${routes.EDIT_EVENT}/${event.id}`)}>
                      <FaEdit />
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(event?.id || "0")}
                      disabled={deletingId === event.id}
                    >
                      {deletingId === event.id ? <FaSpinner className="animate-spin" /> : <FaTrash />}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsDashboard;
