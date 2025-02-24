/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateMetadata } from '@/infra/metadata';
import RoleProfileClient from './client-page';

export const metadata = generateMetadata({
	title: 'Sobre Nossa Instituição | ISPSML',
	description: '',
});

export async function generateStaticParams() {
	return [
		{ who: 'promotor' },
		{ who: 'president' },
	];
}

export default function Page({ params }: any) {
	return <RoleProfileClient who={params.who || ""} />;
}
