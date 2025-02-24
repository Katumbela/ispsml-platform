/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateMetadata } from '@/infra/metadata';
import { getDepartments } from '@/services/dep.service';
import CourseDetailsPage from './course-details-slug.tsx';
import { getAllCourses } from '@/services/course.service';

export const metadata = generateMetadata({
	title: 'Ver Detalhes do Curso | ISPSML',
	description: '',
});

export async function generateStaticParams() {
	const deps = await getDepartments();
	const courses = await getAllCourses();

	const paths = [];
	for (const dep of deps) {
		const depCourses = courses.filter(course => course.department?.id === dep.id);
		for (const course of depCourses) {
			paths.push({
				dep_slug: dep.slug,
				course_slug: course.slug
			});
		}
	}
	return paths;
}

export default function Page({ params }: any) {
	return <CourseDetailsPage dep_slug={params.dep_slug} course_slug={params.course_slug} />;
}
