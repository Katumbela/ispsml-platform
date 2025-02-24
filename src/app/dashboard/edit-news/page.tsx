/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import InputDefault from '../../../components/input-default/input';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { uploadImage } from '@/utils/uploadImage';
import { generateSlug } from '@/utils/slugfy';
import { newsService } from '@/services/news.service';
import { TextEditor } from '@/components/text-editor/text-editor';
import { News } from '@/infra/interfaces/news';

const EditNews = () => {
    const [title, setTitle] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [content, setContent] = useState('');
    const [link, setLink] = useState('');
    const [slug, setSlug] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [loadingN, setLoadingN] = useState(false);
    const [news, setNews] = useState<News | null>(null);

    const router = useRouter();
    const searchParams = useSearchParams();
    const newsId = searchParams?.get('id');

    useEffect(() => {
        if (newsId) {
            setLoadingN(true);
            newsService.getNewsById(newsId).then((news: News | null) => {
                if (news) {
                    setNews(news);
                    setTitle(news.title);
                    setShortDescription(news.shortDescription);
                    setContent(news.content);
                    setLink(news.link);
                    setSlug(news.slug);
                }
                setLoadingN(false);
            });
        }
    }, [newsId]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        try {
            let imageUrl = news?.image || '';
            if (image) {
                imageUrl = await uploadImage(image, 'departments');
            }

            await newsService.updateNews(Number(newsId) || 0, {
                title,
                // shortDescription,
                // content,
                // postDate: new Date(),
                // poster: 'Instituto Superior São Martinho de Lima',
                // link,
                // slug,
                // image: imageUrl,
            });
            setLoading(false);

            toast.success('Informação atualizada com sucesso!');
            router.push('/dashboard');
        } catch (error: any) {
            setLoading(false);
            toast.error('Erro ao atualizar informação! ' + error.message);
        }
    };

    useEffect(() => {
        setSlug(generateSlug(title));
    }, [title]);

    return (
        <>
            <head>
                <title>Editar Notícia | ISPSML</title>
                <meta name="description" content="Editar Notícia" />
            </head>

            <div className="px-10 py-32 mx-auto text-white bg-primary-footer">
                <button className=' my-3 hover:underline' onClick={() => router.back()}>Voltar</button>
                <h1 className="mb-4 text-2xl font-bold">Editar Notícia</h1>
                {loadingN ? (
                    <FaSpinner className="my-auto animate-spin" />
                ) : (
                    <form onSubmit={handleSubmit} className='lg:max-w-4xl'>
                        <InputDefault label='Título da notícia' placeholder='Título' value={title} onChange={(e) => setTitle(e.target.value)} required={true} />
                        <br />
                        <InputDefault label='Descrição Curta' placeholder='Descrição Curta' value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} required={true} />
                        <br />
                        <span className="text-white mb-2">Descrição geral</span>
                        <TextEditor editorContent={content} setEditorContent={setContent} />
                        <br />
                        <div className="mb-4 mt-6">
                            <label className="block mb-2 text-sm font-bold" htmlFor="image">Capa da Informação</label>
                            <input type="file" id="image" onChange={(e) => setImage(e.target.files?.[0] || null)} className="w-full px-3 py-2 leading-tight text-black text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="flex justify-start">
                            <button type="submit" className="flex gap-2 px-3 py-3 mt-5 text-black uppercase transition-all bg-white border-2 border-white hover:bg-transparent hover:text-white">
                                {loading ? <FaSpinner className="my-auto animate-spin" /> : (
                                    <>
                                        <span className="my-auto">Atualizar Informação</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </>
    );
};

export default EditNews;
