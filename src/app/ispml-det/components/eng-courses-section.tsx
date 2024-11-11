import { coursesData } from "@/infra/data/courses-data";
import { CardCourseComponent } from "./card-course-component";



export function EngCoursesSection() {

  return (
    <div className="container courses-section">
      <h1 className="text-3xl font-bold">
        Cursos de Engenharia
      </h1>
      <br />
      <br />

      <div className="grid flex-wrap  grid-cols-12 gap-1.5">
        {
          coursesData.map((course, i) => (
            <CardCourseComponent course={course} key={i} />
          ))
        }
      </div>
    </div>

  )
}