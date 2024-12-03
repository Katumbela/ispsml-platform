import React from 'react';
import { IconType } from 'react-icons';
import cn from "classnames"

export interface CardData {
	iconType: IconType;
	title: string;
	link?: string;
}

export interface IACard {
	card: CardData;
	type?: 'admission' | 'undergraduate' | 'graduate';
}

export default function AdmissionsCard({ card, type }: IACard) {
	return (
		<div className={cn("grid items-center cursor-pointer p-5 w-[16rem] h-[17rem] ", {"bg-primary hover:bg-primary-light": !type, "bg-primary-footer hover:bg-primary-dark": type == "undergraduate"  })}>
			<div className="text-center">
				<div className="text-4xl text-white">
					{React.createElement(card.iconType, { className: 'text-7xl font-medium mx-auto' })}
				</div>
				<h3 className="text-white text-2xl mt-2">{card.title}</h3>
			</div>
		</div>
	);
}
