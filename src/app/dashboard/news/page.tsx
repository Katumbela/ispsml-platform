/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import { FaSpinner, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { generateSlug } from "@/utils/slugfy";
import { newsService } from "@/services/news.service";
import { TextEditor } from "@/components/text-editor/text-editor";
// import InputDefault from "@/components/input-default/input";
import Image from "next/image";
import { News } from "@/infra/interfaces/news";
import InputDefault from "@/components/input/input";
import { fileToBase64 } from "@/utils/file-to-b64";

const NewsPage = () => {
    const [title, setTitle] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [content, setContent] = useState("");
    const [link, setLink] = useState("");
    const [slug, setSlug] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [loadingNews, setLoadingNews] = useState(false);
    const [newsList, setNewsList] = useState<News[]>([]);

    useEffect(() => {
        setLoadingNews(true);
        newsService.getAllNews().then((news) => {
            setNewsList(news);
            setLoadingNews(false);
        });
    }, []);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        try {
            let imageUrl = "";
            if (image) {
                imageUrl = await fileToBase64(image);
            }

            await newsService.createNews({
                title,
                shortDescription,
                content,
                postDate: new Date(),
                poster: "Instituto Superior São Martinho de Lima",
                link,
                slug,
                image: imageUrl,
            });
            setLoading(false);
            toast.success("Notícia adicionada com sucesso!");
        } catch (error: any) {
            setLoading(false);
            toast.error("Erro ao adicionar notícia! " + error.message);
        }
    };

    const handleDelete = async (id: string) => {
        setLoadingNews(true);
        try {
            await newsService.deleteNews(Number(id));
            setNewsList(newsList.filter((news) => news.id !== id));
            setLoadingNews(false);
            toast.success("Notícia deletada com sucesso!");
        } catch (error: any) {
            setLoadingNews(false);
            toast.error("Erro ao deletar notícia! " + error.message);
        }
    };

    useEffect(() => {
        setSlug(generateSlug(title));
    }, [title]);

    return (
        <div>
            <div className="h-20 mb-20 bg-gray-800" />

            <div className="container p-8 mx-auto bg-white rounded-lg shadow-md">
                <h1 className="mb-6 text-3xl font-bold text-gray-900">Criar Notícia</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <InputDefault label="Título" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    <InputDefault label="Descrição Curta" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} required />
                    <TextEditor editorContent={content} setEditorContent={setContent} />
                    <InputDefault label="Link" value={link} onChange={(e) => setLink(e.target.value)} required />
                    <div>
                        <label className="block font-semibold">Imagem</label>
                        <input type="file" accept="image/*" onChange={handleImageChange} className="mt-1" />
                        {imagePreview && <Image width={200} height={150} src={imagePreview} alt="Prévia" className="w-32 h-32 mt-2 rounded-md shadow" />}
                    </div>
                    <button type="submit" className="flex items-center justify-center w-full px-4 py-2 bg-blue-600 rounded-md text-back">
                        {loading ? <FaSpinner className="animate-spin" /> : "Adicionar Notícia"}
                    </button>
                </form>
                <h2 className="mt-10 text-2xl font-bold">Gerenciar Notícias</h2>
                <ul className="mt-4">
                    {loadingNews ? (
                        <FaSpinner className="animate-spin" />
                    ) : (
                        newsList.map((news) => (
                            <li key={news.id} className="flex items-center justify-between py-2 border-b">
                                <span className="text-gray-800">{news.title}</span>
                                <button onClick={() => handleDelete(news.id)} className="text-red-600 hover:text-red-800">
                                    <FaTrash />
                                </button>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
};

export default NewsPage;
