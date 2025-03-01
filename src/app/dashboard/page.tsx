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
import { newsService } from '@/services/news.service';
import { TextEditor } from '@/components/text-editor/text-editor';
import { News } from '@/infra/interfaces/news';
import { useRouter } from 'next/navigation';
import { routes } from '@/infra/routes.vars';
import { AbreviateString } from '@/utils';
import Image from 'next/image';

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
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setLoadingN(true);
    newsService.getAllNews().then((news: News[]) => {
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
      await newsService.deleteNews(Number(id));
      setNewses(newses.filter(news => news.id !== id));
      setLoadingN(false);
      toast.success('Informação deletada com sucesso!');
    } catch (error: any) {
      setLoadingN(false);
      toast.error('Erro ao deletar informação! ' + error.message);
    }
  };

  const handleEdit = (id: string) => {
    router.push(`/dashboard/edit-news?id=${id}`);
  };

  useEffect(() => {
    setSlug(generateSlug(title));
  }, [title]);


  const router = useRouter()
  return (
    <div className=" grid grid-cols-2  gap-10 px-6 py-32 mx-auto text-white bg-primary-footer">
      <div className="col-span-2 px-10">
        <div className="flex gap-4 mb-4">
          <button onClick={() => router.push(routes.MANAGE_DEPARTMENTS)} className="px-3 py-2 text-black bg-white border-2 border-white hover:bg-transparent hover:text-white">
            Gerenciar Departamentos
          </button>
          <button onClick={() => router.push(routes.MANAGE_ROLES)} className="px-3 py-2 text-black bg-white border-2 border-white hover:bg-transparent hover:text-white">
            Gerenciar Membros
          </button>
          <button onClick={() => router.push(routes.MANAGE_EVENT)} className="px-3 py-2 text-black bg-white border-2 border-white hover:bg-transparent hover:text-white">
            Gerenciar Eventos
          </button>
          <button onClick={() => setShowForm(!showForm)} className="px-3 py-2 text-black bg-white border-2 border-white hover:bg-transparent hover:text-white">
            {showForm ? 'Esconder Formulário' : 'Adicionar Notícia'}
          </button>
        </div>
      </div>
      {showForm && (
        <div className="px-10">
          <h1 className="mb-4 text-2xl font-bold">Adicionar Notícia</h1>
          <form onSubmit={handleSubmit}>
            <InputDefault label='Título da notícia' placeholder='Título' value={title} onChange={(e) => setTitle(e.target.value)} required={true} />
            <br />
            <InputDefault label='Descrição Curta' placeholder='Descrição Curta' value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} required={true} />
            <br />
            <span className="text-white mb-2">Descrição geral</span>
            <TextEditor editorContent={content} setEditorContent={setContent} />
            <br />
            <div className="mb-4 mt-6">
              <label className="block mb-2 text-sm font-bold" htmlFor="image">Capa da Informação</label>
              <input type="file" id="image" onChange={(e) => setImage(e.target.files?.[0] || null)} required className="w-full px-3 py-2 leading-tight text-bblack text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
            </div>
            <div className="flex justify-start">
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
      )}
      <div className=" px-10">
        <h2 className="mt-10 mb-4 text-2xl font-bold">Gerenciar Notícias</h2>
        <ul>
          {loadingn ? <FaSpinner className="my-auto animate-spin" /> : (
            <>
              {newses.map(news => (
                <li key={news.id} className="mb-4">
                  <div className="flex flex-col border border-white/30 p-3 rounded justify-start">
                    <div className="flex mb-2 gap-4">
                      <Image src={news.image} width={50} height={50} alt='' className='object-contain h-8' />
                      <span>{AbreviateString.abbreviate(news.title, 40)}</span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(news.id)}
                        className="px-3 py-1 text-white bg-blue-600 rounded hover:bg-blue-700"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleDelete(news.id)}
                        className="px-3 py-1 text-white bg-red-600 rounded hover:bg-red-700"
                      >
                        Deletar
                      </button>
                      <button
                        onClick={() => window.location.href = routes.NEWS_ROUTE + "/" + news.slug}
                        className="px-3 py-1 text-primary hover:text-white bg-white rounded hover:bg-primary"
                      >
                        Ver
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;