/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateMetadata } from '@/infra/metadata'; 
import { getDepartments } from '@/services/dep.service';
import EditDepartmentPage from './edit-dep-page';

export const metadata = generateMetadata({
	title: 'Sobre Nossa Instituição | ISPSML',
	description: '',
});

export async function generateStaticParams() {
	const deps = await getDepartments();
	return deps.map((dep) => ({ id: dep.id }));
}

export default function Page({ params }: any) {
	return <EditDepartmentPage id={Number(params.id) || 0} />;
}
