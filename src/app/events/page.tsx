"use client"

import EventCard, { EventCardSkeleton } from "@/components/event-card/event-card";
import { eventsService } from "@/services/events.service";
import { useQuery } from "react-query";

export default function EventsPage() {

    const { data: events = [], isLoading: loading } = useQuery('allEvents', () => eventsService.getAllEvents(), {
        refetchOnWindowFocus: false
    });

    return (
        <div>
            <div className="pt-24 pb-6 bg-primary-footer">
                <div className="containers">
                    <h1 className="text-3xl font-semibold text-white">Acompanhe os eventos mais recentes</h1>
                    <p className="flex gap-2 mt-4 text-sm text-white">
                        {' '}
                        <span className="my-auto">Instituto Superior Politénico São Martinho de Lima</span>
                    </p>
                </div>
            </div>

            <br />
            <section className="py-10 view-more">
                <div className="containers">
                    <div>
                        <h2 className="text-2xl font-semibold">Eventos Recentes</h2>
                    </div>
                    <br />
                    <br />
                    <div className="grid grid-cols-4 gap-4 lg:flex 2xl:flex-wrap">
                        {loading ? (
                            Array.from({ length: 6 }).map((_, index) => <EventCardSkeleton key={index} />)
                        ) : events.length > 0 ? (
                            events.map((event, index) => (
                                <EventCard
                                    key={index}
                                    data={event}
                                />
                            ))
                        ) : (
                            <p className="text-center col-span-4 2xl:col-span-6">Não há nenhum evento registrado ainda.</p>
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
