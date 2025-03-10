/* eslint-disable @typescript-eslint/no-explicit-any */
import CSADepartment from './client-dep';
import { getDepartmentBySlug, getDepartments } from '@/services/dep.service';

export async function generateMetadata({ params }: any) {
	const news = await getDepartmentBySlug(params.slug);
	return {
		title: `${news?.name} | ISPSML`,
		description: news?.description,
		keywords: "University, alugar, comprar, venda, apartamentos, casas, ISPSML University, Angola, Portugal, imobiliária, contact, ISPSML, Instituto Superior São Martinho de Lima, support, inquiries",
		authors: [{ name: "ISPSML University, João Afonso Katombela", url: "https://ispsml.ao" }],
		robots: "index, follow",
		metadataBase: new URL("https://ispsml.ao"),
		alternates: {
			canonical: "https://ispsml.ao",
		},
		openGraph: {
			title: news?.name,
			description: news?.description,
			url: "https://ispsml.ao",
			siteName: "ISPSML University",
			images: [
				{
					url: news?.department_cover || "https://github.com/Katumbela/my_images/blob/main/school15.jpg?raw=true",
					width: 1200,
					height: 630,
					alt: news?.name,
				},
			],
			type: "website",
			locale: "pt_PT",
		},
		twitter: {
			card: "summary_large_image",
			title: news?.name,
			description: news?.description,
			images: [news?.department_cover || "https://github.com/Katumbela/my_images/blob/main/school15.jpg?raw=true"],
		},
		icons: {
			icon: "../app/favicon.ico",
			apple: "../app/favicon.ico",
			shortcut: "../app/favicon.ico",
		},
	};
}
export async function generateStaticParams() {
	const deps = await getDepartments();
	return deps?.map((dep) => ({ department: dep.slug }));
}

export default function Page({ params }: any) {
	return <CSADepartment slug={params.department || ""} />;
}
