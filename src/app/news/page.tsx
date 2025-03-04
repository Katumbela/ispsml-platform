"use client"

import NewsCard from "@/components/news-card/news-card";
import { NewsCardSkeleton } from "@/components/news-card/news-card";
import { newsService } from "@/services/news.service";
import { useQuery } from "react-query";

export default function NewsPage() {

    const { data: newses, isLoading: isLoading } = useQuery('allNews', () => newsService.getAllNews(), {
        refetchOnWindowFocus: false
    });
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
                        {isLoading ? (
                            Array.from({ length: 6 }).map((_, index) => <NewsCardSkeleton key={index} />)
                        ) : newses && newses?.length > 0 ? (
                            newses.map((news, index) => (
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
                            ))
                        ) : (
                            <p className="text-center col-span-4 2xl:col-span-6">Não há nenhuma notícia registrada ainda.</p>
                        )}
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