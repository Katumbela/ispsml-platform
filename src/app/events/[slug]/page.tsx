"use client"

import { useParams } from 'next/navigation';
// import { events } from '@/infra/data${routes.ALL_EVENT}';
import Image from 'next/image';
import Link from 'next/link';
import { AbreviateString } from '../../../utils/abreviate-utils';
import { DateUtils } from '@/utils';
import { useEffect, useState } from 'react';
import { Event } from '@/infra/interfaces/events.interface';
// import Head from 'next/head';
import Custom404 from '@/app/404/page';
import { eventsService } from '@/services/events.service';
import { routes } from '@/infra/routes.vars';

export default function EventDetailPage() {
    const { slug } = useParams() as { slug: string };
    // const event = events.find(event => event.slug === slug);
    const [event, setEvents] = useState<Event | null>(null);
    const [allEvent, setAllEvents] = useState<Event[] | []>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        eventsService.getEventBySlug(slug ? String(slug) : "").then((events) => {
            setEvents(events);
            setLoading(false);
        });
        eventsService.getAllEvents().then((events) => {
            setAllEvents(events);
            setLoading(false);
        });
    }, [slug]);

    if (loading) {
        return (
            <div className="items-center py-[15vh] h-full containers place-content-center">
                <div className="w-full h-32 mb-2 bg-gray-300 rounded"></div>
                <br />
                <div className="flex gap-8">
                    <div className="w-8/12 animate-pulse">
                        <div className="w-full h-32 mb-2 bg-gray-300 rounded"></div>
                        <div className="h-[10rem] w-full mb-4 bg-gray-300 rounded"></div>
                        <div className="w-full h-10 mb-2 bg-gray-300 rounded"></div>
                        <div className="w-full h-10 mb-2 bg-gray-300 rounded"></div>
                        <div className="w-full h-10 mb-2 bg-gray-300 rounded"></div>
                        <div className="h-4 mb-2 bg-gray-300 rounded w-28"></div>
                    </div>
                    <div className="w-4/12 animate-pulse">
                        {
                            Array.from({ length: 3 }).map((_, index) => (
                                <div key={index} className="flex items-start p-1 transition-all bg-gray-100 border-4 border-gray-100 shadow-sm 2xl:p-5 hover:border-primary">
                                    <div className="w-full h-24 bg-gray-300 rounded"></div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }

    if (!event) {
        return <Custom404 />;
    }

    document.title = `${event.title} | ISPSML`;

    return (
        <>
            <head>
                <title>{event.title} | ISPSML</title>
                <meta name="description" content={event.description} />
                <meta property="og:title" content={event.title} />
                <meta property="og:description" content={event.description} />
                <meta property="og:image" content={event.imageUrl} />
                <meta property="og:url" content={`https://ispsml.ao${routes.ALL_EVENT}/${event.slug}`} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={event.title} />
                <meta name="twitter:description" content={event.description} />
                <meta name="twitter:image" content={event.imageUrl} />
            </head>
            <div>
                <div className="pt-24 pb-6 bg-primary-footer">
                    <div className="containers">
                        <h1 className="text-3xl font-semibold text-white">{event.title}</h1>

                        {/* Breadcrumb navigation */}
                        <nav className="text-sm text-white my-3">
                            <Link href={`${routes.ALL_EVENT}`} className="hover:underline">Eventos</Link> / <span>{event.title}</span>
                        </nav>

                        <p className="flex gap-2 mt-4 text-sm text-white">
                            <span className="my-auto">{DateUtils.getDateTimePt(event.date)}</span>
                        </p>
                    </div>
                </div>

                <br />
                <section className="flex gap-6 py-10 containers view-more">
                    <div className="w-8/12">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-500">Detalhes do Evento</h2>
                        </div>
                        <br />
                        <h2 className="title">{event.title}</h2>
                        <p>{event.description}</p>
                        <br />
                        <p>{event.longDescription}</p>
                        <br />
                        <p>Local: {event.place}</p>
                        <br />
                        <Image height={1000} width={1000} src={event.imageUrl} alt={event.title} />
                        <br />
                        <span className="px-3 py-1 text-xs font-semibold text-gray-500 bg-white">
                            {event.category}
                        </span>
                        <br />
                        <button className="px-4 py-2 mt-4 font-medium text-white transition-all bg-primary hover:bg-primary-dark">
                            QUERO ME REGISTRAR
                        </button>
                    </div>
                    <div className="w-4/12">
                        <h3 className="text-lg font-semibold text-gray-700">EVENTOS ANTERIORES</h3>
                        {allEvent.filter((e) => e.slug !== slug).map((event, index) => (
                            <div key={index} className="flex items-start p-3 transition-all bg-gray-100 border-4 border-gray-100 shadow-sm 2xl:p-5 hover:border-primary">
                                <div className="flex items-center justify-center flex-shrink-0 w-20 h-20 text-lg font-semibold text-gray-700 bg-gray-300">
                                    {new Date(event.date).toLocaleString('pt-br', { month: 'short' }).toUpperCase()}
                                </div>
                                <div className="flex-1 ml-4">
                                    <h4 className="text-sm font-semibold text-gray-700">
                                        {AbreviateString.abbreviate(event.title, 30)}
                                    </h4>
                                    <p className="text-xs text-gray-600">{DateUtils.getDateTime(event.date)} HRS.</p>
                                    <Link href={`${routes.ALL_EVENT}/${event.slug}`}>
                                        <button className="mt-1 text-xs text-blue-500 hover:underline">Conferência online</button>
                                    </Link>
                                </div>
                                <Link href={`${routes.ALL_EVENT}/${event.slug}`}>
                                    <button className="ml-4 text-sm text-pink-500 hover:underline">Ver evento</button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}