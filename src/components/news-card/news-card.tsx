import Image from 'next/image';
import React from 'react';
import { AbreviateString } from '../../utils/abreviate-utils';
import { routes } from '@/infra/routes.vars';
import { DateUtils } from '@/utils';
import { env } from '@/infra/env';

interface NewsCardProps {
	title: string;
	shortDescription: string;
	content: string;
	postDate: Date;
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
						placeholder='blur'
						blurDataURL={env.BLUR_IMAGE}
						layout="fill"
						className="transition-all hover:scale-105"
						alt={title}
					/>
				</div>
				<div className="p-2">
					<h2 className="font-semibold text-md 2xl:text-lg">{AbreviateString.abbreviate(title, 50)}</h2>
					<p
						className="mt-1 text-xs text-gray-400 2xl:text-md"
						dangerouslySetInnerHTML={{
							__html: AbreviateString.abbreviate(`${content}`, 140)
						}}
					/>
					<div className="absolute flex justify-between right-2 left-2 bottom-3">
						<a
							href={routes.VIEW_NEWS_ROUTE + '/' + slug}
							className="px-3 py-1 mt-auto text-xs font-semibold uppercase transition-all border hover:bg-primary/10 text-primary"
						>
							Leia mais
						</a>
						<span className="text-xs">{DateUtils.getDatePt(postDate)}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

const NewsCardSkeleton: React.FC = () => {
	return (
		<div className="px-1 2xl:px-2">
			<div className="w-full relative h-[24rem] 2xl:h-[45vh] overflow-hidden border shadow-lg animate-pulse">
				<div className="relative w-full overflow-hidden h-44 2xl:h-[25vh] bg-gray-300"></div>
				<div className="p-2">
					<div className="h-6 bg-gray-300 rounded w-3/4"></div>
					<div className="mt-1 h-4 bg-gray-300 rounded w-full"></div>
					<div className="mt-1 h-4 bg-gray-300 rounded w-full"></div>
					<div className="absolute flex justify-between right-2 left-2 bottom-3">
						<div className="px-3 py-1 mt-auto h-6 bg-gray-300 rounded w-20"></div>
						<div className="h-6 bg-gray-300 rounded w-16"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsCard;
export { NewsCardSkeleton };
