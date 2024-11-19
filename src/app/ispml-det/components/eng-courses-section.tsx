import { coursesData } from '@/infra/data/courses-data';
import { CardCourseComponent } from './card-course-component';
import { departments } from '@/infra/global.vars';

export function EngCoursesSection() {
	return (
		<div className="containers courses-section">
			<h1 className="text-3xl font-bold">Cursos de Engenharia</h1>
			<br />
			<br />

			<div className="grid flex-wrap  grid-cols-12 gap-1.5 2xl:gap-6">
				{coursesData.engineering.courses.map((course, i) => (
					<CardCourseComponent course={course} department={departments.ENGINEERING_DEPARTMENT} key={i} />
				))}
			</div>
		</div>
	);
}
