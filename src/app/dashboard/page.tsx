/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import React, { useEffect, useState } from 'react';
import InputDefault from '../../components/input-default/input';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { uploadImage } from '@/utils/uploadImage';
import { generateSlug } from '@/utils/slugfy';
// import { News } from '@/infra/interfaces/news'; 
import newsService from '@/services/news.service';
import { TextEditor } from '@/components/text-editor/text-editor';
import { News } from '@/infra/interfaces/news';

const Dashboard = () => {
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');
  const [link, setLink] = useState('');
  const [slug, setSlug] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingn, setLoadingN] = useState(false);
  const [newses, setNewses] = useState<News[]>([]);

  useEffect(() => {
    setLoadingN(true);
    newsService.getAllNews().then((news) => {
      setNewses(news);
      setLoadingN(false);
    });
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {

      let imageUrl = '';
      if (image) {
        imageUrl = await uploadImage(image, 'departments');
      }

      await newsService.createNews({
        title,
        shortDescription,
        content,
        postDate: new Date(),
        poster: 'Instituto Superior São Martinho de Lima',
        link,
        slug,
        image: imageUrl,
      });
      setLoading(false);

      toast.success('Informação adicionada com sucesso!');
    } catch (error: any) {
      setLoading(false);
      toast.error('Erro ao adicionar informação! ' + error.message);
    }
  };

  const handleDelete = async (id: string) => {
    setLoadingN(true);
    try {
      await newsService.deleteNews(id);
      setNewses(newses.filter(news => news.id !== id));
      setLoadingN(false);
      toast.success('Informação deletada com sucesso!');
    } catch (error: any) {
      setLoadingN(false);
      toast.error('Erro ao deletar informação! ' + error.message);
    }
  };

  useEffect(() => {
    setSlug(generateSlug(title));
  }, [title]);

  return (
    <div className="container px-6 py-32 mx-auto text-white bg-primary-footer">
      <h1 className="mb-4 text-2xl font-bold">  Adicionar Informação</h1>
      <form onSubmit={handleSubmit}>
        <InputDefault label='Título' placeholder='Título' value={title} onChange={(e) => setTitle(e.target.value)} required={true} />

        <br />
        <InputDefault label='Descrição Curta' placeholder='Descrição Curta' value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} required={true} />
        <br />
        <TextEditor editorContent={content} setEditorContent={setContent} />
        <br />
        {/* <InputDefault label='Poster' placeholder='Poster' value={poster} onChange={(e) => setPoster(e.target.value)} required={true} /> */}
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
      <h2 className="mt-10 mb-4 text-2xl font-bold">Gerenciar Informações</h2>
      <ul>
        {
          loadingn ? <FaSpinner className="my-auto animate-spin" /> : (

            <>
              {newses.map(news => (
                <li key={news.id} className="mb-4">
                  <div className="flex justify-between">
                    <span>{news.title}</span>
                    <button
                      onClick={() => handleDelete(news.id)}
                      className="px-3 py-1 text-white bg-red-600 rounded hover:bg-red-700"
                    >
                      Deletar
                    </button>
                  </div>
                </li>
              ))}
            </>
          )
        }
      </ul>
    </div>
  );
};

export default Dashboard;