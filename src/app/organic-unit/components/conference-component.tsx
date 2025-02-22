
import React, { useEffect, useState } from 'react';
// import { events } from '@/infra/data/events';
import Link from 'next/link';
import { Event } from '@/infra/interfaces/events.interface';
import { AbreviateString, DateUtils } from '@/utils';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import eventsService from '@/services/events.service';
import { routes } from '@/infra/routes.vars';

const ConferenceComponent = () => {
  const [events, setEvents] = useState<Event[] | []>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    eventsService.getAllEvents().then((events) => {
      setEvents(events);
      setLoading(false);
    });
  }, []);

  const featuredEvent = events.find(event => event.isFeatured);
  const previousEvents = events.filter(event => !event.isFeatured);

  return (
    <section className="px-4 py-8 mt-[10vh] mx-auto containers">
      <h2 className="max-w-3xl mb-4 text-xl font-semibold sm:text-3xl text md:text-4xl">
        Participe dos nossos eventos académico
      </h2>
      {/* <p className="mb-8 text-gray-600 text">
        NOSSO CORPO DOCENTE COMPARTILHARÁ INFORMAÇÕES VALIOSAS E TEMAS ATUAIS
      </p> */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Featured Conference */}
        {loading ? (
          <Skeleton height={400} />
        ) : (
          featuredEvent && (
            <div className="relative grid items-center p-5 overflow-hidden text-white sm:p-10 place-content-start md:col-span-1" style={{ background: `linear-gradient(90deg, #00000093, #000000AF), url(${featuredEvent.imageUrl}) center center`, backgroundSize: "cover" }}>
              <div className='w-full '>
                <div className="top-0 left-0 flex gap-6 text-lg md:text-2xl sm:text-xl ">
                  <p className="flex flex-col font-semibold ">{new Date(featuredEvent.date).getDate()} <span className=''>{DateUtils.getAbbreviatedMonth(new Date(featuredEvent.date))}</span></p>
                  <p className="flex flex-col ">{DateUtils.getTime(featuredEvent.date)} <span className=''>HRS</span></p>
                </div>
                {
                  featuredEvent.category && (
                    <span className="px-3 py-1 text-xs font-semibold text-gray-500 bg-white top-16 left-4">
                      {featuredEvent.category}
                    </span>
                  )
                }
                <div className="mt-12">
                  <h3 className="mb-4 text-xl font-semibold sm:text-2xl">
                    {featuredEvent.title}
                  </h3>
                  <p className="mb-6 text-xs sm:text-base">
                    {AbreviateString.abbreviate(featuredEvent.description, 100)}
                  </p>
                  <p className="mb-6 text-xs sm:text-base">
                    Local: {featuredEvent.place}
                  </p>
                  <Link href={`/events/${featuredEvent.slug}`}>
                    <button className="px-4 py-2 font-medium text-white transition-all bg-primary hover:bg-primary-dark">
                      QUERO ME REGISTRAR
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )
        )}

        {/* Previous Events */}
        <div className="space-y-4">
          <h3 className="text-base font-semibold text-gray-700 sm:text-lg">EVENTOS ANTERIORES</h3>
          {loading ? (
            <Skeleton count={3} height={100} />
          ) : (
            previousEvents.map((event, index) => (
              <div key={index} className="flex items-start p-3 transition-all bg-gray-100 border-4 border-gray-100 shadow-sm 2xl:p-5 hover:border-primary">
                <div className="flex items-center justify-center flex-shrink-0 w-20 h-20 text-lg font-semibold text-gray-700 bg-gray-300">
                  {DateUtils.getAbbreviatedMonth(new Date(event.date))}
                </div>
                <div className="flex-1 ml-4">
                  <h4 className="text-sm font-semibold text-gray-700">
                    {event.title}
                  </h4>
                  <p className="text-xs text-gray-600">{DateUtils.getTime(event.date)} HRS.</p>
                  <p className="text-xs text-gray-600">Local: {event.place}</p>
                  <Link href={`/events/${event.slug}`}>
                    <button className="mt-1 text-xs text-blue-500 hover:underline">Conferência online</button>
                  </Link>
                </div>
                <Link href={`/events/${event.slug}`}>
                  <button className="ml-4 text-sm text-pink-500 hover:underline">Ver evento</button>
                </Link>
              </div>
            ))
          )}
          <br />
          <div className="w-full">
            <button onClick={() => window.location.href = routes.ALL_EVENT} className="w-full  px-4 py-2 mt-4 font-medium text-gray-700 border border-gray-500 hover:bg-gray-200">
              Ver mais eventos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceComponent;
