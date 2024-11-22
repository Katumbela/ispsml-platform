import Image from 'next/image';
import React from 'react';
import { AbreviateString } from '../../utils/abreviate-utils';

interface NewsCardProps {
	title: string;
	shortDescription: string;
	longDescription: string;
	postDate: string;
	poster: string;
	link: string;
	image: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, longDescription, postDate, link, image }) => {
	return (
		<div className="w-[14.5rem] relative h-[24rem] overflow-hidden border shadow-lg">
			<div className="relative w-full overflow-hidden h-44 imagem">
				<Image
					src={image}
					objectFit="cover"
					layout="fill"
					className="transition-all hover:scale-105"
					alt={title}
				/>
			</div>
			<div className="p-2">
				<h2 className="font-bold text-md">{AbreviateString.abbreviate(title, 50)}</h2>

				<p className="mt-1 text-xs text-gray-400">{AbreviateString.abbreviate(longDescription, 120)}</p>
				<div className="absolute flex justify-between right-2 left-2 bottom-3">
					<a
						href={link}
						className="px-3 py-1 mt-auto text-xs font-bold uppercase transition-all border hover:underline hover:bg-primary/10 text-primary"
					>
						Leia mais
					</a>
					<span className="text-xs">{postDate}</span>
				</div>
			</div>
		</div>
	);
};

export default NewsCard;
