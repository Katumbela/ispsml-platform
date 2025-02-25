/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateMetadata } from '@/infra/metadata';
import CourseDetailsPage from './course-details-slug.tsx';
import { departments } from '../../../../infra/global.vars';
import { getDepartments } from '@/services/dep.service';
import { getAllCourses } from '@/services/course.service';

export const metadata = generateMetadata({
	title: 'Ver Detalhes do Curso | ISPSML',
	description: '',
});

export async function generateStaticParams() {
	// const departments = [
	// 	{ id: 1, slug: 'informatica' },
	// 	{ id: 2, slug: 'gestao' },
	// 	{ id: 3, slug: 'medicina' },
	// 	{ id: 4, slug: 'direito' },
	// 	{ id: 5, slug: 'engenharia' },
	// ];

	const departments = await getDepartments();

	// const courses = [
	// 	{ id: 101, slug: 'programacao', departmentId: 1 },
	// 	{ id: 102, slug: 'redes', departmentId: 1 },
	// 	{ id: 103, slug: 'ciberseguranca', departmentId: 1 },
	// 	{ id: 104, slug: 'administracao', departmentId: 2 },
	// 	{ id: 105, slug: 'contabilidade', departmentId: 2 },
	// 	{ id: 106, slug: 'medicina-geral', departmentId: 3 },
	// 	{ id: 107, slug: 'cirurgia', departmentId: 3 },
	// 	{ id: 108, slug: 'direito-penal', departmentId: 4 },
	// 	{ id: 109, slug: 'direito-civil', departmentId: 4 },
	// 	{ id: 110, slug: 'mecanica', departmentId: 5 },
	// ];

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
