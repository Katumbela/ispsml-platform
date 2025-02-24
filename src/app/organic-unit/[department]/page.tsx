/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateMetadata } from '@/infra/metadata';
import CSADepartment from './client-dep';
import { getDepartments } from '@/services/dep.service';

export const metadata = generateMetadata({
	title: 'Sobre Nossa Instituição | ISPSML',
	description: '',
});

export async function generateStaticParams() {
	const deps = await getDepartments();
	return deps.map((dep) => ({ department: dep.slug }));
}

export default function Page({ params }: any) {
	return <CSADepartment slug={params.department || ""} />;
}
