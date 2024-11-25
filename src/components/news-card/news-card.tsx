import Image from 'next/image';
import React from 'react';
import { AbreviateString } from '../../utils/abreviate-utils';
import { routes } from '@/infra/routes.vars';

interface NewsCardProps {
	title: string;
	shortDescription: string;
	content: string;
	postDate: string;
	poster: string;
	link: string;
	image: string;
	slug: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ slug, title, content, postDate, image }) => {
	return (
		<div className="px-1 2xl:px-2">
			<div className="w-full relative h-[24rem] 2xl:h-[45vh] overflow-hidden border shadow-lg">
				<div className="relative w-full overflow-hidden h-44 2xl:h-[25vh] imagem">
					<Image
						src={image}
						objectFit="cover"
						layout="fill"
						className="transition-all hover:scale-105"
						alt={title}
					/>
				</div>
				<div className="p-2">
					<h2 className="font-bold text-md 2xl:text-lg">{AbreviateString.abbreviate(title, 50)}</h2>

					<p
						className="mt-1 text-xs text-gray-400 2xl:text-md"
						dangerouslySetInnerHTML={{
							__html: AbreviateString.abbreviate(`${content}`, 140)
						}}
					/>
					<div className="absolute flex justify-between right-2 left-2 bottom-3">
						<a
							href={routes.VIEW_NEWS_ROUTE + '/' + slug}
							className="px-3 py-1 mt-auto text-xs font-bold uppercase transition-all border hover:underline hover:bg-primary/10 text-primary"
						>
							Leia mais
						</a>
						<span className="text-xs">{postDate}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsCard;
