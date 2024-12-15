/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import React, { useEffect, useState } from 'react';
import InputDefault from '../../components/input-default/input';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import axios from 'axios';
import { uploadImage } from '@/utils/uploadImage';
import { generateSlug } from '@/utils/slugfy';

const Dashboard = () => {
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');
  const [postDate, setPostDate] = useState<Date | null>(new Date());
  const [poster, setPoster] = useState('');
  const [link, setLink] = useState('');
  const [slug, setSlug] = useState('');
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

      await axios.post('/api/news', {
        title,
        shortDescription,
        content,
        postDate,
        poster,
        link,
        slug,
        image: imageUrl,
      });
      setLoading(false);
      
      toast.success('Informação adicionada com sucesso!');
    } catch (error: any) {
      setLoading(false);
      toast.error('Erro ao adicionar informação! '+ error.message);
    }
  };

  useEffect(() => {
    setSlug(generateSlug(title));
}, [title]);

  return (
    <div className="container px-6 py-32 mx-auto text-white bg-primary-footer">
      <h1 className="mb-4 text-2xl font-bold">Adicionar Informação</h1>
      <form onSubmit={handleSubmit}>
        <InputDefault label='Título' placeholder='Título' value={title} onChange={(e) => setTitle(e.target.value)} required={true} />
        <InputDefault label='Descrição Curta' placeholder='Descrição Curta' value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} required={true} />
        <InputDefault label='Conteúdo' placeholder='Conteúdo' value={content} onChange={(e) => setContent(e.target.value)} required={true} />
        <InputDefault label='Poster' placeholder='Poster' value={poster} onChange={(e) => setPoster(e.target.value)} required={true} />
        <InputDefault label='Link' placeholder='Link' value={link} onChange={(e) => setLink(e.target.value)} required={true} />
        <InputDefault label='Slug' disabled placeholder='Slug' value={slug} onChange={(e) => setSlug(e.target.value)} required={true} />
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold" htmlFor="image">Imagem</label>
          <input type="file" id="image" onChange={(e) => setImage(e.target.files?.[0] || null)} required className="w-full px-3 py-2 leading-tight text-black text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="flex gap-2 px-3 py-3 mt-5 text-black uppercase transition-all bg-white border-2 border-white hover:bg-transparent hover:text-white">
            {loading ? <FaSpinner className="my-auto animate-spin" /> : (
              <>
                <span className="my-auto">Adicionar Informação</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;