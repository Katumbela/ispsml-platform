import type { ICourse } from "@/infra/interfaces/course.interface"

interface ShortDescCourseProps {
  course: ICourse
}

export function ShortDescCourse({ course }: ShortDescCourseProps) {
  return (
    <div className="container mt-[10vh]">
      <div className="flex">
        <div className="w-full">
          <h1 className='text-2xl font-bold'>{course.course}</h1>
          <p className='text-slate-500'>{course.short_detail}</p>
          <p className='text-slate-500'>Duração: <b>{course.duration} anos</b></p>
          <p className='text-slate-500'>Turnos:
            <span className=" text-primary ms-3">
              {course.shift?.morning ? 'Manhã' : ''}
            </span>
            <span className=" text-primary ms-3">
              {course.shift?.afternoon ? 'Tarde' : ''}
            </span>
            <span className="text-primary ms-3">
              {course.shift?.evening ? 'Noite' : ''}
            </span>
          </p>
        </div>
        <div className="w-full">
          {course.long_description}
        </div>
      </div>
    </div>
  )
}