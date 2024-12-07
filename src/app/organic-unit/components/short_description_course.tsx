import type { ICourse } from "@/infra/interfaces/course.interface"

interface ShortDescCourseProps {
  course: ICourse
}

export function ShortDescCourse({ course }: ShortDescCourseProps) {
  return (
    <div className="containers mt-[10vh]">
      <div className="flex">
        <div className="w-full">
          <h1 className='text-2xl font-semibold'>{course.course}</h1>
          <p className='text-slate-500'>{course.short_detail}</p>
          <p className='text-slate-500'>Duração: <b>{course.duration} anos</b></p>
        </div>
        <div className="w-full">
          {course.long_description}
        </div>
      </div>
    </div>
  )
}