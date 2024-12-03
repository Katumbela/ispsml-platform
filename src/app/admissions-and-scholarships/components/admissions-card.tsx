import React from 'react';
import { IconType } from 'react-icons';

export interface CardData {
	iconType: IconType;
	title: string;
	link?: string;
}

export interface IACard {
	card: CardData;
}

export default function AdmissionsCard({ card }: IACard) {
	return (
		<div className="grid items-center cursor-pointer p-5 w-[16rem] h-[17rem] bg-primary hover:bg-primary-light">
			<div className="text-center">
				<div className="text-4xl text-white">
					{React.createElement(card.iconType, { className: 'text-7xl font-medium mx-auto' })}
				</div>
				<h3 className="text-white 2xl:text-3xl text-2xl mt-2">{card.title}</h3>
			</div>
		</div>
	);
}
