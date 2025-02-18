"use client"

import NewsCard from "@/components/news-card/news-card";
import { newsData } from "@/infra/data/newsData";

export default function NewsPage() {
    return (
        <div>
            <div className="pt-24 pb-6 bg-primary-footer">
                            <div className="containers">
                                <h1 className="text-3xl font-semibold text-white">Acompanhe as notícias mais recentes</h1>
                                <p className="flex gap-2 mt-4 text-sm text-white">
                                    {' '}
                                    <span className="my-auto">Instituto Superior Politénico São Martinho de Lima</span>
                                </p>
                            </div>
                        </div>

            <br />
            <section className="py-10 view-more ">
                <div className="containers">
                    <div>
                        <h2 className="text-2xl font-semibold">Notícias Recentes </h2>
                    </div>
                    <br />
                    <br />
                    <div className="grid grid-cols-4 gap-4 2xl:grid-cols-6">
                        {newsData
                            .map((news, index) => (
                                <NewsCard
                                    key={index}
                                    title={news.title}
                                    shortDescription={news.shortDescription}
                                    postDate={news.postDate}
                                    poster={news.poster}
                                    content={news.content}
                                    link={news.link}
                                    slug={news.slug}
                                    image={news.image}
                                />
                            ))}
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    
                </div>
            </section>
        </div>
    )
}