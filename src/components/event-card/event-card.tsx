import { Event } from '@/infra/interfaces/events.interface';
import { routes } from '@/infra/routes.vars';
import { AbreviateString, DateUtils } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa6';

export default function EventCard({ data }: { data: Event }) {
    return (
        <div onClick={() => window.location.href = `${routes.ALL_EVENT}/${data.slug}`} className=" bg-white sm:w-[20rem] w-full cursor-pointer shadow-md group">
            <div className="2xl:w-[20rem] w-full overflow-hidden relative h-[12rem] bg-gray-300 ">
                <Image src={data.imageUrl} alt={data.title} className=" group-hover:scale-[1.07] transition-all" layout='fill' objectFit='cover' />
            </div>
            <div className="p-2">
                <h3 className="mt-2 text-lg font-semibold">{AbreviateString.abbreviate(data.title, 50)}</h3>
                <p className="mt-1 text-sm text-gray-600">{AbreviateString.abbreviate(data.description, 45)}</p>
                <p className="mt-2 text-xs text-gray-600 flex gap-2"><FaClock className='text-xs text-primary' /> {DateUtils.getDateTime(data.date)}</p>
                <br />
                <Link href={`${routes.ALL_EVENT}/${data.slug}`} className='mt-10'>
                    <span className="mt-2 text-blue-500 hover:underline">Ver evento</span>
                </Link>
            </div>
        </div>
    );
}

export function EventCardSkeleton() {
    return (
        <div className="p-4 sm:w-[20rem] w-full bg-gray-200 rounded shadow-md animate-pulse">
            <div className="w-full h-48 bg-gray-300 rounded"></div>
            <div className="w-3/4 h-6 mt-2 bg-gray-300 rounded"></div>
            <div className="w-1/2 h-4 mt-1 bg-gray-300 rounded"></div>
            <div className="w-1/4 h-4 mt-1 bg-gray-300 rounded"></div>
        </div>
    );
}
