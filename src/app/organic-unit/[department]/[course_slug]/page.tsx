/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import CourseDetailsPage from './course-details-slug.tsx';
import { getDepartments } from '@/services/dep.service';
import { getAllCourses, getCourseBySlug } from '@/services/course.service';

export async function generateMetadata({ params }: any) {
	const course = await getCourseBySlug(params.course_slug);
	return {
		title: `Curso de ${course?.course || "Visualizar curso"} | ISPSML`,
		description: course?.short_detail,
		keywords: "University, alugar, comprar, venda, apartamentos, casas, ISPSML University, Angola, Portugal, imobiliária, contact, ISPSML, Instituto Superior São Martinho de Lima, support, inquiries",
		authors: [{ name: "ISPSML University, João Afonso Katombela", url: "https://ispsml.ao" }],
		robots: "index, follow",
		metadataBase: new URL("https://ispsml.ao"),
		alternates: {
			canonical: "https://ispsml.ao",
		},
		openGraph: {
			title: course?.course,
			description: course?.short_detail,
			url: "https://ispsml.ao",
			siteName: "ISPSML University",
			images: [
				{
					url: "https://github.com/Katumbela/my_images/blob/main/school15.jpg?raw=true",
					width: 1200,
					height: 630,
					alt: course?.course,
				},
			],
			type: "website",
			locale: "pt_PT",
		},
		twitter: {
			card: "summary_large_image",
			title: course?.course,
			description: course?.short_detail,
			images: ["https://github.com/Katumbela/my_images/blob/main/school15.jpg?raw=true"],
		},
		icons: {
			icon: "../app/favicon.ico",
			apple: "../app/favicon.ico",
			shortcut: "../app/favicon.ico",
		},

	};
}


export async function generateStaticParams() {


	const departments = await getDepartments();

	const courses = await getAllCourses();

	const paths = [];

	for (const dep of departments) {
		const depCourses = courses.filter(course => Number(course.departmentId) === Number(dep?.id));
		for (const course of depCourses) {
			paths.push({
				department: dep.slug,
				course_slug: course.slug,
			});
		}
	}

	return paths;
}

export default function Page({ params }: any) {
	return <CourseDetailsPage department={params.department} course_slug={params.course_slug} />;
}
