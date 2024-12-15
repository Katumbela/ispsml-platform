"use client"

import { useParams } from 'next/navigation';
import { events } from '@/infra/data/events';
import Image from 'next/image';
import Link from 'next/link';
import { AbreviateString } from '../../../utils/abreviate-utils';

export default function EventDetailPage() {
    const { slug } = useParams();
    const event = events.find(event => event.slug === slug);

    console.log(event);

    if (!event) {
        return <div className='grid items-center h-screen place-content-center'>{slug} Evento não encontrado</div>;
    }

    return (
        <div>
            <div className="pt-24 pb-6 bg-primary-footer">
                <div className="containers">
                    <h1 className="text-3xl font-semibold text-white">{event.title}</h1>
                    <p className="flex gap-2 mt-4 text-sm text-white">
                        <span className="my-auto">{event.date} às {event.time}</span>
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
                    {events.map((event, index) => (
                        <div key={index} className="flex items-start p-3 transition-all bg-gray-100 border-4 border-gray-100 shadow-sm 2xl:p-5 hover:border-primary">
                            <div className="flex items-center justify-center flex-shrink-0 w-20 h-20 text-lg font-semibold text-gray-700 bg-gray-300">
                                {new Date(event.date).toLocaleString('pt-br', { month: 'short' }).toUpperCase()}
                            </div>
                            <div className="flex-1 ml-4">
                                <h4 className="text-sm font-semibold text-gray-700">
                                    {AbreviateString.abbreviate(event.title, 30)}
                                </h4>
                                <p className="text-xs text-gray-600">{event.time} HRS.</p>
                                <Link href={`/events/${event.slug}`}>
                                    <button className="mt-1 text-xs text-blue-500 hover:underline">Conferência online</button>
                                </Link>
                            </div>
                            <Link href={`/events/${event.slug}`}>
                                <button className="ml-4 text-sm text-pink-500 hover:underline">Ver evento</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}